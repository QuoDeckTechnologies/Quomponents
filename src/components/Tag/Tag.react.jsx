import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { getAnimation, getQuommons } from "../../common/javascripts/helpers";
import "../../common/stylesheets/common.css";
import "./Tag.scss";
import "../../common/stylesheets/overrule.scss";

Tag.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
    Use to define Tag's value
  */
  content: PropTypes.string.isRequired,
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
    Use to define component padding in increasing order
  */
  asPadded: PropTypes.oneOf(["fitted", "compact", "normal", "relaxed"]),
  /**
    Use to float the component in parent container
  */
  asFloated: PropTypes.oneOf(["left", "right", "none", "inline"]),
  /**
    Use to define component backgroundColor and textColor Color 
  */
  withColor: PropTypes.shape({
    textColor: PropTypes.string,
    backgroundColor: PropTypes.string,
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
};

Tag.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  content: "",
  //=======================================
  // Quommon props
  //=======================================
  asVariant: "primary",
  asSize: "normal",
  asPadded: "normal",
  asFloated: "none",

  withColor: null,
  withAnimation: null,

  isHidden: false,
};
/**
## Notes
- The design system used for this component is HTML and CSS
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function Tag(props) {
  //-------------------------------------------------------------------
  // 1. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "tag");
  //-------------------------------------------------------------------
  // 2. Use to set Color in Tag Component
  //-------------------------------------------------------------------
  let Color = {
    backgroundColor: props.withColor?.backgroundColor,
    color: props.withColor?.textColor,
    display: props?.content ? "flex" : "none",
  };
  //-------------------------------------------------------------------
  // 3. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props);

  // ========================= Render Function =================================
  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className={`qui ${quommonClasses.parentClasses}`}
    >
      <div
        className={`qui-tag-block qui-btn ${quommonClasses.childClasses}`}
        style={Color}
      >
        <div className="qui-tag-label qt-lbl">{props?.content}</div>
      </div>
    </motion.div>
  );
}
