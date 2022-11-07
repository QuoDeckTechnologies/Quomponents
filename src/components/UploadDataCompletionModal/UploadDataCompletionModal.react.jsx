// Import npm packages
import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Modal from "@mui/material/Modal";
import { getQuommons, getTranslation } from "../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./UploadDataCompletionModal.scss";
import "../../common/stylesheets/overrule.scss";
import ArcMenu from "../ArcMenu/ArcMenu.react";
import Button from "../Buttons/Button/Button.react";

UploadDataCompletionModal.propTypes = {
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
      Use to override component colors and behavior
      */
    withColor: PropTypes.shape({
        backgroundColor: PropTypes.string,
        textColor: PropTypes.string,
        hoverBackgroundColor: PropTypes.string,
        hoverTextColor: PropTypes.string,
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
      UploadDataCompletionModal component can have the onClose function passed as props to return open/close state
      */
    onClose: PropTypes.func,
    /**
      UploadDataCompletionModal component must have the onClick function passed as props
      */
    onClick: PropTypes.func.isRequired,
};

UploadDataCompletionModal.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    isOpen: true,
    //=======================================
    // Quommon props
    //=======================================
    asVariant: "warning",
    withColor: null,
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
export default function UploadDataCompletionModal(props) {
    //-------------------------------------------------------------------
    // 1. useRef hook for file upload
    //-------------------------------------------------------------------
    const fileRef = useRef();
    //-------------------------------------------------------------------
    // 2. Defining state and variable
    //-------------------------------------------------------------------
    const [file, setFile] = useState(null);
    const [openUploadModal, setOpenUploadModal] = useState(props.isOpen);
    useEffect(() => {
        setOpenUploadModal(props.isOpen);
    }, [props.isOpen]);
    //-------------------------------------------------------------------
    // 3. Defining functions for file upload
    //-------------------------------------------------------------------
    const uploadFile = () => {
        fileRef.current?.click();
    };
    //-------------------------------------------------------------------
    // 4. Function to upload image
    //-------------------------------------------------------------------
    const handleChange = (e) => {
        let files = e.target.files;
        var allFiles = [];
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
                    if (allFiles.length > 1) {
                        setFile(allFiles);
                    } else {
                        setFile(allFiles[0]);
                    }
                }
            };
        }
    };
    //-------------------------------------------------------------------
    // 5. Function to return uoploaded mp3 files
    //-------------------------------------------------------------------
    const handleSave = () => {
        props.onClick(file);
    };
    //-------------------------------------------------------------------
    // 6. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "data-completion-upload-modal");
    //-------------------------------------------------------------------
    // 7. Translate the text objects in case their is a dictionary provided
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
            <div className={`qui-data-completion-upload-modal-container`}>
                <div
                    className={`qui-data-completion-upload-modal-header ${quommonClasses.childClasses}`}
                >
                    <h2>{tObj?.header || "Upload Completion Data File"}</h2>
                </div>

                <div className="qui-data-completion-text-message">
                    <p>
                        {tObj?.upperText || "Step 1: Download Sample File"}
                    </p>
                    <Button
                        {...props}
                        content={tObj?.buttons?.chooseFile || "sample file"}
                        withTranslation={null}
                        withAnimation={null}
                        isFluid={true}
                        asPadded="relaxed"
                        withColor={{

                        }}
                        onClick={() => { }}
                    />
                </div>
                <div className="qui-data-completion-text-message">
                    <p>
                        {tObj?.lowerText || "Step 2: Upload Excel File with Completion Data"}
                    </p>
                    <div className="qui-data-completion-upload-button">
                        <form>
                            <input
                                type="file"
                                // accept=".csv"
                                multiple={true}
                                className="qui-data-completion-upload-field"
                                onChange={handleChange}
                                onClick={(e) => (e.target.value = "")}
                                ref={fileRef}
                                hidden
                            />
                            <Button
                                {...props}
                                content={tObj?.buttons?.chooseFile || "upload file"}
                                withTranslation={null}
                                withAnimation={null}
                                asEmphasis="outlined"
                                isFluid={true}
                                asPadded="relaxed"
                                onClick={uploadFile}
                            />
                        </form>
                    </div>
                </div>
                <div className="qui-data-completion-upload-buttons">
                    <Button
                        {...props}
                        asSize="normal"
                        asPadded='relaxed'

                        content={tObj?.buttons?.cancel || "cancel"}
                        asEmphasis="text"
                        withTranslation={null}
                        withAnimation={null}
                        onClick={() => {
                            setFile(null);
                            setOpenUploadModal(false);
                            props.onClose(false);
                        }}
                    />
                    <Button
                        {...props}
                        asSize="normal"
                        asPadded='relaxed'

                        content={tObj?.buttons?.save || "save"}
                        withTranslation={null}
                        withAnimation={null}
                        asEmphasis="contained"
                        onClick={handleSave}
                    />
                </div>
                <ArcMenu
                    {...props}
                    type="close"
                    arcIcon="close"
                    position="top-right"
                    onClick={() => {
                        setOpenUploadModal(false);
                        props.onClose(false);
                    }}
                />
            </div>
        </Modal>
    );
}
