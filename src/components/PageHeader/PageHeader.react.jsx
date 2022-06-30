import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
    getAnimation,
    getQuommons,
    getTranslation
} from "../../common/javascripts/helpers";
import "../../common/stylesheets/common.css";
import "./PageHeader.scss";
import "../../common/stylesheets/overrule.scss";

PageHeader.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    Use to define value in PageHeader
    */
    content: PropTypes.string.isRequired,
    //=======================================
    // Quommon props
    //=======================================
    /**
    Use to define standard text color type
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
    Use to set Color in PageHeader
    */
    withColor: PropTypes.shape({
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

PageHeader.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    content: "Header",
    //=======================================
    // Quommon props
    //=======================================
    asVariant: "primary",
    asSize: "normal",
    asPadded: "normal",
    asFloated: "none",
    asAligned: "center",

    withColor: null,
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
export default function PageHeader(props) {
    let headerText = props.content;
    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "page-header");
    quommonClasses.childClasses += ` variant-${props.asVariant}-text`;
    //-------------------------------------------------------------------
    // 2. Use to set Color in PageHeader
    //-------------------------------------------------------------------
    let Color = {
        color: props.withColor?.textColor,
    };
    //-------------------------------------------------------------------
    // 3. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);

    //-------------------------------------------------------------------
    // 4. Translate the text objects in case their is a dictionary provided
    //-------------------------------------------------------------------
    if (
        props.withTranslation?.lang &&
        props.withTranslation.lang !== "" &&
        props.withTranslation.lang !== "en"
    ) {
        let tObj = getTranslation(props.withTranslation);
        headerText = tObj?.text || "";
    }
    // ========================= Render Function =================================
    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui ${quommonClasses.parentClasses}`}
        >
            <div className={`qui-page-header-container ${quommonClasses.childClasses}`}>
                <div className="qui-page-header-label" style={Color}>
                    {headerText}
                </div>
            </div>
        </motion.div >
    );
}