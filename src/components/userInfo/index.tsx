import { useContext, useEffect } from "react";
import { UsersContext } from "../../providers/users";
import { UserContainer, UserInfoText } from "./style";
interface userInfoProps {
  userId: number;
}
const UserInfo = ({ userId }: userInfoProps) => {
  const { getAllUsersDetailPage, getOneUser, user } = useContext(UsersContext);
  useEffect(() => {
    console.log(userId);
    getOneUser(userId);
    getAllUsersDetailPage(userId);
  }, [userId]);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <UserContainer>
      <img src={user?.profilePic} alt={user?.name} />
      <UserInfoText>
        <p>
          <b>Name:</b> {user?.name}
        </p>
        <p>
          <b>Age:</b> {user?.age}
        </p>
        <p>
          <b>Email:</b> {user?.email}
        </p>
      </UserInfoText>
    </UserContainer>
  );
};
export default UserInfo;
