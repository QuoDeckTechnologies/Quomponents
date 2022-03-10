// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import {
    getQuommons
} from "../../common/javascripts/helpers.js";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./ColorSwatch.scss";
import "../../common/stylesheets/overrule.scss";

ActionButton.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    Use to override component colors and behavior
    */
    withColor: PropTypes.shape({
        primaryColor: PropTypes.string,
        accentColor: PropTypes.string,
        secondaryColor: PropTypes.string,
        pageColor: PropTypes.string,
    }),

    // Quommon props
    //=======================================
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
    withColor: null,
    // Quommon props
    //=======================================
    asSize: "normal",
    asPadded: "normal",
    asFloated: "inline",
    isHidden: false,
    isDisabled: false,
    onClick: null
};

/**
## Notes
- The design system used for this component is Material UI (@mui/material)
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function ActionButton(props) {
    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "color-swatch");

    //-------------------------------------------------------------------
    // 2. Get the component with the color props
    //-------------------------------------------------------------------
    const colorSwatch = (colors) => {
        return (
            <div className={`color-swatch-container`}
                style={{ backgroundColor: colors?.pageColor }}>
                <div className={`color-swatch-title`}
                    style={{ backgroundColor: colors?.primaryColor }}>
                </div>
                <div className="color-swatch-sub-title"
                    style={{ backgroundColor: colors?.accentColor }}>
                </div>
                <div className="color-swatch-footer"
                    style={{ backgroundColor: colors?.secondaryColor }}>
                </div>
            </div>
        )
    }
    return (
        <div className={`qui ${quommonClasses.parentClasses}`}>
            <div className={`${quommonClasses.childClasses}`}>
                {colorSwatch(props.withColor)}
            </div>
        </div>
    );
}
