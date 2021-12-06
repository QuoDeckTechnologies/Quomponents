import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import PropTypes from "prop-types";

Loader.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    isTheme: PropTypes.oneOf([
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
    isTheme: "light",
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

export function getTranslation(tObj, key) {
    let dict = tObj && tObj.dictionary ? JSON.parse(tObj.dictionary) : null;
    let tgt = key ? key : tObj && tObj.tgt ? tObj.tgt : null;
    return dict && tgt && dict[tObj.lang] && dict[tObj.lang][tgt]
        ? dict[tObj.lang][tgt]
        : null;
}
export default function Loader(props) {

    let content = props.content ? props.content : null;
    let [text, setText] = useState("");
    let [thought, setThought] = useState("");

    useEffect(() => {
        if (
            props.withTranslation &&
            props.withTranslation.lang !== "" &&
            props.withTranslation.lang !== "en"
        ) {
            let tObj = getTranslation(props.withTranslation);
            content = Object.assign(content, tObj)
        }
        const interval = setInterval(function () {
            if (content !== null) {
                if (content.text) {
                    setText(content.text)
                }
                if (content.thoughts.length > 0) {
                    setThought(content.thoughts[Math.floor(Math.random() * content.thoughts.length)])
                }
            }
        }, 5000);
        return () => {
            clearInterval(interval);
        }
    }, [])

    return (
        <div>
            {text}
            {thought}
        </div>
    );
}
