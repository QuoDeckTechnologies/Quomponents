import React from "react";
import PropTypes from "prop-types";

import {
    getQuommons,
} from "../../common/javascripts/helpers";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./RibbonMenu.scss";
import "../../common/stylesheets/overrule.scss";

import RibbonToolMenu from "./RibbonToolMenu.react";
import RibbonDesignMenu from "./RibbonDesignMenu.react"
import RibbonHomeMenu from "./RibbonHomeMenu.react";
import RibbonHtmlMenu from "./RibbonHtmlMenu.react";

RibbonMenu.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================

    /**
    RibbonMenu tabs data should be passed in content field and it is required field  
    */
    content: PropTypes.shape({
        tab: PropTypes.string,
    }).isRequired,

    //=======================================
    // Quommon props
    //=======================================

    /**
    Use to define standard component type
    */
    asVariant: PropTypes.oneOf(["primary", "secondary", "success", "warning"]),
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
            "",
        ]),
        duration: PropTypes.number,
        delay: PropTypes.number,
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
    Use to enable/disable the component
    */
    isFluid: PropTypes.bool,
    /**
      RibbonMenu component must have the onClick function passed as props
      */
    onClick: PropTypes.func.isRequired,
};

RibbonMenu.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    content: [],
    asEmphasis: "text",
    //=======================================
    // Quommon props
    //=======================================
    asVariant: "primary",
    asSize: "normal",
    asPadded: "normal",
    asAligned: "center",

    withColor: null,
    withAnimation: null,
    withTranslation: null,

    isHidden: false,
    isFluid:true,
    isDisabled: false
};

/**
## Notes
- The design system used for this component is fontawesome Icons
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- props are not being passed to the RibbonMenu. Please speak to the admin to handle any new prop.
**/
export default function RibbonMenu(props) {
    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props,"ribbon-menu");

    // ========================= Render Function =================================

    const ribbonMenu = (tabs) => {
        if (tabs?.toUpperCase() === "HTML") {
            return (
                <RibbonHtmlMenu />
            )
        }
        else if (tabs?.toUpperCase() === "DESIGN") {
            return (
                <RibbonDesignMenu />
            )
        }
        else if (tabs?.toUpperCase() === "TOOLS") {
            return (
                <RibbonToolMenu />
            )
        } else {
            return (
                <RibbonHomeMenu />
            )
        }
    }
    return (
        <div className={`qui ${quommonClasses.parentClasses}`}>
            <div className={`${quommonClasses.childClasses} ribbon-menu`}>
                {ribbonMenu(props.content?.tab)}
            </div>
        </div>
    );
}