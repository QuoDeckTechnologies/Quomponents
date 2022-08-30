// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { getQuommons, getAnimation } from "../../common/javascripts/helpers";
import SliderPackage from "@mui/material/Slider";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./Slider.scss";
import "../../common/stylesheets/overrule.scss";

Slider.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
    Use to set initial Value of the slider
  */
  initialValue: PropTypes.number,
  //=======================================
  // Quommon props
  //=======================================
  /**
  Use to define standard component type
  */
  asVariant: PropTypes.oneOf(["primary", "secondary"]),
  /**
    Use to override component colors and behavior
  */
  withColor: PropTypes.shape({
    backgroundColor: PropTypes.string,
    accentColor: PropTypes.string,
    hoverBackgroundColor: PropTypes.string,
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
    Slider component must have the onClick function passed as props
  */
  onClick: PropTypes.func.isRequired,
};

Slider.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  initialValue: 10,
  //=======================================
  // Quommon props
  //=======================================
  asVariant: "primary",
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
export default function Slider(props) {
  //-------------------------------------------------------------------
  // 1. Destructuring props
  //-------------------------------------------------------------------
  const { asVariant, withColor, initialValue, onClick } = props;
  //-------------------------------------------------------------------
  // 2. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "slider");
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
      <div className={`qui-slider-container ${quommonClasses.childClasses}`}>
        <SliderPackage
          min={0}
          max={100}
          color={asVariant}
          style={{
            color: withColor?.backgroundColor,
          }}
          defaultValue={initialValue}
          onChange={(e) => {
            onClick(e.target.value);
          }}
        />
      </div>
    </motion.div>
  );
}
