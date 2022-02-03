import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import FriendsList from "../../components/friendsList";
import UserInfo from "../../components/userInfo";
import { UsersContext } from "../../providers/users";
import { FriendsTitle } from "./style";
const FriendsDetails = () => {
  const { userId } = useParams();
  const { allFriends, userSearch } = useContext(UsersContext);
  const FriendsDifferentFromDetails = allFriends.filter(
    (friend) =>
      friend.id !== Number(userId) &&
      friend.name.toLowerCase().includes(userSearch.toLowerCase())
  );

  return (
    <>
      <UserInfo userId={Number(userId)} />
      <FriendsTitle>Friends:</FriendsTitle>
      <FriendsList friends={FriendsDifferentFromDetails} />
    </>
  );
};
export default FriendsDetails;
