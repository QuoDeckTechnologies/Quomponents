// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
    getQuommons,
    getAnimation
} from "../../common/javascripts/helpers.js";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./TodayMenuBtn.scss";
import "../../common/stylesheets/overrule.scss";

TodayMenuBtn.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    Content use to display the label of TodayMenuBtn
    */
    content: PropTypes.string,
    /**
    withIcon holds the icon of TodayMenuBtn
    */
    withIcon: PropTypes.string,
    /**
    Use to define the state of component
    */
    isActive: PropTypes.bool,

    // Quommon props
    //=======================================
    /**
    Use to override component colors and behavior
    */
    withColor: PropTypes.shape({
        backgroundColor: PropTypes.string,
        textColor: PropTypes.string,
        iconColor: PropTypes.string
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
    Slider component must have the onClick function passed as props
    */
    onClick: PropTypes.func.isRequired,
};

TodayMenuBtn.defaultProps = {
    // Component Specific props
    //=======================================
    content: {},

    // Quommon props
    //=======================================
    withColor: null,
    isHidden: false
};

/**
## Notes
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- Content props to display the TodayMenuBtn component.
- Pass withColor props to change the styling of component.
**/
export default function TodayMenuBtn(props) {
    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "today-menu-btn");

    //-------------------------------------------------------------------
    // 2. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);

    return (
        <motion.div
            initial={animate?.from}
            animate={animate?.to}
            className={`qui ${quommonClasses.parentClasses}`}>
            {props.content &&
                <div className={`${quommonClasses.childClasses}`} >
                {props.content}
                </div>}
        </motion.div>
    );
}