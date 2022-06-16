import React, { useRef } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import _ from "lodash";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
    getQuommons,
    getAnimation,
} from "../../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./Banner.scss";
import "../../../common/stylesheets/overrule.scss";
import BannerCard from "../BannerCard/BannerCard.react";

Banner.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    Banner data should be passed in content field and it is required field
    */
    content: PropTypes.arrayOf(PropTypes.shape({
        image: PropTypes.string,
        header: PropTypes.string,
        description: PropTypes.string,
    })).isRequired,
    //=======================================
    // Quommon props
    //=======================================
    /**
    Use to define standard component type
    */
    asVariant: PropTypes.oneOf([
        "primary",
        "secondary",
        "success",
        "warning",
        "error",
    ]),
    /**
    Use to override component colors and behavior
    */
    withColor: PropTypes.shape({
        backgroundColor: PropTypes.string,
        accentColor: PropTypes.string,
        textColor: PropTypes.string,
    }),
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

Banner.defaultProps = {
    // Component Specific props
    //=======================================
    content: [],
    //=======================================
    // Quommon props
    //=======================================
    asVariant: "primary",

    withColor: null,
    withAnimation: null,

    isDisabled: false,
    isHidden: false
};
/**
## Notes
- The design system used for this component is HTML and CSS
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function Banner(props) {
    //-------------------------------------------------------------------
    // 1. Destructuring props
    //-------------------------------------------------------------------
    let { content, withColor, asVariant } = props;
    //-------------------------------------------------------------------
    // 2. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "banner");
    //-------------------------------------------------------------------
    // 3. Use to Set the settings for slider in the Component
    //-------------------------------------------------------------------u
    const sliderRef = useRef();

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
        centerPadding: "0",
        swipeToSlide: true,
    };
    //-------------------------------------------------------------------
    // 4. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);
    // ========================= Render Function =================================
    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui ${quommonClasses.parentClasses}`}
        >
            <Slider ref={sliderRef} {...settings}>
                {_.map(content, (slide, index) => {
                    return (
                        <div className="qui-banner-container"
                            key={"bannerData-" + index + Math.random()}
                        >
                            <div
                                key={"banner-" + index + Math.random()}
                                className={`qui-banner`}
                            >
                                <BannerCard
                                    content={slide}
                                    asVariant={asVariant}
                                    withColor={{
                                        textColor: withColor?.textColor,
                                        backgroundColor: withColor?.accentColor
                                    }}
                                    onClick={props.onClick}
                                />
                            </div>
                            <div
                                className="qui-banner-description-container"
                                style={{ backgroundColor: withColor?.backgroundColor }}
                                key={"bannerContent-" + index + Math.random()}
                            >
                                <div
                                    className="qui-banner-description qui qt-sm"
                                    style={{ color: withColor?.textColor }}
                                >
                                    {slide?.description}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </motion.div>
    );
}
