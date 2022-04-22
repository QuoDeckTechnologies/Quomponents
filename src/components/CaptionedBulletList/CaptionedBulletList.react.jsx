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
import "./CaptionedBulletList.scss";
import "../../common/stylesheets/overrule.scss";
import SlideHeader from "../SlideHeader/SlideHeader.react";
import TextBlock from "../TextBlock/TextBlock.react";

CaptionedBulletList.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
    CaptionedBulletList data should be passed in content field and it is a required field
    */
  content: PropTypes.shape({
    slideHeaderTitle: PropTypes.string,
    slideHeaderSubtitle: PropTypes.string,
    textBlockTitle: PropTypes.string,
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
    slideHeaderTextColor: PropTypes.string,
    slideHeaderAccentColor: PropTypes.string,
    slideHeaderBackgroundColor: PropTypes.string,
    textBlockBackgroundColor: PropTypes.string,
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

CaptionedBulletList.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  content: {
    slideHeaderTitle: "",
    slideHeaderSubtitle: "",
    textBlockTitle: "",
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
export default function CaptionedBulletList(props) {
  //-------------------------------------------------------------------
  // 2. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "CaptionedBulletList");
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
  let slideHeaderColors = {
    textColor: props.withColor?.slideHeaderTextColor,
    accentColor: props.withColor?.slideHeaderAccentColor,
    backgroundColor: props.withColor?.slideHeaderBackgroundColor
  }
  let SlideHeaderText = {
    title: props.content?.slideHeaderTitle,
    subTitle: props.content?.slideHeaderSubtitle,
  }
  // ========================= Render Function =================================
  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className={`qui qui-captioned-bullet-list-card ${quommonClasses.parentClasses}`}
    >
      <SlideHeader {...props} content={SlideHeaderText} withColor={slideHeaderColors} />
      <TextBlock {...props} content={props.content?.textBlockTitle} withColor={{ backgroundColor: props.withColor?.textBlockBackgroundColor }} />
    </motion.div>
  );
}