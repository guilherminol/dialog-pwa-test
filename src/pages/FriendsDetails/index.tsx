import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import FriendsList from "../../components/friendsList";
import UserInfo from "../../components/userInfo";
import { UsersContext } from "../../providers/users";

const FriendsDetails = () => {
  const { userId } = useParams();
  const { getAllUsersDetailPage } = useContext(UsersContext);
  const FriendsDifferentFromDetails = getAllUsersDetailPage(Number(userId));

  useEffect(() => {
    console.log(FriendsDifferentFromDetails);
  }, [FriendsDifferentFromDetails]);

  return (
    <>
      <UserInfo userId={Number(userId)} />

      {FriendsDifferentFromDetails && (
        <FriendsList friends={FriendsDifferentFromDetails} />
      )}
    </>
  );
};
export default FriendsDetails;
