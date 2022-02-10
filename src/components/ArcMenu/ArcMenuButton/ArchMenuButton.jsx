// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { getQuommons } from "../../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./ArcMenuButton.scss";
import "../../../common/stylesheets/overrule.scss";

ArcMenuButton.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
  ArcMenuButton icon can be passed with icon prop
  */
  icon: PropTypes.string,
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
  Use to define component size in increasing order
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
  asFloated: PropTypes.oneOf(["left", "right"]),
  /**
  Use to override component colors and behavior
  */
  withColor: PropTypes.shape({
    backgroundColor: PropTypes.string,
    accentColor: PropTypes.string,
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
  Use to enable/disable the component
  */
  isDisabled: PropTypes.bool,
  /**
  Use to show/hide the component
  */
  isHidden: PropTypes.bool,
  /**
  Button component must have the onClick function passed as props
  */
  onClick: PropTypes.func.isRequired,
};

ArcMenuButton.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  icon: "",
  //=======================================
  // Quommon props
  //=======================================
  asVariant: "primary",
  asSize: "normal",
  asFloated: "none",
  withColor: null,
  withAnimation: null,
  withTranslation: null,
  isDisabled: false,
  isHidden: false,
};

const getColors = (withColor) => {
  let colors = {
    backgroundColor: withColor.backgroundColor,
    borderColor: withColor.accentColor,
    color: withColor.textColor,
  };
  return colors;
};
export default function ArcMenuButton(props) {
  //-------------------------------------------------------------------
  // 1. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "arc-menu-button");
  //-------------------------------------------------------------------
  // 2. Set the component colors
  //-------------------------------------------------------------------
  let colors = props.withColor ? getColors(props.withColor) : {};

  return (
    <div className={`qui ${quommonClasses.parentClasses}`}>
      <div className={quommonClasses.childClasses}>
        <div className={`qui-arc`} style={{ borderColor: colors.borderColor }}>
          <button
            className={`qui-arc-menu-button ${quommonClasses.childClasses} ${props.even ? `variant-${props.asVariant}-text` : 'qui-btn'}`}
            style={ props.even ? {backgroundColor:'white'} : { backgroundColor: colors.backgroundColor }}
            onClick={(e)=>props.onClick(e)}
          >
            <i
              className={props.icon ? props.icon : "fas fa-desktop"}
              style={ props.even ? {color:colors.backgroundColor} : { color: colors.color }}
            ></i>
          </button>
        </div>
      </div>
    </div>
  );
}