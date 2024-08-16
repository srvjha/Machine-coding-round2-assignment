import React from 'react';

const SkeletonLoader = () => {
  return (
    <div className='py-2 bg-[#B6B3F3] max-w-xs mx-auto mt-8 mb-4 rounded-xl border-[8px] border-[#B6B3F3] relative'>
      <div className='flex justify-between items-center p-4'>
        <div className='w-8 h-8 bg-gray-300 rounded-full'></div>
        <div className='w-32 h-4 bg-gray-300 rounded'></div>
        <div className='w-8 h-8 bg-gray-300 rounded-full'></div>
      </div>

      <div className='flex justify-center mt-16'>
        <div className='w-28 h-28 bg-gray-300 rounded-full'></div>
      </div>

      <div className="text-center mt-4 ml-[70px]">
        <div className='w-40 h-5 bg-gray-300 rounded mb-2'></div>
        <div className='w-24 h-4 bg-gray-300 rounded'></div>
      </div>

      <hr className='border-[#00000014] border-[1px] mx-4 my-4'/>

      <div className='flex justify-around mt-4'>
        <div className='bg-gray-300 w-8 h-8 rounded-full'></div>
        <div className='bg-gray-300 w-8 h-8 rounded-full'></div>
      </div>

      <hr className='border-[#00000014] border-[1px] mx-4 my-4'/>

      <div className='p-4'>
        <div className='w-32 h-4 bg-gray-300 rounded mb-2'></div>
        <div className='w-24 h-4 bg-gray-300 rounded mb-2'></div>
        <div className='w-28 h-4 bg-gray-300 rounded mb-2'></div>
        <div className='w-20 h-4 bg-gray-300 rounded'></div>
      </div>

     
    </div>
  );
};

export default SkeletonLoader;
