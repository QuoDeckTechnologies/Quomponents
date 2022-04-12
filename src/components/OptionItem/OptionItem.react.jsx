// Import npm packages
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { getAnimation, getQuommons } from "../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./OptionItem.scss";
import "../../common/stylesheets/overrule.scss";
import InputField from "../InputField/InputField.react";
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

  onClick: PropTypes.func.isRequired,
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
  const { content, optionType, onClick } = props;

  const [contentState, setContentState] = useState([...content]);

  useEffect(() => {
    setContentState([...content]);
  }, [content, optionType]);

  useEffect(() => {
    onClick(contentState);
  }, [contentState, onClick]);
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
  let tmp_state = contentState;
  let tmp_arr = [];
  let tmp_obj = {};

  const handleRadio = (e) => {
    tmp_state = contentState;
    tmp_arr = [];
    tmp_obj = {};
    tmp_state.forEach((dataObj) => {
      if (dataObj.name === e.target.value) {
        tmp_obj = { ...dataObj };
        tmp_obj.checked = true;
        tmp_arr.push(tmp_obj);
      } else {
        tmp_obj = { ...dataObj };
        tmp_obj.checked = false;
        tmp_arr.push(tmp_obj);
      }
    });
    setContentState([...tmp_arr]);
  };

  const handleCheckbox = (e) => {
    tmp_state = contentState;
    tmp_arr = [];
    tmp_obj = {};
    tmp_state.forEach((dataObj) => {
      if (dataObj.name === e.value) {
        tmp_obj = { ...dataObj };
        tmp_obj.checked = e.checked;
        tmp_arr.push(tmp_obj);
      } else {
        tmp_obj = { ...dataObj };
        tmp_arr.push(tmp_obj);
      }
    });
    setContentState([...tmp_arr]);
  };

  const handleField = (name, value) => {
    tmp_state = contentState;
    tmp_arr = [];
    tmp_obj = {};
    tmp_state.forEach((dataObj) => {
      if (dataObj.name === name) {
        tmp_obj = { ...dataObj };
        tmp_obj.value = value;
        tmp_arr.push(tmp_obj);
      } else {
        tmp_obj = { ...dataObj };
        tmp_arr.push(tmp_obj);
      }
    });
    setContentState([...tmp_arr]);
  };

  const handleImageUpload = () => {
    // tmp_state = contentState;
    // tmp_arr = [];
    // tmp_obj = {};
    // tmp_state.forEach((dataObj) => {
    //   if (dataObj.name === name) {
    //     tmp_obj = { ...dataObj };
    //     tmp_obj.value = value;
    //     tmp_arr.push(tmp_obj);
    //   } else {
    //     tmp_obj = { ...dataObj };
    //     tmp_arr.push(tmp_obj);
    //   }
    // });
    // setContentState([...tmp_arr]);
  }

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
                <OptionalImageField content={{ icon: "fas fa-image" }} onClick={(image)=>handleImageUpload(image)}/>
              )}
              {optionType === "multiple-select" && (
                <div className="qui-option-item-checkbox">
                  <CheckBox
                    onClick={(value) => handleCheckbox(value)}
                    content={{ label: dataObj.name, checked: dataObj.checked }}
                  />
                </div>
              )}
              {optionType !== "picture-select" && (
                <InputField
                  name={dataObj.name}
                  content={{
                    value: "",
                    placeholder: dataObj.placeholder,
                    maxLength: 300,
                  }}
                  asEmphasis="listInput"
                  withColor={props.withColor}
                  onClick={(name, value) => handleField(name, value)}
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
