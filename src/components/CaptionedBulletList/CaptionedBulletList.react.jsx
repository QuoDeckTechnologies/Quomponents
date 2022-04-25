// Import npm packages
import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
  getAnimation,
  getQuommons,
} from "../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./CaptionedBulletList.scss";
import "../../common/stylesheets/overrule.scss";
import SlideHeader from "../SlideHeader/SlideHeader.react";
import TextBlock from "../TextBlock/TextBlock.react";
import BulletBlock from "../BulletBlock/BulletBlock.react";

CaptionedBulletList.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
    CaptionedBulletList data should be passed in content field and it is a required field
    */
  data: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    textBlockTitle: PropTypes.string,
    image:PropTypes.string,
    blockBullets: PropTypes.arrayOf(
      PropTypes.string
    )
  }),

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
    labelColor: PropTypes.string,
    captionColor: PropTypes.string,
    slideHeaderTextColor: PropTypes.string,
    slideHeaderAccentColor: PropTypes.string,
    slideHeaderBackgroundColor: PropTypes.string,
    textBlockBackgroundColor: PropTypes.string,
    bulletBlockTextColor: PropTypes.string,
    bulletBlockBackgroundColor: PropTypes.string,
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
  Use to float the component in parent container
  */
  asFloated: PropTypes.oneOf(["left", "right", "inline"]),
};

CaptionedBulletList.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  data: {
    slideHeaderTitle: "",
    slideHeaderSubtitle: "",
    textBlockTitle: "",
    blockBullets: []
  },
  //=======================================
  // Quommon props
  //=======================================
  asVariant: "primary",
  asFloated: "inline",
  withColor: null,
  withAnimation: null,
  isHidden: false,
};
/**
## Notes
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function CaptionedBulletList(props) {
  let { data } = props
  //-------------------------------------------------------------------
  // 2. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "captioned-bullet-list");
  quommonClasses.childClasses += ` variant-${props.asVariant}-text`;
  //-------------------------------------------------------------------
  // 5. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props.withAnimation);

  let bulletBlockColors = {
    textColor: props.withColor?.bulletBlockTextColor,
    backgroundColor: props.withColor?.bulletBlockBackgroundColor,
  }
  let slideHeaderColors = {
    textColor: props.withColor?.slideHeaderTextColor,
    accentColor: props.withColor?.slideHeaderAccentColor,
    backgroundColor: props.withColor?.slideHeaderBackgroundColor
  }
  let SlideHeaderText = {
    title: props.data?.title,
    subTitle: props.data?.subtitle,
  }
  // ========================= Render Function =================================
  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className={`qui qui-captioned-bullet-list-card ${quommonClasses.parentClasses}`}
    >
      <div className={`${quommonClasses.childClasses}`}>
        {data.title || data.subtitle ? (
          <SlideHeader {...props} content={SlideHeaderText} withColor={slideHeaderColors} />
        ) : (
          <img className="qui-captioned-bullet-list-image" src={props.data.image} alt="" />
        )}
        <TextBlock {...props} content={props.data?.textBlockTitle} withColor={{ backgroundColor: props.withColor?.textBlockBackgroundColor }} />
        <BulletBlock {...props} content={props.data?.blockBullets} withColor={bulletBlockColors} asVariant={props.asVariant} asFloated={"inline"} />
      </div>
    </motion.div>
  );
}