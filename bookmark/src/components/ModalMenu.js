import React from "react";

import classes from "../css/modalMenu.module.css";
import logo from "../images/logo-bookmark.svg";
import menuClose from "../images/icon-close.svg";

const ModalMenu = (props) => {
  const closeMenu = () => {
    props.onCloseMenu(false);
  };
  return (
    <div>
      <div className={classes["menu-backdrop"]}>
        <div className={classes["icon-container"]}>
          <img className={classes["header-img-left"]} src={logo} alt="logo" />
          <img
            onClick={closeMenu}
            className={classes["header-img-right"]}
            src={menuClose}
            alt="menu"
          />
        </div>
        <ul className={classes.menu}>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        <button className={classes["login-btn"]}>Login</button>

        <div></div>
      </div>
    </div>
  );
};

export default ModalMenu;
