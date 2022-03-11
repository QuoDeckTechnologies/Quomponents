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
import "./ActionMenu.scss";
import "../../common/stylesheets/overrule.scss";

ActionMenu.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
      ActionMenu data should be passed in content field and it is a required field
      */
    content: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            icon: PropTypes.string,
        }),
    ).isRequired,
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
      Use to enable/disable the component
      */
    isDisabled: PropTypes.bool,
    /**
      Use to show/hide the component
      */
    isHidden: PropTypes.bool,
    /**
      ActionMenu component must have the onClick function passed as props
      */
    onClick: PropTypes.func.isRequired,
};

ActionMenu.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    content: [],
    //=======================================
    // Quommon props
    //=======================================
    asVariant: "success",
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
- The design system used for this component is Fontawesome Icon
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function ActionMenu(props) {
    //-------------------------------------------------------------------
    // 1. Destructuring content from props
    //-------------------------------------------------------------------
    let { content } = props;
    //-------------------------------------------------------------------
    // 2. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "actionmenu");
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
        >
            {_.map(props.content, (item, index) => {
                return (
                    <div className={`qui-actionmenu-items ${quommonClasses.childClasses}`} key={index} onClick={props.onClick} style={colors.backgroundColors}>
                        <div className="qui-actionmenu-icon"><i className={`qui-actionmenu-icons ${item.icon}`} style={colors.accentColors}></i></div>
                        <div className={`qui-actionmenu-titles ${quommonClasses.childClasses}`} style={colors.textColors}>{item.title}</div>
                    </div>
                );
            })}
        </motion.div>
    );
}
