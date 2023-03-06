// Import npm packages
import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Button, Icon, Modal } from 'semantic-ui-react'
import AvatarEditor from "react-avatar-editor";
import Slider from "react-rangeslider";
import { getAnimation, getQuommons, getTranslation } from "../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./AvatarAdjustor.scss";
import "../../common/stylesheets/overrule.scss";
import 'semantic-ui-css/semantic.min.css'
import 'react-rangeslider/lib/index.css'

AvatarAdjustor.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    Use to define modal's tile
    */
    title: PropTypes.string.isRequired,
    /**
    Use to provide initial value for image
    */
    image: PropTypes.string,
    /**
    Use to define if modal is open
    */
    isOpen: PropTypes.bool.isRequired,
    //=======================================
    // Quommon props
    //=======================================
    /**
    Use to override component colors and behavior
    */
    withColor: PropTypes.shape({
        textColor: PropTypes.string,
        buttonColor: PropTypes.string,
        hoverButtonColor: PropTypes.string,
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
    AvatarAdjustor component should have the onChange function passed as props
    */
    onChange: PropTypes.func,
};

AvatarAdjustor.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    title: "Upload Image",
    image: null,
    isOpen: true,
    //=======================================
    // Quommon props
    //=======================================
    withColor: null,
    withAnimation: null,
    withTranslation: null,
    isHidden: false,
};
/**
## Notes
- The design system used for this component is Material UI (@mui/material)
- The design system used for this component is Slider (@react-rangeslider)
- The design system used for this component is AvatarEditor (@react-avatar-editor)
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function AvatarAdjustor(props) {
    //-------------------------------------------------------------------
    // 1. Destructuring data from props
    //-------------------------------------------------------------------
    const { withColor, title } = props;
    //-------------------------------------------------------------------
    // 2. useRef hook for file upload
    //-------------------------------------------------------------------
    const editorRef = useRef();
    //-------------------------------------------------------------------
    // 3. Defining state and variable
    //-------------------------------------------------------------------
    const [zoom, setZoom] = useState(10);
    const [image, setImage] = useState(props.image ? props.image : "/assets/default.jpeg");
    const [imageType, setImageType] = useState(null);
    const [openUploadModal, setOpenUploadModal] = useState(props.isOpen);

    useEffect(() => {
        setOpenUploadModal(props.isOpen);
    }, [props.isOpen]);
    //-------------------------------------------------------------------
    // 4. Function to upload image
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

    const handleSave = () => {
        if (image) {
            // If the image uploaded is a gif, convert it to a Base64 string without canvas
            if (imageType === "image/gif") {
                props.onChange(image.base64);
            }
            // If the image uploaded is not a gif, convert it to a jpg with 80% compression, or to a png
            // and then a Base64 string with canvas
            else if (imageType === "image/jpeg") {
                let newImage = editorRef.current
                    ?.getImage()
                    .toDataURL("image/jpeg", 0.8);
                props.onChange(newImage);
            } else if (imageType === "image/png") {
                let newImage = editorRef.current
                    ?.getImage()
                    .toDataURL("image/png");
                props.onChange(newImage);
            } else {
                let newImage = editorRef.current
                    ?.getImage()
                    .toDataURL("image/jpeg", 0.8);
                props.onChange(newImage);
            }
        }
    };

    const handleCancel = () => {
        setOpenUploadModal(false)
    }

    const handleZoom = (value) => {
        setZoom(value)
    };
    //-------------------------------------------------------------------
    // 5. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "avatar-adjustor-modal");
    //-------------------------------------------------------------------
    // 6. Translate the text objects in case their is a dictionary provided
    //-------------------------------------------------------------------
    let tObj = null;
    if (
        props.withTranslation?.lang &&
        props.withTranslation.lang !== "" &&
        props.withTranslation.lang !== "en"
    ) {
        tObj = getTranslation(props.withTranslation);
    }
    //-------------------------------------------------------------------
    // 7. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props);
    // ========================= Render Function =================================
    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
        >
            <Modal
                dimmer="blurring"
                size="small"
                style={{ borderRadius: "15px" }}
                open={openUploadModal}
                className={`qui ${quommonClasses.parentClasses}`}
            >
                <div className="qui-avatar-adjustor-modal-container">
                    <div className={`qui-avatar-adjustor-modal-header ${quommonClasses.childClasses}`}>
                        <h2 style={{ color: withColor?.textColor }}>
                            {tObj?.title || title}
                        </h2>
                        <i className="fa fa-times"
                            onClick={handleCancel}
                        />
                    </div>
                    <div className="qui-avatar-adjustor-modal-editor-container">
                        <div className="qui-avatar-adjustor-modal-editor-image-uploader">
                            <input
                                type="file"
                                onChange={handleChange}
                                onClick={(e) => (e.target.value = "")}
                            />
                            <div>
                                <b>Note</b>- The preferred size for image upload is 925*650 pixels.
                            </div>
                        </div>
                        <div className="qui-avatar-adjustor-modal-editor">
                            <AvatarEditor
                                ref={editorRef}
                                image={image.file ? image.file : image}
                                // width={600}
                                // height={250}
                                border={0}
                                color={[255, 255, 255, 0.6]} // RGBA
                                scale={zoom / 10}
                                rotate={0}
                            />
                            <Slider
                                min={0}
                                max={100}
                                value={zoom}
                                onChange={handleZoom}
                            />
                        </div>
                    </div>
                    <div className="qui-avatar-adjustor-buttons">
                        <Button
                            onClick={handleCancel}
                            icon
                            labelPosition='left'
                            className="qui-avatar-adjustor-cancel-button">
                            {tObj?.buttons?.cancel || "Cancel"}
                            <Icon name='delete' className="qui-avatar-adjustor-cancel-button-icon" />
                        </Button>
                        <Button
                            onClick={handleSave}
                            icon
                            labelPosition='right'
                            className="qui-avatar-adjustor-save-button">
                            {tObj?.buttons?.save || "Save"}
                            <Icon name='check' className="qui-avatar-adjustor-save-button-icon" />
                        </Button>
                    </div>
                </div>
            </Modal>
        </motion.div>
    );
}