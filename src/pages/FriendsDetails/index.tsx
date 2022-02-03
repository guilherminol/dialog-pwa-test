import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import FriendsList from "../../components/friendsList";
import UserInfo from "../../components/userInfo";
import { UsersContext } from "../../providers/users";

const FriendsDetails = () => {
  const { userId } = useParams();
  const { getAllUsersDetailPage } = useContext(UsersContext);
  const FriendsDifferentFromDetails = getAllUsersDetailPage(Number(userId));

  return (
    <>
      <UserInfo userId={Number(userId)} />
      <FriendsList friends={FriendsDifferentFromDetails} />
    </>
  );
};
export default FriendsDetails;
