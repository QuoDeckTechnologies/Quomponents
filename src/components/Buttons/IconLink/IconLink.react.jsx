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
import "./IconLink.scss";
import "../../../common/stylesheets/overrule.scss";
IconLink.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    Set content in iconLink 
    */
    link: PropTypes.string,
    /**
    Set action emphasis in increasing order 
    */
    asEmphasis: PropTypes.oneOf(["text", "outlined", "contained"]),
    /**
    Use for rounded corners or circular icon IconLink 
    */
    isCircular: PropTypes.bool,

    //=======================================
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
        "error"
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
    Use to override component colors and behavior
    */
    withColor: PropTypes.shape({
        backgroundColor: PropTypes.string,
        textColor: PropTypes.string,
        hoverBackgroundColor: PropTypes.string,
        hoverTextColor: PropTypes.string,
    }),
    /**
    Use to add an icon to the component
    */
    withIcon: PropTypes.shape({
        icon: PropTypes.string,
    }),
    /**
    Use to add a heading label, a footer caption or a title popover to the component
    */
    withLabel: PropTypes.shape({
        format: PropTypes.oneOf(["label", "caption", "popover"]),
        content: PropTypes.string,
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
    IconLink component must have the onClick function passed as props
    */
    onClick: PropTypes.func.isRequired,
};

IconLink.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    link: "",
    asEmphasis: "text",
    isCircular: false,
    //=======================================
    // Quommon props
    //=======================================
    asVariant: "primary",
    asSize: "normal",
    asPadded: "normal",
    asFloated: "inline",

    withColor: null,
    withIcon: null,
    withAnimation: null,
    withTranslation: null,

    isHidden: false,
    isDisabled: false,
};

function getLabel(labelObj, position) {
    return labelObj?.format === position ? labelObj.content : "";
}

function getColors(colors, emphasis, hovered) {
    let colorStyle = {
        buttonHandle: {},
        lableHandle: {}
    }
    if (!hovered) {
        colorStyle.buttonHandle = emphasis === 'text'
            ? {
                background: 'transparent',
                color: colors.backgroundColor
            }
            : emphasis === 'outlined'
                ? {
                    background: 'transparent',
                    color: colors.backgroundColor,
                    borderColor: colors.backgroundColor
                }
                : {
                    background: colors.backgroundColor,
                    color: colors.textColor
                }
        colorStyle.lableHandle = {
            color: colors.textColor
        }
    }
    if (hovered) {
        colorStyle.lableHandle = {
            color: colors.hoverTextColor
        }
        if (emphasis === 'text') {
            colorStyle.buttonHandle.background = 'transparent'
            colorStyle.buttonHandle.color = colors.hoverTextColor
        }
        if (emphasis === 'contained') {
            colorStyle.buttonHandle = {
                background: colors.hoverBackgroundColor,
                color: colors.hoverTextColor
            }
        }
        if (emphasis === 'outlined') {
            colorStyle.buttonHandle = {
                background: 'transparent',
                color: colors.hoverTextColor,
                borderColor: colors.hoverTextColor
            }
        }
    }
    return colorStyle;
}
/**
## Notes
- The design system used for this component is fontawesome Icons
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- props are not being passed to the IconLink. Please speak to the admin to handle any new prop.
**/
export default function IconLink(props) {

    const [tilt, setTilt] = useState(false)
    const [hovered, setHovered] = useState(false);

    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "icon-link");
    if (props.isCircular)
        quommonClasses.childClasses += ` is-circular`;

    if (props.withLabel?.content == null || props.withLabel?.content === "") {
        quommonClasses.childClasses += ` circular-without-label`;
    };

    quommonClasses.childClasses += ` emp-${props.asEmphasis}`;
    //-------------------------------------------------------------------
    // 2. Set the component colors
    //-------------------------------------------------------------------
    let colors = props.withColor ? getColors(props.withColor, props.asEmphasis, hovered) : {};
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
        >   <a className="qui-iconlink-anchor" href={props.link}>
                <div
                    className={`qui-btn ${quommonClasses.childClasses} qui-iconlink`}
                    title={getLabel(labelContent, "popover")}
                    style={Object.assign({}, colors.buttonHandle)}
                >
                    <div
                        className={`qui-btn qui-icon-label emp-text`} style={Object.assign({}, colors.lableHandle)}>
                        <div className="qui qt-utn">{getLabel(labelContent, "label")}</div>
                    </div>
                    <i onClick={props.onClick} className={`${props.withIcon?.icon} qui-iconlink-icon  ${tilt ? 'tilt' : ''}`}>
                    </i>
                    <div
                        className={`qui-btn qui-icon-caption emp-text`} style={Object.assign({}, colors.lableHandle)}>
                        <div className="qui qt-utn">{getLabel(labelContent, "caption")}</div>
                    </div>
                </div>
            </a >
        </motion.div >
    );
};
