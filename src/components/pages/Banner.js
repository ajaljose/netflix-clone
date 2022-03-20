import "../style/Banner.css";
import React from "react";

function Banner() {
  return (
    <div className="Banner">
      
      <div className="content">
      <h1 className="BannerTitle">Money Heist</h1>
      <div className="btn_grp">
          <button className="btn">Play</button>
          <button className="btn">MyList</button>
        </div>
        <h1 className="discription">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
          blanditiis mollitia, sequi nostrum isteLorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
          blanditiis mollitia, sequi nostrum iste
          
        </h1>
          
      </div>
      <br />     
      <div className="shade"></div> 
    </div>
  );
}

export default Banner;
