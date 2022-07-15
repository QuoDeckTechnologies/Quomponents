// Import npm packages
import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  getQuommons,
  getTranslation,
} from "../../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./OptionItemFive.scss";
import "../../../common/stylesheets/overrule.scss";
import InputField from "../../InputField/InputField.react";
import OptionalImageField from "../../OptionalImageField/OptionalImageField.react";

OptionItemFive.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
  Use to define OptionItemFive targetName.
  */
  targetName: PropTypes.string,
  /**
  Use to define OptionItemFive value.
  */
  value: PropTypes.string,
  /**
  Use to define OptionItemFive placeholder.
  */
  placeholder: PropTypes.string,
  /**
  Use to define OptionItemFive image props
  */
  image: PropTypes.object,
  /**
  Use to define OptionItemFive max length
  */
  maxLength: PropTypes.number,
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
  OptionItemFive component must have the onUpload function passed as props
  */
  onUpload: PropTypes.func.isRequired,
  /**
  OptionItemFive component must have the onInput function passed as props
  */
  onInput: PropTypes.func.isRequired,
  /**
  OptionItemFive component must have the onClick function passed as props
  */
  onClick: PropTypes.func.isRequired,
};

OptionItemFive.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  targetName: "",
  value: "",
  placeholder: "",
  image: null,
  maxLength: 300,
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
export default function OptionItemFive(props) {
  //-------------------------------------------------------------------
  // 1. Destructuring props
  //-------------------------------------------------------------------
  const { targetName, value, placeholder, image, maxLength } = props;
  //-------------------------------------------------------------------
  // 2. Defining states
  //-------------------------------------------------------------------
  const [uploadImage, setUploadImage] = useState(image);
  const [inputValue, setInputValue] = useState(value);
  //-------------------------------------------------------------------
  // 3. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "option-item-five");
  //-------------------------------------------------------------------
  // 5. Translate the text objects in case their is a dictionary provided
  //-------------------------------------------------------------------
  let tObj = getTranslation(props.withTranslation);
  //-------------------------------------------------------------------
  // 6. Function to upload image to content array
  //-------------------------------------------------------------------
  const handleImageUpload = (image) => {
    setUploadImage(image);
    props.onUpload(targetName, image, inputValue);
  };
  //-------------------------------------------------------------------
  // 7. Function to return input value of the component
  //-------------------------------------------------------------------
  const handleValue = (name, value) => {
    setInputValue(value);
    props.onInput(name, uploadImage, value);
  };

  // ========================= Render Function =================================

  return (
    <div className={`qui ${quommonClasses.parentClasses}`}>
      <div className="qui-option-item-five-container">
        <div className="qui-option-item-five-upload-button">
          <OptionalImageField
            title={tObj?.uploadButton || "Upload"}
            icon="fas fa-upload"
            actionButton={false}
            onUpload={(image) => handleImageUpload(image)}
            withColor={{ ...props.withColor }}
          />
        </div>
        <InputField
          name={targetName || "default-target-name"}
          value={value}
          placeholder={tObj?.placeholder || placeholder}
          maxLength={maxLength}
          asEmphasis="listInput"
          withColor={props.withColor}
          onSubmit={handleValue}
        />
        <div className="qui-option-item-five-close-icon">
          <i
            className="qui-option-item-five-icon fas fa-times"
            data-id={targetName}
            onClick={(e) => props.onClick(e.target.dataset.id)}
          ></i>
        </div>
      </div>
    </div>
  );
}
