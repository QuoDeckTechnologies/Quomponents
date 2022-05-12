import React, { useState, useRef } from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import {
    getAnimation,
    getQuommons,
    resolveImage,
} from "../../../common/javascripts/helpers";
import "../../../common/stylesheets/common.css";
import "./IconListGallery.scss";
import "../../../common/stylesheets/overrule.scss";
import SlideHeader from "../../SlideHeader/SlideHeader.react";
import ClickableImage from "../../ClickableImage/ClickableImage.react";
import TextBlock from "../../TextBlock/TextBlock.react"

IconListGallery.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    IconListGallery data should be passed in data field and it is a required field
    */
    data: PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string,
        image: PropTypes.object,
        backgroundImage: PropTypes.object,
        cards: PropTypes.arrayOf(
            PropTypes.shape({
                image: PropTypes.object,
                text: PropTypes.string,
            })),

    }).isRequired,
    /**
    IconListGallery can set HeaderImage, backgroundImage & cards's image from imageLibrary array
    */
    imageLibrary: PropTypes.array,
    /**
    slideId can be used if same template is used continueously for multiple slides.
    */
    slideId: PropTypes.number,
    //=======================================
    // Quommon props
    //=======================================
    /**
    Use to override component colors and behavior
    */
    withColor: PropTypes.shape({
        backgroundColor: PropTypes.string,
        slideHeaderTextColor: PropTypes.string,
        slideHeaderBackgroundColor: PropTypes.string,
        slideHeaderAccentColor: PropTypes.string,
        textBlockTextColor: PropTypes.string,
        textBlockBackgroundColor: PropTypes.string,
        iconlistgalleryTrackColor: PropTypes.string,
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
            "",
        ]),
        duration: PropTypes.number,
        delay: PropTypes.number,
    }),
    /**
    Use to show/hide the componentresolveImage
    */
    isHidden: PropTypes.bool,
    /**
    Use to enable/disable the component
    */
    isDisabled: PropTypes.bool,
    /**
    IconListGallery component must have the onClick function passed as props
    */
    onClick: PropTypes.func.isRequired,
};

IconListGallery.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    data: {},
    imageLibrary: null,
    slideId: 0,
    //=======================================
    // Quommon props
    //=======================================
    withColor: null,
    withAnimation: null,

    isHidden: false,
    isDisabled: false,
};
/**
## Notes
- Displays a IconListGallery with Image Tag, TextBlock, SlideHeader & ClickableImage
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function IconListGallery(props) {
    //-------------------------------------------------------------------
    // 1. Destructuring props
    //-------------------------------------------------------------------
    let { data, withColor, imageLibrary, slideId } = props;
    //-------------------------------------------------------------------
    // 2. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "icon-list-gallery");
    //-------------------------------------------------------------------
    // 3. Use to set Color of the imported components
    //-------------------------------------------------------------------
    let slideHeaderColors = {
        textColor: withColor?.slideHeaderTextColor,
        accentColor: withColor?.slideHeaderAccentColor,
        backgroundColor: withColor?.slideHeaderBackgroundColor
    }

    let textBlockColors = {
        textColor: withColor?.textBlockTextColor,
        backgroundColor: withColor?.textBlockBackgroundColor
    }

    let trackColor = {
        backgroundColor: withColor?.iconlistgalleryTrackColor
    }
    //-------------------------------------------------------------------
    // 4. Function to set click on ClickableImage and manage slider settings
    //-------------------------------------------------------------------
    const [state, setState] = useState(0);
    const [activeImage, setActiveImage] = useState(0)
    const sliderRef = useRef();

    function handleClick(e) {
        props.onClick(e)
        setState(e)
        setActiveImage(e)
    }

    var settings = {
        dots: false,
        speed: 500,
        initialSlide: 1,
        slidesToScroll: 1,
        slidesToShow: 4,
        centerMode: true,
        arrows: false,
        infinite: true,
        autoplay: false,
        pauseOnHover: true,
        centerPadding: "0%",
        swipeToSlide: true,
    };
    //-------------------------------------------------------------------
    // 5. Function to set background
    //-------------------------------------------------------------------
    const getBackground = () => {
        if (data?.backgroundImage) {
            return {
                backgroundImage: `url(${resolveImage(
                    data?.backgroundImage.id,
                    imageLibrary
                )})`,
            };
        }
    };
    const background = getBackground();
    //-------------------------------------------------------------------
    // 6. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);
    // ========================= Render Function =================================
    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui ${quommonClasses.parentClasses}`}
            style={{
                ...background,
                backgroundColor: withColor?.backgroundColor,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        >
            <div
                className={`qui-icon-list-gallery-card ${quommonClasses.childClasses}`}
                key={"icon-list-gallery" + slideId}
            >
                {!data?.image && (data?.title || data?.subtitle) && (
                    <SlideHeader {...props}
                        content={{ title: data?.title, subTitle: data?.subtitle }}
                        withColor={slideHeaderColors}
                    />
                )}
                {data?.image && (
                    <img
                        className="qui-icon-list-gallery-image"
                        src={resolveImage(data?.image?.id, imageLibrary)}
                        alt="IconListGallery"
                    />
                )}
                <div className="qui-icon-list-gallery-container">
                    {_.map(data?.cards, (image, index) => {
                        return (
                            <div key={'icon-list-gallery-display-image' + index}>
                                {state === index &&
                                    <img
                                        className="qui-icon-list-gallery-display-image"
                                        src={resolveImage(image?.image?.id, imageLibrary)}
                                        alt="IconListGallery"
                                    />
                                }
                            </div>
                        );
                    })}
                    <div
                        className="qui-icon-list-gallery-clickable-images-container"
                    >
                        <div
                            className="qui-icon-list-gallery-track"
                            style={trackColor}
                        />
                        <Slider ref={sliderRef} {...settings}>
                            {_.map(data?.cards, (image, index) => {
                                return (
                                    <ClickableImage
                                        key={'ClickableImage' + index}
                                        content={{ image: resolveImage(image?.image?.id, imageLibrary) }}
                                        onClick={() => handleClick(index)}
                                        isCircular={true}
                                        isActive={activeImage === index ? true : false}
                                        style={{ borderColor: "red" }}
                                        // isActive={true}
                                    />
                                );
                            })}
                        </Slider>
                    </div>
                    {_.map(data?.cards, (image, index) => {
                        return (
                            <div key={'text' + index}>
                                {state === index &&
                                    <div className="qui-icon-list-gallery-display-text">
                                        <TextBlock {...props}
                                            content={image?.text}
                                            withColor={textBlockColors}
                                            withAnimation={null}
                                        />
                                    </div>
                                }
                            </div>
                        );
                    })}
                </div>
            </div>
        </motion.div >
    );
}