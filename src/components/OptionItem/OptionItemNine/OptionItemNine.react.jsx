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
import "./OptionItemNine.scss";
import "../../../common/stylesheets/overrule.scss";
import InputField from "../../InputField/InputField.react";

OptionItemNine.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
  Use to define OptionItemNine targetName, value, placeholder for first short field.
  */
  shortFieldOne: PropTypes.shape({
    targetName: PropTypes.string,
    value: PropTypes.string,
  }),
  /**
  Use to define OptionItemNine targetName, value, placeholder for second short field.
  */
  shortFieldTwo: PropTypes.shape({
    targetName: PropTypes.string,
    value: PropTypes.string,
  }),
  /**
  Use to define OptionItemNine targetName, value, placeholder message.
  */
  message: PropTypes.shape({
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
  OptionItemNine component must have the onInput function passed as props
  */
  onInput: PropTypes.func.isRequired,
  /**
  OptionItemNine component must have the onShortFieldOneInput function passed as props
  */
  onShortFieldOneInput: PropTypes.func.isRequired,
  /**
  OptionItemNine component must have the onShortFieldTwoInput function passed as props
  */
  onShortFieldTwoInput: PropTypes.func.isRequired,
  /**
  OptionItemNine component must have the onClick function passed as props
  */
  onClick: PropTypes.func.isRequired,
};

OptionItemNine.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  shortFieldOne: {},
  shortFieldTwo: {},
  message: {},
  //=======================================
  // Quommon props
  //=======================================
  withColor: null,
  withAnimation: null,
  withTranslation: null,
};
/**
## Notes
- The design system used for this component is Fontawesome Icon and MUI
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function OptionItemNine(props) {
  //-------------------------------------------------------------------
  // 1. Destructuring content prop
  //-------------------------------------------------------------------
  const { shortFieldOne, shortFieldTwo, message } = props;
  //-------------------------------------------------------------------
  // 2. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "option-item-nine");
  //-------------------------------------------------------------------
  // 3. Translate the text objects in case their is a dictionary provided
  //-------------------------------------------------------------------
  let tObj = getTranslation(props.withTranslation);
  //-------------------------------------------------------------------
  // 4. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props);

  // ========================= Render Function =================================

  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className={`qui ${quommonClasses.parentClasses}`}
    >
      <div className="qui-short-field-container">
        <div className="qui-option-item-nine-inner-container">
          <div className="qui-short-field-inner-container">
            <div className="qui-short-field-one">
              <InputField
                name={
                  shortFieldOne?.targetName ||
                  "default-short-field-one-target-name"
                }
                value={shortFieldOne?.value}
                asEmphasis="shortField"
                asFloated="left"
                withColor={props.withColor}
                onSubmit={(name, value) =>
                  props.onShortFieldOneInput(name, value)
                }
              />
            </div>
            <div className="qui-short-field-two">
              <InputField
                name={
                  shortFieldTwo?.targetName ||
                  "default-short-field-two-target-name"
                }
                value={shortFieldTwo?.value}
                asEmphasis="shortField"
                asFloated="left"
                withColor={props.withColor}
                onSubmit={(name, value) =>
                  props.onShortFieldTwoInput(name, value)
                }
              />
            </div>
          </div>
          <div className="qui-option-item-nine-input-field">
            <div className="qui-list-input-three">
              <InputField
                name={message?.targetName || "default-message-target-name"}
                value={message?.value}
                placeholder={tObj?.placeholder || message?.placeholder}
                maxLength={message?.maxLength}
                asEmphasis="listInput"
                withColor={props.withColor}
                onSubmit={(name, value) => props.onInput(name, value)}
              />
            </div>
          </div>
        </div>
        <div className="qui-option-item-nine-with-remove-button-close-icon">
          <i
            className="qui-option-item-nine-with-remove-button-icon fas fa-times"
            data-id={message?.targetName}
            onClick={(e) => props.onClick(e.target.dataset.id)}
          ></i>
        </div>
      </div>
    </motion.div>
  );
}
