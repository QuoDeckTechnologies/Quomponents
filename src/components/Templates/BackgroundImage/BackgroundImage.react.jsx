// Import npm packages
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { getAnimation, getQuommons } from "../../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./BackgroundImage.scss";
import "../../../common/stylesheets/overrule.scss";
import SlideHeader from "../../SlideHeader/SlideHeader.react";
import TextBlock from "../../TextBlock/TextBlock.react";
import presenterBackground from "../../../assets/presenter-background.png";

BackgroundImage.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
    BackgroundImage data should be passed in data field and it is a required field
    */
    data: PropTypes.shape({
      image: PropTypes.string,
      title: PropTypes.string,
    }),
  /**
    BackgroundImage component can use presenter props to show presenter template
    */
  isPresenter: PropTypes.bool,
  //=======================================
  // Quommon props
  //=======================================
  /**
    Use to override component colors and behavior
    */
  withColor: PropTypes.shape({
    slideHeaderBackgroundColor: PropTypes.string,
    textBlockBackgroundColor: PropTypes.string,
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
};

BackgroundImage.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  data: {
    image: "",
    caption: "",
    label: "",
  },
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
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function BackgroundImage(props) {
  //-------------------------------------------------------------------
  // 1. Destructuring props
  //-------------------------------------------------------------------
  const { data, withColor, isPresenter } = props;
  //-------------------------------------------------------------------
  // 2. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "backgroundimage");
  //-------------------------------------------------------------------
  // 3. Function to return a view for BackgroundImage
  //-------------------------------------------------------------------
  const getView = (data) => {
    if (data?.title) {
      return (
        <SlideHeader
          content={{ title: data?.title }}
          withColor={{
            backgroundColor: withColor?.slideHeaderBackgroundColor,
            accentColor: withColor?.accentColor,
            textColor: withColor?.textColor,
          }}
        />
      );
    } else {
      return (
        data?.image && (
          <img
            className="qui-BackgroundImage-image"
            src={props.data?.image}
            alt="slide"
          />
        )
      );
    }
  };
  //-------------------------------------------------------------------
  // 4. Function to return a view for BackgroundImage with presenter
  //-------------------------------------------------------------------
  const getPresenterView = (data) => {
    return (
      <div className="qui-BackgroundImage-text-block">
        <div className="qui-BackgroundImage-block-header">
          <TextBlock
            content={data?.BackgroundImage}
            conversation={false}
            asFloated="left"
            withColor={{
              backgroundColor: withColor?.textBlockBackgroundColor,
              textColor: withColor?.textColor,
            }}
          />
        </div>
      </div>
    );
  };
  //-------------------------------------------------------------------
  // 5. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props.withAnimation);
  //-------------------------------------------------------------------
  // 6. Function to set background for presenter view
  //-------------------------------------------------------------------
  const getBackground = () => {
    return {
      background: `url(${presenterBackground})`,
      backgroundSize: "cover",
    };
  };
  const background = isPresenter
    ? getBackground()
    : { backgroundColor: withColor?.backgroundColor };

  // ========================= Render Function =================================

  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className={`qui qui-title-card ${quommonClasses.parentClasses}`}
      style={background}
    >
      <div className={`qui-title-container ${quommonClasses.childClasses}`}>
        <div className="qui-title-slide-header">
          {!isPresenter && getView(data)}
          {data?.icon && data?.title && (
            <div
              className={`qui-title-icon-block ${
                isPresenter ? "qui-title-presenter" : ""
              }`}
            >
            </div>
          )}
        </div>
      </div>
      {isPresenter && getPresenterView(data)}
      {!isPresenter && (
        <p className={`qui-title-subtitle`}>{props.data?.subtitle}</p>
      )}
    </motion.div>
  );
}