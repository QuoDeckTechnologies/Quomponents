// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
    getAnimation,
    getQuommons,
    getTranslation,
} from "../../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./OptionItemNine.scss";
import "../../../common/stylesheets/overrule.scss";
import InputField from "../../InputField/InputField.react";

OptionItemNine.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
  OptionItemNine targetName, value, placeholder should be passed in content object
  */
    minValue: PropTypes.shape({
        value: PropTypes.number,
        editable: PropTypes.bool,
    }).isRequired,
    maxValue: PropTypes.shape({
        value: PropTypes.number,
        editable: PropTypes.bool,
    }).isRequired,
    content: PropTypes.shape({
        value: PropTypes.string,
        placeholder: PropTypes.string,
        maxLength: PropTypes.number,
    }).isRequired,
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
  OptionItemNine component must have the onMinChange function passed as props
  */
    onMinChange: PropTypes.func.isRequired,
    /**
  OptionItemNine component must have the onMaxChange function passed as props
  */
    onMaxChange: PropTypes.func.isRequired,
    /**
  OptionItemNine component must have the onContentChange function passed as props
  */
    onContentChange: PropTypes.func.isRequired,
    /**
  OptionItemNine component must have the onContentChange function passed as props
  */
    onRemove: PropTypes.func,
};

OptionItemNine.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
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
export default function OptionItemNine(props) {
    //-------------------------------------------------------------------
    // 1. Destructuring content prop
    //-------------------------------------------------------------------
    const { minValue, maxValue, content } = props;
    //-------------------------------------------------------------------
    // 2. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "option-item-nine");
    //-------------------------------------------------------------------
    // 3. Translate the text objects in case their is a dictionary provided
    //-------------------------------------------------------------------
    let tObj = getTranslation(props.withTranslation);
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
            <div className="qui-short-field-container">
                <div className="qui-option-item-nine-inner-container">
                    <div className="qui-short-field-inner-container">
                        <div className="qui-short-field-one">
                            <InputField
                                type="number"
                                label="Min"
                                value={minValue?.value}
                                isDisabled={!minValue?.editable}
                                asEmphasis="shortField"
                                asFloated="left"
                                withColor={props.withColor}
                                onSubmit={(value) => props.onMinChange(value)}
                            />
                        </div>
                        <div className="qui-short-field-one">
                            <InputField
                                type="number"
                                label="Max"
                                value={maxValue?.value}
                                isDisabled={!maxValue?.editable}
                                asEmphasis="shortField"
                                asFloated="left"
                                withColor={props.withColor}
                                onSubmit={(value) => props.onMaxChange(value)}
                            />
                        </div>
                    </div>
                    <div className="qui-option-item-nine-input-field">
                        <div className="qui-list-input-three">
                            <InputField
                                label="Message"
                                value={content?.value}
                                placeholder={
                                    tObj?.placeholder || content?.placeholder
                                }
                                maxLength={content?.maxLength}
                                asEmphasis="charLimited"
                                withColor={props.withColor}
                                onSubmit={(value) =>
                                    props.onContentChange(value)
                                }
                            />
                        </div>
                    </div>
                </div>
                {props.removable && (
                    <div className="qui-option-item-nine-with-remove-button-close-icon">
                        <i
                            className="qui-option-item-nine-with-remove-button-icon fas fa-times"
                            onClick={props.onRemove}
                        ></i>
                    </div>
                )}
            </div>
        </motion.div>
    );
}
