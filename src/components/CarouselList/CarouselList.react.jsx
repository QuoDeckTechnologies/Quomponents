// Import npm packages
import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
  getAnimation,
  getQuommons,
} from "../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./CarouselList.scss";
import "../../common/stylesheets/overrule.scss";
import SlideHeader from "../SlideHeader/SlideHeader.react";
import HtmlCarousel from "../Carousel/HtmlCarousel/HtmlCarousel.react"

CarouselList.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
    CarouselList data should be passed in data field and it is a required field
    */
  data: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    image: PropTypes.string,
    carouselContent: PropTypes.arrayOf(
      PropTypes.shape({
        carouselTitle: PropTypes.string,
        carouselImage: PropTypes.string,
        carouselTag: PropTypes.oneOf([
          "new",
          "premium",
          "restricted",
          "free"
        ]),
      })),
  }).isRequired,
  slideId: PropTypes.number,
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
    slideHeaderTextColor: PropTypes.string,
    slideHeaderAccentColor: PropTypes.string,
    slideHeaderBackgroundColor: PropTypes.string,
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
    CarouselList component must have the onClick function passed as props
    */
  onClick: PropTypes.func.isRequired,
};

CarouselList.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  data: {
    title: "",
    subtitle: "",
    image: "",
    carouselContent: []
  },
  slideId: 0,
  //=======================================
  // Quommon props
  //=======================================
  asVariant: "primary",
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
- component is used to show the question and the jumbled answer , user need to submit the correct
  answer using the input field, typed answer will submitted as it is.
**/
export default function CarouselList(props) {
  let { data } = props
  //-------------------------------------------------------------------
  // Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "carousel-list-p");
  quommonClasses.childClasses += ` variant-${props.asVariant}-text`;
  //-------------------------------------------------------------------
  // Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props.withAnimation);
  //-------------------------------------------------------------------
  // Setting the colors of the imported components
  //-------------------------------------------------------------------
  let slideHeaderColors = {
    textColor: props.withColor?.slideHeaderTextColor,
    accentColor: props.withColor?.slideHeaderAccentColor,
    backgroundColor: props.withColor?.slideHeaderBackgroundColor
  }
  //--------------------------------------------------------------------------
  // HtmlCarousel props
  //--------------------------------------------------------------------------
  console.log(data.carouselContent.carouselImage)
  let carousel={
    image:data.carouselContent.carouselImage,
    title:data.carouselContent.carouselTitle,
    tag:data.carouselContent.CarouselTag
  }
  // ========================= Render Function =================================
  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className={`qui ${quommonClasses.parentClasses}`}
    >
      {data &&
        <div className="qui-carousel-list-card">
          {data?.title || data?.subtitle ? (
            <SlideHeader
              content={{ title: data?.title, subTitle: data?.subtitle }}
              withColor={slideHeaderColors}
            />
          ) : (
            <img className="qui-carousel-list-image" src={data?.image} alt="" />
          )}
          <HtmlCarousel {...props} content={[carousel]}/>
        </div>}
    </motion.div>
  );
}