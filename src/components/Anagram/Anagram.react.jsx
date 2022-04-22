// Import npm packages
import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
  getAnimation,
  getQuommons,
} from "../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./Anagram.scss";
import "../../common/stylesheets/overrule.scss";
import BannerCard from "../Carousel/BannerCard/BannerCard.react";
import InputField from "../InputField/InputField.react";
import Button from "../Buttons/Button/Button.react";

Anagram.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
    Anagram data should be passed in content field and it is a required field
    */
  content: PropTypes.shape({
    image: PropTypes.string,
    caption: PropTypes.string,
    label: PropTypes.string,
  }),
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
    Use to override component colors and behavior
    */
  withColor: PropTypes.shape({
    labelColor: PropTypes.string,
    captionColor: PropTypes.string,
    inputFieldTextColor: PropTypes.string,
    inputFieldAccentColor: PropTypes.string,
    inputFieldBackgroundColor: PropTypes.string,
    buttonTextColor: PropTypes.string,
    buttonBackgroundColor: PropTypes.string,
    buttonHoverBackgroundColor: PropTypes.string,
    buttonHoverTextColor: PropTypes.string,
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

Anagram.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  content: {
    image: "",
    caption: "",
    label: "",
  },
  //=======================================
  // Quommon props
  //=======================================
  asVariant: "primary",
  withColor: null,
  withAnimation: null,
  isDisabled: false,
  isHidden: false,
};
/**
## Notes
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function Anagram(props) {
  //-------------------------------------------------------------------
  // 2. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "anagram");
  quommonClasses.childClasses += ` variant-${props.asVariant}-text`;
  //-------------------------------------------------------------------
  // 5. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props.withAnimation);
  const [state, setState] = useState();
  function handleSubmit() {
    props.onClick(state)
  }
  let buttonColors = {
    textColor: props.withColor?.buttonTextColor,
    backgroundColor: props.withColor?.buttonBackgroundColor,
    hoverBackgroundColor: props.withColor?.buttonHoverBackgroundColor,
    hoverTextColor: props.withColor?.buttonHoverTextColor
  }
  let inputFieldColors = {
    textColor: props.withColor?.inputFieldTextColor,
    accentColor: props.withColor?.inputFieldAccentColor,
    backgroundColor: props.withColor?.inputFieldBackgroundColor
  }
  // ========================= Render Function =================================
  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className={`qui qui-anagram-card ${quommonClasses.parentClasses}`}
    >
      <div className={`${quommonClasses.childClasses}`}>
        <BannerCard {...props} content={{ image: props.content?.image }} />
        <p className={`qui-anagram-caption variant-${props.asVariant}-text`} style={{ color: props.withColor?.captionColor }}>{props.content?.caption}</p>
        <p className="qui-anagram-label" {...props} style={{ color: props.withColor?.labelColor }}>{props.content?.label}</p>
        <InputField {...props} content={{ label: "Input Name" }} withColor={inputFieldColors} onClick={(name, value) => setState(value)} />
        <Button {...props}
          content={"Submit Answer"}
          withColor={buttonColors}
          onClick={() => handleSubmit()} />
      </div>
    </motion.div>
  );
}
