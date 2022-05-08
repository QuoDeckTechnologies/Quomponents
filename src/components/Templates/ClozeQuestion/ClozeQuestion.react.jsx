// Import npm packages
import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
    getAnimation,
    getQuommons,
    resolveImage,
} from "../../../common/javascripts/helpers.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./ClozeQuestion.scss";
import "../../../common/stylesheets/overrule.scss";
import SlideHeader from "../../SlideHeader/SlideHeader.react";
import InputField from "../../InputField/InputField.react";
import Button from "../../Buttons/Button/Button.react";

ClozeQuestion.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    ClozeQuestion data should be passed in data field and it is a required field
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
    ClozeQuestion should have imageLibrary array
    */
    imageLibrary: PropTypes.array,
    slideId: PropTypes.number,
    /**
    ClozeQuestion component must have the trackInteraction function passed as props
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
    Use to enable/disable the component
    */
    isDisabled: PropTypes.bool,
    /**
    Use to show/hide the component
    */
    isHidden: PropTypes.bool,
    /**
    ClozeQuestion component must have the onClick function passed as props
    */
    onClick: PropTypes.func.isRequired,
};

ClozeQuestion.defaultProps = {
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
export default function ClozeQuestion(props) {
    let { data, withColor, imageLibrary } = props
    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "cloze-question");
    quommonClasses.childClasses += ` variant-${props.asVariant}-text`;
    //-------------------------------------------------------------------
    // 2. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);
    const [answer, setAnswer] = useState();
    function handleSubmit() {
        props.trackInteraction(answer)
    }
    //-------------------------------------------------------------------
    // 3. Setting the colors of the imported components
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

    //-------------------------------------------------------------------
    // 4. Conditional text display on the submit button
    //-------------------------------------------------------------------
    let buttonText = data?.purpose === "quiz" ? "Check Answer" : "Submit Answer";

    const getBackground = () => {
        return {
            background: `url(${resolveImage(data?.backgroundImage.id, imageLibrary)})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
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
                <div className="qui-cloze-question-card" style={{ ...background }}>
                    {!data?.image && (data?.title || data?.subtitle) && (
                        <SlideHeader
                            content={{ title: data?.title, subTitle: data?.subtitle }}
                            withColor={slideHeaderColors} />
                    )}
                    {data?.image && (
                        <img className="qui-cloze-question-image" src={resolveImage(data?.image.id, imageLibrary)} alt="" />
                    )}
                    <div
                        className={`qui-cloze-question-label variant-${props.asVariant}-text`}
                        style={{ color: props.withColor?.questionColor }}
                        key={"cloze-question-label-" + props.slideId}>
                        {props.data?.question}
                    </div>
                    <div className="qui-cloze-question-input-button-container">
                        <InputField {...props}
                            content={{ label: props.data?.answer ? props.data?.answer : "Answer" }}
                            withColor={inputFieldColors}
                            onClick={(name, value) => setAnswer(value)}
                            name="cloze-question-input-field" />
                        <Button {...props}
                            content={buttonText}
                            withColor={buttonColors}
                            onClick={() => handleSubmit()} >
                        </Button>
                    </div>
                </div>}
        </motion.div>
    );
}