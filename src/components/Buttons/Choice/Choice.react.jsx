import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
    getQuommons,
    getTranslation,
    getAnimation
} from "../../../common/javascripts/helpers";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./Choice.scss";
import "../../../common/stylesheets/overrule.scss";

Choice.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    content: PropTypes.shape({
        Choice1: PropTypes.string,
        Choice2: PropTypes.string
    }).isRequired,
    /**
    Use to enable/disable the OR tag
    */
    isChoice: PropTypes.bool,
    //=======================================
    // Quommon props
    //=======================================
    /**
    Use to float the component in parent container
    */
    asFloated: PropTypes.oneOf(["left", "right", "inline"]),
    /**
     Set action emphasis in increasing order 
     */
    asEmphasis: PropTypes.oneOf(["text", "outlined", "contained"]),
    /**
    Use to override component colors and behavior
    */
    withColor: PropTypes.shape({
        backgroundColor: PropTypes.string,
        accentColor: PropTypes.string,
        textColor: PropTypes.string
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
    /**
    Use to enable/disable the component
    */
    isDisabled: PropTypes.bool,
    /**
    Choice component must have the onClick function passed as props
    */
    onClick: PropTypes.func.isRequired,
};

Choice.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    content: {
        Choice1: "Yes",
        Choice2: "No",
    },
    isChoice: true,
    //=======================================
    // Quommon props
    //=======================================
    asEmphasis: "contained",
    asFloated: "inline",
    withColor: null,
    withTranslation: null,
    isHidden: false,
    isDisabled: false,
};
/**
## Notes
- The design system used for this component is fontawesome Icons
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- props are not being passed to the Choice. Please speak to the admin to handle any new prop.
**/

function getColors(colors, emphasis) {
    let colorStyle;
    colorStyle = emphasis === 'text'
        ? {
            background: 'transparent',
            boxShadow: 'none',
            border: 'none'
        }
        : emphasis === 'outlined'
            ? {
                background: 'transparent',
                boxShadow: 'none',
                borderColor: colors.backgroundColor
            }
            : {
                background: colors.backgroundColor,
                color: colors.textColor,
                border: 'none'
            }

    return colorStyle
}

export default function Choice(props) {
    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "choice");

    //-------------------------------------------------------------------
    // 2. Translate the text objects in case their is a dictionary provided
    //-------------------------------------------------------------------
    let choices = props.content;
    if (
        props.withTranslation &&
        props.withTranslation.lang !== "" &&
        props.withTranslation.lang !== "en"
    ) {
        let tObj = getTranslation(props.withTranslation);
        if (tObj && props.content && props.content !== "") {
            choices = tObj;
        }

    }
    // 3. Set the component colors
    //-------------------------------------------------------------------
    let colors = props.withColor ? getColors(props.withColor, props.asEmphasis) : {};

    //-------------------------------------------------------------------
    // 4. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);
    function choice1() {
        props.onClick("choice 1");
    }
    function choice2() {
        props.onClick("choice 2");
    }
    let orStyle = { display: props.isChoice ? "flex" : "none", color: props.withColor?.accentColor }

    function choice() {
        return (
            <motion.div
                initial={animate.from}
                animate={animate.to}
                className={`container`} >
                <div className={`qui-btn choices choice1`} style={Object.assign({}, colors)} onClick={choice1}>{choices?.Choice1}</div>
                <div className="or" style={Object.assign({}, orStyle)}>OR</div>
                <div className={`qui-btn choices choice2`} style={Object.assign({}, colors)} onClick={choice2}>{choices?.Choice2}</div>
            </motion.div>
        )
    }

    return (
        <div className={`qui ${quommonClasses.parentClasses} `}>
            <div className={`${quommonClasses.childClasses} `}>
                {choice()}
            </div>
        </div>
    )
}