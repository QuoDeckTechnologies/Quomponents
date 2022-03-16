// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
    getQuommons,
    getAnimation,
} from "../../common/javascripts/helpers.js";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./IconBlock.scss";
import "../../common/stylesheets/overrule.scss";

IconBlock.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================

    // Quommon props
    //=======================================
    /**
    Set action emphasis in increasing order 
    */
    asEmphasis: PropTypes.oneOf(["text", "outlined", "contained"]),
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
    Use to override component colors and behavior
    */
    withColor: PropTypes.shape({
        backgroundColor: PropTypes.string,
        accentColor: PropTypes.string
    }),
    /**
    Use to add an icon to the component
    */
    withIcon: PropTypes.shape({
        name: PropTypes.string
    }),
    /**
    Use to define component padding in increasing order
    */
    asPadded: PropTypes.oneOf(["fitted", "compact", "normal", "relaxed"]),
    /**
    Use to float the component in parent container
    */
    asFloated: PropTypes.oneOf(["left", "right", "inline"]),
    /**
    Use to show/hide the component
    */
    isHidden: PropTypes.bool,
    /**
    Use to enable/disable the component
    */
    isDisabled: PropTypes.bool,
    /**
    Button component must have the onClick function passed as props
    */
    onClick: PropTypes.func.isRequired,
};

IconBlock.defaultProps = {
    // Component Specific props
    //=======================================
    

    // Quommon props
    //=======================================
    asSize: "normal",
    asPadded: "normal",
    asFloated: "inline",
    asEmphasis: "contained",
    withColor: null,
    withIcon: null,
    withAnimation: null,
    isHidden: false,
    isDisabled: false,
    onClick: null
};

// Set Conditional Styling
function getColors(colors, emphasis, icon, disable) {
    let colorStyle = {
        backgroundHandle: {},
        iconColorHandle: {}
    }

    colorStyle.backgroundHandle = emphasis === 'text'
        ? {
            background: 'transparent',
            color: disable ? "#cccccc" : colors?.backgroundColor,
            border: 'none'
        }
        : emphasis === 'outlined'
            ? {
                background: 'transparent',
                color: disable ? "#cccccc" : colors?.backgroundColor,
                borderColor: disable ? "#cccccc" : colors?.backgroundColor
            }
            : {
                background: disable ? "#cccccc" : colors?.backgroundColor,
                border: 'none'

            }
    colorStyle.iconColorHandle = emphasis === 'text'
        ? {
            color: disable ? "#666666" : colors?.accentColor,
        }
        : emphasis === 'outlined'
            ? {
                color: disable ? "#cccccc" : colors?.backgroundColor,
            }
            : {
                color: disable ? "#666666" : colors?.accentColor,
            }
    return colorStyle;
}

/**
## Notes
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- Pass icon with its color props
**/
export default function IconBlock(props) {

    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "icon-block");

    //-------------------------------------------------------------------
    // 2. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);

    //-------------------------------------------------------------------
    // 3. Get Conditional styling
    //-------------------------------------------------------------------
    let empColors = props.withColor ? getColors(props.withColor, props.asEmphasis, props.withIcon, props.isDisabled) : {};

    //-------------------------------------------------------------------
    // 4. Get the Status of Component
    //-------------------------------------------------------------------
    const iconBlock = () => {
        return (
            <div className={`qui-btn qui-icon-button-container`}
                style={Object.assign({}, empColors.backgroundHandle)}
                onClick={props.onClick}>
                <i className={`${props.withIcon?.name} qui-icon-button-style`}
                    style={Object.assign({}, empColors.iconColorHandle)}
                ></i>
            </div>
        )
    }
    return (
        <motion.div
            initial={animate?.from}
            animate={animate?.to}
            className={`qui ${quommonClasses.parentClasses}`}>
            <div className={`${quommonClasses.childClasses}`}>
                {iconBlock()}
            </div>
        </motion.div>
    );
}
