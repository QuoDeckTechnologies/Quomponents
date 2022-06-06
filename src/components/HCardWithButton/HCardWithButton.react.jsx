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
import "./HCardWithButton.scss";
import "../../common/stylesheets/overrule.scss";
import Button from "../Buttons/Button/Button.react";

HCardWithButton.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
  HCard component text has to be in content props.
  */
  content: PropTypes.object,
  /**
  H Card can set background image from imageLibrary array
  */
  imageLibrary: PropTypes.array,
  /**
  Set action emphasis in increasing order 
  */
  asEmphasis: PropTypes.oneOf(["text", "outlined", "contained"]),
  /**
  Use for rounded corners or circular icon button 
  */
  isCircular: PropTypes.bool,
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
    accentBackgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    buttonBackgroundColor: PropTypes.string,
    buttonTextColor: PropTypes.string,
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
  HCardWithButton component must have the onClick function passed as props
  */
  onClick: PropTypes.func.isRequired,
};

HCardWithButton.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  content: {},
  imageLibrary: [],
  asEmphasis: "contained",
  isCircular: false,
  //=======================================
  // Quommon props
  //=======================================
  asVariant: "primary",
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
export default function HCardWithButton(props) {
  //-------------------------------------------------------------------
  // 1. Destructuring props
  //-------------------------------------------------------------------
  const { content, withColor, imageLibrary, onClick } = props;
  //-------------------------------------------------------------------
  // 2. Function to handle click
  //-------------------------------------------------------------------
  const handleClick = () => {
    if (window.innerWidth <= 481) {
      onClick();
    }
  };
  //-------------------------------------------------------------------
  // 3. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "h-card-with-button");
  //-------------------------------------------------------------------
  // 4. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props.withAnimation);
  //-------------------------------------------------------------------
  // 5. Get translation of the component
  //-------------------------------------------------------------------
  let cardContent = {};
  let tObj = getTranslation(props.withTranslation);
  if (tObj) {
    cardContent = { ...tObj };
  } else {
    cardContent = { ...content };
  }
  //-------------------------------------------------------------------
  // 6. Function to set image of the card
  //-------------------------------------------------------------------
  const getBackground = () => {
    if (content?.backgroundImage) {
      return {
        backgroundImage: `url(${resolveImage(
          content?.backgroundImage.id,
          imageLibrary
        )})`,
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
        className="qui-h-card-container"
        style={{
          backgroundColor: withColor?.backgroundColor,
          color: withColor.textColor,
        }}
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
          <div
            className="qui-h-card-checkbox-container"
            style={{ backgroundColor: withColor.accentBackgroundColor }}
          >
            <i
              className={
                content?.checked ? "fas fa-check-square" : "far fa-square"
              }
              style={{ color: withColor?.accentColor }}
            ></i>
          </div>
        </div>
        <div className="qui-h-card-text-container">
          <div className="qui-h-card-text">
            <h4>{cardContent?.title}</h4>
            <p>{cardContent?.description}</p>
          </div>
          <Button
            {...props}
            content={cardContent?.buttonText}
            isFluid={false}
            withTranslation={null}
            withColor={{
              backgroundColor: withColor?.buttonBackgroundColor,
              textColor: withColor?.buttonTextColor,
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
