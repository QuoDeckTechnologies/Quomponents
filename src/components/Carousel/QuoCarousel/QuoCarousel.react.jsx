import React, { useRef } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
    getQuommons,
    getAnimation,
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
    /**
    QuoCarousel data should be passed imageLibrary
    */
    imageLibrary: PropTypes.array,
    //=======================================
    // Quommon props
    //=======================================
    /**
    Use to override component colors and behavior
    */
    withColor: PropTypes.shape({
        backgroundColor: PropTypes.string,
        accentColor: PropTypes.string,
        accentBackgroundColor: PropTypes.string,
        textColor: PropTypes.string,
        buttonBackgroundColor: PropTypes.string,
        buttonTextColor: PropTypes.string,
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
    Set action emphasis in increasing order 
    */
    asEmphasis: PropTypes.oneOf(["text", "outlined", "contained"]),
    /**
      Use to enable/disable the component
      */
    isDisabled: PropTypes.bool,
    /**
      Use to show/hide the component
      */
    isHidden: PropTypes.bool,
    /**
    Button component must have the onClick function passed as props
    */
    onClick: PropTypes.func.isRequired,
};
QuoCarousel.defaultProps = {
    //======================================
    // Component Specific props
    //=======================================
    content: [],
    imageLibrary: [{}],
    //======================================
    // Quommon props
    //=======================================
    asEmphasis: "contained",
    withColor: null,
    isCircular: false,
    isHidden: false,
    isDisabled: false,
};
/**
## Notes
- The design system used for this component is Slick-slider ("react-slick")
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css.

**/
export default function QuoCarousel(props) {
    const sliderRef = useRef();
    let { content } = props;
    let quommonClasses = getQuommons(props, "quo-carousel");
    //-------------------------------------------------------------------
    // 4. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);
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
        <motion.div
            initial={animate.from}
            animate={animate.to}
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
        </motion.div>
    );
}
