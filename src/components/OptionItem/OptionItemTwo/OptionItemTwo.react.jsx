// Import npm packages
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { getAnimation, getQuommons } from "../../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./OptionItemTwo.scss";
import "../../../common/stylesheets/overrule.scss";
import InputField from "../../InputField/InputField.react";
import { FormControlLabel, Radio } from "@mui/material";

OptionItemTwo.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
    OptionItemTwo targetName, value, placeholder, checked should be passed in content object
    */
  content: PropTypes.shape({
    targetName: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    checked: PropTypes.bool,
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
    OptionItemTwo component must have the onInput function passed as props
    */
  onInput: PropTypes.func.isRequired,
  /**
    OptionItemTwo component must have the onSelect function passed as props
    */
  onSelect: PropTypes.func.isRequired,
  /**
    OptionItemTwo component must have the onClose function passed as props
    */
  onClose: PropTypes.func.isRequired,
};

OptionItemTwo.defaultProps = {
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
export default function OptionItemTwo(props) {
  //-------------------------------------------------------------------
  // 1. Destructuring content prop
  //-------------------------------------------------------------------
  const { content } = props;
  //-------------------------------------------------------------------
  // 2. Defining states and hooks
  //-------------------------------------------------------------------
  const [value, setValue] = useState(content?.value);
  const [isChecked, setIsChecked] = useState(content?.checked);
  useEffect(() => {
    setIsChecked(content?.checked);
  }, [content?.checked]);
  //-------------------------------------------------------------------
  // 3. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "option-item-two");
  //-------------------------------------------------------------------
  // 4. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props.withAnimation);
  //-------------------------------------------------------------------
  // 5. Function to return checked value of the component
  //-------------------------------------------------------------------
  const handleRadio = (e) => {
    setIsChecked(e.target.checked);
    props.onSelect(content?.targetName, value, e.target.checked);
  };
  //-------------------------------------------------------------------
  // 6. Function to return input value of the component
  //-------------------------------------------------------------------
  const handleValue = (name, value) => {
    setValue(value);
    props.onInput(name, value, isChecked);
  };

  // ========================= Render Function =================================

  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className={`qui ${quommonClasses.parentClasses}`}
    >
      <div className="qui-single-select-container">
        <div className="qui-option-item-radio-container">
          <FormControlLabel
            className="qui-option-item-radio"
            value={
              content?.targetName ? content?.targetName : "default-target-name"
            }
            control={
              <Radio
                checked={isChecked}
                style={{ color: props.withColor?.accentColor }}
              />
            }
            label={isChecked ? "Correct" : "Incorrect"}
            onChange={handleRadio}
          />
        </div>
        <InputField
          name={
            content?.targetName ? content?.targetName : "default-target-name"
          }
          content={{
            value: content?.value,
            placeholder: content?.placeholder,
            maxLength: content?.maxLength,
          }}
          asEmphasis="listInput"
          withColor={props.withColor}
          onClick={handleValue}
        />
        <div className="qui-single-select-close-icon">
          <i
            className="qui-single-select-icon fas fa-times"
            data-id={
              content?.targetName ? content?.targetName : "default-target-name"
            }
            onClick={(e) => props.onClose(e.target.dataset.id)}
          ></i>
        </div>
      </div>
    </motion.div>
  );
}
