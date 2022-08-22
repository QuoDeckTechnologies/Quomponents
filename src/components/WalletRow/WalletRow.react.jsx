// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
  getQuommons,
  getAnimation,
  getTranslation,
} from "../../common/javascripts/helpers.js";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./WalletRow.scss";
import "../../common/stylesheets/overrule.scss";

WalletRow.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
    Contains the users contents such as name and points
  */
  date: PropTypes.string,
  coins: PropTypes.number,

  // Quommon props
  //=======================================
  /** 
    Use to define component padding in increasing order
  */
  asPadded: PropTypes.oneOf(["fitted", "compact", "normal", "relaxed"]),
  /**
    Use to override component colors and behavior
  */
  withColor: PropTypes.shape({
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
  }),
  /**
    Use to define the entry animation of the component
  */
  withAnimation: PropTypes.shape({
    animation: PropTypes.oneOf([
      "zoom",
      "collapse",
      "fade",
      "slideDown",
      "slideUp",
      "slideLeft",
      "slideRight",
      "",
    ]),
    duration: PropTypes.number,
    delay: PropTypes.number,
  }),
  /**
    Use to show a translated version of the component text. Dictionary must be valid JSON. 
  */
  withTranslation: PropTypes.shape({
    lang: PropTypes.string,
    tgt: PropTypes.string,
    dictionary: PropTypes.string,
  }),
  /**
    Use to show/hide the component
  */
  isHidden: PropTypes.bool,
};

WalletRow.defaultProps = {
  // Component Specific props
  //=======================================
  date: "",
  coins: null,
  // Quommon props
  //=======================================
  asPadded: "normal",
  withColor: null,
  withAnimation: null,
  withTranslation: null,
  isHidden: false,
};

/**
## Notes
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- Content props to display the WalletRow component.
- Pass withColor props to change the styling of component.
**/
export default function WalletRow(props) {
  //-------------------------------------------------------------------
  // 1. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "wallet-row");

  //-------------------------------------------------------------------
  // 2. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props);

  //-------------------------------------------------------------------
  // 3. Conditional styling
  //-------------------------------------------------------------------
  let contentStyle = {
    backgroundColor: props.withColor?.backgroundColor
      ? props.withColor?.backgroundColor
      : "#454545",
    color: props.withColor?.textColor ? props.withColor?.textColor : "#FFBF00",
  };

  //-------------------------------------------------------------------
  // 4. Date Validation
  //-------------------------------------------------------------------
  let date;
  if (
    props.date === "" ||
    props.date === "''" ||
    props.date === "'" ||
    props.date === null ||
    props.date === undefined
  ) {
    date = new Date().toDateString();
  } else {
    date = new Date(props.date).toDateString();
  }

  //-------------------------------------------------------------------
  // 5. Translate the text objects in case their is a dictionary provided
  //-------------------------------------------------------------------
  let coinsText = "coins";
  let tObj = getTranslation(props.withTranslation);
  if (tObj?.coins) coinsText = tObj?.coins;

  //-------------------------------------------------------------------
  // 6. Function to return suffix
  //-------------------------------------------------------------------
  const getSuffix = (digit) => {
    if (!tObj) {
      if (digit === "1") {
        return "st";
      }
      if (digit === "2") {
        return "nd";
      }
      if (digit === "3") {
        return "rd";
      } else return "th";
    } else return "";
  };

  //-------------------------------------------------------------------
  // 7. Function to return date with suffix
  //-------------------------------------------------------------------
  const getDateWithSuffix = (date) => {
    if (date) {
      let d = date?.split("");
      if (d[0] === "0") {
        return `${d[1]}${getSuffix(d[1])}`;
      } else if (d[0] === "1") {
        return `${date}${getSuffix("")}`;
      } else {
        return `${date}${getSuffix(d[1])}`;
      }
    } else return "";
  };

  //-------------------------------------------------------------------
  // 8. Function to return translated month if translation props is provided
  //-------------------------------------------------------------------
  const getMonth = (month) => {
    if (tObj) {
      return tObj?.months[month];
    }
    return month;
  };

  //-------------------------------------------------------------------
  // 9. Function to handle date string
  //-------------------------------------------------------------------
  const getDate = () => {
    let dateSplit = date?.split(" ");
    let month = dateSplit[1];
    let year = dateSplit[3];
    let currentDate = getDateWithSuffix(dateSplit[2]);
    return `${currentDate} ${getMonth(month)} ${year}`;
  };

  return (
    <motion.div
      initial={animate?.from}
      animate={animate?.to}
      className={`qui ${quommonClasses.parentClasses} qui-wallet-row-parent-class`}
    >
      <div
        className={`${quommonClasses.childClasses} qui-wallet-row-container`}
        style={contentStyle}
      >
        {props.date && (
          <div
            className={`qui-wallet-row-date`}
            style={{ color: contentStyle?.color }}
          >
            {getDate()}
          </div>
        )}
        {props.coins && (
          <div className={`qui-wallet-row-coins`}>
            {" "}
            <div
              className="qui-wallet-row-coins-number"
              style={{ color: contentStyle?.color }}
            >
              {props.coins}
            </div>
            <div className="qui-wallet-row-coins-text">{coinsText}</div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
