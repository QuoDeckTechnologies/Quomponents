import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getQuommons, getAnimation } from "../../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./SquareWrapperCarousel.scss";
import "../../../common/stylesheets/overrule.scss";
import BannerCard from "../BannerCard/BannerCard.react";

SquareWrapperCarousel.propTypes = {
  //=======================================
  // Quommon props
  //=======================================
  /**
    SquareWrapperCarousel data should be passed in content field and it is required field
    */
  content: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      tag: PropTypes.oneOf(["new", "premium", "restricted", "free"]),
      selected: PropTypes.bool,
      header: PropTypes.string,
      props: PropTypes.object,
    })
  ).isRequired,
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
    SquareWrapperCarousel component must have the onClick function passed as props
    */
  onClick: PropTypes.func.isRequired,
};
SquareWrapperCarousel.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  content: [],
  withAnimation: null,
};
/**
## Notes
- The design system used for this component is Slick-slider ("react-slick")
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- Set true or false to the selected prop for select/deselect the slide .
**/
export default function SquareWrapperCarousel(props) {
  //-------------------------------------------------------------------
  // 1. Destructuring props
  //-------------------------------------------------------------------
  const { content, onClick } = props;
  //-------------------------------------------------------------------
  // 1. Defining Ref
  //-------------------------------------------------------------------
  const sliderRef = useRef();
  //-------------------------------------------------------------------
  // 2. Defining states
  //-------------------------------------------------------------------
  const [carouselContent, setCarouselContent] = useState(content);
  //-------------------------------------------------------------------
  // 3. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "square-wrapper-carousel");
  //-------------------------------------------------------------------
  // 4. Defining hook for component updates
  //-------------------------------------------------------------------
  const animate = getAnimation(props);
  useEffect(() => {
    setCarouselContent(content);
  }, [content]);
  useEffect(() => {
    onClick(carouselContent);
  }, [carouselContent, onClick]);
  //-------------------------------------------------------------------
  // 5. Function to handle slide selection
  //-------------------------------------------------------------------
  const handleSelect = (data) => {
    let tmp_state = carouselContent;
    let tmp_arr = [];
    let tmp_obj = {};

    tmp_state.forEach((dataObj) => {
      if (dataObj?.id === data.content.id) {
        tmp_obj = { ...dataObj };
        tmp_obj.selected = true;
        tmp_arr.push(tmp_obj);
      } else {
        tmp_obj = { ...dataObj };
        tmp_obj.selected = false;
        tmp_arr.push(tmp_obj);
      }
    });
    setCarouselContent([...tmp_arr]);
  };
  //-------------------------------------------------------------------
  // 6. Get animation of the component
  //-------------------------------------------------------------------
  var settings = {
    dots: true,
    speed: 500,
    initialSlide: 1,
    slidesToScroll: 1,
    slidesToShow: 1,
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
      className={`qui qui-square-wrapper-carousel-container ${quommonClasses.parentClasses}`}
    >
      <Slider ref={sliderRef} {...settings}>
        {_.map(carouselContent, (slide, index) => {
          return (
            <div
              className="qui-square-wrapper-slide-container qui-banner"
              key={"slider-" + index + Math.random()}
            >
              <div className={`qui-square-wrapper-slide `}>
                {slide.selected && (
                  <div className="qui-mid-circle">
                    <div className="qui-square-wrapper-checkbox">
                      <i className={"fas fa-check-square"}></i>
                    </div>
                  </div>
                )}
                <BannerCard
                  {...slide.props}
                  content={slide}
                  onClick={(slideData) => handleSelect(slideData)}
                />
              </div>
            </div>
          );
        })}
      </Slider>
      <div className="qui-square-wrapper-slick-arrows">
        <div
          className="qui-square-wrapper-slick-prev"
          onClick={() => sliderRef.current?.slickPrev()}
        >
          <i className="fas fa-arrow-alt-circle-left"></i>
        </div>
        <div
          className="qui-square-wrapper-slick-next"
          onClick={() => sliderRef.current?.slickNext()}
        >
          <i className="fas fa-arrow-alt-circle-right"></i>
        </div>
      </div>
    </motion.div>
  );
}
