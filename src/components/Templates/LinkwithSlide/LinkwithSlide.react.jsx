// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
  getAnimation,
  getQuommons,
  getTranslation,
  resolveImage,
} from "../../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./LinkwithSlide.scss";
import "../../../common/stylesheets/overrule.scss";
import SlideHeader from "../../SlideHeader/SlideHeader.react";
import Button from "../../Buttons/Button/Button.react";

LinkwithSlide.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
    LinkwithSlide data should be passed in data field and it is a required field
    */
  data: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    paragraph: PropTypes.string,
    gotoSlide: PropTypes.number,
    image: PropTypes.object,
    backgroundImage: PropTypes.object,
  }),
  /**
    LinkwithSlide can set presenter image from imageLibrary array
    */
  imageLibrary: PropTypes.array,
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
    textColor: PropTypes.string,
    slideHeaderAccentColor: PropTypes.string,
    slideHeaderBackgroundColor: PropTypes.string,
    slideHeaderTextColor: PropTypes.string,
    buttonBackgroundColor: PropTypes.string,
    buttonTextColor: PropTypes.string,
    buttonHoverBackgroundColor: PropTypes.string,
    buttonHoverTextColor: PropTypes.string,
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
    LinkwithSlide component must have the onClick function passed as props
    */
  onClick: PropTypes.func.isRequired,
};

LinkwithSlide.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  data: {},
  imageLibrary: null,
  //=======================================
  // Quommon props
  //=======================================
  asVariant: "warning",
  asFloated: "left",
  withColor: null,
  withAnimation: null,
  withTranslation: null,
  isHidden: false,
};
/**
## Notes
- The design system used for this component is Material UI (@mui/material)
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function LinkwithSlide(props) {
  //-------------------------------------------------------------------
  // 1. Destructuring props
  //-------------------------------------------------------------------
  const { data, imageLibrary, withColor } = props;
  //-------------------------------------------------------------------
  // 2. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "link-with-slide");
  //-------------------------------------------------------------------
  // 3. Function to return a view for LinkwithSlide
  //-------------------------------------------------------------------
  const getView = (data) => {
    if (!data?.image && (data?.title || data?.subtitle)) {
      return (
        <SlideHeader
          content={{ title: data?.title, subTitle: data?.subtitle }}
          withColor={{
            backgroundColor: withColor?.slideHeaderBackgroundColor,
            accentColor: withColor?.slideHeaderAccentColor,
            textColor: withColor?.slideHeaderTextColor,
          }}
        />
      );
    } else {
      return (
        <img
          className="qui-link-with-slide-image"
          src={resolveImage(data?.image?.id, imageLibrary)}
          alt="slide"
        />
      );
    }
  };
  //-------------------------------------------------------------------
  // 4. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props);
  //-------------------------------------------------------------------
  // 5. Translate the text objects in case their is a dictionary provided
  //-------------------------------------------------------------------
  let tObj;
  if (
    props.withTranslation?.lang &&
    props.withTranslation.lang !== "" &&
    props.withTranslation.lang !== "en"
  ) {
    tObj = getTranslation(props.withTranslation);
  }
  //-------------------------------------------------------------------
  // 6. Functions to set background for the template
  //-------------------------------------------------------------------
  const getBackground = () => {
    if (data?.backgroundImage) {
      return {
        backgroundImage: `url(${resolveImage(
          data?.backgroundImage.id,
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
      className={`qui qui-link-with-slide-card ${quommonClasses.parentClasses}`}
      style={{
        ...background,
        backgroundColor: withColor?.backgroundColor,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        className={`qui-link-with-slide-container ${quommonClasses.childClasses}`}
      >
        <div
          className={`qui-link-with-slide-header ${
            data?.presenter ? "qui-link-with-slide-header-presenter" : ""
          }`}
        >
          {getView(data)}
        </div>
      </div>
      <div className="qui-link-with-slide-card-subtitle">
        <p
          style={{ color: withColor?.textColor }}
          className={`qui-link-with-slide-subtitle`}
        >
          {data?.paragraph}
        </p>
      </div>
      <div className="qui-link-with-slide-button">
        <Button
          content={tObj ? tObj.button : "go"}
          asFloated="inline"
          asVariant={props.asVariant}
          onClick={() => props.onClick(data?.gotoSlide)}
          withColor={{
            backgroundColor: withColor?.buttonBackgroundColor,
            textColor: withColor?.buttonTextColor,
            hoverBackgroundColor: withColor?.buttonHoverBackgroundColor,
            hoverTextColor: withColor?.buttonHoverTextColor,
          }}
        />
      </div>
    </motion.div>
  );
}
