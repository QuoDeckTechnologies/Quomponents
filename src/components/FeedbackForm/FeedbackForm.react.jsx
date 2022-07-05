// Import npm packages
import React, { useState } from "react";
import PropTypes from "prop-types";
import InputField from "../InputField/InputField.react"
import ToggleButton from "../ToggleButton/ToggleButton.react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./FeedbackForm.scss";
import "../../common/stylesheets/overrule.scss";
import { motion } from "framer-motion";
import { getQuommons, getAnimation, getTranslation } from "../../common/javascripts/helpers";

FeedbackForm.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    Title data should be pass in content field
    */
    content: PropTypes.string,
    //=======================================
    // Quommon props
    //=======================================
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
            ""
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
    Use to override component colors and behavior
    */
    withColor: PropTypes.shape({
        withColor: PropTypes.shape({
            toggleBarColor: PropTypes.string,
            toggleActiveColor: PropTypes.string,
            toggleLabelColor: PropTypes.string,
            inputBackgroundColor: PropTypes.string,
            inputAccentColor: PropTypes.string,
            inputTextColor: PropTypes.string
        })
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
    FeedbackForm component must have the onClick function passed as props
    */
    onClick: PropTypes.func.isRequired,
};

FeedbackForm.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    content: "",
    //=======================================
    // Quommon props
    //=======================================
    withColor: null,
    withAnimation: null,
    withTranslation: null,
    isHidden: false,
    isDisabled: false,
};
/**
## Notes
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- FeedbackForm is used to take feedback from the user and appears when user toggle the switch
- The feedback form will appear by switching the toggle button , in form one can enter the data in 2  different different input fields which will  be used as per requirment  , by clicking outside the input field or entering on it the entered data will be saved. 
**/

export default function FeedbackForm(props) {
    const [toggle, setToggle] = useState(false);

    //-------------------------------------------------------------------
    // Get translation of the component
    //-------------------------------------------------------------------
    let toggleLabel = "Show Feedback"
    let inputFieldLableOne = "If Correct"
    let inputFieldLableTwo = "If Incorrect"
    let tObj = null;
    if (
        props.withTranslation?.lang &&
        props.withTranslation.lang !== "" &&
        props.withTranslation.lang !== "en"
    ) {
        tObj = getTranslation(props.withTranslation);
        toggleLabel = tObj?.content || "Show Feedback"
        inputFieldLableOne = tObj?.correct || "If Correct"
        inputFieldLableTwo = tObj?.incorrect || "If Incorrect"
    }
    //------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "feedback-form");
    //------------------------------------------------------------------
    // 1. Set the colors of ToggleButton
    //-------------------------------------------------------------------
    let ToggleColors = {
        backgroundColor: props.withColor?.toggleBarColor,
        accentColor: props.withColor?.toggleActiveColor,
        textColor: props.withColor?.toggleLabelColor
    }
    //------------------------------------------------------------------
    // 1. Set the colors of InputField
    //-------------------------------------------------------------------
    let InputFieldColors = {
        backgroundColor: props.withColor?.inputBackgroundColor,
        accentColor: props.withColor?.inputAccentColor,
        textColor: props.withColor?.inputTextColor
    }
    //-------------------------------------------------------------------
    // 2. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);
    // ========================= Render Function =================================

    let fieldsetClasses = toggle ? "qui-feedback-fieldset" : "qui-feedback-fieldset qui-feedback-de-active";
    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui ${quommonClasses.parentClasses}`}>
            <div className={quommonClasses.childClasses}>
                <fieldset className={fieldsetClasses}>
                    <legend>
                        <ToggleButton {...props} onClick={() => setToggle(prevState => !prevState)}
                            label={toggleLabel}
                            withColor={ToggleColors} withTranslation={null} />
                    </legend>
                    {toggle &&
                        <div className="qui-feedback-input-field-container">
                            <InputField {...props} onSubmit={props.onClick} label={inputFieldLableOne} withColor={InputFieldColors} name={"correct"} withTranslation={null} />
                            <InputField {...props} onSubmit={props.onClick} label={inputFieldLableTwo} withColor={InputFieldColors} name={"incorrect"} withTranslation={null} />
                        </div>
                    }
                </fieldset>
            </div>
        </motion.div>
    );
};