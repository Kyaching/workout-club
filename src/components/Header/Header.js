import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <nav className="header-container">
      <h1>
        <span className="icon">
          <FontAwesomeIcon icon={faDumbbell} />
        </span>
        WORKOUT CLUB
      </h1>
    </nav>
  );
};

export default Header;
