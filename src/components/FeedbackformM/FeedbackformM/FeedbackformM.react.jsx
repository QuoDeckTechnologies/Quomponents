// Import npm packages
import React from "react";
import PropTypes from "prop-types";
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
    //=======================================
    // Quommon props
    //=======================================
    asVariant: "primary",
    asSize: "normal",
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
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "FeedbackformM");
    quommonClasses.childClasses += ` variant-${props.asVariant}-text`;
    //-------------------------------------------------------------------
    // 2. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);
    //-------------------------------------------------------------------
    // 3. Destructure content prop to itirate
    //------------------------------------------------------------------

    // ========================= Render Function =================================
    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui ${quommonClasses.parentClasses}`}>
            <div className={`qui-togle-main  ${quommonClasses.childClasses}`}>

                <div className={`qui-togle`}>
                    <div className="qui-checkbox-text">
                        <input onClick={props.onClick} type="checkbox" />
                        <span>SHOW FEEDBACK</span>
                    </div>
                </div>
                <input type='text' placeholder='If Correct' className="qui-togle-title" />
                <input type='text' placeholder='If InCorrect' className="qui-togle-title" />
            </div>
        </motion.div>
    );
};