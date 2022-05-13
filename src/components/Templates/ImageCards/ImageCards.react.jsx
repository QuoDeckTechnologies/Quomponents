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
import "./ImageCards.scss";
import "../../../common/stylesheets/overrule.scss";
import SlideHeader from "../../SlideHeader/SlideHeader.react";
import ClickableImage from "../../ClickableImage/ClickableImage.react";
import TextBlock from "../../TextBlock/TextBlock.react"

ImageCards.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    ImageCards data should be passed in data field and it is a required field
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
    ImageCards can set HeaderImage, backgroundImage & cards's image from imageLibrary array
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
    Use to show/hide the component
    */
    isHidden: PropTypes.bool,
    /**
    Use to enable/disable the component
    */
    isDisabled: PropTypes.bool,
    /**
    ImageCards component must have the onClick function passed as props
    */
    onClick: PropTypes.func.isRequired,
};

ImageCards.defaultProps = {
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
- Displays a ImageCards with Image Tag, TextBlock, SlideHeader & ClickableImage
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function ImageCards(props) {
    //-------------------------------------------------------------------
    // 1. Destructuring props
    //-------------------------------------------------------------------
    let { data, withColor, imageLibrary, slideId } = props;
    //-------------------------------------------------------------------
    // 2. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "image-cards");
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
    //-------------------------------------------------------------------
    // 4. Function to set click on ClickableImage and manage slider settings
    //-------------------------------------------------------------------
    const [state, setState] = useState(0);
    const sliderRef = useRef();

    function handleClick(e) {
        props.onClick(e)
        setState(e)
    }

    var settings = {
        dots: false,
        speed: 500,
        initialSlide: 1,
        slidesToScroll: 1,
        slidesToShow: 4.2,
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
                className={`qui-image-cards-card ${quommonClasses.childClasses}`}
                key={"image-cards" + slideId}
            >
                {!data?.image && (data?.title || data?.subtitle) && (
                    <SlideHeader {...props}
                        content={{ title: data?.title, subTitle: data?.subtitle }}
                        withColor={slideHeaderColors}
                    />
                )}
                {data?.image && (
                    <img
                        className="qui-image-cards-image"
                        src={resolveImage(data?.image?.id, imageLibrary)}
                        alt="ImageCards"
                    />
                )}
                <div className="qui-image-cards-container">
                    {_.map(data?.cards, (image, index) => {
                        return (
                            <div key={'image-cards-display-image' + index}>
                                {state === index &&
                                    <img
                                        className="qui-image-cards-display-image"
                                        src={resolveImage(image?.image?.id, imageLibrary)}
                                        alt="ImageCards"
                                    />
                                }
                            </div>
                        );
                    })}
                    <div
                        className="qui-image-cards-clickable-images-container"
                    >
                        <Slider ref={sliderRef} {...settings}>
                            {_.map(data?.cards, (image, index) => {
                                return (
                                    <ClickableImage
                                        key={'ClickableImage' + index}
                                        content={{ image: resolveImage(image?.image?.id, imageLibrary) }}
                                        onClick={() => handleClick(index)}
                                    />
                                );
                            })}
                        </Slider>
                    </div>
                    {_.map(data?.cards, (image, index) => {
                        return (
                            <div key={'text' + index}>
                                {state === index &&
                                    <div className="qui-image-cards-display-text">
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