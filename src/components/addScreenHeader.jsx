import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { PATH } from "../utils/path";

function AddsScreenHeader() {
  return (
    <>
      <Navbar fluid rounded className="shadow-lg">
        <Link to={PATH.HOME} className="flex">
          <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Loadify Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Loadify
          </span>
        </Link>
        <div className="flex md:order-2 gap-4 items-center">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                //   img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>

            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Link to={PATH.HOME}>Home</Link>
          <Link to="#">About</Link>
          <Link to="#">Contact</Link>
          <Link to={PATH.USERSHOME}>Publish Add</Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default AddsScreenHeader;
