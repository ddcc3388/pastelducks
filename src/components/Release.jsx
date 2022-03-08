import React from "react";
import { BsArrowRight } from "react-icons/bs";
import release1 from "../assets/release1.png";
import release11 from "../assets/release11.png";

export default function Release() {
  return (
    <div className="releases">
      <div className="release orange">
        <div className="content">
          <h2 className="title">Pastel Ducks?</h2>
          <p className="description">
            Pastel Ducks are an exclusive collection of 333 Genesis Duck NFTs on the Solana blockchain, backed by NFT collectors, designers, community builders, and artists. This is a WL only project. The Genesis collection will allow holders to stake their NFT to earn $PSTL and breed new NFTs.
          </p>
          <p className="description"></p>
          <a href="https://twitter.com/solpastelducks" target="_blank" className="link">
            Twitter<BsArrowRight />
          </a>
          <a href="https://discord.gg/nhX3HqN6aJ" target="_blank" className="link">
            Discord<BsArrowRight />
          </a>
          <a href="#" className="link">
            MagicEden<BsArrowRight />
          </a>
        </div>
        <div className="image">
          <img src={release1} alt="release" />
          <div className="ellipse pink"></div>
        </div>
      </div>
      

      <div className="release green">
        <div className="card-container">
        <div className="image">
        <img src={release11} alt="release" />
        <div className="ellipse orange"></div>
        </div>
      </div>
        <div className="content">
          <h2 className="title">Genesis Collection</h2>
          <p className="description">
            333 Genesis Pastel Duck NFTs will make their arrival in March. <a href="#">Mint</a>
          </p>
          <p className="description">
            Genesis Ducks are for the early supporters. Holders can earn passive income as well as exclusive access to Alphas/Partnerships. Granted early access into Pastel DAO!
          </p>
          <a href="https://twitter.com/solpastelducks" target="_blank" className="link">
            Twitter<BsArrowRight />
          </a>
          <a href="https://discord.gg/nhX3HqN6aJ" target="_blank" className="link">
            Discord<BsArrowRight />
          </a>
          <a href="#" className="link">
            MagicEden<BsArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
}
