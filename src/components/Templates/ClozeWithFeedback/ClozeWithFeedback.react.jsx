// Import npm packages
import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
  getAnimation,
  getQuommons,
  getTranslation,
  resolveImage,
} from "../../../common/javascripts/helpers.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./ClozeWithFeedback.scss";
import "../../../common/stylesheets/overrule.scss";
import SlideHeader from "../../SlideHeader/SlideHeader.react";
import InputField from "../../InputField/InputField.react";
import Button from "../../Buttons/Button/Button.react";

ClozeWithFeedback.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
    ClozeWithFeedback data should be passed in data field and it is a required field
  */
  data: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    image: PropTypes.object,
    backgroundImage: PropTypes.object,
    question: PropTypes.string,
    answer: PropTypes.string,
    purpose: PropTypes.string,
  }).isRequired,
  /**
    ClozeWithFeedback should have imageLibrary array
  */
  imageLibrary: PropTypes.array,
  slideId: PropTypes.number,
  /**
    ClozeWithFeedback component must have the trackInteraction function passed as props
  */
  trackInteraction: PropTypes.func,
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
    questionColor: PropTypes.string,
    slideHeaderTextColor: PropTypes.string,
    slideHeaderAccentColor: PropTypes.string,
    slideHeaderBackgroundColor: PropTypes.string,
    inputFieldTextColor: PropTypes.string,
    inputFieldAccentColor: PropTypes.string,
    inputFieldBackgroundColor: PropTypes.string,
    buttonTextColor: PropTypes.string,
    buttonBackgroundColor: PropTypes.string,
    buttonHoverBackgroundColor: PropTypes.string,
    buttonHoverTextColor: PropTypes.string,
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
    Use to show a translated version of the component text. Dictionary must be valid JSON. 
  */
  withTranslation: PropTypes.shape({
    lang: PropTypes.string,
    tgt: PropTypes.string,
    dictionary: PropTypes.string,
  }),
  /**
    Use to enable/disable the component
  */
  isDisabled: PropTypes.bool,
  /**
    Use to show/hide the component
  */
  isHidden: PropTypes.bool,
};

ClozeWithFeedback.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  data: {},
  slideId: 0,
  //=======================================
  // Quommon props
  //=======================================
  asVariant: "primary",
  withColor: null,
  withAnimation: null,
  withTranslation: null,
  isDisabled: false,
  isHidden: false,
};
/**
## Notes
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- component is used to show the question with the input field, user need to submit the 
  answer using the input field.
**/
export default function ClozeWithFeedback(props) {
  let { data, withColor, imageLibrary } = props;
  //-------------------------------------------------------------------
  // 1. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "cloze-with-feedback");
  quommonClasses.childClasses += ` variant-${props.asVariant}-text`;

  //-------------------------------------------------------------------
  // 2. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props);
  const [answer, setAnswer] = useState();
  function handleSubmit() {
    props.trackInteraction(answer);
  }
  function changeText(value) {
    setAnswer(value);
  }

  //-------------------------------------------------------------------
  // 3. Setting the colors of the imported components
  //-------------------------------------------------------------------
  let buttonColors = {
    textColor: props.withColor?.buttonTextColor,
    backgroundColor: props.withColor?.buttonBackgroundColor,
    hoverBackgroundColor: props.withColor?.buttonHoverBackgroundColor,
    hoverTextColor: props.withColor?.buttonHoverTextColor,
  };
  let inputFieldColors = {
    textColor: props.withColor?.inputFieldTextColor,
    accentColor: props.withColor?.inputFieldAccentColor,
    backgroundColor: props.withColor?.inputFieldBackgroundColor,
  };
  let slideHeaderColors = {
    textColor: props.withColor?.slideHeaderTextColor,
    accentColor: props.withColor?.slideHeaderAccentColor,
    backgroundColor: props.withColor?.slideHeaderBackgroundColor,
  };

  //-------------------------------------------------------------------
  // 4. Conditional text display on the submit button
  //-------------------------------------------------------------------
  let buttonText = data?.purpose === "quiz" ? "Check Answer" : "Submit Answer";

  //-------------------------------------------------------------------
  // 5. Get translation of the component
  //-------------------------------------------------------------------
  let tObj = null;
  if (
    props.withTranslation?.lang &&
    props.withTranslation.lang !== "" &&
    props.withTranslation.lang !== "en"
  ) {
    tObj = getTranslation(props.withTranslation);
    buttonText =
      data?.purpose === "quiz"
        ? tObj?.checkAnswer || "Submit Answer"
        : tObj?.submitAnswer || "Submit Answer";
  }

  //-------------------------------------------------------------------
  // 6. Hide the placeholder text
  //-------------------------------------------------------------------
  let answerText = props.data?.answer
    ?.toString()
    .trim()
    .replace(/[a-z0-9&_]/gi, "*");

  //-------------------------------------------------------------------
  // 7. Get the card backgroundImage
  //-------------------------------------------------------------------
  const getBackground = () => {
    return {
      backgroundImage: `url(${resolveImage(
        data?.backgroundImage.id,
        imageLibrary
      )})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    };
  };
  const background = data?.backgroundImage
    ? getBackground()
    : {
        backgroundColor: withColor?.backgroundColor
          ? withColor?.backgroundColor
          : "#fff",
      };

  // ========================= Render Function =================================
  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className={`qui ${quommonClasses.parentClasses}`}
    >
      {data && (
        <div className="qui-cloze-with-feedback-card" style={{ ...background }}>
          {!data?.image && (data?.title || data?.subtitle) && (
            <SlideHeader
              title={data?.title}
              subtitle={data?.subtitle}
              withColor={slideHeaderColors}
            />
          )}
          {data?.image && (
            <img
              className="qui-cloze-with-feedback-image"
              src={resolveImage(data?.image.id, imageLibrary)}
              alt=""
            />
          )}
          <div
            className={`qui-cloze-with-feedback-label variant-${props.asVariant}-text`}
            style={{ color: props.withColor?.questionColor }}
            key={"cloze-with-feedback-label-" + props.slideId}
          >
            {props.data?.question}
          </div>
          <div className="qui-cloze-with-feedback-input-button-container">
            <InputField
              {...props}
              placeholder={answerText}
              withColor={inputFieldColors}
              onSubmit={(name, value) => changeText(value)}
              name="cloze-with-feedback-input-field"
              asEmphasis="listInput"
            />
            <Button
              content={buttonText}
              withColor={buttonColors}
              onClick={() => handleSubmit()}
            ></Button>
          </div>
        </div>
      )}
    </motion.div>
  );
}
