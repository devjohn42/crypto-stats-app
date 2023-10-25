import React from "react";
import CoinItem from "./CoinItem";

import "./Coins.css";

const CoinsContainer = (props) => {
  return (
    <section className="container">
      <div>
        <div className="heading">
          <p>#</p>
          <p className="coinName">Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p className="hideMobile">Volume</p>
          <p className="hideMobile">Mkt Cap</p>
        </div>
        {props.coins.map((coins) => {
          return <CoinItem coins={coins} key={coins.id} />;
        })}
      </div>
    </section>
  );
};

export default CoinsContainer;
