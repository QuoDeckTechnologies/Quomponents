// Import npm packages
import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { getQuommons, getAnimation } from "../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./OptionalImageField.scss";
import "../../common/stylesheets/overrule.scss";
import Button from "@mui/material/Button";

OptionalImageField.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
    OptionalImageField Text and icon has to be in content.
    */
  content: PropTypes.shape({
    text: PropTypes.string,
    icon: PropTypes.string,
  }),
  /**
    OptionalImageField can have an action button to undo uploaded image.
    */
  isActionButton: PropTypes.bool,
  //=======================================
  // Quommon props
  //=======================================
  /**
    Use to override component colors and behavior
    */
  withColor: PropTypes.shape({
    backgroundColor: PropTypes.string,
    accentColor: PropTypes.string,
    textColor: PropTypes.string,
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
    Use to show/hide the component
    */
  isHidden: PropTypes.bool,
  /**
    Use to enable/disable the component
    */
  isDisabled: PropTypes.bool,
  /**
    OptionalImageField component must have the onClick function passed as props
    */
  onClick: PropTypes.func.isRequired,
};

OptionalImageField.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  content: {},
  isActionButton: true,
  //=======================================
  // Quommon props
  //=======================================
  withColor: null,
  withAnimation: null,
  isHidden: false,
  isDisabled: false,
};
const getColors = (withColor) => {
  let colors = {
    iconBoundries: {
      borderTopColor: withColor.accentColor,
      borderLeftColor: withColor.accentColor,
      borderBottomColor: withColor.accentColor,
    },
    button: {
      backgroundColor: withColor.backgroundColor,
      borderColor: withColor.accentColor,
      color: withColor.textColor,
    },
  };
  return colors;
};

/**
## Notes
- The design system used for this component is Material UI (@mui/material)
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- MUI props are not being passed to the button. Please speak to the admin to handle any new MUI prop.
**/
export default function OptionalImageField(props) {
  const fileRef = useRef();
  const [file, setFile] = useState(null);
  //-------------------------------------------------------------------
  // 1. Destructuring props
  //-------------------------------------------------------------------
  const { content, isActionButton } = props;
  //-------------------------------------------------------------------
  // 2. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "optional-image-field");
  //-------------------------------------------------------------------
  // 3. Set the component colors
  //-------------------------------------------------------------------
  let colors = props.withColor ? getColors(props.withColor) : {};
  //-------------------------------------------------------------------
  // 4. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props.withAnimation);
  //-------------------------------------------------------------------
  // 5. File upload handlers
  //-------------------------------------------------------------------
  const uploadFile = () => {
    fileRef.current.click();
  };
  const handleChange = (e) => {
    let file = e.target.files[0];
    setFile(file);
    props.onClick(file);
  };
  // ========================= Render Function =================================

  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className={`qui ${quommonClasses.parentClasses}`}
    >
      <input
        type="file"
        className="qui-image-upload-field"
        onChange={handleChange}
        ref={fileRef}
        hidden
      />
      <div
        className="qui-optional-image-field-icon"
        style={colors.iconBoundries}
      >
        <i className={content.icon ? content.icon : "fas fa-image"}></i>
      </div>
      <div className="qui-optional-image-field-button-container">
        <Button
          className="qui-optional-image-field-button"
          variant="outlined"
          style={colors.button}
          onClick={uploadFile}
        >
          {content.text ? content.text : "Upload"}
        </Button>
      </div>
      {isActionButton && (
        <div
          className={`qui-optional-image-field-action-icon ${
            file ? "qui-uploaded" : ""
          }`}
          onClick={() => setFile(null)}
        >
          <i className={file ? "fas fa-times" : "fas fa-angle-left"}></i>
        </div>
      )}
    </motion.div>
  );
}
