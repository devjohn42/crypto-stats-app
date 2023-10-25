import React from "react";
import { FaCoins } from "react-icons/fa";

import "./Header.css";
const Header = () => {
  return (
    <header className="header">
      <FaCoins className="icon" />
      <h1>
        Crypto <span className="stats">Stats</span>
      </h1>
    </header>
  );
};

export default Header;
