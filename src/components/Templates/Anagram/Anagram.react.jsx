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
import "./Anagram.scss";
import "../../../common/stylesheets/overrule.scss";
import SlideHeader from "../../SlideHeader/SlideHeader.react";
import InputField from "../../InputField/InputField.react";
import Button from "../../Buttons/Button/Button.react";

Anagram.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
    Anagram data should be passed in data field and it is a required field
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
    Anagram should have imageLibrary array
    */
  imageLibrary: PropTypes.array,
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
    answerColor: PropTypes.string,
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
  /**
    Anagram component must have the onClick function passed as props
    */
  onClick: PropTypes.func.isRequired,
};

Anagram.defaultProps = {
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
- component is used to show the question and the jumbled answer , user need to submit the correct
  answer using the input field, typed answer will submitted as it is.
**/
export default function Anagram(props) {
  let { data, withColor, imageLibrary } = props
  //-------------------------------------------------------------------
  // Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "anagram");
  quommonClasses.childClasses += ` variant-${props.asVariant}-text`;
  //-------------------------------------------------------------------
  // Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props);
  const [state, setState] = useState();
  function handleSubmit() {
    props.onClick(state)
  }
  //-------------------------------------------------------------------
  // Setting the colors of the imported components
  //-------------------------------------------------------------------
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
  let slideHeaderColors = {
    textColor: props.withColor?.slideHeaderTextColor,
    accentColor: props.withColor?.slideHeaderAccentColor,
    backgroundColor: props.withColor?.slideHeaderBackgroundColor
  }
  //--------------------------------------------------------------------------
  // Function used to jumble the word which is given as the answer from prop
  //--------------------------------------------------------------------------
  let jumbledWords = answer => {
    if (answer !== "" && answer) {
      return answer
        .toUpperCase()
        .split("")
        .sort(function () {
          return 0.5 - Math.random();
        })
        .join("")
    }
  };
  //-------------------------------------------------------------------
  // Get translation of the component
  //-------------------------------------------------------------------
  let buttonText = data?.purpose === "quiz" ? "Check Answer" : "Submit Answer"
  let inputFieldLable = "Input Name"
  let tObj = null;
  if (
    props.withTranslation?.lang &&
    props.withTranslation.lang !== "" &&
    props.withTranslation.lang !== "en"
  ) {
    tObj = getTranslation(props.withTranslation);
    inputFieldLable = tObj?.label
    buttonText = data?.purpose === "quiz" ? tObj?.quizLabel || "Check Answer" : tObj?.nonQuizLabel || "Submit Answer"
  }
  const getBackground = () => {
    return {
      backgroundImage: `url(${resolveImage(data?.backgroundImage.id, imageLibrary)})`,
      backgroundSize: "cover",
    };
  };
  const background = data?.backgroundImage
    ? getBackground()
    : { backgroundColor: withColor?.backgroundColor ? withColor?.backgroundColor : "#fff" };

  // ========================= Render Function =================================
  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className={`qui ${quommonClasses.parentClasses}`}
    >
      {data &&
        <div className="qui-anagram-card" style={{ ...background }}>
          {!data?.image && (data?.title || data?.subtitle) && (
            <SlideHeader
              title={data?.title}
              subtitle={data?.subtitle}
              withColor={slideHeaderColors} />
          )}
          {data?.image && (
            <img className="qui-anagram-image" src={resolveImage(data?.image.id, imageLibrary)} alt="" />
          )}
          <div
            className={`qui-anagram-question variant-${props.asVariant}-text`}
            style={{ color: props.withColor?.questionColor }}
            key={"anagram-question-" + props.slideId}>
            {props.data?.question}
          </div>
          <p className="qui-anagram-answer"
            style={{ color: props.withColor?.answerColor }}>
            {jumbledWords(data?.answer)}
          </p>
          <InputField {...props}
            label={inputFieldLable}
            withColor={inputFieldColors}
            onSubmit={(name, value) => setState(value)}
            name="anagram-input-field"
            withTranslation={props.withTranslation} />
          <Button
            content={buttonText}
            withColor={buttonColors}
            asVariant={props.asVariant}
            onClick={() => handleSubmit()}
          >
          </Button>
        </div>}
    </motion.div>
  );
}
