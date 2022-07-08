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
import "./Brancher.scss";
import "../../../common/stylesheets/overrule.scss";
import SlideHeader from "../../SlideHeader/SlideHeader.react";
import ButtonBank from "../../ButtonBank/ButtonBank.react";

Brancher.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
    Brancher data should be passed in data field and it is a required field
    */
  data: PropTypes.shape({
    image: PropTypes.object,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    backgroundImage: PropTypes.object,
    paragraph: PropTypes.string,
    brancher: PropTypes.array,
  }).isRequired,
  /**
    Brancher can set background image from imageLibrary array
    */
  imageLibrary: PropTypes.array,
  /**
    slideId can be used if same template is used continueously for multiple slides in qdf.
    */
  slideId: PropTypes.number,
  /**
    Use for rounded corners of buttons 
    */
  isCircular: PropTypes.bool,
  //=======================================
  // Quommon props
  //=======================================
  /**
    Use to override component colors and behavior
    */
  withColor: PropTypes.shape({
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    slideHeaderBackgroundColor: PropTypes.string,
    slideHeaderAccentColor: PropTypes.string,
    slideHeaderTextColor: PropTypes.string,
    buttonBackgroundColor: PropTypes.string,
    buttonTextColor: PropTypes.string,
    buttonHoverBackgroundColor: PropTypes.string,
    buttonHoverTextColor: PropTypes.string,
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
    Use to enable/disable the component
    */
  isDisabled: PropTypes.bool,
  /**
    Use to show/hide the component
    */
  isHidden: PropTypes.bool,
  /**
    Brancher component must have the onClick function passed as props
    */
  onClick: PropTypes.func.isRequired,
};

Brancher.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  data: {},
  imageLibrary: [],
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
- The design system used for this component is Material UI (@mui/material)
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function Brancher(props) {
  //-------------------------------------------------------------------
  // 1. Destructuring props
  //-------------------------------------------------------------------
  const { data, withColor, slideId, imageLibrary, asVariant } = props;
  //-------------------------------------------------------------------
  // 2. Variable for ButtonBank content props
  //-------------------------------------------------------------------
  let optionsArray = [];
  data?.brancher?.forEach((item) =>
    optionsArray.push(item?.text?.toLowerCase())
  );
  //-------------------------------------------------------------------
  // 3. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "brancher");
  //-------------------------------------------------------------------
  // 4. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props);
  //-------------------------------------------------------------------
  // 6. Functions to set background for the template
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
  // 7. Functions to return slideLink
  //-------------------------------------------------------------------
  const handleClick = (index) => {
    if (data?.brancher) {
      let slide = data?.brancher;
      let slideSeq = slide[index]["slideLink"];
      props.onClick(slideSeq);
    }
  };

  // ========================= Render Function =================================

  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className={`qui qui-brancher-card ${quommonClasses.parentClasses}`}
      style={{
        ...background,
        backgroundColor: withColor?.backgroundColor,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className={`qui-brancher-container ${quommonClasses.childClasses}`}>
        <div className="qui-brancher-slide-header">
          {!data?.image && (data?.title || data?.subtitle) ? (
            <SlideHeader
              content={{ title: data?.title, subTitle: data?.subtitle }}
              withColor={{
                accentColor: withColor?.slideHeaderAccentColor,
                textColor: withColor?.slideHeaderTextColor,
                backgroundColor: withColor?.slideHeaderBackgroundColor,
              }}
            />
          ) : (
            <img
              className="qui-brancher-image"
              src={resolveImage(data?.image?.id, imageLibrary)}
              alt="slide"
            />
          )}
        </div>
        <p
          className={`qui-brancher-paragraph`}
          style={{ color: withColor?.textColor }}
          key={`brancher-paragraph-${slideId}`}
        >
          {data?.paragraph}
        </p>
        <ButtonBank
          {...props}
          content={optionsArray}
          asVariant={asVariant}
          asFloated="none"
          withColor={{
            backgroundColor: withColor?.buttonBackgroundColor,
            textColor: withColor?.buttonTextColor,
            hoverBackgroundColor: withColor?.buttonHoverBackgroundColor,
            hoverTextColor: withColor?.buttonHoverTextColor,
          }}
          withAnimation={null}
          onClick={(e) =>
            handleClick(optionsArray.indexOf(e.target.innerText?.toLowerCase()))
          }
        />
      </div>
    </motion.div>
  );
}
