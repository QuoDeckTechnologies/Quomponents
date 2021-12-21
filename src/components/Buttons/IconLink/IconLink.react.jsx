import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import {
    getQuommons,
    getTranslation,
    getAnimation,
} from "../../../common/javascripts/helpers";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./IconLink.scss";
import "../../../common/stylesheets/overrule.scss";

IconLink.propTypes = {


    asEmphasis: PropTypes.oneOf(["text", "outlined", "contained"]),

    isCircular: PropTypes.bool,


    asVariant: PropTypes.oneOf([
        "primary",
        "secondary",
        "success",
        "warning",
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
    }),

    withLabel: PropTypes.shape({
        format: PropTypes.oneOf(["label", "caption", "popover"]),
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


    onClick: PropTypes.func.isRequired,
};

IconLink.defaultProps = {
    asEmphasis: "contained",
    isCircular: false,

    asVariant: "warnimg",
    asSize: "normal",
    asPadded: "normal",
    asFloated: "none",
    asAligned: "center",

    withColor: null,
    withIcon: null,
    withAnimation: null,
    withTranslation: null,

    isHidden: false,
    isDisabled: false,
    isFluid: false,
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

function getIcon(iconObj, position) {

    return (
        iconObj?.position === position && (
            <i
                className={`qui-btn ${iconObj.icon}`}
                style={{ fontSize: iconObj.size }}
            ></i>
        )
    );
}

export default function IconLink(props) {


    
    const [tilt, setTilt] = useState(false)

    useEffect(() => { console.log(tilt) }, [tilt])


    const handleTilt = (e) => {
        setTilt(true)
        setTimeout(() => {
            setTilt(false)
        }, 1000)
        //props.onclick(e)
        console.log(props.withColor)

    };

    const [hovered, setHovered] = useState(false);

    let quommonClasses = getQuommons(props);
    if (props.isCircular)
        quommonClasses.childClasses += ` is-circular`;

    quommonClasses.childClasses += ` emp-${props.asEmphasis}`;
    let colors = props.withColor ? getColors(props.withColor, props.asEmphasis, hovered) : {};


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
        }
        if (labelContent && tObj?.label) labelContent.content = tObj.label;
        loadingText = getTranslation(props.withTranslation, "loading");
    }
    const animate = getAnimation(props.withAnimation);






    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui ${quommonClasses.parentClasses}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Tilt >
                <button 

                    variant={props.asEmphasis}
                    color={props.asVariant}
                    className={`qui-btn ${quommonClasses.childClasses}`}
                    style={Object.assign({}, colors, props.style)}
                    onClick={props.onClick}

                    onClick={(e) => handleTilt(e)}
                >

                    <div className={`${tilt ? 'tilt' : ''}`}>
                        {getIcon(props.withIcon)}
                    </div>
                </button>
            </Tilt>

            <div className="qui-label" style={labelStyle}>
                {getLabel(labelContent, "label")}
            </div>
        </motion.div>
    );
};
