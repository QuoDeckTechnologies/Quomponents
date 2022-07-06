// Import npm packages
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { getQuommons, getAnimation } from "../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./ClickableImage.scss";
import "../../common/stylesheets/overrule.scss";
import defaultImage from "../../assets/default.jpeg";

ClickableImage.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
    ClickableImage image has to be in content.
    */
  content: PropTypes.shape({
    image: PropTypes.string,
  }),
  /**
    Use to show the selection of the component
    */
  isActive: PropTypes.bool,
  //=======================================
  // Quommon props
  //=======================================
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
    Use to override component colors and behavior
    */
  withColor: PropTypes.shape({
    borderColor: PropTypes.string,
  }),
  /**
    Use to show/hide the component
    */
  isHidden: PropTypes.bool,
  /**
  Use for rounded corners or circular icon button 
  */
  isCircular: PropTypes.bool,
  /**
    Use to enable/disable the component
    */
  isDisabled: PropTypes.bool,
  /**
    ClickableImage component must have the onClick function passed as props
    */
  onClick: PropTypes.func.isRequired,
};

ClickableImage.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  content: {},
  isActive: false,
  //=======================================
  // Quommon props
  //=======================================
  withAnimation: null,
  isHidden: false,
  isCircular: false,
  isDisabled: false,
};

/**
## Notes
- The design system used for this component is HTML and CSS
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function ClickableImage(props) {
  const { content } = props;
  //-------------------------------------------------------------------
  // 1. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "clickable-image");
  if (props.isCircular) quommonClasses.childClasses += ` is-circular`;
  //-------------------------------------------------------------------
  // 2. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props);
  const [isActive, setisActive] = useState(props.isActive);
  useEffect(() => {
    setisActive(props.isActive);
  }, [props.isActive]);
  let handleClick = (e) => {
    props.onClick(e);
  };

  // ========================= Render Function =================================

  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className={`qui ${quommonClasses.parentClasses}`}
    >
      <img
        src={content?.image ? content.image : defaultImage}
        className={`${quommonClasses.childClasses} ${
          isActive ? `qui-active-image-click` : `qui-clicked-on-image`
        } qui-image-clickable`}
        alt="ClickableImage"
        onClick={(e) => handleClick(e)}
        style={{ borderColor: props.withColor?.borderColor }}
      />
    </motion.div>
  );
}
