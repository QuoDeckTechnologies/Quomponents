// Import npm packages
import React, { useState } from "react";
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
import ImageUploadModal from "../ImageUploadModal/ImageUploadModal.react";

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
    content: {
        title: "Upload Image",
        icon: "",
    },
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
    // 1. Defining states and hooks
    //-------------------------------------------------------------------
    const [image, setImage] = useState(props.content.icon || "");
    const [uploadModalOpen, setUploadModalOpen] = useState(false);

    //-------------------------------------------------------------------
    // 2. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "optional-image-field");
    //-------------------------------------------------------------------
    // 3. Set the component colors
    //-------------------------------------------------------------------
    let colors = props.withColor ? getColors(props.withColor) : {};
    //-------------------------------------------------------------------
    // 4. Translate the text objects in case their is a dictionary provided
    //-------------------------------------------------------------------
    let tObj = getTranslation(props.withTranslation);
    //-------------------------------------------------------------------
    // 5. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props);

    // ========================= Render Function =================================

    const handleChange = (tgtImg) => {
        setUploadModalOpen(false);
        setImage(tgtImg);
        if (props.handleChange)
            props.handleChange(tgtImg === "" ? null : tgtImg);
    };

    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui ${quommonClasses.parentClasses}`}
        >
            <div
                className={`qui-optional-image-field-wrapper ${quommonClasses.childClasses}`}
                style={colors.iconBoundries}
                onClick={() => setUploadModalOpen(true)}
            >
                {image === "" ? (
                    <div className="qui-optional-image-field-container">
                        <i
                            className={`qui-optional-image-field-icon fa fa-image`}
                        ></i>
                    </div>
                ) : (
                    <div className="qui-optional-image-field-container">
                        <img
                            className="qui-optional-image-field-image"
                            src={image}
                            alt={"Uploaded image"}
                        />
                    </div>
                )}
                {image === "" && (
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
                    >
                        {tObj?.title || props.content?.title}
                    </Button>
                </div>
            </div>
            {image !== "" && (
                <a
                    className={`qui-optional-image-field-action-icon`}
                    onClick={() => handleChange("")}
                >
                    <i className={"fas fa-times"}></i>
                </a>
            )}
            <ImageUploadModal
                key={Math.random()}
                isOpen={uploadModalOpen}
                image={image !== "" ? image : ""}
                onChange={handleChange}
            />
        </motion.div>
    );
}
