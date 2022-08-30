// Import npm packages
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Backdrop from "@mui/material/Backdrop";
import { getAnimation, getQuommons } from "../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./ContentTableRow.scss";
import "../../common/stylesheets/overrule.scss";

ContentTableRow.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
  ContentTableRow can accept another component which is rendered when menu icon is clicked
  */
  children: PropTypes.element,
  /**
  ContentTableRow data should be passed in content field and it is a required field
  */
  content: PropTypes.shape({
    name: PropTypes.string,
    readerType: PropTypes.string,
  }).isRequired,
  //=======================================
  // Quommon props
  //=======================================
  /**
  Use to define component padding in increasing order
  */
  asPadded: PropTypes.oneOf(["fitted", "compact", "normal", "relaxed"]),
  /**
    Use to override component colors and behavior
  */
  withColor: PropTypes.shape({
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    hoverTextColor: PropTypes.string,
    hoverBackgroundColor: PropTypes.string,
    accentColor: PropTypes.string,
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
  ContentTableRow component must have the onChange function passed as props
  */
  onChange: PropTypes.func.isRequired,
  /**
  ContentTableRow component must have the onChecked function passed as props
  */
  onChecked: PropTypes.func.isRequired,
  /**
  ContentTableRow component must have the onUnchecked function passed as props
  */
  onUnchecked: PropTypes.func.isRequired,
  /**
  ContentTableRow component must have the onContentUpdate function passed as props
  */
  onContentUpdate: PropTypes.func.isRequired,
};

ContentTableRow.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  content: {},
  //=======================================
  // Quommon props
  //=======================================
  asPadded: "normal",
  withAnimation: null,
  withColor: null,
};

function getIcon(readerType) {
  switch (readerType) {
    case "videck":
      return "fas fa-film";
    case "docdeck":
      return "far fa-file-pdf";
    case "assessment":
      return "fas fa-stethoscope";
    case "survey":
      return "fab fa-wpforms";
    case "adaptive":
      return "fas fa-random";
    case "quiz":
      return "far fa-question-circle";
    case "casestudy":
      return "fas fa-archive";
    case "qdf":
    case "deck":
      return "far fa-images";
    case "game":
      return "fas fa-gamepad";
    case "certdeck":
      return "fas fa-certificate";
    default:
      return "far fa-file";
  }
}
/**
## Notes
- The design system used for this component is Fontawesome Icon
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- Status of topics can be changed from content prop
**/
export default function ContentTableRow(props) {
  //-------------------------------------------------------------------
  // 1. Destructuring content props
  //-------------------------------------------------------------------
  const {
    content,
    onChange,
    onChecked,
    onUnchecked,
    onContentUpdate,
    withColor,
  } = props;
  //-------------------------------------------------------------------
  // 2. Setting states for file name and checkbox
  //-------------------------------------------------------------------
  const [name, setName] = useState(content?.name);
  const [isChecked, setIsChecked] = useState(content?.checked);
  const [showMenu, setShowMenu] = useState(false);
  const readerType = content?.readerType;
  useEffect(() => {
    setName(content?.name);
  }, [content?.name]);

  useEffect(() => {
    onChange(name);
  }, [name, onChange]);

  useEffect(() => {
    if (isChecked) onChecked();
    else onUnchecked();
  }, [isChecked, onChecked, onUnchecked]);

  useEffect(() => {
    let tmp_obj = { ...content };
    tmp_obj.name = name;
    tmp_obj.checked = isChecked;
    onContentUpdate(tmp_obj);
  }, [name, isChecked, onContentUpdate, content]);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      setShowMenu(false);
    };
    document.addEventListener("mouseup", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mouseup", checkIfClickedOutside);
    };
  }, [showMenu]);
  //-------------------------------------------------------------------
  // 3. Getting fileicon
  //-------------------------------------------------------------------
  let icon = readerType ? getIcon(readerType) : "";
  //-------------------------------------------------------------------
  // 4. Set the classes
  //-------------------------------------------------------------------
  const quommonClasses = getQuommons(props, "content-table-row");
  //-------------------------------------------------------------------
  // 5. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props);

  // ========================= Render Function =================================

  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className={`qui ${quommonClasses.parentClasses}`}
    >
      <Backdrop open={showMenu} sx={{ zIndex: 10 }} />
      <div
        className={`qui-table-content-row-container ${quommonClasses.childClasses}`}
        style={{ backgroundColor: withColor?.backgroundColor }}
      >
        <div className="qui-content-table-checkbox-container">
          <i
            className={`${
              isChecked ? "fas fa-check-square" : "far fa-square"
            } qui-content-checkbox`}
            style={{ color: withColor?.accentColor }}
            onClick={() => setIsChecked((prevState) => !prevState)}
          ></i>
        </div>
        <div className="qui-content-table-file-icon">
          <i
            className={`${icon} qui-table-file-icon`}
            style={{ color: withColor?.hoverBackgroundColor }}
          ></i>
        </div>
        <input
          type="text"
          className="qui-content-input"
          style={{
            backgroundColor: withColor?.backgroundColor,
            color: withColor?.textColor,
          }}
          value={name}
          maxLength={60}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="qui-content-table-row-dropdown">
          <button
            className="qui-content-menu"
            style={{ backgroundColor: withColor?.backgroundColor }}
            onClick={() => setShowMenu((prevState) => !prevState)}
          >
            <i
              className="fas fa-ellipsis-v"
              style={{ color: withColor?.hoverTextColor }}
            ></i>
          </button>
          {showMenu && (
            <div className="qui-content-table-row-action-menu">
              {props?.children}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
