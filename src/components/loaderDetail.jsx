import React from 'react';
import ImageCarousel from './imageCarousel';
import Button from './button';
import { useParams } from 'react-router-dom';
import SpinnerComponent from './spinner';
import {  useGetSingleLoaderQuery } from '../redux/api/truckadd';

function LoaderDetail() {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleLoaderQuery(id);
  const {
    vehicleName = '',
    vehicleModel = '',
    vehicleNumber = 0,
    ownerName = '',
    phoneNumber = '',
    location = '',
    countryName = '',
    stateName = '',
    city = '',
    vehiclePicture = [],
  } = data?.data || {};

  return (
    <>
      {isLoading ? (
        <SpinnerComponent />
      ) : (
        <div className='shadow-xl w-[80%] mx-auto p-4 mt-8'>
          <p className='text-center text-xl font-bold'>Loader Detail</p>
          <div className='flex justify-end gap-4'>
            <Button className='bg-navy w-[100px] hover:bg-[hsl(0,100%,4%)] hover:text-white '>
              Chat
            </Button>
            <Button className='bg-navy w-[100px] hover:bg-[hsl(0,100%,4%)] hover:text-white '>
              Hire
            </Button>
          </div>
          <div className='flex justify-between flex-wrap p-4 gap-4'>
            <p>
              <span className='font-bold'>Vehicle Name: </span> {vehicleName}
            </p>
            <p>
              <span className='font-bold'>Model: </span> {vehicleModel}
            </p>
            <p>
              <span className='font-bold'>Number: </span> {vehicleNumber}
            </p>
          </div>

          <div className='flex justify-between flex-wrap p-4 gap-4'>
            <p>
              <span className='font-bold'>Owner Name: </span> {ownerName}
            </p>
            <p>
              <span className='font-bold'>Phone Number: </span> {phoneNumber}
            </p>
          </div>
          <p className='p-4'>
            <span className='font-bold'>Location: </span>
            {location}
          </p>

          <div className='flex justify-between flex-wrap p-4 gap-4'>
            <p>
              <span className='font-bold'>Country: </span> {countryName}
            </p>
            <p>
              <span className='font-bold'>State: </span> {stateName}
            </p>
            <p>
              <span className='font-bold'>City: </span> {city}
            </p>
          </div>
          <p className='p-4 font-bold'>Inventory Images</p>
          <ImageCarousel data={vehiclePicture} />
        </div>
      )}
    </>
  );
}

export default LoaderDetail;
