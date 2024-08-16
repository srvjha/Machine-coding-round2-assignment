import React, { useState, useEffect } from 'react';

const LazyLoadImage = ({ src, alt }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setLoading(false);
    };
    img.onerror = () => {
      setImageSrc(null); // Keep the skeleton if the image fails to load
      setLoading(false);
    };
  }, [src]);

  return loading ? (
    <SkeletonLoader /> // Display skeleton while loading or when image fails
  ) : (
    <img src={imageSrc} alt={alt} className="w-full h-[300px] object-cover  rounded-t-md" />
  );
};

// SkeletonLoader Component
const SkeletonLoader = () => {
  return (
    <div className="w-full h-[200px] bg-gray-300 rounded-md animate-pulse flex items-center justify-center">
      <svg className="w-12 h-12 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7V3h4M21 7V3h-4M7 21h4M17 21h4v-4M7 3h10M3 21h4v-4M21 17h-4M17 7V3M7 7v10" />
      </svg>
    </div>
  );
};

export default LazyLoadImage;
