// Import npm packages
import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { getAnimation, getQuommons } from "../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./MCQwithFeedback.scss";
import "../../common/stylesheets/overrule.scss";
import SlideHeader from "../SlideHeader/SlideHeader.react";
import ButtonBank from "../ButtonBank/ButtonBank.react";

MCQwithFeedback.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
    MCQwithFeedback data should be passed in content field and it is a required field
    */
  content: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
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
    backgroundColor: PropTypes.string,
    accentColor: PropTypes.string,
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

MCQwithFeedback.defaultProps = {
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
export default function MCQwithFeedback(props) {
  const { content } = props;
  //-------------------------------------------------------------------
  // 2. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "mcq-with-feedback");
  //-------------------------------------------------------------------
  // 5. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props.withAnimation);

  // ========================= Render Function =================================

  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className={`qui qui-mcq-with-feedback-card ${quommonClasses.parentClasses}`}
    >
      <div
        className={`qui-mcq-with-feedback-container ${quommonClasses.childClasses}`}
      >
        {content?.title || content?.subtitle ? (
          <SlideHeader
            content={{ title: content?.title, subTitle: content?.subtitle }}
            withColor={props.withColor}
          />
        ) : (
          <img className="qui-mcq-with-feedback-image" src={props.content?.image} alt="slide" />
        )}
        <p
          className={`qui-mcq-with-feedback-caption`}
          style={{ color: props.withColor?.captionColor }}
        >
          {props.content?.caption}
        </p>
        <ButtonBank
          {...props}
          content={props.content?.options}
          onClick={(value) => props.onClick(value.target.innerText)}
        />
      </div>
    </motion.div>
  );
}
