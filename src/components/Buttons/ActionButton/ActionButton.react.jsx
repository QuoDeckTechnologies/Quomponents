// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
    getQuommons,
    getTranslation,
    getAnimation,
} from "../../../common/javascripts/helpers.js";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./ActionButton.scss";
import "../../../common/stylesheets/overrule.scss";

import playbtn from "../../../assets/image.png"

ActionButton.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
      /**
    Use to define title, sub-title and image of component
    */
    content: PropTypes.shape({
        title: PropTypes.string,
        subTitle: PropTypes.string,
        image: PropTypes.string
    }).isRequired,
    /**
    Use to define the visibility of Background Ellipse 
    */
    isEllipse: PropTypes.bool,

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
    Use to define component padding in increasing order
    */
    asPadded: PropTypes.oneOf(["fitted", "compact", "normal", "relaxed"]),
    /**
    Use to float the component in parent container
    */
    asFloated: PropTypes.oneOf(["left", "right", "inline"]),
    /**
    Use to align content within the component container
    */
    asAligned: PropTypes.oneOf(["left", "right", "center"]),

    /**
    Use to override component colors and behavior
    */
    withColor: PropTypes.shape({
        backgroundColor: PropTypes.string,
        accentColor: PropTypes.string,
        textColor: PropTypes.string,
        hoverBackgroundColor: PropTypes.string,
        hoverTextColor: PropTypes.string,
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
            ""
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
    /**
    Use to enable/disable the component
    */
    isDisabled: PropTypes.bool,

    /**
    Button component must have the onClick function passed as props
    */
    onClick: PropTypes.func.isRequired,
};

ActionButton.defaultProps = {
    // Component Specific props
    //=======================================
    content: null,
    isEllipse: true,

    // Quommon props
    //=======================================
    asVariant: "primary",
    asSize: "normal",
    asPadded: "normal",
    asFloated: "inline",
    asAligned: "center",

    withColor: null,
    withIcon: null,
    withLabel: null,
    withAnimation: null,
    withTranslation: null,

    isHidden: false,
    isDisabled: false,

    onClick:null
};

/**
## Notes
- The design system used for this component is Material UI (@mui/material)
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- Action Button has 2 phases, with button and with image. Pass props according to your convenience
- isEllipse is a prop to add ellipse background or not.
**/
export default function ActionButton(props) {

    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props,"action-button");

    //-------------------------------------------------------------------
    // 2. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);

    //-------------------------------------------------------------------
    // 3. Get translation of the component
    //-------------------------------------------------------------------
    let labelContent = Object.assign({}, props.content);
    let tObj = null;

    if (
        props.withTranslation?.lang &&
        props.withTranslation.lang !== "" &&
        props.withTranslation.lang !== "en"
    ) {
        tObj = getTranslation(props.withTranslation);
        if (labelContent && tObj?.title) labelContent.title = tObj.title;
        if (labelContent && tObj?.subTitle) labelContent.subTitle = tObj.subTitle;
    }

    //-------------------------------------------------------------------
    // 4. Get the custom button styling of the component
    //-------------------------------------------------------------------
    let buttonStyle = {
        color: props.withColor?.textColor,
        backgroundColor: props.withColor?.backgroundColor,
    };


    //-------------------------------------------------------------------
    // 5. Get the Status of Component
    //-------------------------------------------------------------------
    const actionButtonBackground = (isEllipse) => {
        let actionButtonStyle, title, subTitle, titleStyle, subTitleStyle;
        title =  labelContent?.title;
        subTitle =  labelContent?.subTitle;
        actionButtonStyle = isEllipse? "action-button-container" : "action-button-container-with-no-ellipse";
        
        if(title?.length >5 || subTitle?.length > 7){
            titleStyle = "responsive-title"
            subTitleStyle= "responsive-sub-title"
        }
        if (labelContent?.image) {
            return (
                <div className={actionButtonStyle}>
                    <img
                        className={`image`}
                        alt="img"
                        src={`${labelContent.image}`}
                        onClick={props.onClick}
                    />
                </div>
            )
        } else {
            return (
                <div className={actionButtonStyle}>
                    <div className={`qui-btn variant-${props.asVariant} action-button`} 
                        style={buttonStyle} 
                        onClick={props.onClick}>
                        <div className={`action-button-title ${titleStyle}`}>
                            {labelContent?.title}
                        </div>
                        <div className={`action-button-sub-title ${subTitleStyle}`}>
                            {labelContent?.subTitle}
                        </div>
                    </div>
                </div>
            )
        }
    }
    return (
        <motion.div
            initial={animate?.from}
            animate={animate?.to}
            className={`qui ${quommonClasses.parentClasses}`}>
            <div className={`${quommonClasses.childClasses}`}>
                {actionButtonBackground(props.isEllipse)}
            </div>
        </motion.div>
    );
}
