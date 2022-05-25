// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
  getAnimation,
  getQuommons,
} from "../../common/javascripts/helpers.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./SerialPlayerRewardsTableRow.scss";
import "../../common/stylesheets/overrule.scss";
import Button from "../Buttons/Button/Button.react";
import IconBlock from "../IconBlock/IconBlock.react"

SerialPlayerRewardsTableRow.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
    SerialPlayerRewardsTableRow content should be passed in content field and it is a required field
    */
  content: PropTypes.shape({
    name: PropTypes.string,
    phone: PropTypes.string,
    reward: PropTypes.string,
    cohort: PropTypes.string,
    status: PropTypes.oneOf(["dispatched", "dispatch"])
  }).isRequired,

  /**
  Use to add an icon to the component
  */
  withIcon: PropTypes.shape({
    name: PropTypes.string,
    size: PropTypes.string,
    position: PropTypes.string
  }),
  //=======================================
  // Quommon props
  //=======================================
  /**
    Use to override component colors and behavior
    */
  withColor: PropTypes.shape({
    textColor: PropTypes.string,
    buttonTextColor: PropTypes.string,
    iconColor: PropTypes.string,
    dispatchButtonBackgroundColor: PropTypes.string,
    dispatchButtonBackgroundColorM: PropTypes.string,
    dispatchedButtonBackgroundColor: PropTypes.string,
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
  withIcon: {},
  //=======================================
  // Quommon props
  //=======================================
  withColor: null,
  withAnimation: null,
  isHidden: false,
};
/**
## Notes
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- Displays a SerialPlayerRewardsTableRow with name, reward , phone, cohort, button and iconBlock.
**/
export default function SerialPlayerRewardsTableRow(props) {
  let { content, withColor } = props
  //-------------------------------------------------------------------
  // Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "spr-table-row");
  //-------------------------------------------------------------------
  // Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props.withAnimation);

  let buttonColorsD = {
    textColor: withColor?.buttonTextColor,
    backgroundColor: content.status === "dispatch" ? withColor?.dispatchButtonBackgroundColor : withColor?.dispatchedButtonBackgroundColor,
    hoverBackgroundColor: content.status === "dispatch" ? withColor?.dispatchButtonBackgroundColor : withColor?.dispatchedButtonBackgroundColor,
    hoverTextColor: withColor?.buttonTextColor
  }
  let buttonColorsM = {
    backgroundColor: content.status === "dispatch" ? withColor?.dispatchButtonBackgroundColorM : withColor?.dispatchedButtonBackgroundColor,
    accentColor: withColor?.iconColor,
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
        <div className="qui-spr-phone" style={{ color: withColor?.textColor }}>{content?.phone}</div>
        <div className="qui-spr-cohort" style={{ color: withColor?.textColor }}>{content?.cohort}</div>
        <div className="qui-spr-reward" style={{ color: withColor?.textColor }}>{content?.reward}</div>

        <Button {...props}
          content={content?.status === "dispatch" ? "Dispatch" : "Dispatched"}
          withColor={buttonColorsD}
          onClick={(e) => props.onClick(e)} >
        </Button>
        <div className="qui-spr-button-m">
          <IconBlock
            withIcon={props?.withIcon}
            withColor={buttonColorsM}
            onClick={(e) => props.onClick(e)} />
        </div>
      </div>
    </motion.div >
  );
}