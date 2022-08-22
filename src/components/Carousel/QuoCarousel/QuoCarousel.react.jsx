import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import Slider from "react-slick";
import Button from "../../Buttons/Button/Button.react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getQuommons } from "../../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./QuoCarousel.scss";
import "../../../common/stylesheets/overrule.scss";

QuoCarousel.propTypes = {
  //======================================
  //component specific props
  //======================================
  /**
  QuoCarousel data should be passed in content field.
  */
  content: PropTypes.array,
  /**
  QuoCarousel arrows be passed in props to enable or disable navigation arrows.
  */
  arrows: PropTypes.bool,
  /**
  QuoCarousel autoPlay be passed in props to let the carousel run automatically  to the next slide or not.
  */
  autoPlay: PropTypes.bool,
  /**
  QuoCarousel dots be passed in props to see the slide index in carousel by dots below the slide.
  */
  dots: PropTypes.bool,
  /**
  QuoCarousel infinite be passed in props to infinitely wrap around contents.
  */
  infinite: PropTypes.bool,
  /**
  QuoCarousel slldestoShow be passed in props to decalre how many slides to show in one frame
  */
  slidesToShow: PropTypes.number,
  /**
  QuoCarousel initialSlide be passed in props to index of first slide
  */
  initialSlide: PropTypes.number,
  /**
  QuoCarousel asNavFor be passed in props to provide ref to another slider and sync it with current slider
  */
  asNavFor: PropTypes.elementType,
  /**
  QuoCarousel addSkipToEnd be passed in props to provide ref to skip the slides to the last index in carousel
  */
  addSkipToEnd: PropTypes.bool,
  /**
  QuoCarousel adaptiveHeight be passed in props to adjust the slide's height automatically
  */
  adaptiveHeight: PropTypes.bool,
  /**
  QuoCarousel centerMode be passed in props to center current slide
  */
  centerMode: PropTypes.bool,
  /**
  QuoCarousel centerPadding be passed in props to give padding to  current slide from both ends.
  */
  centerPadding: PropTypes.string,
  //=======================================
  // Quommon props
  //=======================================
  /**
  Use to override component colors and behavior
  */
  withColor: PropTypes.shape({
    textColor: PropTypes.string,
    hoverBackgroundColor: PropTypes.string,
    hoverTextColor: PropTypes.string,
  }),
  /**
  Use to show a translated version of the component text. Dictionary must be valid JSON.
  */
  withTranslation: PropTypes.shape({
    lang: PropTypes.string,
    tgt: PropTypes.string,
    dictionary: PropTypes.string,
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
  Callback function to be called on next navigation
  */
  onRightNavigation: PropTypes.func,
};

QuoCarousel.defaultProps = {
  //======================================
  // Component Specific props
  //=======================================
  content: [],
  arrows: true,
  autoPlay: true,
  dots: true,
  infinite: true,
  slidesToShow: 1,
  initialSlide: 1,
  asNavFor: null,
  addSkipToEnd: true,
  adaptiveHeight: false,
  centerMode: true,
  centerPadding: "0",
  //======================================
  // Quommon props
  //=======================================
  isHidden: false,
  isDisabled: false,
  withTranslation: null,
  withColor: null,
};
/**
## Notes
- The design system used for this component is Slick-slider ("react-slick")
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css.
- We can use any component as a child of carousel
**/
export default function QuoCarousel(props) {
  const sliderRef = useRef();
  let { content, onRightNavigation } = props;
  let [activeSlide, setActiveSlide] = useState(0);
  let quommonClasses = getQuommons(props, "quo-carousel");
  //-------------------------------------------------------------------
  //  Function to handle onRightNavigation and set active slide
  //-------------------------------------------------------------------
  let handleCallback = (index) => {
    if (onRightNavigation !== undefined && onRightNavigation !== null)
      onRightNavigation(index);
    setActiveSlide(index);
  };
  //-------------------------------------------------------------------
  //  React slider settings
  //-------------------------------------------------------------------
  var settings = {
    adaptiveHeight: props.adaptiveHeight,
    dots: props.dots,
    speed: 500,
    initialSlide: props.initialSlide,
    slidesToScroll: 1,
    slidesToShow: props.slidesToShow,
    centerMode: props.centerMode,
    arrows: false,
    infinite: props.infinite,
    autoplay: props.autoPlay,
    autplaySpeed: 1000,
    pauseOnHover: false,
    asNavFor: props.asNavFor,
    centerPadding: props.centerPadding,
    swipe: !props.addSkipToEnd || activeSlide !== content.length - 1,
    /**
    Index change callback. `(oldIndex, newIndex) => ...`
    */
    beforeChange: (current, next) => {
      handleCallback(next);
    },
  };

  let showLeftNav = props.infinite ? true : activeSlide !== 0 ? true : false;
  let showRightNav = props.infinite
    ? true
    : activeSlide !== content.length - 1
    ? true
    : onRightNavigation !== null && onRightNavigation !== undefined
    ? true
    : false;

  // ========================= Render Function =================================
  return (
    <div
      className={`qui qui-quo-carousel-container ${quommonClasses.parentClasses}`}
    >
      <Slider ref={sliderRef} {...settings}>
        {_.map(content, (component, index) => {
          return (
            <div
              className={`qui-quo-carousel-slide-container `}
              key={"slider-" + index + Math.random()}
            >
              <div className={`qui-quo-carousel-slide `}>{component}</div>
            </div>
          );
        })}
      </Slider>
      {props.arrows ? (
        <div className="qui-carousel-slick-arrows">
          <div
            className="qui-carousel-slick-prev"
            onClick={() => sliderRef.current?.slickPrev()}
          >
            <i
              className={
                showLeftNav
                  ? "fas fa-arrow-alt-circle-left"
                  : "fas fa-arrow-alt-circle-left qui-disabled-arrow"
              }
            />
          </div>
          <div
            className="qui-carousel-slick-next"
            onClick={() => sliderRef.current?.slickNext()}
          >
            <i
              className={
                showRightNav
                  ? "fas fa-arrow-alt-circle-right"
                  : "fas fa-arrow-alt-circle-right qui-disabled-arrow"
              }
            />
          </div>
        </div>
      ) : (
        " "
      )}
      {props.addSkipToEnd && activeSlide !== content.length - 1 && (
        <div className="qui-quo-carousel-skip">
          <Button
            content="Skip"
            asEmphasis="text"
            isCircular={false}
            asVariant="primary"
            asSize="tiny"
            asPadded="normal"
            asFloated="none"
            asAligned="center"
            withColor={{
              textColor: props.withColor?.textColor,
              hoverBackgroundColor: props.withColor?.hoverBackgroundColor,
              hoverTextColor: props.withColor?.hoverTextColor,
            }}
            withAnimation={{
              animation: "zoom",
              duration: 0.5,
              delay: 0,
            }}
            withTranslation={props.withTranslation || null}
            onClick={() => sliderRef.current?.slickGoTo(content.length - 1)}
          />
        </div>
      )}
    </div>
  );
}
