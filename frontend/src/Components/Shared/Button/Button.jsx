import React from "react";
import classes from "./Button.module.css";
const Button = ({ name, onClick }) => {
  //  const onClicked = () => {
  //    onClick("data from button");
  //  };
  return (
    <button className={classes.button} onClick={onClick}>
      <span>{name}</span>
      <img
        src="/images"
        alt="Arrow needs to be added"
        className="classes.arrow"
      ></img>
    </button>
  );
};

export default Button;
