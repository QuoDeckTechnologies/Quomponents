import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { motion } from "framer-motion";
import {
    getQuommonClasses,
    getTranslation,
    getAnimation,
} from "../../common/javascripts/helpers";
import Box from '@mui/material/Box';
import "../../common/stylesheets/common.css";
import "./Loader.scss";

Loader.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    asTheme: PropTypes.oneOf([
        "light",
        "dark"
    ]),

    /**
    Use to add a loading text, thought and image to loader 
    */
    content: PropTypes.object,

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
    Use to toggle the component taking the full width of the parent container
    */
    isFluid: PropTypes.bool
};

Loader.defaultProps = {
    // Component Specific props
    //=======================================
    asTheme: "light",
    content: null,

    // Quommon props
    //=======================================
    asVariant: "primary",
    asSize: "normal",
    asPadded: "normal",
    asFloated: "none",
    asAligned: "center",

    withColor: null,
    withIcon: null,
    withAnimation: null,
    withTranslation: null,

    isHidden: false,
    isFluid: false,
};

function getColors(colors) {
    return { background: colors.backgroundColor }
}

export default function Loader(props) {

    let content = props.content ? props.content : null;
    let [text, setText] = useState("");
    let [thought, setThought] = useState("");

    useEffect(() => {
        if (!props.isHidden) {
            if (
                props.withTranslation &&
                props.withTranslation.lang !== "" &&
                props.withTranslation.lang !== "en"
            ) {
                let tObj = getTranslation(props.withTranslation);
                content = Object.assign(content, tObj)
            }
            if (content && content !== null && content.thoughts) {
                setText(content.text);
                setThought(content.thoughts[Math.floor(Math.random() * content.thoughts.length)])
                const interval = setInterval(function () {
                    if (content.text) {
                        setText(content.text)
                    }
                    if (content.thoughts.length > 0) {
                        setThought(content.thoughts[Math.floor(Math.random() * content.thoughts.length)])
                    }
                }, 5000);
                return () => {
                    clearInterval(interval);
                }
            }
            return true;
        }
    }, []);

    let commonIconStyle = getQuommonClasses(_.pick(props, ['asSize']));

    let commonContentStyle = getQuommonClasses(_.pick(props, ['isFluid', 'asFloated', 'asAligned']));

    let commontextStyle = getQuommonClasses(_.pick(props, ['isHidden']));

    let commonBoxStyle = getQuommonClasses(_.pick(props, ['asVariant']));

    //-------------------------------------------------------------------
    // Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);
    //-------------------------------------------------------------------
    //  Set the component standard colors 
    //-------------------------------------------------------------------
    let colors = props.withColor ? getColors(props.withColor) : {};
    let firstContainerClass = `order-${props.content && props.content.format && props.content.format === "label" ? "second" : "first"}`;
    let secondContainerClass = `order-${props.content && props.content.format && props.content.format === "label" ? "first" : "second"}`;

    return (
        <div className={`qui qui-container theme-${props.asTheme}`}>
            {content &&
                <div className={`qui qui-content ${commonContentStyle}`}>
                    <div className={`${commonIconStyle} ${firstContainerClass}`}>
                        {content.image !== null && (
                            <img src={content.image} />
                        )}
                        {content.image === null && props.withIcon.icon && (
                            <i className={props.withIcon.icon}></i>
                        )}
                    </div>
                    <br />
                    <div className={`qui ${commontextStyle} ${secondContainerClass}`}>
                        <strong>{text}</strong>
                        <motion.div
                            key={`thought-${Math.random()}`}
                            initial={animate.from}
                            animate={animate.to}
                        >
                            {thought}
                        </motion.div>
                    </div>
                </div>
            }
            <Box
                style={Object.assign({}, colors)}
                className={`qui-div-bottom ${commonBoxStyle}`}
            >
            </Box>
        </div>
    );
}
