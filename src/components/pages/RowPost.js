import React, { useEffect, useState } from "react";
import '../style/RowPost.css'
import axios from "../../axios";
import {imageURL,API_KEY} from '../../constants/constants';
import YouTube from "react-youtube";
let prevId='';
function RowPost(props) {
  const [poster, setPoster] = useState([]);
  const [Urlid, setUrlid] = useState('');
  useEffect(() => {
          axios.get(props.url).then(response=>{
            console.log(response.data)
            setPoster(response.data.results)
          })
          debugger;
          axios.get('http://localhost:3001/signup').then(response=>{
            console.log(response.data)
            
          })
  }, []);
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  
  const handleMovie=(id)=>{
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
        if(response.data.results.length!==0 && prevId!==id){
          prevId=id;
          setUrlid(response.data.results[0])
        }
        else{
          setUrlid('');
          prevId='';
        }
    })
  }
  return (
    <div className="rowPost">
      <h2 className="title">{props.title}</h2>
      <div className="row">
        {poster.map((obj)=>{
          return(
          <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? "postersm" : "poster" } src={props.isSmall ?`${imageURL+obj.backdrop_path}`:`${imageURL+obj.poster_path}`} alt="Load Failed"></img>  
          )})}
      </div>
     { Urlid&&<YouTube videoId={Urlid.key} opts={opts} />}
    </div>
  );
}

export default RowPost;
