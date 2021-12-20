import React, { useRef } from "react";
import PropTypes from "prop-types";
import _ from "lodash";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
    getQuommons,
    getTranslation,
    getAnimation,
} from "../../../common/javascripts/helpers";


import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./BannerCarousel.scss";
import "../../../common/stylesheets/overrule.scss";

import BannerCard from "../BannerCard/BannerCard.react";

BannerCarousel.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    BannerCarousel data should be passed in data field and it is required field
    */
    data: PropTypes.arrayOf(PropTypes.shape({
        image: PropTypes.string,
        label: PropTypes.oneOf([
            "new",
            "premium",
            "restricted",
            "free"
        ]),
        box: PropTypes.shape({
            title: PropTypes.string,
            subTitle: PropTypes.string
        }),
    })).isRequired,

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
        hoverBackgroundColor: PropTypes.string,
        hoverTextColor: PropTypes.string,
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
        ]),
        duration: PropTypes.number,
        delay: PropTypes.number,
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
    Use to enable/disable the component
    */
    isDisabled: PropTypes.bool,
    /**
    Use to show/hide the component
    */
    isHidden: PropTypes.bool,

    /**
    Banner Carousel component must have the onClick function passed as props
    */
    onClick: PropTypes.func.isRequired,
};

BannerCarousel.defaultProps = {
    // Component Specific props
    //=======================================
    data: [],
    // Quommon props
    //=======================================
    asVariant: "primary",

    withColor: null,
    withAnimation: null,
    withTranslation: null,

    isDisabled: false,
    isHidden: false
};

/**
## Notes
- The design system used for this component is Material UI (@mui/material)
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- MUI props are not being passed to the button. Please speak to the admin to handle any new MUI prop.
**/
export default function BannerCarousel(props) {
    const sliderRef = useRef();
    let { data } = props;
    let quommonClasses = getQuommons(props);

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
        centerPadding: "7.5%",
        swipeToSlide: true,
    };
    // ========================= Render Function =================================

    return (
        <div>
            <Slider ref={sliderRef} {...settings}>
                {_.map(data, (content, index) => {
                    return (
                        <div className="qui-slide-container">
                            <div
                                key={"slider-" + index + Math.random()}
                                className={`qui-slide`}
                            >
                                <BannerCard {...props} data={content} />
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}
