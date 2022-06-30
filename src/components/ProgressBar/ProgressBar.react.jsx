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
        leftIcon: PropTypes.string,
        rightIcon: PropTypes.string,
        count: PropTypes.number,
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
    // 3. Use to set styling for ProgressBar
    //-------------------------------------------------------------------
    const [currentIndex, setCurrentIndex] = useState(1);

    function increment() {
        if (content?.count !== currentIndex) {
            setCurrentIndex(nextState => nextState + 1)
        }
    }

    function decrement() {
        if (currentIndex !== 1) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }

    let rightArrowStyle = {
        color: (content?.count === 1) || (currentIndex === content?.count) ? "#aaaaaa" : props.withColor?.textColor
    }

    let leftArrowStyle = {
        color: (content?.count === 1) || (currentIndex === 1) ? "#aaaaaa" : props.withColor?.textColor
    }

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
            <div className={`qui-progressbar${quommonClasses.childClasses}`}>
                <div>
                    <i
                        className={`qui-progressbaricons ${content?.leftIcon ? content?.leftIcon : "fa fa-arrow-alt-circle-left"}`}
                        style={leftArrowStyle}
                        onClick={() => decrement()}
                    >
                    </i>
                </div>
                <div className="qui-progressbarmiddle">
                    {_.times(props.content?.count, (index) => {
                        return (
                            <div
                                className="qui-currentstep"
                                key={index}
                                style={index + 1 <= currentIndex ? { backgroundColor: props.withColor?.lineColor } : colors?.accentColors}
                            >
                            </div>
                        )
                    })}
                </div>
                <div>
                    <i className={`qui-progressbaricons ${content?.rightIcon ? content?.rightIcon : "fa fa-arrow-alt-circle-left"}`}
                        style={rightArrowStyle}
                        onClick={() => increment()}
                    >
                    </i>
                </div>
            </div>
        </motion.div >
    );
}