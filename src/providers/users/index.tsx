import { createContext, useState, useEffect, ReactNode } from "react";
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
}
interface UsersProviderProps {
  children: ReactNode;
}

export const UsersContext = createContext({} as UserProviderData);

export const UsersProvider = ({ children }: UsersProviderProps) => {
  const [allFriends, setAllFriends] = useState<User[]>([]);
  const [user, setUser] = useState<User>();

  const getAllUsers = () => {
    axios.get("/users").then((res) => {
      const friends = res.data;
      setAllFriends(friends);
    });
  };

  const getAllUsersDetailPage = (id: number) => {
    const friendsDifferentFromUser = allFriends.filter(
      (friend) => friend.id !== id
    );

    return friendsDifferentFromUser;
  };

  const getOneUser = (userId: number) => {
    axios.get(`/users/${userId}`).then((response) => {
      setUser(response.data);
    });
  };

  useEffect(() => {
    getAllUsers();
  }, [user]);

  return (
    <UsersContext.Provider
      value={{
        allFriends,
        getOneUser,
        user,
        getAllUsersDetailPage,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
