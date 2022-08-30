// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { getQuommons } from "../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./AmplayfierDateBlock.scss";
import "../../common/stylesheets/overrule.scss";
import AmplayfierDrawerRect from "../AmplayfierDrawerRect/AmplayfierDrawerRect.react";

AmplayfierDateBlock.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /*
  AmplayfierDateBlock date has to be in date props and passed as date string if not passed current date will be displayed.
  */
  date: PropTypes.string,
  //=======================================
  // Quommon props
  //=======================================
  /**
  Use to define standard component type
  */
  asVariant: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "warning",
    "error",
  ]),
  /*
  Use to override component colors and behavior.
  */
  withColor: PropTypes.shape({
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
  }),
};

AmplayfierDateBlock.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  date: null,
  //=======================================
  // Quommon props
  //=======================================
  asVariant: "primary",
  withColor: null,
};
/**
## Notes
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function AmplayfierDateBlock(props) {
  //-------------------------------------------------------------------
  // 1. Destructuring props
  //-------------------------------------------------------------------
  const { date, withColor } = props;
  //-------------------------------------------------------------------
  // 2. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "amplayfier-date-block");
  let date_tmp;
  if (
    date === "" ||
    date === "''" ||
    date === "'" ||
    date === null ||
    date === undefined
  ) {
    date_tmp = new Date().toDateString();
  } else {
    date_tmp = new Date(date).toDateString();
  }
  //-------------------------------------------------------------------
  // 3. Function to return suffix
  //-------------------------------------------------------------------
  const getSuffix = (digit) => {
    if (digit === "1") {
      return "st";
    }
    if (digit === "2") {
      return "nd";
    }
    if (digit === "3") {
      return "rd";
    } else return "th";
  };
  //-------------------------------------------------------------------
  // 4. Function to return date with suffix
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
  // 5. Function to handle date string
  //-------------------------------------------------------------------
  const getDate = () => {
    let dateSplit = date_tmp?.split(" ");
    let month = dateSplit[1];
    let year = dateSplit[3];
    let currentDate = getDateWithSuffix(dateSplit[2]);
    return `${currentDate} ${month} ${year}`;
  };

  // ========================= Render Function =================================

  return (
    <div className={`qui ${quommonClasses.parentClasses}`}>
      <AmplayfierDrawerRect {...props} isFluid={false}>
        <div
          className={`${quommonClasses.childClasses} qui-amplayfier-date-block-container`}
          style={{
            color: withColor?.textColor,
          }}
        >
          <h5 className="qui-amplayfier-date-block-title">{getDate()}</h5>
        </div>
      </AmplayfierDrawerRect>
    </div>
  );
}
