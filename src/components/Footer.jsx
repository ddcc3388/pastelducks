import React from "react";
import logo from "../assets/logo.png";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
export default function Footer() {
  const links = [
    {
      title: "About",
      data: ["About", "Terms"],
    },
    {
      title: "NFT",
      data: ["MagicEden", "Solsea", "Solanart"],
    },
    {
      title: "Social",
      data: ["Twiiter", "Discord"],
    },
  ];
  const socialLink = [
    <BsFacebook />,
    <BsTwitter />,
    <BsInstagram />,
  ];
  return (
    <footer>
      <div className="upper">
        <div className="brand-container">
          <div className="brand">
            <img src={logo} alt="logo" />
          </div>
          <p>Exclusive NFT Collection</p>
          <ul>
            {socialLink.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="links">
          {links.map(({ title, data }, index) => {
            return (
              <div className="link" key={index}>
                <h4>{title}</h4>
                <ul>
                  {data.map((link, index2) => (
                    <li key={index2}>{link}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="lower">
        <span>&copy; 2022 PASTEL </span>
        <span>Launching March 2022</span>
      </div>
    </footer>
  );
}
