import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link as={Link} to="/">
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} to="/breed">
          Breeds
        </Navbar.Link>
        <Navbar.Link as={Link} to="/favorite">
          Favorite
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
