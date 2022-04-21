// Import npm packages
import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Modal from "@mui/material/Modal";
import AvatarEditor from "react-avatar-editor";
import Slider from "../Slider/Slider.react";
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
    Use to define if modal is open
    */
  isOpen: PropTypes.bool.isRequired,
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
    imageUploadModal component must have the onSave function passed as props
    */
  onSave: PropTypes.func.isRequired,
};

ImageUploadModal.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  isOpen: true,
  //=======================================
  // Quommon props
  //=======================================
  withAnimation: null,
  withTranslation: null,
  isDisabled: false,
  isHidden: false,
};
/**
## Notes
- The design system used for this component is Material UI (@mui/material)
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function ImageUploadModal(props) {
  //-------------------------------------------------------------------
  // 1. useRef hook for file upload
  //-------------------------------------------------------------------
  const fileRef = useRef();
  const editorRef = useRef();
  //-------------------------------------------------------------------
  // 2. Defining state and variable
  //-------------------------------------------------------------------
  const [zoom, setZoom] = useState(10);
  const [image, setImage] = useState(null);
  const [imageType, setImageType] = useState(null);
  const [openUploadModal, setOpenUploadModal] = useState(props.isOpen);
  const [width, setWidth] = useState(window.innerWidth >= 768 ? 440 : 240);
  useEffect(() => {
    setOpenUploadModal(props.isOpen);
  }, [props.isOpen]);
  //-------------------------------------------------------------------
  // 3. Get width of the editor
  //-------------------------------------------------------------------
  const resizeHandler = () => {
    if (window.innerWidth >= 768) {
      setWidth(480);
    } else {
      setWidth(240);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);
  //-------------------------------------------------------------------
  // 4. Defining functions for file upload
  //-------------------------------------------------------------------
  const uploadFile = () => {
    fileRef.current?.click();
  };
  //-------------------------------------------------------------------
  // 5. Function to upload image
  //-------------------------------------------------------------------
  const handleChange = (e) => {
    let reader = new FileReader();
    let fileInfo;
    let file = e.target.files[0];
    setImageType(file.type);
    reader.readAsDataURL(file);
    reader.onload = () => {
      fileInfo = {
        base64: reader.result,
        file: file,
      };
      setImage(fileInfo);
    };
  };
  //-------------------------------------------------------------------
  // 6. Function returns gif, png or jpeg in base 64
  //-------------------------------------------------------------------
  const handleSave = () => {
    if (image) {
      // If the image uploaded is a gif, convert it to a Base64 string without canvas
      if (imageType === "image/gif") {
        props.onSave(image.base64);
      }
      // If the image uploaded is not a gif, convert it to a jpg with 80% compression, or to a png
      // and then a Base64 string with canvas
      if (imageType === "image/jpeg") {
        let image = editorRef.current?.getImage().toDataURL("image/jpeg", 0.8);
        props.onSave(image);
      }
      if (imageType === "image/png") {
        let image = editorRef.current?.getImage().toDataURL("image/png");
        props.onSave(image);
      }
    }
  };
  //-------------------------------------------------------------------
  // 7. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "image-upload-modal");
  //-------------------------------------------------------------------
  // 8. Translate the text objects in case their is a dictionary provided
  //-------------------------------------------------------------------
  let tObj = null;
  if (
    props.withTranslation?.lang &&
    props.withTranslation.lang !== "" &&
    props.withTranslation.lang !== "en"
  ) {
    tObj = getTranslation(props.withTranslation);
  }

  // ========================= Render Function =================================
  return (
    <Modal
      open={openUploadModal}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      className={`qui ${quommonClasses.parentClasses}`}
    >
      <div
        className={`qui-image-upload-modal-container`}
        style={{ width: width }}
      >
        <div
          className={`qui-image-modal-upload-header ${quommonClasses.childClasses}`}
        >
          <h2>{tObj ? tObj.header : "Upload Image"}</h2>
        </div>
        <div className={`qui-image-cropper ${quommonClasses.childClasses}`}>
          <div className="qui-image-upload-button">
            <form>
              <input
                type="file"
                className="qui-image-upload-field"
                onChange={handleChange}
                onClick={(e) => (e.target.value = "")}
                ref={fileRef}
                hidden
              />
              <Button
                {...props}
                content={tObj ? tObj.buttons.chooseFile : "choose file"}
                asVariant="warning"
                withTranslation={null}
                withAnimation={null}
                asEmphasis="outlined"
                isFluid={true}
                asPadded="normal"
                onClick={uploadFile}
              />
            </form>
          </div>
          <div className="qui-avatar-canvas">
            {image && imageType !== "image/gif" && (
              <AvatarEditor
                className="qui-image-preview"
                ref={editorRef}
                width={width}
                height={width / 1.15}
                image={image.file}
                border={0}
                scale={zoom / 10}
              />
            )}
            {!image && (
              <img
                className="qui-avatar-default-image"
                style={{ width: width, height: width / 1.15 }}
                src={defaultImage}
                alt="default"
              />
            )}
            {image && imageType === "image/gif" && (
              <img
                className="qui-avatar-default-image"
                style={{ width: width, height: width / 1.15 }}
                src={image?.base64}
                alt="default"
              />
            )}
          </div>
          <Slider initialValue={10} onClick={(value) => setZoom(value)} />
          <div className="qui-image-upload-buttons">
            <Button
              {...props}
              asSize="normal"
              content={tObj ? tObj.buttons.cancel : "cancel"}
              asVariant="warning"
              asEmphasis="text"
              asFloated="left"
              withTranslation={null}
              withAnimation={null}
              onClick={() => setImage(null)}
            />
            <Button
              {...props}
              asSize="normal"
              content={tObj ? tObj.buttons.save : "save"}
              asVariant="warning"
              withTranslation={null}
              withAnimation={null}
              asEmphasis="contained"
              asFloated="left"
              onClick={handleSave}
            />
          </div>
        </div>
        <ArcMenu
          {...props}
          type="close"
          arcIcon="close"
          position="top-right"
          onClick={() => {
            setOpenUploadModal(false);
          }}
        />
      </div>
    </Modal>
  );
}
