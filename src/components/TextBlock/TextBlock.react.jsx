// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { getQuommons, getAnimation } from "../../common/javascripts/helpers";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./TextBlock.scss";
import "../../common/stylesheets/overrule.scss";

TextBlock.propTypes = {
  //=======================================
  // Component Specific props
  //======================================
  /**
   TextBlock Text has to be in content or passed as string to the component.
   */
  content: PropTypes.string,

  /**
    Use to toggle position of text-block conversation
    */
  position: PropTypes.oneOf([
    "right-top",
    "right-bottom",
    "left-top",
    "left-bottom",
  ]),
  /**
    toggle the conversation prop to see the component as chat conversation
    */
  conversation: PropTypes.bool,

  // Quommon props
  //=======================================
  /**
    Use to float the component in parent container
    */
  asFloated: PropTypes.oneOf(["left", "right", "inline", "none"]),
  /**
    Use to define standard component type
    */
  asVariant: PropTypes.oneOf(["primary", "secondary", "success", "warning", "error"]),
  /** 
  Use to define component padding in increasing order
  */
  asPadded: PropTypes.oneOf(["fitted", "compact", "normal", "relaxed"]),
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
    ]),
    duration: PropTypes.number,
    delay: PropTypes.number,
  }),
  /**
    Use to show/hide the component
    */
  isHidden: PropTypes.bool,
};

TextBlock.defaultProps = {
  // Component Specific props
  //=======================================
  content: "",
  position: "left-top",
  conversation: false,
  // Quommon props
  //=======================================
  asFloated: "inline",
  asPadded: "normal",
  asVariant: "primary",
  asSize: "normal",

  withColor: null,
  withAnimation: null,

  isHidden: false,
  isDisabled: false,
};
/**
## Notes
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- TextBlock component can be used as the conversation or just a block with content.
- Conversation props passed as true/false
**/
export default function TextBlock(props) {
  let { content } = props;
  //-------------------------------------------------------------------
  // 1. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "text-block");
  //-------------------------------------------------------------------
  // 2. Get custom styling
  //-------------------------------------------------------------------
  const getArrowPosition = (position) => {
    if (position === "right-bottom") {
      return "qui-arrow-right-bottom";
    }
    if (position === "left-bottom") {
      return "qui-arrow-left-bottom";
    }
    if (position === "right-top") {
      return "qui-arrow-right-top";
    } else {
      return "qui-arrow-left-top";
    }
  };
  //-------------------------------------------------------------------
  // 3. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props);

  // ========================= Render Function =================================
  return (
    <motion.div
      initial={props.withAnimation ? animate.from : animate.from}
      animate={props.withAnimation ? animate.to : animate.to}
      className={`qui qui-text-block-container ${quommonClasses.parentClasses}`}
    >
      {content && (
        <div className={`qui-text-block-p ${quommonClasses.childClasses}`}>
          <div
            className={`qui-text-block-area qui-btn variant-${props.asVariant} pad-${props.asPadded}`}
            style={{ backgroundColor: props.withColor?.backgroundColor }}
          >
            <div
              className={`qui-block-text`}
              style={{ color: props.withColor?.textColor }}
            >
              {content}
            </div>
          </div>
          {props.conversation && (
            <div className={`qui-text-block-tringle`}>
              <div
                className={`qui-text-block-chat-arrow qui-btn variant-${props.asVariant} ${getArrowPosition(
                  props.position
                )}`}
                style={{
                  backgroundColor: props.withColor?.backgroundColor,
                }}
              ></div>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
}
