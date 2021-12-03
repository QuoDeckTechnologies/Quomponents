// Import npm packages
import React, { useState } from "react";
import PropTypes from "prop-types";
import { default as MUIButton } from "@mui/material/Button";
import { motion } from "framer-motion";

import "@fortawesome/fontawesome-free/css/all.min.css";

import "../../../assets/stylesheets/common.css";
import "./Button.scss";
import "../../../assets/stylesheets/overrule.scss";

Button.propTypes = {
    // Component Specific props
    //=======================================
    name: PropTypes.string, // Is optional if you only want an icon
    asEmphasis: PropTypes.oneOf(["text", "contained", "outlined"]),
    isCircular: PropTypes.bool,

    // Quommon props
    //=======================================
    asVariant: PropTypes.oneOf([
        "primary",
        "secondary",
        "success",
        "warning",
        "error",
    ]),
    asSize: PropTypes.oneOf([
        "tiny",
        "small",
        "normal",
        "big",
        "huge",
        "massive",
    ]),
    asPadded: PropTypes.oneOf(["fitted", "compact", "normal", "relaxed"]),
    asFloated: PropTypes.oneOf(["left", "right", "none", "inline"]),
    asAligned: PropTypes.oneOf(["left", "right", "center"]),

    withColor: PropTypes.shape({
        backgroundColor: PropTypes.string,
        accentColor: PropTypes.string,
        textColor: PropTypes.string,
        hoverBackgroundColor: PropTypes.string,
        hoverTextColor: PropTypes.string,
    }),
    withIcon: PropTypes.shape({
        icon: PropTypes.string,
        size: PropTypes.string,
        position: PropTypes.oneOf(["left", "right"]),
    }),
    withLabel: PropTypes.shape({
        format: PropTypes.oneOf(["label", "caption", "popover"]),
        content: PropTypes.string,
        textColor: PropTypes.string,
    }),
    withAnimation: PropTypes.shape({
        animation: PropTypes.oneOf([
            "zoom",
            "collapse",
            "fade",
            "slideDown",
            "slideUp",
            "slideLeft",
            "slideRight",
        ]),
        duration: PropTypes.number,
        delay: PropTypes.number,
    }),
    withTranslation: PropTypes.shape({
        lang: PropTypes.string,
        tgt: PropTypes.string,
        dictionary: PropTypes.string,
    }),

    isHidden: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isFluid: PropTypes.bool,
    isLoading: PropTypes.bool,

    onClick: PropTypes.func,
};

Button.defaultProps = {
    // Component Specific props
    //=======================================
    asEmphasis: "contained",
    isCircular: false,

    // Quommon props
    //=======================================
    asVariant: "primary",
    asSize: "normal",
    asPadded: "normal",
    asFloated: "none",
    asAligned: "center",

    withColor: null,
    withIcon: null,
    withLabel: null,
    withAnimation: null,
    withTranslation: null,

    isHidden: false,
    isDisabled: false,
    isFluid: false,
    isLoading: false,
};

function getQuommonClasses(props) {
    let parentArray = ["qui"],
        childArray = [""];

    if (props.asSize) childArray.push(`size-${props.asSize}`);
    if (props.asPadded) childArray.push(`pad-${props.asPadded}`);
    if (props.asAligned) childArray.push(`${props.asAligned}-aligned`);
    if (props.asFloated) parentArray.push(`float-${props.asFloated}`);
    if (props.asVariant) childArray.push(`variant-${props.asVariant}`);

    if (props.isHidden) parentArray.push("is-hidden");
    if (props.isDisabled) parentArray.push("is-disabled");
    if (props.isFluid) {
        parentArray.push("is-fluid");
        childArray.push("is-fluid");
    }
    if (props.isLoading) parentArray.push("is-loading");

    return {
        parentClasses: parentArray.join(" "),
        childClasses: childArray.join(" "),
    };
}

function getTranslation(tObj, key) {
    let dict = tObj && tObj.dictionary ? JSON.parse(tObj.dictionary) : null;
    let tgt = key ? key : tObj && tObj.tgt ? tObj.tgt : null;
    return dict && tgt && dict[tObj.lang] && dict[tObj.lang][tgt]
        ? dict[tObj.lang][tgt]
        : null;
}

function getLabel(labelObj, position) {
    return labelObj && labelObj.format === position ? labelObj.content : "";
}

function getColors(colors, hovered) {
    return hovered
        ? {
              background: colors.hoverBackgroundColor,
              color: colors.hoverTextColor,
          }
        : {
              background: colors.backgroundColor,
              color: colors.textColor,
          };
}

