// Import npm packages
import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";
import {
  getQuommons,
  getAnimation,
  getTranslation,
} from "../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./OptionalImageField.scss";
import "../../common/stylesheets/overrule.scss";

OptionalImageField.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
  OptionalImageField title, icon and actionButton has to be in content.
  */
  content: PropTypes.shape({
    title: PropTypes.string,
    icon: PropTypes.string,
    actionButton: PropTypes.bool,
  }),
  /**
  Use to define the file type which is supported to upload.
  Suppoted file type image/*.
  */
  withFile: PropTypes.shape({
    type: PropTypes.string,
    capture: PropTypes.string,
  }),
  /**
  Use to toggle a multiple to upload more than one images
  */
  isMultiple: PropTypes.bool,
  //=======================================
  // Quommon props
  //=======================================
  /**
  Use to override component colors
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
    Use to show a translated version of the component text. Dictionary must be valid JSON. 
    */
  withTranslation: PropTypes.shape({
    lang: PropTypes.string,
    tgt: PropTypes.string,
    dictionary: PropTypes.string,
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
  withTranslation: null,
  isHidden: false,
  isDisabled: false,
  isFluid: false,
};
const getColors = (withColor) => {
  let colors = {
    iconBoundries: {
      borderColor: withColor.accentColor,
    },
    border: {
      backgroundColor: withColor.accentColor,
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
**/
export default function OptionalImageField(props) {
  //-------------------------------------------------------------------
  // 1. Definig states and hooks
  //-------------------------------------------------------------------
  const fileRef = useRef();
  const [file, setFile] = useState(false);
  const [baseFile, setBaseFile] = useState("")
  //-------------------------------------------------------------------
  // 2. Destructuring props
  //-------------------------------------------------------------------
  const { content } = props;
  //-------------------------------------------------------------------
  // 3. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "optional-image-field");
  //-------------------------------------------------------------------
  // 4. Set the component colors
  //-------------------------------------------------------------------
  let colors = props.withColor ? getColors(props.withColor) : {};
  //-------------------------------------------------------------------
  // 5. Translate the text objects in case their is a dictionary provided
  //-------------------------------------------------------------------
  let tObj = getTranslation(props.withTranslation);
  //-------------------------------------------------------------------
  // 6. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props);
  //-------------------------------------------------------------------
  // 7. File upload handlers
  //-------------------------------------------------------------------
  const uploadFile = () => {
    fileRef.current.click();
  };
  const handleChange = (e) => {
    let files = e.target.files;
    let allFiles = [];
    for (var i = 0; i < files.length; i++) {
      let file = files[i];
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        let fileInfo = {
          name: file.name,
          type: file.type,
          size: Math.round(file.size / 1000) + " kB",
          base64: reader.result,
          file: file,
        };
        allFiles.push(fileInfo);
        if (allFiles.length === files.length) {
          if (props.isMultiple) {
            props.onClick(allFiles);
          }
          else {
            setBaseFile(allFiles[0].base64)
            props.onClick(allFiles[0]);
          }
        }
      };
      setFile(true);
    }
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
        onClick={(e) => (e.target.value = "")}
        hidden
      />
      <div
        className={`qui-optional-image-field-wrapper ${quommonClasses.childClasses}`}
        style={colors.iconBoundries}
      >
        {content?.icon && (
          <div className="qui-optional-image-field-container" onClick={uploadFile}>
            {baseFile ?
              <div
                className="qui-optional-image-field-image"
                style={{
                  backgroundImage: `url(${baseFile})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}>
              </div> : <i className={`qui-optional-image-field-icon ${content?.icon}`}></i>
            }
          </div>
        )}
        {content?.icon && (
          <div
            style={colors.border}
            className="qui-optional-image-field-middle-border"
          ></div>
        )}
        <div className="qui-optional-image-field-button-container">
          <Button
            className="qui-optional-image-field-button"
            variant="outlined"
            style={colors.button}
            onClick={uploadFile}
          >
            {tObj?.title || content?.title || "Upload"}
          </Button>
        </div>
      </div>
      {content?.actionButton && (
        <div
          className={`qui-optional-image-field-action-icon ${
            file ? "qui-uploaded" : ""
          }`}
          onClick={() => {
            setFile(false);
            setBaseFile("");
          }}
        >
          <i className={file ? "fas fa-times" : "fas fa-angle-left"}></i>
        </div>
      )}
    </motion.div>
  );
}
