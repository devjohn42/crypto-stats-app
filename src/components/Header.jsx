import React from "react";
import { FaCoins } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./Header.css";
const Header = () => {
  return (
    <Link to={"/"}>
      <header className="header">
        <FaCoins className="icon" />
        <h1>
          Crypto <span className="statsTitle">Stats</span>
        </h1>
      </header>
    </Link>
  );
};

export default Header;
