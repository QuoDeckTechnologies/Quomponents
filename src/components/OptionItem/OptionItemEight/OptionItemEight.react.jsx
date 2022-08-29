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
import "./OptionItemEight.scss";
import "../../../common/stylesheets/overrule.scss";
import InputField from "../../InputField/InputField.react";
import Button from "../../Buttons/Button/Button.react";

OptionItemEight.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
  Use to define OptionItemEight targetName
  */
  targetName: PropTypes.string,
  /**
  Use to define OptionItemEight value
  */
  value: PropTypes.string,
  /**
  Use to define OptionItemEight placeholder
  */
  placeholder: PropTypes.string,
  /**
  Use to define OptionItemEight max length
  */
  maxLength: PropTypes.number,
  /**
  Use to define OptionItemEight button text
  */
  buttonText: PropTypes.string,
  //=======================================
  // Quommon props
  //=======================================
  /**
  Use to define standard component type
  */
  asVariant: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "warning",
    "error",
  ]),
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
  OptionItemEight component must have the onInput function passed as props
  */
  onInput: PropTypes.func.isRequired,
  /**
  OptionItemEight component must have the onClick function passed as props
  */
  onClick: PropTypes.func.isRequired,
  /**
  OptionItemEight component must have the onClick function passed as props
  */
  onSubmit: PropTypes.func.isRequired,
};

OptionItemEight.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  targetName: "",
  value: "",
  placeholder: "",
  maxLength: 300,
  buttonText: "",
  //=======================================
  // Quommon props
  //=======================================
  asVariant: "primary",
  withColor: null,
  withTranslation: null,
};
/**
## Notes
- The design system used for this component is Fontawesome Icon And MUI
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function OptionItemEight(props) {
  //-------------------------------------------------------------------
  // 1. Destructuring content prop
  //-------------------------------------------------------------------
  const {
    targetName,
    value,
    placeholder,
    maxLength,
    buttonText,
    asVariant,
    withColor,
  } = props;
  //-------------------------------------------------------------------
  // 2. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "option-item-eight");
  //-------------------------------------------------------------------
  // 3. Translate the text objects in case their is a dictionary provided
  //-------------------------------------------------------------------
  let tObj = getTranslation(props.withTranslation);
  //-------------------------------------------------------------------
  // 4. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props);
  //-------------------------------------------------------------------
  // 5. Function to return input value of the component
  //-------------------------------------------------------------------
  const handleValue = (name, value) => {
    props.onInput(name, value);
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
          name={targetName || "default-target-name"}
          value={value}
          placeholder={tObj?.placeholder || placeholder}
          maxLength={maxLength}
          asEmphasis="listInput"
          withColor={props.withColor}
          onSubmit={handleValue}
          onBlur={handleValue}
        />
        <div className="qui-option-item-button">
          <Button
            content={buttonText}
            asEmphasis="outlined"
            asVariant={asVariant}
            withColor={{
              ...withColor,
              backgroundColor: withColor?.accentColor,
              textColor: withColor?.accentColor,
            }}
            onClick={props.onSubmit}
          >
            {tObj?.buttonText || buttonText || "Outlined button"}
          </Button>
        </div>
        <div className="qui-option-item-eight-close-icon">
          <i
            className="qui-option-item-eight-icon fas fa-times"
            data-id={targetName}
            onClick={(e) => props.onClick(e.target.dataset.id)}
          ></i>
        </div>
      </div>
    </motion.div>
  );
}
