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
    Use to define component padding in increasing order
    */
    asPadded: PropTypes.oneOf(["fitted", "compact", "normal", "relaxed"]),
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
    onClick: PropTypes.func
};

RibbonMenu.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    content: [],
    //=======================================
    // Quommon props
    //=======================================
    asSize: "normal",
    asPadded: "normal",

    withColor: null,
    withTranslation: null,

    isHidden: false,
    isFluid:true,
    isDisabled: false,

    onClick:null
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