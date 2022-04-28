// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
  getAnimation,
  getQuommons,
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
    headerImage: PropTypes.string,
    backgroundImage: PropTypes.string,
    presenterTitle: PropTypes.string,
    presenterSubtitle: PropTypes.string,
    presenterImage: PropTypes.string,
    presenterBackgroundImage: PropTypes.string,
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
  slideId: PropTypes.number,
  isPresenter: PropTypes.bool,
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
    headerImage: "",
    backgroundImage: "",
    presenterImage: "",
    presenterBackgroundImage: "",
    presenterTitle: "Neque porro quisquam est qui dolorem",
    presenterSubtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    carouselContent: []
  },
  slideId: 0,
  isPresenter: false,
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
- component is used to show the question and the jumbled answer , user need to submit the correct
  answer using the input field, typed answer will submitted as it is.
**/
export default function CarouselList(props) {
  let { data, withColor, isPresenter } = props
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
  //--------------------------------------------------------------------------
  // HtmlCarousel props
  //--------------------------------------------------------------------------

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
        {!data?.headerImage && (data?.title || data?.subtitle) && (
          <SlideHeader
            content={SlideHeaderText}
            withColor={slideHeaderColors} />
        )}
        {data?.headerImage && (
          <img className="qui-carousel-list-image" src={data?.headerImage} alt="" />
        )}
        <HtmlCarousel {...props} content={data.carouselContent} />
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
            content={data?.presenterTitle}
            asFloated="left"
            withColor={textBlockColors} />
        </div>
        <div className="qui-carousel-list-presenter-sub-title">
          <TextBlock {...props}
            content={data?.presenterSubtitle}
            asFloated="left"
            withColor={textBlockColors} />
        </div>
        <img
          className="qui-carousel-list-presenter-image"
          src={data.presenterImage}
          alt=""
        />
        <HtmlCarousel {...props} content={data.carouselContent} />
      </div>
    );
  };
  //-------------------------------------------------------------------
  // Function to set background for presenter view
  //-------------------------------------------------------------------
  const getBackground = () => {
    return {
      backgroundImage: `url(${data?.backgroundImage})`,
    };
  };
  const getPresenterBackground = () => {
    return {
      backgroundImage: `url(${data?.presenterBackgroundImage})`,
    };
  };
  const background = isPresenter ? getPresenterBackground() : getBackground();
  // ========================= Render Function =================================
  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className={`qui ${quommonClasses.parentClasses}`}
    >
      {data && <div>
        {isPresenter ? carouselListPresenterView(data) : carouselListView(data)}
      </div>}

    </motion.div>
  );
}