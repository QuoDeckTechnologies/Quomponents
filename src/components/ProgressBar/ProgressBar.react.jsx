// Import npm packages
import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import _ from "lodash";
import {
    getAnimation,
    getQuommons,
} from "../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./ProgressBar.scss";
import "../../common/stylesheets/overrule.scss";

ProgressBar.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
      ProgressBar data should be passed in content field and it is a required field
      */
    content: PropTypes.shape({
        lefticon: PropTypes.string,
        righticon: PropTypes.string,
    }),
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
      Use to override component colors and behavior
      */
    withColor: PropTypes.shape({
        backgroundColor: PropTypes.string,
        accentColor: PropTypes.string,
        lineColor: PropTypes.string,
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
      Use to enable/disable the component
      */
    isDisabled: PropTypes.bool,
    /**
      Use to show/hide the component
      */
    isHidden: PropTypes.bool,
    /**
      Button component must have the onClick function passed as props
      */
    onClick: PropTypes.func.isRequired,
};

ProgressBar.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    content: {},
    //=======================================
    // Quommon props
    //=======================================
    asVariant: "primary",
    asSize: "normal",
    withColor: null,
    withAnimation: null,
    isDisabled: false,
    isHidden: false,
};

function getColors(colors) {
    let colorStyle = {
        textColors: {
            color: colors.textColor,
        },
        accentColors: {
            backgroundColor: colors.accentColor,
        },
        lineColors: {
            backgroundColor: colors.lineColor,
        },
        backColors: {
            backgroundColor: colors.backgroundColor,
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
**/
export default function ProgressBar(props) {
    const [currentStep, updateCurrentStep] = useState(1);

    function increment() {
        if (props.content?.labelArray.length !== currentStep) {
            updateCurrentStep(nextState => nextState + 1)
        }
    }
    function decrement() {
        if (currentStep !== 1) {
            updateCurrentStep(prevState => prevState - 1)
        }
    }
    //-------------------------------------------------------------------
    // 1. Destructuring content from props
    //-------------------------------------------------------------------
    let { content } = props;
    //-------------------------------------------------------------------
    // 2. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "progressbar");
    quommonClasses.childClasses += ` variant-${props.asVariant}-text`;
    //-------------------------------------------------------------------
    // 3. Set the component colors
    //-------------------------------------------------------------------
    let colors = props.withColor ? getColors(props.withColor) : {};
    //-------------------------------------------------------------------
    // 4. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);

    // ========================= Render Function =================================
    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui ${quommonClasses.parentClasses}`}
            style={colors?.backColors}
        >
            <div className={`left ${quommonClasses.childClasses}`}>
                <i className={`icon ${content?.lefticon}`}
                    style={colors?.textColors}
                    onClick={() => decrement()}>
                </i>
            </div>
            <div className={`middle ${quommonClasses.childClasses}`}>
                {_.map(props.content?.labelArray, (key, index) => {
                    return (
                        <div className={`line`} key={index}
                            style={index + 1 <= currentStep ? { backgroundColor: props.withColor?.lineColor } : colors?.accentColors} ></div>
                    )
                })}
            </div>
            <div className={`right ${quommonClasses.childClasses}`}>
                <i className={`icon ${content?.righticon}`}
                    style={colors?.textColors}
                    onClick={() => increment()}>
                </i>
            </div>
        </motion.div>
    );
}
