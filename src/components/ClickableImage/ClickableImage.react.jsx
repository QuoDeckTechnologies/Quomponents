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
  ClickableImage image string has to be in image props.
  */
  image: PropTypes.string,
  /**
  Use to show the selection of the component
  */
  active: PropTypes.bool,
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
  image: "",
  active: false,
  //=======================================
  // Quommon props
  //=======================================
  asVariant: "primary",
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
  const { image } = props;
  //-------------------------------------------------------------------
  // 1. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "clickable-image");
  if (props.isCircular) quommonClasses.childClasses += ` is-circular`;
  //-------------------------------------------------------------------
  // 2. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props);
  const [active, setActive] = useState(props.active);
  useEffect(() => {
    setActive(props.active);
  }, [props.active]);
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
        src={image ? image : defaultImage}
        className={`${quommonClasses.childClasses} ${
          active ? `qui-active-image-click` : `qui-clicked-on-image`
        } qui-image-clickable qt-shadow`}
        alt="ClickableImage"
        onClick={(e) => handleClick(e)}
        style={{ borderColor: props.withColor?.borderColor }}
      />
    </motion.div>
  );
}
