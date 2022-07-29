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
import "./Paragraph.scss";
import "../../../common/stylesheets/overrule.scss";
import SlideHeader from "../../SlideHeader/SlideHeader.react";
import TextBlock from "../../TextBlock/TextBlock.react";

Paragraph.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
    Paragraph data should be passed in data field and it is a required field
    */
  data: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    paragraph: PropTypes.string,
    image: PropTypes.object,
    backgroundImage: PropTypes.object,
    presenter: PropTypes.object,
  }),
  /**
    Paragraph can set presenter and background image from imageLibrary array
    */
  imageLibrary: PropTypes.array,
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

Paragraph.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  data: {},
  imageLibrary: null,
  //=======================================
  // Quommon props
  //=======================================
  asFloated: "left",
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
export default function Paragraph(props) {
  //-------------------------------------------------------------------
  // 1. Destructuring props
  //-------------------------------------------------------------------
  const { data, imageLibrary, withColor } = props;
  //-------------------------------------------------------------------
  // 2. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "paragraph");
  //-------------------------------------------------------------------
  // 3. Function to return a view for paragraph
  //-------------------------------------------------------------------
  const getView = (data) => {
    if (!data?.image && (data?.title || data?.subtitle)) {
      return (
        <SlideHeader
          title={data?.title}
          subtitle={data?.subtitle}
          withColor={{
            backgroundColor: withColor?.slideHeaderBackgroundColor,
            accentColor: withColor?.slideHeaderAccentColor,
            textColor: withColor?.slideHeaderTextColor,
          }}
        />
      );
    } else {
      return (
        <img
          className="qui-paragraph-image"
          src={resolveImage(data?.image?.id, imageLibrary)}
          alt="slide"
        />
      );
    }
  };
  //-------------------------------------------------------------------
  // 4. Function to return a TextBlock component
  //-------------------------------------------------------------------
  const getTextBlock = (content, conversation, position) => {
    return (
      <TextBlock
        content={content}
        conversation={conversation}
        position={position}
        asFloated="left"
        withColor={{
          backgroundColor: withColor?.textBlockBackgroundColor,
          textColor: withColor?.textBlockTextColor,
        }}
      />
    );
  };
  //-------------------------------------------------------------------
  // 5. Function to return a view for paragraph with presenter
  //-------------------------------------------------------------------
  const getPresenterView = (data) => {
    return (
      <div className="qui-paragraph-text-block">
        <div className="qui-paragraph-block-header">
          {getTextBlock(data?.title, false)}
        </div>
        <div className="qui-paragraph-block-subtitle">
          {getTextBlock(data?.subtitle, false)}
        </div>
        <div className="qui-paragraph-block-paragraph">
          {getTextBlock(data?.paragraph, true, "right-bottom")}
        </div>
      </div>
    );
  };
  //-------------------------------------------------------------------
  // 6. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props);
  //-------------------------------------------------------------------
  // 7. Functions to set background for the template
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
  // 8. Variable to set presenter image
  //-------------------------------------------------------------------
  let hasPresenter =
    data?.presenter !== undefined &&
    data?.presenter.id !== undefined &&
    data?.presenter.id !== "default43";

  // ========================= Render Function =================================

  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className={`qui qui-paragraph-card ${quommonClasses.parentClasses}`}
      style={{
        ...background,
        backgroundColor: withColor?.backgroundColor,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {!data?.presenter && (
        <div
          className={`qui-paragraph-container ${quommonClasses.childClasses}`}
        >
          <div className={`qui-paragraph-slide-header`}>{getView(data)}</div>
        </div>
      )}
      {data?.presenter && getPresenterView(data)}
      {!data?.presenter && (
        <div className="qui-paragraph-card-subtitle">
          <p
            style={{ color: withColor?.textColor }}
            className={`qui-paragraph-subtitle`}
          >
            {props.data?.paragraph}
          </p>
        </div>
      )}
      {hasPresenter && (
        <img
          className="qui-paragraph-presenter-image"
          src={resolveImage(data.presenter.id, imageLibrary)}
          alt="Presenter"
        />
      )}
    </motion.div>
  );
}
