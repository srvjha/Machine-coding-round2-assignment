import React, { useEffect, useState } from 'react'
import axios from 'axios';
import comment from '../../assets/comment.png'
import repost from '../../assets/repost.png'
import like from '../../assets/like.png'
import bookmark from '../../assets/bookmark.png'
import share from '../../assets/share.png'
import options from '../../assets/threedots.png'


const Jokes = () => {

  // Function to generate random number between two values
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Function to generate random date
const getRandomDate = () => {
  const start = new Date(2023, 0, 1); 
  const end = new Date();
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toDateString();
};

  const [randomJoke,setRandomJoke] = useState("");
  const [loading, setLoading] = useState(true); // Skeleton loading state
  const [randomData, setRandomData] = useState({
    time: '',
    date: '',
    views: 0,
    comments: 0,
    likes: 0,
    reposts: 0,
    shares: 0,
    bookmarks: 0,
  });
  useEffect(()=>{
    axios
    .get("https://api.freeapi.app/api/v1/public/randomjokes/joke/random")
    .then((joke)=>{
      setRandomJoke(joke.data.data)
      setLoading(false);
    })
    .catch((error)=>{
      console.log(error);
      })

      setRandomData({
        time: `${getRandomNumber(1, 12)}:${getRandomNumber(10, 59)} ${getRandomNumber(0, 1) === 0 ? 'AM' : 'PM'}`,
        date: getRandomDate(),
        views: getRandomNumber(1000, 50000000),
        comments: getRandomNumber(100, 200000),
        likes: getRandomNumber(100, 100000),
        reposts: getRandomNumber(100, 100000),
        shares: getRandomNumber(100, 100000),
        bookmarks: getRandomNumber(100, 200000),
      });
  },[])

  // Skeleton loader
  const skeletonLoader = (
    <div className="animate-pulse">
      <div className="h-5 bg-gray-700 rounded w-3/4 mb-3"></div>
      <div className="h-5 bg-gray-700 rounded w-1/2 mb-3"></div>
      <div className="h-3 bg-gray-700 rounded w-full mb-3"></div>
      <div className="h-3 bg-gray-700 rounded w-full mb-3"></div>
      <div className="h-3 bg-gray-700 rounded w-1/2 mb-3"></div>
    </div>
  );

  console.log("Jokes: ",randomJoke)
  if (loading) return skeletonLoader;
  return (
    <div className="bg-black text-white rounded-2xl p-7 w-[524px] h-[299px]">
      <div className="flex items-center mb-3">
        <button className="text-white mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
        </button>
        <span className="font-bold">Post</span>
      </div>
      <div className="flex items-start">
        <img src="https://pbs.twimg.com/profile_images/1639687602944233472/e9WsFfSD_400x400.jpg" alt="Profile" className="w-12 h-12 rounded-full mr-3" />
        <div>
          <div className="flex items-center">
            <span className="font-bold mr-1">Saurav J.</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <img src={options} className='ml-[290px] cursor-pointer' alt="" />
          </div>
          <div className=' -mt-1'>
          <span className="text-gray-500 text-[14px]">@J_srv001</span>
          </div>
         
          <p className="-ml-[57px] mt-4 w-[477px] inter-p ">{randomJoke.content}</p>
          <div className="text-gray-500 inter-tags mt-4 -ml-14"> {randomData.time} · {randomData.date} · <span className='text-white inter-span'>{randomData.views.toLocaleString()}</span> Views</div>
        </div>
      </div>
      <hr className='border-[#71767B] border-[0.5] ml-[2px] mt-3' />
      <div className="flex space-x-20 mt-3 text-gray-500 ml-2">
        <div className=' flex flex-row'>
          <div>
            <img src={comment} alt="comment" className=' cursor-pointer mt-[1px]'/>
          </div>
          <div className='text-[8px]'>{randomData.comments}</div>
        </div>

        <div className=' flex flex-row'>
          <div>
            <img src={repost} alt="repost"  className='mt-[2px] mr-[1px]  cursor-pointer' />
          </div>
          <div className='text-[8px]'>{randomData.reposts}</div>
        </div>
        
        <div className=' flex flex-row'>
          <div>
            <img src={like} alt="like" className='mt-[1px] mr-[1px]  cursor-pointer'/>
          </div>
          <div className='text-[8px]'>{randomData.likes}</div>
        </div>
        
        <div className=' flex flex-row'>
          <div>
            <img src={bookmark} alt="bookmark" className=' mr-[2px]  cursor-pointer' />
          </div>
          <div className='text-[8px]'>{randomData.bookmarks}</div>
        </div>

        <div className=' flex flex-row'>
          <div>
            <img src={share} alt="share" className=' cursor-pointer' />
          </div>
        </div>

       
       
      </div>
      <hr className='border-[#71767B] border-[0.5] ml-[2px] mt-3' />
      <div className='inter-chai mt-3 mr-4'>© chai aur code</div>
     
    </div>
  );
};



export default Jokes
