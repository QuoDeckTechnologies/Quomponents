// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { getAnimation, getQuommons } from "../../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./Title.scss";
import "../../../common/stylesheets/overrule.scss";
import SlideHeader from "../../SlideHeader/SlideHeader.react";
import IconBlock from "../../IconBlock/IconBlock.react";
import TextBlock from "../../TextBlock/TextBlock.react";

Title.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
    Title data should be passed in data field and it is a required field
    */
  data: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    image: PropTypes.string,
    icon: PropTypes.string,
    backgroundImage: PropTypes.string,
    presenter: PropTypes.string,
  }),
  /**
    Title component can use presenter props to show presenter template
    */
  isPresenter: PropTypes.bool,
  //=======================================
  // Quommon props
  //=======================================
  /**
    Use to float the component in parent container
    */
  asFloated: PropTypes.oneOf(["left", "right", "none", "inline"]),
  /**
    Use to override component colors and behavior
    */
  withColor: PropTypes.shape({
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    slideHeaderAccentColor: PropTypes.string,
    slideHeaderBackgroundColor: PropTypes.string,
    slideHeaderTextColor: PropTypes.string,
    textBlockBackgroundColor: PropTypes.string,
    textBlockTextColor: PropTypes.string,
    iconBlockBackgroundColor: PropTypes.string,
    iconBlockAccentColor: PropTypes.string,
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
};

Title.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  data: {},
  //=======================================
  // Quommon props
  //=======================================
  withColor: null,
  withAnimation: null,
  isHidden: false,
};
/**
## Notes
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function Title(props) {
  //-------------------------------------------------------------------
  // 1. Destructuring props
  //-------------------------------------------------------------------
  const { data, withColor, isPresenter } = props;
  //-------------------------------------------------------------------
  // 2. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "title");
  //-------------------------------------------------------------------
  // 3. Function to return a view for title
  //-------------------------------------------------------------------
  const getView = (data) => {
    if (!data?.image && (data?.title || data?.subtitle)) {
      return (
        <SlideHeader
          content={{ title: data?.title }}
          withColor={{
            backgroundColor: withColor?.slideHeaderBackgroundColor,
            accentColor: withColor?.slideHeaderAccentColor,
            textColor: withColor?.slideHeaderTextColor,
          }}
        />
      );
    } else if (data?.image) {
      return (
        data?.image && (
          <img
            className="qui-title-image"
            src={props.data?.image}
            alt="slide"
          />
        )
      );
    }
  };
  //-------------------------------------------------------------------
  // 4. Function to return a view for title with presenter
  //-------------------------------------------------------------------
  const getPresenterView = (data) => {
    return (
      <div className="qui-title-text-block">
        <div className="qui-title-block-header">
          <TextBlock
            content={data?.title}
            conversation={false}
            asFloated="left"
            withColor={{
              backgroundColor: withColor?.textBlockBackgroundColor,
              textColor: withColor?.textBlockTextColor,
            }}
          />
        </div>
        <div className="qui-title-block-subtitle">
          <TextBlock
            content={data?.subtitle}
            conversation={false}
            asFloated="left"
            asSize="small"
            withColor={{
              backgroundColor: withColor?.textBlockBackgroundColor,
              textColor: withColor?.textBlockTextColor,
            }}
          />
        </div>
      </div>
    );
  };
  //-------------------------------------------------------------------
  // 5. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props.withAnimation);
  //-------------------------------------------------------------------
  // 6. Functions to set background for the template
  //-------------------------------------------------------------------
  const getBackground = () => {
    return {
      backgroundImage: `url(${data?.backgroundImage})`,
    };
  };
  const background = getBackground();

  // ========================= Render Function =================================

  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className={`qui qui-title-card ${quommonClasses.parentClasses}`}
      style={{
        ...background,
        backgroundColor: withColor?.backgroundColor,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className={`qui-title-container ${quommonClasses.childClasses}`}>
        <div className="qui-title-slide-header">
          {!isPresenter && getView(data)}
          {data?.icon && data?.title && (
            <div
              className={`qui-title-icon-block ${
                isPresenter ? "qui-title-presenter" : ""
              }`}
            >
              <IconBlock
                withColor={{
                  accentColor: withColor?.iconBlockAccentColor,
                  backgroundColor: withColor?.iconBlockBackgroundColor,
                }}
                withIcon={{ name: data?.icon }}
              />
            </div>
          )}
        </div>
      </div>
      {isPresenter && getPresenterView(data)}
      {!isPresenter && (
        <div className="qui-title-card-subtitle">
          <p
            style={{ color: withColor?.textColor }}
            className={`qui-title-subtitle`}
          >
            {props.data?.subtitle}
          </p>
        </div>
      )}
      {isPresenter && data?.presenter && (
        <img
          className="qui-title-presenter-image"
          src={data?.presenter}
          alt="Presenter"
        />
      )}
    </motion.div>
  );
}
