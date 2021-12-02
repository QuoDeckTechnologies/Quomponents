// Import npm packages
import React, { useState } from "react";
import PropTypes from "prop-types";
import { default as MUIButton } from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "@fortawesome/fontawesome-free/css/all.min.css";

import "../../../assets/stylesheets/common.css";
import "./Button.scss";

Button.propTypes = {
    // Component Specific props
    //=======================================
    name: PropTypes.string, // Is optional if you only want an icon
    asEmphasis: PropTypes.oneOf(["text", "contained", "outlined"]),

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
    }),
    withAnimation: PropTypes.shape({
        animation: PropTypes.string,
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
    isPaged: PropTypes.bool,
    isLoading: PropTypes.bool,

    onClick: PropTypes.func,
};

Button.defaultProps = {
    // Component Specific props
    //=======================================
    asEmphasis: "contained",

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
    isPaged: false,
    isLoading: false,
};

function getQuommonClasses(props) {
    let parentArray = ["qui"],
        childArray = [""];

    if (props.asSize) childArray.push(`size-${props.asSize}`);
    if (props.asPadded) childArray.push(`pad-${props.asPadded}`);
    if (props.asAligned) childArray.push(`${props.asAligned}-aligned`);
    if (props.asFloated) parentArray.push(`float-${props.asFloated}`);

    if (props.isHidden) parentArray.push("is-hidden");
    if (props.isDisabled) parentArray.push("is-disabled");
    if (props.isFluid) {
        parentArray.push("is-fluid");
        childArray.push("is-fluid");
    }
    if (props.isLoading) parentArray.push("is-loading");
    if (props.isPaged) parentArray.push("is-paged");

    return {
        parentClasses: parentArray.join(" "),
        childClasses: childArray.join(" "),
    };
}

function getTranslation(tObj) {
    let dict = tObj && tObj.dictionary ? JSON.parse(tObj.dictionary) : null;
    return dict && dict[tObj.lang] && dict[tObj.lang][tObj.tgt]
        ? dict[tObj.lang][tObj.tgt]
        : null;
}

const theme = createTheme({
    palette: {
        primary: {
            main: "#0971f1",
            contrastText: "#ffffff",
        },
        secondary: {
            main: "#64748B",
            contrastText: "#ffffff",
        },
        success: {
            main: "#00ff00",
            contrastText: "#ffffff",
        },
        error: {
            main: "#ff0000",
            contrastText: "#ffffff",
        },
        warning: {
            main: "#ffc900",
            contrastText: "#ffffff",
        },
    },
});

export default function Button(props) {
    const [hovered, setHovered] = useState(false);

    //-------------------------------------------------------------------
    // 1. Set the common classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommonClasses(props);

    //-------------------------------------------------------------------
    // 2. Set the component colors
    //-------------------------------------------------------------------
    let colors = {};
    if (props.withColor) {
        colors = hovered
            ? {
                  background: props.withColor.hoverBackgroundColor,
                  color: props.withColor.hoverTextColor,
              }
            : {
                  background: props.withColor.backgroundColor,
                  color: props.withColor.textColor,
              };
    }

    //-------------------------------------------------------------------
    // 3. Set the button text and any label/caption/popover text
    //-------------------------------------------------------------------
    let buttonText = props.name
        ? props.name
        : props.children
        ? props.children
        : "";
    let labelContent = props.withLabel
        ? { content: props.withLabel.content, format: props.withLabel.format }
        : null;

    //-------------------------------------------------------------------
    // 4. Translate the text objects in case their is a dictionary provided
    //-------------------------------------------------------------------
    let tObj = getTranslation(props.withTranslation);
    if (tObj) {
        buttonText = tObj.text;
        if (labelContent) labelContent.content = tObj.label;
    }

    //-------------------------------------------------------------------
    // 5. Disable Button Text if loading is clicked
    //-------------------------------------------------------------------
    buttonText = props.isLoading ? "" : buttonText;

    return (
        <div
            className={quommonClasses.parentClasses}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="qui-label">
                {
                    // Use the label content as header if format is label
                    //------------------------------------------------------
                    labelContent && labelContent.format === "label"
                        ? labelContent.content
                        : ""
                }
            </div>

            <ThemeProvider theme={theme}>
                <MUIButton
                    variant={props.asEmphasis}
                    color={props.asVariant}
                    //
                    title={
                        // Use the label content as title if format is popover
                        //------------------------------------------------------
                        labelContent && labelContent.format === "popover"
                            ? labelContent.content
                            : ""
                    }
                    disabled={props.isDisabled}
                    className={`qui-btn ${quommonClasses.childClasses}`}
                    style={colors}
                    onClick={props.onClick}
                >
                    {props.isLoading && (
                        <i className="fa fa-spinner fa-spin"></i>
                    )}

                    {
                        // If there is an icon and it is left aligned, show it here
                        //------------------------------------------------------
                        !props.isLoading &&
                            props.withIcon &&
                            props.withIcon.icon &&
                            props.withIcon.position !== "right" && (
                                <i
                                    className={props.withIcon.icon}
                                    style={{
                                        fontSize: props.withIcon.size,
                                        marginRight:
                                            buttonText == null ||
                                            buttonText === ""
                                                ? "0"
                                                : "0.5em",
                                    }}
                                ></i>
                            )
                    }

                    {buttonText}

                    {
                        // If there is an icon and it is right aligned, show it here
                        //------------------------------------------------------
                        !props.isLoading &&
                            props.withIcon &&
                            props.withIcon.icon &&
                            props.withIcon.position === "right" && (
                                <i
                                    className={props.withIcon.icon}
                                    style={{
                                        fontSize: props.withIcon.size,
                                        marginLeft:
                                            buttonText == null ||
                                            buttonText === ""
                                                ? "0"
                                                : "0.5em",
                                    }}
                                ></i>
                            )
                    }
                </MUIButton>
            </ThemeProvider>
            <div className="qui-caption">
                {labelContent && labelContent.format === "caption"
                    ? labelContent.content
                    : ""}
            </div>
        </div>
    );
}
