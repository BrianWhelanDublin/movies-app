import { Link, useLocation } from "react-router-dom";

import { Logo, NavItem, NavList, StyledNav } from "./Nav.styles";

const Nav: React.FC = () => {
  const location = useLocation();

  return (
    <StyledNav>
      <Logo>
        <Link to={"/"}>MDB</Link>
      </Logo>
      <NavList>
        <NavItem className={location.pathname === "/" ? "current" : ""}>
          <Link to={"/"}>Home</Link>
        </NavItem>
        <NavItem className={location.pathname === "/movies" ? "current" : ""}>
          <Link to={"/movies"}>Movies</Link>
        </NavItem>
        <NavItem className={location.pathname === "/series" ? "current" : ""}>
          <Link to={"/series"}>Series</Link>
        </NavItem>
      </NavList>
    </StyledNav>
  );
};

export default Nav;
