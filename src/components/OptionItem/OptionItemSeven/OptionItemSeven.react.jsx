// Import npm packages
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  getQuommons,
  getTranslation,
} from "../../../common/javascripts/helpers";
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
  Use to define OptionItemSeven target name
  */
  targetName: PropTypes.string,
  /**
  Use to define OptionItemSeven value
  */
  value: PropTypes.string,
  /**
  Use to define OptionItemSeven placeholder
  */
  placeholder: PropTypes.string,
  /**
  Use to define OptionItemSeven checked props
  */
  checked: PropTypes.bool,
  /**
  Use to define OptionItemSeven image
  */
  image: PropTypes.object,
  /**
  Use to define OptionItemSeven max length
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
  OptionItemSeven component must have the onInput function passed as props
  */
  onInput: PropTypes.func.isRequired,
  /**
  OptionItemSeven component must have the onSelect function passed as props
  */
  onSelect: PropTypes.func.isRequired,
  /**
  OptionItemSeven component must have the onUpload function passed as props
  */
  onUpload: PropTypes.func.isRequired,
  /**
  OptionItemSeven component must have the onClick function passed as props
  */
  onClick: PropTypes.func.isRequired,
};

OptionItemSeven.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  targetName: "name",
  value: "value",
  image: {},
  placeholder: "placeholder",
  checked: false,
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
export default function OptionItemSeven(props) {
  //-------------------------------------------------------------------
  // 1. Destructuring content prop
  //-------------------------------------------------------------------
  const { targetName, value, placeholder, checked, maxLength } = props;
  //-------------------------------------------------------------------
  // 2. Defining states and hooks
  //-------------------------------------------------------------------
  const [isChecked, setIsChecked] = useState(checked);
  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);
  //-------------------------------------------------------------------
  // 3. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "option-item-seven");
  //-------------------------------------------------------------------
  // 4. Translate the text objects in case their is a dictionary provided
  //-------------------------------------------------------------------
  let tObj = getTranslation(props.withTranslation);
  //-------------------------------------------------------------------
  // 6. Function to return checked value of the component
  //-------------------------------------------------------------------
  const handleRadio = (e) => {
    setIsChecked(e.target.checked);
    props.onSelect(targetName, e.target.checked);
  };
  //-------------------------------------------------------------------
  // 7. Function to return input value of the component
  //-------------------------------------------------------------------
  const handleValue = (name, value) => {
    props.onInput(name, value);
  };
  //-------------------------------------------------------------------
  // 8. Function to upload image to content array
  //-------------------------------------------------------------------
  const handleImageUpload = (image) => {
    props.onUpload(targetName, image);
  };
  //-------------------------------------------------------------------
  // 9. Function to return label of the checkbox
  //-------------------------------------------------------------------
  const getLabel = () => {
    if (tObj) return isChecked ? tObj.correct : tObj.incorrect;
    else return isChecked ? "Correct" : "Incorrect";
  };

  // ========================= Render Function =================================

  return (
    <div className={`qui ${quommonClasses.parentClasses}`}>
      <div className="qui-option-item-seven-container">
        <div className="qui-option-item-radio-container">
          <FormControlLabel
            className="qui-option-item-radio"
            value={targetName || "default-target-name"}
            control={
              <Radio
                checked={isChecked}
                style={{ color: props.withColor?.accentColor }}
              />
            }
            label={getLabel()}
            onChange={handleRadio}
          />
        </div>
        <div className="qui-option-item-upload-button">
          <OptionalImageField
            title={tObj?.uploadButton || null}
            icon="fas fa-upload"
            actionButton={false}
            onUpload={(image) => handleImageUpload(image)}
            withColor={{ ...props.withColor }}
          />
        </div>
        <InputField
          name={targetName ? targetName : "default-target-name"}
          value={value}
          placeholder={tObj?.placeholder || placeholder}
          maxLength={maxLength}
          asEmphasis="listInput"
          withColor={props.withColor}
          onSubmit={handleValue}
        />
        <div className="qui-option-item-seven-close-icon">
          <i
            className="qui-option-item-seven-icon fas fa-times"
            data-id={targetName ? targetName : "default-target-name"}
            onClick={(e) => props.onClick(e.target.dataset.id)}
          ></i>
        </div>
      </div>
    </div>
  );
}
