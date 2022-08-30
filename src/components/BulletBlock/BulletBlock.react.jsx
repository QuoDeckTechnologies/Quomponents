// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import _ from "lodash";
import { getQuommons } from "../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./BulletBlock.scss";
import "../../common/stylesheets/overrule.scss";

BulletBlock.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
  BulletBlock data should be passed in content field and it is required field  
  */
  content: PropTypes.arrayOf(PropTypes.string),
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
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
  }),
  /**
  Use to show/hide the component
  */
  isHidden: PropTypes.bool,
  /**
  Use to toggle the component taking the full width of the parent container
  */
  isFluid: PropTypes.bool,
};

BulletBlock.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  content: [],
  //=======================================
  // Quommon props
  //=======================================
  asSize: "small",
  asPadded: "normal",
  asFloated: "inline",
  asAligned: "left",
  withColor: null,
  isHidden: false,
  isFluid: false,
};

function getColors(colors) {
  let colorStyle = {
    textColors: {
      color: colors.textColor,
    },
    backgroundColors: {
      backgroundColor: colors.backgroundColor,
    },
  };
  return colorStyle;
}
/**
## Notes
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function BulletBlock(props) {
  //-------------------------------------------------------------------
  // 1. Set the classes
  //-------------------------------------------------------------------s
  let quommonClasses = getQuommons(props, "bulletblock");
  quommonClasses.childClasses += ` variant-${props.asVariant}-text`;
  //-------------------------------------------------------------------
  // 2. Set the component colors
  //-------------------------------------------------------------------
  let colors = props.withColor ? getColors(props.withColor) : {};

  // ========================= Render Function =================================
  return (
    <motion.div
      className={`qui ${quommonClasses.parentClasses}`}
      style={colors.backgroundColors}
    >
      <div className={` ${quommonClasses.childClasses}`}>
        {_.map(props.content, (item, index) => {
          return (
            <div
              className="qui-bulletblock-item"
              style={colors.textColors}
              key={index}
            >
              <ul>
                <li>{item}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
