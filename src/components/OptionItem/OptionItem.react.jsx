// Import npm packages
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import _ from "lodash";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { getAnimation, getQuommons } from "../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./OptionItem.scss";
import "../../common/stylesheets/overrule.scss";
import InputField from "../InputField/InputField.react";
import OptionalImageField from "../OptionalImageField/OptionalImageField.react";
import CheckBox from "../CheckBox/CheckBox.react";
import Button from "../Buttons/Button/Button.react";

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
    "picture-title",
    "picture-select-with-caption",
    "single-select-picture-title",
    "title-outline-button",
    "short-field-title",
    "option-picture-with-message",
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

  let tmp_state = contentState;
  let tmp_arr = [];
  let tmp_obj = {};

  const handleRemove = (e) => {
    tmp_state = contentState;
    tmp_arr = [];
    tmp_state.forEach((dataObj) => {
      tmp_arr.push({ ...dataObj });
    });
    tmp_arr = _.remove(tmp_state, (dataObj) => dataObj.name !== e.target.id);
    setContentState([...tmp_arr]);
  };

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

  const handleImageUpload = (image, id) => {
    tmp_state = contentState;
    tmp_arr = [];
    tmp_obj = {};
    tmp_state.forEach((dataObj) => {
      if (dataObj.name === id) {
        tmp_obj = { ...dataObj };
        tmp_obj.image = image;
        tmp_arr.push(tmp_obj);
      } else {
        tmp_obj = { ...dataObj };
        tmp_arr.push(tmp_obj);
      }
    });
    setContentState([...tmp_arr]);
  };

  const handleCaption = (captionName, captionValue) => {
    tmp_state = contentState;
    tmp_arr = [];
    tmp_obj = {};
    tmp_state.forEach((dataObj) => {
      if (dataObj.captionName === captionName) {
        tmp_obj = { ...dataObj };
        tmp_obj.captionValue = captionValue;
        tmp_arr.push(tmp_obj);
      } else {
        tmp_obj = { ...dataObj };
        tmp_arr.push(tmp_obj);
      }
    });
    setContentState([...tmp_arr]);
  };

  const handleShortFieldFirst = (shortFieldName_1, shortFieldValue_1) => {
    tmp_state = contentState;
    tmp_arr = [];
    tmp_obj = {};
    tmp_state.forEach((dataObj) => {
      if (dataObj.shortFieldName_1 === shortFieldName_1) {
        tmp_obj = { ...dataObj };
        tmp_obj.shortFieldValue_1 = shortFieldValue_1;
        tmp_arr.push(tmp_obj);
      } else {
        tmp_obj = { ...dataObj };
        tmp_arr.push(tmp_obj);
      }
    });
    setContentState([...tmp_arr]);
  };

  const handleShortFieldSecond = (shortFieldName_2, shortFieldValue_2) => {
    tmp_state = contentState;
    tmp_arr = [];
    tmp_obj = {};
    tmp_state.forEach((dataObj) => {
      if (dataObj.shortFieldName_2 === shortFieldName_2) {
        tmp_obj = { ...dataObj };
        tmp_obj.shortFieldValue_2 = shortFieldValue_2;
        tmp_arr.push(tmp_obj);
      } else {
        tmp_obj = { ...dataObj };
        tmp_arr.push(tmp_obj);
      }
    });
    setContentState([...tmp_arr]);
  };

  const getField = (contentState, optionType) => {
    return (
      <RadioGroup>
        {contentState.map((dataObj, index) => {
          return (
            <div className="qui-option-item-wrapper" key={index}>
              <div className="qui-option-item-container">
                {(optionType === "single-select" ||
                  optionType === "picture-select" ||
                  optionType === "single-select-picture-title") && (
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
                {optionType === "option-picture-with-message" && (
                  <div className="qui-option-item-option-field">
                    <InputField
                      name={dataObj.optionName}
                      content={{
                        value: dataObj.optionValue,
                        placeholder: dataObj.optionPlaceholder,
                        maxLength: 30,
                      }}
                      asEmphasis="listInput"
                      withColor={props.withColor}
                      onClick={(name, value) => handleField(name, value)}
                    />
                  </div>
                )}
                {(optionType === "picture-select" ||
                  optionType === "picture-title" ||
                  optionType === "picture-select-with-caption" ||
                  optionType === "single-select-picture-title" ||
                  optionType === "option-picture-with-message") && (
                  <div className="qui-option-item-upload-button">
                    <OptionalImageField
                      content={{ icon: "fas fa-image", name: dataObj.name }}
                      onClick={(image, id) => handleImageUpload(image, id)}
                      withColor={{ ...props.withColor }}
                    />
                  </div>
                )}
                {optionType === "multiple-select" && (
                  <div className="qui-option-item-checkbox">
                    <CheckBox
                      onClick={(value) => handleCheckbox(value)}
                      content={{
                        label: dataObj.name,
                        checked: dataObj.checked,
                      }}
                    />
                  </div>
                )}
                {optionType === "short-field-title" && (
                  <div className="qui-short-field-container">
                    <InputField
                      name={dataObj.shortFieldName_1}
                      content={{
                        value: dataObj.shortFieldValue_1,
                      }}
                      asEmphasis="shortField"
                      asFloated="left"
                      withColor={props.withColor}
                      onClick={(name, value) =>
                        handleShortFieldFirst(name, value)
                      }
                    />
                    <InputField
                      name={dataObj.shortFieldName_2}
                      content={{
                        value: dataObj.shortFieldValue_2,
                      }}
                      asEmphasis="shortField"
                      asFloated="left"
                      withColor={props.withColor}
                      onClick={(name, value) =>
                        handleShortFieldSecond(name, value)
                      }
                    />
                  </div>
                )}
                {optionType !== "picture-select" && (
                  <InputField
                    name={dataObj.name}
                    content={{
                      value: dataObj.value,
                      placeholder: dataObj.placeholder,
                      maxLength: 300,
                    }}
                    asEmphasis="listInput"
                    withColor={props.withColor}
                    onClick={(name, value) => handleField(name, value)}
                  />
                )}
                {optionType === "picture-select-with-caption" && (
                  <InputField
                    name={dataObj.captionName}
                    content={{
                      value: dataObj.captionValue,
                      placeholder: dataObj.captionPlaceholder,
                      maxLength: 300,
                    }}
                    asEmphasis="listInput"
                    withColor={props.withColor}
                    onClick={(captionName, captionValue) =>
                      handleCaption(captionName, captionValue)
                    }
                  />
                )}
                {optionType === "title-outline-button" && (
                  <div className="qui-option-item-button">
                    <Button
                      asSize="normal"
                      asPadded="fitted"
                      content="outlined button"
                      asVariant="warning"
                      asEmphasis="outlined"
                      asFloated="left"
                      withTranslation={null}
                      withAnimation={null}
                      onClick={props.onClick}
                    />
                  </div>
                )}
                <div className="qui-option-item-close-icon">
                  <i
                    className="qui-option-item-close-icon fas fa-times"
                    id={dataObj.name}
                    onClick={(e) => handleRemove(e)}
                  ></i>
                </div>
              </div>
              {optionType === "option-picture-with-message" && (
                <div className="qui-option-item-message-field">
                  <InputField
                    name={dataObj.messageName}
                    content={{
                      value: dataObj.messageValue,
                      placeholder: dataObj.messagePlaceholder,
                      maxLength: 300,
                    }}
                    asEmphasis="listInput"
                    withColor={props.withColor}
                    onClick={(name, value) => console.log(name, value)}
                  />
                  <div className="qui-option-item-close-icon"></div>
                </div>
              )}
            </div>
            // <>

            // </>
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
