import React from "react";
import classes from "../css/footer.modules.css";
import logo from "../images/logo-bookmark.svg";
import fb from "../images/icon-facebook.svg";
import tw from "../images/icon-twitter.svg";

const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes["container-text"]}>
        <div className={classes["logo-name"]}>
          <img src={logo} alt="logo" />
        </div>
        <h3>
          <a href="#features"> Features</a>
        </h3>
        <h3> Pricing</h3>
        <h3> Contact</h3>
      </div>
      <div className={classes["container-social"]}>
        <img src={fb} alt="fb-logo" />
        <img src={tw} alt="tw-logo" />
      </div>
    </div>
  );
};

export default Footer;
