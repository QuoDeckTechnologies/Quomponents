// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { FormControlLabel, Radio } from "@mui/material";
import {
  getQuommons,
  getTranslation,
  getAnimation,
} from "../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "../../common/stylesheets/overrule.scss";

RadioButton.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
  Use to define targetName of the radio component
  */
  targetName: PropTypes.string,
  /**
  Use to define content of the radio component
  */
  content: PropTypes.string,
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
  Use to override component colors and behavior
  */
  withColor: PropTypes.shape({
    textColor: PropTypes.string,
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
  RadioButton component must have the onClick function passed as props
  */
  onClick: PropTypes.func.isRequired,
};

RadioButton.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  targetName: "default-name",
  content: "radio",
  //=======================================
  // Quommon props
  //=======================================
  asSize: "normal",
  asPadded: "normal",
  asFloated: "none",
  asAligned: "center",
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
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- MUI props are not being passed to the button. Please speak to the admin to handle any new MUI prop.
**/
export default function RadioButton(props) {
  //-------------------------------------------------------------------
  // 1. Destructuring props
  //-------------------------------------------------------------------
  const { targetName, content, withColor, asSize } = props;
  //-------------------------------------------------------------------
  // 2. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "radio-button");
  //-------------------------------------------------------------------
  // 3. Translate the text objects in case their is a dictionary provided
  //-------------------------------------------------------------------
  const tObj = getTranslation(props.withTranslation);
  //-------------------------------------------------------------------
  // 4. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props);
  //-------------------------------------------------------------------
  // 5. Function to get radio size
  //-------------------------------------------------------------------
  const getSize = () => {
    switch (asSize) {
      case "tiny":
        return "0.8em";
      case "small":
        return "0.9em";
      case "normal":
        return "1em";
      case "big":
        return "1.1em";
      case "huge":
        return "1.2em";
      default:
        return "1.3em";
    }
  };

  // ========================= Render Function =================================

  return (
    <motion.div
      initial={animate?.from}
      animate={animate?.to}
      className={`qui ${quommonClasses.parentClasses}`}
    >
      <div className={`qui-radio-container ${quommonClasses.childClasses}`}>
        <FormControlLabel
          className="qui-radio-button"
          value={targetName}
          sx={{
            "& .MuiFormControlLabel-label": {
              fontSize: getSize(),
            },
          }}
          style={{ color: withColor?.textColor }}
          control={
            <Radio
              sx={{
                "& .MuiSvgIcon-root": {
                  fontSize: getSize(),
                },
              }}
              style={{ color: withColor?.accentColor }}
              onChange={(e) => {
                props.onClick(e.target.value, e.target.checked);
              }}
            />
          }
          label={tObj ? tObj.content : content}
        />
      </div>
    </motion.div>
  );
}
