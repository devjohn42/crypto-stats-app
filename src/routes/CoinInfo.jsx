import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CoinInfo = () => {
  const params = useParams();
  const [coinInfo, setCoinInfo] = useState({});

  const coinInfoURL = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

  useEffect(() => {
    axios
      .get(coinInfoURL)
      .then((response) => {
        setCoinInfo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>{coinInfo.id}</h1>
    </div>
  );
};

export default CoinInfo;
