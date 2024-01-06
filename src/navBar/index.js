import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./navbarElements";
import { Search } from "@material-ui/icons";
import Logo from "../images/logo3.png";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <img src={Logo} alt="Logo" />

        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/products" activeStyle>
            Products
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>

          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
          <NavLink to="/search" activeStyle>
            <Search />
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/login">Login/SignUp</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
