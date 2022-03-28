// Import npm packages
import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import _ from "lodash";
import { getQuommons } from "../../common/javascripts/helpers";
import Backdrop from "@mui/material/Backdrop";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./ArcMenu.scss";
import "../../common/stylesheets/overrule.scss";
import NuggetBlock from "../NuggetBlock/NuggetBlock.react";

ArcMenu.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
  ArcMenu `menu` images can be passed within content array prop
  */
  content: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
    })
  ).isRequired,
  /**
  ArcMenu icon can be passed with `arcIcon` prop to override default icon
  */
  arcIcon: PropTypes.string,
  /**
  Use to toggle type of ArcMenu as a `close` , `menu`  or `add`
  */
  type: PropTypes.oneOf(["close", "menu", "add"]),
  /**
  Use to toggle position of ArcMenu
  */
  position: PropTypes.oneOf([
    "top-right",
    "top-left",
    "bottom-right",
    "bottom-left",
  ]),
  //=======================================
  // Quommon props
  //=======================================
  /**
  Use to define component size in increasing order
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
  Use to override component colors and behavior
  */
  withColor: PropTypes.shape({
    backgroundColor: PropTypes.string,
    accentColor: PropTypes.string,
    textColor: PropTypes.string,
  }),
  /**
  Use to enable/disable the component
  */
  isDisabled: PropTypes.bool,
  /**
  Use to show/hide the component
  */
  isHidden: PropTypes.bool,
  /**
  Button component must have the onClick function passed as props
  */
  onClick: PropTypes.func.isRequired,
};

ArcMenu.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  content: [],
  arcIcon: "",
  type: "close",
  position: "top-right",
  //=======================================
  // Quommon props
  //=======================================
  asSize: "normal",
  withColor: null,
  withTranslation: null,
  isDisabled: false,
  isHidden: false,
};

const getColors = (withColor) => {
  let colors = {
    backgroundColor: withColor.backgroundColor,
    borderColor: withColor.accentColor,
    color: withColor.textColor,
  };
  return colors;
};

const getPosition = (position) => {
  if (position === "top-right") {
    return "qui-top-right";
  }
  if (position === "top-left") {
    return "qui-top-left";
  }
  if (position === "bottom-right") {
    return "qui-bottom-right";
  }
  if (position === "bottom-left") {
    return "qui-bottom-left";
  }
  return "qui-top-right";
};
const getMenuAnimation = (position) => {
  let animate = {
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "",
      opacity: 0,
    },
  };
  if (position.includes("bottom")) {
    animate.exit.y = "100vh";
  } else {
    animate.exit.y = "-100vh";
  }
  return animate;
};
/**
## Notes
- ArcMenu must be used as last child of `qui` parent class
- The design system used for this component is HTML and CSS
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function ArcMenu(props) {
  const { content } = props;
  const [openMenu, setOpenMenu] = useState(false);
  //-------------------------------------------------------------------
  // 1. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "arc-menu");
  //-------------------------------------------------------------------
  // 2. Set the component colors
  //-------------------------------------------------------------------
  let colors = props.withColor ? getColors(props.withColor) : {};

  // ========================= Render Function =================================

  return (
    <div className={`qui ${quommonClasses.parentClasses}`}>
      <Backdrop
        open={openMenu}
        className="qui-arc-menu-backdrop"
        onClick={() => setOpenMenu((prevState) => !prevState)}
        sx={{ zIndex: 10 }}
      ></Backdrop>
      <div className={quommonClasses.childClasses}>
        <div
          className={`qui-arc ${getPosition(props.position)}`}
          style={{ borderColor: colors.borderColor }}
        >
          {props.type === "menu" && (
            <button
              className={`qui-arc-menu-button qui-btn ${quommonClasses.childClasses}`}
              style={{ backgroundColor: colors.backgroundColor }}
              onClick={() => setOpenMenu((prevState) => !prevState)}
            >
              <i
                className={`qui-arch-icon ${
                  props.arcIcon ? props.arcIcon : "fas fa-bars"
                }`}
                style={{ color: colors.color }}
              ></i>
            </button>
          )}
          {props.type === "close" && (
            <button
              className={`qui-arc-menu-button qui-arc-menu-close-button ${quommonClasses.childClasses}`}
              style={{ backgroundColor: colors.backgroundColor }}
              onClick={(e) => props.onClick(e)}
            >
              <i
                className={`qui-arch-icon ${
                  props.arcIcon ? props.arcIcon : "fas fa-times"
                }`}
                style={{ color: colors.color }}
              ></i>
            </button>
          )}
          {props.type === "add" && (
            <button
              className={`qui-arc-menu-button qui-btn ${quommonClasses.childClasses}`}
              style={{ backgroundColor: colors.backgroundColor }}
              onClick={() => props.onClick(true)}
            >
              <i
                className={`qui-arch-icon ${
                  props.arcIcon ? props.arcIcon : "fas fa-plus"
                }`}
                style={{ color: colors.color }}
              ></i>
            </button>
          )}
          {props.type === "menu" && (
            <motion.div
              variants={getMenuAnimation(props.position)}
              initial={false}
              animate={openMenu ? "visible" : "exit"}
              exit="exit"
              className={`qui-arc-menu-buttons `}
            >
              {_.map(content, (dataObj, i) => {
                return (
                  <div
                    className={`qui-menu-button ${quommonClasses.childClasses}`}
                    key={i}
                  >
                    <NuggetBlock
                      image={dataObj.image}
                      status="none"
                      asSize="huge"
                      asPadded="fitted"
                      onClick={() => props.onClick(i)}
                    />
                  </div>
                );
              })}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
