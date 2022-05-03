// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { motion } from "framer-motion";
import {
  getAnimation,
  getQuommons,
  resolveImage,
} from "../../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./IconListCaptions.scss";
import "../../../common/stylesheets/overrule.scss";
import SlideHeader from "../../SlideHeader/SlideHeader.react";
import TextBlock from "../../TextBlock/TextBlock.react";
import ClickableImage from "../../ClickableImage/ClickableImage.react";

IconListCaptions.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
    IconListCaptions data should be passed in data field and it is a required field
    */
  data: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    caption: PropTypes.string,
    image: PropTypes.object,
    backgroundImage: PropTypes.object,
    iconListImages: PropTypes.array,
  }),
  /**
    IconListCaptions can set presenter image from imageLibrary array
    */
  imageLibrary: PropTypes.array,
  /**
    IconListCaptions slideId should be passed with props, to specify the slide.
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
    Diptych component must have the onClick function passed as props
    */
  onClick: PropTypes.func.isRequired,
};

IconListCaptions.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  data: {
    title: "",
    subtitle: "",
    caption: "",
    image: {},
    backgroundImage: {},
    iconListImages: []
  },
  imageLibrary: [{}],
  slideId: 0,
  //=======================================
  // Quommon props
  //=======================================
  asVariant: "primary",
  withColor: null,
  withAnimation: null,
  isHidden: false,
};
/**
## Notes
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- Displays a Captioned IconListCaptions with TextBlock and a SlideHeader with circular images
**/
export default function IconListCaptions(props) {
  let { data, withColor, imageLibrary } = props
  //-------------------------------------------------------------------
  // Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "icon-list-captions");
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
  const getBackground = () => {
    return {
      background: `url(${resolveImage(
        data?.backgroundImage.id,
        imageLibrary
      )})`,
      backgroundSize: "cover",
    };
  };
  const background = data?.backgroundImage
    ? getBackground()
    : { backgroundColor: withColor?.backgroundColor ? withColor?.backgroundColor : "#fff" };

  function handleClick(e) {
    props.onClick(e)
  }
  // let clickableImageContainerClassses = clicked ? "qui-image-container-highlited" : "qui-clickable-image-container"
  // ========================= Render Function =================================
  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className={`qui ${quommonClasses.parentClasses}`}
    >{data &&
      <div className="qui-icon-list-captions-card" style={{ ...background }}>
        <div className={`${quommonClasses.childClasses}`} key={"icon-list-captions-" + props.slideId}>
          {!data?.image && (data?.title || data?.subtitle) && (
            <SlideHeader
              content={SlideHeaderText}
              withColor={slideHeaderColors} />
          )}
          {data?.image && (
            <img className="qui-icon-list-captions-image" src={resolveImage(data?.image.id, imageLibrary)} alt="" />
          )}
          <TextBlock {...props} content={data?.caption} withColor={textBlockColors} />

          <div className="qui-icon-list-captions-clickable-images">
            <div className="qui-icon-list-captions-track"></div>
            {_.map(data?.iconListImages, (image, index) => {
              return (
                <div className="qui-clickable-image-container" key={"icon-list-captions-image" + index}>
                  <ClickableImage {...props} content={{ image: resolveImage(image.id, imageLibrary) }} onClick={() => handleClick(image.id)} />
                </div>
              );
            })}
          </div>
        </div>
      </div>}
    </motion.div>
  );
}