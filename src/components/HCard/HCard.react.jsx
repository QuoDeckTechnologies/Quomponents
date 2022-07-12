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
import "./HCard.scss";
import "../../common/stylesheets/overrule.scss";
import Button from "../Buttons/Button/Button.react";

HCard.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
  HCard component id has to be in id props.
  */
  id: PropTypes.string,
  /**
  HCard component name has to be in name props.
  */
  name: PropTypes.string,
  /**
  HCard component description has to be in description props.
  */
  description: PropTypes.string,
  /**
  HCard component button text has to be in buttonText props.
  */
  buttonText: PropTypes.string,
  /**
  Use to set checked HCard component.
  */
  checked: PropTypes.bool,
  /**
  HCard component image has to be in image props.
  */
  image: PropTypes.object,
  /**
  HCard can set image from imageLibrary array
  */
  imageLibrary: PropTypes.array,
  /**
  Use for show or hide button 
  */
  showButton: PropTypes.bool,
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
  HCard component must have the onClick function passed as props
  */
  onClick: PropTypes.func.isRequired,
};

HCard.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  id: "",
  name: "",
  description: "",
  buttonText: "",
  checked: true,
  image: { id: "", extention: "" },
  imageLibrary: [],
  showButton: true,
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
export default function HCard(props) {
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
    showButton,
    onClick,
  } = props;
  //-------------------------------------------------------------------
  // 2. Function to handle click
  //-------------------------------------------------------------------
  const handleClick = () => {
    if (!showButton) {
      onClick({ id, name, description, buttonText, checked, image });
    }
  };
  //-------------------------------------------------------------------
  // 3. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "h-card-with-button");
  //-------------------------------------------------------------------
  // 4. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props);
  //-------------------------------------------------------------------
  // 5. Get translation of the component
  //-------------------------------------------------------------------
  let tObj = getTranslation(props.withTranslation);
  //-------------------------------------------------------------------
  // 6. Function to set image of the card
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
      <div
        className={`qui-h-card-container ${
          showButton
            ? "qui-h-card-with-button-container"
            : "qui-h-card-without-button-container"
        } qt-shadow`}
        onClick={handleClick}
      >
        <div
          className="qui-h-card-image-container"
          style={{
            ...background,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          {checked && (
            <div className="qui-h-card-checkbox-container">
              <i className="fas fa-check-square"></i>
            </div>
          )}
        </div>
        <div className="qui-h-card-text-container">
          <div className="qui-h-card-text">
            <h6 className="qui-h-card-title">{tObj ? tObj.name : name}</h6>
            <p className="qui qt-sm qui-h-card-description">
              {tObj ? tObj.description : description}
            </p>
          </div>
          {showButton && (
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
          )}
        </div>
      </div>
    </motion.div>
  );
}
