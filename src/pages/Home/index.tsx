import { useContext } from "react";
import FriendsList from "../../components/friendsList";
import { UsersContext } from "../../providers/users";

const Home = () => {
  const { allFriends } = useContext(UsersContext);

  return <FriendsList friends={allFriends} />;
};
export default Home;
