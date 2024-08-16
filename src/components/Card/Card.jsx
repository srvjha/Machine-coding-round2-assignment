import React, { useEffect, useState,useCallback } from 'react';
import back from "../../assets/back-icon.png";
import refresh from '../../assets/refresh.png';
import axios from 'axios';
import { SlLocationPin } from "react-icons/sl";
import { IoCallOutline } from "react-icons/io5";
import Nationality from '../helper/Nationality';
import chai from "../../assets/chaicode.png";
import SkeletonLoader from '../helper/Skeleton';

const Card = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);
 

  const fetchUser = () => {
    axios
      .get('https://api.freeapi.app/api/v1/public/randomusers/user/random')
      .then(response => {
        setProfile(response.data.data); 
        setError(null);  
      })
      .catch(error => {
        console.error("Error Occurred While Fetching user details: ", error);
        setError('Failed to fetch profile. Please try again.');
      });
  };

  useEffect(() => {
   fetchUser();
  
  }, []);



  // console.log("Profile: ",profile)
  const dateConversion = (date)=>{
    let newDate = new Date(date); 
    let formattedDate = newDate.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
    });
    return formattedDate
  }

  if (error) {
    return <div>{error}</div>;  // Display error message
  }

  return (
    profile === null ? 
    <SkeletonLoader/>
    : (
      <div className='py-2 bg-[#B6B3F3] w-[358px] h-[610px] mt-[73px] ml-[591px] gap-0 rounded-xl border-[8px]'>
        <div className='flex flex-row justify-between p-4'>
          <div>
            <img src={back} alt="back" className='mt-[5px]' />
          </div>
          <div className='dm-serif-text-regular'>Profile Overview</div>
          <div>
            <img src={refresh} alt="refresh" className='cursor-pointer' onClick={()=>fetchUser()}  />
          </div>
        </div>
        
        <div className=' w-[24px] h-[17px] absolute ml-[212px] mt-2  rounded-[12px] bg-black'>
          <div className=' text-white text-[9px] text-center mt-[2px] mb-[2px]'>{profile.name.title}</div>
          </div>
        <div className="flex justify-center mt-4">
          <img src={profile.picture.large} alt="User" className='rounded-full h-[110px] w-[110px] shadow-2xl	' />
        </div>
        
        <div className="text-center mt-2">
          <h2 className="text-lg font-bold donegal-one-regular">{profile.name.first} {profile.name.last}</h2>
          <p className="dm-sans-unqiue mt-3">{profile.login.username}</p>          
        </div>

        <hr className='border-[#00000014] border-[1px] ml-[17px] mr-[17px] mt-[18px]'/>

        <div className=' flex flex-row justify-center mt-4' >
          <div className=' bg-black w-[22px] h-[22px]  rounded-full mr-[80px] flex flex-row'>
            <div><SlLocationPin className='text-white ml-[3px] mt-[3px] font-extrabold'  /></div>
            <div className='ml-[9px] mt-[5px] dm-sans-unqiue1 '>Location</div>
          </div>
          <div className=' bg-black w-[22px] h-[22px]  rounded-full flex flex-row'>
            <div><IoCallOutline className='text-white ml-[4px] text-sm  mt-1 font-extrabold' /></div>
            
          </div>
          <div className='ml-[9px] mt-[5px] dm-sans-unqiue1'>Call me</div>
        </div>

        <hr className='border-[#00000014] border-[1px] ml-[17px] mr-[17px] mt-[12px]'/>

        <div className=' flex flex-row ml-1 space-x-6 mr-1 -mt-2 w-[330px] bg-transparent p-5 absolute'>
          <div className='bg-transparent relative'>
          <div className='dm-sans-unqiue1'>City</div>
          <div className='dm-serif-text-regular-italic-match '>{profile.location.city}</div>

          <div className='dm-sans-unqiue1 mt-3'>Date of Birth</div>
          <div className='dm-serif-text-regular-italic-match '>{dateConversion(profile.dob.date)}</div>

          <div className='dm-sans-unqiue1 mt-3'>Time Zone</div>
          <div className='dm-serif-text-regular-italic-match '>{`${profile.location.timezone.offset} (${profile.location.timezone.description.slice(0,profile.location.timezone.description.indexOf(","))})`}</div>
          </div>

          <div className='  bg-transparent relative'>
          <div className='dm-sans-unqiue1'>Nationality</div>
          <div className='dm-serif-text-regular-italic-match '>
            <Nationality nationalityCode={profile.nat}/>
            
          </div>

          <div className='dm-sans-unqiue1  mt-3'>Phone No.</div>
          <div className={`dm-serif-text-regular-italic-match ${profile.phone.length > 12 ? 'text-sm' : 'text-base'}`}>
  {profile.phone}
</div>

          <div className='dm-sans-unqiue1  mt-3'>Registered Since</div>
          <div className='dm-serif-text-regular-italic-match '>{dateConversion(profile.registered.date)}</div>
          </div>
        </div>

        
        <div className='mt-[180px] ml-[274px] h-[90px] w-[90px]'>
          <a href="https://chaicode.com/">
          <img src={chai} alt="Chai aur Code" />
          </a>
        </div>
        <div className='dm-sans-footer'>© chai aur code</div>
        
      </div>

      
    )
  );
};

export default Card;
