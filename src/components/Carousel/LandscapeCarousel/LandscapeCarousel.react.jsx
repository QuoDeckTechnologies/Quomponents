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
import "./LandscapeCarousel.scss";
import "../../../common/stylesheets/overrule.scss";
import BannerCard from "../BannerCard/BannerCard.react";

LandscapeCarousel.propTypes = {
    //=======================================
    // Quommon props
    //=======================================
    /**
    landscapeCarousel data should be passed in content field and it is required field
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
LandscapeCarousel.defaultProps = {
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
export default function LandscapeCarousel(props) {
    const sliderRef = useRef();
    let { content } = props;
    let quommonClasses = getQuommons(props, "landscape-carousel");
    //-------------------------------------------------------------------
    // 4. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props);
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
        autplaySpeed: 1000,
        pauseOnHover: false,
        centerPadding: "0%",
        swipeToSlide: true,
    };
    // ========================= Render Function =================================
    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui qui-landscape-carousel-container ${quommonClasses.parentClasses}`}
        >
            <Slider ref={sliderRef} {...settings}>
                {_.map(content, (slide, index) => {
                    return (
                        <div className="qui-landscape-slide-container "
                            key={"slider-" + index + Math.random()}>
                            <div className={`qui-landscape-slide `}>
                                {slide.selected && <div className="qui-mid-circle" >
                                    <div className="qui-landscape-checkbox">
                                        <i className={"fas fa-check-square"}>
                                        </i>
                                    </div>
                                </div>}
                                <BannerCard  {...slide.props} content={slide} onClick={props.onClick} withTranslation={props.withTranslation} />
                            </div>
                        </div>
                    );
                })}
            </Slider>
            <div className="qui-landscape-slick-arrows">
                <div className="qui-landscape-slick-prev"
                    onClick={() => sliderRef.current?.slickPrev()}>
                    <i className="fas fa-arrow-alt-circle-left"></i>
                </div>
                <div className="qui-landscape-slick-next"
                    onClick={() => sliderRef.current?.slickNext()}>
                    <i className="fas fa-arrow-alt-circle-right"></i>
                </div>
            </div>
        </motion.div>
    );
}
