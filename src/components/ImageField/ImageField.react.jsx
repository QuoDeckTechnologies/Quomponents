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
import "./ImageField.scss";
import "../../common/stylesheets/overrule.scss";
import ImageUploadModal from "../ImageUploadModal/ImageUploadModal.react";

ImageField.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
  ImageField title, icon and actionButton has to be in content.
  */
    title: PropTypes.string,
    image: PropTypes.string,
    aspectRatio: PropTypes.number,
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
  ImageField component must have the onChange function passed as props
  */
    onChange: PropTypes.func.isRequired,
};

ImageField.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    title: "Upload Image",
    image: "",
    aspectRatio: 1,
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
export default function ImageField(props) {
    //-------------------------------------------------------------------
    // 1. Defining states and hooks
    //-------------------------------------------------------------------
    const [image, setImage] = useState(props.image || "");
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
        if (props.onChange) props.onChange(tgtImg === "" ? null : tgtImg);
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
                    <div
                        className={`qui-optional-image-field-container ${
                            props.aspectRatio < 1 ? "qui-oif-ht" : "qui-oif-wd"
                        }`}
                    >
                        <img
                            className="qui-optional-image-field-image"
                            src={image}
                            alt={"Uploaded"}
                        />
                    </div>
                )}
                {image === "" && (
                    <div
                        style={colors.border}
                        className="qui-optional-image-field-middle-border"
                    ></div>
                )}
                {(tObj?.title || props.title) && (
                    <div className="qui-optional-image-field-button-container">
                        <Button
                            className="qui-optional-image-field-button"
                            variant="outlined"
                            style={colors.button}
                        >
                            {tObj?.title || props.title}
                        </Button>
                    </div>
                )}
                {image !== "" && (
                    <div
                        className={`qui-optional-image-field-action-icon`}
                        onClick={() => handleChange("")}
                    >
                        <i className={"fas fa-times"}></i>
                    </div>
                )}
            </div>

            <ImageUploadModal
                key={Math.random()}
                isOpen={uploadModalOpen}
                image={image !== "" ? image : ""}
                aspectRatio={props.aspectRatio}
                onChange={handleChange}
            />
        </motion.div>
    );
}
