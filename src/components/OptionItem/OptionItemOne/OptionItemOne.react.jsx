// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import {
  getQuommons,
  getTranslation,
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
  Use to define OptionItemOne targetName.
  */
  targetName: PropTypes.string,
  /**
  Use to define OptionItemOne value.
  */
  value: PropTypes.string,
  /**
  Use to define OptionItemOne placeholder.
  */
  placeholder: PropTypes.string,
  /**
  Use to define OptionItemOne placeholder.
  */
  maxLength: PropTypes.number,
  //=======================================
  // Quommon props
  //=======================================
  /**
  Use to override component colors and behavior
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
  OptionItemOne component must have the onInput function passed as props
  */
  onInput: PropTypes.func.isRequired,
  /**
  OptionItemOne component must have the onClick function passed as props
  */
  onClick: PropTypes.func.isRequired,
};

OptionItemOne.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  targetName: "",
  value: "",
  placeholder: "",
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
export default function OptionItemOne(props) {
  //-------------------------------------------------------------------
  // 1. Destructuring props
  //-------------------------------------------------------------------
  const { targetName, value, placeholder, maxLength } = props;
  //-------------------------------------------------------------------
  // 2. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "option-item-one");
  //-------------------------------------------------------------------
  // 3. Translate the text objects in case their is a dictionary provided
  //-------------------------------------------------------------------
  let tObj = getTranslation(props.withTranslation);

  // ========================= Render Function =================================

  return (
    <div className={`qui ${quommonClasses.parentClasses}`}>
      <div className="qui-inline-option-container">
        <InputField
          name={targetName || "default-target-name"}
          value={value}
          placeholder={tObj?.placeholder || placeholder}
          maxLength={maxLength}
          asEmphasis="listInput"
          withColor={props.withColor}
          onSubmit={(name, value) => props.onInput(name, value)}
        />
        <div className="qui-inline-edit-with-remove-button-close-icon">
          <i
            className="qui-inline-edit-with-remove-button-icon fas fa-times"
            data-id={targetName}
            onClick={(e) => props.onClick(e.target.dataset.id)}
          ></i>
        </div>
      </div>
    </div>
  );
}
