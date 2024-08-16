import React from 'react'
import chai from "../../assets/chaicode.png"
import CatListing from './CatListing'
import catsbg from '../../assets/catsbg.png'


const CatHomePage = () => {
  return (
    <>
    <div className="bg-[url(./assets/catsbg.png)] h-screen w-screen bg-gray-300 bg-cover p-10  bg-no-repeat">
      <div className=' dm-sans-cats-title'><span className='text-white text-[35px] font-[600] ml-5'>Cats around us</span></div>
      <div className=' flex justify-center'>
     <CatListing/>
      </div>
      <div>
        <a href="https://chaicode.com/">
        <img src={chai} className='ml-[1360px] -mt-[730px] w-[70px] h-[70px]' alt="" />
        </a>
      </div>
       
  
   
    </div>
    
  
   </>
  )
}

export default CatHomePage
