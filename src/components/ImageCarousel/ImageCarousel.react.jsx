// Import npm packages
import React, { useState } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "@mui/material/Button";
import { ArrowForwardIos, ArrowBackIosNew } from "@mui/icons-material";

// Import components
import "./ImageCarousel.scss";

ImageCarousel.propTypes = {
    carouselItems: PropTypes.array,
    showcustomeButton: PropTypes.bool,
    initialSlide: PropTypes.number,
    dots: PropTypes.bool,
    autoPlay: PropTypes.bool,
    infinite: PropTypes.bool,
    speed: PropTypes.number,
    slidesToScroll: PropTypes.number,
    centerMode: PropTypes.bool,
    callback: PropTypes.func,
};

ImageCarousel.defaultProps = {
    carouselItems: [
        "/assets/images/defaults/default-carousel-1.jpg",
        "/assets/images/defaults/default-carousel-2.jpg",
        "/assets/images/defaults/default-carousel-3.jpg",
    ],
    showcustomeButton: true,
    initialSlide: 0,
    dots: false,
    autoplay: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    centerMode: false,
    callback: null,
};
export default function ImageCarousel(props) {
    let [currentIdx, setCurrentIndex] = useState(0);
    let carouselImgCount = props.carouselItems.length;

    const handleNextClick = () => {
        setCurrentIndex((currentIdx + 1) % carouselImgCount);
    };
    const handlePrevClick = () => {
        setCurrentIndex((currentIdx - 1 + carouselImgCount) % carouselImgCount);
    };

    const handleCallback = (index) => {
        if (props.callback) props.callback(index);
    };

    var settings = {
        dots: props.dots,
        speed: 500,
        initialSlide: props.initialSlide,
        slidesToScroll: props.slidesToScroll,
        centerMode: props.centerMode,
        arrows: false,
        infinite: props.infinite,
        autoplay: props.autoPlay,
        afterChange: handleCallback,
    };
    return (
        <div>
            {!props.showcustomeButton && (
                <Slider ref={(slider) => slider} {...settings}>
                    {props.carouselItems.map((img, index) => {
                        return (
                            <div key={"carousel-" + index}>
                                <img
                                    src={img}
                                    alt="carousel"
                                    className="img-carousel"
                                />
                            </div>
                        );
                    })}
                </Slider>
            )}

            {props.showcustomeButton && (
                <div>
                    <Slider ref={(slider) => slider} {...settings}>
                        {props.carouselItems.map((img, index) => {
                            if (index === currentIdx) {
                                return (
                                    <div key={"carousel-" + index}>
                                        <img
                                            src={img}
                                            alt="carousel"
                                            className="img-carousel"
                                        />
                                        <Button
                                            id="btn-next-icon"
                                            onClick={() =>
                                                handleNextClick(index)
                                            }
                                        >
                                            <ArrowForwardIos id="icon" />
                                        </Button>
                                        <Button
                                            id="btn-prev-icon"
                                            onClick={() =>
                                                handlePrevClick(index)
                                            }
                                        >
                                            <ArrowBackIosNew id="icon" />
                                        </Button>
                                    </div>
                                );
                            } else {
                                return <div />;
                            }
                        })}
                    </Slider>
                </div>
            )}
        </div>
    );
}
