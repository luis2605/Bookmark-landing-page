import React, { useState } from "react";
import ReactDOM from "react-dom";
import logo from "../images/logo-bookmark.svg";
import menu from "../images/icon-hamburger.svg";
import classes from "../css/header.module.css";
import ModalMenu from "./ModalMenu";

const Header = () => {
  const [menuShown, setMenuShown] = useState(false);

  const openMenu = () => {
    setMenuShown(!menuShown);
  };

  const closeMenuHandler = (value) => {
    setMenuShown(value);
  };
  const conditionalStylesLogos = menuShown
    ? classes.invisible
    : classes["header-img"];
  const conditionalStylesLogoMenu = menuShown
    ? classes.invisible
    : classes["header-menu"];
  const conditionalStylesContainer = menuShown
    ? classes["margin-bottom"]
    : classes["header-container"];
  return (
    <div className={conditionalStylesContainer}>
      <img className={conditionalStylesLogos} src={logo} alt="logo" />
      <img
        onClick={openMenu}
        className={conditionalStylesLogoMenu}
        src={menu}
        alt="menu"
      />
      <div className={classes["menu-container"]}>
        <ul className={classes["header-menu__text"]}>
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
        <button className={classes["header-menu__btn"]}>Login</button>
      </div>
      {ReactDOM.createPortal(
        menuShown && <ModalMenu onCloseMenu={closeMenuHandler} />,
        document.getElementById("menu")
      )}
    </div>
  );
};

export default Header;
