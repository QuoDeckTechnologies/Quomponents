// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { getAnimation, getQuommons } from "../../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./OptionItemEight.scss";
import "../../../common/stylesheets/overrule.scss";
import InputField from "../../InputField/InputField.react";
import Button from "@mui/material/Button";
OptionItemEight.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
      OptionItemEight data should be passed in content object
      */
    content: PropTypes.shape({
        targetName: PropTypes.string,
        value: PropTypes.string,
        placeholder: PropTypes.string,
        maxLength: PropTypes.number,
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
      OptionItemEight component must have the onInput function passed as props
      */
    onInput: PropTypes.func.isRequired,
    /**
      OptionItemEight component must have the onClose function passed as props
      */
    onClose: PropTypes.func.isRequired,
    /**
      OptionItemEight component must have the onClick function passed as props
      */
    onClick: PropTypes.func.isRequired,
};

OptionItemEight.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    content: {},
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
export default function OptionItemEight(props) {
    //-------------------------------------------------------------------
    // 1. Destructuring content prop
    //-------------------------------------------------------------------
    const { content } = props;
    //-------------------------------------------------------------------
    // 2. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "option-item-eight");
    //-------------------------------------------------------------------
    // 3. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);
    //-------------------------------------------------------------------
    // 4. Function to return input value of the component
    //-------------------------------------------------------------------
    const handleValue = (name, value) => {
        props.onInput(content?.targetName, value);
    };

    // ========================= Render Function =================================

    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui ${quommonClasses.parentClasses}`}
        >
            <div className="qui-option-item-eight-container">
                <InputField
                    name={content?.targetName}
                    content={{
                        value: content?.value,
                        placeholder: content?.placeholder,
                        maxLength: content?.maxLength,
                    }}
                    asEmphasis="listInput"
                    withColor={props.withColor}
                    onClick={handleValue}
                />
                <div className="qui-option-item-button">
                    <Button
                        variant="outlined"
                        style={{
                            borderColor: props.withColor.accentColor,
                            color: props.withColor.accentColor,
                        }}
                        onClick={props.onClick}
                    >
                        Outlined Button
                    </Button>
                </div>

                <div className="qui-option-item-eight-close-icon">
                    <i
                        className="qui-option-item-eight-icon fas fa-times"
                        data-id={content?.targetName}
                        onClick={(e) => props.onClose(e.target.dataset.id)}
                    ></i>
                </div>
            </div>
        </motion.div>
    );
}
