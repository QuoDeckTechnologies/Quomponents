// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { getAnimation, getQuommons } from "../../../common/javascripts/helpers";
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
       OptionItemTwo targetName, value, placeholder should be passed in content object
    */
  content: PropTypes.shape({
    shortFieldOne: PropTypes.shape({
      targetName: PropTypes.string,
      value: PropTypes.string,
    }),
    shortFieldTwo: PropTypes.shape({
      targetName: PropTypes.string,
      value: PropTypes.string,
    }),
    message: PropTypes.shape({
      targetName: PropTypes.string,
      value: PropTypes.string,
      placeholder: PropTypes.string,
      maxLength: PropTypes.number,
    }),
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
      OptionItemNine component must have the onClose function passed as props
    */
  onClose: PropTypes.func.isRequired,
};

OptionItemNine.defaultProps = {
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
export default function OptionItemNine(props) {
  //-------------------------------------------------------------------
  // 1. Destructuring content prop
  //-------------------------------------------------------------------
  const { content } = props;
  //-------------------------------------------------------------------
  // 2. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "option-item-nine");
  //-------------------------------------------------------------------
  // 3. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props.withAnimation);
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
                  content?.shortFieldOne?.targetName
                    ? content?.shortFieldOne?.targetName
                    : "default-short-field-one-target-name"
                }
                content={{
                  value: content?.shortFieldOne?.value,
                }}
                asEmphasis="shortField"
                asFloated="left"
                withColor={props.withColor}
                onClick={(name, value) =>
                  props.onShortFieldOneInput(name, value)
                }
              />
            </div>
            <div className="qui-short-field-two">
              <InputField
                name={
                  content?.shortFieldTwo?.targetName
                    ? content?.shortFieldTwo?.targetName
                    : "default-short-field-two-target-name"
                }
                content={{
                  value: content?.shortFieldTwo?.value,
                }}
                asEmphasis="shortField"
                asFloated="left"
                withColor={props.withColor}
                onClick={(name, value) =>
                  props.onShortFieldTwoInput(name, value)
                }
              />
            </div>
          </div>
          <div className="qui-option-item-nine-input-field">
            <div className="qui-list-input-three">
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
                onClick={(name, value) => props.onInput(name, value)}
              />
            </div>
          </div>
        </div>
        <div className="qui-option-item-nine-with-remove-button-close-icon">
          <i
            className="qui-option-item-nine-with-remove-button-icon fas fa-times"
            data-id={content?.message?.targetName}
            onClick={(e) => props.onClose(e.target.dataset.id)}
          ></i>
        </div>
      </div>
    </motion.div>
  );
}
