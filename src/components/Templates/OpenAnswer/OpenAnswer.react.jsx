// Import npm packages
import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
  getAnimation,
  getQuommons,
  getTranslation,
  resolveImage,
} from "../../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./OpenAnswer.scss";
import "../../../common/stylesheets/overrule.scss";
import SlideHeader from "../../SlideHeader/SlideHeader.react";
import TextBlock from "../../TextBlock/TextBlock.react";
import InputField from "../../InputField/InputField.react";
import Button from "../../Buttons/Button/Button.react";

OpenAnswer.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
  OpenAnswer data should be passed in data field and it is a required field
  */
  data: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    question: PropTypes.string,
    image: PropTypes.object,
    backgroundImage: PropTypes.object,
  }),
  /**
  OpenAnswer slideId should be passed with props, to specify the slide.
  */
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
    slideHeaderTextColor: PropTypes.string,
    slideHeaderAccentColor: PropTypes.string,
    slideHeaderBackgroundColor: PropTypes.string,
    questionTextColor: PropTypes.string,
    questionBackgroundColor: PropTypes.string,
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
  Use to show/hide the component
  */
  isHidden: PropTypes.bool,
  /**
  Use to enable/disable the component
  */
  isDisabled: PropTypes.bool,
  /**
  OpenAnswer component must have the onClick function passed as props
  */
  onClick: PropTypes.func.isRequired,
};

OpenAnswer.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  data: {
    title: "",
    subtitle: "",
    question: "",
    image: {},
    backgroundImage: {},
  },
  imageLibrary: [{}],
  slideId: 0,
  //=======================================
  // Quommon props
  //=======================================
  asVariant: "primary",
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
- Displays a Open Answer slide withSlideHeader , TextBlock, inputFiled, and a Button
**/
export default function OpenAnswer(props) {
  let { data, withColor, imageLibrary } = props;
  //-------------------------------------------------------------------
  // Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "open-answer");
  quommonClasses.childClasses += ` variant-${props.asVariant}-text`;
  //-------------------------------------------------------------------
  //  Translate the text objects in case their is a dictionary provided
  //-------------------------------------------------------------------
  let tObj = getTranslation(props.withTranslation);
  let inputName = "Input Name"
  if (tObj && inputName !== "") inputName = tObj.label
  //-------------------------------------------------------------------
  //  Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props.withAnimation);
  //-------------------------------------------------------------------
  //  Setting the colors of imported components
  //-------------------------------------------------------------------
  let slideHeaderColors = {
    textColor: props.withColor?.slideHeaderTextColor,
    accentColor: props.withColor?.slideHeaderAccentColor,
    backgroundColor: props.withColor?.slideHeaderBackgroundColor,
  };
  let textBlockColors = {
    textColor: props.withColor?.questionTextColor,
    backgroundColor: props.withColor?.questionBackgroundColor,
  };
  let inputFieldColors = {
    textColor: props.withColor?.inputFieldTextColor,
    accentColor: props.withColor?.inputFieldAccentColor,
    backgroundColor: props.withColor?.inputFieldBackgroundColor,
  };
  let buttonColors = {
    textColor: props.withColor?.buttonTextColor,
    backgroundColor: props.withColor?.buttonBackgroundColor,
    hoverBackgroundColor: props.withColor?.buttonHoverBackgroundColor,
    hoverTextColor: props.withColor?.buttonHoverTextColor,
  };
  let SlideHeaderText = {
    title: props.data?.title,
    subTitle: props.data?.subtitle,
  };
  const getBackground = () => {
    return {
      backgroundImage: `url(${resolveImage(
        data?.backgroundImage.id,
        imageLibrary
      )})`,
      backgroundSize: "cover",
    };
  };
  const background = data?.backgroundImage
    ? getBackground()
    : {
      backgroundColor: withColor?.backgroundColor
        ? withColor?.backgroundColor
        : "#fff",
    };

  const [state, setState] = useState();
  function handleSubmit() {
    props.onClick(state);
  }
  // ========================= Render Function =================================
  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className={`qui ${quommonClasses.parentClasses}`}
    >
      {data && (
        <div className="qui-open-answer-card" style={{ ...background }}>
          <div
            className={`${quommonClasses.childClasses}`}
            key={"open-answer-" + props.slideId}
          >
            {!data?.image && (data?.title || data?.subtitle) && (
              <SlideHeader
                content={SlideHeaderText}
                withColor={slideHeaderColors}
              />
            )}
            {data?.image && (
              <img
                className="qui-open-answer-image"
                src={resolveImage(data?.image.id, imageLibrary)}
                alt=""
              />
            )}
            <TextBlock
              {...props}
              content={data?.question}
              withColor={textBlockColors}
            />
            <InputField
              {...props}
              content={{ label: inputName }}
              withColor={inputFieldColors}
              onClick={(name, value) => setState(value)}
              withTranslation={props.withTranslation}
              name="open-answer-input-field"
            />
            <Button
              {...props}
              withTranslation={null}
              content={tObj ? tObj.button : "Submit Answer"}
              withColor={buttonColors}
              onClick={() => handleSubmit()}
            ></Button>
          </div>
        </div>
      )}
    </motion.div>
  );
}
