// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { getQuommons, getAnimation } from "../../common/javascripts/helpers.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./ContentLine.scss";
import "../../common/stylesheets/overrule.scss";

ContentLine.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
  Use to define name in the component
  */
  name: PropTypes.string,
  /**
  Use to define the state of component
  */
  isActive: PropTypes.bool,
  //=======================================
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
  Use to add an icon to the component
  */
  withIcon: PropTypes.shape({
    icon: PropTypes.string,
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
  ContentLine component must have the onClick function passed as props
  */
  onClick: PropTypes.func.isRequired,
};

ContentLine.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  name: "",
  isActive: false,
  //=======================================
  // Quommon props
  //=======================================
  asPadded: "fitted",
  withColor: null,
  withIcon: null,
  withAnimation: null,
  isHidden: false,
  isDisabled: false,
};
/**
## Notes
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- Pass withColor props to change the styling of component.
- If you pass icon in the component it will make the component as DeckLine component and if you  do not pass the icon it   will make the component as TopicLine component.
**/
export default function ContentLine(props) {
  //-------------------------------------------------------------------
  // 1. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "content-line");
  //-------------------------------------------------------------------
  // 2. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props);
  //-------------------------------------------------------------------
  // 3. Conditional styling
  //-------------------------------------------------------------------
  let contentStyle = {
    backgroundColor: props.isDisabled
      ? "#E8E8E8"
      : props.isActive
      ? props.withColor?.backgroundColor
        ? props.withColor?.backgroundColor
        : "#FFBF00CC"
      : "#FFFFFF",
    color: props.isDisabled
      ? "#454545"
      : props.isActive
      ? props.withColor?.textColor
        ? props.withColor?.textColor
        : "#454545"
      : "#454545",
  };
  //-------------------------------------------------------------------
  // 4. Conditional text renders for TopicLine and DeckLine components
  //-------------------------------------------------------------------
  function getName() {
    if (props.withIcon?.icon && props?.name) {
      return <div className={`qui-content-line-text`}>{props?.name}</div>;
    } else {
      return <h6 className={`qui-content-line-text`}>{props?.name}</h6>;
    }
  }

  return (
    <motion.div
      initial={animate?.from}
      animate={animate?.to}
      className={`qui ${quommonClasses.parentClasses} qui-content-line-parent-class qt-shadow`}
    >
      <div className={`${quommonClasses.childClasses}`}>
        <div
          className={`qui-content-line-container ${
            props.withIcon?.icon && props?.name
              ? "qui-deck-line"
              : "qui-topic-line"
          }`}
          style={contentStyle}
          onClick={props.onClick}
        >
          {props.withIcon?.icon && (
            <i
              className={`${props.withIcon?.icon} qui-icon qui-content-line-icon`}
            ></i>
          )}
          {getName()}
          <div className="qui-content-line-right-arrow">
            <i
              className={`fas fa-angle-right ${
                props.withIcon?.icon && props?.name
                  ? "qui-deck-line-icon"
                  : "qui-topic-line-icon"
              }`}
              style={{ color: contentStyle.color }}
            ></i>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
