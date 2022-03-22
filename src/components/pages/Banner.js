import "../style/Banner.css";
import React, { useEffect, useState } from "react";
import axios from '../../axios';
import {API_KEY,imageURL} from '../../constants/constants';
function Banner() {
  const [movie, setMovie] = useState();
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response=>{
      console.log(response.data.results[0]);
      setMovie(response.data.results[Math.floor(Math.random() * 10)])
    }))
  },[]) 
  return (
    <div style={{backgroundImage:`url(${movie?imageURL+movie.backdrop_path:""})`}} className="Banner">
      
      <div className="content">
      <h1 className="BannerTitle">{movie?movie.title:''}</h1>
      <div className="btn_grp">
          <button className="btn">Play</button>
          <button className="btn">MyList</button>
        </div>
        <h1 className="discription">
          {movie?movie.overview:''}
        </h1>
          
      </div>
      <br />     
      <div className="shade"></div> 
    </div>
  );
}

export default Banner;
