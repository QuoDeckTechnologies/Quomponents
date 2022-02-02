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
import "@fontsource/oswald"; // Defaults to weight 400.

Reward.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
      Use to add label and point in the component
    */
    content: PropTypes.shape({
        label: PropTypes.string,
        point: PropTypes.string,
    }),
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
      Use to set Colors for points and label
    */
    withColor: PropTypes.shape({
        textColor: PropTypes.string,
        accentColor: PropTypes.string,
    }),
    /**
      Use to add the point/Coin's image to the component
    */
    withIcon: PropTypes.shape({
        icon: PropTypes.string,
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
    content: null,
    //=======================================
    // Quommon props
    //=======================================
    withColor: null,
    withIcon: null,
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

export default function Reward(props) {
    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props);
    //-------------------------------------------------------------------
    // 2. Use to set label Color
    //-------------------------------------------------------------------
    let labelColors = {
        color: props.withColor?.textColor,
        fontFamily: "Oswald",
    };
    //-------------------------------------------------------------------
    // 3.Use to set Point Color
    //-------------------------------------------------------------------
    let pointColor = {
        color: props.withColor?.accentColor,
        fontFamily: "Oswald",
    };
    //-------------------------------------------------------------------
    // 4.Use to set Src for Coin Image
    //-------------------------------------------------------------------
    let coinSrc = Object.assign({}, props.withIcon);
    //-------------------------------------------------------------------
    // 5. Use to set Translation in the Component
    //-------------------------------------------------------------------
    let labelContent = Object.assign({}, props.content);
    let tObj = null;
    if (
        props.withTranslation?.lang &&
        props.withTranslation.lang !== "" &&
        props.withTranslation.lang !== "en"
    ) {
        tObj = getTranslation(props.withTranslation);
        if (labelContent && tObj?.label) {
            labelContent.label = tObj.label
            labelContent.point = tObj.point
        };
    }
    //-------------------------------------------------------------------
    // 6. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);
    // ========================= Render Function =================================
    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui ${quommonClasses.parentClasses}`}
        >
            <div className={` ${quommonClasses.childClasses}`}>
                <div className={`parent ${props.asSize}`}>
                    <div className="upperHalf" style={labelColors}>
                        {labelContent?.label}
                    </div>
                    <div className="lowerHalf">
                        <div>
                            <img
                                className={`coinImage`}
                                src={coinSrc?.icon}
                                alt="Coin"
                            />
                        </div>
                        <div className="point" style={pointColor}>
                            {labelContent?.point}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
