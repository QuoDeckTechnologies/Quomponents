// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import _ from "lodash";
import { getAnimation, getQuommons } from "../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./ActionMenu.scss";
import "../../common/stylesheets/overrule.scss";

ActionMenu.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
      ActionMenu data should be passed in content field and it is a required field
      */
  content: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      icon: PropTypes.string,
    })
  ).isRequired,
  //=======================================
  // Quommon props
  //=======================================
  /**
      Use to override component colors and behavior
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
      ActionMenu component must have the onClick function passed as props
      */
  onClick: PropTypes.func.isRequired,
};

ActionMenu.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  content: [],
  //=======================================
  // Quommon props
  //=======================================
  withColor: null,
  withAnimation: null,
  isDisabled: false,
  isHidden: false,
};

function getColors(colors) {
  let colorStyle = {
    textColors: {
      color: colors.textColor,
    },
    accentColors: {
      color: colors.accentColor,
    },
    backgroundColors: {
      backgroundColor: colors.backgroundColor,
    },
  };
  return colorStyle;
}
/**
## Notes
- The design system used for this component is Fontawesome Icon
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function ActionMenu(props) {
  const handelevent = (index) => {
    if (index === 0) {
      //index 0 is for Open Deck
      return props.onClick(index);
    } else if (index === 1) {
      //index 1 is for Edot Deck
      return props.onClick(index);
    } else if (index === 2) {
      //index 2 is for Move Deck Up
      return props.onClick(index);
    } else if (index === 3) {
      //index 3 is for Move Deck Down
      return props.onClick(index);
    } else if (index === 4) {
      //index 4 is for Move To Topic
      return props.onClick(index);
    } else if (index === 5) {
      //index 5 is for Unpublish Deck
      return props.onClick(index);
    } else {
      //index 6 is for Delete Deck
      return props.onClick(index);
    }
  };
  //-------------------------------------------------------------------
  // 1. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "actionmenu");
  //-------------------------------------------------------------------
  // 2. Set the component colors
  //-------------------------------------------------------------------
  let colors = props.withColor ? getColors(props.withColor) : {};
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
      {_.map(props.content, (content, index) => {
        return (
          <div
            className={`qui-actionmenu-items`}
            onMouseDown={() => handelevent(index)}
            key={index}
            style={colors.backgroundColors}
          >
            <div className="qui-actionmenu-icon">
              <i
                className={`qui-actionmenu-icons ${content.icon}`}
                style={colors.accentColors}
              ></i>
            </div>
            <div className={`qui-actionmenu-titles `} style={colors.textColors}>
              {content.title}
            </div>
          </div>
        );
      })}
    </motion.div>
  );
}
