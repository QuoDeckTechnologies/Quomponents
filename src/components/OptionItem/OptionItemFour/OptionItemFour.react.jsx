// Import npm packages
import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  getQuommons,
  getTranslation,
} from "../../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./OptionItemFour.scss";
import "../../../common/stylesheets/overrule.scss";
import InputField from "../../InputField/InputField.react";
import CheckBox from "../../CheckBox/CheckBox.react";

OptionItemFour.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
  Use to define OptionItemFour targetName.
  */
  targetName: PropTypes.string,
  /**
  Use to define OptionItemFour value.
  */
  value: PropTypes.string,
  /**
  Use to define OptionItemFour placeholder.
  */
  placeholder: PropTypes.string,
  /**
  Use to define OptionItemFour checked.
  */
  checked: PropTypes.bool,
  /**
  Use to define OptionItemFour max length.
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
  OptionItemFour component must have the onSelect function passed as props
  */
  onSelect: PropTypes.func.isRequired,
  /**
  OptionItemFour component must have the onInput function passed as props
  */
  onInput: PropTypes.func.isRequired,
  /**
  OptionItemFour component must have the onClick function passed as props
  */
  onClick: PropTypes.func.isRequired,
};

OptionItemFour.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  targetName: "",
  value: "",
  placeholder: "",
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
export default function OptionItemFour(props) {
  //-------------------------------------------------------------------
  // 1. Destructuring props
  //-------------------------------------------------------------------
  const {
    targetName,
    value,
    placeholder,
    checked,
    maxLength,
    onSelect,
    onInput,
  } = props;
  //-------------------------------------------------------------------
  // 2. Defining states and hooks
  //-------------------------------------------------------------------
  const [isChecked, setIsChecked] = useState(checked);
  //-------------------------------------------------------------------
  // 3. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "option-item-four");
  //-------------------------------------------------------------------
  // 4. Translate the text objects in case their is a dictionary provided
  //-------------------------------------------------------------------
  let tObj = getTranslation(props.withTranslation);
  //-------------------------------------------------------------------
  // 5. Function to return checked value of the component
  //-------------------------------------------------------------------
  const handleCheckBox = (data) => {
    setIsChecked(data?.checked);
    onSelect(targetName, data?.checked);
  };
  //-------------------------------------------------------------------
  // 6. Function to return input value of the component
  //-------------------------------------------------------------------
  const handleValue = (name, value) => {
    onInput(name, value);
  };
  //-------------------------------------------------------------------
  // 7. Function to return label of the checkbox
  //-------------------------------------------------------------------
  const getLabel = () => {
    if (tObj) return isChecked ? tObj.correct : tObj.incorrect;
    else return isChecked ? "Correct" : "Incorrect";
  };

  // ========================= Render Function =================================

  return (
    <div className={`qui ${quommonClasses.parentClasses}`}>
      <div className="qui-option-item-four-container">
        <div className="qui-option-item-four-checkbox">
          <CheckBox
            onClick={handleCheckBox}
            name={targetName}
            checked={isChecked}
            label={getLabel()}
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
          onBlur={handleValue}
        />
        <div className="qui-option-item-four-close-icon">
          <i
            className="qui-option-item-four-icon fas fa-times"
            data-id={targetName}
            onClick={(e) => props.onClick(e.target.dataset.id)}
          ></i>
        </div>
      </div>
    </div>
  );
}
