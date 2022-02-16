// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./ButtonBank.scss";
import "../../common/stylesheets/overrule.scss";
import Button from "../Buttons/Button/Button.react";
import { getQuommons, getTranslation } from "../../common/javascripts/helpers";

ButtonBank.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
    Each button Text has to be in content array.
    */
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
  /**
    Set action emphasis in increasing order 
    */
  asEmphasis: PropTypes.oneOf(["text", "outlined", "contained"]),
  /**
    Use for rounded corners or circular icon button 
    */
  isCircular: PropTypes.bool,
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
    Button component must have the onClick function passed as props
    */
  onClick: PropTypes.func.isRequired,
};

ButtonBank.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  asEmphasis: "contained",
  isCircular: false,
  //=======================================
  // Quommon props
  //=======================================
  asVariant: "primary",
  asSize: "normal",
  asFloated: "none",

  withColor: null,
  withLabel: null,
  withAnimation: null,
  withTranslation: null,

  isHidden: false,
  isDisabled: false,
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
  // 1. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "button-bank");
  //-------------------------------------------------------------------
  // 2. Get translation of the component
  //-------------------------------------------------------------------
  let labelContent = props.content;
  let tObj = null;

  if (
    props.withTranslation?.lang &&
    props.withTranslation.lang !== "" &&
    props.withTranslation.lang !== "en"
  ) {
    tObj = getTranslation(props.withTranslation);
    if (labelContent && tObj) labelContent = tObj.content;
  }

  return (
    <div className={`qui ${quommonClasses.parentClasses}`}>
      {_.map(labelContent, (buttonText, i) => {
        return (
          <div
            className={`qui-button-bank-single-button ${quommonClasses.childClasses}`}
            key={i}
          >
            {<Button {...props} withTranslation={null} content={buttonText} />}
          </div>
        );
      })}
    </div>
  );
}
