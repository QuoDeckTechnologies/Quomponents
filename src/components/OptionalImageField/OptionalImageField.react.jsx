// Import npm packages
import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";
import { getQuommons, getAnimation } from "../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./OptionalImageField.scss";
import "../../common/stylesheets/overrule.scss";

OptionalImageField.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
    OptionalImageField text and icon has to be in content.
    */
  content: PropTypes.shape({
    text: PropTypes.string,
    icon: PropTypes.string,
    actionButton: PropTypes.bool,
  }),

  /**
    Use to define the file type which is supported to upload.
    Suppoted file types: [video/*, image/*, .mp3, .docx, .xls, .xlsx, .zip, .qdf, .pdf]
  */
  withFile: PropTypes.shape({
    type: PropTypes.string,
    capture: PropTypes.string,
  }),

  /**
   Use to toggle a multiple to upload more than one files
 */
  isMultiple: PropTypes.bool,
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
    Use to toggle the component taking the full width of the parent container
    */
  isFluid: PropTypes.bool,
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
  withFile: null,
  isMultiple: false,
  //=======================================
  // Quommon props
  //=======================================
  withColor: null,
  withAnimation: null,
  isHidden: false,
  isDisabled: false,
  isFluid: false,
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
  const [file, setFile] = useState(false);
  //-------------------------------------------------------------------
  // 1. Destructuring props
  //-------------------------------------------------------------------
  const { content } = props;
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
    let files = e.target.files;
    var allFiles = [];
    for (var i = 0; i < files.length; i++) {
      let file = files[i];
      // Make new FileReader
      let reader = new FileReader();
      // Convert the file to base64 text
      reader.readAsDataURL(file);
      // on reader load something...
      reader.onload = () => {
        // Make a fileInfo Object
        let fileInfo = {
          name: file.name,
          type: file.type,
          size: Math.round(file.size / 1000) + " kB",
          base64: reader.result,
          file: file,
        };
        // Push it to the state
        allFiles.push(fileInfo);
        // If all files have been processed
        if (allFiles.length === files.length) {
          // Apply Callback function
          if (props.isMultiple) props.onClick(allFiles);
          else props.onClick(allFiles[0]);
        }
      };
    }
    setFile(true);
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
        ref={fileRef}
        accept={props.withFile?.type}
        capture={props.withFile?.capture}
        multiple={props.isMultiple}
        className="qui-image-upload-field"
        onChange={handleChange}
        hidden
      />
      {content?.icon && (
        <div
          className="qui-optional-image-field-icon"
          style={colors.iconBoundries}
        >
          <i className={content.icon}></i>
        </div>
      )}
      <div className="qui-optional-image-field-button-container">
        <Button
          className="qui-optional-image-field-button"
          variant="outlined"
          style={colors.button}
          onClick={uploadFile}
        >
          {content?.text ? content.text : "Upload"}
        </Button>
      </div>
      {content?.actionButton && (
        <div
          className={`qui-optional-image-field-action-icon ${
            file ? "qui-uploaded" : ""
          }`}
          onClick={() => setFile(false)}
        >
          <i className={file ? "fas fa-times" : "fas fa-angle-left"}></i>
        </div>
      )}
    </motion.div>
  );
}
