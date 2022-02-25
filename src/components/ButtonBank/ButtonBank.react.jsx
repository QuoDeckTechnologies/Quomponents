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
    Each button Text has to be in content array.
    */
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
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
    accenColor: PropTypes.string,
    textColor: PropTypes.string,
    hoverBackgroundColor: PropTypes.string,
    hoverTextColor: PropTypes.string,
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
  content: [],
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
  // 1. Destructuring content from props
  //-------------------------------------------------------------------
  const { content } = props
  //-------------------------------------------------------------------
  // 2. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "button-bank");

  return (
    <div className={`qui ${quommonClasses.parentClasses}`}>
      {_.map(content, (buttonText, i) => {
        return (
          <div
            className={`qui-button-bank-single-button ${quommonClasses.childClasses}`}
            key={i}
          >
            {<Button {...props} withTranslation={null} content={buttonText} onClick={props.onClick}/>}
          </div>
        );
      })}
    </div>
  );
}