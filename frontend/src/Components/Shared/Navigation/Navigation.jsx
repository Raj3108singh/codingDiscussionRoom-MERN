import React from "react";
import { Link } from "react-router-dom";

import classes from "./Navigation.module.css";

const Navigation = () => {
  const brandStyles = {
    color: "#fff",
    testDecoration: "none",
    fontWeight: "bold",
    fontSize: "22px",
    display: "flex",
    textAlign: "center",
  };
  const logo = {
    width: "40px",
  };
  const logoText = {
    marginLeft: "10px",
  };
  return (
    <nav className={`${classes.navigation} container`}>
      <Link to="/" style={brandStyles}>
        <img src="/images/logo.jpg" alt="logo" style={logo}></img>
        <span style={logoText}>Coder's House</span>
      </Link>
    </nav>
  );
};

export default Navigation;
