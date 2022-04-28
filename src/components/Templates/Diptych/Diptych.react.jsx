// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { motion } from "framer-motion";
import {
  getAnimation,
  getQuommons,
} from "../../../common/javascripts/helpers.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./Diptych.scss";
import "../../../common/stylesheets/overrule.scss";
import SlideHeader from "../../SlideHeader/SlideHeader.react";
import TextBlock from "../../TextBlock/TextBlock.react";
import ClickableImage from "../../ClickableImage/ClickableImage.react";

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
    backgroundImage: PropTypes.string,
    diptych: PropTypes.array,
    presenterTitle: PropTypes.string,
    presenterSubtitle: PropTypes.string,
    presenterCaption: PropTypes.string,
    presenterBackgroundImage: PropTypes.string,
    presenterImage: PropTypes.string,

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
    backgroundColor: PropTypes.string,
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
    Diptych component can use presenter props to show presenter template
    */
  isPresenter: PropTypes.bool,
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
    backgroundImage: "",
    diptych: [],
    presenterTitle: "",
    presenterSubtitle: "",
    presenterCaption: "",
    presenterBackgroundImage: "",
    presenterImage: "",
  },
  slideId: 0,
  isPresenter: false,
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
  const { data, withColor, isPresenter } = props;
  //-------------------------------------------------------------------
  // Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "diptych");
  quommonClasses.childClasses += ` variant-${props.asVariant}-text`;

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
    title: data?.title,
    subTitle: data?.subtitle,
  }
  //-------------------------------------------------------------------
  // Function to return a view for diptych
  //-------------------------------------------------------------------
  const diptychView = (data) => {
    return (
      <div className="qui-diptych-card" key={"diptych-slide-" + props.slideId} style={{
        ...background,
        backgroundColor: withColor?.backgroundColor,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
        <div className={`${quommonClasses.childClasses}`} key={"diptych-" + props.slideId}>
          {!data?.headerImage && (data?.title || data?.subtitle) && (
            <SlideHeader
              content={SlideHeaderText}
              withColor={slideHeaderColors} />
          )}
          {data?.headerImage && (
            <img className="qui-diptych-image" src={data?.headerImage} alt="" />
          )}
          <div className="qui-diptych-clickable-images">
            {_.map(data?.diptych, (image, index) => {
              return (
                <div className="qui-clickable-image-container" key={"diptych-image" + index}>
                  <ClickableImage {...props} content={{ image }} onClick={(e) => props.onClick(e)} />
                </div>
              );
            })}
          </div>
          <TextBlock {...props} content={data?.caption} withColor={textBlockColors} />
        </div>
      </div>
    );
  };
  //-------------------------------------------------------------------
  // Function to return a view for diptych with presenter
  //-------------------------------------------------------------------
  const diptychPresenterView = (data) => {
    return (
      <div className="qui-diptych-presenter-container"
        style={{
          ...background,
          backgroundColor: withColor?.backgroundColor,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="qui-diptych-presenter-title" >
          <TextBlock {...props}
            content={data?.presenterTitle}
            asFloated="left"
            withColor={textBlockColors} />
        </div>
        <div className="qui-diptych-presenter-sub-title">
          <TextBlock {...props}
            content={data?.presenterSubtitle}
            asFloated="left"
            withColor={textBlockColors} />
        </div>
        <div className="qui-diptych-clickable-images">
          {_.map(data?.diptych, (image, index) => {
            return (
              <div className="qui-clickable-image-container" key={"diptych-image" + index}>
                <ClickableImage {...props} content={{ image }} onClick={(e) => props.onClick(e)} />
              </div>
            );
          })}
        </div>
        <div className="qui-diptych-presenter-caption">
          <TextBlock {...props}
            content={data?.presenterCaption}
            asFloated="left"
            conversation={true}
            position="right-bottom"
            withColor={textBlockColors} />
        </div>
        <img
          className="qui-diptych-presenter"
          src={data.presenterImage}
          alt=""
        />
      </div>

    );
  };
  //-------------------------------------------------------------------
  //  Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props.withAnimation);

  //-------------------------------------------------------------------
  // Function to set background for presenter view
  //-------------------------------------------------------------------
  const getBackground = () => {
    return {
      backgroundImage: `url(${data?.backgroundImage})`,
    };
  };
  const getPresenterBackground = () => {
    return {
      backgroundImage: `url(${data?.presenterBackgroundImage})`,
    };
  };
  const background = isPresenter ? getPresenterBackground() : getBackground();
  // ========================= Render Function =================================
  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className={`qui ${quommonClasses.parentClasses} `}
    >
      {data && <div>
        {isPresenter ? diptychPresenterView(data) : diptychView(data)}
      </div>}
    </motion.div>
  );
}
