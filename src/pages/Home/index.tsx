import { useContext, useEffect, useState } from "react";
import FriendsList from "../../components/friendsList";
import { UsersContext } from "../../providers/users";

interface User {
  age: number;
  company: string;
  email: string;
  eyeColor: string;
  id: number;
  name: string;
  profilePic: string;
}

const Home = () => {
  const { allFriends, userSearch } = useContext(UsersContext);
  const [friends, setFriends] = useState<User[] | undefined>();

  useEffect(() => {
    if (userSearch) {
      const filteredFriends = allFriends?.filter((friend) =>
        friend.name.toLowerCase().includes(userSearch.toLowerCase())
      );
      setFriends(filteredFriends);
    } else {
      setFriends(allFriends);
    }
  }, [userSearch, allFriends]);

  return <FriendsList friends={friends} />;
};
export default Home;
