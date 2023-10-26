import React from "react";
import { Link } from "react-router-dom";

import CoinItem from "./CoinItem";
import CoinInfo from "../routes/CoinInfo";

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
          return (
            <Link
              to={`/coin/${coins.id}`}
              element={<CoinInfo />}
              key={coins.id}
            >
              <CoinItem coins={coins} />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default CoinsContainer;
