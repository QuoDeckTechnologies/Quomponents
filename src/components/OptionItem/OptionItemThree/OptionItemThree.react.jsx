// Import npm packages
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { FormControlLabel, Radio } from "@mui/material";
import {
  getAnimation,
  getQuommons,
  getTranslation,
} from "../../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./OptionItemThree.scss";
import "../../../common/stylesheets/overrule.scss";
import OptionalImageField from "../../OptionalImageField/OptionalImageField.react";

OptionItemThree.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
  Use to define OptionItemThree targetName.
  */
  targetName: PropTypes.string,
  /**
  Use to define OptionItemThree image.
  */
  image: PropTypes.object,
  /**
  Use to define OptionItemThree checked props.
  */
  checked: PropTypes.bool,
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
  OptionItemThree component must have the onUpload function passed as props
  */
  onUpload: PropTypes.func.isRequired,
  /**
  OptionItemThree component must have the onSelect function passed as props
  */
  onSelect: PropTypes.func.isRequired,
  /**
  OptionItemThree component must have the onClick function passed as props
  */
  onClick: PropTypes.func.isRequired,
};

OptionItemThree.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  targetName: "Target Name",
  image: null,
  checked: true,
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
export default function OptionItemThree(props) {
  //-------------------------------------------------------------------
  // 1. Destructuring props
  //-------------------------------------------------------------------
  const { targetName, checked, image } = props;
  //-------------------------------------------------------------------
  // 2. Defining states and hooks
  //-------------------------------------------------------------------
  const [uploadImage, setUploadImage] = useState(image);
  const [isChecked, setIsChecked] = useState(checked);
  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);
  //-------------------------------------------------------------------
  // 3. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "option-item-three");
  //-------------------------------------------------------------------
  // 4. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props);
  //-------------------------------------------------------------------
  // 5. Translate the text objects in case their is a dictionary provided
  //-------------------------------------------------------------------
  let tObj = getTranslation(props.withTranslation);
  //-------------------------------------------------------------------
  // 6. Function to change checked state of the component
  //-------------------------------------------------------------------
  const handleRadio = (e) => {
    setIsChecked(e.target.checked);
    props.onSelect(
      targetName ? targetName : "default-target-name",
      uploadImage,
      e.target.checked
    );
  };
  //-------------------------------------------------------------------
  // 7. Function to update value of the input field
  //-------------------------------------------------------------------
  const handleImageUpload = (image) => {
    setUploadImage(image);
    props.onUpload(
      targetName ? targetName : "default-target-name",
      image,
      isChecked
    );
  };
  //-------------------------------------------------------------------
  // 8. Function to return label of the checkbox
  //-------------------------------------------------------------------
  const getLabel = () => {
    if (tObj) return isChecked ? tObj.correct : tObj.incorrect;
    else return isChecked ? "Correct" : "Incorrect";
  };

  // ========================= Render Function =================================

  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className={`qui ${quommonClasses.parentClasses}`}
    >
      <div className="qui-option-item-three-container">
        <div className="qui-option-item-three-radio-container">
          <FormControlLabel
            className="qui-option-item-three-radio"
            value={targetName}
            control={
              <Radio
                name={props.targetName}
                checked={isChecked}
                style={{ color: props.withColor?.accentColor }}
              />
            }
            label={getLabel()}
            onChange={handleRadio}
          />
        </div>
        <div className="qui-option-item-three-upload-button">
          <OptionalImageField
            title={tObj?.uploadButton || "Upload"}
            icon="fas fa-upload"
            actionButton={false}
            onUpload={(image) => handleImageUpload(image)}
            withColor={{ ...props.withColor }}
          />
        </div>
        <div className="qui-option-item-three-close-icon">
          <i
            className="qui-option-item-three-icon fas fa-times"
            data-id={targetName}
            onClick={(e) => props.onClick(e.target.dataset.id)}
          ></i>
        </div>
      </div>
    </motion.div>
  );
}
