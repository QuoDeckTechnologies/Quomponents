// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import _ from "lodash";
import {
  getAnimation,
  getTranslation,
  getQuommons,
} from "../../common/javascripts/helpers";
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
      icon: PropTypes.string,
      title: PropTypes.string,
      popover: PropTypes.string,
      onClick: PropTypes.func,
    })
  ).isRequired,
  //=======================================
  // Quommon props
  //=======================================
  /**
  Use to define component padding in increasing order
  */
  asPadded: PropTypes.oneOf(["fitted", "compact", "normal", "relaxed"]),
  /**
  Use to align content within the component container
  */
  asAligned: PropTypes.oneOf(["left", "right", "center"]),
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

ActionMenu.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  content: [],
  //=======================================
  // Quommon props
  //=======================================
  asPadded: "normal",
  asAligned: "left",
  withColor: null,
  withAnimation: null,
  withTranslation: null,

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
  //-------------------------------------------------------------------
  // 1. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "action-menu");
  //-------------------------------------------------------------------
  // 2. Set the component colors
  //-------------------------------------------------------------------
  let colors = props.withColor ? getColors(props.withColor) : {};
  //-------------------------------------------------------------------
  // 3. Get translation of the component
  //-------------------------------------------------------------------
  let labelContent = Object.assign({}, props.content);
  let iconLabel;
  let tObj;
  if (
    props.withTranslation?.lang &&
    props.withTranslation.lang !== "" &&
    props.withTranslation.lang !== "en"
  ) {
    tObj = getTranslation(props.withTranslation);
    iconLabel = tObj?.content;
    labelContent.content = tObj?.title;
  }
  //-------------------------------------------------------------------
  // 4. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props);

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
            className={` qui-action-menu-items  ${quommonClasses.childClasses}`}
            onMouseDown={() => content.onClick()}
            key={index}
            style={colors.backgroundColors}
          >
            <div className="popover">
              <i
                className={`qui-actionmenu-icons ${content?.icon}`}
                style={colors.accentColors}
              ></i>
              <span
                className={`qui-actionmenu-titles qt-sm`}
                style={colors.textColors}
              >
                {tObj ? iconLabel[index]["title"] : content?.title}
              </span>
              <span className="qui-action-menu-popover">
                {content?.popover}
              </span>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
}
