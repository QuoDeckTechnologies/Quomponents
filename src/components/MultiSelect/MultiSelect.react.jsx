// Import npm packages
import React, { useState } from "react";
import PropTypes from "prop-types";
import _ from 'lodash'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import './MultiSelect.scss'
import "../../common/stylesheets/overrule.scss";
import Button from "../Buttons/Button/Button.react";
import { getQuommons, getTranslation } from "../../common/javascripts/helpers";

MultiSelect.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    Each button Text has to be in content object.
    */
    content: PropTypes.string,
    /**
    Set action emphasis in increasing order 
    */
    asEmphasis: PropTypes.oneOf(["text", "outlined", "contained"]),
    /**
    Use for rounded corners or circular icon button 
    */
    isCircular: PropTypes.bool,
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
    Use to float the component in parent container
    */
    asFloated: PropTypes.oneOf(["left", "right", "none", "inline"]),
    /**
    Use to override component colors and behavior
    */
    withColor: PropTypes.shape({
        backgroundColor: PropTypes.string,
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

MultiSelect.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    content: "Primary",
    asEmphasis: "contained",
    isCircular: false,

    //=======================================
    // Quommon props
    //=======================================
    asVariant: "primary",
    asSize: "normal",
    asFloated: "none",
    withColor: null,
    withLabel: null,
    withAnimation: null,
    isHidden: false,
    isDisabled: false,
};

/**
## Notes
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- Check and uncheck your selection by clicking on it
**/

export default function MultiSelect(props) {
    const [isChecked, setIsChecked] = useState(false);
    function toggleChecked() {
        setIsChecked(prevState => !prevState)
    }
    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "multi-select");
    return (
        <div className={`qui ${quommonClasses.parentClasses}`}>

            <div className={`qui-multi-select-button ${quommonClasses.childClasses}`} >
                <i className={`qui-multi-select-checkbox ${isChecked ? "fas fa-check-square" : "far fa-square"}`}
                    onClick={() => toggleChecked()}>
                </i>
                <div className="qui-multi-select-button">
                {<Button {...props} content={props.content} onClick={() => toggleChecked()} />}</div>
            </div>

        </div>
    )
}
