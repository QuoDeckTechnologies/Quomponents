// Import npm packages
import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import AvatarEditor from "react-avatar-editor";
import Slider from "react-rangeslider";
import { getQuommons, getTranslation } from "../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./ImageUploadModal.scss";
import "../../common/stylesheets/overrule.scss";
import ArcMenu from "../ArcMenu/ArcMenu.react";
import Button from "../Buttons/Button/Button.react";
import defaultImage from "../../assets/default11.jpeg";

ImageUploadModal.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
    Use to define content of the component
    */
  content: PropTypes.shape({
    header: PropTypes.string,
  }),
  /**
    Use to define if modal is open
    */
  isOpen: PropTypes.bool.isRequired,
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
  isOpen: true,
  //=======================================
  // Quommon props
  //=======================================
  asVariant: "primary",
  asSize: "normal",
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
  } else {
    return 1400;
  }
}
/**
## Notes
- The design system used for this component is Fontawesome Icon
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function ImageUploadModal(props) {
  //-------------------------------------------------------------------
  // 1. useRef hook for file upload
  //-------------------------------------------------------------------
  const fileRef = useRef();
  //-------------------------------------------------------------------
  // 2. Defining state and variable
  //-------------------------------------------------------------------
  const [zoom, setZoom] = useState(10);
  const [image, setImage] = useState(null);
  const [closeUploadModal, setCloseUploadModal] = useState(props.isOpen);
  useEffect(() => {
    setCloseUploadModal(props.isOpen);
  }, [props.isOpen]);
  //-------------------------------------------------------------------
  // 3. Defining functions for file upload
  //-------------------------------------------------------------------
  const uploadFile = () => {
    fileRef.current?.click();
  };
  const handleChange = (e) => {
    let file = e.target.files[0];
    setImage(file);
  };
  const getEditor = (image, width) => {
    if (image) {
      return (
        <AvatarEditor
          className="qui-image-preview"
          width={width}
          height={width / 1.15}
          image={image}
          border={0}
          scale={zoom / 10}
        />
      );
    } else {
      const height = width / 1.15;
      return (
        <img
          className="qui-image-upload-default-image"
          style={{ height: height }}
          src={defaultImage}
          alt="default"
        />
      );
    }
  };
  //-------------------------------------------------------------------
  // 4. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "image-upload-modal");
  //-------------------------------------------------------------------
  // 5. Translate the text objects in case their is a dictionary provided
  //-------------------------------------------------------------------
  let header = props.content.header;
  if (
    props.withTranslation?.lang &&
    props.withTranslation.lang !== "" &&
    props.withTranslation.lang !== "en"
  ) {
    let tObj = getTranslation(props.withTranslation);
    if (tObj) {
      header = tObj.header;
    }
  }
  //-------------------------------------------------------------------
  // 6. Get width of the editor
  //-------------------------------------------------------------------
  const width = getSize(props.asSize);
  // ========================= Render Function =================================
  return (
    <div
      className={`qui ${quommonClasses.parentClasses} ${
        closeUploadModal ? "" : "qui-upload-image-modal-close"
      }`}
    >
      <div
        className={`qui-image-modal-upload-header ${quommonClasses.childClasses}`}
      >
        <h2>{header}</h2>
      </div>
      <div className={`qui-image-cropper ${quommonClasses.childClasses}`}>
        <div className="qui-image-upload-button">
          <form>
            <input
              type="file"
              className="qui-image-upload-field"
              onChange={handleChange}
              ref={fileRef}
              hidden
            />
            <Button
              {...props}
              content="Choose file"
              asEmphasis="outlined"
              isFluid={true}
              asPadded="normal"
              withTranslation={{
                lang: props.withTranslation?.lang,
                tgt: "button",
                dictionary: JSON.stringify({
                  hi: {
                    button: { text: "फाइलें चुनें" },
                  },
                }),
              }}
              onClick={uploadFile}
            />
          </form>
        </div>
        {getEditor(image, width)}
        <Slider
          min={0}
          max={100}
          value={zoom}
          onChange={(value) => setZoom(value)}
        />
        <div className="qui-image-upload-buttons">
          <Button
            {...props}
            asSize="normal"
            content="cancel"
            asEmphasis="text"
            asFloated="left"
            withTranslation={{
              lang: props.withTranslation?.lang,
              tgt: "button",
              dictionary: JSON.stringify({
                hi: {
                  button: { text: "रद्द करें" },
                },
              }),
            }}
            onClick={() => setImage(null)}
          />
          <Button
            {...props}
            asSize="normal"
            content="save"
            asEmphasis="contained"
            asFloated="left"
            withTranslation={{
              lang: props.withTranslation?.lang,
              tgt: "button",
              dictionary: JSON.stringify({
                hi: {
                  button: { text: "स्वीकार" },
                },
              }),
            }}
          />
        </div>
      </div>
      <ArcMenu
        content={{}}
        isCloseButton={true}
        {...props}
        onClick={() => {
          setCloseUploadModal(false);
        }}
      />
    </div>
  );
}
