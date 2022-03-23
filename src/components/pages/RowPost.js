import React, { useEffect, useState } from "react";
import '../style/RowPost.css'
import axios from "../../axios";
import {imageURL} from '../../constants/constants'
function RowPost(props) {
  const [poster, setPoster] = useState([]);
  useEffect(() => {
          axios.get(props.url).then(response=>{
            console.log(response.data)
            setPoster(response.data.results)
          })
  }, []);
  return (
    <div className="rowPost">
      <h2 className="title">{props.title}</h2>
      <div className="row">
        {poster.map((obj)=>{
          return(
          <img className={props.isSmall ? "postersm" : "poster" } src={props.isSmall ?`${imageURL+obj.backdrop_path}`:`${imageURL+obj.poster_path}`}></img>  
          )})}
      </div>
    </div>
  );
}

export default RowPost;
