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
import "./ContentLine.scss";
import "../../common/stylesheets/overrule.scss";

ContentLine.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    Contains the users contents such as name and points
    */
    content: PropTypes.shape({
        name: PropTypes.string,
        icon: PropTypes.string
    }).isRequired,
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
        textColor: PropTypes.string
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
    Use to show/hide the component
    */
    isHidden: PropTypes.bool,
    /**
    Use to enable/disable the component
    */
    isDisabled: PropTypes.bool,
    /**
    ContentLine component must have the onClick function passed as props to return label of the checkbox and checked/unchecked status
    */
    onClick: PropTypes.func.isRequired,
};

ContentLine.defaultProps = {
    // Component Specific props
    //=======================================
    content: {},

    // Quommon props
    //=======================================
    withColor: null,
    withAnimation: null,
    withTranslation: null,
    isHidden: false
};

/**
## Notes
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- Content props to display the ContentLine component.
- Pass withColor props to change the styling of component.
**/
export default function ContentLine(props) {
    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "content-line");

    //-------------------------------------------------------------------
    // 2. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);

    //-------------------------------------------------------------------
    // 3. Conditional styling
    //-------------------------------------------------------------------
    let contentStyle = {
        backgroundColor: props.isDisabled ? '#E8E8E8' : props.isActive ?  props.withColor?.backgroundColor ? props.withColor?.backgroundColor : '#FFBF00CC': '#FFFFFF',
        color: props.withColor?.textColor ? props.withColor?.textColor : '#454545'
    }

    return (
        <motion.div
            initial={animate?.from}
            animate={animate?.to}
            className={`qui ${quommonClasses.parentClasses} qui-content-line-parent-class`}>
            {props.content &&
                <div className={`${quommonClasses.childClasses}`} >
                    <div className={`qui-content-line-container`} style={contentStyle}>
                        <div className={`qui-content-line-icon-text-container`} style={{ color: contentStyle?.color }}>
                        <i className={`${props.content?.icon} qui-content-line-icon`}></i>
                          <div className={`qui-content-line-text`}>{props.content?.name}</div>  </div>
                        <div className="qui-content-line-coins-text"><i className={`fas fa-angle-right`} style={{ color:props.withColor?.textColor}}></i></div>
                    </div>
                </div>}
        </motion.div>
    );
}