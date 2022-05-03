// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
  getAnimation,
  getQuommons,
  resolveImage,
} from "../../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./CarouselList.scss";
import "../../../common/stylesheets/overrule.scss";
import SlideHeader from "../../SlideHeader/SlideHeader.react";
import HtmlCarousel from "../../Carousel/HtmlCarousel/HtmlCarousel.react"
import TextBlock from "../../TextBlock/TextBlock.react"

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
    image: PropTypes.object,
    backgroundImage: PropTypes.object,
    presenter: PropTypes.object,
    carouselContent: PropTypes.arrayOf(
      PropTypes.shape({
        content: PropTypes.string,
        image: PropTypes.string,
        tag: PropTypes.oneOf([
          "new",
          "premium",
          "restricted",
          "free"
        ]),
      })),
  }).isRequired,
  /**
    CarouselList can set presenter image from imageLibrary array
    */
  imageLibrary: PropTypes.array,
  slideId: PropTypes.number,
  //=======================================
  // Quommon props
  //=======================================
  /**
    Use to override component colors and behavior
    */
  withColor: PropTypes.shape({
    slideHeaderTextColor: PropTypes.string,
    slideHeaderAccentColor: PropTypes.string,
    slideHeaderBackgroundColor: PropTypes.string,
    textBlockTextColor: PropTypes.string,
    textBlockBackgroundColor: PropTypes.string,
    backgroundColor: PropTypes.string,
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
    title: "Neque porro quisquam est qui dolorem",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
    image: {},
    backgroundImage: {},
    presenter: {},
    carouselContent: []
  },
  imageLibrary: [{}],
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
- component uses slideHeader and a Html Carousel , can switch to presenter slide
**/
export default function CarouselList(props) {
  let { data, withColor, imageLibrary } = props

  //-------------------------------------------------------------------
  // Variable to set presenter image
  //-------------------------------------------------------------------
  let hasPresenter =
    data?.presenter !== undefined &&
    data?.presenter.id !== undefined &&
    data?.presenter.id !== "default43";
  //-------------------------------------------------------------------
  // Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "carousel-list-p");
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
  let textBlockColors = {
    textColor: props.withColor?.textBlockTextColor,
    backgroundColor: props.withColor?.textBlockBackgroundColor
  }
  let SlideHeaderText = {
    title: data?.title,
    subTitle: data?.subtitle,
  }
  let carouselClass = data.carouselContent == null ? "qui-carousel-hide" : "qui-carousel-show"
  //-------------------------------------------------------------------
  // Function to return a view for diptych
  //-------------------------------------------------------------------
  const carouselListView = (data) => {
    return (
      <div className="qui-carousel-list-card" key={"carousel-list-slide-" + props.slideId} style={{
        ...background,
        backgroundColor: withColor?.backgroundColor,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
        {!data?.image && (data?.title || data?.subtitle) && (
          <SlideHeader
            content={SlideHeaderText}
            withColor={slideHeaderColors} />
        )}
        {data?.image && (
          <img className="qui-carousel-list-image"
            src={resolveImage(data?.image.id, imageLibrary)}
            alt="" />
        )}
        <div className={carouselClass}>
          <HtmlCarousel {...props} content={data.carouselContent} />
        </div>
      </div>

    );
  };
  //-------------------------------------------------------------------
  // Function to return a view for diptych with presenter
  //-------------------------------------------------------------------
  const carouselListPresenterView = (data) => {
    return (
      <div className="qui-carousel-list-presenter-container"
        style={{
          ...background,
          backgroundColor: withColor?.backgroundColor,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="qui-carousel-list-presenter-title" >
          <TextBlock {...props}
            content={data?.title}
            asFloated="left"
            withColor={textBlockColors} />
        </div>
        <div className="qui-carousel-list-presenter-sub-title">
          <TextBlock {...props}
            content={data?.subtitle}
            asFloated="left"
            withColor={textBlockColors} />
        </div>
        {hasPresenter && (
          <img
            className="qui-carousel-list-presenter-image"
            src={resolveImage(data.presenter.id, imageLibrary)}
            alt=""
          />)}
        <div className={carouselClass}>
          <HtmlCarousel {...props} content={data.carouselContent} />
        </div>
      </div>
    );
  };
  //-------------------------------------------------------------------
  // Function to set background for presenter view
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
  const getPresenterBackground = () => {
    if (data?.backgroundImage) {
      return {
        backgroundImage: `url(${resolveImage(
          data?.backgroundImage.id,
          imageLibrary
        )})`,
      };
    }
  };
  const background = data?.presenter ? getPresenterBackground() : getBackground();
  // ========================= Render Function =================================
  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className={`qui ${quommonClasses.parentClasses}`}
    >
      {data && <div>
        {data?.presenter ? carouselListPresenterView(data) : carouselListView(data)}
      </div>}

    </motion.div>
  );
}