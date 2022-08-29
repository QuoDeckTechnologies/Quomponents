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
import "./OptionItemTen.scss";
import "../../../common/stylesheets/overrule.scss";
import OptionalImageField from "../../OptionalImageField/OptionalImageField.react";
import InputField from "../../InputField/InputField.react";

OptionItemTen.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
  Use to define OptionItemTen option targetName, value, placeholder.
  */
  option: PropTypes.shape({
    targetName: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
  }),
  /**
  Use to define OptionItemTen header targetName, value, placeholder.
  */
  header: PropTypes.shape({
    targetName: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    maxLength: PropTypes.number,
  }),
  /**
  Use to define OptionItemTen message targetName, value, placeholder.
  */
  message: PropTypes.shape({
    targetName: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    maxLength: PropTypes.number,
  }),
  /**
  Use to define OptionItemTen image.
  */
  image: PropTypes.object,
  //=======================================
  // Quommon props
  //=======================================
  /**
  Use to override component colors
  */
  withColor: PropTypes.shape({
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    accentColor: PropTypes.string,
    hoverBackgroundColor: PropTypes.string,
    hoverTextColor: PropTypes.string,
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
  OptionItemTen component must have the onClick function passed as props
  */
  onInput: PropTypes.func.isRequired,
  /**
  OptionItemTen component must have the onClick function passed as props
  */
  onHeader: PropTypes.func.isRequired,
  /**
  OptionItemTen component must have the onClick function passed as props
  */
  onMessage: PropTypes.func.isRequired,
  /**
  OptionItemTen component must have the onUpload function passed as props
  */
  onUpload: PropTypes.func.isRequired,
  /**
  OptionItemTen component must have the onClick function passed as props
  */
  onClick: PropTypes.func.isRequired,
};

OptionItemTen.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  option: {},
  header: {},
  message: {},
  //=======================================
  // Quommon props
  //=======================================
  withColor: null,
  withTranslation: null,
};
/**
## Notes
- The design system used for this component is Fontawesome Icon and MUI
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function OptionItemTen(props) {
  //-------------------------------------------------------------------
  // 1. Destructuring content prop
  //-------------------------------------------------------------------
  const { option, header, message } = props;
  //-------------------------------------------------------------------
  // 2. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "option-item-ten");
  //-------------------------------------------------------------------
  // 3. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props);
  //-------------------------------------------------------------------
  // 4. Translate the text objects in case their is a dictionary provided
  //-------------------------------------------------------------------
  let tObj = getTranslation(props.withTranslation);
  //-------------------------------------------------------------------
  // 5. Function to upload image to content array
  //-------------------------------------------------------------------
  const handleImageUpload = (image) => {
    props.onUpload(option?.targetName, image);
  };
  //-------------------------------------------------------------------
  // 6. Function to return input value of the component
  //-------------------------------------------------------------------
  const handleValue = (name, value) => {
    props.onInput(name, value);
  };
  //-------------------------------------------------------------------
  // 7. Function to return header value of the component
  //-------------------------------------------------------------------
  const handleHeaderValue = (name, headerValue) => {
    props.onHeader(name, headerValue);
  };
  //-------------------------------------------------------------------
  // 8. Function to return message value of the component
  //-------------------------------------------------------------------
  const handleMessageValue = (name, messageValue) => {
    props.onMessage(name, messageValue);
  };
  // ========================= Render Function =================================

  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className={`qui ${quommonClasses.parentClasses}`}
    >
      <div className="qui-option-item-ten-container">
        <div className="qui-option-item-ten-inputfield-one">
          <InputField
            name={
              option?.targetName
                ? option?.targetName
                : "default-option-target-name"
            }
            value={option?.value}
            placeholder={tObj?.placeholder || option?.placeholder}
            asEmphasis="listInput"
            withColor={props.withColor}
            onSubmit={handleValue}
            onBlur={handleValue}
          />
        </div>
        <div className="qui-option-item-upload-button">
          <OptionalImageField
            title={tObj?.uploadButton || "Upload"}
            icon="fas fa-upload"
            actionButton={false}
            onUpload={(image) => handleImageUpload(image)}
            withColor={{ ...props.withColor }}
          />
        </div>
        <div className="qui-option-item-ten-inputfield-two">
          <InputField
            name={
              header?.targetName
                ? header?.targetName
                : "default-header-target-name"
            }
            value={header?.value}
            placeholder={tObj?.headerPlaceholder || header?.placeholder}
            maxLength={header?.maxLength}
            asEmphasis="listInput"
            withColor={props.withColor}
            onSubmit={handleHeaderValue}
            onBlur={handleHeaderValue}
          />
        </div>
        <div className="qui-option-item-ten-close-icon">
          <i
            className="fas fa-times"
            data-id={option?.targetName}
            onClick={(e) => props.onClick(e.target.dataset.id)}
          ></i>
        </div>
      </div>
      <div className="qui-option-item-ten-inputfield-three">
        <InputField
          name={
            message?.targetName
              ? message?.targetName
              : "default-message-target-name"
          }
          value={message?.value}
          placeholder={tObj?.messagePlaceholder || message?.placeholder}
          maxLength={message?.maxLength}
          asEmphasis="listInput"
          withColor={props.withColor}
          onSubmit={handleMessageValue}
          onBlur={handleMessageValue}
        />
      </div>
    </motion.div>
  );
}
