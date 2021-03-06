// Import npm packages
import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
  getAnimation,
  getQuommons,
  getTranslation,
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
    bullets: PropTypes.arrayOf(
      PropTypes.string
    ),
    rebullets: PropTypes.arrayOf(
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
    Anagram component must have the onClick function passed as props
    */
  onClick: PropTypes.func,
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
    rebullets: []
  },
  imageLibrary: [{}],
  slideId: 0,
  //=======================================
  // Quommon props
  //=======================================
  asVariant: "primary",
  withColor: null,
  withAnimation: null,
  withTranslation: null,
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
  const [active, setActive] = useState("none")

  //-------------------------------------------------------------------
  // Get translation of the component
  //-------------------------------------------------------------------
  let dos = "DOs"
  let donts = "DON'Ts"
  let tip = "Click on the buttons above to view"
  let tObj = null;
  if (
    props.withTranslation?.lang &&
    props.withTranslation.lang !== "" &&
    props.withTranslation.lang !== "en"
  ) {
    tObj = getTranslation(props.withTranslation);
    dos = tObj?.dos || "DOs"
    donts = tObj?.donts || "DON'Ts"
    tip = tObj?.tip || "Click on the buttons above to view"
  }
  //-------------------------------------------------------------------
  // Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "dos-donts");
  quommonClasses.childClasses += ` variant-${props.asVariant}-text`;
  //-------------------------------------------------------------------
  //  Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props);
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
  const lists = (value) => {
    if (value === 0) {
      setActive("do")
    }
    if (value === 1) {
      setActive("dont")
    }
  }
  let handleClick = (value) => {
    props.onClick(value)
    lists(value)
  }
  const getBackground = () => {
    return {
      backgroundImage: `url(${resolveImage(data?.backgroundImage.id, imageLibrary)})`,
      backgroundSize: "cover",
    };
  };
  const background = data?.backgroundImage
    ? getBackground()
    : {
      backgroundColor: withColor?.backgroundColor ? withColor?.backgroundColor : "#00000079"
    };
  // ========================= Render Function =================================
  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className={`qui ${quommonClasses.parentClasses}`
      }
    > {data &&
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
                text: dos,
              },
              {
                text: donts,
              },
            ]}
            withTranslation={null}
            asSize="normal"
            onClick={(value) => handleClick(value)} />
        </div>
        {active === "do" &&
          <BulletBlock {...props} content={data?.bullets} withColor={bulletBlockColors} asVariant={props.asVariant} />}
        {active === "dont" &&
          <BulletBlock {...props} content={data?.rebullets} withColor={bulletBlockColors} asVariant={props.asVariant} />}
        {active === "none" && (
          <h3 className="qui-do-donts-default-text"
            style={{
              color: slideHeaderColors.textColor
            }}>
            {tip}
          </h3>
        )}
      </div>
      }
    </motion.div >
  );
}