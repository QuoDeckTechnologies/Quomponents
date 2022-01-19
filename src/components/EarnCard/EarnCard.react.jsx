// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import _ from "lodash";
import {
  getAnimation,
  getQuommons,
  getTranslation,
} from "../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./EarnCard.scss";
import "../../common/stylesheets/overrule.scss";
import BannerCard from "../Carousel/BannerCard/BannerCard.react";

EarnCard.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
    EarnCard data should be passed in content field and it is a required field
    */
  content: PropTypes.shape({
    image: PropTypes.string,
    tag: PropTypes.oneOf(["new", "premium", "restricted", "free"]),
    header: PropTypes.string,
    content: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.string,
    dates: PropTypes.shape({
      end_date: PropTypes.string,
      start_date: PropTypes.string,
    }),
    topics: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        contentList: PropTypes.arrayOf(PropTypes.shape({})),
        checked: PropTypes.bool,
      })
    ),
  }).isRequired,
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
    Use to define component size in increasing order
    */
  asSize: PropTypes.oneOf([
    "tiny",
    "small",
    "normal",
    "big",
    "huge",
    "massive",
  ]),
  /**
    Use to override component colors and behavior
    */
  withColor: PropTypes.shape({
    backgroundColor: PropTypes.string,
    accentColor: PropTypes.string,
    textColor: PropTypes.string,
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
    Use to enable/disable the component
    */
  isDisabled: PropTypes.bool,
  /**
    Use to show/hide the component
    */
  isHidden: PropTypes.bool,
  /**
    Button component must have the onClick function passed as props
    */
  onClick: PropTypes.func.isRequired,
};

EarnCard.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  content: {},
  //=======================================
  // Quommon props
  //=======================================
  asVariant: "primary",
  asSize: "normal",
  withColor: null,
  withAnimation: null,
  withTranslation: null,
  isDisabled: false,
  isHidden: false,
};

function getColors(colors) {
  let colorStyle = {
    textColors: {
      color: colors.textColor,
    },
    accentColors: {
      color: colors.accentColor,
    },
    bannerColors: {
      backgroundColor: colors.textColor,
    },
    cardColors: {
      backgroundColor: colors.backgroundColor,
    },
  };
  return colorStyle;
}
/**
## Notes
- The design system used for this component is Fontawesome Icon
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- Status of topics can be changed from content prop
**/
export default function EarnCard(props) {
  //-------------------------------------------------------------------
  // 1. Destructuring content from props
  //-------------------------------------------------------------------
  let { content } = props;
  //-------------------------------------------------------------------
  // 2. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "earncard");
  quommonClasses.childClasses += ` variant-${props.asVariant}-text`;
  //-------------------------------------------------------------------
  // 3. Set the component colors
  //-------------------------------------------------------------------
  let colors = props.withColor ? getColors(props.withColor) : {};
  //-------------------------------------------------------------------
  // 4. Get translation of the component
  //-------------------------------------------------------------------
  let labelContent = {
    title: content?.title,
    description: content?.description,
    dates: {
      end_date: content?.dates?.end_date,
      start_date: content?.dates?.start_date,
    },
  };
  let tObj = null;

  if (
    props.withTranslation?.lang &&
    props.withTranslation.lang !== "" &&
    props.withTranslation.lang !== "en"
  ) {
    tObj = getTranslation(props.withTranslation);
    if (labelContent && tObj) {
      labelContent.title = tObj.title;
      labelContent.description = tObj.description;
      labelContent.dates = Object.assign({}, tObj.dates);
    }
  }
  //-------------------------------------------------------------------
  // 5. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props.withAnimation);

  // ========================= Render Function =================================
  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className={`qui ${quommonClasses.parentClasses}`}
      style={colors.cardColors}
      onClick={(e) => props.onClick(e)}
    >
      <div className="qui-left-side">
        <div className="qui-banner-div">
          <BannerCard {...props} onClick={() => {}} />
        </div>
        <div className={`qui-left-lower ${quommonClasses.childClasses}`}>
          <div className="qui-earncard-icon" style={colors.accentColors}>
            <i className={content?.icon}></i>
          </div>
          <div>
            <div className="qui-checkbox">
              {_.map(content?.topics, (topics, index) => {
                return (
                  <i
                    className={`${
                      topics.checked ? "fas fa-check-square" : "far fa-square"
                    }`}
                    key={topics.name + index}
                    style={colors.accentColors}
                  ></i>
                );
              })}
            </div>
            <div className="qui-course-date" style={colors.textColors}>
              <h2>{labelContent?.dates?.start_date}</h2>
              <h2>&nbsp;-&nbsp;</h2>
              <h2>{labelContent?.dates?.end_date}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className={`qui-right-side ${quommonClasses.childClasses}`}>
        <div className="qui-course-header" style={colors.textColors}>
          <h1>{labelContent?.title}</h1>
          <div className="qui-course-banner" style={colors.bannerColors}></div>
        </div>
        <div className="qui-course-description">
          <h3>{labelContent?.description}</h3>
        </div>
      </div>
    </motion.div>
  );
}
