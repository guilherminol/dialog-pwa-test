import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import axios from "axios";

interface User {
  age: number;
  company: string;
  email: string;
  eyeColor: string;
  id: number;
  name: string;
  profilePic: string;
}

interface UserProviderData {
  allFriends: User[];
  user?: User | null;
  getOneUser: (userId: number) => void;
  getAllUsersDetailPage: (id: number) => User[];
  setUserSearch: Dispatch<SetStateAction<string>>;
  userSearch: string;
}
interface UsersProviderProps {
  children: ReactNode;
}

export const UsersContext = createContext({} as UserProviderData);

export const UsersProvider = ({ children }: UsersProviderProps) => {
  const [allFriends, setAllFriends] = useState<User[]>([]);
  const [user, setUser] = useState<User>();
  const [userSearch, setUserSearch] = useState("");

  const getAllUsers = async () => {
    const cacheData = await getSingleCacheData("Users", "/users");
    setAllFriends(cacheData);
    if (!cacheData) {
      axios
        .get("https://backend-dialog.herokuapp.com/users", {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
          proxy: {
            host: "104.236.174.88",
            port: 3128,
          },
        })
        .then((res) => {
          const friends = res.data;
          setAllFriends(friends);
          addDataIntoCache("Users", "/users", friends);
        });
    }
  };

  const getAllUsersDetailPage = (id: number) => {
    const friendsDifferentFromUser = allFriends.filter(
      (friend) => friend.id !== id
    );
    return friendsDifferentFromUser;
  };

  const getOneUser = async (userId: number) => {
    const cacheData = await getSingleCacheData("Users", `/users/${userId}`);
    setUser(cacheData);

    if (!cacheData) {
      axios
        .get(`https://backend-dialog.herokuapp.com/users/${userId}`)
        .then((response) => {
          const userData = response.data;
          setUser(userData);
          addDataIntoCache("Users", `/users/${userId}`, userData);
        });
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const addDataIntoCache = (
    cacheName: string,
    url: string,
    response: [] | User
  ) => {
    const data = new Response(JSON.stringify(response));
    if ("caches" in window) {
      caches.open(cacheName).then((cache) => {
        cache.put(url, data);
      });
    }
  };

  const getSingleCacheData = async (cacheName: string, url: string) => {
    if (typeof caches === "undefined") return false;

    const cacheStorage = await caches.open(cacheName);
    const cachedResponse = await cacheStorage.match(url);

    if (!cachedResponse || !cachedResponse.ok) {
      return null;
    }

    return cachedResponse?.json().then((item) => {
      return item;
    });
  };

  return (
    <UsersContext.Provider
      value={{
        allFriends,
        getOneUser,
        user,
        getAllUsersDetailPage,
        userSearch,
        setUserSearch,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
