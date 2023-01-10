import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

import logo from "../../assets/img/hello-ca-logo.svg";

const Logo = () => {
  return (
    <Link to="/" className="logo-container">
      <img className="logo" src={logo} alt="Hello CA - Get CA advice on call" />
    </Link>
  );
};

export default Logo;
