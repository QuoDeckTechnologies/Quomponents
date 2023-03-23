import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
    getQuommons,
    getTranslation,
    getAnimation,
} from "../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./QuickLinkIcon.scss";
import "../../common/stylesheets/overrule.scss";

LinkIcon.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    Set icon in linkIcon 
    */
    icon: PropTypes.string.isRequired,
    /**
    
    /**
    Set label in linkIcon 
    */
    label: PropTypes.string.isRequired,

    /**
    Set label in linkIcon 
    */
    url: PropTypes.string,

    /**
    Set active state in linkIcon 
    */
    active: PropTypes.bool,

    /**
    Set active state in linkIcon 
    */
    width: PropTypes.string,

    /**
    Set title in linkIcon 
    */
    title: PropTypes.string,

    /**
    LinkIcon component must have the onClick function passed as props
    */
    onClick: PropTypes.func,

    //=======================================
    // Quommon props
    //=======================================

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
    asFloated: PropTypes.oneOf(["left", "right", "none", "inline"]),
    /**
    Use to override component colors and behavior
    */
    withColor: PropTypes.shape({
        backgroundColor: PropTypes.string,
        textColor: PropTypes.string,
        accentColor: PropTypes.string,
        hoverBackgroundColor: PropTypes.string,
        hoverTextColor: PropTypes.string,
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
            "",
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
};

LinkIcon.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    active: false,
    width: "80px",

    //=======================================
    // Quommon props
    //=======================================
    asSize: "normal",
    asPadded: "normal",
    asFloated: "none",

    withColor: null,
    withAnimation: null,
    withTranslation: null,

    isHidden: false,
    isDisabled: false,
};

function getColors(colors, hovered, active) {
    let colorStyle = hovered
        ? {
              background: colors?.hoverBackgroundColor,
              color: colors?.hoverTextColor,
          }
        : {
              background: active
                  ? colors?.accentColor
                  : colors?.backgroundColor,
              color: colors?.textColor,
          };
    return colorStyle;
}
/**
## Notes
- The design system used for this component is fontawesome Icons
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- props are not being passed to the LinkIcon. Please speak to the admin to handle any new prop.
**/
export default function LinkIcon(props) {
    const [tilt, setTilt] = useState(false);
    const [hovered, setHovered] = useState(false);

    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "link-icon");
    if (props.active) quommonClasses.childClasses += ` active`;

    //-------------------------------------------------------------------
    // 2. Set the component colors
    //-------------------------------------------------------------------
    let colors = props.withColor ? getColors(props.withColor, hovered) : {};
    //-------------------------------------------------------------------
    // 3. Set the label/caption/popover and loading text
    //-------------------------------------------------------------------
    let labelContent = Object.assign({}, props.withLabel);
    let tObj = null;
    if (
        props.withTranslation?.lang &&
        props.withTranslation.lang !== "" &&
        props.withTranslation.lang !== "en"
    ) {
        tObj = getTranslation(props.withTranslation);
        if (labelContent && tObj?.label) labelContent.content = tObj.label;
    }
    //-------------------------------------------------------------------
    // 4. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props);

    // ========================= Render Function =================================

    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui ${quommonClasses.parentClasses}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onMouseDown={() => setTilt(true)}
            onMouseUp={() => setTilt(false)}
        >
            <div
                className={`${quommonClasses.childClasses} qui-linkicon-block squared`}
                title={props.title ? props.title : props.label}
            >
                <a
                    className="qui-linkicon-anchor"
                    href={props.url}
                    onClick={props.onClick}
                >
                    {props.icon.includes(".png") ? (
                        <img
                            src={props.icon}
                            className={tilt ? "tilt" : ""}
                            alt={props.title}
                            style={{ width: "60%" }}
                        />
                    ) : (
                        <i
                            className={`${props.icon} qui-linkicon-icon  ${
                                tilt ? "tilt" : ""
                            }`}
                            style={{ color: colors.color }}
                        ></i>
                    )}
                    <br />
                    <div
                        className={`qui-linkicon-caption`}
                        style={{ color: colors.color }}
                    >
                        {props.label}
                    </div>
                </a>
            </div>
        </motion.div>
    );
}
