import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
  getAnimation,
  getQuommons,
  resolveImage,
} from "../../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./Blurb.scss";
import "../../../common/stylesheets/overrule.scss";
import SlideHeader from "../../SlideHeader/SlideHeader.react";
import TextBlock from "../../TextBlock/TextBlock.react";

Blurb.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
  Blurb data should be passed in data field and it is a required field
  */
  data: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    blurb: PropTypes.string,
    image: PropTypes.object,
    backgroundImage: PropTypes.object,
    presenter: PropTypes.object,
  }),
  /**
  Blurb can set Header image, presenter image and background image from imageLibrary array
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
    textColor: PropTypes.string,
    slideHeaderAccentColor: PropTypes.string,
    slideHeaderBackgroundColor: PropTypes.string,
    slideHeaderTextColor: PropTypes.string,
    textBlockBackgroundColor: PropTypes.string,
    textBlockTextColor: PropTypes.string,
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

Blurb.defaultProps = {
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
- Displays a Blurb with TextBlock and a SlideHeader
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function Blurb(props) {
  //-------------------------------------------------------------------
  // 1. Destructuring props
  //-------------------------------------------------------------------
  const { data, imageLibrary, withColor, slideId } = props;
  //-------------------------------------------------------------------
  // 2. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "blurb");
  //-------------------------------------------------------------------
  // 3. Use to set Color in imported component
  //-------------------------------------------------------------------
  let slideHeaderColors = {
    textColor: withColor?.slideHeaderTextColor,
    accentColor: withColor?.slideHeaderAccentColor,
    backgroundColor: withColor?.slideHeaderBackgroundColor,
  };
  let textBlockColors = {
    textColor: withColor?.textBlockTextColor,
    backgroundColor: withColor?.textBlockBackgroundColor,
  };
  //-------------------------------------------------------------------
  // 4. Function to return a view for blurb
  //-------------------------------------------------------------------
  const getView = (data) => {
    if (!data?.image && (data?.title || data?.subtitle)) {
      return (
        <SlideHeader
          {...props}
          title={data?.title}
          subtitle={data?.subtitle}
          withColor={slideHeaderColors}
        />
      );
    } else {
      return (
        <img
          className="qui-blurb-image"
          src={resolveImage(data?.image?.id, imageLibrary)}
          alt="blurb"
        />
      );
    }
  };
  //-------------------------------------------------------------------
  // 5. Function to return a TextBlock component
  //-------------------------------------------------------------------
  const getTextBlock = (content, conversation, position) => {
    return (
      <TextBlock
        content={content}
        conversation={conversation}
        position={position}
        withColor={textBlockColors}
      />
    );
  };
  //-------------------------------------------------------------------
  // 6. Function to return a view for Blurb with presenter
  //-------------------------------------------------------------------
  const getPresenterView = (data) => {
    return (
      <div className="qui-blurb-text-block">
        <div className="qui-blurb-block-header">
          {getTextBlock(data?.title, false)}
        </div>
        <div className="qui-blurb-block-subtitle">
          {getTextBlock(data?.subtitle, false)}
        </div>
        <div className="qui-blurb-block-blurb">
          {getTextBlock(data?.blurb, true, "right-bottom")}
        </div>
      </div>
    );
  };
  //-------------------------------------------------------------------
  // 7. Functions to set background
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
  //-------------------------------------------------------------------
  // 8. Variable to set presenter image
  //-------------------------------------------------------------------
  let hasPresenter =
    data?.presenter !== undefined &&
    data?.presenter.id !== undefined &&
    data?.presenter.id !== "default43";
  //-------------------------------------------------------------------
  // 8. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props);
  // ========================= Render Function =================================
  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className={`qui qui-blurb-card ${quommonClasses.parentClasses}`}
      style={{
        ...background,
        backgroundColor: withColor?.backgroundColor,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      key={"blurb" + slideId}
    >
      {!data?.presenter && (
        <div className={`qui-blurb-container ${quommonClasses.childClasses}`}>
          <div className="qui-blurb-slide-header">
            {getView(data)}
            <div className="qui-blurb-card-subtitle">
              <p
                className="qui-blurb-subtitle"
                style={{ color: withColor?.textColor }}
              >
                {props.data?.blurb}
              </p>
            </div>
          </div>
        </div>
      )}
      {data?.presenter && getPresenterView(data)}
      {hasPresenter && (
        <img
          className="qui-blurb-presenter-image"
          src={resolveImage(data.presenter.id, imageLibrary)}
          alt="Presenter"
        />
      )}
    </motion.div>
  );
}
