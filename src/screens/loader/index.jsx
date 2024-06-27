import React, { useState } from 'react';
import Header from '../../components/header';
import AddsScreenHeader from '../../components/addScreenHeader';
import { INVENTORYADD, INVENTORYOPTIONS } from '../../utils/data';
import InventoryCard from '../../components/inventoryCard';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../../utils/path';
import Typography from '../../components/typography';
import { useGetAllInventoryQuery } from '../../redux/api/inventoryAdd';
import LoaderCardSkeleton from '../../shimmer/loaders';
import NavbarComponent from '../../components/navbar';

function TruckLoader() {
  const { data, isLoading } = useGetAllInventoryQuery();
  const [cityFilter, setCityFilter] = useState('');
  const [countryFilter, setCountryFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const navigate = useNavigate();
  const handleInventoryDetail = (id) => {
    navigate(`${PATH.SHOWINVENTORYDETAIL}/${id}`);
  };

  const cities = [...new Set(data?.data.map((obj) => obj.city))];
  const types = [...new Set(data?.data.map((obj) => obj.inventoryType))];
  const countaries = [...new Set(data?.data.map((obj) => obj.countryName))];
  const filteredData = data?.data.filter((loader) => {
    return (
      (typeFilter ? loader.inventoryType === typeFilter : true) &&
      (cityFilter ? loader.city === cityFilter : true) &&
      (countryFilter ? loader.countryName === countryFilter : true)
    );
  });
  return (
    <div>
      <NavbarComponent />
      <Typography className='m-4'>All Inventories</Typography>

      <div className='flex gap-2 justify-center  p-4 flex-wrap'>
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className='p-2 border rounded'
        >
          <option value=''>All Types</option>
          {types?.map((obj) => (
            <option value={obj}>{obj}</option>
          ))}
        </select>

        <select
          value={cityFilter}
          onChange={(e) => setCityFilter(e.target.value)}
          className='p-2 border rounded'
        >
          <option value=''>All Cities</option>
          {cities?.map((obj) => (
            <option value={obj}>{obj}</option>
          ))}
        </select>

        <select
          value={countryFilter}
          onChange={(e) => setCountryFilter(e.target.value)}
          className='p-2 border rounded'
        >
          <option value=''>All Countaries</option>
          {countaries?.map((obj) => (
            <option value={obj}>{obj}</option>
          ))}
        </select>
      </div>

      <div className='grid 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4  p-4 flex-wrap '>
        {isLoading
          ? Array.from({ length: 3 }).map((_, i) => (
              <LoaderCardSkeleton key={i} />
            ))
          : filteredData?.map((obj, i) => (
              <InventoryCard
                data={obj}
                key={i}
                onClick={() => handleInventoryDetail(obj?._id)}
              />
            ))}
      </div>
    </div>
  );
}

export default TruckLoader;
