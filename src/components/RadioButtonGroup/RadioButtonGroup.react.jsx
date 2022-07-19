// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { getQuommons } from "../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "../../common/stylesheets/overrule.scss";
import RadioGroup from "@mui/material/RadioGroup";

RadioButtonButton.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
  Use to define name of the component
  */
  children: PropTypes.node,
  /**
  Use to define name of the component
  */
  value: PropTypes.string,
};

RadioButtonButton.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  children: <></>,
  value: "default",
};

/**
## Notes
- The design system used for this component is Material UI (@mui/material)
**/
export default function RadioButtonButton(props) {
  //-------------------------------------------------------------------
  // 1. Destructuring props
  //-------------------------------------------------------------------
  const { value } = props;
  //-------------------------------------------------------------------
  // 2. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "radio-button-group");

  // ========================= Render Function =================================

  return (
    <div className={`qui ${quommonClasses.parentClasses}`}>
      <RadioGroup name="radio-buttons-group" value={value}>
        {props.children}
      </RadioGroup>
    </div>
  );
}
