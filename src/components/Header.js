import React from "react";
import "./Header.css";
// import logo from "../images/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img width="140" height="33" src={'https://static.grammarly.com/assets/files/cb6ce17d281d15f2c819035bcd430b0e/ukraine_grammarly_logo.svg'} alt="Grammarly Premium" />
      </div>
      <a href="https://www.grammarly.com/signin?allowUtmParams=true" className="login">
        Log in
      </a>
    </div>
  );
};

export default Header;
