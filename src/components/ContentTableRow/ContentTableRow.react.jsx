// Import npm packages
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
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
    ContentTableRow data should be passed in content field and it is a required field
    */
  content: PropTypes.shape({}).isRequired,
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

function getIcon(fileExtention) {
  let icon;
  if (fileExtention === "pdf") {
    icon = "far fa-file-pdf";
  } else if (fileExtention === "zip") {
    icon = "fas fa-archive";
  } else if (fileExtention === "qdf") {
    icon = "far fa-images";
  } else {
    icon = "far fa-file";
  }
  return icon;
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
  // 2. Extracting file name and extention
  //-------------------------------------------------------------------
  const [fileName, setFileName] = useState(content.fileName);
  const [isChecked, setIsChecked] = useState(false);
  let fileExtention;
  let icon;
  //-------------------------------------------------------------------
  // 3. Function to get fileExtention and fileicon
  //-------------------------------------------------------------------
  const getExtention = () => {
    fileExtention = content.fileName?.substring(
      content.fileName?.lastIndexOf(".") + 1,
      content.fileName?.length
    );
    icon = getIcon(fileExtention);
  };
  useEffect(() => {
    setFileName(content.fileName);
    getExtention();
  }, [content?.fileName]);
  //-------------------------------------------------------------------
  // 4. Set the classes
  //-------------------------------------------------------------------
  const quommonClasses = getQuommons(props, "content-table-row");
  //-------------------------------------------------------------------
  // 5. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props.withAnimation);
  //-------------------------------------------------------------------
  // 6. Getting extention and fileicon
  //-------------------------------------------------------------------
  getExtention();
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
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
        />
        <button className="qui-content-menu" onClick={() => props.onClick()}>
          <i className="fas fa-ellipsis-v"></i>
        </button>
      </div>
    </motion.div>
  );
}
