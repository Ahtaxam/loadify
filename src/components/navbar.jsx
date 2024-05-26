import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
import { Navbar } from "flowbite-react";

import { Link } from "react-router-dom";
import { PATH } from "../utils/path";

function NavbarComponent() {
  return (
    <Navbar fluid rounded className="shadow-2xl">
      <Navbar.Brand>
        <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Loadify Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Loadify
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Link to={PATH.HOME}>
          Home
        </Link>
        <Link as={Link} href="#">
          About
        </Link>
        <Link to={PATH.LOGIN}>Login</Link>
        <Link to={PATH.SIGNUP}>Signup</Link>
        <Link to="#">Whyus</Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
