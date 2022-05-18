// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
  getQuommons,
  getTranslation,
  getAnimation,
} from "../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./AmplayfierDateBlock.scss";
import "../../common/stylesheets/overrule.scss";

AmplayfierDateBlock.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
    AmplayfierDateBlock date has to be in content and passed as date string if not passed current date will be displayed
    */
  content: PropTypes.string,
  //=======================================
  // Quommon props
  //=======================================
  /**
    Use to define component text size in increasing order
    */
  asSize: PropTypes.oneOf([
    "tiny",
    "small",
    "normal",
    "big",
    "huge",
    "massive",
  ]),
  /**
    Use to float the component in parent container
    */
  asFloated: PropTypes.oneOf(["left", "right", "none", "inline"]),
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
  /**
    Use to enable/disable the component
    */
  isDisabled: PropTypes.bool,
  /**
    Use to toggle the component taking the full width of the parent container
    */
  isFluid: PropTypes.bool,
};

AmplayfierDateBlock.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  content: null,
  //=======================================
  // Quommon props
  //=======================================
  asSize: "normal",
  asFloated: "none",
  withColor: null,
  withAnimation: null,
  withTranslation: null,
  isHidden: false,
  isDisabled: false,
  isFluid: false,
};
/**
## Notes
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function AmplayfierDateBlock(props) {
  //-------------------------------------------------------------------
  // 1. Destructuring props
  //-------------------------------------------------------------------
  const { content, withColor } = props;
  //-------------------------------------------------------------------
  // 2. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "amplayfier-date-block");
  let date = content
    ? new Date(content).toDateString()
    : new Date().toDateString();
  //-------------------------------------------------------------------
  // 3. Translate the text objects in case their is a dictionary provided
  //-------------------------------------------------------------------
  let tObj = getTranslation(props.withTranslation);
  //-------------------------------------------------------------------
  // 4. Function to return suffix of date
  //-------------------------------------------------------------------
  const getSuffix = (date) => {
    if (date !== undefined && !tObj) {
      let d = date?.split("");
      if (d[0] === "1") {
        return "th";
      }
      if (d[1] === "1") {
        return "st";
      }
      if (d[1] === "2") {
        return "nd";
      }
      if (d[1] === "3") {
        return "rd";
      } else return "th";
    } else return "";
  };
  //-------------------------------------------------------------------
  // 5. Function to return translated month if translation props is provided
  //-------------------------------------------------------------------
  const getMonth = (month) => {
    if (tObj) {
      return tObj.months[month];
    }
    return month;
  };
  //-------------------------------------------------------------------
  // 6. Function to handle date string
  //-------------------------------------------------------------------
  const getDate = () => {
    let dateSplit = date?.split(" ");
    let month = dateSplit[1];
    let currentDate = dateSplit[2];
    let year = dateSplit[3];
    let suffix = getSuffix(currentDate);
    return `${currentDate}${suffix} ${getMonth(month)} ${year}`;
  };
  //-------------------------------------------------------------------
  // 7. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props.withAnimation);

  // ========================= Render Function =================================

  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className={`qui ${quommonClasses.parentClasses}`}
      style={{ backgroundColor: withColor.backgroundColor }}
    >
      <div
        className={`${quommonClasses.childClasses} qui-amplayfier-date-block-container`}
        style={{
          color: withColor.textColor,
        }}
      >
        <h2>{getDate()}</h2>
      </div>
    </motion.div>
  );
}
