// Import npm packages
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { getAnimation, getQuommons } from "../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./EnrollmentRuleRow.scss";
import "../../common/stylesheets/overrule.scss";

EnrollmentRuleRow.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
    EnrollmentRuleRow data should be passed in content field and it is a required field
    */
  content: PropTypes.shape({
    enrollmentRule: PropTypes.shape({}),
    allRules: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string,
        criteria: PropTypes.shape({}),
      })
    ),
  }).isRequired,
  //=======================================
  // Quommon props
  //=======================================
  /**
    Use to override component colors
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
    EnrollmentRuleRow component must have the onRunRule function passed as props
    */
  onRunRule: PropTypes.func.isRequired,
  /**
    EnrollmentRuleRow component must have the onRemoveRule function passed as props
    */
  onRemoveRule: PropTypes.func.isRequired,
};

EnrollmentRuleRow.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  content: {},
  //=======================================
  // Quommon props
  //=======================================
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
export default function EnrollmentRuleRow(props) {
  //-------------------------------------------------------------------
  // 1. Destructuring content prop
  //-------------------------------------------------------------------
  const { content } = props;
  //-------------------------------------------------------------------
  // 2. Defining variables and states
  //-------------------------------------------------------------------
  const [allRules, setAllRules] = useState(content?.allRules);
  //-------------------------------------------------------------------
  // 3. useEffect hook to mimic submit of enrollment rules
  //-------------------------------------------------------------------
  useEffect(() => {
    let criteria = content?.enrollmentRule;
    let temp = {};
    let allKeys;
    let keys;
    if (criteria) {
      allKeys = Object.keys(criteria);
      keys = allKeys.filter((key) => {
        return criteria[key] !== "";
      });
    }
    if (keys?.length !== 0) {
      keys?.forEach((key) => {
        temp[key] = criteria[key];
      });
      let newRule = { criteria: temp };
      setAllRules(prevState => [...prevState, newRule]);
    }
  },[content?.enrollmentRule]);
  //-------------------------------------------------------------------
  // 4. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "enrollment-rule-row");
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
    >
      {allRules &&
        allRules.map((item, index) => {
          let data = Object.values(item.criteria);
          if (data.length) {
            return (
              <div
                className="qui-enrollment-list-element"
                key={index}
                style={{ backgroundColor: props.withColor?.backgroundColor }}
              >
                <div className="qui-enrollment-rules">
                  {data.map((item, index) => {
                    return (
                      <p
                        className="qui-enrollment-rule"
                        key={index}
                        style={{
                          backgroundColor: props.withColor?.accentColor,
                          color: props.withColor?.textColor,
                        }}
                      >
                        {item}
                      </p>
                    );
                  })}
                </div>
                <div className="qui-enrollment-icons">
                  <i
                    className="fas fa-play"
                    onClick={(e) => props.onRunRule(e)}
                  ></i>
                  <i
                    className="fas fa-times"
                    onClick={(e) => props.onRemoveRule(e)}
                  ></i>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
    </motion.div>
  );
}
