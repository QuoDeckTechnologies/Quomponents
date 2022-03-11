import React, { useRef } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
    getQuommons,
} from "../../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./HtmlCarousel.scss";
import "../../../common/stylesheets/overrule.scss";
import BannerCard from "../BannerCard/BannerCard.react";

HtmlCarousel.propTypes = {
    //=======================================
    // Quommon props
    //=======================================
    /**
    HtmlCarousel data should be passed in content field and it is required field
    */
    content: PropTypes.arrayOf(PropTypes.shape({
        image: PropTypes.string,
        tag: PropTypes.oneOf([
            "new",
            "premium",
            "restricted",
            "free"
        ]),
        content: PropTypes.string,
        props: PropTypes.object
    })).isRequired,
    /**
    Button component must have the onClick function passed as props
    */
    onClick: PropTypes.func.isRequired,
};
HtmlCarousel.defaultProps = {
    // Component Specific props
    //=======================================
    content: [],
};
/**
## Notes
- The design system used for this component is Material UI (@mui/material)
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- MUI props are not being passed to the button. Please speak to the admin to handle any new MUI prop.
**/
export default function HtmlCarousel(props) {
    const sliderRef = useRef();
    let { content } = props;
    let quommonClasses = getQuommons(props, "Html-carousel");
    //-------------------------------------------------------------------
    // 4. Get animation of the component
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
        fade: true,
    };
    // ========================= Render Function =================================
    return (
        <motion.div
            className={`qui ${quommonClasses.parentClasses}`}
        >
            <Slider ref={sliderRef} {...settings}>
                {_.map(content, (slide, index) => {
                    return (
                        <div className="qui-Html-slide-container"
                            key={"slider-" + index + Math.random()}>
                            <div className={`qui-Html-slide`}>
                                <BannerCard  {...slide.props} content={slide} onClick={props.onClick} />
                            </div>
                        </div>
                    );
                })}
            </Slider>
            <div className="qui-slick-arrows">
                <div className="qui-slick-prev"
                    onClick={() => sliderRef.current?.slickPrev()}>
                    <i className="fas fa-arrow-alt-circle-left"></i>
                </div>
                <div className="qui-slick-next"
                    onClick={() => sliderRef.current?.slickNext()}>
                    <i className="fas fa-arrow-alt-circle-right"></i>
                </div>
            </div>
        </motion.div>
    );
}