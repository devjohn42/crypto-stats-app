import React from "react";

const CoinItem = (props) => {
  return (
    <section className="coinRow">
      <p>{props.coins.market_cap_rank}</p>
      <div>
        <img src={props.coins.image} alt="" />
        <p>{props.coins.symbol}</p>
      </div>
      <p>{props.coins.current_price}</p>
      <p>{props.coins.current_price_change_percentage_24h}</p>
      <p className="hideMobile">{props.coins.total_volume}</p>
      <p className="hideMobile">{props.coins.market_cap}</p>
    </section>
  );
};

export default CoinItem;
