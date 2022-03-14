// Import npm packages
import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import AvatarEditor from "react-avatar-editor";
import Cropper from "react-easy-crop";
import Slider from "react-rangeslider";
import _ from "lodash";
import {
  getAnimation,
  getQuommons,
  getTranslation,
} from "../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./ImageUploadModal.scss";
import "../../common/stylesheets/overrule.scss";
import ArcMenu from "../ArcMenu/ArcMenu.react";
import Button from "../Buttons/Button/Button.react";

ImageUploadModal.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
    ImageUploadModal data should be passed in content field and it is a required field
    */
  content: PropTypes.shape({}).isRequired,
  aspectRatio: PropTypes.number.isRequired,
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
    Use to define component size in increasing order
    */
  asSize: PropTypes.oneOf([
    "tiny",
    "small",
    "normal",
    "big",
    "huge",
    "massive",
  ]),
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
    Button component must have the onClick function passed as props
    */
  onClick: PropTypes.func.isRequired,
};

ImageUploadModal.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  content: {},
  aspectRatio: null,
  //=======================================
  // Quommon props
  //=======================================
  asVariant: "primary",
  asSize: "normal",
  withColor: null,
  withAnimation: null,
  withTranslation: null,
  isDisabled: false,
  isHidden: false,
};
function getSize(size) {
  if (size === "tiny") {
    return 240;
  }
  if (size === "small") {
    return 320;
  }
  if (size === "normal") {
    return 600;
  }
  if (size === "big") {
    return 800;
  }
  if (size === "huge") {
    return 950;
  }
  if (size === "massive") {
    return 1024;
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
export default function ImageUploadModal(props) {
  //-------------------------------------------------------------------
  // 1. Destructuring content from props
  //-------------------------------------------------------------------

  //-------------------------------------------------------------------
  // 2. Defining state and variable
  //-------------------------------------------------------------------
  const [zoom, setZoom] = useState(10);

  //-------------------------------------------------------------------
  // 2. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "image-upload-modal");
  //-------------------------------------------------------------------
  // 5. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props.withAnimation);
  const width = getSize(props.asSize);
  // ========================= Render Function =================================
  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className={`qui ${quommonClasses.parentClasses}`}
    >
      <div
        className={`qui-image-modal-upload-header ${quommonClasses.childClasses}`}
      >
        <h2>Upload Image</h2>
      </div>
      <div className={`qui-image-cropper ${quommonClasses.childClasses}`}>
        <div className="qui-image-upload-button">
          <Button
            {...props}
            content="Choose file"
            asEmphasis="outlined"
            isFluid={true}
            asPadded="normal"
          />
        </div>
        <AvatarEditor
          className="qui-image-preview"
          width={width}
          height={width / 2}
          image={
            "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
          }
          border={0}
          scale={zoom / 10}
        />
        <Slider
          min={0}
          max={100}
          value={zoom}
          onChange={(value) => setZoom(value)}
        />
        <div className="qui-image-upload-buttons">
          <Button
            {...props}
            asSize='normal'
            content="cancel"
            asEmphasis="text"
            asFloated="left"
          />
          <Button
            {...props}
            asSize='normal'
            content="save"
            asEmphasis="contained"
            asFloated="left"
          />
        </div>
      </div>
      <ArcMenu content={{}} isCloseButton={true} {...props} />
    </motion.div>
  );
}
