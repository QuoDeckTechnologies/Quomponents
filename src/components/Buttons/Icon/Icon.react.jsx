// Import npm packages
import React, { useState ,useEffect } from "react";
import PropTypes from "prop-types";
import { Button as MUIBTn } from "@mui/material";
import { motion } from "framer-motion";
import {
    getQuommons,
    getTranslation,
    getAnimation,
} from "../../../common/javascripts/helpers";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./Icon.scss";
import "../../../common/stylesheets/overrule.scss";
import { Typography } from "@mui/material";
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

export default function Button(props){
    const[tilt,setTilt] = useState(false)
    useEffect(() => {
        console.log(tilt)
    }, [tilt])

    const handleTilt =() =>{
        setTilt(true)
        setTimeout(()=>{
            setTilt(false)
        },300)
    }

    return (
        <div className='qui'>
            <MUIBTn
                variant = {props.asEmphasis}
                color ={props.asVariant}
                disable = {props.isDisabled}
                size = {props.asSize}
                onClick = {()=>handleTilt()}
                >
                    <div className={`${tilt? 'qui tilt' : 'qui notilt'} qui-home-btn`}>
                        <i className ="fas fa-user"></i>
                        </div>
                </MUIBTn>
                <Typography color = {'text.secondary'}>User</Typography>
        </div>
    )
}