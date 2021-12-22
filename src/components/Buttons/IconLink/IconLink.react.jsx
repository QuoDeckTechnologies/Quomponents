// Import npm packages
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
import './IconLink.scss'
import "../../../common/stylesheets/overrule.scss";

Button.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================

    /**
    Button Text has to be in content or passed as children to the component. Is optional if you only want an icon.
    */
    content: PropTypes.string,
    /**
    Set action emphasis in increasing order 
    */
    asEmphasis: PropTypes.oneOf(["text", "outlined", "contained"]),
    /**
    Use for rounded corners or circular icon button 
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
    /**
    Use to toggle the component taking the full width of the parent container
    */
    isFluid: PropTypes.bool,

    /**
    Button component must have the onClick function passed as props
    */
    onClick: PropTypes.func.isRequired,
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
};

function getColors(colors, emphasis, hovered) {
    let colorStyle = {}
    if(!hovered){
        colorStyle = emphasis === 'text'
        ? {
            background : 'transparent',
            color : colors.textColor
        }
        : emphasis === 'outlined' 
        ? {
            background : 'transparent',
            color : colors.textColor,
            borderColor : colors.textColor
        }
        : emphasis === 'contained'
        ? {
            background : colors.backgroundColor,
            color : colors.textColor
        } 
        :
        {}
    }
    if(emphasis === 'text' && hovered){
        colorStyle.background = 'transparent'
        colorStyle.color = colors.hoverTextColor
    }
    if(emphasis === 'contained' && hovered){
        colorStyle = {
            background : colors.hoverBackgroundColor,
            color : colors.hoverTextColor
        }
    }
    if(emphasis === 'outlined' && hovered){
        colorStyle = {
            background : 'transparent',
            color : colors.hoverTextColor,
            borderColor : colors.hoverTextColor
        }
    }
 

    return colorStyle;
}

function getLabel(labelObj, position) {
    return labelObj?.format === position ? labelObj.content : "";
}


export default function Button(props) {
    const [ tilt,setTilt ] = useState(false)
    const [hovered, setHovered] = useState(false);

    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------

    let quommonClasses = getQuommons(props);
    if (props.isCircular){
        quommonClasses.childClasses += ` is-circular ${
        props.content === "" && props.withIcon ? "is-only-icon" : ""}`;
    }
    quommonClasses.childClasses += ` emp-${props.asEmphasis}`;

    //-------------------------------------------------------------------
    // 2. Get animation of the component
    //-------------------------------------------------------------------
    
    const animate = getAnimation(props.withAnimation);

    //-------------------------------------------------------------------
    // 3. Set the label/caption/popover and loading text
    //-------------------------------------------------------------------
    let labelContent = Object.assign({}, props.withLabel);
    let labelStyle = labelContent?.textColor
        ? { color: labelContent.textColor,
            fontWeight : 'normal'
            }
        : {};

    //-------------------------------------------------------------------
    // 5. Translate the text objects in case their is a dictionary provided
    //-------------------------------------------------------------------
    if (
        props.withTranslation?.lang &&
        props.withTranslation.lang !== "" &&
        props.withTranslation.lang !== "en"
    ) {
        let tObj = getTranslation(props.withTranslation)
        if (labelContent && tObj?.label) labelContent.content = tObj.label;
    }

    //-------------------------------------------------------------------
    // 6. Set colors
    //-------------------------------------------------------------------
    let colors = props.withColor ? getColors(props.withColor, props.asEmphasis, hovered) : {};


    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui ${quommonClasses.parentClasses}`}
            onMouseDown={()=>setTilt(true)} 
            onMouseUp={()=>setTilt(false)} 
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className={`qui qui-icon-label qui-title size-${props.asSize}`} style={labelStyle}>
                {getLabel(labelContent, "label")}
            </div>
            <div className="qui-container">
            <div className={`qui-btn ${quommonClasses.childClasses}`} style={colors} >
                    <i className={`${props.withIcon ? props.withIcon.icon : ''} qui-icon ${tilt ? 'qui-tilt' : ''}`} ></i> 
            </div>
            </div>
            <div className="qui-icon-caption qui-title" style={labelStyle}> 
                 {getLabel(labelContent, "caption")} 
            </div>
        </motion.div>
    )
}
