import React, { useRef } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
    getQuommons,
} from "../../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./QuoCarousel.scss";
import "../../../common/stylesheets/overrule.scss"

QuoCarousel.propTypes = {
    //======================================
    //component specific props
    //======================================
    /**
    QuoCarousel data should be passed in content field and it is required field
    */
    content: PropTypes.array,
    arrows: PropTypes.bool,
    autoPlay: PropTypes.bool,
    dots: PropTypes.bool,
    infinite: PropTypes.bool,
    slidesToShow: PropTypes.number,
    initialSlide: PropTypes.number,
    asNavFor: PropTypes.string,
    //=======================================
    // Quommon props
    //=======================================
    /**
      Use to enable/disable the component
      */
    isDisabled: PropTypes.bool,
    /**
      Use to show/hide the component
      */
    isHidden: PropTypes.bool,
};
QuoCarousel.defaultProps = {
    //======================================
    // Component Specific props
    //=======================================
    content: [],
    //======================================
    // Quommon props
    //=======================================
    isHidden: false,
    isDisabled: false,
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
    let { content } = props;
    let quommonClasses = getQuommons(props, "quo-carousel");
    //-------------------------------------------------------------------
    // 4. Get animation of the component
    //-------------------------------------------------------------------
    var settings = {
        dots: props.dots,
        speed: 500,
        initialSlide: props.initialSlide,
        slidesToScroll: 1,
        slidesToShow: props.slidesToShow,
        centerMode: true,
        arrows: false,
        infinite: props.infinite,
        autoplay: props.autoPlay,
        autplaySpeed: 1000,
        pauseOnHover: false,
        centerPadding: "10",
        swipeToSlide: true,
    };
    // ========================= Render Function =================================
    return (
        <div
            className={`qui qui-quo-carousel-container ${quommonClasses.parentClasses}`}
        >
            <Slider ref={sliderRef} {...settings}>
                {_.map(content, (component, index) => {
                    return (
                        <div className="qui-quo-carousel-slide-container "
                            key={"slider-" + index + Math.random()}>
                            <div className={`qui-quo-carousel-slide `}>
                                {component}
                            </div>
                        </div>
                    );
                })}
            </Slider>
            {props.arrows ? <div className="qui-carousel-slick-arrows">
                <div className="qui-carousel-slick-prev"
                    onClick={() => sliderRef.current?.slickPrev()}>
                    <i className="fas fa-arrow-alt-circle-left"></i>
                </div>
                <div className="qui-carousel-slick-next"
                    onClick={() => sliderRef.current?.slickNext()}>
                    <i className="fas fa-arrow-alt-circle-right"></i>
                </div>
            </div> : " "}
        </div>
    );
}
