// Import npm packages
import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
    getQuommons,
    getAnimation,
} from "../../common/javascripts/helpers";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./TextBlock.scss";
import "../../common/stylesheets/overrule.scss";

TextBlock.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    opacity: PropTypes.string,
    /**
    TextBlock Text has to be in content or passed as children to the component. Is optional if you only want an icon.
    */
    content: PropTypes.string,
    /**
    Set action emphasis in increasing order 
    */
    asEmphasis: PropTypes.oneOf(["text", "outlined", "contained"]),
    /**

  /**
  Use to toggle position of ArcMenu
  */
    position: PropTypes.oneOf([
        "top-right",
        "top-left",
        "bottom-right",
        "bottom-left",
    ]),

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
    Use to define component padding in increasing order
    */
    asPadded: PropTypes.oneOf(["fitted", "compact", "normal", "relaxed"]),
    /**
    Use to float the component in parent container
    */
    asFloated: PropTypes.oneOf(["left", "right", "none", "inline"]),
    /**
    Use to align content within the component container
    */
    asAligned: PropTypes.oneOf(["left", "right", "center"]),

    /**
    Use to override component colors and behavior
    */
    withColor: PropTypes.shape({
        backgroundColor: PropTypes.string,
        accentColor: PropTypes.string,
        textColor: PropTypes.string,
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
    Use to toggle the component taking the full width of the parent container
    */
    isFluid: PropTypes.bool,
    /**
    TextBlock component must have the onClick function passed as props
    */
    onClick: PropTypes.func.isRequired,
};

TextBlock.defaultProps = {
    // Component Specific props
    //=======================================
    content: "",
    opacity: "",
    position: "top-right",
    // Quommon props
    //=======================================
    asVariant: "primary",
    asSize: "normal",
    asPadded: "normal",
    asFloated: "none",
    asAligned: "center",
    asEmphasis: "contained",
    isCircular: false,

    withColor: null,
    withLabel: null,
    withAnimation: null,
    withTranslation: null,

    isHidden: false,
    isDisabled: false,
    isFluid: false,
};

/**
## Notes
- The design system used for this component is Material UI (@mui/material)
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- MUI props are not being passed to the button. Please speak to the admin to handle any new MUI prop.
**/
export default function TextBlock(props) {
    const [hovered, setHovered] = useState(false);
    let { content } = props
    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "text-block");
    //-------------------------------------------------------------------
    // 2. Get custom styling 
    //-------------------------------------------------------------------
    let opacity = props.opacity;

    quommonClasses.childClasses += ` emp-${props.asEmphasis}`;


    const getPosition = (position) => {
        if (position === "top-right") {
            return "qui-top-right";
        }
        if (position === "top-left") {
            return "qui-top-left";
        }
        if (position === "bottom-right") {
            return "qui-bottom-right";
        }
        if (position === "bottom-left") {
            return "qui-bottom-left";
        }
        return "qui-top-right";
    };


    //-------------------------------------------------------------------
    // 3. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);

    // ========================= Render Function =================================

    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui ${quommonClasses.parentClasses}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className={`qui-text-block-tringle ${getPosition(props.position)}`}>
                <div class="arrow-up"></div>
                <div class="arrow-down"></div>
                <div class="arrow-left"></div>
                <div class="arrow-right"></div>
            </div>
            <div className={`qui-text-block qui-btn  ${quommonClasses.childClasses}
          `} style={{ opacity: opacity }}>
            </div>
            <div className="qui-block-text">
                {content}
            </div>
        </motion.div>
    );
}
