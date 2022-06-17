// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { motion } from "framer-motion";
import {
  getAnimation,
  getQuommons,
  resolveImage,
} from "../../../common/javascripts/helpers.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./Triptych.scss";
import "../../../common/stylesheets/overrule.scss";
import SlideHeader from "../../SlideHeader/SlideHeader.react";
import TextBlock from "../../TextBlock/TextBlock.react";
import ClickableImage from "../../ClickableImage/ClickableImage.react";

Triptych.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
    Triptych data should be passed in data field and it is a required field
    */
  data: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    caption: PropTypes.string,
    image: PropTypes.object,
    backgroundImage: PropTypes.object,
    triptych: PropTypes.array,
    presenter: PropTypes.object,
  }),
  /**
    Triptych can set presenter image from imageLibrary array
    */
  imageLibrary: PropTypes.array,
  /**
    Triptych slideId should be passed with props, to specify the slide.
    */
  slideId: PropTypes.number,
  /**
  Use to define standard component type
  */
  layout: PropTypes.oneOf([
    "side by side split",
    "side by side full"
  ]),
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
    Triptych component must have the onClick function passed as props
    */
  onClick: PropTypes.func.isRequired,
};

Triptych.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  data: {
    title: "",
    subtitle: "",
    caption: "",
    image: "",
    backgroundImage: {},
    triptych: [],
    presenter: "",
  },
  layout: "side by side split",
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
- Displays a Triptych with TextBlock, clickableImages and a SlideHeader
**/
export default function Triptych(props) {
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
  let quommonClasses = getQuommons(props, "triptych");
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
  // Function to return a view for Triptych
  //-------------------------------------------------------------------
  const TriptychView = (data) => {
    return (
      <div className="qui-triptych-card" key={"triptych-slide-" + props.slideId} style={{
        ...background,
        backgroundColor: withColor?.backgroundColor,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
        <div className={`${quommonClasses.childClasses}`} key={"triptych-" + props.slideId}>
          {!data?.image && (data?.title || data?.subtitle) && (
            <SlideHeader
              content={SlideHeaderText}
              withColor={slideHeaderColors} />
          )}
          {data?.image && (
            <img className="qui-triptych-image" src={resolveImage(data.image.id, imageLibrary)} alt="" />
          )}
          <div className={`qui-triptych-clickable-images${props.layout === "side by side split" ? "-split" : "-full"}`}>
            {_.map(data?.triptych, (image, index) => {
              return (
                <div className={`qui-clickable-image-container`} key={"triptych-image" + index}>
                  <ClickableImage {...props} content={{ image: resolveImage(image.id, imageLibrary) }} onClick={() => props.onClick(index)} />
                </div>
              );
            })}
          </div>
          <div className="qui qt-sm">
            <TextBlock {...props} content={data?.caption} withColor={textBlockColors} />
          </div>
        </div>
      </div>
    );
  };
  //-------------------------------------------------------------------
  // Function to return a view for Triptych with presenter
  //-------------------------------------------------------------------
  const TriptychPresenterView = (data) => {
    return (
      <div className="qui-triptych-presenter-container"
        style={{
          ...background,
          backgroundColor: withColor?.backgroundColor,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="qui-triptych-presenter-title" >
          <TextBlock {...props}
            content={data?.title}
            asFloated="left"
            withColor={textBlockColors} />
        </div>
        <div className="qui qui-triptych-presenter-sub-title qt-sm">
          <TextBlock {...props}
            content={data?.subtitle}
            asFloated="left"
            withColor={textBlockColors} />
        </div>
        <div className={`qui-triptych-clickable-images${props.layout === "side by side split" ? "-split" : "-full"}`}>
          {_.map(data?.triptych, (image, index) => {
            return (
              <div className="qui-clickable-image-container" key={"triptych-image" + index}>
                <ClickableImage {...props} content={{ image: resolveImage(image.id, imageLibrary) }} onClick={() => props.onClick(index)} />
              </div>
            );
          })}
        </div>
        <div className="qui qui-triptych-presenter-caption qt-sm">
          <TextBlock {...props}
            content={data?.caption}
            asFloated="left"
            conversation={true}
            position="right-bottom"
            withColor={textBlockColors} />
        </div>
        {hasPresenter && (
          <img
            className="qui-triptych-presenter"
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
        {data?.presenter ? TriptychPresenterView(data) : TriptychView(data)}
      </div>}
    </motion.div>
  );
}