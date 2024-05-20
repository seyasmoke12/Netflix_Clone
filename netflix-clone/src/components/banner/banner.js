import React, { useState, useEffect } from 'react';
import axios from '../../utils/axios';
import requests from '../../utils/requast';
import "./banner.css"
const Banner = () => {
  const [movie, setMovie] = useState({});

useEffect(()=>{
  const fetchData = async()=>{
    try{
      const response =await axios.get(requests.fetchNetflixOriginals)
      console.log(response)
      setMovie(response.data.results[Math.floor(Math.random()* response.data.results.length)
      ])
    }catch(error){
      console.log("eroor",error)
    }
  }
  fetchData()
},[])
function TranCate(str,n) {
  return str?.length > n ? str.substr(0,n-1) + "...." : str;
}
  return ( 
    <div className='banner' style={{
      backgroundSize: 'cover',
      backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }}
    >
      <div className="banner_contents">
        <h1 className='banner_title'>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className='banner_buttons'>
          <button className='banner_button play'>Play</button>
          <button className="banner_button list">My List</button>
        
        </div>
        <h1 className='banner_description'>{TranCate(movie?.overview,150)}</h1>
        </div>
      <div className='banner_fadebotton'></div>
    </div>
    
  );
}

export default Banner;
