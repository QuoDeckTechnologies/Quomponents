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
import { WrapperList } from "../../common/schema/WrapperSchema.react";

Marker.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    content: PropTypes.shape({
        wrapper: PropTypes.string,
        inset: PropTypes.number
    }),

    /**
    Use to set the state of MobileToolbar 
    */
    status: PropTypes.oneOf([
        "current",
        "complete",
        "incomplete",
    ]),
    //=======================================
    // Quommon props
    //=======================================
    /**
    Use to float the component in parent container
    */
    asFloated: PropTypes.oneOf(["left", "right", "none", "inline"]),
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
    asFloated: "none",

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
    let { content, status } = props;
    //-------------------------------------------------------------------
    // 2. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "marker");
    //-------------------------------------------------------------------
    // 3. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);
    //-------------------------------------------------------------------
    // 4. Use to set Color in Marker Component
    //------------------------------------------------------------------
    let markerBlock = (
        <div className={`qui ${quommonClasses.parentClasses}`} onClick={props.onClick}>
            <img className="qui-marker-img"
                src={
                    WrapperList[content?.wrapper]?.customMarker
                        ? "assets/courses/" +
                        content?.wrapper +
                        status +
                        ".png"
                        : "assets/images/configurable/wrapperIcons/" +
                        status +
                        ".png"
                }
            />
            {WrapperList[content?.wrapper]?.sequenceInset && (
                <div className="qui-marker-text">
                    <h6>{content?.inset}</h6>
                </div>
            )}
        </div>
    );

    // ========================= Render Function =================================
    return status === "current" ? (
        <div className="qui-marker-style">
            <motion.div
                className={`qui ${quommonClasses.parentClasses}`}
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className={`${quommonClasses.childClasses}`}>
                    {markerBlock}
                </div>
            </motion.div>
        </div>
    ) : (
        <div className="qui-marker-style">{markerBlock}</div>
    )
};