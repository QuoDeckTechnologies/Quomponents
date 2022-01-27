import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
    getAnimation,
    getQuommons,
    getTranslation,
} from "../../common/javascripts/helpers";
import "../../common/stylesheets/common.css";
import "./Reward.scss";
import "../../common/stylesheets/overrule.scss";

Reward.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    //=======================================
    // Quommon props
    //=======================================
    /**
      Use to define component header and icon color
      */
    asVariant: PropTypes.oneOf([
        "primary",
        "secondary",
        "success",
        "warning",
        "error",
    ]),
    /**
      Use to define component text and icon size in increasing order
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
      Use to set Accent Color and Text Color 
      */
    withColor: PropTypes.shape({
        backgroundColor: PropTypes.string,
        textColor: PropTypes.string,
        accentColor: PropTypes.string,
    }),
    /**
      Use to add the Certificate's image to the component without certificate image status will show completed
      */
    withIcon: PropTypes.shape({
        icon: PropTypes.string,
    }),
    /**
      Use to add header label of the component
      */
    withLabel: PropTypes.shape({
        format: PropTypes.oneOf(["label", "caption", "popover"]),
        content: PropTypes.string,
        amount: PropTypes.string,
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
            "",
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
};

Reward.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    //=======================================
    // Quommon props
    //=======================================
    asVariant: "primary",

    withColor: null,
    withIcon: null,
    withLabel: null,
    withAnimation: null,
    withTranslation: null,

    isHidden: false,
};
/**
## Notes
- The design system used for this component is HTML and CSS
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
function getLabel(labelObj, position) {
    return labelObj?.format === position ? labelObj.content : "";
}

export default function Reward(props) {
    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props);
    //-------------------------------------------------------------------
    // 2. Use to set label Color
    //-------------------------------------------------------------------
    let labelColors = {
        color: props.withLabel?.textColor,
    };
    //-------------------------------------------------------------------
    // 3.Use to set Amount Color
    //-------------------------------------------------------------------
    let amoutColor = {
        color: props.withColor?.textColor,
    };
    //-------------------------------------------------------------------
    // 2. Translation
    //-------------------------------------------------------------------
    let labelContent = Object.assign({}, props.withLabel);
    let tObj = null;
    if (
        props.withTranslation?.lang &&
        props.withTranslation.lang !== "" &&
        props.withTranslation.lang !== "en"
    ) {
        tObj = getTranslation(props.withTranslation);
        if (labelContent && tObj?.label) labelContent.content = tObj.label;
    }
    //-------------------------------------------------------------------
    // 3. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);
    // ========================= Render Function =================================
    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui ${quommonClasses.parentClasses}`}
        >
            <div className={`parent ${quommonClasses.childClasses}`}>
                <div className="upperHalf" style={labelColors}>
                    {getLabel(labelContent, "caption")}
                </div>
                <div className="lowerHalf">
                    <div>
                        <img
                            className={`coinImage`}
                            src={props.withIcon.icon}
                            alt="Please wait..."
                        />
                    </div>
                    <div className="amount" style={amoutColor}>{props.withLabel.amount}</div>
                </div>
            </div>
        </motion.div>
    );
}
