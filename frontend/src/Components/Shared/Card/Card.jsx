import React from "react";
import { Link } from "react-router-dom";

import classes from "./Card.module.css";
const Card = ({ title, icon, children }) => {
  const logo = {
    width: "40px",
  };
  return (
    <div className={classes.card}>
      <div className={classes.headerWrapper}>
        <img src={`/images/${icon}.jpg`} alt="" style={logo}></img>
        <h1 className="classes.heading">{title}</h1>
      </div>
      {children}
    </div>
  );
};

export default Card;