function getIcon(iconObj, position, iconOnly) {
    let iconMargin = iconOnly
        ? "0"
        : position === "left"
        ? "0 0.5em 0 0"
        : "0 0 0 0.5em";

    return (
        iconObj &&
        iconObj.icon &&
        iconObj.position === position && (
            <i
                className={`qui-icon ${iconObj.icon}`}
                style={{ fontSize: iconObj.size, margin: iconMargin }}
            ></i>
        )
    );
}

function getAnimation(animObj) {
    if (animObj && animObj.animation) {
        const initialVariants = {
            zoom: {
                scale: 0,
            },
            fade: {
                opacity: 0,
            },
            slideRight: {
                opacity: 0,
                x: -80,
            },
            slideDown: {
                opacity: 0,
                y: -40,
            },
            slideUp: {
                opacity: 0,
                y: 40,
            },
            slideLeft: {
                opacity: 0,
                x: 80,
            },
            collapse: {
                scale: 5,
                opacity: 0,
            },
        };
        let transitionObj = {
            duration: animObj.duration,
            delay: animObj.delay,
        };
        const animationVariants = {
            zoom: {
                scale: 1,
                transition: transitionObj,
            },
            fade: {
                opacity: 1,
                transition: transitionObj,
            },
            slideRight: {
                x: 0,
                opacity: 1,
                transition: transitionObj,
            },
            slideDown: {
                y: 0,
                opacity: 1,
                transition: transitionObj,
            },
            slideUp: {
                y: 0,
                opacity: 1,
                transition: transitionObj,
            },
            slideLeft: {
                x: 0,
                opacity: 1,
                transition: transitionObj,
            },
            collapse: {
                scale: 1,
                opacity: 1,
                transition: transitionObj,
            },
        };
        return {
            from: initialVariants[animObj.animation],
            to: animationVariants[animObj.animation],
        };
    } else return { from: {}, to: {} };
}

export default function Button(props) {
    const [hovered, setHovered] = useState(false);

    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommonClasses(props);
    if (props.isCircular)
        quommonClasses.childClasses += ` is-circular ${
            props.name === "" && props.withIcon ? "is-only-icon" : ""
        }`;

    //-------------------------------------------------------------------
    // 2. Set the component colors
    //-------------------------------------------------------------------
    let colors = props.withColor ? getColors(props.withColor, hovered) : {};

    //-------------------------------------------------------------------
    // 3. Set the button text
    //-------------------------------------------------------------------
    let buttonText = props.name
        ? props.name
        : props.children
        ? props.children
        : "";
    let iconOnly = buttonText === "";

    //-------------------------------------------------------------------
    // 4. Set the label/caption/popover text
    //-------------------------------------------------------------------
    let labelContent = props.withLabel;
    let labelStyle =
        labelContent && labelContent.textColor
            ? { color: labelContent.textColor }
            : {};

    //-------------------------------------------------------------------
    // 5. Translate the text objects in case their is a dictionary provided
    //-------------------------------------------------------------------
    let tObj = getTranslation(props.withTranslation);
    if (tObj && props.name && props.name !== "") {
        buttonText = tObj.text;
    }
    if (labelContent && tObj && tObj.label) labelContent.content = tObj.label;

    //-------------------------------------------------------------------
    // 6. Disable all text if loading is clicked
    //-------------------------------------------------------------------
    buttonText = props.isLoading
        ? getTranslation(props.withTranslation, "loading")
        : buttonText;
    labelContent = props.isLoading ? "" : labelContent;

    //-------------------------------------------------------------------
    // 7. Disable all text if loading is clicked
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);

    // ========================= Render Function =================================

    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            transition={{
                delayChildren: props.withAnimation
                    ? props.withAnimation.delay
                    : 0,
            }}
            className={quommonClasses.parentClasses}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="qui-label" style={labelStyle}>
                {getLabel(labelContent, "label")}
            </div>
            <MUIButton
                variant={props.asEmphasis}
                color={props.asVariant}
                title={getLabel(labelContent, "popover")}
                disabled={props.isDisabled}
                className={`qui-btn ${quommonClasses.childClasses}`}
                style={colors}
                onClick={props.onClick}
            >
                <i className="icon-loader fa fa-spinner fa-spin"></i>
                {getIcon(props.withIcon, "left", iconOnly)}
                {buttonText}
                {getIcon(props.withIcon, "right", iconOnly)}
            </MUIButton>
            <div className="qui-caption" style={labelStyle}>
                {getLabel(labelContent, "caption")}
            </div>
        </motion.div>
    );
}
