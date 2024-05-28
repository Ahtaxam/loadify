import React from 'react';
import AddsScreenHeader from '../../components/addScreenHeader';
import Header from '../../components/header';
import HeaderCard from '../../components/headerCard';
import LoaderCard from '../../components/loaderCard';
import Typography from '../../components/typography';
import { useGetAllLoadersQuery } from '../../redux/api/truckadd';
import LoaderCardSkeleton from '../../shimmer/loaders';

function InventoryHolder() {
  const { data, isLoading } = useGetAllLoadersQuery();
  const handleLoaderDetail = () => {
    console.log('CLICKED');
  };
  return (
    <div>
      <AddsScreenHeader />
      <Typography className='m-4'>All Loaders</Typography>

      <div className='grid 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 justify-items-center py-4 px-2 flex-wrap'>
        {isLoading
          ? Array.from({ length: 3 }).map((_, i) => (
              <LoaderCardSkeleton key={i} />
            ))
          : data?.data.map((obj, i) => (
              <LoaderCard data={obj} key={i} onClick={handleLoaderDetail} />
            ))}
      </div>
    </div>
  );
}

export default InventoryHolder;
