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
import "./PortraitCarousel.scss";
import "../../../common/stylesheets/overrule.scss";
import BannerCard from "../BannerCard/BannerCard.react";
PortraitCarousel.propTypes = {
    //=======================================
    // Quommon props
    //=======================================
    /**
    PortraitCarousel data should be passed in content field and it is required field
    */
    content: PropTypes.arrayOf(PropTypes.shape({
        image: PropTypes.string,
        tag: PropTypes.oneOf([
            "new",
            "premium",
            "restricted",
            "free"
        ]),
        selected: PropTypes.bool,
        header: PropTypes.string,
        props: PropTypes.object
    })).isRequired,
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
            ""
        ]),
        duration: PropTypes.number,
        delay: PropTypes.number,
    }),
    /**
    Button component must have the onClick function passed as props
    */
    onClick: PropTypes.func.isRequired,
};

PortraitCarousel.defaultProps = {
    // Component Specific props
    //=======================================
    content: [],
    withAnimation: null,
};
/**
## Notes
- The design system used for this component is Material UI (@mui/material)
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- MUI props are not being passed to the button. Please speak to the admin to handle any new MUI prop.
**/
export default function PortraitCarousel(props) {
    const sliderRef = useRef();
    let { content } = props;
    let quommonClasses = getQuommons(props, "portrait-carousel");
    //-------------------------------------------------------------------
    // 4. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);
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
        <div className="portrait-container">
            <motion.div
                initial={animate.from}
                animate={animate.to}
                className={`qui qui-carousel-container ${quommonClasses.parentClasses}`}
            >
                <Slider ref={sliderRef} {...settings}>
                    {_.map(content, (slide, index) => {
                        return (
                            <div className="qui-portrait-slide-container qui-banner"
                                key={"slider-" + index + Math.random()}>
                                <div className={`qui-portrait-slide ${quommonClasses.childClasses} `}>
                                    {slide.selected && <div className="qui-mid-circle" >
                                        <div className="qui-portrait-checkbox">
                                            <i className={"fas fa-check-square"}>
                                            </i>
                                        </div>
                                    </div>}
                                    <BannerCard  {...slide.props} content={slide} onClick={props.onClick}/>
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
        </div>
    );
}