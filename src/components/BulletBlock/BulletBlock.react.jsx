// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import _ from "lodash";
import {
    getAnimation,
    getQuommons,
} from "../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./BulletBlock.scss";
import "../../common/stylesheets/overrule.scss";

BulletBlock.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================

    /**
       BulletBlock data should be passed in content field and it is required field  
      */
    content: PropTypes.arrayOf(
        PropTypes.string
    ),

    /**
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
      Use to show/hide the component
      */
    isHidden: PropTypes.bool,
};

BulletBlock.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    content: [],
    //=======================================
    // Quommon props
    //=======================================
    asVariant: "primary",
    asSize: "normal",
    withColor: null,
    withAnimation: null,
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
        backgroundColors: {
            backgroundColor: colors.backgroundColor,
        },
    };
    return colorStyle;
}
/**
## Notes
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function BulletBlock(props) {

    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------s
    let quommonClasses = getQuommons(props, "bulletblock");
    quommonClasses.childClasses += ` variant-${props.asVariant}-text`;
    //-------------------------------------------------------------------
    // 2. Set the component colors
    //-------------------------------------------------------------------
    let colors = props.withColor ? getColors(props.withColor) : {};

    //-------------------------------------------------------------------
    // 3. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props);

    // ========================= Render Function =================================
    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui ${quommonClasses.parentClasses}`}
            style={colors.backgroundColors}
        >
            <div className={` ${quommonClasses.childClasses}`}>
                {_.map(props.content, (item, index) => {
                    return (
                        <div className="li"
                            style={colors.textColors}
                            key={index}>
                            <ul>
                                <li>
                                    {item}
                                </li>
                            </ul>
                        </div>
                    )
                })}
            </div>

        </motion.div >
    );
}