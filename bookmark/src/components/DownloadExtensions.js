import React from "react";
import classes from "../css/downloadExtensions.module.css";
import chrome from "../images/logo-chrome.svg";
import firefox from "../images/logo-firefox.svg";
import opera from "../images/logo-opera.svg";
import dots from "../images/bg-dots.svg";

const DownloadExtensions = () => {
  return (
    <div className={classes.container}>
      <div className={classes["container-text"]}>
        <h2>Download the extensions</h2>
        <p className={classes["container-text__description"]}>
          We've got more browsers in the pipeline.Please do let us know if
          you've got favourite you'd likes us to prioritize
        </p>
      </div>
      <div className={classes["card-container"]}>
        <div className={classes.card}>
          <img className={classes.logo} src={chrome} alt="chrome" />
          <h3>Add to Chrome</h3>
          <p>Minimum version 62</p>
          <img className={classes.dots} src={dots} alt=" dots" />
          <button className={classes.btn}>Add &amp; Install Extensions</button>
        </div>
        <div className={`${classes.card} ${classes.firefox} `}>
          <img className={classes.logo} src={firefox} alt="firefox" />
          <h3>Add to Firefox</h3>
          <p>Minimum version 55</p>
          <img className={classes.dots} src={dots} alt="dots" />
          <button className={classes.btn}>Add &amp; Install Extensions</button>
        </div>
        <div className={`${classes.card} ${classes.opera} `}>
          <img className={classes.logo} src={opera} alt="opera" />
          <h3>Add to Opera</h3>
          <p>Minimum version 46</p>
          <img className={classes.dots} src={dots} alt="dots" />
          <button className={classes.btn}>Add &amp; Install Extensions</button>
        </div>
      </div>
    </div>
  );
};

export default DownloadExtensions;
