import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'


const API_KEY=process.env.REACT_APP_GIPHY_API_KEY
const url= `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
// const tagMemeUrl= `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
const useGif = (tag) => {
    const[gif,setGif]=useState('');
    
    const [loading,setLoading]=useState(false);

    // const[tag,setTag]=useState('car');

    async function fetchData(tag){
      setLoading(true);
        // const output=await axios.get(url);
        // console.log(output);
        const {data}=await axios.get(tag ? `${url}&tag=${tag}` : url);
        const imageSource=data.data.images.downsized_large.url;
        // console.log(imageSource)
        setGif(imageSource);
        setLoading(false);
    }

  useEffect( ()=>{
    fetchData('car');
  },[])

  return {gif,loading, fetchData}

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

    // function changeHandler(event){
    // setTag(event.target.value);
    // }


//   return (
//     <div className='w-1/2  bg-blue-500 rounded-lg border border-black
//     flex flex-col items-center gap-y-5 mt-[15px] '>
//       <h1 className='mt-[15px] text-3xl underline uppercase font-semibold'>Random {tag} Gif</h1>
//       {
//         loading ? (<Spinner/>) :(<img src={gif} width="450"/>)
//       }
//       {/* <img src={gif} width="450"/> */}

//       <input
//       className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
//       onChange={(event)=>setTag(event.target.value)}
//       value={tag}
//       />
//       <button onClick={clickHandler}
//       className='w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[15px]'>
//         Generate
//       </button>
//     </div>
//   )
}

export default useGif
