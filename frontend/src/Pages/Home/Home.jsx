import React from "react";
import classes from "./Home.module.css";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../Components/Shared/Card/Card";
import Button from "../../Components/Shared/Button/Button";
//import { Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const SignInLink = {
    color: "#0077ff",
    fontWeight: "bold",
    textDecoration: "none",
    marginLeft: "10px",
  };
  const startRegistration = (eve) => {
    navigate("/register");
  };
  return (
    <div className={classes.cardWrapper}>
      <Card title="welcome to Coder's house !!" icon="logo">
        <p className="classes.text">
          We are working hard to get Coder's house rady for everyone. While we
          wrap up the finishing
        </p>
        <div>
          <Button onClick={startRegistration} name="Lets get started" />
        </div>
        <div className={classes.signinWrapper}>
          <span className={classes.hasInvites}>You have an Invite</span>
          <Link style={SignInLink} to="/login">
            Sign In
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Home;
