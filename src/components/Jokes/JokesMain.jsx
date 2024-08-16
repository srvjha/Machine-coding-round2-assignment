import React from 'react'
import Jokes from './Jokes'
import chai from "../../assets/chaicode.png"


const JokesMain = () => {
  return (
    <>
    <div className="bg-[url(./assets/jokes_bg.png)] h-screen w-screen bg-cover p-10  bg-no-repeat">
      <div className=' flex justify-center mt-[190px]'>
      <Jokes/>
      </div>
      <div>
        <a href="https://chaicode.com/">
        <img src={chai} className='ml-[1390px] mt-[100px] w-[90px] h-[90px]' alt="" />
        </a>
      </div>
       
  
   
    </div>
    
  
   </>
  )
}

export default JokesMain
