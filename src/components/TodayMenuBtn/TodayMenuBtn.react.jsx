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
    Set action emphasis in increasing order 
    */
    asEmphasis: PropTypes.oneOf(["Default", "Complete", "Active"]),

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
    Use to float the component in parent container
    */
    asFloated: PropTypes.oneOf(["left", "right", "none", "inline"]),
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
    content: "Home",
    withIcon: "fas fa-home",
    asEmphasis:"Default",

    // Quommon props
    //=======================================
    asFloated:"left",
    withColor: null,
    isHidden: false,
    isDisabled:false
};

/**
## Notes
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- Content props to display the TodayMenuBtn component.
- Pass withColor props to change the styling of default component and the rest of emphasis component has static stylings i.e. for active and complete.
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

    //-------------------------------------------------------------------
    // 3. Conditional styling
    //-------------------------------------------------------------------
    let defaultBackgroundColor, completeColor, activeColor, defaultIconColor, completeIconColor, activeIconColor, defaultTextColor, completeTextColor, activeTextColor;
    defaultBackgroundColor = props.withColor?.backgroundColor ? props.withColor?.backgroundColor : "#ED6E6E";
    completeColor = "#C1DC9E";
    activeColor = "#222A35";
    defaultIconColor = props.withColor?.iconColor ? props.withColor?.iconColor : "#FFFFFF";
    completeIconColor = "#52AF50";
    activeIconColor = "#FFCA36";
    defaultTextColor = props.withColor?.textColor ? props.withColor?.textColor : "#FFFFFF";
    completeTextColor = "#454545";
    activeTextColor = "#FFFFFF";

    let colors = {
        backgroundColor: props.asEmphasis === "Active" ? activeColor : props.asEmphasis === "Complete" ? completeColor : defaultBackgroundColor,
        textColor: props.asEmphasis === "Active" ? activeTextColor : props.asEmphasis === "Complete" ? completeTextColor : defaultTextColor,
        iconColor: props.asEmphasis === "Active" ? activeIconColor : props.asEmphasis === "Complete" ? completeIconColor : defaultIconColor
    }

    //-------------------------------------------------------------------
    // 4. Conditional Icons
    //-------------------------------------------------------------------
    let icon = props.asEmphasis === "Active" ? "fas fa-certificate" : props.asEmphasis === "Complete" ? "fas fa-check-circle" : props.withIcon;

    return (
        <motion.div
            initial={animate?.from}
            animate={animate?.to}
            className={`qui ${quommonClasses.parentClasses}`}>
            {(props.content || props.withIcon) &&
                <div className={`${quommonClasses.childClasses} qui-today-menu-btn-container`} style={{ backgroundColor: colors.backgroundColor }}
                    onClick={props.onClick}>
                    {props.withIcon && <i className={`${icon} qui-content-line-icon`} style={{ color: colors?.iconColor }} />}
                    {props.content !== "" &&
                        <div className={`qui-content-line-text`} style={{ color: colors?.textColor, marginLeft: props.withIcon ? " 0.5em" : "0" }} >
                            {props.content}
                        </div>
                    }
                </div>}
        </motion.div>
    );
}