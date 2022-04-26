// Import npm packages
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { getAnimation, getQuommons } from "../../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./Title.scss";
import "../../../common/stylesheets/overrule.scss";
import SlideHeader from "../../SlideHeader/SlideHeader.react";
import IconBlock from "../../IconBlock/IconBlock.react";
import TextBlock from "../../TextBlock/TextBlock.react";
import presenterBackground from "../../../assets/presenter-background.png";
import presenterImage from "../../../assets/presenter.png";

Title.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
    Title data should be passed in data field and it is a required field
    */
  data: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    image: PropTypes.string,
    icon: PropTypes.string,
  }),
  /**
    Title component can use presenter props to show presenter template
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
  /**
    Title component must have the onClick function passed as props
    */
  onClick: PropTypes.func.isRequired,
};

Title.defaultProps = {
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
export default function Title(props) {
  //-------------------------------------------------------------------
  // 1. Destructuring props
  //-------------------------------------------------------------------
  const { data, withColor, isPresenter } = props;
  //-------------------------------------------------------------------
  // 2. Defining hooks
  //-------------------------------------------------------------------
  useEffect(() => {
    props.onClick(data);
  }, [data]);
  //-------------------------------------------------------------------
  // 3. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "title");
  //-------------------------------------------------------------------
  // 4. Function to return a view for title
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
            className="qui-title-image"
            src={props.data?.image}
            alt="slide"
          />
        )
      );
    }
  };
  //-------------------------------------------------------------------
  // 5. Function to return a view for title with presenter
  //-------------------------------------------------------------------
  const getPresenterView = (data) => {
    return (
      <div className="qui-title-text-block">
        <div className="qui-title-block-header">
          <TextBlock
            content={data?.title}
            conversation={false}
            asFloated="left"
            withColor={{
              backgroundColor: withColor?.textBlockBackgroundColor,
              textColor: withColor?.textColor,
            }}
          />
        </div>
        <div className="qui-title-block-subtitle">
          <TextBlock
            content={data?.subtitle}
            conversation={false}
            asFloated="left"
            asSize="small"
            withColor={{
              backgroundColor: withColor?.textBlockBackgroundColor,
              textColor: withColor?.textColor,
            }}
          />
        </div>
        <img
          className="qui-title-presenter"
          src={presenterImage}
          alt="Presenter"
        />
      </div>
    );
  };
  //-------------------------------------------------------------------
  // 6. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props.withAnimation);
  //-------------------------------------------------------------------
  // 7. Function to set background for presenter view
  //-------------------------------------------------------------------
  const getBackground = () => {
    return {
      background: `url(${presenterBackground})`,
      backgroundSize: "cover",
    };
  };
  const background = isPresenter ? getBackground() : {};

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
              <IconBlock
                withColor={{
                  accentColor: withColor?.textColor,
                  backgroundColor: withColor?.accentColor,
                }}
                withIcon={{ name: data?.icon }}
              />
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
