// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
    getAnimation,
    getQuommons,
    getTranslation,
} from "../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./DeckAnalysisBlock.scss";
import "../../common/stylesheets/overrule.scss";

DeckAnalysis.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
      DeckAnalysis data should be passed in content field and it is a required field
      */
    header: PropTypes.string,
    fheader: PropTypes.string,
    message: PropTypes.string,
    icon: PropTypes.string,
    slideCount: PropTypes.number,
    status: PropTypes.bool,
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
      Use to override component colors and behavior
      */
    withColor: PropTypes.shape({
        textColor: PropTypes.string,
        accentColor: PropTypes.string,
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

DeckAnalysis.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    header: "SLIDES",
    fheader: "SLIDES",
    message:
        "Deck Should have 10 to 40 slides",
    icon: " fa fa-desktop",
    slideCount: 18,
    status: true,
    //=======================================
    // Quommon props
    //=======================================
    asVariant: "primary",
    withColor: null,
    withAnimation: null,
    withTranslation: null,
    isHidden: false,
};

function getColors(colors) {
    let colorStyle = {
        textColors: {
            color: colors.textColor,
        },
        accentColors: {
            color: colors.accentColor,
        },
    };
    return colorStyle;
}
/**
## Notes
- The design system used for this component is Fontawesome Icon
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- Status of topics can be changed from content prop
**/
export default function DeckAnalysis(props) {
    //-------------------------------------------------------------------
    // 1. Destructuring content from props
    //-------------------------------------------------------------------
    let { header, fheader, message } = props;
    //-------------------------------------------------------------------
    // 2. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "deck-analysis-block");
    quommonClasses.childClasses += ` variant-${props.asVariant}-text`;
    //-------------------------------------------------------------------
    // 3. Set the component colors
    //-------------------------------------------------------------------
    let colors = props.withColor ? getColors(props.withColor) : {};
    //-------------------------------------------------------------------
    // 4. Get translation of the component
    //-------------------------------------------------------------------

    let tHeader = header
    let tFheader = fheader
    let tMessage = message
    let checkSlide = "Check Slides :";

    let tObj = null;

    if (
        props.withTranslation?.lang &&
        props.withTranslation.lang !== "" &&
        props.withTranslation.lang !== "en"
    ) {
        tObj = getTranslation(props.withTranslation);
        if (tObj) {
            checkSlide = tObj?.checkSlide;
            tHeader = tObj?.header;
            tFheader = tObj?.fheader;
            tMessage = tObj?.message;
        }
    }
    //-------------------------------------------------------------------
    // 5. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props);

    // ========================= Render Function =================================
    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui qt-shadow ${quommonClasses.parentClasses}`}
        >
            <div className={`qui qui-main-deckblock ${quommonClasses.childClasses}`} style={colors.textColors}>
                <div className="qui-deckblock-top">
                    <div className="qui-deckblock-header">
                        <div className="qui-deckblock-rtop">
                            <h3 className={`qui-deckblock-slidecount`}>{props?.slideCount}</h3>
                            <i className={`qui-deckblock-icon ${props?.icon}`}></i>
                        </div>
                        <h5 className="qui-fheader">{tFheader}</h5>
                    </div>
                    <div className="qui-deckblock-header-message" >
                        <h5>{tHeader}</h5>
                        <span>{tMessage}</span>
                    </div>
                </div>
                <div className="qui-deckblock-bottom" style={props?.status === true ? { backgroundColor: "#C1DC9E" } : { backgroundColor: "#D97575" }} >
                    <h6> {
                        props?.status ? checkSlide + props?.slideCount : "..."
                    }
                    </h6>
                </div>
            </div>
        </motion.div>
    );
}
