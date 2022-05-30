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
import "./WalletRow.scss";
import "../../common/stylesheets/overrule.scss";


WalletRow.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    Contains the users contents such as name and points
    */
    content: PropTypes.shape({
        date: PropTypes.string,
        coins: PropTypes.number
    }).isRequired,

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
    Use to show/hide the component
    */
    isHidden: PropTypes.bool
};

WalletRow.defaultProps = {
    // Component Specific props
    //=======================================
    content: {},

    // Quommon props
    //=======================================
    withColor: null,
    withAnimation: null,
    isHidden: false
};

/**
## Notes
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- Pass rank and content props to display the WalletRow component.
- Pass withColor props to change the styling of component.
**/
export default function WalletRow(props) {
    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "wallet-row");

    //-------------------------------------------------------------------
    // 2. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);

    //-------------------------------------------------------------------
    // 3. Conditional styling
    //-------------------------------------------------------------------
    let contentStyle = {
        backgroundColor: props.withColor?.backgroundColor ? props.withColor?.backgroundColor : '#454545',
        color: props.withColor?.textColor ? props.withColor?.textColor : '#FFBF00'
    }

    let dateInstance = new Date(props.content?.date);
    let date = dateInstance.toLocaleDateString(undefined, { day: "numeric", month: 'long', year: 'numeric' });

    return (
        <motion.div
            initial={animate?.from}
            animate={animate?.to}
            className={`qui ${quommonClasses.parentClasses} qui-wallet-row-parent-class`}>
            {props.content && <div className={`${quommonClasses.childClasses}`} >
                <div className={`qui-wallet-row-container`} style={contentStyle}>
                    {props.content?.date && <div className={`qui-wallet-row-date`} style={{ color: contentStyle?.color }}>{date}</div>}
                    {props.content?.coins && <div className={`qui-wallet-row-coins`}> <div className="qui-wallet-row-coins-number" style={{ color: contentStyle?.color }}>{props.content?.coins}</div><div className="qui-wallet-row-coins-text">coins</div></div>}
                </div>
            </div>}
        </motion.div>
    );
}