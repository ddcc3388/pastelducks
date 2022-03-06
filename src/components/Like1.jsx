import React from "react";
import eth1 from "../assets/eth1.png";
import eth2 from "../assets/eth2.png";

export default function Like() {
  return (
    <div className="like">
      <div className="container">
        <div className="content">
          <div className="image">
            <img src={eth1} alt="eth11" />
          </div>
          <h2 className="title">JOHN | Blockchain Developer</h2>
          <p className="description">
            Hello! My name is John and I am the Blockchain Developer for this blue chip project. I promise i'll bring in something special and unique. Please be patient... can't wait to show all of you what I have in store.
          </p>
          <p className="description">
            I graduated from CalTech, majored in computer science (obviously) and recently quick my 9 to 5 six figure job to invest my time solely on this project. I plan to innovate the society through technological advancements, especially within the NFT community.
          </p>
        </div>
        
        <div className="content">
          <div className="image">
            <img src={eth2} alt="eth22" />
          </div>
          <h2 className="title">MAX | Front-End Developer</h2>
          <p className="description"> 
            Hi guys! Welcome to the page that i've created. Hope you enjoy it. Tried to incorporate as many pastel attributes as I could. Also check out the light mode function on the top right of the page. Pretty cool :) Will continue to work with our artist and update the page as much as possible to ensure it looks super nice. Its nice to have you guys on board.
          </p>
          <p className="description">
            I am a freelance web developer. Super passionate about working with web designers and creating aesthetic websites. Currently planning to spend the rest of my life in Australia!
          </p>
        </div>
      </div>
    </div>
  );
}
