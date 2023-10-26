import React from "react";
import { FaCoins } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./Header.css";
const Header = () => {
  return (
    <Link>
      <header className="header">
        <FaCoins className="icon" />
        <h1>
          Crypto <span className="stats">Stats</span>
        </h1>
      </header>
    </Link>
  );
};

export default Header;
