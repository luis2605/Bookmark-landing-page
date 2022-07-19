import React from "react";
import classes from "../css/hero.module.css";
import heroImg from "../images/illustration-hero.svg";

const Hero = () => {
  return (
    <div className={classes.container}>
      <img src={heroImg} alt="display"></img>
      <div className={classes.bkgImg}></div>
      <div className={classes["container-text"]}>
        <h1 className={classes.title}>A simple bookmark manager</h1>
        <p className={classes.text}>
          {" "}
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instanly.Try it for free
        </p>
        <div className={classes["btn-container"]}>
          <button className={classes.chrome}>Get it on Chrome</button>
          <button className={classes.firefox}>Get it on Firefox</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
