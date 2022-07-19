import React, { useState } from "react";
import classes from "../css/faqs.module.css";
import arrowdown from "../images/icon-arrow.svg";

const FAQs = () => {
  const [showBookmark, setShowBookmark] = useState(false);
  const [showBrowser, setShowBrowser] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const [showChromium, setShowChromium] = useState(false);

  const logicBehindTabs = () => {
    if (showBookmark === true) {
      setShowBrowser(false);
      setShowQuestion(false);
      setShowChromium(false);
    }
    if (showBrowser === true) {
      setShowQuestion(false);
      setShowChromium(false);
      setShowBookmark(false);
    }
    if (showQuestion === true) {
      setShowChromium(false);
      setShowBookmark(false);
      setShowBrowser(false);
    }
    if (showChromium === true) {
      setShowBookmark(false);
      setShowBrowser(false);
      setShowQuestion(false);
    }
  };
  const changeBookmark = () => {
    setShowBookmark(!showBookmark);
    logicBehindTabs();
  };
  const changeBrowser = () => {
    setShowBrowser(!showBrowser);
    logicBehindTabs();
  };
  const changeQuestion = () => {
    setShowQuestion(!showQuestion);
    logicBehindTabs();
  };
  const changeChromium = () => {
    setShowChromium(!showChromium);
    logicBehindTabs();
  };

  return (
    <div className={classes.container}>
      <div className={classes["container-description"]}>
        <h3 className={classes.titel}>Frequently Asked Questions</h3>
        <p className={classes.description}>
          Here are some of our FAQs.If you have any other questions you'd like
          answered please feel free to email us
        </p>
        <div className={classes.bookmark}>
          <div className={classes.question}>
            <p>What is Bookmark ?</p>
            <img
              className={showBookmark ? classes.rotate : ""}
              onClick={changeBookmark}
              src={arrowdown}
              alt="arrow"
            />
          </div>
          <div className={classes.answer}>
            {showBookmark && (
              <p className={classes["answer-text"]}>
                Occaecat ullamco in esse adipisicing laboris labore ullamco
                deserunt aliquip. Culpa officia sit officia veniam mollit fugiat
                id aliquip commodo eu et ad. Id laborum ullamco aliquip sit
                officia proident esse voluptate proident dolore. Consectetur
                ullamco dolore ut eiusmod. Qui ipsum aliqua sunt minim eu id.
                Fugiat amet velit dolore cupidatat magna quis.
              </p>
            )}
          </div>
        </div>
        <div className={classes.browser}>
          <div className={classes.question}>
            <p>How can I request a new browser?</p>
            <img
              className={showBrowser ? classes.rotate : ""}
              onClick={changeBrowser}
              src={arrowdown}
              alt="arrow"
            />
          </div>
          <div className={classes.answer}>
            {showBrowser && (
              <p className={classes["answer-text"]}>
                Occaecat ullamco in esse adipisicing laboris labore ullamco
                deserunt aliquip. Culpa officia sit officia veniam mollit fugiat
                id aliquip commodo eu et ad. Id laborum ullamco aliquip sit
                officia proident esse voluptate proident dolore. Consectetur
                ullamco dolore ut eiusmod. Qui ipsum aliqua sunt minim eu id.
                Fugiat amet velit dolore cupidatat magna quis.
              </p>
            )}
          </div>
        </div>
        <div className={classes.mobile}>
          <div className={classes.question}>
            <p>Is there a mobile app ?</p>
            <img
              className={showQuestion ? classes.rotate : ""}
              onClick={changeQuestion}
              src={arrowdown}
              alt="arrow"
            />
          </div>
          <div className={classes.answer}>
            {showQuestion && (
              <p className={classes["answer-text"]}>
                Occaecat ullamco in esse adipisicing laboris labore ullamco
                deserunt aliquip. Culpa officia sit officia veniam mollit fugiat
                id aliquip commodo eu et ad. Id laborum ullamco aliquip sit
                officia proident esse voluptate proident dolore. Consectetur
                ullamco dolore ut eiusmod. Qui ipsum aliqua sunt minim eu id.
                Fugiat amet velit dolore cupidatat magna quis.
              </p>
            )}
          </div>
        </div>
        <div className={classes.chromium}>
          <div className={classes.question}>
            <p>What about other Chromium browser ?</p>
            <img
              className={showChromium ? classes.rotate : ""}
              onClick={changeChromium}
              src={arrowdown}
              alt="arrow"
            />
          </div>
          <div className={classes.answer}>
            {showChromium && (
              <p className={classes["answer-text"]}>
                Occaecat ullamco in esse adipisicing laboris labore ullamco
                deserunt aliquip. Culpa officia sit officia veniam mollit fugiat
                id aliquip commodo eu et ad. Id laborum ullamco aliquip sit
                officia proident esse voluptate proident dolore. Consectetur
                ullamco dolore ut eiusmod. Qui ipsum aliqua sunt minim eu id.
                Fugiat amet velit dolore cupidatat magna quis.
              </p>
            )}
          </div>
        </div>
      </div>
      <button className={classes.btn}>More Info</button>
    </div>
  );
};

export default FAQs;
