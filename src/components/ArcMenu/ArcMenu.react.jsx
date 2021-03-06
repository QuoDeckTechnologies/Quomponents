// Import npm packages
import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Backdrop from "@mui/material/Backdrop";
import _ from "lodash";
import { getQuommons, getTranslation } from "../../common/javascripts/helpers";
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
      list: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          func: PropTypes.func,
        })
      ),
    })
  ),
  /**
  ArcMenu `nugget-menu` images can be passed within nuggetContent array prop
  */
  nuggetContent: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      func: PropTypes.func,
    })
  ),
  /**
  Use to change the type of menu ArcMenu opens, a `close` , `menu`, `add` or `nugget-menu`
  */
  menuType: PropTypes.oneOf(["close", "menu", "add", "nugget-menu"]),
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
  /**
  Use to override component colors of menu when `menuType` is `menu`
  */
  withColor: PropTypes.shape({
    backgroundColor: PropTypes.string,
    iconColor: PropTypes.string,
    arcColor: PropTypes.string,
    menuBackgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    headingTextColor: PropTypes.string,
    accentColorPrimary: PropTypes.string,
    accecntColorSecondary: PropTypes.string,
  }),
  /**
  Use to show a translated version of the component text. Dictionary must be valid JSON. 
  */
  withTranslation: PropTypes.shape({
    lang: PropTypes.string,
    tgt: PropTypes.string,
    dictionary: PropTypes.string,
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
  For `nugget-menu` menuType, it return name of nugget images provided
  For `menu` menuType, it return title of the list item
  */
  onClick: PropTypes.func,
};

ArcMenu.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  menuContent: [],
  nuggetContent: [],
  menuType: "close",
  position: "top-right",
  //=======================================
  // Quommon props
  //=======================================
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
  const { menuContent, nuggetContent, arcIcon, withColor } = props;
  const [openMenu, setOpenMenu] = useState(false);
  //-------------------------------------------------------------------
  // 2. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "arc-menu");
  //-------------------------------------------------------------------
  // 3. Translate the text objects in case their is a dictionary provided
  //-------------------------------------------------------------------
  let tObj = getTranslation(props.withTranslation);
  //-------------------------------------------------------------------
  // 4. Get icon for button
  //-------------------------------------------------------------------
  const getIcon = (icon) => {
    if (icon === "menu") {
      return (
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
      );
    }
    if (icon === "close") {
      return (
        <i
          style={{ color: withColor?.iconColor }}
          className={`qui-arc-icon qui-arc-close-icon fas fa-times`}
        ></i>
      );
    }
    return (
      <div className="qui-add-icon-wrapper">
        <i
          style={{ color: withColor?.iconColor }}
          className={`qui-arc-icon fas fa-plus`}
        ></i>
      </div>
    );
  };
  //-------------------------------------------------------------------
  // 5. Get menu according to menuType selected
  //-------------------------------------------------------------------
  const getMenu = (menu) => {
    if (menu === "menu") {
      return _.map(tObj?.menuContent || menuContent, (dataObj, i) => {
        return (
          <div
            className={`qui-menu-button qui-arc-menu-header ${quommonClasses.childClasses}`}
            style={{ color: withColor?.headingTextColor }}
            key={i}
          >
            {dataObj.header}
            <div className="qui-arc-menu-list-item-container">
              {dataObj.list.map((listItem, index) => (
                <div
                  className="qui-arc-menu-list-item"
                  onMouseDown={() => {
                    listItem.func();
                    setOpenMenu(false);
                  }}
                  key={listItem.title + index}
                  style={{
                    backgroundColor: withColor?.menuBackgroundColor,
                    color: withColor?.textColor,
                  }}
                >
                  {listItem.title}
                </div>
              ))}
            </div>
          </div>
        );
      });
    } else {
      return _.map(nuggetContent, (dataObj, i) => {
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
                dataObj.func();
                setOpenMenu(false);
              }}
            />
          </div>
        );
      });
    }
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
          style={{ borderColor: withColor?.arcColor }}
          className={`qui-arc ${getPosition(props.position)}`}
        >
          {(props.menuType === "nugget-menu" || props.menuType === "menu") && (
            <button
              style={{ backgroundColor: withColor?.backgroundColor }}
              className={`qui-arc-menu-button qt-shadow qui-btn ${quommonClasses.childClasses}`}
              onClick={() => setOpenMenu((prevState) => !prevState)}
            >
              {getIcon(arcIcon)}
            </button>
          )}
          {(props.menuType === "close" || props.menuType === "add") && (
            <button
              style={{ backgroundColor: withColor?.backgroundColor }}
              className={`qui-arc-menu-button qt-shadow qui-arc-menu-${props.menuType}-button ${quommonClasses.childClasses}`}
              onClick={(e) => props.onClick(e)}
            >
              {getIcon(arcIcon)}
            </button>
          )}
          {(props.menuType === "menu" || props.menuType === "nugget-menu") && (
            <motion.div
              variants={getMenuAnimation(props.position)}
              initial={false}
              animate={openMenu ? "visible" : "exit"}
              exit="exit"
              className={`qui-arc-menu-buttons qui-arc-${props.menuType}-menu`}
            >
              {getMenu(props.menuType)}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
