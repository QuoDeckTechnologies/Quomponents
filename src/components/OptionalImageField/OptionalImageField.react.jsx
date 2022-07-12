// Import npm packages
import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";
import {
  getQuommons,
  getAnimation,
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
  Use to define OptionalImageField title.
  */
  title: PropTypes.string,
  /**
  Use to define OptionalImageField icon.
  */
  icon: PropTypes.string,
  /**
  Use to set OptionalImageField actionButton.
  */
  actionButton: PropTypes.bool,
  /**
  Use to define the file type which is supported to upload.
  Suppoted file type image/*.
  */
  type: PropTypes.string,
  /**
  Use to define the capture attribute for upload.
  */
  capture: PropTypes.string,
  /**
  Use to toggle a multiple to upload more than one images
  */
  multiple: PropTypes.bool,
  //=======================================
  // Quommon props
  //=======================================
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
  OptionalImageField component must have the onUpload function passed as props
  */
  onUpload: PropTypes.func.isRequired,
};

OptionalImageField.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  title: "Upload",
  icon: "fas fa-image",
  actionButton: true,
  type: "image/*",
  capture: "",
  multiple: false,
  //=======================================
  // Quommon props
  //=======================================
  isHidden: false,
  isDisabled: false,
  isFluid: false,
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
  const [baseFile, setBaseFile] = useState("");
  //-------------------------------------------------------------------
  // 2. Destructuring props
  //-------------------------------------------------------------------
  const { title, icon, actionButton, multiple, type, capture } = props;
  //-------------------------------------------------------------------
  // 3. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "optional-image-field");
  //-------------------------------------------------------------------
  // 5. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props);
  //-------------------------------------------------------------------
  // 6. File upload handlers
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
          if (props.multiple) {
            props.onUpload(allFiles);
          } else {
            setBaseFile(allFiles[0].base64);
            props.onUpload(allFiles[0]);
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
        accept={type}
        capture={capture}
        multiple={multiple}
        className="qui-image-upload-field"
        onChange={handleChange}
        onClick={(e) => (e.target.value = "")}
        hidden
      />
      <div
        className={`qui-optional-image-field-wrapper ${quommonClasses.childClasses}`}
      >
        {icon && (
          <div
            className="qui-optional-image-field-container"
            onClick={uploadFile}
          >
            {baseFile ? (
              <div
                className="qui-optional-image-field-image"
                style={{
                  backgroundImage: `url(${baseFile})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
            ) : (
              <i className={`qui-optional-image-field-icon ${icon}`}></i>
            )}
          </div>
        )}
        {icon && (
          <div
            className="qui-optional-image-field-middle-border"
          ></div>
        )}
        <div className="qui-optional-image-field-button-container">
          <Button
            className="qui-optional-image-field-button"
            variant="outlined"
            onClick={uploadFile}
          >
            {title || "Upload"}
          </Button>
        </div>
      </div>
      {actionButton && (
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
