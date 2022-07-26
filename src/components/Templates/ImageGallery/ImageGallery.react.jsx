import React, { useState, useRef } from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import Slider from "react-slick";
import { motion } from "framer-motion";
import {
    getAnimation,
    getQuommons,
    resolveImage,
} from "../../../common/javascripts/helpers";
import "../../../common/stylesheets/common.css";
import "./ImageGallery.scss";
import "../../../common/stylesheets/overrule.scss";
import SlideHeader from "../../SlideHeader/SlideHeader.react";
import TextBlock from "../../TextBlock/TextBlock.react"
import BannerCard from "../../Carousel/BannerCard/BannerCard.react";

ImageGallery.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    ImageGallery data should be passed in data field and it is a required field
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
    ImageGallery can set header image, backgroundImage & Card's image from imageLibrary.
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
        slideHeaderAccentColor: PropTypes.string,
        slideHeaderBackgroundColor: PropTypes.string,
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
    Use to enable/disable the component
    */
    isDisabled: PropTypes.bool,
    /**
    Use to show/hide the component
    */
    isHidden: PropTypes.bool,
    /**
    ImageGallery component must have the onClick function passed as props
    */
    onClick: PropTypes.func.isRequired,
};

ImageGallery.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    data: {},
    imageLibrary: [],
    slideId: 0,
    //=======================================
    // Quommon props
    //=======================================
    withColor: null,
    withAnimation: null,

    isDisabled: false,
    isHidden: false,
};
/**
## Notes
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- component uses slideHeader and a Html Carousel
**/
export default function ImageGallery(props) {
    //-------------------------------------------------------------------
    // 1. Destructuring props
    //-------------------------------------------------------------------
    let { data, withColor, imageLibrary, slideId } = props;
    //-------------------------------------------------------------------
    // 2. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "image-gallery");
    //-------------------------------------------------------------------
    // 3. Use to set Color in imported components of ImageGallery
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
    // 4. Function to set background
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
    // 5. Function to set click on Vector
    //-------------------------------------------------------------------
    const imageGalleryRef = useRef();
    const [value, setValue] = useState(0);

    const prevSlide = () => {
        imageGalleryRef.current?.slickPrev();
        if (value > 0) {
            setValue(prevState => prevState - 1)
        }
        if (value === 0) {
            setValue(data?.cards?.length - 1)
        }
    }

    const nextSlide = () => {
        imageGalleryRef?.current?.slickNext();
        if (value < data?.cards?.length - 1) {
            setValue(prevState => prevState + 1)
        }
        if (value === data?.cards?.length - 1) {
            setValue(0)
        }
    }
    //-------------------------------------------------------------------
    // 6. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props);
    // ========================= Render Function =================================
    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui ${quommonClasses.parentClasses}`}
        >
            <div
                className={`qui-image-gallery-card ${quommonClasses.childClasses}`}
                key={"image-gallery" + slideId}
                style={{
                    ...background,
                    backgroundColor: withColor?.backgroundColor,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                {!data?.image && (data?.title || data?.subtitle) && (
                    <SlideHeader {...props}
                        content={{ title: data?.title, subTitle: data?.subtitle }}
                        withColor={slideHeaderColors}
                    />
                )}
                {data?.image && (
                    <img
                        className="qui-image-gallery-image"
                        src={resolveImage(data?.image?.id, imageLibrary)}
                        alt="ImageGallery"
                    />
                )}
                <div className="qui-image-gallery-container">
                    <Slider ref={imageGalleryRef}>
                        {_.map(data?.cards, (slide, index) => {
                            return (
                                <div key={"slider-" + index + Math.random()}>
                                    <div className={`qui-image-gallery-carousel-image`}>
                                        <BannerCard  {...props}
                                            content={{ image: resolveImage(slide?.image?.id, imageLibrary) }}
                                            onClick={props.onClick}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                    <div className={`qui-image-gallery-text`}>
                        {data?.cards?.length > 1 &&
                            <div
                                className="qui-image-gallery-prev"
                                onClick={prevSlide}
                            >
                                <i className="fas fa-arrow-alt-circle-left" />
                            </div>
                        }
                        <TextBlock {...props}
                            content={data?.cards[value]?.text}
                            withColor={textBlockColors}
                        />
                        {data?.cards?.length > 1 &&
                            <div
                                className="qui-image-gallery-next"
                                onClick={nextSlide}
                            >
                                <i className="fas fa-arrow-alt-circle-right" />
                            </div>
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    );
}