// Import npm packages
import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Modal from "@mui/material/Modal";
import TextField from '@mui/material/TextField';
import { getQuommons, getTranslation } from "../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./NudgeModal.scss";
import "../../common/stylesheets/overrule.scss";
import ArcMenu from "../ArcMenu/ArcMenu.react";
import Button from "../Buttons/Button/Button.react";

NudgeModal.propTypes = {
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
      NudgeModal component can have the onClose function passed as props to return open/close state
      */
    onClose: PropTypes.func,
    /**
      NudgeModal component must have the onClick function passed as props
      */
    onClick: PropTypes.func.isRequired,
};

NudgeModal.defaultProps = {
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
export default function NudgeModal(props) {
    //-------------------------------------------------------------------
    // 2. Defining state and variable
    //-------------------------------------------------------------------
    const [openUploadModal, setOpenUploadModal] = useState(props.isOpen);
    const [input, setInput] = useState('')
    useEffect(() => {
        setOpenUploadModal(props.isOpen);
    }, [props.isOpen]);
    //-------------------------------------------------------------------
    // 5. Function to return uoploaded mp3 files
    //-------------------------------------------------------------------
    const handleSave = () => {
        props.onClick(input);
    };
    //-------------------------------------------------------------------
    // 6. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "nudge-modal");
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

    const handleInput = (e) => {
        setInput(e.target.value)
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
            <div className={`qui-nudge-modal-container`}>
                <div
                    className={`qui-nudge-modal-header ${quommonClasses.childClasses}`}
                >
                    <h4>{tObj?.header || "Nudge Team member"}</h4>
                </div>

                <div>
                    <TextField
                        sx={{ width: '100%' }}
                        label="Input Message"
                        multiline
                        rows={4}
                        // defaultValue="Default Value"
                        value={input}
                        variant="filled"
                        onChange={handleInput}
                    />
                </div>

                <div className="qui-nudge-buttons">
                    <Button
                        {...props}
                        asSize="normal"
                        asPadded='relaxed'

                        content={tObj?.buttons?.cancel || "cancel"}
                        asEmphasis="text"
                        withTranslation={null}
                        withAnimation={null}
                        onClick={() => {

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
