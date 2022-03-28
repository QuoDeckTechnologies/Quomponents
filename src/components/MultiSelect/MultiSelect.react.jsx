// Import npm packages
import React, { useState } from "react";
import PropTypes from "prop-types";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import './MultiSelect.scss'
import "../../common/stylesheets/overrule.scss";
import Button from "../Buttons/Button/Button.react";
import _ from "lodash";
import { getQuommons } from "../../common/javascripts/helpers";

MultiSelect.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    Each button Text has to be in content object.
    */
    content: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            isSelected: PropTypes.bool,
        })
    ).isRequired,
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
    Component must have the onClick function passed as props
      */
    onClick: PropTypes.func.isRequired,
};

MultiSelect.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    content: [],
    //=======================================
    // Quommon props
    //=======================================
    asEmphasis: "contained",
    isCircular: false,
    asVariant: "primary",
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
    const { content } = props;
    const [, setIsChecked] = useState();
    let tmp = props.content;
    function handleSubmit() {
        let selectedIndexes = []
        for (let i = 0; i <= props.content.length; i++) {
            if (props.content[i]?.isSelected) {
                selectedIndexes.push(i)
            }
        }
        props.onClick(selectedIndexes)
    }
    function toggleChecked(content) {
        tmp = content;
        tmp.isSelected = !tmp.isSelected;
        setIsChecked(prevState => !prevState)
    }
    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "multi-select");

    return (
        <div className={`qui qui-multi-select-container ${quommonClasses.parentClasses}`} >
            {_.map(content, (text, index) => {
                return (
                    <div key={index}
                        className={`qui-multi-select-button-container ${quommonClasses.childClasses}`} >
                        <div className="qui-multi-select-button">
                            <div className={`qui-square-background`} >
                                <i className={`qui-multi-select-checkbox  ${text.isSelected ? "fas fa-check-square" : "fa fa-square"}`}
                                    onClick={() => toggleChecked(text)}>
                                </i>
                            </div>
                            {<Button {...props} content={text.name} onClick={() => toggleChecked(text)} />}</div>
                    </div>
                );
            })}
            {<Button {...props}
                content={"Submit Answer"}
                onClick={() => handleSubmit()} />}
        </div >
    )
}
