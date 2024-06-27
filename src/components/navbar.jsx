import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
import { Navbar, Dropdown, Avatar, Button } from "flowbite-react";

import { Link, useNavigate } from "react-router-dom";
import { PATH } from "../utils/path";
import {
  getCurrentUser,
  getUserRole,
  logoutCurrentUser,
} from "../utils/currentUser";

const NAVBARITEMS = [
  {
    name: "Home",
    path: PATH.HOME,
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contactus",
    path: PATH.MYADDS,
  },
  {
    name: "My Adds",
    path: PATH.MYADDS,
  },
  {
    name: "Active Order",
    path: "/activeorder",
  },
  {
    name: "Messages",
    path: "/chat",
  },
];

function NavbarComponent() {
  const role = getUserRole();
  const user = getCurrentUser();
  const navigate = useNavigate();

  const handleSignOut = () => {
    logoutCurrentUser();
    navigate(PATH.HOME);
  };
  return (
    <Navbar fluid rounded className="shadow-2xl p-4">
      <Navbar.Brand>
        <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Loadify Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Loadify
        </span>
      </Navbar.Brand>
      {!user && <Navbar.Toggle />}
      {user && (
        <>
          <div className="flex md:order-2 gap-4 items-center ">
            <Dropdown
              arrowIcon={false}
              inline
              label={<Avatar alt="User settings" rounded />}
            >
              <Dropdown.Header>
                <span className="block text-sm mb-2">
                  {user?.firstName} {user?.lastName}{" "}
                </span>
                <span className="block truncate text-sm font-medium">
                  {user?.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Divider />
              {/* <span className='text-sm font-medium ml-4'>Role: {role}</span> */}

              <Dropdown.Divider />
              <Dropdown.Item className="text-red-900" onClick={handleSignOut}>
                Sign out
              </Dropdown.Item>
            </Dropdown>

            <Navbar.Toggle />
          </div>
        </>
      )}
      <Navbar.Collapse>
        <div className="flex flex-col  items-center md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6">
          <Link
            to={PATH.HOME}
            className="underline-link md:border-0 md:w-fit md:p-0  border-2  w-full p-2 rounded text-white "
          >
            Home
          </Link>
          <Link
            to={PATH.ABOUTUS}
            className="underline-link md:border-0 md:w-fit md:p-0 border-2  w-full p-2 rounded text-white "
          >
            About
          </Link>
          <Link
            to={PATH.CONTACTUS}
            className="underline-link md:border-0 md:w-fit md:p-0  border-2  w-full p-2 rounded text-white "
          >
            Contact us
          </Link>
          {!user && (
            <>
              {" "}
              <Link to={PATH.LOGIN} className="md:w-fit w-full">
                <button className="bg-[#00215E] text-white p-2 rounded w-full">
                  Login
                </button>
              </Link>
              <Link to={PATH.SIGNUP} className="md:w-fit w-full">
                <button className="bg-[#00215E] text-white p-2 rounded w-full">
                  Signup
                </button>
              </Link>
            </>
          )}

          {user && (
            <>
              <Link
                to={PATH.MYADDS}
                className="underline-link md:border-0 md:w-fit md:p-0  border-2  w-full p-2 rounded text-white "
              >
                My Adds
              </Link>
              <Link
                to={PATH.ACTIVEADDS}
                className="underline-link md:border-0 md:w-fit md:p-0  border-2  w-full p-2 rounded text-white "
              >
                Active Order
              </Link>
              <Link
                to={PATH.CHAT}
                className="underline-link md:border-0 md:w-fit md:p-0  border-2  w-full p-2 rounded text-white "
              >
                Messages
              </Link>
            </>
          )}
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
