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
import "./CaptionedImage.scss";
import "../../../common/stylesheets/overrule.scss";
import SlideHeader from "../../SlideHeader/SlideHeader.react";
import TextBlock from "../../TextBlock/TextBlock.react";
import ClickableImage from "../../ClickableImage/ClickableImage.react";

CaptionedImage.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
    CaptionedImage data should be passed in data field and it is a required field
    */
  data: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    image: PropTypes.object,
    backgroundImage: PropTypes.object,
    captionedImage: PropTypes.object,
    presenter: PropTypes.object,
  }),
  /**
    CaptionedImage can set presenter image from imageLibrary array
    */
  imageLibrary: PropTypes.array,
  /**
    CaptionedImage slideId should be passed with props, to specify the slide.
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
    Use to show/hide the component
  */
  isHidden: PropTypes.bool,
  /**
    Use to enable/disable the component
    */
  isDisabled: PropTypes.bool,
  /**
    CaptionedImage component must have the onClick function passed as props
    */
  onClick: PropTypes.func.isRequired,
};

CaptionedImage.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  data: {
    title: "",
    subtitle: "",
    image: "",
    backgroundImage: {},
    data: {},
    presenter: "",
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
- Displays a CaptionedImage with TextBlock, clickableImages and a SlideHeader
**/
export default function CaptionedImage(props) {
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
  let quommonClasses = getQuommons(props, "CaptionedImage");
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
  // Function to return a view for CaptionedImage
  //-------------------------------------------------------------------
  const CaptionedImageView = (data) => {
    return (
      <div className="qui-captioned-image-card" key={"captioned-image-slide-" + props.slideId} style={{
        ...background,
        backgroundColor: withColor?.backgroundColor,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
        <div className={`${quommonClasses.childClasses}`} key={"captioned-image-" + props.slideId}>
          {!data?.image && (data?.title || data?.subtitle) && (
            <SlideHeader
              content={SlideHeaderText}
              withColor={slideHeaderColors} />
          )}
          {data?.image && (
            <img className="qui-captioned-image-image" src={resolveImage(data.image.id, imageLibrary)} alt="" />
          )}
          <ClickableImage {...props} content={{ image: resolveImage(data?.data?.image.id, imageLibrary) }} onClick={(e) => props.onClick(e)} isActive={false} />
          <TextBlock {...props} content={data?.data.caption} withColor={textBlockColors} />
        </div>
      </div>
    );
  };
  //-------------------------------------------------------------------
  // Function to return a view for CaptionedImage with presenter
  //-------------------------------------------------------------------
  const CaptionedImagePresenterView = (data) => {
    return (
      <div className="qui-captioned-image-presenter-container"
        style={{
          ...background,
          backgroundColor: withColor?.backgroundColor,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="qui-captioned-image-presenter-title" >
          <TextBlock {...props}
            content={data?.title}
            asFloated="left"
            withColor={textBlockColors} />
        </div>
        <div className="qui-captioned-image-presenter-sub-title">
          <TextBlock {...props}
            content={data?.subtitle}
            asFloated="left"
            withColor={textBlockColors} />
        </div>
        <ClickableImage {...props} content={{ image: resolveImage(data?.data?.image.id, imageLibrary) }} onClick={(e) => props.onClick(e)} />
        <div className="qui-captioned-image-presenter-caption">
          <TextBlock {...props}
            content={data?.data.caption}
            asFloated="left"
            conversation={true}
            position="right-bottom"
            withColor={textBlockColors} />
        </div>
        {hasPresenter && (
          <img
            className="qui-captioned-image-presenter"
            src={resolveImage(data.presenter.id, imageLibrary)}
            alt=""
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
  const background = data?.presenter ? getPresenterBackground() : getBackground();

  // ========================= Render Function =================================
  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className={`qui ${quommonClasses.parentClasses} `}
    >
      {data && <div>
        {data?.presenter ? CaptionedImagePresenterView(data) : CaptionedImageView(data)}
      </div>}
    </motion.div>
  );
}