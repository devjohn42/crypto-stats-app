import React from "react";

import "./Coins.css";

const CoinItem = (props) => {
  return (
    <section className="coinRow">
      <p>{props.coins.market_cap_rank}</p>
      <div className="symbol">
        <img src={props.coins.image} alt="" />
        <p>{props.coins.symbol.toUpperCase()}</p>
      </div>
      <p>
        {props.coins.current_price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </p>
      <p>{props.coins.market_cap_change_percentage_24h.toFixed(2)}%</p>
      <p className="hideMobile">
        {props.coins.total_volume.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </p>
      <p className="hideMobile">
        {props.coins.market_cap.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </p>
    </section>
  );
};

export default CoinItem;
