import { Container, Input } from "./styles";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UsersContext } from "../../providers/users";

const Header = () => {
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate("/");
  };

  const { setUserSearch } = useContext(UsersContext);
  return (
    <Container>
      <img
        onClick={redirectToHome}
        src="https://www.projetodraft.com/wp-content/uploads/2020/04/logo-dialog.jpg"
        alt="dialog logo"
      />
      <Input>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setUserSearch(e.target.value)}
        />
        <button>
          <BsSearch />
        </button>
      </Input>
    </Container>
  );
};

export default Header;
