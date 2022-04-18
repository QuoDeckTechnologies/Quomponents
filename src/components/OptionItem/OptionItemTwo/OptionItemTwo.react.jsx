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
    OptionItemTwo name should be passed in content object
    */
  content: PropTypes.shape({
    targetName: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
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
    textColor: PropTypes.string,
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
    OptionItemTwo component must have the onClose function passed as props
    */
  onClose: PropTypes.func.isRequired,
};

OptionItemTwo.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  content: [],
  optionType: "title",
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
export default function OptionItemTwo(props) {
  //-------------------------------------------------------------------
  // 1. Destructuring content prop
  //-------------------------------------------------------------------
  const { content } = props;

  const [isChecked, setIsChecked] = useState(content.checked);
  const [value, setValue] = useState(content.targetName);

  useEffect(() => {
    setIsChecked(content.checked);
  }, [content.checked]);
  //   useEffect(() => {
  //     console.log(isChecked);
  //   }, [isChecked]);
  //-------------------------------------------------------------------
  // 2. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "single-select");
  //-------------------------------------------------------------------
  // 3. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props.withAnimation);

  const handleRadio = (e) => {
    setIsChecked(e.target.checked);
    props.onInput(content.name, value, e.target.checked);
    console.log(e.target.checked)
  };
  // ========================= Render Function =================================

  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className={`qui ${quommonClasses.parentClasses}`}
    >
      <div className="qui-single-select-container">
        <FormControlLabel
          className="qui-single-select-radio"
          value={content.targetName}
          control={
            <Radio
              checked={isChecked}
              style={{ color: props.withColor.accentColor }}
            />
          }
          label={isChecked ? "Correct" : "Incorrect"}
          onChange={handleRadio}
        />
        <InputField
          name={content.targetName}
          content={{
            value: content.value,
            placeholder: content.placeholder,
            maxLength: 300,
          }}
          asEmphasis="listInput"
          withColor={props.withColor}
          onClick={(name, value) => props.onInput(name, value, isChecked)}
        />
        <div className="qui-single-select-close-icon">
          <i
            className="qui-single-select-icon fas fa-times"
            id={content.targetName}
            onClick={(e) => props.onClose(e.target.id)}
          ></i>
        </div>
      </div>
    </motion.div>
  );
}
