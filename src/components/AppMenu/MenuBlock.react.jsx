// Import npm packages
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
    getQuommons,
} from "../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./MenuBlock.scss";
import "../../common/stylesheets/overrule.scss";
MenuBlock.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================

    /**
    Icon Text has to be in content or passed as children to the component. Is optional if you only want an icon.
    */
    content: PropTypes.string,
    /**
    Set action emphasis in increasing order 
    */
    asEmphasis: PropTypes.oneOf(["text", "outlined", "contained"]),
    /**
    Use for rounded corners or circular icon 
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
    asFloated: PropTypes.oneOf(["left", "right", "inline"]),
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
    Menu component must have the onClick function passed as props
    */
    onClick: PropTypes.func.isRequired,
};

MenuBlock.defaultProps = {
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

export default function MenuBlock(props) {
    const [tilt ] = useState(false)
    useEffect(() => {
    }, [tilt])
    const [hovered, setHovered] = useState(false);

    let quommonClasses = getQuommons(props);
    if (props.isCircular)
        quommonClasses.childClasses += ` is-circular ${props.content === "" && props.withIcon ? "is-only-icon" : ""}`;
    quommonClasses.childClasses += ` emp-${props.asEmphasis}`;


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
    
    //-------------------------------------------------------------------
    // 3. Translate the text objects in case their is a dictionary provided
    //-------------------------------------------------------------------
    if (
        props.withTranslation?.lang &&
        props.withTranslation.lang !== "" &&
        props.withTranslation.lang !== "en"
    ) {
       
       
        
    }


    return (
        <div
            className={`qui ${quommonClasses.parentClasses}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
           >
            <div className={`qui qui-MenuBlockIcon  ${quommonClasses.childClasses}`}  onClick={props.onClick}>
                <div className="MenuBlock">
                {/* <p>Menu</p> */}
                </div>
            </div>
        </div>       

    )
}