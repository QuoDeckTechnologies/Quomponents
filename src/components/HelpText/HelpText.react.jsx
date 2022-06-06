// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { getQuommons, getTranslation } from "../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./HelpText.scss";
import "../../common/stylesheets/overrule.scss";

HelpText.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
  Use to define component content.
  */
  content: PropTypes.string,
  //=======================================
  // Quommon props
  //=======================================
  /**
  Use to define component text size in increasing order
  */
  asSize: PropTypes.oneOf([
    "tiny",
    "small",
    "normal",
    "big",
    "huge",
    "massive",
  ]),
  /**
  Use to define component padding in increasing order
  */
  asPadded: PropTypes.oneOf(["fitted", "compact", "normal", "relaxed"]),
  /**
  Use to override component colors and behavior
  */
  withColor: PropTypes.shape({
    backgroundColor: PropTypes.string,
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
};

HelpText.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  content: "",
  //=======================================
  // Quommon props
  //=======================================
  asSize: "normal",
  asPadded: "normal",
  withColor: null,
  withAnimation: null,
  withTranslation: null,
  isHidden: false,
};

/**
## Notes
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function HelpText(props) {
  //-------------------------------------------------------------------
  // 1. Destructuring content and withColor props
  //-------------------------------------------------------------------
  const { content, withColor } = props;
  //-------------------------------------------------------------------
  // 2. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "helptext");
  //-------------------------------------------------------------------
  // 3. Translate the text objects in case their is a dictionary provided
  //-------------------------------------------------------------------
  let tObj = getTranslation(props.withTranslation);
  let textContent = content;
  if (tObj) {
    textContent = tObj.content;
  }

  // ========================= Render Function =================================

  return (
    <div className={`qui ${quommonClasses.parentClasses}`}>
      <div
        className={`qui-helptext-container ${quommonClasses.childClasses}`}
        style={{
          backgroundColor: withColor?.backgroundColor,
          color: withColor?.textColor,
        }}
      >
        <p className="qui-helptext-text">
          {textContent ? textContent : "This is what your learners see"}
        </p>
        <i
          className="fas fa-angle-down"
          style={{ color: withColor?.textColor }}
        ></i>
      </div>
    </div>
  );
}
