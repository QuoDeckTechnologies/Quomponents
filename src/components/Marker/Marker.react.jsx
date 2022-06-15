import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
    getAnimation,
    getQuommons,
} from "../../common/javascripts/helpers";
import "../../common/stylesheets/common.css";
import "./Marker.scss";
import "../../common/stylesheets/overrule.scss";

Marker.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    isActive: PropTypes.bool,
    //=======================================
    // Quommon props
    //=======================================
    /**
    Use to define component size in increasing order
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
    Use to define component backgroundColor and textColor Color 
    */
    withColor: PropTypes.shape({
        textColor: PropTypes.string,
        activeTextColor: PropTypes.string,
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
    Use to show/hide the component
    */
    isHidden: PropTypes.bool,
    /**
    Use to enable/disable the component
    */
    isDisabled: PropTypes.bool,
    /**
    component must have the onClick function passed as props
    */
    onClick: PropTypes.func.isRequired,
};

Marker.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    content: "",
    isActive: true,
    //=======================================
    // Quommon props
    //=======================================
    asSize: "normal",
    asFloated: "none",

    withColor: null,
    withAnimation: null,

    isHidden: false,
    isDisabled: false,
};
/**
## Notes
- The design system used for this component is HTML and CSS
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function Marker(props) {
    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "marker");
    //-------------------------------------------------------------------
    // 2. Use to set Color in Marker Component
    //-------------------------------------------------------------------
    let activeColor = {
        color: props.withColor?.activeTextColor,
    };
    let deactivatedColor = {
        color: props.withColor?.textColor,
    };
    //-------------------------------------------------------------------
    // 3. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);
    // ========================= Render Function =================================
    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui ${quommonClasses.parentClasses}`}>
            <div className={`qui-btn ${props.isActive ? "qui-marker-block" : 'qui-marker-block qui-marker-decativated'} ${quommonClasses.childClasses}`} style={props.isActive ? activeColor : deactivatedColor}
                onClick={props.onClick}>
                <div className="qui-marker-label">
                    <i className="fas fa-map-marker	"></i>
                </div>
            </div>
        </motion.div>
    );
}

