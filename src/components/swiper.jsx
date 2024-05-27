import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import TruckAddCard from './truckAddCard';
import InventoryAddCard from './inventoryAddCard';

function SwiperComponent({ data, text, type }) {
  return (
    <>
      <p className='text-2xl pl-8'>{text}</p>
      <div className=' p-8'>
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          navigation={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          {data.map((data, index) => (
            <SwiperSlide key={index}>
              {type === 'truck' ? (
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
