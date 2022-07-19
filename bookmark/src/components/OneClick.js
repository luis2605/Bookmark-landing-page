import React from "react";
import classes from "../css/oneClick.module.css";
import oneclick from "../images/illustration-features-tab-1.svg";

const OneClick = () => {
  return (
    <div className={classes.container} id="oneclick">
      <img className={classes.heroImg} src={oneclick} alt="display"></img>
      <div className={classes.bkgImg}></div>

      <div className={classes.text}>
        <h2>Bookmark in one click</h2>
        <p>
          Organize your bookmarks however you like.Our simple drag-and-drop
          interface gives you complete control over how you manage your
          favourite sites.
        </p>
        <button className={classes.btn}>More info</button>
      </div>
    </div>
  );
};

export default OneClick;
