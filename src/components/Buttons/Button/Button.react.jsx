// Import npm packages
import React, { useState } from "react";
import PropTypes from "prop-types";
import { default as MUIButton } from "@mui/material/Button";
import { motion } from "framer-motion";
import {
    getQuommons,
    getTranslation,
    getAnimation,
} from "../../../common/javascripts/helpers";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./Button.scss";
import "../../../common/stylesheets/overrule.scss";

Button.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================

    /**
    Button Text has to be in content or passed as children to the component. Is optional if you only want an icon.
    */
    content: PropTypes.string.isRequired,
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
    /**
    Use to toggle the component taking the full width of the parent container
    */
    isFluid: PropTypes.bool,
    /**
    Use to toggle a loading state for the component
    */
    isLoading: PropTypes.bool,

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
              background:
                  emphasis !== "contained"
                      ? "transparent"
                      : colors.backgroundColor,
              color:
                  emphasis !== "contained"
                      ? colors.backgroundColor
                      : colors.textColor,
          };
    if (!hovered && emphasis === "outlined")
        colorStyle.borderColor = colors.backgroundColor;
    return colorStyle;
}

function getIcon(iconObj, position, iconOnly) {
    let iconPosition = iconObj?.position || "left";
    let iconMargin = iconOnly
        ? "0"
        : position === "left"
        ? "0 0.5em 0 0"
        : "0 0 0 0.5em";

    return (
        iconObj?.icon &&
        iconPosition === position && (
            <i
                className={`qui-icon ${iconObj.icon}`}
                style={{ fontSize: iconObj.size, margin: iconMargin }}
            ></i>
        )
    );
}

/**
## Notes
- The design system used for this component is Material UI (@mui/material)
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- MUI props are not being passed to the button. Please speak to the admin to handle any new MUI prop.
**/
export default function Button(props) {
    const [hovered, setHovered] = useState(false);

    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "button");
    if (props.isCircular)
        quommonClasses.childClasses += ` is-circular ${
            props.content === "" && props.withIcon ? "is-only-icon" : ""
        }`;

    quommonClasses.childClasses += ` emp-${props.asEmphasis}`;
    //-------------------------------------------------------------------
    // 2. Set the component colors
    //-------------------------------------------------------------------
    let colors = props.withColor
        ? getColors(props.withColor, props.asEmphasis, hovered)
        : {};

    //-------------------------------------------------------------------
    // 3. Set the button text
    //-------------------------------------------------------------------
    let buttonText = props.content
        ? props.content
        : props.children
        ? props.children
        : "";
    let iconOnly = buttonText === "";

    //-------------------------------------------------------------------
    // 4. Set the label/caption/popover and loading text
    //-------------------------------------------------------------------
    let labelContent = Object.assign({}, props.withLabel);
    let labelStyle = labelContent?.textColor
        ? { color: labelContent.textColor }
        : {};
    let loadingText = "Please Wait...";

    //-------------------------------------------------------------------
    // 5. Translate the text objects in case their is a dictionary provided
    //-------------------------------------------------------------------
    if (
        props.withTranslation?.lang &&
        props.withTranslation.lang !== "" &&
        props.withTranslation.lang !== "en"
    ) {
        let tObj = getTranslation(props.withTranslation);
        if (tObj && props.content && props.content !== "") {
            buttonText = tObj.text;
        }
        if (labelContent && tObj?.label) labelContent.content = tObj.label;
        loadingText = getTranslation(props.withTranslation, "loading");
    }

    //-------------------------------------------------------------------
    // 6. Provide loading text if loading is clicked
    //-------------------------------------------------------------------
    buttonText = props.isLoading ? loadingText : buttonText;
    labelContent = props.isLoading ? "" : labelContent;

    //-------------------------------------------------------------------
    // 7. Get animation of the component
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
            <div className="qui-label" style={labelStyle}>
                {getLabel(labelContent, "label")}
            </div>
            <MUIButton
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
                {buttonText}
                {getIcon(props.withIcon, "right", iconOnly)}
            </MUIButton>
            <div className="qui-caption" style={labelStyle}>
                {getLabel(labelContent, "caption")}
            </div>
        </motion.div>
    );
}
