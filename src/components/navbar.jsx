import React, { useState } from 'react';
import Logo from '../assets/images/logo.png';
import { Navbar } from 'flowbite-react';

import { Link } from 'react-router-dom';
import { PATH } from '../utils/path';
import { getCurrentUser, getUserRole } from '../utils/currentUser';

function NavbarComponent() {
  const role = getUserRole();
  const user = getCurrentUser();
  return (
    <Navbar fluid rounded className='shadow-2xl'>
      <Navbar.Brand>
        <img src={Logo} className='mr-3 h-6 sm:h-9' alt='Loadify Logo' />
        <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
          Loadify
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Link to={PATH.HOME}>Home</Link>
        <Link as={Link} href='#'>
          About
        </Link>
        <Link to='#'>Whyus</Link>
        {role === 'Truck Loader' ? (
          <Link to={PATH.LOADERADDS}>Inventories</Link>
        ) : role === 'Inventory' ? (
          <Link to={PATH.INVENTORYADD}>Loaders</Link>
        ) : (
          ''
        )}
        <Link to={PATH.USERSHOME}>Post Add</Link>
        {!user && (
          <>
            {' '}
            <Link to={PATH.LOGIN}>Login</Link>
            <Link to={PATH.SIGNUP}>Signup</Link>
          </>
        )}
        
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
