// Import npm packages
import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
    image: PropTypes.object,
    backgroundImage: PropTypes.object,
    cards: PropTypes.array,
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
    Use to override component colors and behavior
    */
  withColor: PropTypes.shape({
    slideHeaderTextColor: PropTypes.string,
    slideHeaderAccentColor: PropTypes.string,
    slideHeaderBackgroundColor: PropTypes.string,
    textBlockTextColor: PropTypes.string,
    textBlockBackgroundColor: PropTypes.string,
    iconlistTrackColor: PropTypes.string,
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
    Use to enable/disable the component
    */
  isDisabled: PropTypes.bool,
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
    image: {},
    backgroundImage: {},
    cards: []
  },
  imageLibrary: [{}],
  slideId: 0,
  //=======================================
  // Quommon props
  //=======================================
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
- Displays a Captioned IconListCaptions with TextBlock and a SlideHeader with circular images
**/
export default function IconListCaptions(props) {
  let { data, withColor, imageLibrary } = props
  const [state, setState] = useState(0)
  const [activeImage, setActiveImage] = useState(0)
  const sliderRef = useRef();
  //-------------------------------------------------------------------
  // Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "icon-list-captions");
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
      background: `url(${resolveImage(data?.backgroundImage.id, imageLibrary)})`,
      backgroundSize: "cover",
    };
  };
  const background = data?.backgroundImage
    ? getBackground()
    : { backgroundColor: withColor?.backgroundColor ? withColor?.backgroundColor : "#fff" };

  function handleClick(e) {
    props.onClick(e)
    setState(e)
    setActiveImage(e)
  }

  var settings = {
    dots: false,
    speed: 500,
    initialSlide: 1,
    slidesToScroll: 1,
    slidesToShow: 4,
    centerMode: true,
    arrows: false,
    infinite: true,
    autoplay: false,
    pauseOnHover: true,
    centerPadding: "0%",
    swipeToSlide: true,
  };
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
          {_.map(data?.cards, (image, index) => {
            return (
              <div key={'textblock' + index}>
                {state === index &&
                  <TextBlock {...props} content={image.text} withColor={textBlockColors} />
                }
              </div>
            );
          })}
          <div className="qui-fixed-clickable-images-container">
            <div className="qui-icon-list-captions-track" style={{ backgroundColor: withColor?.iconlistTrackColor }}></div>
            <Slider ref={sliderRef} {...settings}>
              {_.map(data?.cards, (image, index) => {
                return (
                  <ClickableImage
                    key={"clickableImage: " + index}
                    content={{ image: resolveImage(image.image?.id ? image.image?.id : "", imageLibrary) }}
                    isActive={activeImage === index ? true : false}
                    isCircular={true}
                    onClick={() => handleClick(index)}
                    withColor={{ borderColor: props.withColor?.iconlistTrackColor }} />
                );
              })}
            </Slider>
          </div>
        </div>
      </div>}
    </motion.div>
  );
}