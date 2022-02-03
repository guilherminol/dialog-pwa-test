import FriendCard from "../friendCard";
import { FriendsListContainer } from "./style";

interface User {
  age: number;
  company: string;
  email: string;
  eyeColor: string;
  id: number;
  name: string;
  profilePic: string;
}

interface FriendsListProps {
  friends: User[];
}

const FriendsList = ({ friends }: FriendsListProps) => {
  return (
    <FriendsListContainer>
      {friends.map((person, index) => {
        return <FriendCard card={person} key={index}></FriendCard>;
      })}
    </FriendsListContainer>
  );
};
export default FriendsList;
