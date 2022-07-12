// Import npm packages
import React, { useState } from "react";
import PropTypes from "prop-types";
import { getQuommons } from "../../common/javascripts/helpers";
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
    backgroundColor: PropTypes.string,
    accentColor: PropTypes.string,
    textColor: PropTypes.string,
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
  asVariant: "primary",
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
  const [enrolledLearners, setEnrolledLearners] = useState(content);
  //-------------------------------------------------------------------
  // 4. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "learner-table-row");
  //-------------------------------------------------------------------
  // 5. Function to handle selection
  //-------------------------------------------------------------------
  const handleSelect = (data) => {
    let tmp_state = enrolledLearners;
    let tmp_arr = [];
    let tmp_obj = {};

    tmp_state.forEach((dataObj) => {
      if (dataObj?._id === data._id) {
        tmp_obj = { ...dataObj };
        tmp_obj.checked = tmp_obj.checked ? false : true;
        tmp_arr.push(tmp_obj);
      } else {
        tmp_obj = { ...dataObj };
        tmp_arr.push(tmp_obj);
      }
    });
    setEnrolledLearners([...tmp_arr]);
  };
  //-------------------------------------------------------------------
  // 6. Function to return selected users to send message
  //-------------------------------------------------------------------
  const handleSendMessage = () => {
    let tmp_arr = [];
    enrolledLearners.forEach((item) => {
      if (item.checked) {
        tmp_arr.push(item.username);
      }
    });
    props.onSendMessage(tmp_arr);
  };
  //-------------------------------------------------------------------
  // 7. Function to return selected users to un enroll
  //-------------------------------------------------------------------
  const handleUnenrollLearner = () => {
    let tmp_arr = [];
    enrolledLearners.forEach((item) => {
      if (item.checked) {
        tmp_arr.push(item.username);
      }
    });
    props.onUnenrollLearner(tmp_arr);
  };

  // ========================= Render Function =================================

  return (
    <div className={`qui ${quommonClasses.parentClasses}`}>
      {enrolledLearners &&
        enrolledLearners.map((learner, index) => {
          return (
            <div
              className={`qui-learner-list-element qui-btn ${quommonClasses.childClasses}`}
              key={index}
              style={{
                backgroundColor: props.withColor?.backgroundColor,
                color: props.withColor?.textColor,
              }}
            >
              <div className="qui-learner-checkbox-container">
                <i
                  className={`${
                    learner.checked ? "fas fa-check-square" : "far fa-square"
                  } qui-learner-checkbox`}
                  onClick={() => handleSelect(learner)}
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
                  onClick={(e) => handleSendMessage()}
                ></i>
                <i
                  className="fas fa-user-minus"
                  onClick={(e) => handleUnenrollLearner()}
                ></i>
              </div>
            </div>
          );
        })}
    </div>
  );
}
