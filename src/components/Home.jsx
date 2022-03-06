import React from "react";
import home from "../assets/home.gif";
export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="content">
          <p className="sub-title">Minting Soon... <br/><br/><hr/></p>
          <h1 className="title">Genesis Collection</h1>
          <p className="description">
            Supply: 333 <br/>
            Price: 0.49 SOL <br/>
            Attributes: 40+ <br/>
          </p>
          <button>MINT</button>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={home} alt="home image" />
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
