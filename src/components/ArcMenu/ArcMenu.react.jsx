// Import npm packages
import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Backdrop from "@mui/material/Backdrop";
import { getAnimation, getQuommons } from "../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./ArcMenu.scss";
import "../../common/stylesheets/overrule.scss";

ArcMenu.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
  ArcMenu component can take children for menu
  */
  children: PropTypes.node,
  /**
  Use to toggle position of ArcMenu
  */
  menuPosition: PropTypes.oneOf([
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
    position: PropTypes.oneOf(["left", "right"]),
  }),
  /**
  Use to override component colors 
  */
  withColor: PropTypes.shape({
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    accentColor: PropTypes.string,
    hoverBackgroundColor: PropTypes.string,
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
  Use to enable/disable the component
  */
  isDisabled: PropTypes.bool,
  /**
  Use to show/hide the component
  */
  isHidden: PropTypes.bool,
  /**
  ArcMenu component must have the onClick function passed as props
  */
  onClick: PropTypes.func,
};

ArcMenu.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  menuPosition: "top-right",
  //=======================================
  // Quommon props
  //=======================================
  asVariant: "primary",
  withIcon: null,
  withColor: null,
  withAnimation: null,
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
// menu and nugget-menu animation handler
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
  if (position?.includes("bottom")) {
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
  // 1. Defining component states
  //-------------------------------------------------------------------
  const [openMenu, setOpenMenu] = useState(false);
  const [hovered, setHovered] = useState(false);
  //-------------------------------------------------------------------
  // 2. Destructuring props and defining states
  //-------------------------------------------------------------------
  const { withColor, withIcon } = props;
  //-------------------------------------------------------------------
  // 3. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "arc-menu");
  //-------------------------------------------------------------------
  // 4. Function to handle onClick props with children
  //-------------------------------------------------------------------
  const handleClick = () => {
    if (props.children) {
      setOpenMenu((prevState) => !prevState);
    } else props.onClick();
  };
  //-------------------------------------------------------------------
  // 7. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props);
  // ========================= Render Function =================================

  return (
    <motion.div
      initial={animate?.from}
      animate={animate?.to}
      className={`qui ${quommonClasses.parentClasses}`}
    >
      <Backdrop
        open={openMenu}
        className="qui-arc-menu-backdrop"
        onClick={() => setOpenMenu(false)}
        sx={{ zIndex: 10 }}
      ></Backdrop>
      <div className={quommonClasses.childClasses}>
        <div
          style={{ borderColor: withColor?.accentColor }}
          className={`qui-arc ${getPosition(props.menuPosition)}`}
        >
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
            onClick={handleClick}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {withIcon?.icon && (
              <i
                className={`qui-arc-icon qui-icon ${withIcon?.icon}`}
                style={{ fontSize: withIcon?.size }}
              ></i>
            )}
          </button>
          <motion.div
            variants={getMenuAnimation(props.menuPosition)}
            initial={false}
            animate={openMenu ? "visible" : "exit"}
            exit="exit"
            className={`qui-arc-menu-buttons qui-arc-menu-options`}
          >
            {props.children}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
