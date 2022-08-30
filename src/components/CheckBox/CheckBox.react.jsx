// Import npm packages
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Checkbox } from "@mui/material";
import {
  getQuommons,
  getAnimation,
  getTranslation,
} from "../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./CheckBox.scss";
import "../../common/stylesheets/overrule.scss";

CheckBox.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
  CheckBox unique label has to be in label props.
  */
  label: PropTypes.string,
  /**
  CheckBox unique checked value has to be in checked props.
  */
  checked: PropTypes.bool,
  //=======================================
  // Quommon props
  //=======================================
  /**
  Use to define component text size in increasing order
  */
  asSize: PropTypes.oneOf([
    "tiny",
    "small",
    "normal",
    "big",
    "huge",
    "massive",
  ]),
  /**
  Use to define component padding in increasing order
  */
  asPadded: PropTypes.oneOf(["fitted", "compact", "normal", "relaxed"]),
  /**
  Use to float the component in parent container
  */
  asFloated: PropTypes.oneOf(["left", "right", "none", "inline"]),
  /**
  Use to align content within the component container
  */
  asAligned: PropTypes.oneOf(["left", "right", "center"]),
  /**
  Use to override component colors 
  */
  withColor: PropTypes.shape({
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
  Use to show a translated version of the component text. Dictionary must be valid JSON. 
  */
  withTranslation: PropTypes.shape({
    lang: PropTypes.string,
    tgt: PropTypes.string,
    dictionary: PropTypes.string,
  }),
  /**
  Use to show/hide the component
  */
  isHidden: PropTypes.bool,
  /**
  Use to enable/disable the component
  */
  isDisabled: PropTypes.bool,
  /**
  Use to toggle the component taking the full width of the parent container
  */
  isFluid: PropTypes.bool,
  /**
  CheckBox component must have the onClick function passed as props to return label of the checkbox and checked/unchecked status
  */
  onClick: PropTypes.func.isRequired,
};

CheckBox.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  label: "",
  checked: false,
  //=======================================
  // Quommon props
  //=======================================
  asSize: "normal",
  asFloated: "left",
  asPadded: "normal",
  asAligned: "left",
  withColor: null,
  withAnimation: null,
  withTranslation: null,
  isHidden: false,
  isDisabled: false,
};
/**
## Notes
- The design system used for this component is Material UI (@mui/material)
- The animation system used for this component is Framer Motion (framer-motion)
**/
export default function CheckBox(props) {
  //-------------------------------------------------------------------
  // 1. Destructuring  checked, label and withColor prop
  //-------------------------------------------------------------------
  const { withColor, checked, label } = props;
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
  let quommonClasses = getQuommons(props, "check-box");
  //-------------------------------------------------------------------
  // 4. Translate the text objects in case their is a dictionary provided
  //-------------------------------------------------------------------
  let tObj = getTranslation(props.withTranslation);
  //-------------------------------------------------------------------
  // 5. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props);

  // ========================= Render Function =================================

  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className={`qui ${quommonClasses.parentClasses}`}
    >
      <div
        className={`qui-check-box-inner-container ${quommonClasses.childClasses}`}
      >
        <Checkbox
          style={{ color: withColor?.accentColor }}
          checked={isChecked}
          id={`qui-check-box-element-${label}`}
          disabled={props.isDisabled}
          size={props.asSize}
          value={label}
          onChange={(e) => {
            setIsChecked((prevState) => !prevState);
            props.onClick({
              value: e.target.value,
              checked: e.target.checked,
            });
          }}
        />

        <label
          htmlFor={`qui-check-box-element-${label}`}
          className="qui-check-box-element"
        >
          <p style={{ color: withColor?.textColor }}>{tObj?.label || label}</p>
        </label>
      </div>
    </motion.div>
  );
}
