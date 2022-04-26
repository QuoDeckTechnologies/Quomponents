// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
  getAnimation,
  getQuommons,
} from "../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./Diptych.scss";
import "../../common/stylesheets/overrule.scss";
import SlideHeader from "../SlideHeader/SlideHeader.react";
import TextBlock from "../TextBlock/TextBlock.react";
import ClickableImage from "../ClickableImage/ClickableImage.react";

Diptych.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
    Diptych data should be passed in data field and it is a required field
    */
  data: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    caption: PropTypes.string,
    headerImage: PropTypes.string,
    image1: PropTypes.string,
    image2: PropTypes.string,
  }),
  /**
    Diptych slideId should be passed with props, to specify the slide.
    */
  slideId: PropTypes.number,
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
    slideHeaderTextColor: PropTypes.string,
    slideHeaderAccentColor: PropTypes.string,
    slideHeaderBackgroundColor: PropTypes.string,
    textBlockTextColor: PropTypes.string,
    textBlockBackgroundColor: PropTypes.string,
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
    Diptych component must have the onClick function passed as props
    */
  onClick: PropTypes.func.isRequired,
};

Diptych.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  data: {
    title: "",
    subtitle: "",
    caption: "",
    headerImage: "",
    image1: "",
    image2: "",
  },
  slideId: 0,
  //=======================================
  // Quommon props
  //=======================================
  asVariant: "primary",
  withColor: null,
  withAnimation: null,
  isHidden: false,
  isDisabled: false,

};
/**
## Notes
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- Displays a Diptych with TextBlock, clickableImages and a SlideHeader
**/
export default function Diptych(props) {
  let { data } = props
  //-------------------------------------------------------------------
  // Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "diptych");
  quommonClasses.childClasses += ` variant-${props.asVariant}-text`;
  //-------------------------------------------------------------------
  //  Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props.withAnimation);
  //-------------------------------------------------------------------
  //  Setting the colors of imported components
  //-------------------------------------------------------------------
  let slideHeaderColors = {
    textColor: props.withColor?.slideHeaderTextColor,
    accentColor: props.withColor?.slideHeaderAccentColor,
    backgroundColor: props.withColor?.slideHeaderBackgroundColor
  }
  let textBlockColors = {
    textColor: props.withColor?.textBlockTextColor,
    backgroundColor: props.withColor?.textBlockBackgroundColor
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
      className={`qui ${quommonClasses.parentClasses}`}
    >{data &&
      <div className="qui-diptych-card" key={"diptych-slide-" + props.slideId}>
        <div className={`${quommonClasses.childClasses}`} key={"diptych-" + props.slideId}>
          {data?.title || data?.subtitle ? (
            <SlideHeader {...props} content={SlideHeaderText} withColor={slideHeaderColors} />
          ) : (
            <img className="qui-diptych-image" src={data?.headerImage} alt="" />
          )}
          <div className="qui-diptych-clickable-images">
            <ClickableImage {...props} content={{ image: data?.image1 }} onClick={(e) => props.onClick(e)} />
            <ClickableImage {...props} content={{ image: data?.image2 }} onClick={(e) => props.onClick(e)} />
          </div>
          <TextBlock {...props} content={data?.caption} withColor={textBlockColors} />
        </div>
      </div>}
    </motion.div>
  );
}