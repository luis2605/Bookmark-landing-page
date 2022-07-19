import React, { useState, useEffect } from "react";
import classes from "../css/email.module.css";
import exclamation from "../images/icon-error.svg";

const Email = () => {
  const [isEmailWrong, setIsEmailWrong] = useState(false);
  const [email, setEmail] = useState("@");

  const readInputValue = (event) => {
    setEmail(event.target.value);
  };
  useEffect(() => {
    if (email.includes("@")) {
      setIsEmailWrong(false);
    } else {
      setIsEmailWrong(true);
    }
  }, [email]);

  return (
    <div className={classes.container}>
      <p className={classes.description}>35, 000+ Already joined</p>
      <h3 className={classes.titel}>Stay up-to-date with what we're doing</h3>
      <div className={classes["input-btn"]}>
        <div
          className={
            isEmailWrong
              ? `${classes["input-container"]} ${classes["border-error"]}`
              : classes["input-container"]
          }
        >
          <input
            onChange={readInputValue}
            type="text"
            className={classes.input}
            placeholder="example@email/com"
          />
          <img
            className={isEmailWrong ? classes.error : classes.invisible}
            src={exclamation}
            alt="error"
          ></img>
          <p
            className={isEmailWrong ? classes["error-text"] : classes.invisible}
          >
            Whoops, make sure it's an email
          </p>
        </div>
        <button className={classes.btn}>Contact Us</button>
      </div>
    </div>
  );
};

export default Email;
