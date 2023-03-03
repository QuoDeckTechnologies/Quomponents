// Import npm packages
import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Modal from "@mui/material/Modal";
import { getQuommons, getTranslation } from "../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./AvatarAdjustor.scss";
import "../../common/stylesheets/overrule.scss";
import InlineEdit from "../InlineEdit/InlineEdit.react"
// import Button from "../Buttons/Button/Button.react";
import ImageField from "../ImageField/ImageField.react";
import 'semantic-ui-css/semantic.min.css'
import { Button, Icon, Input, Label, Card } from 'semantic-ui-react'
import AvatarEditor from "react-avatar-editor";
import Slider from "react-rangeslider";

AvatarAdjustor.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    Use to define if modal is tile
    */
    title: PropTypes.string.isRequired,
    /**
    /**
    Use to provide initial value for reward's image, name, header and content
    */
    image: PropTypes.string,
    /**
    Use to define aspect ratio of the image editor
    */
    aspectRatio: PropTypes.number,
    /**
    Use to define if modal is open
    */
    isOpen: PropTypes.bool.isRequired,
    /**
    Use to define if modal is Editable
    */
    isEditable: PropTypes.bool.isRequired,
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
    rewardUploadModal component should have the onChange function passed as props
    */
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
};

AvatarAdjustor.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    title: "Create a Reward",
    image: null,
    rewardName: null,
    rewardHeader: null,
    rewardContent: null,
    aspectRatio: 1,
    isOpen: true,
    isEditable: true,
    //=======================================
    // Quommon props
    //=======================================
    withColor: null,
    withTranslation: null,
    isHidden: false,
    isFluid: false,
};
/**
## Notes
- The design system used for this component is Material UI (@mui/material)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function AvatarAdjustor(props) {
    const { withColor, isEditable } = props;
    //-------------------------------------------------------------------
    // 1. useRef hook for file upload
    //-------------------------------------------------------------------
    const setEditorRef = useRef();
    //-------------------------------------------------------------------
    // 2. Defining state and variable
    //-------------------------------------------------------------------
    const [zoom, setZoom] = useState(10);
    const [image, setImage] = useState(props.image ? props.image : null);
    const [openUploadModal, setOpenUploadModal] = useState(props.isOpen);
    const [width, setWidth] = useState(window.innerWidth >= 768 ? 180 : 85);
    //-------------------------------------------------------------------
    // 3. Get width of the editor
    //-------------------------------------------------------------------
    const resizeHandler = () => {
        if (window.innerWidth >= 768) {
            setWidth(300);
        } else {
            setWidth(170);
        }
    };
    useEffect(() => {
        window.addEventListener("resize", resizeHandler);
        return () => {
            window.removeEventListener("resize", resizeHandler);
        };
    }, []);

    useEffect(() => {
        setOpenUploadModal(props.isOpen);
    }, [props.isOpen]);
    //-------------------------------------------------------------------
    // 4. Function to upload image
    //-------------------------------------------------------------------
    const handleChange = (img) => {
        setImage(img);
    };

    const handleSave = () => {
        if (props.onSubmit) props.onSubmit({
            Image: image,
            Name: "rewardName",
        });
    };

    const handleCancel = () => {
        setOpenUploadModal(false)
    }
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
            <div className="qui-avatar-adjustor-modal-container">
                <div className={`qui-avatar-adjustor-modal-header ${quommonClasses.childClasses}`}>
                    <h2 style={{ color: withColor?.textColor }}>
                        {tObj?.title || "Upload Image"}
                    </h2>
                    <i className="fa fa-times"
                        onClick={() => { setOpenUploadModal(false) }}
                    />
                </div>
                <br />
                <div className="qui-avatar-adjustor-modal-editor-container">
                    <div className="qui-avatar-adjustor-modal-editor-image-uploader">
                        <input type="file" />
                        <div>
                            <b>Note</b>- The preferred size for image upload is 925*650 pixels.
                        </div>
                    </div>
                    <div className="qui-avatar-adjustor-modal-editor">
                        <AvatarEditor
                            ref={setEditorRef}
                            image={"srcFile"}
                            width={300}
                            height={235}
                            border={0}
                            color={[255, 255, 255, 0.6]} // RGBA
                            scale={zoom / 10}
                            rotate={0}
                        />
                    </div>
                    <div className="slider" style={{ width: "auto" }}>
                        <Slider
                            min={0}
                            max={100}
                            value={zoom}
                            onChange={"this.handleZoom"}
                        />
                    </div>
                </div>
                <br />
                <div className="qui-avatar-adjustor-buttons">
                    <Button onClick={handleCancel} icon labelPosition='left'>
                        {tObj?.buttons?.cancel || "Cancel"}
                        <Icon name='delete' />
                    </Button>
                    <Button onClick={handleSave} icon labelPosition='right'>
                        {tObj?.buttons?.save || "save"}
                        <Icon name='check' />
                    </Button>
                </div>
            </div >
        </Modal >
    );
}