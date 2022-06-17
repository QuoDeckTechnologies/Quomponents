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
import Active from "../../assets/active.png"
import Inactive from "../../assets/inactive.png"

Marker.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    content: PropTypes.shape({
        inset: PropTypes.number,
    }),
    /**
    Use to set the state of MobileToolbar 
    */
    status: PropTypes.oneOf([
        "current",
        "incomplete",
    ]),
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
    content: {},
    status: "current",
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
    // 1. Destructuring content from props
    //-------------------------------------------------------------------
    let { content } = props;
    //-------------------------------------------------------------------
    // 2. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "marker");
    //-------------------------------------------------------------------
    // 3. Use to set Color in Marker Component
    //-------------------------------------------------------------------
    let activeColor = {
        color: props.withColor?.activeTextColor,
    };
    let deactivatedColor = {
        color: props.withColor?.textColor,
    };
    //-------------------------------------------------------------------
    // 4. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);
    // ========================= Render Function =================================
    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui ${quommonClasses.parentClasses}`}>
            <div className={`${quommonClasses.childClasses}`} style={props.status === "current" ? activeColor : deactivatedColor}
                onClick={props.onClick}>
                {props.status === "current" ? <img src={Active} alt="Logo" className="qui-marker-current" />
                    : <img src={Inactive} alt="Logo" className="qui-marker-incomplete" />
                }
                <div className="qui-marker-inset">
                    {content?.inset}
                </div>
            </div>
        </motion.div>
    );
}

