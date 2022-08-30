import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getQuommons } from "../../../common/javascripts/helpers";
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
  Use to show a translated version of the component text. Dictionary must be valid JSON. 
  */
  withTranslation: PropTypes.shape({
    lang: PropTypes.string,
    tgt: PropTypes.string,
    dictionary: PropTypes.string,
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
  useEffect(() => {
    setCarouselContent(content);
  }, [content]);
  useEffect(() => {
    carouselContent.forEach((slide) => {
      if (slide.selected) {
        onClick(slide);
      }
    });
  }, [carouselContent, onClick]);
  //-------------------------------------------------------------------
  // 5. Function to handle slide selection
  //-------------------------------------------------------------------
  const handleSelect = (data) => {
    let tmp_state = carouselContent;
    let tmp_arr = [];
    let tmp_obj = {};

    tmp_state.forEach((dataObj) => {
      if (dataObj?.id === data?.id) {
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
  // 6. Get translation of the component
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
    autoplay: true,
    pauseOnHover: true,
    centerPadding: "0%",
    swipeToSlide: true,
  };
  // ========================= Render Function =================================
  return (
    <div
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
                {slide.selected && slide?.header && (
                  <div
                    className={`qui-mid-circle qui-btn variant-${slide.props?.asVariant}`}
                    style={{
                      backgroundColor: slide.props?.withColor?.backgroundColor
                        ? slide.props?.withColor?.backgroundColor
                        : "#666",
                      color: slide.props?.withColor?.textColor,
                    }}
                  >
                    <div className="qui-square-wrapper-checkbox">
                      <i className={"fas fa-check-square"}></i>
                    </div>
                  </div>
                )}
                <BannerCard
                  {...slide.props}
                  {...slide}
                  content={slide.content}
                  header={slide.header}
                  image={slide.image}
                  tag={slide.tag}
                  withTranslation={props.withTranslation}
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
    </div>
  );
}
