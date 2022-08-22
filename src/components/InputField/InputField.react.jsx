import React, { useState } from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import { motion } from "framer-motion";
import {
  getAnimation,
  getQuommons,
  getTranslation,
} from "../../common/javascripts/helpers";
import "../../common/stylesheets/common.css";
import "./InputField.scss";
import "../../common/stylesheets/overrule.scss";

InputField.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
  Use to below fields to decide InputField's properties
  */
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  isMultiline: PropTypes.bool,
  maxLength: PropTypes.number,
  /**
  Use to define referance name
  */
  name: PropTypes.string.isRequired,
  /**
  Use to set the state of InputField 
  */
  asEmphasis: PropTypes.oneOf([
    "filled",
    "charLimited",
    "listInput",
    "shortField",
  ]),
  //=======================================
  // Quommon props
  //=======================================
  /**
  Use to set Colors in component 
  */
  withColor: PropTypes.shape({
    textColor: PropTypes.string,
    accentColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    hoverTextColor: PropTypes.string,
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
  InputField component must have the onBlur & onSubmit function passed as props
  */
  onBlur: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
};

InputField.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  label: "",
  value: "",
  placeholder: "",
  type: "text",
  isMultiline: false,
  maxLength: 0,
  name: "",
  asEmphasis: "filled",
  //=======================================
  // Quommon props
  //=======================================
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
**/
export default function InputField(props) {
  //-------------------------------------------------------------------
  // 1. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "input-field");
  //-------------------------------------------------------------------
  // 2. Declaration of InputField's value
  //-------------------------------------------------------------------
  let [input, setInput] = useState(props.value);
  let inputCountLength = input?.length;
  let [count, setCount] = useState(inputCountLength);

  function handleChange(e) {
    setInput(e.target.value);
    setCount(e.target.value.length);

    if (e.key === "Enter") {
      e.target.blur();
      props.onSubmit(e.target.name, e.target.value);
    }
    if (e.key === "Escape") {
      e.target.value = "";
    }
  }

  let changeBlur = (e) => {
    props.onBlur(e.target.name, e.target.value);
  };

  //-------------------------------------------------------------------
  // 3. Use to set styling for InputField.
  //-------------------------------------------------------------------

  let outlineStyle = {
    //accent line color
    "& .MuiFilledInput-root:before": {
      borderBottom: `0.3em solid ${props.withColor?.accentColor || "#AAAAAA"}`,
    },
    "& .MuiFilledInput-root:hover:not(.Mui-disable):before": {
      borderBottom: `0.3em solid ${props.withColor?.accentColor || "#AAAAAA"}`,
    },
    "& .MuiFilledInput-root:after": {
      borderBottom: `0.3em solid ${
        props.withColor?.hoverTextColor ||
        props.withColor?.accentColor ||
        "#FFBF00"
      }`,
    },

    //input field background and color
    "& .MuiFilledInput-root": {
      backgroundColor: props.withColor?.backgroundColor || "#AAAAAA29",
      color: props.withColor?.textColor || "#666666",
    },
    "& .MuiFilledInput-root:hover": {
      backgroundColor: props.withColor?.backgroundColor || "#AAAAAA29",
      color: props.withColor?.textColor || "#666666",
    },

    //input field label color
    "& .MuiFormLabel-root": {
      color: props.withColor?.textColor || "#454545",
    },
  };
  //-------------------------------------------------------------------
  // 4. Get translation of the component
  //-------------------------------------------------------------------
  let tObj = null;
  let label = props?.label;
  let placeholder = props?.placeholder;

  if (
    props.withTranslation?.lang &&
    props.withTranslation.lang !== "" &&
    props.withTranslation.lang !== "en"
  ) {
    tObj = getTranslation(props.withTranslation);
    label = tObj?.label || props.label;
    placeholder = tObj?.placeholder || props.placeholder;
  }
  //-------------------------------------------------------------------
  // 5. Use to set state of InputField.
  //-------------------------------------------------------------------
  const { asEmphasis } = props;

  let commonProperties = {
    sx: outlineStyle,
    value: input,
    placeholder: placeholder,
    type: props.type,
    multiline: props.isMultiline,
    variant: "filled",
    name: props.name,
    onBlur: changeBlur,
    onChange: handleChange,
    onKeyDown: handleChange,
  };

  const getInput = (asEmphasis) => {
    if (asEmphasis === "filled") {
      return (
        <TextField {...commonProperties} className="qui-filled" label={label} />
      );
    } else if (asEmphasis === "charLimited") {
      return (
        <div className="qui-char-limited-container">
          {(props.maxLength || props.maxLength >= 0) && (
            <div
              className={
                props.maxLength >= count
                  ? "qui-char-limit-max-length"
                  : "qui-char-limit-ideal-length"
              }
            >
              {`${count}/${props.maxLength}`}
            </div>
          )}
          <TextField
            {...commonProperties}
            className="qui-char-limited"
            variant="filled"
            label={label}
          />
        </div>
      );
    } else if (asEmphasis === "listInput") {
      return (
        <div className="qui-list-input-container">
          {(props.maxLength || props.maxLength >= 0) && (
            <div
              className={
                props.maxLength >= count
                  ? "qui-char-limit-max-length"
                  : "qui-char-limit-ideal-length"
              }
            >
              {`${count}/${props.maxLength}`}
            </div>
          )}
          <TextField {...commonProperties} className="qui-list-input" />
        </div>
      );
    } else {
      return <TextField {...commonProperties} className="qui-short-field" />;
    }
  };
  //-------------------------------------------------------------------
  // 6. Get animation of the component
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
        className={`qui-input-field-container ${quommonClasses.childClasses}`}
      >
        {getInput(asEmphasis)}
      </div>
    </motion.div>
  );
}
