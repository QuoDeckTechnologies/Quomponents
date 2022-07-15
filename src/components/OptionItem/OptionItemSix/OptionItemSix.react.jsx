// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import {
  getQuommons,
  getTranslation,
} from "../../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./OptionItemSix.scss";
import "../../../common/stylesheets/overrule.scss";
import OptionalImageField from "../../OptionalImageField/OptionalImageField.react";
import InputField from "../../InputField/InputField.react";

OptionItemSix.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
  Use to define OptionItemSix target name
  */
  targetName: PropTypes.string,
  /**
  Use to define OptionItemSix value
  */
  value: PropTypes.string,
  /**
  Use to define OptionItemSix placeholder
  */
  placeholder: PropTypes.string,
  /**
  Use to define OptionItemSix caption target name
  */
  captionName: PropTypes.string,
  /**
  Use to define OptionItemSix caption value
  */
  captionValue: PropTypes.string,
  /**
  Use to define OptionItemSix caption placeholder
  */
  captionPlaceholder: PropTypes.string,
  /**
  Use to define OptionItemSix image
  */
  image: PropTypes.object,
  /**
  Use to define OptionItemSix max length
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
  Use to enable/disable the component
  */
  isDisabled: PropTypes.bool,
  /**
  Use to show/hide the component
  */
  isHidden: PropTypes.bool,
  /**
  OptionItemSix component must have the onInput function passed as props
  */
  onInput: PropTypes.func.isRequired,
  /**
  OptionItemSix component must have the onInput function passed as props
  */
  onCaption: PropTypes.func.isRequired,
  /**
  OptionItemSix component must have the onUpload function passed as props
  */
  onUpload: PropTypes.func.isRequired,
  /**
  OptionItemSix component must have the onClick function passed as props
  */
  onClick: PropTypes.func.isRequired,
};

OptionItemSix.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  targetName: "",
  value: "",
  placeholder: "",
  captionName: "",
  captionValue: "",
  captionPlaceholder: "",
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
export default function OptionItemSix(props) {
  //-------------------------------------------------------------------
  // 1. Destructuring content prop
  //-------------------------------------------------------------------
  const {
    targetName,
    value,
    placeholder,
    captionName,
    captionValue,
    captionPlaceholder,
    maxLength,
  } = props;
  //-------------------------------------------------------------------
  // 2. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "option-item-six");
  //-------------------------------------------------------------------
  // 5. Translate the text objects in case their is a dictionary provided
  //-------------------------------------------------------------------
  let tObj = getTranslation(props.withTranslation);
  //-------------------------------------------------------------------
  // 6. Function to upload image to content array
  //-------------------------------------------------------------------
  const handleImageUpload = (image) => {
    props.onUpload(targetName, image);
  };
  //-------------------------------------------------------------------
  // 7. Function to return input value of the component
  //-------------------------------------------------------------------
  const handleValue = (name, value) => {
    props.onInput(name, value);
  };
  //-------------------------------------------------------------------
  // 8. Function to return caption value of the component
  //-------------------------------------------------------------------
  const handleCaptionValue = (name, captionValue) => {
    props.onCaption(name, captionValue);
  };

  // ========================= Render Function =================================

  return (
    <div className={`qui ${quommonClasses.parentClasses}`}>
      <div className="qui-option-item-six-container">
        <div className="qui-optionitem-flexone">
          <div className="qui-optionitem-flextwo">
            <div className="qui-option-item-upload-button">
              <OptionalImageField
                title={tObj?.uploadButton || "Upload"}
                icon="fas fa-upload"
                actionButton={false}
                onUpload={(image) => handleImageUpload(image)}
                withColor={{ ...props.withColor }}
              />
            </div>
            <div className="qui-optionitem-six-inputfieldone">
              <InputField
                name={targetName ? targetName : "default-target-name"}
                value={value}
                placeholder={tObj?.placeholder || placeholder}
                maxLength={maxLength}
                asEmphasis="listInput"
                withColor={props.withColor}
                onSubmit={handleValue}
              />
            </div>
          </div>
          <div className="qui-optionitem-flexthree">
            <InputField
              name={captionName ? captionName : "default-caption-target-name"}
              value={captionValue}
              placeholder={tObj?.captionPlaceholder || captionPlaceholder}
              maxLength={maxLength}
              asEmphasis="listInput"
              withColor={props.withColor}
              onSubmit={handleCaptionValue}
            />
          </div>
        </div>
        <div className="qui-option-item-six-close-icon">
          <i
            className="fas fa-times"
            data-id={targetName}
            onClick={(e) => props.onClick(e.target.dataset.id)}
          ></i>
        </div>
      </div>
    </div>
  );
}
