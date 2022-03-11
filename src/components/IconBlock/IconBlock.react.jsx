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
    Use to define component padding in increasing order
    */
    asPadded: PropTypes.oneOf(["fitted", "compact", "normal", "relaxed"]),
    /**
    Use to float the component in parent container
    */
    asFloated: PropTypes.oneOf(["left", "right", "inline"]),
    /**
    Use to override component colors and behavior
    */
    withColor: PropTypes.shape({
        backgroundColor: PropTypes.string,
    }),
    /**
    Use to add an icon to the component
    */
    withIcon: PropTypes.shape({
        icon: PropTypes.string,
        color: PropTypes.string,
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

function getColors(colors, emphasis, icon) {
    let colorStyle = {
        backgroundHandle: {},
        iconColorHandle: {}
    }
    colorStyle.backgroundHandle = emphasis === 'text'
        ? {
            background: 'transparent',
            color: colors?.backgroundColor,
            border: 'none'
        }
        : emphasis === 'outlined'
            ? {
                background: 'transparent',
                color: colors?.backgroundColor,
                borderColor: colors?.backgroundColor
            }
            : {
                background: colors?.backgroundColor,
                border: 'none'

            }
    colorStyle.iconColorHandle = emphasis === 'text'
        ? {
            color: icon.color,
        }
        : emphasis === 'outlined'
            ? {
                color: colors?.backgroundColor,
            }
            : {
                color: icon?.color,
            }

    return colorStyle;
}

/**
## Notes
- The design system used for this component is Material UI (@mui/material)
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- Action Button has 2 phases, with button and with image. Pass props according to your convenience
- isEllipse is a prop to add ellipse background or not.
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

    let empColors = props.withColor ? getColors(props.withColor, props.asEmphasis, props.withIcon) : {};
    //-------------------------------------------------------------------
    // 3. Get the Status of Component
    //-------------------------------------------------------------------
    const iconBlock = () => {
        return (
            <div className={`qui-btn icon-button-container`}
                style={Object.assign({}, empColors.backgroundHandle)}
            >
                <i className={`${props.withIcon?.icon} icon-button-style`}
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
