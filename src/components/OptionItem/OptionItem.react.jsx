// Import npm packages
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import _ from "lodash";
import { getAnimation, getQuommons } from "../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./OptionItem.scss";
import "../../common/stylesheets/overrule.scss";
import InputField from "../InputField/InputField.react";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import OptionalImageField from "../OptionalImageField/OptionalImageField.react";
import CheckBox from "../CheckBox/CheckBox.react";

OptionItem.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
    OptionItem data should be passed in content field and it is a required field
    */
  content: PropTypes.array.isRequired,
  //=======================================
  // Quommon props
  //=======================================
  /**
    Use to define component text size in increasing order
    */
  optionType: PropTypes.oneOf([
    "title",
    "single-select",
    "picture-select",
    "multiple-select",
  ]),
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
};

OptionItem.defaultProps = {
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
export default function OptionItem(props) {
  //-------------------------------------------------------------------
  // 1. Destructuring content prop
  //-------------------------------------------------------------------
  const { content } = props;

  const [contentState, setContentState] = useState([...props.content]);

  useEffect(() => {
    setContentState([...props.content]);
  }, [props.content]);
  //-------------------------------------------------------------------
  // 4. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "option-item");
  //-------------------------------------------------------------------
  // 5. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props.withAnimation);

  const handleRemove = (e) => {
    let tmp = contentState.filter((dataObj) => dataObj.value !== e.target.id);
    setContentState(tmp);
  };

  const handleRadio = (e) => {
    let tmp_arr = [];
    let tmp_state = contentState
    tmp_state.forEach((dataObj) => {
      if (dataObj.name === e.target.value) {
        dataObj.checked = true;
        tmp_arr.push(dataObj);
      } else {
        dataObj.checked = false;
        tmp_arr.push(dataObj);
      }
    });
    setContentState([...tmp_arr]);
  };
  const handleCheckbox = (e) => {
    // console.log(e)
    let tmp_arr = [];
    let tmp_state = contentState
    tmp_state.forEach((dataObj) => {
      if (dataObj.name === e.value) {
        dataObj.checked = e.checked;
        tmp_arr.push(dataObj);
      } else {
        tmp_arr.push(dataObj);
      }
    });
    setContentState([...tmp_arr]);
    console.log(tmp_arr)
  };

  const getField = (contentState, optionType) => {
    return (
      <RadioGroup>
        {contentState.map((dataObj, index) => {
          return (
            <div className="qui-option-item-container" key={index}>
              {(optionType === "single-select" ||
                optionType === "picture-select") && (
                <FormControlLabel
                  sx={{ color: "warning" }}
                  className="qui-option-item-radio"
                  value={dataObj.name}
                  control={
                    <Radio
                      checked={dataObj.checked}
                      style={{ color: props.withColor.accentColor }}
                    />
                  }
                  label={dataObj.checked ? "correct" : "incorrect"}
                  onChange={handleRadio}
                />
              )}
              {optionType === "picture-select" && (
                <OptionalImageField content={{ icon: "fas fa-image" }} />
              )}
              {optionType === "multiple-select" && (
                <div className="qui-option-item-checkbox">
                  <CheckBox onClick={(value) => handleCheckbox(value)} content={{label:dataObj.name,checked:dataObj.checked}}/>
                </div>
              )}
              {optionType !== "picture-select" && (
                <InputField
                  name={dataObj.name}
                  content={{
                    value: '',
                    placeholder: dataObj.placeholder,
                    maxLength: 300,
                  }}
                  asEmphasis="listInput"
                  withColor={props.withColor}
                  /////////////////////////////////////////////////////////////////////
                  onClick={(name, value) => console.log(name, value)}
                  ////////////////////////////////////////////////////////////////////
                />
              )}
              <i
                className="qui-option-item-close-icon fas fa-times"
                id={dataObj.value}
                onClick={(e) => handleRemove(e)}
              ></i>
            </div>
          );
        })}
      </RadioGroup>
    );
  };
  // ========================= Render Function =================================

  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className={`qui ${quommonClasses.parentClasses}`}
    >
      {getField(contentState, props.optionType)}
    </motion.div>
  );
}
