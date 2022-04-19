// Import npm packages
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { getAnimation, getQuommons } from "../../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./OptionItemSeven.scss";
import "../../../common/stylesheets/overrule.scss";
import InputField from "../../InputField/InputField.react";
import OptionalImageField from "../../OptionalImageField/OptionalImageField.react";
import { FormControlLabel, Radio } from "@mui/material";

OptionItemSeven.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
      OptionItemSeven name should be passed in content object
      */
    content: PropTypes.shape({
        targetName: PropTypes.string,
        value: PropTypes.string,
        placeholder: PropTypes.string,
    }),
    //=======================================
    // Quommon props
    //=======================================
    /**
      Use to override component colors
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
            "",
        ]),
        duration: PropTypes.number,
        delay: PropTypes.number,
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
      OptionItemSeven component must have the onInput function passed as props
      */
    onInput: PropTypes.func.isRequired,
    /**
      OptionItemSeven component must have the onClose function passed as props
      */
    onClose: PropTypes.func.isRequired,
};

OptionItemSeven.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    content: [],
    optionType: "title",
    //=======================================
    // Quommon props
    //=======================================
    withColor: null,
    withAnimation: null,
    isDisabled: false,
    isHidden: false,
};
/**
## Notes
- The design system used for this component is Fontawesome Icon
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function OptionItemSeven(props) {
    //-------------------------------------------------------------------
    // 1. Destructuring content prop
    //-------------------------------------------------------------------
    const { content } = props;

    const [isChecked, setIsChecked] = useState(content.checked);
    const [value, setValue] = useState(content.targetName);

    useEffect(() => {
        setIsChecked(content.checked);
    }, [content.checked]);
    //   useEffect(() => {
    //     console.log(isChecked);
    //   }, [isChecked]);
    //-------------------------------------------------------------------
    // 2. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "option-item-seven");
    //-------------------------------------------------------------------
    // 3. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);

    const handleRadio = (e) => {
        setIsChecked(e.target.checked);
        props.onInput(content.name, value, e.target.checked);
    };
    // ========================= Render Function =================================

    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui ${quommonClasses.parentClasses}`}
        >
            <div className="qui-option-item-seven-container">
               <FormControlLabel
                    className="qui-option-item-seven-radio"
                    value={content.targetName}
                    control={
                        <Radio
                            checked={isChecked}
                            style={{ color: props.withColor.accentColor }}
                        />
                    }
                    label={isChecked ? "Correct" : "Incorrect"}
                    onChange={handleRadio}
                />
                <div className="qui-option-item-upload-button">
                    <OptionalImageField
                        content={{ icon: "fas fa-image" }}
                        // onClick={(image, id) => handleImageUpload(image, id)}
                        withColor={{ ...props.withColor }}
                    />
                </div>
                <InputField
                    name={content.targetName}
                    content={{
                        value: content.value,
                        placeholder: content.placeholder,
                        maxLength: 300,
                    }}
                    asEmphasis="listInput"
                    withColor={props.withColor}
                    onClick={(name, value) => props.onInput(name, value, isChecked)}
                />
                <div className="qui-option-item-seven-close-icon">
                    <i
                        className="qui-option-item-seven-icon fas fa-times"
                        id={content.targetName}
                        onClick={(e) => props.onClose(e.target.id)}
                    ></i>
                </div>
            </div>
        </motion.div>
    );
}
