import React, { useState } from "react";
import classes from "../css/features.module.css";
import OneClick from "./OneClick";
import Searching from "./Searching";
import Sharing from "./Sharing";

const Features = () => {
  const [oneClick, setOneClick] = useState(true);
  const [searching, setSearching] = useState(false);
  const [sharing, setSharing] = useState(false);

  const oneClickHandler = () => {
    setOneClick(true);
    setSearching(false);
    setSharing(false);
    console.log(oneClick);
    console.log(searching);
    console.log(sharing);
  };

  const searchingHandler = () => {
    setSearching(true);
    setOneClick(false);
    setSharing(false);
    console.log(oneClick);
    console.log(searching);
    console.log(sharing);
  };
  const sharingHandler = () => {
    setSharing(true);
    setOneClick(false);
    setSearching(false);
    console.log(oneClick);
    console.log(searching);
    console.log(sharing);
  };
  return (
    <div className={classes.container} id="features">
      <h2 className={classes.titel}> Features</h2>
      <p className={classes.text}>
        {" "}
        Our Aim is to make it quick and easy for you to acces your favourite
        websites.Your bookmarks sync betweeen your devices so you can access
        them on the go
      </p>

      <ul className={classes.list}>
        <li>
          <a
            className={oneClick ? classes.border : classes.features}
            onClick={oneClickHandler}
            href="#features"
          >
            Simple Bookmarking
          </a>
        </li>
        <li>
          {" "}
          <a
            className={searching ? classes.border : classes.features}
            onClick={searchingHandler}
            href="#features"
          >
            Speedy Searching
          </a>
        </li>
        <li>
          {" "}
          <a
            className={sharing ? classes.border : classes.features}
            onClick={sharingHandler}
            href="#features"
          >
            Easy Sharing
          </a>
        </li>
      </ul>
      {oneClick && <OneClick />}
      {searching && <Searching />}
      {sharing && <Sharing />}
    </div>
  );
};

export default Features;
