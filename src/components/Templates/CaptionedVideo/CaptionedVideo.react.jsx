import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
  getAnimation,
  getQuommons,
  resolveImage,
} from "../../../common/javascripts/helpers";
import "../../../common/stylesheets/common.css";
import "./CaptionedVideo.scss";
import "../../../common/stylesheets/overrule.scss";
import SlideHeader from "../../SlideHeader/SlideHeader.react";
import Videobox from "../../Videobox/Videobox.react";
import TextBlock from "../../TextBlock/TextBlock.react";

CaptionedVideo.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
    CaptionedVideo data should be passed in data field and it is a required field
  */
  data: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    image: PropTypes.object,
    backgroundImage: PropTypes.object,
    video: PropTypes.string,
    caption: PropTypes.string,
    presenter: PropTypes.object,
  }).isRequired,
  /**
    CaptionedVideo can set image, presenter & backgroundImage from imageLibrary.
  */
  imageLibrary: PropTypes.array,
  /**
    slideId can be used if same template is used continueously for multiple slides.
  */
  slideId: PropTypes.number,
  //=======================================
  // Quommon props
  //=======================================
  /**
    Use to override component colors and behavior
  */
  withColor: PropTypes.shape({
    backgroundColor: PropTypes.string,
    slideHeaderTextColor: PropTypes.string,
    slideHeaderBackgroundColor: PropTypes.string,
    slideHeaderAccentColor: PropTypes.string,
    textBlockTextColor: PropTypes.string,
    textBlockAccentColor: PropTypes.string,
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
};

CaptionedVideo.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  data: {},
  imageLibrary: null,
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
- Displays a CaptionedVideo with Videobox, TextBlock and a SlideHeader
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function CaptionedVideo(props) {
  //-------------------------------------------------------------------
  // 1. Destructuring props
  //-------------------------------------------------------------------
  let { data, withColor, imageLibrary, slideId } = props;
  //-------------------------------------------------------------------
  // 2. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "captioned-video");
  //-------------------------------------------------------------------
  // 3. Variable to set presenter image
  //-------------------------------------------------------------------
  let hasPresenter =
    data?.presenter !== undefined &&
    data?.presenter?.id !== undefined &&
    data?.presenter?.id !== "default43";
  //-------------------------------------------------------------------
  // 4. Use to set Color in imported components of CaptionedVideo
  //-------------------------------------------------------------------
  let slideHeaderColors = {
    textColor: withColor?.slideHeaderTextColor,
    accentColor: withColor?.slideHeaderAccentColor,
    backgroundColor: withColor?.slideHeaderBackgroundColor,
  };

  let textBlockColors = {
    textColor: withColor?.textBlockTextColor,
    accentColor: withColor?.textBlockAccentColor,
    backgroundColor: withColor?.textBlockBackgroundColor,
  };
  //-------------------------------------------------------------------
  // 5. Function to set background for normal and Presenter view
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
  //-------------------------------------------------------------------
  // 6. Function to return a view for CaptionedVideo
  //-------------------------------------------------------------------
  const CaptionedVideoView = (data) => {
    return (
      <div
        className="qui-captioned-video-card"
        style={{
          ...background,
          backgroundColor: withColor?.backgroundColor,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {!data?.image && (data?.title || data?.subtitle) && (
          <SlideHeader
            {...props}
            title={data?.title}
            subtitle={data?.subtitle}
            withColor={slideHeaderColors}
          />
        )}
        {data?.image && (
          <img
            className="qui-captioned-video-image"
            src={resolveImage(data?.image.id, imageLibrary)}
            alt="video"
          />
        )}
        <Videobox {...props} url={data?.video} />
        <TextBlock
          {...props}
          content={data?.caption}
          withColor={textBlockColors}
        />
      </div>
    );
  };
  //-------------------------------------------------------------------
  // 7. Function to return a view for CaptionedVideo with presenter
  //-------------------------------------------------------------------
  const CaptionedVideoPresenterView = (data) => {
    return (
      <div
        className="qui-captioned-video-presenter-container"
        style={{
          ...background,
          backgroundColor: withColor?.backgroundColor,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="qui-captioned-video-presenter-title">
          <TextBlock
            {...props}
            content={data?.title}
            asFloated="left"
            withColor={textBlockColors}
          />
        </div>
        <div className="qui-captioned-video-presenter-sub-title">
          <TextBlock
            {...props}
            content={data?.subtitle}
            asFloated="left"
            withColor={textBlockColors}
          />
        </div>
        <Videobox {...props} url={data?.video} />
        <div className="qui-captioned-video-presenter-caption">
          <TextBlock
            {...props}
            content={data?.caption}
            conversation={true}
            position="right-bottom"
            asFloated="left"
            asSize="small"
            withColor={textBlockColors}
          />
        </div>
        {hasPresenter && (
          <img
            className="qui-captioned-video-presenter"
            src={resolveImage(data?.presenter?.id, imageLibrary)}
            alt="Presenter"
          />
        )}
      </div>
    );
  };
  //-------------------------------------------------------------------
  // 8. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props);
  // ========================= Render Function =================================
  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className={`qui ${quommonClasses.parentClasses}`}
    >
      <div
        className={`${quommonClasses.childClasses}`}
        key={"captioned-video" + slideId}
      >
        {data && (
          <div>
            {data?.presenter
              ? CaptionedVideoPresenterView(data)
              : CaptionedVideoView(data)}
          </div>
        )}
      </div>
    </motion.div>
  );
}
