// Import npm packages
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { getAnimation, getQuommons } from "../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./ContentTableRow.scss";
import "../../common/stylesheets/overrule.scss";
import ActionMenu from "../ActionMenu/ActionMenu.react";

ContentTableRow.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
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
    Button component must have the onClick function passed as props
    */
  onClick: PropTypes.func.isRequired,
};

ContentTableRow.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  content: {},
  //=======================================
  // Quommon props
  //=======================================
  withAnimation: null,
  isDisabled: false,
  isHidden: false,
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
    // case "dialogue":
    //   return "talking outline";
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
  const { content } = props;
  //-------------------------------------------------------------------
  // 2. Setting states for file name and checkbox
  //-------------------------------------------------------------------
  const [name, setName] = useState(content?.name);
  const [isChecked, setIsChecked] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const readerType = content.readerType;
  useEffect(()=>{
    setName(content?.name)
  },[content?.name])
  //-------------------------------------------------------------------
  // 6. Getting fileicon
  //-------------------------------------------------------------------
  let icon = readerType ? getIcon(readerType) : "";
  //-------------------------------------------------------------------
  // 4. Set the classes
  //-------------------------------------------------------------------
  const quommonClasses = getQuommons(props, "content-table-row");
  //-------------------------------------------------------------------
  // 5. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props.withAnimation);

  // ========================= Render Function =================================

  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className={`qui ${quommonClasses.parentClasses}`}
    >
      <div
        className={`qui-table-content-row-container ${quommonClasses.childClasses}`}
      >
        <div className="qui-content-table-checkbox-container">
          <i
            className={`${
              isChecked ? "far fa-square" : "fas fa-check-square"
            } qui-content-checkbox`}
            onClick={() => setIsChecked((prevState) => !prevState)}
          ></i>
        </div>
        <div className="qui-content-table-file-icon">
          <i className={`${icon} qui-table-file-icon`}></i>
        </div>
        <input
          type="text"
          className="qui-content-input"
          value={name}
          maxLength={60}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className="qui-content-menu"
          onClick={() => setShowMenu((prevState) => !prevState)}
        >
          <i className="fas fa-ellipsis-v"></i>
        </button>
        {showMenu && (
          <div className="qui-content-table-row-action-menu">
            <ActionMenu
              {...props}
              content={[
                {
                  title: "Open Deck",
                  icon: "fas fa-book-open",
                },
                {
                  title: "Edit Deck",
                  icon: "fas fa-edit",
                },
                {
                  title: "Move Deck Up",
                  icon: "fas fa-chevron-up",
                },
                {
                  title: "Move Deck Down",
                  icon: "fas fa-chevron-down",
                },
                {
                  title: "Move to Topic",
                  icon: "fas fa-retweet",
                },
                {
                  title: "Unpublish Deck",
                  icon: "fas fa-eye-slash",
                },
                {
                  title: "Delete Deck",
                  icon: "fas fa-trash-alt",
                },
              ]}
              withColor={{ backgroundColor: "white" }}
              withAnimation={{
                animation: "slideDown",
                duration: 0.5,
                delay: 0,
              }}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}
