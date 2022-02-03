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
    console.log(friends);
  }, [friends]);

  useEffect(() => {
    console.log(allFriends);
  }, [allFriends]);

  useEffect(() => {
    if (allFriends) {
      console.log(allFriends);
      const filteredFriends = allFriends?.filter((friend) =>
        friend.name.includes(userSearch)
      );
      setFriends(filteredFriends);
    }
  }, [allFriends]);

  return <FriendsList friends={friends} />;
};
export default Home;
