import React from 'react';
import { useNavigate } from 'react-router-dom';
import InventoryCard from '../../../components/inventoryCard';
import { useGetPersonalAddsQuery } from '../../../redux/api/inventoryAdd';
import LoaderCardSkeleton from '../../../shimmer/loaders';
import { PATH } from '../../../utils/path';

function InventoryHolderPersonalAdds() {
  const { data, isLoading } = useGetPersonalAddsQuery();
  const navigate = useNavigate();
  const handleInventoryDetail = (id) => {
    navigate(`${PATH.SHOWINVENTORYDETAIL}/${id}`);
  };

  return (
    <div>
      <p className='text-center m-4 text-2xl'>Posted Adds</p>

      <div className='grid 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 justify-items-center py-4 px-2 flex-wrap'>
        {isLoading
          ? Array.from({ length: 3 }).map((_, i) => (
              <LoaderCardSkeleton key={i} />
            ))
          : data?.data.map((obj, i) => (
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

export default InventoryHolderPersonalAdds;
