import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LazyLoadImage from '../helper/LazyLoadImage';

const CatListing = () => {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [temperament,setTemperament] = useState([])

  const fetchCats = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.freeapi.app/api/v1/public/cats?page=${page}&limit=5`);
      console.log(response)
      setCats(prevCats => [...prevCats, ...response.data.data.data]); // Append new cats to the existing ones
    } catch (error) {
      console.error('Error fetching cats:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCats();
  }, [page]);

  const handleScroll = (e) => {
    const { scrollLeft, scrollWidth, clientWidth } = e.target;
    if (scrollLeft + clientWidth >= scrollWidth - 5) {
      setPage(prevPage => prevPage + 1); // Load next page when scrolled to the end
    }
  };

  

  return (
    <div className="overflow-x-auto mt-1 flex space-x-4 p-4" onScroll={handleScroll}>
      {cats.map(cat => (
        <div key={cat.id} className="bg-white shadow-lg rounded-lg h-[603px] w-[340px] flex-shrink-0">
          <LazyLoadImage src={cat.image} alt={cat.name} />
          <div className=' p-4'>
          <h2 className="dm-sans-cats-title">{cat.name}</h2>
          <p className='dm-sans-cats-desc'>{cat.description}</p>
          <p className='dm-sans-cats-origin mt-2'>Origin <span className='ml-14 not-italic'>{cat.origin}</span></p>
          <p className='dm-sans-cats-origin mt-2'>Temperament</p>
          <div className='flex flex-row mt-2 space-x-1 dm-sans-cats-origin'>
            {
                cat.temperament.split(",").slice(0,4).map((temp, index) => (
                <div key={index} className='bg-gray-300 p-2 rounded-full'>
                    {temp.trim()}
                </div>
                ))
            }
            </div>
            <p className='dm-sans-cats-origin mt-2'>Life Span <span className='ml-14 not-italic'>{cat.life_span} years</span></p>
          
          </div>
          <a href={cat.wikipedia_url}>
          <div className='dm-sans-cats-origin mt-2 cursor-pointer ml-4  text-[#7D99E2]'><span className=' not-italic font-[400]'>Learn</span></div>
          </a>
        </div>
      ))}
      {loading && <div className="flex items-center justify-center w-[300px]">Loading...</div>}
    </div>
  );
};

export default CatListing;
