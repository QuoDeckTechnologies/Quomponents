import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import {
    getTranslation,
} from "../../../common/javascripts/helpers";

import Button from "../Button/Button.react";
import ButtonGroup from '@mui/material/ButtonGroup';

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./FlipConfirm.scss";
import "../../../common/stylesheets/overrule.scss";



FlipConfirm.propTypes = {
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
    Use to define confirmation modal header text and success and failure button text
    */
    withConfirmation: PropTypes.shape({
        header: PropTypes.string,
        yes: PropTypes.string,
        no: PropTypes.string,
    }),

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

FlipConfirm.defaultProps = {
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


    withConfirmation: null,
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

/**
## Notes
- The design system used for this component is Material UI (@mui/material)
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- MUI props are not being passed to the button. Please speak to the admin to handle any new MUI prop.
**/

export default function FlipConfirm(props) {
    let withConfirmation = props.withConfirmation ? props.withConfirmation : null;
    const [mode, setMode] = useState(false);
    const buttonRef = useRef(null);

    // Click Handlers
    // ----------------------
    function frontClick(event) {
        var mx = event.clientX - buttonRef.current.offsetLeft,
            my = event.clientY - buttonRef.current.offsetTop;

        var w = buttonRef.current.offsetWidth,
            h = buttonRef.current.offsetHeight;

        var directions = [
            { id: "top", x: w / 2, y: 0 },
            { id: "right", x: w, y: h / 2 },
            { id: "bottom", x: w / 2, y: h },
            { id: "left", x: 0, y: h / 2 },
        ];

        directions.sort(function (a, b) {
            return distance(mx, my, a.x, a.y) - distance(mx, my, b.x, b.y);
        });

        buttonRef.current.setAttribute("data-direction", directions.shift().id);
        setMode(true);
    }

    function yesClick() {
        setMode(false);
        props.onClick();
    }
    function noClick() {
        setMode(false);
    }

    //-------------------------------------------------------------------
    // 1. Translate the text objects in case their is a dictionary provided
    //-------------------------------------------------------------------
    if (
        props.withTranslation &&
        props.withTranslation.lang !== "" &&
        props.withTranslation.lang !== "en"
    ) {
        let tObj = getTranslation(props.withTranslation);
        withConfirmation = Object.assign(withConfirmation, tObj)
    }


    return (
        <div className={`qui-fc-btn-main`}>
            <div className={`qui-fc-btn ${mode ? "is-open" : ""}`} ref={buttonRef}>
                <div className={`qui-fc-btn-back ${mode ? "is-enable" : "qui is-hidden"}`}>
                    <p>{props.withConfirmation.header}</p>
                    <ButtonGroup>
                        <Button
                            asEmphasis={props.asEmphasis}
                            asVariant="error"
                            onClick={yesClick}
                        >
                            {props.withConfirmation.yes}
                        </Button>
                        <Button
                            asEmphasis="outlined"
                            asVariant="primary"
                            onClick={noClick}
                        >
                            {props.withConfirmation.no}
                        </Button>
                    </ButtonGroup>
                </div>
                <Button
                    {...props}
                    onClick={frontClick}
                >
                </Button>
            </div>
        </div>
    );

    // Utility Functions
    // ----------------------

    function distance(x1, y1, x2, y2) {
        var dx = x1 - x2;
        var dy = y1 - y2;
        return Math.sqrt(dx * dx + dy * dy);
    }
}
