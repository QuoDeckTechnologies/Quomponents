// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
    getQuommons,
    getAnimation,
} from "../../common/javascripts/helpers.js";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./NuggetBlock.scss";
import "../../common/stylesheets/overrule.scss";

import defaultImage from "../../assets/default.jpeg"

NuggetBlock.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    image: PropTypes.string.isRequired,

    // Quommon props
    //=======================================
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
    Use to define component padding in increasing order
    */
    asPadded: PropTypes.oneOf(["fitted", "compact", "normal", "relaxed"]),
    /**
    Use to float the component in parent container
    */
    asFloated: PropTypes.oneOf(["left", "right", "inline"]),
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

NuggetBlock.defaultProps = {
    // Component Specific props
    //=======================================
    image: "",

    // Quommon props
    //=======================================
    asSize: "normal",
    asPadded: "normal",
    asFloated: "inline",
    withColor: null,
    withIcon: null,
    withAnimation: null,
    isHidden: false,
    isDisabled: false,
    onClick: null
};

/**
## Notes
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- Pass url in the image props
**/
export default function NuggetBlock(props) {

    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "nugget-block");

    //-------------------------------------------------------------------
    // 2. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);

    //-------------------------------------------------------------------
    // 3. Get Nugget Image
    //-------------------------------------------------------------------
    let icon = props.image ? props.image : defaultImage;

    return (
        <motion.div
            initial={animate?.from}
            animate={animate?.to}
            className={`qui ${quommonClasses.parentClasses}`}>
            <div className={`${quommonClasses.childClasses}`}>
                <div style={{ backgroundImage: `url(${icon})` }} alt="nuggetimage" className="qui-nugget-block-image" />
            </div>
        </motion.div>
    );
}
