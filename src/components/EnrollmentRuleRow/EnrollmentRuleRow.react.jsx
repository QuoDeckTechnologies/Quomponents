// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import _ from "lodash";
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
  EnrollmentRuleRow will take criteria from criteria props.
  */
  criteria: PropTypes.object,
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
  criteria: {},
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
  // 1. Destructuring enrollmentRule, allRules prop
  //-------------------------------------------------------------------
  const { criteria } = props;
  //-------------------------------------------------------------------
  // 2. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "enrollment-rule-row");
  //-------------------------------------------------------------------
  // 3. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props);

  // ========================= Render Function =================================

  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className={`qui ${quommonClasses.parentClasses}`}
    >
      <div
        className="qui-enrollment-list-element"
        style={{ backgroundColor: props.withColor?.backgroundColor }}
      >
        <div className="qui-enrollment-rule-criteria-container">
          {_.map(criteria && Object.values(criteria), (element, index) => {
            return (
              <p
                className="qui-enrollment-rule"
                key={index}
                style={{
                  backgroundColor: props.withColor?.accentColor,
                  color: props.withColor?.textColor,
                }}
              >
                {element}
              </p>
            );
          })}
        </div>
        <div className="qui-enrollment-icons">
          <i
            className="fas fa-play"
            onClick={(e) => props.onRunRule(criteria)}
          ></i>
          <i
            className="fas fa-times"
            onClick={(e) => props.onRemoveRule(criteria)}
          ></i>
        </div>
      </div>
    </motion.div>
  );
}
