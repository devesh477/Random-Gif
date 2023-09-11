import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY
const Random = () => {
  const{gif,loading, fetchData}=useGif();
    // const[gif,setGif]=useState('');
    
    // const [loading,setLoading]=useState(false);
    // async function fetchData(){
    //   setLoading(true);
    //     const url= `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    //     // const output=await axios.get(url);
    //     // console.log(output);
    //     const {data}=await axios.get(url);
    //     const imageSource=data.data.images.downsized_large.url;
    //     // console.log(imageSource)
    //     setGif(imageSource);
    //     setLoading(false);
    //     // console.log('hello')
    // }

  // useEffect( ()=>{
  //   fetchData();
  // },[])

  // useEffect(()=>{
  //   const output=axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`)
  //  .then(response=>{
  //   console.log(output);
  //  })
  //  .catch(error=>{
  //   console.error("Error fetching data",error);
  //  })
  // },[])

    // function clickHandler(){
    // fetchData();
    // }
  return (
    <div className='w-1/2  bg-green-500 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px] '>
      <h1 className='mt-[15px] text-3xl underline uppercase font-semibold'>A Random Gif</h1>
      {
        loading ? (<Spinner/>) :(<img src={gif} width="450"/>)
      }
      {/* <img src={gif} width="450"/> */}
      <button onClick={()=> fetchData()}
      className='w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[15px]'>
        Generate
      </button>
    </div>
  )
}

export default Random
