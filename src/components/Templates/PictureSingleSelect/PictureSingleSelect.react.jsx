// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Grid from "@mui/material/Grid";
import _ from "lodash";
import {
  getAnimation,
  getQuommons,
  resolveImage,
} from "../../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./PictureSingleSelect.scss";
import "../../../common/stylesheets/overrule.scss";
import SlideHeader from "../../SlideHeader/SlideHeader.react";
import TextBlock from "../../TextBlock/TextBlock.react";
import ClickableImage from "../../ClickableImage/ClickableImage.react";

PictureSingleSelect.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
    PictureSingleSelect content should be passed in data field and it is a required field
  */
  data: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    question: PropTypes.string,
    imageOpts: PropTypes.array,
    image: PropTypes.object,
    backgroundImage: PropTypes.object,
  }).isRequired,
  /**
    PictureSingleSelect can set images from imageLibrary array
  */
  imageLibrary: PropTypes.array,
  /**
    PictureSingleSelect slideId should be passed with props, to specify the slide.
  */
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
    Use to float the component in parent container
  */
  asFloated: PropTypes.oneOf(["left", "right", "none", "inline"]),
  /**
    Use to override component colors and behavior
  */
  withColor: PropTypes.shape({
    backgroundColor: PropTypes.string,
    slideHeaderTextColor: PropTypes.string,
    slideHeaderAccentColor: PropTypes.string,
    slideHeaderBackgroundColor: PropTypes.string,
    captionTextColor: PropTypes.string,
    captionBackgroundColor: PropTypes.string,
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
    PictureSingleSelect component must have the onClick function passed as props
  */
  onClick: PropTypes.func.isRequired,
};

PictureSingleSelect.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  data: {},
  slideId: 0,
  //=======================================
  // Quommon props
  //=======================================
  asVariant: "warning",
  asFloated: "left",
  withColor: null,
  withAnimation: null,
  isDisabled: false,
  isHidden: false,
};

/**
## Notes
- The design system used for this component is Fontawesome Icon
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function PictureSingleSelect(props) {
  //-------------------------------------------------------------------
  // 1. Destructuring data from props
  //-------------------------------------------------------------------
  let { data, withColor, imageLibrary, slideId } = props;
  //-------------------------------------------------------------------
  // 2. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "picture-single-select");
  quommonClasses.childClasses += ` variant-${props.asVariant}-text`;
  //-------------------------------------------------------------------
  // 3. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props);
  //-------------------------------------------------------------------
  // 4. Setting the colors of the imported components
  //-------------------------------------------------------------------
  let captionColors = {
    textColor: props.withColor?.captionTextColor,
    backgroundColor: props.withColor?.captionBackgroundColor,
  };
  let slideHeaderColors = {
    textColor: props.withColor?.slideHeaderTextColor,
    accentColor: props.withColor?.slideHeaderAccentColor,
    backgroundColor: props.withColor?.slideHeaderBackgroundColor,
  };
  //-------------------------------------------------------------------
  // 5. Set background image and color for card
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
        className={`qui-picture-single-select-card ${quommonClasses.childClasses}`}
        key={"picture-single-select" + slideId}
      >
        {!data?.image && (data?.title || data?.subtitle) && (
          <SlideHeader
            title={data?.title}
            subtitle={data?.subtitle}
            withColor={slideHeaderColors}
          />
        )}
        {data?.image && (
          <img
            className="qui-picture-single-select-image qt-shadow"
            src={resolveImage(data?.image.id, imageLibrary)}
            alt=""
          />
        )}
        <TextBlock
          {...props}
          content={props.data?.question}
          withColor={captionColors}
        />
        <Grid
          container
          rowSpacing={{ xs: 0.5, sm: 0.5, md: 0.5, lg: 0.5, xl: 0.5 }}
          columnSpacing={{ xs: 0.5, sm: 0.5, md: 0.5, lg: 0.5, xl: 0.5 }}
          className="qui-picture-single-select-container"
        >
          {_.map(data?.imageOpts, (image, index) => {
            return (
              <Grid key={index} item xs={6} sm={6} md={6} lg={6}>
                <ClickableImage
                  {...props}
                  content={{
                    image: resolveImage(image.image.id, imageLibrary),
                  }}
                  onClick={() => props.onClick(index)}
                />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </motion.div>
  );
}
