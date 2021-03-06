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
import "./BannerCarousel.scss";
import "../../../common/stylesheets/overrule.scss";

import BannerCard from "../BannerCard/BannerCard.react";

BannerCarousel.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    BannerCarousel data should be passed in content field and it is required field
    */
    content: PropTypes.arrayOf(PropTypes.shape({
        image: PropTypes.string,
        tag: PropTypes.oneOf([
            "new",
            "premium",
            "restricted",
            "free",
            ""
        ]),
        header: PropTypes.string,
        content: PropTypes.string,
        props: PropTypes.object
    })).isRequired,

};

BannerCarousel.defaultProps = {
    // Component Specific props
    //=======================================
    content: [],
    withTranslation: null,
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
    let { content } = props;
    let quommonClasses = getQuommons(props, "banner-carousel");

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
        <div className={`qui ${quommonClasses.parentClasses}`}>
            <Slider ref={sliderRef} {...settings}>
                {_.map(content, (slide, index) => {
                    return (
                        <div className="qui-slide-container"
                            key={"sliderData-" + index + Math.random()}
                        >
                            <div
                                key={"slider-" + index + Math.random()}
                                className={`qui-slide`}
                            >
                                <BannerCard {...slide.props} content={slide} onClick={props.onClick} withTranslation={props.withTranslation} />
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}
