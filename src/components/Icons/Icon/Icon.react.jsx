import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
    getQuommons,
    getTranslation,
    getAnimation,
} from "../../../common/javascripts/helpers";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./Icon.scss";
import "../../../common/stylesheets/overrule.scss";

Icon.propTypes = {
    content: PropTypes.string,
    asEmphasis: PropTypes.oneOf(["text", "outlined", "contained"]),

    isCircular: PropTypes.bool,

    
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
            ""
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

    onClick: PropTypes.func.isRequired,
};

Icon.defaultProps = {
    asEmphasis: "contained",
    isCircular: false,

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

function getLabel(labelObj, position) {
    return labelObj?.format === position ? labelObj.content : "";
}

function getColors(colors, emphasis, hovered) {
    let colorStyle = hovered
        ? {
            background: colors.hoverBackgroundColor,
            color: colors.hoverTextColor,
        }
        : {
            background: emphasis !== "contained" ? "transparent" : colors.backgroundColor,
            color: emphasis !== "contained" ? colors.backgroundColor : colors.textColor,
        }
    if (!hovered && emphasis === "outlined")
        colorStyle.borderColor = colors.backgroundColor
    return colorStyle;
}

function getIcon(iconObj, position, iconOnly) {
    let iconMargin = iconOnly
        ? "0"
        : position === "left"
        ? "0 0.5em 0 0"
        : "0 0 0 0.5em";

    return (
        iconObj?.icon &&
        iconObj?.position === position && (
            <i
                className={`qui-icon ${iconObj.icon}`}
                style={{ fontSize: iconObj.size, margin: iconMargin }}
            ></i>
        )
    );
}

export default function Icon(props) {
    const [hovered, setHovered] = useState(false);

    let quommonClasses = getQuommons(props);
    if (props.isCircular)
        quommonClasses.childClasses += ` is-circular ${
            props.content === "" && props.withIcon ? "is-only-icon" : ""
        }`;

        quommonClasses.childClasses += ` emp-${props.asEmphasis}`;
    let colors = props.withColor ? getColors(props.withColor, props.asEmphasis, hovered) : {};

    let iconText = props.content
        ? props.content
        : props.children
        ? props.children
        : "";
    let iconOnly = iconText === "";
    let labelContent = Object.assign({}, props.withLabel);
    let labelStyle = labelContent?.textColor
        ? { color: labelContent.textColor }
        : {};
    let loadingText = "";

    if (
        props.withTranslation?.lang &&
        props.withTranslation.lang !== "" &&
        props.withTranslation.lang !== "en"
    ) {
        let tObj = getTranslation(props.withTranslation);
        if (tObj && props.content && props.content !== "") {
            iconText = tObj.text;
        }
        if (labelContent && tObj?.label) labelContent.content = tObj.label;
        loadingText = getTranslation(props.withTranslation, "loading");
    }

    
    iconText = props.isLoading ? loadingText : iconText;
    labelContent = props.isLoading ? "" : labelContent;
    
    const animate = getAnimation(props.withAnimation);

    

    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui ${quommonClasses.parentClasses}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="qui-label" style={labelStyle}>
                {getLabel(labelContent, "label")}
            </div>
            <button
                variant={props.asEmphasis}
                color={props.asVariant}
                title={getLabel(labelContent, "popover")}
                disabled={props.isDisabled}
                className={`qui-btn ${quommonClasses.childClasses}`}
                style={Object.assign({}, colors, props.style)}
                onClick={props.onClick}
            >
                <i className="icon-loader fa fa-spinner fa-spin"></i>
                {getIcon(props.withIcon, "left", iconOnly)}
                {iconText}
                </button>
            <div className="qui-caption" style={labelStyle}>
                {getLabel(labelContent, "caption")}
            </div>
        </motion.div>
    );
}
