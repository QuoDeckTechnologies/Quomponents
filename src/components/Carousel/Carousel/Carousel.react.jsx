import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { motion } from "framer-motion";
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
import "./Carousel.scss";
import "../../../common/stylesheets/overrule.scss";
import Button from "../../Buttons/Button/Button.react";

Carousel.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    Carousel data should be passed in data field and it is required field
        */
    data: PropTypes.arrayOf(PropTypes.shape({
        image: PropTypes.string,
        label: PropTypes.string,
        box: PropTypes.shape({
            title: PropTypes.string,
            subTitle: PropTypes.string
        })
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
    Use to define component text size in increasing order
    */
    asSize: PropTypes.oneOf([
        "tiny",
        "small",
        "normal",
        "big",
        "huge",
        "massive",
    ]),
    /**
    Use to define component padding in increasing order
    */
    asPadded: PropTypes.oneOf(["fitted", "compact", "normal", "relaxed"]),
    /**
    Use to float the component in parent container
    */
    asFloated: PropTypes.oneOf(["left", "right", "none", "inline"]),
    /**
    Use to align content within the component container
    */
    asAligned: PropTypes.oneOf(["left", "right", "center"]),

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
    Use to add an icon to the component
    */
    withIcon: PropTypes.shape({
        icon: PropTypes.string,
        size: PropTypes.string,
        position: PropTypes.oneOf(["left", "right"]),
    }),
    /**
    Use to add a heading label, a footer caption or a title popover to the component
    */
    withLabel: PropTypes.shape({
        format: PropTypes.oneOf(["label", "caption", "popover"]),
        content: PropTypes.string,
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
    Use to show/hide the component
    */
    isHidden: PropTypes.bool,
    /**
    Use to enable/disable the component
    */
    isDisabled: PropTypes.bool,
    /**
    Use to toggle the component taking the full width of the parent container
    */
    isFluid: PropTypes.bool,
    /**
    Use to toggle a loading state for the component
    */
    isLoading: PropTypes.bool,

    /**
    Button component must have the onClick function passed as props
    */
    onClick: PropTypes.func.isRequired,
};

Carousel.defaultProps = {
    // Component Specific props
    //=======================================
    data: [],
    // Quommon props
    //=======================================
    asVariant: "primary",
    asSize: "normal",
    asPadded: "normal",
    asFloated: "none",
    asAligned: "center",

    withColor: null,
    withIcon: null,
    withLabel: null,
    withAnimation: null,
    withTranslation: null,

    isHidden: false,
    isDisabled: false,
    isFluid: false,
    isLoading: false,
};

function getLabel(labelObj, position) {
    return labelObj?.format === position ? labelObj.content : "";
}

function getColors(colors, hovered) {
    return hovered
        ? {
            background: colors.hoverBackgroundColor,
            color: colors.hoverTextColor,
        }
        : {
            background: colors.backgroundColor,
            color: colors.textColor,
        };
}

function getIcon(iconObj, position, iconOnly) {
    let iconMargin = iconOnly
        ? "0"
        : position === "left"
            ? "0 0.5em 0 0"
            : "0 0 0 0.5em";

    return (
        iconObj?.icon &&
        iconObj?.position === position && (
            <i
                className={`qui-icon ${iconObj.icon}`}
                style={{ fontSize: iconObj.size, margin: iconMargin }}
            ></i>
        )
    );
}

/**
## Notes
- The design system used for this component is Material UI (@mui/material)
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- MUI props are not being passed to the button. Please speak to the admin to handle any new MUI prop.
**/
export default function Carousel(props) {
    const [hovered, setHovered] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0)
    const sliderRef = useRef();
    function afterChangeHandler(i) {
        setCurrentIndex((i ? i : 0))
    }
    // const handleNextClick = () => {
    //     slider.slickNext()
    // };
    // const handlePrevClick = () => {
    //     slider.slickPrev()
    // };
    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props);
    if (props.isCircular)
        quommonClasses.childClasses += ` is-circular ${props.content === "" && props.withIcon ? "is-only-icon" : ""
            }`;

    //-------------------------------------------------------------------
    // 2. Set the component colors
    //-------------------------------------------------------------------
    let colors = props.withColor ? getColors(props.withColor, hovered) : {};

    //-------------------------------------------------------------------
    // 3. Set the button text
    //-------------------------------------------------------------------
    let buttonText = props.content
        ? props.content
        : props.children
            ? props.children
            : "";
    let iconOnly = buttonText === "";

    //-------------------------------------------------------------------
    // 4. Set the label/caption/popover and loading text
    //-------------------------------------------------------------------
    let labelContent = Object.assign({}, props.withLabel);
    let labelStyle = labelContent?.textColor
        ? { color: labelContent.textColor }
        : {};
    let loadingText = "Please Wait...";

    //-------------------------------------------------------------------
    // 5. Translate the text objects in case their is a dictionary provided
    //-------------------------------------------------------------------
    if (
        props.withTranslation?.lang &&
        props.withTranslation.lang !== "" &&
        props.withTranslation.lang !== "en"
    ) {
        let tObj = getTranslation(props.withTranslation);
        if (tObj && props.content && props.content !== "") {
            buttonText = tObj.text;
        }
        if (labelContent && tObj?.label) labelContent.content = tObj.label;
        loadingText = getTranslation(props.withTranslation, "loading");
    }

    //-------------------------------------------------------------------
    // 6. Provide loading text if loading is clicked
    //-------------------------------------------------------------------
    buttonText = props.isLoading ? loadingText : buttonText;
    labelContent = props.isLoading ? "" : labelContent;

    //-------------------------------------------------------------------
    // 7. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);


    var settings = {
        dots: true,
        speed: 500,
        initialSlide: 0,
        slidesToScroll: 1,
        slidesToShow: 1,
        centerMode: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        centerPadding: "110px",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '50px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '50px',
                    slidesToShow: 1
                }
            }
        ]
    };
    let segmentContent = () => {
        let { data } = props;
        return _.map(
            data,
            (d) => {
                let cardStyle = { backgroundImage: `url(${d.image})`, backgroundRepeat: "round" };

                return (
                    <div
                        className="slider-card"
                        style={cardStyle}
                    >
                        {d.box && (
                            <div className="slider-card-box">

                                {/* <b>{d.box.title}</b>
                                <div>{d.box.subTitle}</div> */}
                            </div>
                        )}
                    </div >
                );
            }
        );

    };
    // ========================= Render Function =================================

    return (
        <Slider ref={sliderRef} {...settings} afterChange={afterChangeHandler}>
            {_.map(segmentContent(), (content, index) => {
                return (
                    <div className="qui">
                        <div
                            key={"slider-" + index + Math.random()}
                            className={index === currentIndex ? "qui-slide qui-activeSlide" : "qui-slide"}
                        >
                            {content}
                        </div>
                    </div>
                );
            })}
        </Slider>
    );
}
