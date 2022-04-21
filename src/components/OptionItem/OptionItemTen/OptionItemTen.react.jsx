// Import npm packages
import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import _ from "lodash";
import { getAnimation, getQuommons } from "../../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./OptionItemTen.scss";
import "../../../common/stylesheets/overrule.scss";
import OptionalImageField from "../../OptionalImageField/OptionalImageField.react";
import InputField from "../../InputField/InputField.react";

OptionItemTen.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
      OptionItemTen data should be passed in content field and it is a required field
      */
    content: PropTypes.shape({
        targetName: PropTypes.string,
        value: PropTypes.string,
        placeholder: PropTypes.string,
        image: PropTypes.object,
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
      OptionItemTen component must have the onClick function passed as props
      */
    onInput: PropTypes.func.isRequired,
    /**
      OptionItemFive component must have the onUpload function passed as props
      */
    onUpload: PropTypes.func.isRequired,
    /**
      OptionItemTen component must have the onClick function passed as props
      */
    onClose: PropTypes.func.isRequired,
};

OptionItemTen.defaultProps = {
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
export default function OptionItemTen(props) {
    //-------------------------------------------------------------------
    // 1. Destructuring content prop
    //-------------------------------------------------------------------
    const { content } = props;
    //-------------------------------------------------------------------
    // 2. Defining states
    //-------------------------------------------------------------------
    const [image, setImage] = useState(content.image);
    const [value, setValue] = useState(content.value);
    //-------------------------------------------------------------------
    // 3. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "option-item-ten");
    //-------------------------------------------------------------------
    // 4. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);
    //-------------------------------------------------------------------
    // 5. Function to update value of the input field
    //-------------------------------------------------------------------
    const handleImageUpload = (image) => {
        setImage(image);
        props.onUpload(content.targetName, image, value);
    };
    //-------------------------------------------------------------------
    // 6. Function to return input value of the component
    //-------------------------------------------------------------------
    const handleValue = (name, value) => {
        setValue(value);
        props.onInput(content.targetName, image, value);
    };
    // ========================= Render Function =================================

    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui ${quommonClasses.parentClasses}`}
        >
            <div className="qui-option-item-ten-container">
                <div className="qui-option-item-inputfieldone">
                    <InputField
                        name={content.targetName}
                        content={{
                            value: content.value,
                            placeholder: content.placeholder,
                            maxLength: 300,
                        }}
                        asEmphasis="listInput"
                        withColor={props.withColor}
                        onClick={handleValue}
                    />
                </div>
                <div className="qui-option-item-upload-button">
                    <OptionalImageField
                        content={{ icon: "fas fa-image" }}
                        onClick={(image) => handleImageUpload(image)}
                        withColor={{ ...props.withColor }}
                    />
                </div>
                <div className="qui-option-item-inputfieldtwo">
                    <InputField
                        name={content.targetName}
                        content={{
                            value: content.value,
                            placeholder: content.placeholder,
                            maxLength: 300,
                        }}
                        asEmphasis="listInput"
                        withColor={props.withColor}
                        onClick={handleValue}
                    />
                </div>
                <div className="qui-option-item-ten-close-icon">
                    <i
                        className="fas fa-times"
                        data-id={content.targetName}
                        onClick={(e) => props.onClose(e.target.dataset.id)}
                    >
                    </i>
                </div>
            </div>
            <div className="qui-option-item-inputfieldthree">
                <InputField
                    name={content.targetName}
                    content={{
                        value: content.value,
                        placeholder: content.placeholder,
                        maxLength: 300,
                    }}
                    asEmphasis="listInput"
                    withColor={props.withColor}
                    onClick={handleValue}
                />
            </div>
        </motion.div>
    );
}
