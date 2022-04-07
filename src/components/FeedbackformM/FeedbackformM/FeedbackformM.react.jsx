// Import npm packages
import React, { useState } from "react";
import PropTypes from "prop-types";
import InputField from "../../InputField/InputField.react"
import ToggleButton from "../../ToggleButton/ToggleButton.react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./FeedbackformM.scss";
import "../../../common/stylesheets/overrule.scss";
import { motion } from "framer-motion";
import { getQuommons, getAnimation, } from "../../../common/javascripts/helpers";

FeedbackformM.propTypes = {
    //=======================================
    // Quommon props
    //=======================================
    content: PropTypes.string,
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
        ToggleBackgroundColor: PropTypes.string,
        ToggleAccentColor: PropTypes.string,
        ToggleTextColor: PropTypes.string,
        InputFieldBackgroundColor: PropTypes.string,
        InputFieldAccentColor: PropTypes.string,
        InputFieldTextColor: PropTypes.string,
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
    AppMenu component must have the onClick function passed as props
    */
    onClick: PropTypes.func.isRequired,
};

FeedbackformM.defaultProps = {
    content: "",
    //=======================================
    // Quommon props
    //=======================================
    asVariant: "primary",
    withColor: null,
    isHidden: false,
    isDisabled: false,
};

/**
## Notes
- The design system used for this component is fontawesome Icons
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- props are not being passed to the NavBar. Please speak to the admin to handle any new prop.
**/

export default function FeedbackformM(props) {
    const [toggle, setToggle] = useState(false);
    //------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "feedback-form-m");
    quommonClasses.childClasses += ` variant-${props.asVariant}-text`;
    //------------------------------------------------------------------
    // 1. Set the colors of ToggleButton
    //-------------------------------------------------------------------
    let ToggleColors = {
        backgroundColor: props.withColor?.ToggleBackgroundColor,
        accentColor: props.withColor?.ToggleAccentColor,
        textColor: props.withColor?.ToggleTextColor
    }
    //------------------------------------------------------------------
    // 1. Set the colors of InputField
    //-------------------------------------------------------------------
    let InputFieldColors = {
        backgroundColor: props.withColor?.InputFieldBackgroundColor,
        accentColor: props.withColor?.InputFieldAccentColor,
        textColor: props.withColor?.InputFieldTextColor
    }
    //-------------------------------------------------------------------
    // 2. Get animation of the component
    //-------------------------------------------------------------------
    console.log(toggle)
    const animate = getAnimation(props.withAnimation);
    // ========================= Render Function =================================
    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui ${quommonClasses.parentClasses}`}>
            <div className={`qui-feedback-form-container  ${quommonClasses.childClasses}`}>
                <div className="qui-feedback-toggle-button">
                    <ToggleButton {...props}  onClick={() => setToggle(prevState => !prevState)}
                        label="Show Feedback"
                        isActive= {false}
                        withColor={ToggleColors} />
                </div>
                {toggle && <div className={`qui-feedback-input-field-container`}>
                    <InputField {...props} content={{ label: "If Correct" }} withColor={InputFieldColors} name={"0"} />
                    <InputField {...props} content={{ label: "If InCorrect" }} withColor={InputFieldColors} name={"1"} />
                </div>}
            </div>
        </motion.div>
    );
};