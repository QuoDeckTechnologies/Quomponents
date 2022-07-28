// Import npm packages
import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Backdrop from "@mui/material/Backdrop";
import { getQuommons } from "../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./ArcMenu.scss";
import "../../common/stylesheets/overrule.scss";

ArcMenu.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
  Use to change the type of menu ArcMenu opens, a `close` , `menu`or  `add`
  */
  asEmphasis: PropTypes.oneOf(["close", "menu", "add"]),
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
  Use to add an icon to the component
  */
  withIcon: PropTypes.shape({
    icon: PropTypes.string,
    size: PropTypes.string,
  }),
  /**
  Use to override component colors of menu when `asEmphasis` is `menu`
  */
  withColor: PropTypes.shape({
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    accentColor: PropTypes.string,
    hoverBackgroundColor: PropTypes.string,
    hoverTextColor: PropTypes.string,
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
  ArcMenu component must have the onClick function passed as props
  For `menu` asEmphasis, it return title of the list item
  */
  onClick: PropTypes.func,
};

ArcMenu.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  asEmphasis: "close",
  position: "top-right",
  //=======================================
  // Quommon props
  //=======================================
  asVariant: "primary",
  withIcon: null,
  withColor: null,
  withTranslation: null,
  isDisabled: false,
  isHidden: false,
};
//-------------------------------------------------------------------
// ArcMenu position handler
//-------------------------------------------------------------------
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
//-------------------------------------------------------------------
// menu animation handler
//-------------------------------------------------------------------
const getMenuAnimation = (position) => {
  let animate = {
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "linear",
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
- ArcMenu must be used as a child of `qui` parent class
- The design system used for this component is HTML and CSS
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function ArcMenu(props) {
  //-------------------------------------------------------------------
  // 1. Destructuring props and defining states
  //-------------------------------------------------------------------
  const { withColor, withIcon, asEmphasis } = props;
  const [openMenu, setOpenMenu] = useState(false);
  const [hovered, setHovered] = useState(false);
  //-------------------------------------------------------------------
  // 2. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "arc-menu");
  //-------------------------------------------------------------------
  // 4. Get icon for button
  //-------------------------------------------------------------------
  const getIcon = (icon) => {
    return withIcon?.icon ? (
      <i
        style={{ color: withColor?.textColor, fontSize: withIcon?.size }}
        className={`qui-arc-icon qui-arc-close-icon ${withIcon?.icon}`}
      ></i>
    ) : icon === "menu" ? (
      <div className="qui-arc-icon-menu-wrapper">
        <div className="qui-arc-icon-fragment-top">
          <div
            style={{ backgroundColor: withColor?.accentColorPrimary }}
            className="qui-arc-icon-fragment-left"
          ></div>
          <div
            style={{ backgroundColor: withColor?.accecntColorSecondary }}
            className="qui-arc-icon-fragment-right"
          ></div>
        </div>
        <div className="qui-arc-icon-fragment-bottom">
          <div
            style={{ backgroundColor: withColor?.accecntColorSecondary }}
            className="qui-arc-icon-fragment-right"
          ></div>
          <div
            style={{ backgroundColor: withColor?.accentColorPrimary }}
            className="qui-arc-icon-fragment-left"
          ></div>
        </div>
      </div>
    ) : icon === "close" ? (
      <i
        style={{ color: withColor?.textColor }}
        className={`qui-arc-icon qui-arc-close-icon fas fa-times`}
      ></i>
    ) : (
      <div className="qui-add-icon-wrapper">
        <i
          style={{ color: withColor?.textColor }}
          className={`qui-arc-icon fas fa-plus`}
        ></i>
      </div>
    );
  };

  // ========================= Render Function =================================

  return (
    <div className={`qui ${quommonClasses.parentClasses}`}>
      <Backdrop
        open={openMenu}
        className="qui-arc-menu-backdrop"
        onClick={() => setOpenMenu(false)}
        sx={{ zIndex: 10 }}
      ></Backdrop>
      <div className={quommonClasses.childClasses}>
        <div
          style={{ borderColor: withColor?.accentColor }}
          className={`qui-arc ${getPosition(props.position)}`}
        >
          {props.asEmphasis === "menu" && (
            <button
              style={
                hovered
                  ? {
                      backgroundColor: withColor?.hoverBackgroundColor,
                      color: withColor?.hoverTextColor,
                    }
                  : {
                      backgroundColor: withColor?.backgroundColor,
                      color: withColor?.textColor,
                    }
              }
              className={`qui-arc-menu-button qt-shadow qui-btn ${quommonClasses.childClasses}`}
              onClick={() => setOpenMenu((prevState) => !prevState)}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              {getIcon(asEmphasis)}
            </button>
          )}
          {(props.asEmphasis === "close" || props.asEmphasis === "add") && (
            <button
              style={
                hovered
                  ? {
                      backgroundColor: withColor?.hoverBackgroundColor,
                      color: withColor?.hoverTextColor,
                    }
                  : {
                      backgroundColor: withColor?.backgroundColor,
                      color: withColor?.textColor,
                    }
              }
              className={`qui-arc-menu-button qt-shadow qui-arc-menu-${props.asEmphasis}-button qui-btn ${quommonClasses.childClasses}`}
              onClick={(e) => props.onClick(e)}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              {getIcon(asEmphasis)}
            </button>
          )}
          {props.asEmphasis === "menu" && (
            <motion.div
              variants={getMenuAnimation(props.position)}
              initial={false}
              animate={openMenu ? "visible" : "exit"}
              exit="exit"
              className={`qui-arc-menu-buttons qui-arc-${props.asEmphasis}-menu`}
            >
              {props.children}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
