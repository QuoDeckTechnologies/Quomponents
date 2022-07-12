// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
  getQuommons,
  getTranslation,
  getAnimation,
  resolveImage,
} from "../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./VCardWithButton.scss";
import "../../common/stylesheets/overrule.scss";
import Button from "../Buttons/Button/Button.react";

VCardWithButton.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
  VCardWithButton component id has to be in id props.
  */
  id: PropTypes.string,
  /**
  VCardWithButton component name has to be in name props.
  */
  name: PropTypes.string,
  /**
  VCardWithButton component description has to be in description props.
  */
  description: PropTypes.string,
  /**
  VCardWithButton component button text has to be in buttonText props.
  */
  buttonText: PropTypes.string,
  /**
  Use to set checked VCardWithButton component.
  */
  checked: PropTypes.bool,
  /**
  VCardWithButton component image has to be in image props.
  */
  image: PropTypes.object,
  /**
  VCardWithButton can set image from imageLibrary array
  */
  imageLibrary: PropTypes.array,
  //=======================================
  // Quommon props
  //=======================================
  /**
  Use to float the component in parent container
  */
  asFloated: PropTypes.oneOf(["left", "right", "none", "inline"]),
  /**
  Use to override component colors and behavior
  */
  withColor: PropTypes.shape({
    backgroundColor: PropTypes.string,
    accentColor: PropTypes.string,
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
  Use to show/hide the component
  */
  isHidden: PropTypes.bool,
  /**
  Use to enable/disable the component
  */
  isDisabled: PropTypes.bool,
  /**
  VCardWithButton component must have the onClick function passed as props
  */
  onClick: PropTypes.func.isRequired,
};

VCardWithButton.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  id: "",
  name: "",
  description: "",
  buttonText: "",
  checked: true,
  image: null,
  imageLibrary: [],
  //=======================================
  // Quommon props
  //=======================================
  asFloated: "none",
  withColor: null,
  withAnimation: null,
  withTranslation: null,
  isHidden: false,
  isDisabled: false,
};
/**
## Notes
- The design system used for this component is Material UI (@mui/material)
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function VCardWithButton(props) {
  //-------------------------------------------------------------------
  // 1. Destructuring props
  //-------------------------------------------------------------------
  const {
    id,
    name,
    description,
    buttonText,
    checked,
    image,
    withColor,
    imageLibrary,
    onClick,
  } = props;
  //-------------------------------------------------------------------
  // 2. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "v-card-with-button");
  //-------------------------------------------------------------------
  // 3. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props);
  //-------------------------------------------------------------------
  // 4. Get translation of the component
  //-------------------------------------------------------------------
  let tObj = getTranslation(props.withTranslation);
  //-------------------------------------------------------------------
  // 5. Function to set image of the card
  //-------------------------------------------------------------------
  const getBackground = () => {
    if (image) {
      return {
        backgroundImage: `url(${resolveImage(image.id, imageLibrary)})`,
      };
    }
  };
  const background = getBackground();

  // ========================= Render Function =================================

  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className={`qui ${quommonClasses.parentClasses}`}
    >
      <div className="qui-v-card-container qt-shadow">
        <div
          className="qui-v-card-image-container"
          style={{
            ...background,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          {checked && (
            <div className="qui-v-card-checkbox-container">
              <i className="fas fa-check-square"></i>
            </div>
          )}
        </div>
        <div className="qui-v-card-text-container">
          <div className="qui-v-card-text">
            <h6 className="qui-v-card-title">{tObj ? tObj.name : name}</h6>
            <p className="qui-v-card-description qt-sm">
              {tObj ? tObj.description : description}
            </p>
          </div>
          <Button
            {...props}
            content={tObj?.buttonText || buttonText || "click here"}
            isFluid={false}
            withTranslation={null}
            withColor={withColor}
            onClick={() =>
              onClick({ id, name, description, buttonText, checked, image })
            }
          />
        </div>
      </div>
    </motion.div>
  );
}
