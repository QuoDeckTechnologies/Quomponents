// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
  getAnimation,
  getQuommons,
} from "../../../common/javascripts/helpers.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./SerialPlayerRewardsTableRow.scss";
import "../../../common/stylesheets/overrule.scss";
import Button from "../../Buttons/Button/Button.react";

SerialPlayerRewardsTableRow.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
    SerialPlayerRewardsTableRow content should be passed in content field and it is a required field
    */
  content: PropTypes.shape({
    name: PropTypes.string,
    contact: PropTypes.string,
    label: PropTypes.string,
    company: PropTypes.string,
  }).isRequired,
  //=======================================
  // Quommon props
  //=======================================
  /**
    Use to define standard component type
    */
  asVariant: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "warning",
    "error",
  ]),
  /**
    Use to override component colors and behavior
    */
  withColor: PropTypes.shape({
    textColor: PropTypes.string,
    buttonTextColor: PropTypes.string,
    buttonBackgroundColor: PropTypes.string,
    buttonHoverBackgroundColor: PropTypes.string,
    buttonHoverTextColor: PropTypes.string,
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
    Anagram component must have the onClick function passed as props
    */
  onClick: PropTypes.func.isRequired,
};

SerialPlayerRewardsTableRow.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  content: {},
  //=======================================
  // Quommon props
  //=======================================
  asVariant: "primary",
  withColor: null,
  withAnimation: null,
  isHidden: false,
};
/**
## Notes
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- Displays a SerialPlayerRewardsTableRow with name, id , contact number , company name and points.
**/
export default function SerialPlayerRewardsTableRow(props) {
  let { content, withColor } = props
  //-------------------------------------------------------------------
  // Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "spr-table-row");
  quommonClasses.childClasses += ` variant-${props.asVariant}-text`;
  //-------------------------------------------------------------------
  // Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props.withAnimation);

  let buttonColors = {
    textColor: props.withColor?.buttonTextColor,
    backgroundColor: props.withColor?.buttonBackgroundColor,
    hoverBackgroundColor: props.withColor?.buttonHoverBackgroundColor,
    hoverTextColor: props.withColor?.buttonHoverTextColor
  }

  // ========================= Render Function =================================
  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className={`qui ${quommonClasses.parentClasses}`}
    >
      <div className="qui-spr-table-row-card">
        <div className="qui-spr-name" style={{ color: withColor?.textColor }}>{content?.name}</div>
        <div className="qui-spr-contact" style={{ color: withColor?.textColor }}>{content?.contact}</div>
        <div className="qui-spr-company" style={{ color: withColor?.textColor }}>{content?.company}</div>
        <div className="qui-spr-label" style={{ color: withColor?.textColor }}>{content?.label}</div>
        <Button {...props}
          content={"Dispatch"}
          withColor={buttonColors}
          onClick={(e) => props.onClick(e)} >
        </Button>
        <input type="radio" className="qui-spr-input-radio" />
      </div>
    </motion.div>
  );
}