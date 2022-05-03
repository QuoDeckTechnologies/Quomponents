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
import "./DosAndDonts.scss";
import "../../../common/stylesheets/overrule.scss";
import SlideHeader from "../../SlideHeader/SlideHeader.react";
import BulletBlock from "../../BulletBlock/BulletBlock.react";
import Choice from "../../Buttons/Choice/Choice.react"

DosAndDonts.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
    DosAndDonts data should be passed in data field and it is a required field
    */
  data: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    image: PropTypes.object,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        correct: PropTypes.string,
        text: PropTypes.string,
      })
    ).isRequired,
    bullets: PropTypes.arrayOf(
      PropTypes.string
    ),
    reBullets: PropTypes.arrayOf(
      PropTypes.string
    ),
    backgroundImage: PropTypes.object,
  }),
  /**
    Diptych can set presenter image from imageLibrary array
    */
  imageLibrary: PropTypes.array,
  /**
    DosAndDonts slideId should be passed with props, to specify the slide.
    */
  slideId: PropTypes.number,
  /**
  Use to enable/disable the OR tag
  */
  isChoice: PropTypes.bool,
  /**
  Set action emphasis in increasing order 
  */
  asEmphasis: PropTypes.oneOf(["text", "outlined", "contained"]),
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
    textBlockTextColor: PropTypes.string,
    textBlockBackgroundColor: PropTypes.string,
    bulletBlockTextColor: PropTypes.string,
    bulletBlockBackgroundColor: PropTypes.string,
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
    Use to show/hide the component
  */
  isHidden: PropTypes.bool,
};

DosAndDonts.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  data: {
    title: "",
    subtitle: "",
    caption: "",
    image: {},
    backgroundImage: {},
    bullets: [],
    reBullets: []
  },
  imageLibrary: [{}],
  slideId: 0,
  //=======================================
  // Quommon props
  //=======================================
  asVariant: "primary",
  withColor: null,
  withAnimation: null,
  isHidden: false,
};
/**
## Notes
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- Displays a Captioned Bullet List with TextBlock, BulletBlock and a SlideHeader
**/
export default function DosAndDonts(props) {
  let { data, withColor, imageLibrary } = props
  //-------------------------------------------------------------------
  // Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "dos-donts");
  quommonClasses.childClasses += ` variant-${props.asVariant}-text`;
  //-------------------------------------------------------------------
  //  Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props.withAnimation);
  //-------------------------------------------------------------------
  //  Setting the colors of imported components
  //-------------------------------------------------------------------
  let bulletBlockColors = {
    textColor: props.withColor?.bulletBlockTextColor,
    backgroundColor: props.withColor?.bulletBlockBackgroundColor,
  }
  let slideHeaderColors = {
    textColor: props.withColor?.slideHeaderTextColor,
    accentColor: props.withColor?.slideHeaderAccentColor,
    backgroundColor: props.withColor?.slideHeaderBackgroundColor
  }
  let SlideHeaderText = {
    title: props.data?.title,
    subTitle: props.data?.subtitle,
  }
  const getBackground = () => {
    return {
      background: `url(${resolveImage(data?.backgroundImage.id, imageLibrary)})`,
      backgroundSize: "cover",
    };
  };
  const background = data?.backgroundImage
    ? getBackground()
    : { backgroundColor: withColor?.backgroundColor ? withColor?.backgroundColor : "#fff" };
  console.log(data.options.correct === 0)
  // ========================= Render Function =================================
  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className={`qui ${quommonClasses.parentClasses}`}
    >{data &&
      <div className="qui-dos-donts-card" style={{ ...background }}>
        <div className={`${quommonClasses.childClasses}`} key={"dos-donts-" + props.slideId}>
          {!data?.image && (data?.title || data?.subtitle) && (
            <SlideHeader
              content={SlideHeaderText}
              withColor={slideHeaderColors} />
          )}
          {data?.image && (
            <img className="qui-dos-donts-image" src={resolveImage(data?.image.id, imageLibrary)} alt="" />
          )}
          <Choice {...props}
            options={[
              {
                correct: data?.options[0]?.correct,
                text: data?.options[0]?.text,
              },
              {
                correct: data?.options[1]?.correct,
                text: data?.options[1]?.text,
              },
            ]}
            asSize="normal" />
          {data.options[0].correct ? <BulletBlock {...props} content={data?.bullets} withColor={bulletBlockColors} asVariant={props.asVariant} /> : <BulletBlock {...props} content={data?.reBullets} withColor={bulletBlockColors} asVariant={props.asVariant} />}
        </div>
      </div>}
    </motion.div>
  );
}