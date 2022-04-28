// Import npm packages
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { getAnimation, getQuommons } from "../../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./MCQwithFeedback.scss";
import "../../../common/stylesheets/overrule.scss";
import SlideHeader from "../../SlideHeader/SlideHeader.react";
import ButtonBank from "../../ButtonBank/ButtonBank.react";
import IconBlock from "../../IconBlock/IconBlock.react";

MCQwithFeedback.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
    MCQwithFeedback data should be passed in data field and it is a required field
    */
  data: PropTypes.shape({
    backgroundImage: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    icon: PropTypes.string,
    question: PropTypes.string,
    feedback: PropTypes.array,
    options: PropTypes.array,
  }),
  slideId: PropTypes.number,
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
    textColor: PropTypes.string,
    slideHeaderBackgroundColor: PropTypes.string,
    slideHeaderAccentColor: PropTypes.string,
    slideHeaderTextColor: PropTypes.string,
    buttonBackgroundColor: PropTypes.string,
    buttonTextColor: PropTypes.string,
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

MCQwithFeedback.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  data: {
    backgroundImage: "",
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
  const { data, withColor } = props;

  let optionsArray = [];
  data.options.forEach((item) => optionsArray.push(item.text.toLowerCase()));

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
        <div className="qui-mcq-with-feedback-slide-header">
          {!data?.backgroundImage && (data?.title || data?.subtitle) ? (
            <SlideHeader
              content={{ title: data?.title, subTitle: data?.subtitle }}
              withColor={{
                accentColor: withColor?.slideHeaderAccentColor,
                textColor: withColor?.slideHeaderTextColor,
                backgroundColor: withColor?.slideHeaderBackgroundColor,
              }}
            />
          ) : (
            <img
              className="qui-mcq-with-feedback-image"
              src={props.data?.backgroundImage}
              alt="slide"
            />
          )}
          {data?.icon && data?.title && (
            <div className={`qui-mcq-with-feedback-icon-block`}>
              <IconBlock
                withColor={{
                  accentColor: withColor?.slideHeaderTextColor,
                  backgroundColor: withColor?.slideHeaderAccentColor,
                }}
                withIcon={{ name: data?.icon }}
              />
            </div>
          )}
        </div>
        {data?.icon && <div className="qui-mcq-with-feedback-separator"></div>}
        <p
          className={`qui-mcq-with-feedback-question`}
          style={{ color: props.withColor?.captionColor }}
        >
          {props.data?.question}
        </p>
        {
          <ButtonBank
            {...props}
            content={optionsArray}
            withColor={{
              backgroundColor: withColor.buttonBackgroundColor,
              textColor: withColor.buttonTextColor,
              hoverBackgroundColor: withColor.buttonHoverBackgroundColor,
              hoverTextColor: withColor.buttonHoverTextColor,
            }}
            onClick={(e) =>
              props.onClick(
                optionsArray.indexOf(e.target.innerText.toLowerCase())
              )
            }
          />
        }
      </div>
    </motion.div>
  );
}
