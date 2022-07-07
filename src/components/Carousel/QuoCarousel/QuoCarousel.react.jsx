import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import Slider from "react-slick";
import Button from "../../Buttons/Button/Button.react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
    getQuommons,
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
     *QuoCarousel data should be passed in content field and it is required field
     */
    content: PropTypes.array,
    arrows: PropTypes.bool,
    autoPlay: PropTypes.bool,
    dots: PropTypes.bool,
    infinite: PropTypes.bool,
    slidesToShow: PropTypes.number,
    initialSlide: PropTypes.number,
    asNavFor: PropTypes.elementType,
    addSkipToEnd: PropTypes.bool,
    adaptiveHeight: PropTypes.bool,
    centerMode: PropTypes.bool,
    centerPadding: PropTypes.string,
    //=======================================
    // Quommon props
    //=======================================
    /**
    * Use to override component colors and behavior
    */
    withColor: PropTypes.shape({
        backgroundColor: PropTypes.string
    }),
    /**
    * Use to show a translated version of the component text. Dictionary must be valid JSON. 
    */
    withTranslation: PropTypes.shape({
        lang: PropTypes.string,
        tgt: PropTypes.string,
        dictionary: PropTypes.string,
    }),
    /**
     * Use to enable/disable the component
     */
    isDisabled: PropTypes.bool,
    /**
     * Use to show/hide the component
     */
    isHidden: PropTypes.bool,

    /**
     * Callback function to be called on next navigation
     */
    onRightNavigation: PropTypes.func,
};

QuoCarousel.defaultProps = {
    //======================================
    // Component Specific props
    //=======================================
    content: [],
    arrows: true,
    autoPlay: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    initialSlide: 1,
    asNavFor: null,
    addSkipToEnd: true,
    adaptiveHeight: false,
    centerMode: true,
    centerPadding: "0",

    //======================================
    // Quommon props
    //=======================================
    isHidden: false,
    isDisabled: false,

    withTranslation: null,
    withColor: null,

    onRightNavigation: null
};
/**
## Notes
- The design system used for this component is Slick-slider ("react-slick")
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css.
- We can use any component as a child of carousel
**/
export default function QuoCarousel(props) {
    const sliderRef = useRef();
    let { content, onRightNavigation } = props;
    let [activeSlide, setActiveSlide] = useState(0);
    let quommonClasses = getQuommons(props, "quo-carousel");

    //-------------------------------------------------------------------
    //  Function to handle onRightNavigation and set active slide 
    //-------------------------------------------------------------------
    let handleCallback = (index) => {
        if (onRightNavigation !== undefined && onRightNavigation !== null)
            onRightNavigation(index);
        setActiveSlide(index);
    };

    //-------------------------------------------------------------------
    //  Function to jump to the last slide
    //-------------------------------------------------------------------
    let jumpToEnd = () => {
        if (sliderRef.current)
            sliderRef.current.slickGoTo(content.length - 1);
    };

    //-------------------------------------------------------------------
    //  React slider settings
    //-------------------------------------------------------------------
    var settings = {
        adaptiveHeight: props.adaptiveHeight,
        dots: props.dots,
        speed: 500,
        initialSlide: props.initialSlide,
        slidesToScroll: 1,
        slidesToShow: props.slidesToShow,
        centerMode: props.centerMode,
        arrows: false,
        infinite: props.infinite,
        autoplay: props.autoPlay,
        autplaySpeed: 1000,
        pauseOnHover: false,
        asNavFor: props.asNavFor,
        centerPadding: props.centerPadding,
        swipe: !props.addSkipToEnd || activeSlide !== content.length - 1,
        beforeChange: (current, next) => {
            handleCallback(next);
        }
    };

    let showleftNav = props.infinite ? true : activeSlide !== 0 ? true : false;
    let showRightNav = props.infinite ?
        true : activeSlide !== (content.length - 1) ?
            true : onRightNavigation !== null && onRightNavigation !== undefined ?
                true : false;

    // ========================= Render Function =================================
    return (
        <div
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
                <div
                    className="qui-carousel-slick-prev"
                    onClick={() => sliderRef.current?.slickPrev()}
                >
                    <i className={showleftNav ? "fas fa-arrow-alt-circle-left" :
                        "fas fa-arrow-alt-circle-left qui-disabled-arrow"} />
                </div>
                <div
                    className="qui-carousel-slick-next"
                    onClick={() => sliderRef.current?.slickNext()}
                >
                    <i className={showRightNav ? "fas fa-arrow-alt-circle-right" :
                        "fas fa-arrow-alt-circle-right qui-disabled-arrow"} />
                </div>
            </div> : " "
            }
            {props.addSkipToEnd && activeSlide !== content.length - 1 &&
                <div>
                    <Button
                        content="Skip"
                        asEmphasis="text"
                        isCircular={false}
                        asVariant="primary"
                        asSize="tiny"
                        asPadded="normal"
                        asFloated="none"
                        asAligned="center"
                        withColor={{
                            backgroundColor: props.withColor?.backgroundColor || "",
                        }}
                        withAnimation={{
                            animation: "zoom",
                            duration: 0.5,
                            delay: 0,
                        }}
                        withTranslation={props.withTranslation || null}
                        onClick={jumpToEnd}
                    />
                </div>
            }
        </div >
    );
}
