import React from "react";
import classes from "../css/oneClick.module.css";
import sharing from "../images/illustration-features-tab-3.svg";

const Sharing = () => {
  return (
    <div className={classes.container} id="sharing">
      <img className={classes.heroImg} src={sharing} alt="display"></img>
      <div className={classes.bkgImg}></div>

      <div className={classes.text}>
        <h2>Intelligent search</h2>
        <p>
          Our powerful search feature will help you find saved sites in no time
          at all.No need to trawl through all of your bookmarks.
        </p>
        <button className={classes.btn}>More info</button>
      </div>
    </div>
  );
};

export default Sharing;
