import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
    getAnimation,
    getQuommons,
} from "../../common/javascripts/helpers";
import "../../common/stylesheets/common.css";
import "./RewardBadge.scss";
import "../../common/stylesheets/overrule.scss";
import Segment from "../Segment/Segment.react";


RewardBadge.propTypes = {
    //=======================================
    // component specific props
    //=======================================
    image: PropTypes.string,
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
    Use to add a heading label, a footer caption or a title popover to the component
    */
    withLabel: PropTypes.shape({
        format: PropTypes.oneOf(["label", "caption", "popover"]),
        content: PropTypes.string,
        textColor: PropTypes.string,
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
    Use to set Colors for accent line
    */
    withColor: PropTypes.shape({
        backgroundColor: PropTypes.string,
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
            "",
        ]),
        duration: PropTypes.number,
        delay: PropTypes.number,
    }),
    /**
    Use to show/hide the component
    */
    isHidden: PropTypes.bool,
    /**
    Use to toggle the component taking the full width of the parent container
    */
    isFluid: PropTypes.bool,
};

RewardBadge.defaultProps = {
    //=======================================
    // component specific props
    //=======================================

    //=======================================
    // Quommon props
    //=======================================
    asVariant: "warning",
    asPadded: "normal",
    asSize: "normal",
    asFloated: "none",

    withColor: null,
    withAnimation: null,
    withLabel: null,

    isHidden: false,
    isFluid: false,
};
/**
## Notes
- The design system used for this component is HTML and CSS
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function RewardBadge(props) {
    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "reward-badge");
    quommonClasses.childClasses += ` variant-${props.asVariant}-text`;
    //-------------------------------------------------------------------
    // 2. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props);
    let labelContent = Object.assign({}, props.withLabel);
    function getLabel(labelObj, position) {
        return labelObj?.format === position ? labelObj.content : "";
    }

    // ========================= Render Function =================================
    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui ${quommonClasses.parentClasses}`}
        >
            <div className={`qui-reward-badge-container qui-btn ${quommonClasses.childClasses}`} style={{ backgroundColor: props.withColor?.backgroundColor }}>
                <h5>
                    {getLabel(labelContent, "label")}
                </h5>
                <img
                    className="qui-reward-badge"
                    src={`${props?.image}`}
                    alt="reward-badge"
                    title={getLabel(labelContent, "popover")}
                />
                <h5 >
                    {getLabel(labelContent, "caption")}
                </h5>
            </div>
        </motion.div>
    );
}
