// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import {
  getQuommons,
  getAnimation,
  resolveImage,
} from "../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./CourseListCard.scss";
import "../../common/stylesheets/overrule.scss";
import "react-circular-progressbar/dist/styles.css";

CourseListCard.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
  CourseListCard component text has to be in content props.
  */
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  checked: PropTypes.bool,
  viewedPercentage: PropTypes.number,
  image: PropTypes.object,
  /**
  CourseListCard can set background image from imageLibrary array
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
    accentColor: PropTypes.string,
    hoverBackgroundColor: PropTypes.string,
    hoverTextColor: PropTypes.string,
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
  id: "",
  name: "",
  description: "",
  checked: true,
  viewedPercentage: 80,
  image: { id: "", extention: "" },
  imageLibrary: [],
  //=======================================
  // Quommon props
  //=======================================
  asFloated: "none",
  withColor: null,
  withAnimation: null,
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
  const {
    id,
    name,
    description,
    checked,
    viewedPercentage,
    image,
    withColor,
    imageLibrary,
    onClick,
  } = props;
  //-------------------------------------------------------------------
  // 2. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "course-list-card");
  //-------------------------------------------------------------------
  // 3. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props);
  //-------------------------------------------------------------------
  // 4. Function to set image of the card
  //-------------------------------------------------------------------
  const getBackground = () => {
    if (image) {
      return {
        backgroundImage: `url(${resolveImage(image.id, imageLibrary)})`,
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
    >
      <div
        className="qui-course-list-card-container qt-shadow"
        style={{
          backgroundColor: withColor?.backgroundColor,
        }}
        onClick={() => onClick(id)}
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
          {checked && (
            <div className="qui-course-list-card-checkbox-container">
              <i
                className="fas fa-check-square"
                style={{ color: withColor?.accentColor }}
              ></i>
            </div>
          )}
        </div>
        <div className="qui-course-list-card-text-container">
          <div className="qui-course-list-card-text">
            <h6
              className="qui-course-list-card-name"
              style={{
                color: withColor?.textColor,
              }}
            >
              {name}
            </h6>
            <p
              className="qui-course-list-card-description qt-sm"
              style={{
                color: withColor?.textColor,
              }}
            >
              {description}
            </p>
          </div>
          {viewedPercentage !== undefined && viewedPercentage !== "" && (
            <div className="qui-course-list-card-chart-container">
              <div className="qui-course-list-card-doughnut-chart">
                <CircularProgressbar
                  value={viewedPercentage}
                  strokeWidth={30}
                  styles={buildStyles({
                    strokeLinecap: "butt",
                  })}
                />
              </div>
              <h5 className="qui-course-list-card-percentage-completion">{`${viewedPercentage}%`}</h5>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
