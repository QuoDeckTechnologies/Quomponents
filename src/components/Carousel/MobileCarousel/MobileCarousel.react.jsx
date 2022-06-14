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
import "./MobileCarousel.scss";
import "../../../common/stylesheets/overrule.scss";
import HCard from "../../HCard/HCard.react";

MobileCarousel.propTypes = {
    //======================================
    //component specific props
    //======================================
    /**
    MobileCarousel data should be passed in content field and it is required field
    */
    content: PropTypes.arrayOf(PropTypes.shape({
        image: PropTypes.object,
        name: PropTypes.string,
        description: PropTypes.string,
        buttonText: PropTypes.string,
    })).isRequired,
    /**
    MobileCarousel data should be passed imageLibrary
    */
    imageLibrary: PropTypes.array,
    //=======================================
    // Quommon props
    //=======================================
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
MobileCarousel.defaultProps = {
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
    withAnimation: null,
    isHidden: false,
    isDisabled: false,
};
/**
## Notes
- The design system used for this component is Slick-slider ("react-slick")
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- Set true or false to the selected prop for select/deselect the slide .

**/
export default function MobileCarousel(props) {
    const sliderRef = useRef();
    let { content } = props;
    let quommonClasses = getQuommons(props, "mobile-carousel");
    //-------------------------------------------------------------------
    // 4. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);
    var settings = {
        dots: false,
        speed: 500,
        initialSlide: 1,
        slidesToScroll: 1,
        slidesToShow: 1,
        centerMode: true,
        arrows: false,
        infinite: true,
        autoplay: false,
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
            className={`qui qui-mobile-carousel-container ${quommonClasses.parentClasses}`}
        >
            <Slider ref={sliderRef} {...settings}>
                {_.map(content, (slide, index) => {
                    return (
                        <div className="qui-mobile-slide-container "
                            key={"slider-" + index + Math.random()}>
                            <div className={`qui-mobile-slide `}>
                                <HCard  {...props} content={slide} onClick={props.onClick} buttonText={content?.buttonText} checked={true} />
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </motion.div>
    );
}
