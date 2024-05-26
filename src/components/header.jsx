import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { Avatar, Dropdown, Modal, Navbar } from "flowbite-react";
import { PATH } from "../utils/path";
import Button from "./button";
import { useState } from "react";
import ModalCustom from "./modal";
import PostAdd from "../screens/home/postAdd";
import InventoryAdd from "../screens/home/inventoryAdd";

function Header() {
  const role = "g";
  const [openModal, setOpenModal] = useState(false);
  const handleRegisterVehicle = () => {
    setOpenModal(true);
  };

  const handlePostingAdd = () => {
    setOpenModal(true);
  };
  return (
    <>
      <ModalCustom open={openModal} setOpen={setOpenModal}>
        <p className="text-center text-2xl font-bold">Post an Add</p>
        {role === "Truck Loader" ? <PostAdd /> : <InventoryAdd />}
      </ModalCustom>
      <Navbar fluid rounded>
        <Link to={PATH.HOME} className="flex">
          <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Loadify Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Loadify
          </span>
        </Link>
        <div className="flex md:order-2 gap-4 items-center">
          {role === "Truck Loader" ? (
            <Button
              className="bg-navy hover:bg-purple-800"
              onClick={handleRegisterVehicle}
            >
              Post Truck Add
            </Button>
          ) : (
            <Button
              className="bg-navy hover:bg-purple-800"
              onClick={handlePostingAdd}
            >
              Post Inventory Add
            </Button>
          )}

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
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
