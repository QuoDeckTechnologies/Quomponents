// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
    getAnimation,
    getQuommons,
    // getTranslation,
} from "../../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./OptionItemOne.scss";
import "../../../common/stylesheets/overrule.scss";
import InputField from "../../InputField/InputField.react";

OptionItemOne.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
  OptionItemOne targetName, value, placeholder should be passed in content object
  */
    name: PropTypes.string,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    maxLength: PropTypes.number.isRequired,
    removable: PropTypes.bool,
    //=======================================
    // Quommon props
    //=======================================
    /**
  Use to override component colors
  */
    withColor: PropTypes.shape({
        backgroundColor: PropTypes.string,
        accentColor: PropTypes.string,
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
  OptionItemOne component must have the onsubmit function passed as props
  */
    onSubmit: PropTypes.func.isRequired,
    /**
  OptionItemOne component can have the onRemove function passed as props
  */
    onRemove: PropTypes.func,
};

OptionItemOne.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    placeholder: "Please enter the value",
    removable: false,
    //=======================================
    // Quommon props
    //=======================================
    withColor: null,
    withAnimation: null,
    withTranslation: null,
    isDisabled: false,
    isHidden: false,
};
/**
## Notes
- The design system used for this component is Fontawesome Icon and MUI
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function OptionItemOne(props) {
    //-------------------------------------------------------------------
    // 2. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "option-item-one");
    //-------------------------------------------------------------------
    // 3. Translate the text objects in case their is a dictionary provided
    //-------------------------------------------------------------------
    // let tObj = getTranslation(props.withTranslation);
    //-------------------------------------------------------------------
    // 4. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props);

    // ========================= Render Function =================================

    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui ${quommonClasses.parentClasses}`}
        >
            <div className="qui-inline-option-container">
                <InputField
                    name={props.name}
                    value={props.value}
                    placeholder={props.placeholder}
                    maxLength={props.maxLength}
                    asEmphasis="listInput"
                    withColor={props.withColor}
                    onSubmit={(value) => props.onSubmit(value)}
                />
                {props.removable && (
                    <div className="qui-inline-edit-with-remove-button-close-icon">
                        <i
                            className="qui-inline-edit-with-remove-button-icon fas fa-times"
                            data-id={props.name}
                            onClick={(e) => props.onRemove(props.name)}
                        ></i>
                    </div>
                )}
            </div>
        </motion.div>
    );
}
