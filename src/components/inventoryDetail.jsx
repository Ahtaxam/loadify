import React from 'react';
import ImageCarousel from './imageCarousel';
import Button from './button';
import { useParams } from 'react-router-dom';
import { useGetSingleInventoryQuery } from '../redux/api/inventoryAdd';
import SpinnerComponent from './spinner';

function InventoryDetail() {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleInventoryQuery(id);
  const {
    inventoryType = '',
    inventorySize = '',
    inventoryWeight = 0,
    ownerName = '',
    phoneNumber = '',
    location = '',
    countryName = '',
    stateName = '',
    city = '',
    inventoryPicture = [],
  } = data?.data || {};

  return (
    <>
      {isLoading ? (
        <SpinnerComponent />
      ) : (
        <div className='shadow-xl w-[80%] mx-auto p-4 mt-8'>
          <p className='text-center text-xl font-bold'>Inventory Detail</p>
          <div className='flex justify-end'>
            <Button className='bg-navy w-[100px] hover:bg-white hover:text-black hover:border-2 hover:border-dotted'>
              Chat
            </Button>
          </div>
          <div className='flex justify-between flex-wrap p-4'>
            <p>
              <span className='font-bold'>Type: </span> {inventoryType}
            </p>
            <p>
              <span className='font-bold'>Size: </span> {inventorySize}
            </p>
            <p>
              <span className='font-bold'>Weight: </span> {inventoryWeight}
            </p>
          </div>

          <div className='flex justify-between flex-wrap p-4'>
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

          <div className='flex justify-between flex-wrap p-4'>
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
          <ImageCarousel data={inventoryPicture} />
        </div>
      )}
    </>
  );
}

export default InventoryDetail;
