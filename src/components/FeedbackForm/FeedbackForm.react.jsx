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
import { getQuommons, getAnimation, } from "../../common/javascripts/helpers";

FeedbackForm.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
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
    const animate = getAnimation(props);
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
                            label={props.content ? props.content : "Show Feedback"}
                            withColor={ToggleColors} />
                    </legend>
                    {toggle &&
                        <div className="qui-feedback-input-field-container">
                            <InputField {...props} content={{ label: "If Correct" }} withColor={InputFieldColors} name={"correct"} />
                            <InputField {...props} content={{ label: "If InCorrect" }} withColor={InputFieldColors} name={"incorrect"} />
                        </div>
                    }
                </fieldset>
            </div>
        </motion.div>
    );
};