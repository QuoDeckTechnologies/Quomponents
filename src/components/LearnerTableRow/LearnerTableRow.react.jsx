// Import npm packages
import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { getAnimation, getQuommons } from "../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./LearnerTableRow.scss";
import "../../common/stylesheets/overrule.scss";

LearnerTableRow.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
    LearnerTableRow data should be passed in content field and it is a required field
    */
  content: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  //=======================================
  // Quommon props
  //=======================================
  /**
    Use to define component padding in increasing order
    */
  asPadded: PropTypes.oneOf(["fitted", "compact", "normal", "relaxed"]),

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
    Use to enable/disable the component
    */
  isDisabled: PropTypes.bool,
  /**
    Use to show/hide the component
    */
  isHidden: PropTypes.bool,
  /**
    LearnerTableRow component must have the onUnenrollLearner function passed as props
    */
  onUnenrollLearner: PropTypes.func.isRequired,
  /**
    LearnerTableRow component must have the onSendMessage function passed as props
    */
  onSendMessage: PropTypes.func.isRequired,
};

LearnerTableRow.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  content: [],
  //=======================================
  // Quommon props
  //=======================================
  asPadded: "normal",
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
- Status of topics can be changed from content prop
**/
export default function LearnerTableRow(props) {
  //-------------------------------------------------------------------
  // 1. Destructuring content prop
  //-------------------------------------------------------------------
  const { content } = props;
  //-------------------------------------------------------------------
  // 2. Defining variables and states
  //-------------------------------------------------------------------
  const [isChecked, setIsChecked] = useState(false);
  const enrolledLearners = content;
  //-------------------------------------------------------------------
  // 4. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "learner-table-row");
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
      style={{ backgroundColor: props.withColor?.backgroundColor }}
    >
      {enrolledLearners &&
        enrolledLearners.map((learner, index) => {
          return (
            <div
              className={`qui-learner-list-element ${quommonClasses.childClasses}`}
              key={index}
              style={{ color: props.withColor?.textColor }}
            >
              <div className="qui-learner-checkbox-container">
                <i
                  className={`${isChecked ? "fas fa-check-square" : "far fa-square"
                    } qui-learner-checkbox`}
                  onClick={() => setIsChecked((prevState) => !prevState)}
                ></i>
              </div>
              <div className="qui-learner-username">
                <p>{learner.username}</p>
              </div>
              <div className="qui-learner-name">
                <p>{`${learner.first_name} ${learner.last_name}`}</p>
              </div>
              <div
                className="qui-learner-icons"
                style={{ color: props.withColor?.accentColor }}
              >
                <i
                  className="far fa-comment-alt"
                  onClick={(e) => props.onSendMessage(e)}
                ></i>
                <i
                  className="fas fa-user-minus"
                  onClick={(e) => props.onUnenrollLearner(e)}
                ></i>
              </div>
            </div>
          );
        })}
    </motion.div>
  );
}
