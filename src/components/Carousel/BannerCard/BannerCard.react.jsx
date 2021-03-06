import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Ribbon from "../../Ribbons/Ribbon/Ribbon.react";

import {
  getQuommons,
  getTranslation,
  getAnimation,
} from "../../../common/javascripts/helpers";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./BannerCard.scss";
import "../../../common/stylesheets/overrule.scss";

BannerCard.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
    Banner Card data should be passed in content field and it is required field
    */
  content: PropTypes.shape({
    image: PropTypes.string,
    tag: PropTypes.oneOf(["new", "premium", "restricted", "free", ""]),
    header: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,

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
    Use to enable/disable the component
    */
  isDisabled: PropTypes.bool,
  /**
    Use to show/hide the component
    */
  isHidden: PropTypes.bool,

  /**
    Button component must have the onClick function passed as props
    */
  onClick: PropTypes.func.isRequired,
};

BannerCard.defaultProps = {
  // Component Specific props
  //=======================================
  content: {},
  // Quommon props
  //=======================================
  asVariant: "primary",

  withColor: null,
  withAnimation: null,
  withTranslation: null,

  isDisabled: false,
  isHidden: false,
};

/**
## Notes
- The design system used for this component is Material UI (@mui/material)
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- MUI props are not being passed to the button. Please speak to the admin to handle any new MUI prop.
**/
export default function BannerCard(props) {
  let { content } = props;
  let boxHeader = content?.header;
  let boxContent = content?.content;
  //-------------------------------------------------------------------
  // 1. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "banner-card");

  //-------------------------------------------------------------------
  // 2. Set the component colors
  //-------------------------------------------------------------------
  let colors = {
    backgroundColor: props.withColor?.backgroundColor,
    color: props.withColor?.textColor,
  };

  //-------------------------------------------------------------------
  // 3. Translate the text objects in case their is a dictionary provided
  //-------------------------------------------------------------------
  if (
    props.withTranslation?.lang &&
    props.withTranslation.lang !== "" &&
    props.withTranslation.lang !== "en"
  ) {
    let tObj = getTranslation(props.withTranslation, "bannercard");
    boxHeader = tObj?.header;
    boxContent = tObj?.content;
  }

  //-------------------------------------------------------------------
  // 4. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props.withAnimation);

  // ========================= Render Function =================================
  let showBox = boxHeader || boxContent;

  return (
    <div
      className={`qt-shadow qui ${quommonClasses.parentClasses}`}
      style={{ backgroundImage: content ? `url(${content.image})` : "" }}
      onClick={()=>props.onClick(props)}
    >
      {content && content.tag && content.tag !== "" && (
        <div className="qui-card-label">
          <Ribbon
            asFloated="right"
            asEmphasis={content.tag}
            withTranslation={props.withTranslation}
          />
        </div>
      )}
      {content && showBox && (
        <motion.div
          initial={animate.from}
          animate={animate.to}
          className={`qui-carousel qui-slider-card-box ${quommonClasses.childClasses}`}
          style={Object.assign({}, colors, props.style)}
        >
          <div className="qui-slider-card-box-header line-clamp">
            {boxHeader}
          </div>
          <div className="qui-slider-card-box-content line-clamp">
            {boxContent}
          </div>
        </motion.div>
      )}
      {content && showBox && (
        <motion.div
          initial={animate.from}
          animate={animate.to}
          className={`qui-carousel qui-slider-card-box ${quommonClasses.childClasses}`}
          style={Object.assign({}, colors, props.style)}
        >
          <div className="qui-slider-card-box-header line-clamp">
            {boxHeader}
          </div>
          <div className="qui-slider-card-box-content line-clamp qt-sm">
            {boxContent}
          </div>
        </motion.div>
      )}
    </div>
  );
}
