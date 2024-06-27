import { Dropdown } from "flowbite-react";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";
import InventoryCard from "../../components/inventoryCard";
import LoaderCard from "../../components/loaderCard";
import ModalCustom from "../../components/modal";
import NavbarComponent from "../../components/navbar";
import { useGetPersonalAddsQuery } from "../../redux/api/inventoryAdd";
import { useMyPersonalAddsQuery } from "../../redux/api/truckadd";
import LoaderCardSkeleton from "../../shimmer/loaders";
import { getToken } from "../../utils/currentUser";
import { PATH } from "../../utils/path";
import InventoryAdd from "../home/inventoryAdd";
import PostAdd from "../home/postAdd";

const ADDPOSTLABEL = ["Loader", "Inventory"];

function MyAdds() {
  const token = getToken();
  const [addName, setAddName] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const { data, isLoading } = useGetPersonalAddsQuery(token);
  const { data: LoaderAdds } = useMyPersonalAddsQuery(token);

  const navigate = useNavigate();
  const handleInventoryDetail = (id) => {
    navigate(`${PATH.SHOWINVENTORYDETAIL}/${id}`);
  };

  const handleLoaderDetail = (id) => {
    navigate(`${PATH.SHOWLOADERDETAIL}/${id}`);
  };
  const handlePostAdd = (name) => {
    setAddName(name);
    setOpenModal(true);
  };
  return (
    <div>
      <ModalCustom open={openModal} setOpen={setOpenModal}>
        <p className="text-center text-2xl font-bold">Post an Add</p>
        {addName === "Loader" ? (
          <PostAdd closeModel={() => setOpenModal(false)} />
        ) : (
          <InventoryAdd closeModel={() => setOpenModal(false)} />
        )}
      </ModalCustom>
      <NavbarComponent />
      <div className="m-4 float-end">
        <Dropdown label="Post An Add">
          {ADDPOSTLABEL?.map((obj, i) => (
            <Dropdown.Item onClick={() => handlePostAdd(obj)} key={i}>
              {obj}
            </Dropdown.Item>
          ))}
        </Dropdown>
      </div>

      <p className="m-4 text-2xl font-inter">Inventory Adds</p>

      <div className="grid md:grid-cols-2  grid-cols-1 gap-4  py-4 px-2 flex-wrap w-full">
        {isLoading ? (
          Array.from({ length: 3 }).map((_, i) => (
            <LoaderCardSkeleton key={i} />
          ))
        ) : data?.data.length === 0 ? (
          <p className="font-inter text-xl ">
            you have't post any Inventory Add
          </p>
        ) : (
          data?.data?.map((obj, i) => (
            <InventoryCard
              data={obj}
              key={i}
              onClick={() => handleInventoryDetail(obj?._id)}
            />
          ))
        )}
      </div>

      <p className="m-4 text-2xl font-inter">Loader Adds</p>

      <div className="grid md:grid-cols-2  grid-cols-1 gap-4 py-4 px-2 flex-wrap w-full">
        {isLoading ? (
          Array.from({ length: 3 }).map((_, i) => (
            <LoaderCardSkeleton key={i} />
          ))
        ) : LoaderAdds?.data.length === 0 ? (
          <p className="font-inter text-xl ">you have't post any Loader Add</p>
        ) : (
          LoaderAdds?.data?.map((obj, i) => (
            <LoaderCard
              data={obj}
              key={i}
              onClick={() => handleLoaderDetail(obj?._id)}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default MyAdds;
