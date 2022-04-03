// Import npm packages
import React from "react";
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
    CheckBox Text has to be in label or passed as children to the component. Is optional if you only want an icon.
    */
  label: PropTypes.string,
  /**
    Use to check/uncheck the component
    */
  checked: PropTypes.bool,
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
    Use to toggle the component taking the full width of the parent container
    */
  isFluid: PropTypes.bool,
  /**
    CheckBox component must have the onClick function passed as props to return checked/unchecked status and label of the checkbox
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
  withAnimation: null,
  isHidden: false,
  isDisabled: false,
  isFluid: false,
};
/**
## Notes
- The design system used for this component is Material UI (@mui/material)
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function CheckBox(props) {
  //-------------------------------------------------------------------
  // 1. Destructuring label prop
  //-------------------------------------------------------------------
  const { label } = props;
  //-------------------------------------------------------------------
  // 2. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "check-box");
  //-------------------------------------------------------------------
  // 3. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props.withAnimation);
  //-------------------------------------------------------------------
  // 4. Get size of the chekbox
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
          defaultChecked={props.checked}
          id="qui-check-box-element"
          disabled={props.isDisabled}
          size={getSize()}
          value={label}
          onChange={(e) => props.onClick(e)}
        />
        <label
          htmlFor="qui-check-box-element"
          className="qui-check-box-element"
        >
          <h4>{label}</h4>
        </label>
      </div>
    </motion.div>
  );
}
