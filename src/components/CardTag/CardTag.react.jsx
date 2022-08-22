import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
  getAnimation,
  getQuommons,
  getTranslation,
} from "../../common/javascripts/helpers";
import "../../common/stylesheets/common.css";
import "./CardTag.scss";
import "../../common/stylesheets/overrule.scss";

CardTag.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
  Use to define CardTag's value
  */
  content: PropTypes.string.isRequired,
  /**
  Use to active/deactive CardTag
  */
  isActive: PropTypes.bool,
  /**
  Use to set CardTag orientation
  */
  isLeft: PropTypes.bool,
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
  asFloated: PropTypes.oneOf(["left", "right", "none", "inline"]),
  /**
  Use to align content within the component container
  */
  asAligned: PropTypes.oneOf(["left", "right", "center"]),
  /**
  Use to define component backgroundColor and textColor Color 
  */
  withColor: PropTypes.shape({
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    hoverBackgroundColor: PropTypes.string,
    hoverTextColor: PropTypes.string,
  }),
  /**
  Use to add an icon to the component
  */
  withIcon: PropTypes.shape({
    icon: PropTypes.string,
    size: PropTypes.string,
    position: PropTypes.oneOf(["left", "right"]),
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
  Use to toggle a loading state for the component
  */
  isLoading: PropTypes.bool,
  /**
  Use to show/hide the component
  */
  isHidden: PropTypes.bool,
  /**
  Use to enable/disable the component
  */
  isDisabled: PropTypes.bool,
  /**
  CardTag component must have the onClick function passed as props
  */
  onClick: PropTypes.func.isRequired,
};

CardTag.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  content: "",
  isActive: true,
  isLeft: false,
  //=======================================
  // Quommon props
  //=======================================
  asVariant: "primary",
  asPadded: "normal",
  asSize: "normal",
  asFloated: "none",
  asAligned: "center",
  withColor: null,
  withAnimation: null,
  withTranslation: null,

  isHidden: false,
  isLoading: false,
  isDisabled: false,
};
/**
## Notes
- The design system used for this component is HTML and CSS
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function CardTag(props) {
  //-------------------------------------------------------------------
  // 1. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "card-tag");
  //-------------------------------------------------------------------
  // 2. Use to set Color in CardTag Component
  //-------------------------------------------------------------------
  let activeColor = {
    backgroundColor: props.withColor?.hoverBackgroundColor,
    color: props.withColor?.hoverTextColor,
  };
  let deactivatedColor = {
    backgroundColor: props.withColor?.backgroundColor,
    color: props.withColor?.textColor,
  };
  //-------------------------------------------------------------------
  // 3. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props);

  function getIcon(iconObj, position, iconOnly) {
    let iconPosition = iconObj?.position || "left";
    return (
      iconObj?.icon &&
      iconPosition === position && (
        <i
          className={`qui-icon ${iconObj.icon}`}
          style={{ fontSize: iconObj.size }}
        ></i>
      )
    );
  }
  //-------------------------------------------------------------------
  // Set the card text
  //-------------------------------------------------------------------
  let cardTagText = props.content ? props.content : "";
  let iconOnly = cardTagText === "";
  let loadingText = "Please Wait...";
  //-------------------------------------------------------------------
  //  Translate the text objects in case their is a dictionary provided
  //-------------------------------------------------------------------
  if (
    props.withTranslation?.lang &&
    props.withTranslation.lang !== "" &&
    props.withTranslation.lang !== "en"
  ) {
    let tObj = getTranslation(props.withTranslation);
    if (tObj && props.content && props.content !== "") {
      cardTagText = tObj.content;
      loadingText = tObj.loading;
    }
  }
  //-------------------------------------------------------------------
  // 6. Provide loading text if loading is clicked
  //-------------------------------------------------------------------
  cardTagText = props.isLoading ? loadingText : cardTagText;

  // ========================= Render Function =================================

  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className={`qui ${quommonClasses.parentClasses}`}
    >
      <div
        className={`qui-btn ${
          props.isActive
            ? "qui-card-tag-block"
            : "qui-card-tag-block qui-card-tag-decativated"
        } ${quommonClasses.childClasses} ${
          props.isLeft ? "qui-card-tag-left-orientation" : ""
        }`}
        style={props.isActive ? activeColor : deactivatedColor}
        onClick={props.onClick}
      >
        <div className="qui-card-tag-label">
          {props.isLoading ? (
            <i className="icon-loader fa fa-spinner fa-spin"></i>
          ) : (
            getIcon(props.withIcon, "left", iconOnly)
          )}
          <span className="qui-card-tag-content">{cardTagText}</span>
        </div>
      </div>
    </motion.div>
  );
}
