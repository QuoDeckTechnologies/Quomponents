import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import IconLink from "../IconLink/IconLink.react"

import {
    getQuommons,
} from "../../../common/javascripts/helpers";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./ToolbarDark.scss";
import "../../../common/stylesheets/overrule.scss";

ToolbarDark.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================

    content: PropTypes.shape({
        icon: PropTypes.string,

    }).isRequired,

    /**
    Set action emphasis in increasing order 
    */
    asEmphasis: PropTypes.oneOf(["text", "outlined", "contained"]),
    /**
    Use for rounded corners or circular icon ToolbarDark 
    */
    isCircular: PropTypes.bool,

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
    Use to add an icon to the component
    */
    withIcon: PropTypes.shape({
        icon: PropTypes.string,
        size: PropTypes.string,
        position: PropTypes.oneOf(["left", "right"]),
    }),
    /**
    Use to add a heading label, a footer caption or a title popover to the component
    */
    withLabel: PropTypes.shape({
        format: PropTypes.oneOf(["label", "caption", "popover"]),
        content: PropTypes.string,
        textColor: PropTypes.string,
        hoverTextColor: PropTypes.string,
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
    Use to toggle the component taking the full width of the parent container
    */
    isFluid: PropTypes.bool,

    /**
    ToolbarDark component must have the onClick function passed as props
    */
    onClick: PropTypes.func,
};

ToolbarDark.defaultProps = {

    content: {},
    // Component Specific props
    //=======================================
    asEmphasis: "contained",
    isCircular: false,

    // Quommon props
    //=======================================
    asVariant: "warning",
    asSize: "normal",
    asPadded: "normal",
    asAligned: "center",

    withColor: null,
    withIcon: null,



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
/**
## Notes
- The design system used for this component is fontawesome Icons
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- props are not being passed to the ToolbarDark. Please speak to the admin to handle any new prop.
**/
export default function ToolbarDark(props) {



    const [hovered, setHovered] = useState(false);


    let { content } = props;
    let icon = content?.icon;


    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props);
    if (props.isCircular)
        quommonClasses.childClasses += ` is-circular`;

    quommonClasses.childClasses += ` emp-${props.asEmphasis}`;

    //-------------------------------------------------------------------
    // 2. Set the component colors
    //-------------------------------------------------------------------
    let colors = props.withColor ? getColors(props.withColor, props.asEmphasis, hovered) : {};

    //-------------------------------------------------------------------
    // 3. Set the label/caption/popover and loading text
    //-------------------------------------------------------------------
    let labelContent = Object.assign({}, props.withLabel);
    let labelStyle = labelContent?.textColor
        ? { color: labelContent.textColor }
        : {};
    let loadingText = "";



    // ========================= Render Function =================================

    const getIcon=(iconClass)=>{
        return(
            <i className={iconClass}></i>

        )

    }

    return (
        <motion.div
            className={`qui ${quommonClasses.parentClasses}`}


        >    <div className={`qui-btn backbar ${quommonClasses.childClasses}`} >


                <div
                    variant={props.asEmphasis}
                    color={props.asVariant}
                    className={`qui-btn ${quommonClasses.childClasses} size-${props.asSize ? props.asSize : ""}`}
                    style={Object.assign({}, colors, props.style)}
                >

                    <div >

                       

                        {props.withIcon.icon.map(icon =>{
                            return(
                                getIcon(icon)
                            )

                        })}

                            </div>
                        </div>
                        <div className={`qui-btn-label size-${props.asSize ? props.asSize : ""}`} style={labelStyle}>
                            {getLabel(labelContent, "label")}
                        </div>

                        <div className={`qui-btn-caption size-${props.asSize ? props.asSize : ""}`} style={labelStyle}>
                            {getLabel(labelContent, "caption")}
                        </div>



                    </div>
                </motion.div>
                );
};