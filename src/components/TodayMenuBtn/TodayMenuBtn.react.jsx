// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { getQuommons } from "../../common/javascripts/helpers.js";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./TodayMenuBtn.scss";
import "../../common/stylesheets/overrule.scss";

TodayMenuBtn.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
    Content use to display the label of TodayMenuBtn
  */
  content: PropTypes.string,
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
    Use to define component padding in increasing order
  */
  asPadded: PropTypes.oneOf(["fitted", "compact", "normal", "relaxed"]),
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
    accentColor: PropTypes.string,
  }),
  /**
    Use to add an icon to the component
  */
  withIcon: PropTypes.shape({
    icon: PropTypes.string,
    size: PropTypes.string,
    position: PropTypes.string,
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
    Slider component must have the onClick function passed as props
  */
  onClick: PropTypes.func.isRequired,
};

TodayMenuBtn.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  content: "",
  //=======================================
  // Quommon props
  //=======================================
  asVariant: "secondary",
  asPadded: "normal",
  asFloated: "inline",
  withIcon: null,
  withColor: null,
  isHidden: false,
  isDisabled: false,
};

/**
## Notes
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- Content props to display the TodayMenuBtn component.
- Pass withColor props to change the styling of TodayMenuComponent.
**/
export default function TodayMenuBtn(props) {
  //-------------------------------------------------------------------
  // 1. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "today-menu-btn");

  let colors = {
    backgroundColor: props.isDisabled
      ? "#454545"
      : props.withColor?.backgroundColor
      ? props.withColor?.backgroundColor
      : "#ED6E6E",
    textColor: props.isDisabled ? "#AAAAAA" : props.withColor?.textColor,
    accentColor: props.isDisabled ? "#AAAAAA" : props.withColor?.accentColor,
  };

  return (
    <div className={`qui ${quommonClasses.parentClasses}`}>
      <div
        className={`${quommonClasses.childClasses} qui-today-menu-btn-container`}
        style={{ backgroundColor: colors?.backgroundColor }}
        onClick={props.onClick}
      >
        {props.withIcon?.icon && (
          <i
            className={`${props.withIcon?.icon} qui-icon qui-today-menu-btn-icon`}
            style={{ color: colors?.accentColor }}
          />
        )}
        <span>
          <h6
            className={`qui-today-menu-btn-text`}
            style={{
              color: colors?.textColor,
              marginLeft: props.withIcon?.icon ? " 0.5em" : "0",
            }}
          >
            {props.content}
          </h6>
        </span>
      </div>
    </div>
  );
}
