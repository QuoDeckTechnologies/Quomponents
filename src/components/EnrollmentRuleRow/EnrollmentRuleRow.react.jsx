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
  content: PropTypes.shape({}).isRequired,
  //=======================================
  // Quommon props
  //=======================================

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
    Button component must have the onClick function passed as props
    */
  onClick: PropTypes.func.isRequired,
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
- Status of topics can be changed from content prop
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
  let criteria = content?.enrollmentRule;
  //-------------------------------------------------------------------
  // 3. useEffect hook to mimic submit of enrollment rules
  //-------------------------------------------------------------------
  useEffect(() => {
    criteria = content?.enrollmentRule;
    let temp = {};
    let allKeys
    let keys
    if(criteria){
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
      setAllRules([...allRules, newRule]);
    }
  }, [content?.enrollmentRule]);
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
      {allRules && allRules?.map((item, index) => {
        let data = Object.values(item.criteria);
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
              <i className="fas fa-play" onClick={()=>props.onClick()}></i>
              <i className="fas fa-times" onClick={()=>props.onClick()}></i>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
}
