// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
    getAnimation,
    getQuommons,
    getTranslation,
} from "../../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./OptionItemSix.scss";
import "../../../common/stylesheets/overrule.scss";
import ImageField from "../../ImageField/ImageField.react";
import InputField from "../../InputField/InputField.react";

OptionItemSix.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
  OptionItemSix data should be passed in content field and it is a required field
  */
    header: PropTypes.shape({
        value: PropTypes.string,
        placeholder: PropTypes.string,
        maxLength: PropTypes.number,
        width: PropTypes.string,
    }),
    caption: PropTypes.shape({
        value: PropTypes.string,
        placeholder: PropTypes.string,
        maxLength: PropTypes.number,
        width: PropTypes.string,
    }),
    image: PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string,
        aspectRatio: PropTypes.number,
    }),
    removable: PropTypes.bool,

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
  Use to enable/disable the component
  */
    isDisabled: PropTypes.bool,
    /**
  Use to show/hide the component
  */
    isHidden: PropTypes.bool,
    /**
  OptionItemSix component must have the following functions passed as props
  */
    onHeaderChange: PropTypes.func.isRequired,
    onCaptionChange: PropTypes.func.isRequired,
    onImageChange: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
};

OptionItemSix.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    //=======================================
    // Quommon props
    //=======================================
    withColor: null,
    withAnimation: null,
    withTranslation: null,
    isDisabled: false,
    isHidden: false,
};
/**
## Notes
- The design system used for this component is Fontawesome Icon and MUI
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function OptionItemSix(props) {
    //-------------------------------------------------------------------
    // 1. Destructuring content prop
    //-------------------------------------------------------------------
    const { header, caption, image, removable } = props;
    //-------------------------------------------------------------------
    // 2. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "option-item-six");
    //-------------------------------------------------------------------
    // 3. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props);

    // ========================= Render Function =================================

    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui ${quommonClasses.parentClasses}`}
        >
            <div className="qui-option-item-six-container">
                <div className="qui-optionitem-flexone">
                    <div
                        className="qui-optionitem-flextwo"
                        style={{ maxWidth: header?.width }}
                    >
                        <div className="qui-option-item-upload-button">
                            <ImageField
                                title={image?.title}
                                image={image?.image}
                                aspectRatio={image?.aspectRatio}
                                onChange={(value) => props.onImageChange(value)}
                                withColor={{ ...props.withColor }}
                            />
                        </div>
                        <div className="qui-optionitem-six-inputfieldone">
                            <InputField
                                value={header?.value}
                                placeholder={header?.placeholder}
                                maxLength={header?.maxLength}
                                asEmphasis="listInput"
                                withColor={props.withColor}
                                onSubmit={(value) =>
                                    props.onHeaderChange(value)
                                }
                            />
                        </div>
                    </div>
                    <div
                        className="qui-optionitem-flexthree"
                        style={{ maxWidth: caption?.width }}
                    >
                        <InputField
                            value={caption?.value}
                            placeholder={caption?.placeholder}
                            maxLength={caption?.maxLength}
                            asEmphasis="listInput"
                            withColor={props.withColor}
                            onSubmit={(value) => props.onCaptionChange(value)}
                        />
                    </div>
                </div>
                {removable && (
                    <div className="qui-option-item-six-close-icon">
                        <i
                            className="fas fa-times"
                            onClick={props.onRemove}
                        ></i>
                    </div>
                )}
            </div>
        </motion.div>
    );
}
