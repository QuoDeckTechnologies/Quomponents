// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { getQuommons } from "../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./ButtonBank.scss";
import "../../common/stylesheets/overrule.scss";
import Button from "../Buttons/Button/Button.react";

ButtonBank.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
  Each Button props has to be in content array.
  */
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
  /**
  Use to set Button in horizontal direction.
  */
  isHorizontal: PropTypes.bool,
};

ButtonBank.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  content: [],
  isHorizontal: false,
};

/**
## Notes
- The design system used for this component is Material UI (@mui/material)
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function ButtonBank(props) {
  //-------------------------------------------------------------------
  // 1. Destructuring content from props
  //-------------------------------------------------------------------
  const { content, isHorizontal } = props;
  //-------------------------------------------------------------------
  // 2. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "button-bank");

  return (
    <div
      className={`qui ${quommonClasses.parentClasses} ${
        isHorizontal ? "qui-button-bank-horizontal" : ""
      }`}
    >
      {_.map(content, (buttonProps, i) => {
        return (
          <div
            className={`qui-button-bank-single-button ${quommonClasses.childClasses}`}
            key={i}
          >
            {<Button {...buttonProps} />}
          </div>
        );
      })}
    </div>
  );
}
