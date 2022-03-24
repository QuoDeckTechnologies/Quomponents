// Import npm packages
import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import _ from "lodash";
import { getTranslation, getQuommons } from "../../common/javascripts/helpers";
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
  ArcMenu icons can be passed with content prop
  */
  content: PropTypes.shape({
    arcIcon: PropTypes.string,
    menuData: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        icon: PropTypes.string,
      })
    ),
  }).isRequired,
  /**
  Use to toggle usage of ArcMenu as a menu button, add button or close button
  */
  type: PropTypes.oneOf(["menu", "add", "close"]),
  /**
  Use to toggle position of ArcMenu
  */
  position: PropTypes.string,
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
  content: {
    menuData: [],
  },
  arcIcon: "",
  type: "close",
  position: "top-right",
  //=======================================
  // Quommon props
  //=======================================
  asSize: "normal",
  asVariant: "primary",
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

/**
## Notes
- ArcMenu must be used as last child of `qui` parent class
- The design system used for this component is HTML and CSS
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- Icons can be changed from content prop
**/
export default function ArcMenu(props) {
  const { content } = props
  const [openMenu, setOpenMenu] = useState(false);
  //-------------------------------------------------------------------
  // 1. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "arc-menu");
  // quommonClasses.childClasses += ' size-normal'
  //-------------------------------------------------------------------
  // 2. Set the component colors
  //-------------------------------------------------------------------
  let colors = props.withColor ? getColors(props.withColor) : {};

  const slideUp = {
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
      y: "100vh",
      opacity: 0,
    },
  };
  const slideDown = {
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
      y: "-100vh",
      opacity: 0,
    },
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
  // ========================= Render Function =================================

  return (
    <div className={`qui ${quommonClasses.parentClasses}`}>
      <Backdrop
        open={openMenu}
        className='qui-arc-menu-backdrop'
        onClick={() => setOpenMenu((prevState) => !prevState)}
        sx={{ zIndex: 10 }}
      ></Backdrop>
      <div className={quommonClasses.childClasses}>
        <div
          className={`qui-arc ${getPosition(props.position)}`}
          style={{ borderColor: colors.borderColor }}
        >
          {props.type !== "close" ? (
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
          ) : (
            <button
              className={`qui-arc-menu-button qui-arc-menu-close-button ${quommonClasses.childClasses}`}
              style={{ backgroundColor: colors.backgroundColor }}
              onClick={(e) => props.onClick(e)}
            >
              <i
                className={`qui-arch-icon fas fa-times`}
                style={{ color: colors.color }}
              ></i>
            </button>
          )}
          {props.type !== "close" && (
            <motion.div
              variants={props.position.includes('bottom') ? slideUp : slideDown}
              initial={false}
              animate={openMenu ? "visible" : "exit"}
              exit="exit"
              className={`qui-arc-menu-buttons `}
            >
              {_.map(content.menuData, (dataObj, i) => {
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
