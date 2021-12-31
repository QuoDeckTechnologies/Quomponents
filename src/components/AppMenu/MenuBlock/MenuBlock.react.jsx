// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./MenuBlock.scss";
import "../../../common/stylesheets/overrule.scss";
import { getQuommons } from "../../../common/javascripts/helpers";

MenuBlock.propTypes = {
    // Quommon props
    //=======================================

    /**
    Set action emphasis in increasing order 
    */
    asEmphasis: PropTypes.oneOf(["text", "outlined", "contained"]),
    /**
    Use for rounded corners or circular icon button 
    */

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
    Use to float the component in parent container
    */
    asFloated: PropTypes.oneOf(["left", "right", "none", "inline"]),
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
    Use to show/hide the component
    */
    isHidden: PropTypes.bool,
    /**
    Use to enable/disable the component
    */
    isDisabled: PropTypes.bool,
    /**
    Button component must have the onClick function passed as props
    */
    onClick: PropTypes.func.isRequired,
};

MenuBlock.defaultProps = {
    // Component Specific props
    //=======================================
    asEmphasis: "contained",
    // Quommon props
    //=======================================
    asVariant: "primary",
    asSize: "normal",
    asPadded: "normal",
    asFloated: "none",

    withColor: null,
    withIcon: null,
    withLabel: null,
    withAnimation: null,

    isHidden: false,
    isDisabled: false,
};
function getLabel(labelObj, position) {
    return labelObj?.format === position ? labelObj.content : "";
}
/**
## Notes
- The design system used for this component is Material UI (@mui/material)
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- MUI props are not being passed to the button. Please speak to the admin to handle any new MUI prop.
**/
export default function MenuBlock(props) {

    let quommonClasses = getQuommons(props);
    //-------------------------------------------------------------------
    // 4. Set the label/caption/popover and loading text
    //-------------------------------------------------------------------
    let labelContent = Object.assign({}, props.withLabel);
    let labelStyle = labelContent?.textColor
        ? { color: labelContent.textColor }
        : {};

    // ========================= Render Function ================================

    return (

        <div className={`qui ${quommonClasses.parentClasses}`}>
            <div className={` float-${props.asFloated}`} onClick={(e)=>props.onClick(e)}>
            <div className={`qui-container qui-menuBlock qui-btn size-${props.asSize} variant-${props.asVariant} emp-${props.asEmphasis}`}>
                <div className="qui-iconContainer">
                <div className={`qui-label ${quommonClasses.childClasses}`} style={labelStyle}>
                {getLabel(labelContent, "label")}
                </div>
                <i className={props.withIcon?.icon}></i>
                </div>
            </div>
        </div>
        </div>
    )
}
