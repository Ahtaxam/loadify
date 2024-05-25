import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
import { Navbar } from "flowbite-react";

import { Link } from "react-router-dom";

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
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="#">
          About
        </Navbar.Link>
        <Navbar.Link href="#">Login</Navbar.Link>
        <Navbar.Link href="#">Signup</Navbar.Link>
        <Navbar.Link href="#">Whyus</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
