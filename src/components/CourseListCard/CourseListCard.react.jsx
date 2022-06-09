// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
  getQuommons,
  getTranslation,
  getAnimation,
  resolveImage,
} from "../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./CourseListCard.scss";
import "../../common/stylesheets/overrule.scss";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

CourseListCard.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
  HCard component text has to be in content props.
  */
  content: PropTypes.object,
  /**
  H Card can set background image from imageLibrary array
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
    accentColor: PropTypes.string,
    accentBackgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    buttonBackgroundColor: PropTypes.string,
    buttonTextColor: PropTypes.string,
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
  Use to enable/disable the component
  */
  isDisabled: PropTypes.bool,
  /**
  CourseListCard component must have the onClick function passed as props
  */
  onClick: PropTypes.func.isRequired,
};

CourseListCard.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  content: {
    id: "",
    name: "",
    description: "",
    buttonText: "",
    checked: true,
    image: { id: "", extention: "" },
  },
  imageLibrary: [],
  //=======================================
  // Quommon props
  //=======================================
  asFloated: "none",
  withColor: null,
  withAnimation: null,
  withTranslation: null,
  isHidden: false,
  isDisabled: false,
};
/**
## Notes
- The design system used for this component is Material UI (@mui/material)
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function CourseListCard(props) {
  //-------------------------------------------------------------------
  // 1. Destructuring props
  //-------------------------------------------------------------------
  const { content, withColor, imageLibrary, onClick } = props;
  //-------------------------------------------------------------------
  // 2. Function to handle click
  //-------------------------------------------------------------------
  const handleClick = () => {
    if (window.innerWidth <= 481) {
      onClick();
    }
  };
  //-------------------------------------------------------------------
  // 3. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "course-list-card");
  //-------------------------------------------------------------------
  // 4. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props.withAnimation);
  //-------------------------------------------------------------------
  // 5. Get translation of the component
  //-------------------------------------------------------------------
  let cardContent = {};
  let tObj = getTranslation(props.withTranslation);
  if (tObj) {
    cardContent = { ...tObj };
  } else {
    cardContent = { ...content };
  }
  //-------------------------------------------------------------------
  // 6. Function to set image of the card
  //-------------------------------------------------------------------
  const getBackground = () => {
    if (content?.image) {
      return {
        backgroundImage: `url(${resolveImage(
          content?.image.id,
          imageLibrary
        )})`,
      };
    }
  };
  const background = getBackground();

  // const percentage = 66;

  // ========================= Render Function =================================

  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className={`qui ${quommonClasses.parentClasses}`}
    >
      <div
        className="qui-course-list-card-container"
        style={{
          backgroundColor: withColor?.backgroundColor,
          color: withColor?.textColor,
        }}
        onClick={handleClick}
      >
        <div
          className="qui-course-list-card-image-container"
          style={{
            ...background,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          {content?.checked && (
            <div
              className="qui-course-list-card-checkbox-container"
              style={{ backgroundColor: withColor?.accentBackgroundColor }}
            >
              <i
                className="fas fa-check-square"
                style={{ color: withColor?.accentColor }}
              ></i>
            </div>
          )}
        </div>
        <div className="qui-course-list-card-text-container">
          <div className="qui-course-list-card-text">
            <h4>{cardContent?.name}</h4>
            <p>{cardContent?.description}</p>
          </div>
          <div className="qui-course-list-card-chart-container">
            <div className="qui-course-list-card-doughnut-chart">
              <CircularProgressbar
                value={content?.percent}
                strokeWidth={30}
                styles={buildStyles({
                  strokeLinecap: "butt",
                })}
              />
            </div>
            <p className="qui-course-list-card-percentage-completion">{`${content?.percent}%`}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
