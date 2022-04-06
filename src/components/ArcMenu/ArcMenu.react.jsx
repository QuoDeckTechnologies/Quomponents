// Import npm packages
import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Backdrop from "@mui/material/Backdrop";
import _ from "lodash";
import { getQuommons } from "../../common/javascripts/helpers";
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
  ArcMenu `menu` data can be passed within menuContent array prop
  */
  menuContent: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string,
      list: PropTypes.arrayOf[PropTypes.string],
    })
  ),
  /**
  ArcMenu `nugget-menu` images can be passed within nuggetContent array prop
  */
  nuggetContent: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
    })
  ),
  /**
  Use to change the type of menu ArcMenu opens, a `close` , `menu`, `add` or `nugget-menu`
  */
  type: PropTypes.oneOf(["close", "menu", "add", "nugget-menu"]),
  /**
  Use to change the icon of ArcMenu as `close` , `menu` or `add`
  */
  arcIcon: PropTypes.oneOf(["close", "menu", "add"]).isRequired,
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
  // /**
  // Use to define component size in increasing order
  // */
  // asSize: PropTypes.oneOf([
  //   "tiny",
  //   "small",
  //   "normal",
  //   "big",
  //   "huge",
  //   "massive",
  // ]),
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
  For `nugget-menu` type, it outputs index of nugget images provided
  For `menu` type, it outputs value of the list item
  */
  onClick: PropTypes.func.isRequired,
};

ArcMenu.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  menuContent: [],
  nuggetContent: [],
  type: "close",
  position: "top-right",
  //=======================================
  // Quommon props
  //=======================================
  // asSize: "normal",
  withTranslation: null,
  isDisabled: false,
  isHidden: false,
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
  const { menuContent, nuggetContent, arcIcon } = props;
  const [openMenu, setOpenMenu] = useState(false);
  //-------------------------------------------------------------------
  // 2. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "arc-menu");
  const getIcon = (icon) => {
    if (icon === "menu") {
      return (
        <div className="qui-arc-icon-menu-wrapper">
          <div className="qui-arc-icon-fragment-top">
            <div className="qui-arc-icon-fragment-left"></div>
            <div className="qui-arc-icon-fragment-right"></div>
          </div>
          <div className="qui-arc-icon-fragment-bottom">
            <div className="qui-arc-icon-fragment-right"></div>
            <div className="qui-arc-icon-fragment-left"></div>
          </div>
        </div>
      );
    }
    if (icon === "close") {
      return <i className={`qui-arc-icon qui-arc-close-icon fas fa-times`}></i>;
    }
    return (
      <div className="qui-add-icon-wrapper">
        <i className={`qui-arc-icon fas fa-plus`}></i>
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
        <div className={`qui-arc ${getPosition(props.position)}`}>
          {(props.type === "nugget-menu" || props.type === "menu") && (
            <button
              className={`qui-arc-menu-button qui-btn ${quommonClasses.childClasses}`}
              onClick={() => setOpenMenu((prevState) => !prevState)}
            >
              {getIcon(arcIcon)}
            </button>
          )}
          {(props.type === "close" || props.type === "add") && (
            <button
              className={`qui-arc-menu-button qui-arc-menu-${props.type}-button ${quommonClasses.childClasses}`}
              onClick={(e) => props.onClick(e)}
            >
              {getIcon(arcIcon)}
            </button>
          )}
          {props.type === "nugget-menu" && (
            <motion.div
              variants={getMenuAnimation(props.position)}
              initial={false}
              animate={openMenu ? "visible" : "exit"}
              exit="exit"
              className={`qui-arc-menu-buttons `}
            >
              {_.map(nuggetContent, (dataObj, i) => {
                return (
                  <div
                    className={`qui-menu-button qui-arc-menu-nugget-menu ${quommonClasses.childClasses}`}
                    key={i}
                  >
                    <NuggetBlock
                      image={dataObj?.image}
                      status="none"
                      asSize="huge"
                      asPadded="fitted"
                      onClick={() => {
                        props.onClick(dataObj?.link)
                        setOpenMenu(false)
                      }}
                    />
                  </div>
                );
              })}
            </motion.div>
          )}
          {props.type === "menu" && (
            <motion.div
              variants={getMenuAnimation(props.position)}
              initial={false}
              animate={openMenu ? "visible" : "exit"}
              exit="exit"
              className={`qui-arc-menu-buttons qui-arc-menu-menu`}
            >
              {_.map(menuContent, (dataObj, i) => {
                return (
                  <div
                    className={`qui-menu-button qui-arc-menu-header ${quommonClasses.childClasses}`}
                    key={i}
                  >
                    {dataObj.header?.toUpperCase()}
                    <div className="qui-arc-menu-list-item-container">
                      {dataObj.list.map((listItem, index) => (
                        <div
                          className="qui-arc-menu-list-item"
                          onMouseDown={() => {
                            props.onClick(listItem)
                            setOpenMenu(false)
                          }}
                          key={listItem + index}
                        >
                          {listItem.toUpperCase()}
                        </div>
                      ))}
                    </div>
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
