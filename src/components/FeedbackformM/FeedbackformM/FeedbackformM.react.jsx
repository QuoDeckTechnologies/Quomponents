// Import npm packages
import React, { useState } from "react";
import PropTypes from "prop-types";
import ToggleButton from "../../ToggleButton/ToggleButton.react";
import ToggleButtonMUI from "../../ToggleButtonMUI/ToggleButton.react";
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
    content: PropTypes.shape({
        title: PropTypes.string,
        isToggled: PropTypes.bool,
    }),
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
    Use to define component text size in increasing order
    */
    asSize: PropTypes.oneOf([
        "tiny",
        "small",
        "normal",
        "big",
        "huge",
        "massive",
    ]),
    /**
    Use to float the component in parent container
    */
    asFloated: PropTypes.oneOf(["left", "right", "none", "inline"]),
    /**
    Use to align content within the component container
    */
    asAligned: PropTypes.oneOf(["left", "right", "center"]),
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
    asSize: "normal",
    asFloated: "inline",
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
    let { content } = props

    const [toggle, setToggle] = useState(false);
    // 1. Set the classes
    console.log(toggle)
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "feedback-form-m");
    quommonClasses.childClasses += ` variant-${props.asVariant}-text`;
    //-------------------------------------------------------------------
    // 2. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);
    //-------------------------------------------------------------------
    // 3. Destructure content prop to itirate
    //------------------------------------------------------------------
    function show() {

    }
    // ========================= Render Function =================================
    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui ${quommonClasses.parentClasses}`}>
            <div className={`qui-feedback-form-container  ${quommonClasses.childClasses}`}>
                <div className="qui-feedback-toggle">
                    <ToggleButtonMUI {...props} content={{ title: "Show Feedback",isToggled: toggle }} onClick={() => setToggle(prevState => !prevState)} />
                </div>
                {toggle && <div className={`qui-input-field-container`}>
                    <input type='text' placeholder='If Correct' className={`qui-toggle-input-fields size-${props.asSize} variant-${props.asVariant}`} />
                    <input type='text' placeholder='If InCorrect' className={`qui-toggle-input-fields size-${props.asSize} variant-${props.asVariant}`} />
                </div>}
            </div>
        </motion.div>
    );
};