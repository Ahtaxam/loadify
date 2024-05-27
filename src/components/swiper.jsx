import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import TruckAddCard from "./truckAddCard";
import InventoryAddCard from "./inventoryAddCard";

function SwiperComponent({ data, text, type }) {
  return (
    <>
      <p className="text-2xl pl-8">{text}</p>
      <div className=" p-8">
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={5}
          navigation={true}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {data.map((data, index) => (
            <SwiperSlide key={index}>
              {type === "truck" ? (
                <TruckAddCard data={data} />
              ) : (
                <InventoryAddCard data={data} />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default SwiperComponent;
