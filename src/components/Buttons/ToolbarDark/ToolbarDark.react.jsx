import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import _ from "lodash";
import {
  getQuommons,
  getAnimation,
} from "../../../common/javascripts/helpers";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./ToolbarDark.scss";
import "../../../common/stylesheets/overrule.scss";
import IconLink from "../IconLink/IconLink.react";

ToolbarDark.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================

  /**
     Toolbar icons data should be passed in content field and it is required field  
    */
  content: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      label: PropTypes.string,
      link: PropTypes.string,
    })
  ).isRequired,
  /**
    Set action emphasis in increasing order 
    */
  asEmphasis: PropTypes.oneOf(["text", "outlined", "contained"]),
  //=======================================
  // Quommon props
  //=======================================

  /**
    Use to define standard component type
    */
  asVariant: PropTypes.oneOf(["primary", "secondary", "success", "warning"]),
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
    ToolbarDark component must have the onClick function passed as props
    */
  onClick: PropTypes.func.isRequired,
};

ToolbarDark.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  content: [],
  asEmphasis: "text",
  //=======================================
  // Quommon props
  //=======================================
  asVariant: "primary",
  asSize: "normal",
  asPadded: "normal",
  asAligned: "center",

  withColor: null,
  withIcon: null,
  withAnimation: null,

  isHidden: false,
  isDisabled: false,
  isFluid: false,
};

/**
## Notes
- The design system used for this component is fontawesome Icons
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- props are not being passed to the ToolbarDark. Please speak to the admin to handle any new prop.
**/
export default function ToolbarDark(props) {
  const [hovered, setHovered] = useState(false);
  //-------------------------------------------------------------------
  // 1. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "button");
  if (props.isCircular) quommonClasses.childClasses += ` is-circular`;

  quommonClasses.childClasses += ` emp-${props.asEmphasis}`;

  //-------------------------------------------------------------------
  // 4. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props.withAnimation);

  let { content } = props;
  
  // ========================= Render Function =================================

  return (
    <div
      
      className={`qui ${quommonClasses.parentClasses}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`qui-backbar`}
        style={{ backgroundColor: props.withColor?.accentColor }}
      >
        <div className={`qui-icon`}>
          {_.map(content, (icon, index) => {
            return (
              <motion.div
                initial={animate.from}
                animate={animate.to}
                className="btn"
                key={index}
                variant={props.asEmphasis}
                color={props.asVariant}
              >
                <IconLink
                  {...props}
                  content={{ link: icon.link }}
                  withIcon={{ icon: icon.icon }}
                  withLabel={{ content: icon.label, format: icon.format }}
                  withColor={{ ...props.withColor }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
