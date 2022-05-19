// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
  getAnimation,
  getQuommons,
  resolveImage,
} from "../../../common/javascripts/helpers.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./Image.scss";
import "../../../common/stylesheets/overrule.scss";
import SlideHeader from "../../SlideHeader/SlideHeader.react";
import TextBlock from "../../TextBlock/TextBlock.react";

Image.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
    Image data should be passed in data field and it is a required field
    */
  data: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    image: PropTypes.object,
    backgroundImage: PropTypes.object,
    contentImage: PropTypes.object,
    presenter: PropTypes.object,
  }),
  /**
    Image can set presenter image from imageLibrary array
    */
  imageLibrary: PropTypes.array,
  /**
    Image slideId should be passed with props, to specify the slide.
    */
  slideId: PropTypes.number,
  //=======================================
  // Quommon props
  //=======================================
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
    Use to show/hide the component
  */
  isHidden: PropTypes.bool,
};

Image.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  data: {
    title: "",
    subtitle: "",
    image: "",
    contentImage: {},
    backgroundImage: {},
    presenter: "",
  },
  slideId: 0,
  //=======================================
  // Quommon props
  //=======================================
  withColor: null,
  withAnimation: null,
  isHidden: false,
};
/**
## Notes
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- Displays a Image with TextBlock, clickableImages and a SlideHeader
**/
export default function Image(props) {
  const { data, withColor, imageLibrary } = props;
  //-------------------------------------------------------------------
  // Variable to set presenter image
  //-------------------------------------------------------------------
  let hasPresenter =
    data?.presenter !== undefined &&
    data?.presenter.id !== undefined &&
    data?.presenter.id !== "default43";
  //-------------------------------------------------------------------
  // Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "image");
  //-------------------------------------------------------------------
  //  Setting the colors of imported components
  //-------------------------------------------------------------------
  let slideHeaderColors = {
    textColor: props.withColor?.slideHeaderTextColor,
    accentColor: props.withColor?.slideHeaderAccentColor,
    backgroundColor: props.withColor?.slideHeaderBackgroundColor,
  };
  let textBlockColors = {
    textColor: props.withColor?.textBlockTextColor,
    backgroundColor: props.withColor?.textBlockBackgroundColor,
  };
  let SlideHeaderText = {
    title: data?.title,
    subTitle: data?.subtitle,
  };
  //-------------------------------------------------------------------
  // Function to return a content
  //-------------------------------------------------------------------
  const getContentImage = () => {
    return (
      <img
        className="qui-image-content-image"
        src={resolveImage(data?.contentImage?.id, imageLibrary)}
        alt="Content"
      />
    );
  };
  //-------------------------------------------------------------------
  // Function to return a view for Image
  //-------------------------------------------------------------------
  const ImageView = (data) => {
    return (
      <div
        className="qui-image-card"
        key={"image-slide-" + props.slideId}
        style={{
          ...background,
          backgroundColor: withColor?.backgroundColor,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          className={`${quommonClasses.childClasses}`}
          key={"image-" + props.slideId}
        >
          {!data?.image && (data?.title || data?.subtitle) && (
            <SlideHeader
              content={SlideHeaderText}
              withColor={slideHeaderColors}
            />
          )}
          {data?.image && (
            <img
              className="qui-image-component-image"
              src={resolveImage(data.image?.id, imageLibrary)}
              alt="Header"
            />
          )}
          {getContentImage()}
        </div>
      </div>
    );
  };
  //-------------------------------------------------------------------
  // Function to return a view for Image with presenter
  //-------------------------------------------------------------------
  const ImagePresenterView = (data) => {
    return (
      <div
        className="qui-image-presenter-container"
        style={{
          ...background,
          backgroundColor: withColor?.backgroundColor,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="qui-image-presenter-title">
          <TextBlock
            {...props}
            content={data?.title}
            asFloated="left"
            withColor={textBlockColors}
          />
        </div>
        <div className="qui-image-presenter-sub-title">
          <TextBlock
            {...props}
            content={data?.subtitle}
            asFloated="left"
            withColor={textBlockColors}
          />
        </div>
        {getContentImage()}
        {hasPresenter && (
          <img
            className="qui-image-presenter"
            src={resolveImage(data.presenter?.id, imageLibrary)}
            alt="Presenter"
          />
        )}
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
    if (data?.backgroundImage) {
      return {
        backgroundImage: `url(${resolveImage(
          data?.backgroundImage.id,
          imageLibrary
        )})`,
      };
    }
  };
  const getPresenterBackground = () => {
    if (data?.backgroundImage) {
      return {
        backgroundImage: `url(${resolveImage(
          data?.backgroundImage.id,
          imageLibrary
        )})`,
      };
    }
  };
  const background = data?.presenter
    ? getPresenterBackground()
    : getBackground();

  // ========================= Render Function =================================

  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className={`qui ${quommonClasses.parentClasses} `}
    >
      {data && (
        <div>
          {data?.presenter ? ImagePresenterView(data) : ImageView(data)}
        </div>
      )}
    </motion.div>
  );
}
