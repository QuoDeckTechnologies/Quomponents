import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Ribbon from "../Ribbons/Ribbon/Ribbon.react";

import {
    getQuommons,
    getTranslation,
    getAnimation,
} from "../../common/javascripts/helpers";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./EarnCard.scss";
import "../../common/stylesheets/overrule.scss";

EarnCard.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    Banner Card data should be passed in content field and it is required field
    */
    content: PropTypes.shape({
        image: PropTypes.string,
        tag: PropTypes.oneOf([
            "new",
            "premium",
            "restricted",
            "free"
        ]),
        header: PropTypes.string,
        content: PropTypes.string
    }).isRequired,

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

EarnCard.defaultProps = {
    // Component Specific props
    //=======================================
    content: {},
    // Quommon props
    //=======================================
    asVariant: "primary",

    withColor: null,
    withAnimation: null,
    withTranslation: null,

    isDisabled: false,
    isHidden: false
};
/**
## Notes
- The design system used for this component is Material UI (@mui/material)
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- MUI props are not being passed to the button. Please speak to the admin to handle any new MUI prop.
**/
export default function EarnCard(props) {

    let { content } = props;
    let boxHeader = content?.header;
    let boxContent = content?.content;
    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "banner-card");

    //-------------------------------------------------------------------
    // 2. Set the component colors
    //-------------------------------------------------------------------
    let colors = {
        backgroundColor: props.withColor?.backgroundColor,
        color: props.withColor?.textColor,
    };

    //-------------------------------------------------------------------
    // 3. Translate the text objects in case their is a dictionary provided
    //-------------------------------------------------------------------
    if (
        props.withTranslation?.lang &&
        props.withTranslation.lang !== "" &&
        props.withTranslation.lang !== "en"
    ) {
        let tObj = getTranslation(props.withTranslation, "earncard");
        boxHeader = tObj.header;
        boxContent = tObj.content;
    }

    //-------------------------------------------------------------------
    // 4. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);

    // ========================= Render Function =================================

    return (
        <div className={` earncard ${quommonClasses.parentClasses}`}>
       
        <div 
            className={`bannercard qui ${quommonClasses.parentClasses}`}
            style={{ backgroundImage: content ? `url(${content.image})` : "" }}
            onClick={props.onClick}
        >


                {content && content.tag && content.tag !== "" &&
                    <div className="qui-card-label">
                        <Ribbon
                            asFloated="right"
                            asEmphasis={content.tag}
                            withTranslation={props.withTranslation}
                        />
                    </div>
                }

        </div>

        </div>
    );
}