// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { getAnimation, getQuommons } from "../../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./OptionItemOne.scss";
import "../../../common/stylesheets/overrule.scss";
import InputField from "../../InputField/InputField.react";

OptionItemOne.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
     OptionItemOne targetName, value, placeholder should be passed in content object
    */
  content: PropTypes.shape({
    targetName: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    maxLength:PropTypes.number,
  }),
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
  Use to enable/disable the component
 */
  isDisabled: PropTypes.bool,
  /**
  Use to show/hide the component
  */
  isHidden: PropTypes.bool,
  /**
    OptionItemOne component must have the onInput function passed as props
    */
  onInput: PropTypes.func.isRequired,
  /**
    OptionItemOne component must have the onClose function passed as props
    */
  onClose: PropTypes.func.isRequired,
};

OptionItemOne.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  content: {},
  //=======================================
  // Quommon props
  //=======================================
  withColor: null,
  withAnimation: null,
  isDisabled: false,
  isHidden: false,
};
/**
## Notes
- The design system used for this component is Fontawesome Icon
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function OptionItemOne(props) {
  //-------------------------------------------------------------------
  // 1. Destructuring content prop
  //-------------------------------------------------------------------
  const { content } = props;
  //-------------------------------------------------------------------
  // 2. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "option-item-one");
  //-------------------------------------------------------------------
  // 3. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props.withAnimation);

  // ========================= Render Function =================================

  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className={`qui ${quommonClasses.parentClasses}`}
    >
      <div className="qui-inline-option-container">
        <InputField
          name={content?.targetName}
          content={{
            value: content?.value,
            placeholder: content?.placeholder,
            maxLength: content?.maxLength,
          }}
          asEmphasis="listInput"
          withColor={props.withColor}
          onClick={(name, value) => props.onInput(name, value)}
        />
        <div className="qui-inline-edit-with-remove-button-close-icon">
          <i
            className="qui-inline-edit-with-remove-button-icon fas fa-times"
            data-id={content?.targetName}
            onClick={(e) => props.onClose(e.target.dataset.id)}
          ></i>
        </div>
      </div>
    </motion.div>
  );
}
