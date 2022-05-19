// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { getQuommons, getAnimation } from "../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./AmplayfierDrawerRect.scss";
import "../../common/stylesheets/overrule.scss";

AmplayfierDrawerRect.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
    AmplayfierDrawerRect children component has to be in content prop.
    */
  content: PropTypes.element,
  /**
    Use for rounded corners
    */
  isCircular: PropTypes.bool,
  //=======================================
  // Quommon props
  //=======================================
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
};

AmplayfierDrawerRect.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  content: {},
  isCircular: false,
  //=======================================
  // Quommon props
  //=======================================
  asPadded: "normal",
  asFloated: "none",
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
**/
export default function AmplayfierDrawerRect(props) {
  const { content, withColor } = props;
  //-------------------------------------------------------------------
  // 1. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "amplayfier-drawer-rect");
  if (props.isCircular) quommonClasses.parentClasses += ` is-circular`;
  //-------------------------------------------------------------------
  // 7. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props.withAnimation);

  // ========================= Render Function =================================

  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className={`qui ${quommonClasses.parentClasses}`}
      style={{ backgroundColor: withColor?.backgroundColor }}
    >
      <div
        className={`qui-amplayfier-drawer-rect-container ${quommonClasses.childClasses}`}
      >
        {content}
      </div>
    </motion.div>
  );
}
