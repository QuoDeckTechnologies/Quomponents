import React, { useRef } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
    getQuommons,
    getTranslation,
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
    Use to show a translated version of the component text. Dictionary must be valid JSON. 
    */
    withTranslation: PropTypes.shape({
        lang: PropTypes.string,
        tgt: PropTypes.string,
        dictionary: PropTypes.string,
    }),
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
- The design system used for this component is Slick-slider ("react-slick")
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function HtmlCarousel(props) {
    const sliderRef = useRef();
    let { content } = props;
    let quommonClasses = getQuommons(props, "html-carousel");
    //-------------------------------------------------------------------
    // Translate the text objects in case their is a dictionary provided
    //-------------------------------------------------------------------
    let ribbonText = content?.tag;
    if (
        props.withTranslation?.lang &&
        props.withTranslation.lang !== "" &&
        props.withTranslation.lang !== "en"
    ) {
        let tobj = getTranslation(props.withTranslation, "ribbon");
        // ribbonText = tobj[content.tag] ? tobj[content.tag] : content.tag;
        console.log(tobj)
    }
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
        autoplay: true,
        pauseOnHover: true,
        centerPadding: "0%",
        swipeToSlide: true,
    };
    // ========================= Render Function =================================
    return (
        <motion.div
            className={`qui ${quommonClasses.parentClasses}`}
        >
            <Slider ref={sliderRef} {...settings}>
                {_.map(content, (slide, index) => {
                    return (
                        <div className="qui-html-slide-container"
                            key={"slider-" + index + Math.random()}>
                            <div className={`qui-html-slide`}>
                                <BannerCard  {...slide.props} content={slide} onClick={props.onClick} />
                            </div>
                        </div>
                    );
                })}
            </Slider>
            <div className="qui-html-slick-arrows">
                <div className="qui-html-slick-prev"
                    onClick={() => sliderRef.current?.slickPrev()}>
                    <i className="fas fa-arrow-alt-circle-left"></i>
                </div>
                <div className="qui-html-slick-next"
                    onClick={() => sliderRef.current?.slickNext()}>
                    <i className="fas fa-arrow-alt-circle-right"></i>
                </div>
            </div>
        </motion.div>
    );
}
