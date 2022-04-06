// Import npm packages
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Checkbox } from "@mui/material";
import { getQuommons, getAnimation } from "../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./CheckBox.scss";
import "../../common/stylesheets/overrule.scss";

CheckBox.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
    CheckBox Text has to be in content prop.
    */
  content: PropTypes.shape({
    label: PropTypes.string,
    checked: PropTypes.bool,
  }),
  //=======================================
  // Quommon props
  //=======================================
  /**
    Use to define component text size in increasing order
    */
  asSize: PropTypes.oneOf(["tiny", "normal", "huge"]),
  /**
    Use to float the component in parent container
    */
  asFloated: PropTypes.oneOf(["left", "right", "none", "inline"]),
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
    Use to show/hide the component
    */
  isHidden: PropTypes.bool,
  /**
    Use to enable/disable the component
    */
  isDisabled: PropTypes.bool,
  /**
   CheckBox component must have the onClick function passed as props to return label of the checkbox and checked/unchecked status
    */
  onClick: PropTypes.func.isRequired,
};

CheckBox.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  content: {},
  //=======================================
  // Quommon props
  //=======================================
  asSize: "normal",
  asFloated: "left",
  withColor: null,
  withAnimation: null,
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
  // 1. Destructuring content and withColor prop
  //-------------------------------------------------------------------
  const { content, withColor } = props;
  //-------------------------------------------------------------------
  // 2. Defining states and hooks
  //-------------------------------------------------------------------
  const [isChecked, setIsChecked] = useState(content.checked);
  useEffect(() => {
    setIsChecked(content.checked);
  }, [content.checked]);
  //-------------------------------------------------------------------
  // 3. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "check-box");
  //-------------------------------------------------------------------
  // 4. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props.withAnimation);
  //-------------------------------------------------------------------
  // 5. Get size of the chekbox
  //-------------------------------------------------------------------
  const getSize = () => {
    if (props.asSize === "tiny") return "small";
    if (props.asSize === "normal") return "medium";
    else return "large";
  };

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
          id="qui-check-box-element"
          disabled={props.isDisabled}
          size={getSize()}
          value={content?.label}
          onChange={(e) => {
            setIsChecked((prevState) => !prevState);
            props.onClick({ value: e.target.value, checked: e.target.checked });
          }}
        />
        <label
          htmlFor="qui-check-box-element"
          className="qui-check-box-element"
        >
          <h4 style={{ color: withColor?.textColor }}>{content?.label}</h4>
        </label>
      </div>
    </motion.div>
  );
}
