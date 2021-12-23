import React, { useState } from "react";
import PropTypes from "prop-types";
import { default as MUICard } from '@mui/material/Card';

import {
    getQuommons,
    getAnimation,
    getTranslation
} from "../../common/javascripts/helpers";
import Box from "@mui/material/Box";


// import "../../common/stylesheets/common.css";
import "./Card.scss";
// import "../../common/stylesheets/overrule.scss";
// import { motion } from "framer-motion";

Card.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    Use to Display Button content
    */
    content: PropTypes.string,
    /**
    Set action emphasis in increasing order 
    */
    asEmphasis: PropTypes.oneOf(["text", "outlined", "contained"]),
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
    Use to align content within the component container
    */
    asAligned: PropTypes.oneOf(["left", "right", "center"]),
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
    Use to add the spinning icon to the component
    Icon Options: https://fontawesome.com/v5.15/icons?d=gallery&p=2&c=spinners&m=free
    */
    withIcon: PropTypes.shape({
        icon: PropTypes.string,
        size: PropTypes.string,
    }),
    /**
    Use to add a heading label, a footer caption or a title popover to the component
    */
    withLabel: PropTypes.shape({
        format: PropTypes.oneOf(["label", "caption"]),
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
       Use to enable/disable the Button
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

Card.defaultProps = {
    // Component Specific props
    //=======================================
    content: "Reload",
    asEmphasis: "contained",

    // Quommon props
    //=======================================
    asVariant: "primary",
    asSize: "normal",
    asPadded: "normal",
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


export default function Card(props) {
    let quommonClasses = getQuommons(props);

    let loadingIcon = props.withIcon?.icon;
    let isImageIcon = null;
    if (loadingIcon) {
        isImageIcon = /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/.test(
            loadingIcon
        );
    }
    let iconStyle = props.withIcon?.size
        ? isImageIcon
            ? { width: props.withIcon.size }
            : { fontSize: props.withIcon.size }
        : {};


    return (
        <div className={`qui ${quommonClasses.parentClasses}`}>
            <MUICard className="container" style={{ borderRadius: "20px" }} elevation={10}>
                <div>
                    {props.withLabel.content}
                </div>
                <div className={quommonClasses.childClasses}>
                    {isImageIcon ? (
                        <img
                            className={`${quommonClasses.childClasses} qui-image`}
                            src={loadingIcon}
                            style={iconStyle}
                            alt="Certificate"
                        />
                    ) : (
                        <i
                            className={`qui-image ${props.withIcon?.icon
                                }`}
                            style={iconStyle}
                        ></i>

                    )}

                </div>
            </MUICard>
        </div>
    );
}