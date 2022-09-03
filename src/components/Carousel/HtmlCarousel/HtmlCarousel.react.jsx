import React, { useRef } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getQuommons } from "../../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./HtmlCarousel.scss";
import "../../../common/stylesheets/overrule.scss";

HtmlCarousel.propTypes = {
    //=======================================
    // Quommon props
    //=======================================
    /**
    HtmlCarousel data should be passed in content field and it is required field
    */
    children: PropTypes.array.isRequired,
    /**
    HtmlCarousel properties can be optionally updated
    */
    settings: PropTypes.object,
};
HtmlCarousel.defaultProps = {
    // Component Specific props
    //=======================================
};
/**
## Notes
- The design system used for this component is Slick-slider ("react-slick")
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function HtmlCarousel(props) {
    const sliderRef = useRef();
    let quommonClasses = getQuommons(props, "html-carousel");
    //-------------------------------------------------------------------
    // 4. Get animation of the component
    //-------------------------------------------------------------------

    var settings = Object.assign(
        {
            dots: true,
            speed: 500,
            initialSlide: 0,
            slidesToScroll: 1,
            slidesToShow: 2.2,
            centerMode: false,
            lazyLoad: true,
            arrows: false,
            infinite: false,
            autoplay: false,
            pauseOnHover: true,
            centerPadding: "0%",
            swipeToSlide: true,
        },
        props.settings
    );
    // ========================= Render Function =================================
    return (
        <motion.div className={`qui ${quommonClasses.parentClasses}`}>
            <Slider ref={sliderRef} {...settings}>
                {_.map(props.children, (slide) => slide)}
            </Slider>
            <div className="qui-html-slick-arrows">
                <div
                    className="qui-html-slick-prev"
                    onClick={() => sliderRef.current?.slickPrev()}
                >
                    <i className="fas fa-arrow-alt-circle-left"></i>
                </div>
                <div
                    className="qui-html-slick-next"
                    onClick={() => sliderRef.current?.slickNext()}
                >
                    <i className="fas fa-arrow-alt-circle-right"></i>
                </div>
            </div>
        </motion.div>
    );
}
