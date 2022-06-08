// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import _ from "lodash";
import {
    getAnimation,
    getQuommons,
    getTranslation,
    resolveImage
} from "../../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./Feedback.scss";
import "../../../common/stylesheets/overrule.scss";
import TextBlock from "../../TextBlock/TextBlock.react";
import Button from "../../Buttons/Button/Button.react"

Feedback.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    Feedback data should be passed in data field and it is a required field
    */
    data: PropTypes.shape({
        feedback: PropTypes.arrayOf(
            PropTypes.string
        ),
        selectedIndex: PropTypes.number,
        backgroundImage: PropTypes.object,
    }),
    /**
    Feedback can set image & backgroundImage from imageLibrary.
    */
    imageLibrary: PropTypes.array,
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
        textblockTextColor: PropTypes.string,
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
    Feedback component must have the onClick function passed as props
    */
    onClick: PropTypes.func,
};

Feedback.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    data: {},
    //=======================================
    // Quommon props
    //=======================================
    asVariant: "warning",
    withColor: null,
    withAnimation: null,
    withTranslation: null,
    isDisabled: false,
    isHidden: false,
};

/**
## Notes
- The design system used for this component is Fontawesome Icon
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function Feedback(props) {

    //-------------------------------------------------------------------
    // 1. Destructuring data from props
    //-------------------------------------------------------------------
    let { data, imageLibrary, asVariant, withColor } = props;
    //-------------------------------------------------------------------
    // 2. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "feedback");
    quommonClasses.childClasses += ` variant-${props.asVariant}-text`;
    //-------------------------------------------------------------------
    // 3. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);
    //-------------------------------------------------------------------
    // 4. Setting the colors of the imported components
    //-------------------------------------------------------------------
    let textblockColors = {
        textColor: withColor?.textblockTextColor,
    }

    let buttonColors = {
        textColor: withColor?.buttonTextColor,
        backgroundColor: withColor?.buttonBackgroundColor,
        hoverBackgroundColor: withColor?.buttonHoverBackgroundColor,
        hoverTextColor: withColor?.buttonHoverTextColor
    }
    //-------------------------------------------------------------------
    // 5. Translate the text objects in case their is a dictionary provided
    //-------------------------------------------------------------------
    let tObj;
    if (
    props.withTranslation?.lang &&
    props.withTranslation.lang !== "" &&
    props.withTranslation.lang !== "en"
    ) {
    tObj = getTranslation(props.withTranslation);
    }

    let refinedFeedback = _.map(data?.feedback, (fb, index) => {
        var res = {
            header: "",
            icon: "",
            text: fb,
            colorClass: ""
        };
        if (index === 0) {
            res = {
                ...res,
                header: "Correct!",
                icon: "fa fa-check",
                colorClass: "qui-feedback-correct",
            };
        } else if (index === 1) {
            res = {
                ...res,
                header: "Incorrect!",
                icon: "fa fa-times",
                colorClass: "qui-feedback-incorrect"
            };
        } else {
            res = {
                ...res,
                header: "Thank You!",
                icon: "fa fa-thumbs-up",
                colorClass: "qui-feedback-thank-you"
            };
        }
        return res;
    });

    //-------------------------------------------------------------------
    // 5. Set background image and color for card
    //-------------------------------------------------------------------
    const getBackground = () => {
        if (data?.backgroundImage) {
            return {
                backgroundImage: `url(${resolveImage(
                    data?.backgroundImage.id,
                    imageLibrary
                )})`,
            };
        }
    };
    const background = getBackground();

    // ========================= Render Function =================================
    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui ${quommonClasses.parentClasses}`}
            style={{
                ...background,
                backgroundColor: withColor?.backgroundColor,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        >
            <div className={`qui-feedback-conatiner ${quommonClasses.childClasses}`}>
                {_.map(refinedFeedback, (feedback, index) => {
                    return (
                        <div
                            key={index}
                            className={
                                data?.selectedIndex === index ? "qui-show-feedback" : "qui-hide-feedback"
                            }
                            fb={"card_" + index}
                        >
                            <i className={`qui-feedback-icon ${feedback["icon"]} ${feedback["colorClass"]}`}></i>
                            <div className="qui-feedback-header">
                                <TextBlock {...props}
                                    content={feedback["header"]}
                                    withColor={textblockColors}
                                />
                            </div>
                            <div className="qui-feedback-text">
                                <TextBlock {...props}
                                    content={feedback["text"]}
                                    withColor={textblockColors}
                                />
                            </div>
                            <div className="qui-feedback-button">
                                <Button
                                    content={tObj ? tObj.button : "Continue"}
                                    onClick={props.onClick}
                                    asVariant={asVariant}
                                    asFloated={"inline"}
                                    withColor={buttonColors}

                                />
                            </div>
                        </div>
                    )
                })}
            </div>
        </motion.div >
    )
}
