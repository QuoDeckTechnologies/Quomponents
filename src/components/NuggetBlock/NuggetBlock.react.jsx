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
    status: PropTypes.oneOf(["published", "unpublished", "none"]),

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
    asFloated: PropTypes.oneOf(["left", "right", "none", "inline"]),
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
    onClick: PropTypes.func,
};

NuggetBlock.defaultProps = {
    // Component Specific props
    //=======================================
    image: "",
    status: "none",

    // Quommon props
    //=======================================
    asSize: "normal",
    asPadded: "normal",
    asFloated: "inline",
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
    const animate = getAnimation(props);

    //-------------------------------------------------------------------
    // 3. Get Nugget Image
    //-------------------------------------------------------------------
    let image = props.image ? props.image : defaultImage;

    //-------------------------------------------------------------------
    // 4. Get Nugget Status
    //-------------------------------------------------------------------
    let status, color, display;
    status = props.status.toUpperCase();

    if (status === "PUBLISHED") {
        color = "#C1DC9E"
    } else if (status === "UNPUBLISHED") {
        color = "#B2B4B3"
    } else {
        display = "none"
    }

    return (
        <motion.div
            initial={animate?.from}
            animate={animate?.to}
            className={`qui ${quommonClasses.parentClasses}`}>
            <div className={`${quommonClasses.childClasses}`}>
                <div className={`qui-nugget-status`} style={{ backgroundColor: color, display: display }}></div>
                <div style={{ backgroundImage: `url(${image})` }} alt="nuggetimage" className="qui-nugget-block-image" onClick={() => { return props.onClick() }} />
            </div>
        </motion.div>
    );
}
