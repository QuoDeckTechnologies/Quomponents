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
  HCard component data has to be in content props.
  */
  content: PropTypes.object,
  /**
  HCard can set image from imageLibrary array
  */
  imageLibrary: PropTypes.array,
  /**
  Set action emphasis in increasing order 
  */
  asEmphasis: PropTypes.oneOf(["text", "outlined", "contained"]),
  /**
  Use for rounded corners or circular button 
  */
  isCircular: PropTypes.bool,
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
  HCard component must have the onClick function passed as props
  */
  onClick: PropTypes.func.isRequired,
};

HCard.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  content: {
    id: "",
    name: "",
    description: "",
    buttonText: "",
    checked: true,
    image: { id: "", extention: "" },
  },
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
export default function HCard(props) {
  //-------------------------------------------------------------------
  // 1. Destructuring props
  //-------------------------------------------------------------------
  const { content, withColor, imageLibrary, onClick } = props;
  //-------------------------------------------------------------------
  // 2. Function to handle click
  //-------------------------------------------------------------------
  const handleClick = () => {
    if (window.innerWidth <= 481) {
      onClick(content);
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
  let tObj = getTranslation(props.withTranslation);
  //-------------------------------------------------------------------
  // 6. Function to set image of the card
  //-------------------------------------------------------------------
  const getBackground = () => {
    if (content?.image) {
      return {
        backgroundImage: `url(${resolveImage(
          content?.image.id,
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
          {content?.checked && (
            <div
              className="qui-h-card-checkbox-container"
              style={{ backgroundColor: withColor?.accentBackgroundColor }}
            >
              <i
                className="fas fa-check-square"
                style={{ color: withColor?.accentColor }}
              ></i>
            </div>
          )}
        </div>
        <div className="qui-h-card-text-container">
          <div className="qui-h-card-text">
            <h4
              style={{
                color: withColor?.textColor,
              }}
            >
              {content?.name}
            </h4>
            <p
              style={{
                color: withColor?.textColor,
              }}
            >
              {content?.description}
            </p>
          </div>
          <Button
            {...props}
            content={
              tObj
                ? tObj.buttonText
                : content?.buttonText
                ? content?.buttonText
                : "click here"
            }
            isFluid={false}
            withTranslation={null}
            withColor={{
              backgroundColor: withColor?.buttonBackgroundColor,
              textColor: withColor?.buttonTextColor,
            }}
            onClick={() => onClick(content)}
          />
        </div>
      </div>
    </motion.div>
  );
}
