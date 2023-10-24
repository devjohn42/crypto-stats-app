import React, { useState, useEffect } from "react";
import axios from "axios";
import CoinsContainer from "./components/CoinsContainer";

const App = () => {
  const [cryptos, setCryptos] = useState([]);
  const cryptoURL =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

  axios.defaults.headers.post["Content-Type"] =
    "application/json;charset=utf-8";
  axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
  useEffect(() => {
    axios
      .get(cryptoURL)
      .then((response) => {
        setCryptos(response.data);
        console.log(response.data[0]);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <CoinsContainer coins={cryptos} />
    </>
  );
};

export default App;
