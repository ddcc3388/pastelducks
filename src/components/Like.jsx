import React from "react";
import eth1 from "../assets/eth11.png";
import eth2 from "../assets/eth22.png";

export default function Like() {
  return (
    <div className="like">
      <div classname="team"><h2>Our Team</h2></div>
      <div className="container">
        <div className="content">
          <div className="image">
            <img src={eth1} alt="eth11" />
          </div>
          <h2 className="title">SOLARTHUR | Strategy Manager</h2>
          <p className="description">
            Yoo! I'm sure some of you have seen me in the Discord. I am an Entrepreneur, having created multiple successful businesses in the Crypto space and E-commerce. I am grateful to have this opportunity to lead such a great team and i'm so excited to have you guys support us on this journey.
          </p>
          <p className="description">
            I majored in business and marketing at UoT. Since then, I have led my own business as well as managed other businesses with their marketing and development strategies. I managed to bring together our team that I have met on multiple exchange programs. Being able to connect with people all across the world is an amazing opportunity to explore the world. I like to spark conversations in the discord chat, so don't hesitate to shoot me a DM or anything!
          </p>
        </div>
        
        <div className="content">
          <div className="image">
            <img src={eth2} alt="eth22" />
          </div>
          <h2 className="title">OCEAN | Digital Designer</h2>
          <p className="description">
            Hi everyone! I am the artist of Pastel Ducks! I hope you enjoy the art or atleast find it cute :) As mentioned in the Roadmap, we intend to release more exclusive collections of PASTEL, so if you had any ideas that you wanted me to include in the art, let us know the discord chats. Your opinions will be heard!
          </p>
          <p className="description">
            I graduated university from the top university in China, majoring in digital design. I like working more on web design, as it is extremely flexible in terms of what I am able to create/design. I currently work as a freelance logo designer and digital marketing strategist. I like to eat sushi and boba.
          </p>
        </div>
      </div>
    </div>
  );
}
