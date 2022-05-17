// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
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
    option: PropTypes.shape({
      targetName: PropTypes.string,
      value: PropTypes.string,
      placeholder: PropTypes.string,
    }),
    header: PropTypes.shape({
      targetName: PropTypes.string,
      value: PropTypes.string,
      placeholder: PropTypes.string,
      maxLength: PropTypes.number,
    }),
    message: PropTypes.shape({
      targetName: PropTypes.string,
      value: PropTypes.string,
      placeholder: PropTypes.string,
      maxLength: PropTypes.number,
    }),
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
- The design system used for this component is Fontawesome Icon and MUI
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
  // 2. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "option-item-ten");
  //-------------------------------------------------------------------
  // 3. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props.withAnimation);
  //-------------------------------------------------------------------
  // 4. Function to update value of the input field
  //-------------------------------------------------------------------
  const handleImageUpload = (image) => {
    props.onUpload(content?.option?.targetName, image);
  };
  //-------------------------------------------------------------------
  // 5. Function to return input value of the component
  //-------------------------------------------------------------------
  const handleValue = (name, value) => {
    props.onInput(name, value);
  };
  //-------------------------------------------------------------------
  // 6. Function to return header value of the component
  //-------------------------------------------------------------------
  const handleHeaderValue = (name, headerValue) => {
    props.onHeader(name, headerValue);
  };
  //-------------------------------------------------------------------
  // 7. Function to return message value of the component
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
        <div className="qui-option-item-inputfieldone">
          <InputField
            name={
              content?.option?.targetName
                ? content?.option?.targetName
                : "default-option-target-name"
            }
            content={{
              value: content?.option?.value,
              placeholder: content?.option?.placeholder,
            }}
            asEmphasis="listInput"
            withColor={props.withColor}
            onClick={handleValue}
          />
        </div>
        <div className="qui-option-item-upload-button">
          <OptionalImageField
            content={{ icon: "fas fa-upload" }}
            onClick={(image) => handleImageUpload(image)}
            withColor={{ ...props.withColor }}
          />
        </div>
        <div className="qui-option-item-inputfieldtwo">
          <InputField
            name={
              content?.header?.targetName
                ? content?.header?.targetName
                : "default-header-target-name"
            }
            content={{
              value: content?.header?.value,
              placeholder: content?.header?.placeholder,
              maxLength: content?.header?.maxLength,
            }}
            asEmphasis="listInput"
            withColor={props.withColor}
            onClick={handleHeaderValue}
          />
        </div>
        <div className="qui-option-item-ten-close-icon">
          <i
            className="fas fa-times"
            data-id={content?.option?.targetName}
            onClick={(e) => props.onClose(e.target.dataset.id)}
          ></i>
        </div>
      </div>
      <div className="qui-option-item-inputfieldthree">
        <InputField
          name={
            content?.message?.targetName
              ? content?.message?.targetName
              : "default-message-target-name"
          }
          content={{
            value: content?.message?.value,
            placeholder: content?.message?.placeholder,
            maxLength: content?.message?.maxLength,
          }}
          asEmphasis="listInput"
          withColor={props.withColor}
          onClick={handleMessageValue}
        />
      </div>
    </motion.div>
  );
}
