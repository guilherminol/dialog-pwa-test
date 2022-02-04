import { Container, Input } from "./styles";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UsersContext } from "../../providers/users";

const Header = () => {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate("/");
  };

  useEffect(() => {
    if (!search) {
      setUserSearch("");
    }
  }, [search]);

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
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => setUserSearch(search)}>
          <BsSearch />
        </button>
      </Input>
    </Container>
  );
};

export default Header;
