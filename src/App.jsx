import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

import CoinsContainer from "./components/CoinsContainer";
import Header from "./components/Header";
import CoinInfo from "./routes/CoinInfo";

const App = () => {
  const [cryptos, setCryptos] = useState([]);
  const cryptoURL =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false";

  // axios.defaults.headers.post["Content-Type"] =
  //   "application/json;charset=utf-8";
  // axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

  useEffect(() => {
    axios
      .get(cryptoURL)
      .then((response) => {
        setCryptos(response.data);
        // console.log(response.data);
        // console.log(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<CoinsContainer coins={cryptos} />} />
        <Route path="/coin" element={<CoinInfo />}>
          <Route path=":coinId" element={<CoinInfo />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
