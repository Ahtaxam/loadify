import React, { useState } from 'react';
import Logo from '../assets/images/logo.png';
import { Navbar, Dropdown, Avatar } from 'flowbite-react';

import { Link, useNavigate } from 'react-router-dom';
import { PATH } from '../utils/path';
import {
  getCurrentUser,
  getUserRole,
  logoutCurrentUser,
} from '../utils/currentUser';

function NavbarComponent() {
  const role = getUserRole();
  const user = getCurrentUser();
  const navigate = useNavigate();

  const handleSignOut = () => {
    logoutCurrentUser();
    navigate(PATH.HOME);
  };
  return (
    <Navbar fluid rounded className='shadow-2xl'>
      <Navbar.Brand>
        <img src={Logo} className='mr-3 h-6 sm:h-9' alt='Loadify Logo' />
        <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
          Loadify
        </span>
      </Navbar.Brand>
     {!user && <Navbar.Toggle />}
      {user && (
        <div className='flex md:order-2 gap-4 items-center'>
          <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar alt='User settings' rounded />}
          >
            <Dropdown.Header>
              <span className='block text-sm mb-2'>
                {user?.firstName} {user?.lastName}{' '}
              </span>
              <span className='block truncate text-sm font-medium'>
                {user?.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Divider />
            <span className='text-sm font-medium ml-4'>Role: {role}</span>

            <Dropdown.Divider />
            <Dropdown.Item className='text-red-900' onClick={handleSignOut}>
              Sign out
            </Dropdown.Item>
          </Dropdown>

          <Navbar.Toggle />
        </div>
      )}
      <Navbar.Collapse>
        <Link to={PATH.HOME}>Home</Link>
        <Link as={Link} href='#'>
          About
        </Link>
        <Link to='#'>Contactus</Link>
        {!user && (
          <>
            {' '}
            <Link to={PATH.LOGIN}>Login</Link>
            <Link to={PATH.SIGNUP}>Signup</Link>
          </>
        )}

        {user && (
          <>
            <Link to={PATH.HOME}>My Post</Link>
            <Link as={Link} href='#'>
              Active Order
            </Link>
            <Link to='#'>Messages</Link>
          </>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
