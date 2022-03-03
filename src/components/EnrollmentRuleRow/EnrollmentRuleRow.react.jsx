// Import npm packages
import React, { useState } from "react";
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
import "./EnrollmentRuleRow.scss";
import "../../common/stylesheets/overrule.scss";
import { useEffect } from "react";

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

EnrollmentRuleRow.defaultProps = {
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

/**
## Notes
- The design system used for this component is Fontawesome Icon
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- Status of topics can be changed from content prop
**/
export default function EnrollmentRuleRow(props) {
  const { content } = props;
  const [allRules, setAllRules] = useState(content.allRules);
  const [criteria, setCriteria] = useState(content.enrollmentRule);

  useEffect(() => {
    let temp = {}
    let allKeys = Object.keys(criteria)
    let keys = allKeys.filter( key => {
      return criteria[key] !== ''
    })
    if( keys.length !== 0){
      keys.forEach( key => {
        temp[key] = criteria[key]
      })
      let newRules = {criteria:temp}
      setAllRules([...allRules,newRules])
    }
  },[content.enrollmentRule])
  //-------------------------------------------------------------------
  // 1. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "enrollment-rule-row");

  // ========================= Render Function =================================
  return (
    <div className={`qui ${quommonClasses.parentClasses}`}>
      {allRules.map((item, index) => {
        let data = Object.values(item.criteria);
        return (
          <div className="qui-enrollment-list-element" key={index}>
            <div className="qui-enrollment-rules">
            {data.map((item, index) => {
              return (
                <p className="qui-enrollment-rule" key={index}>{item}</p>
              )
            })}
            </div>
            <div className="qui-enrollment-icons">
              <i className="fas fa-play"></i>
              <i className="fas fa-times"></i>
            </div>
          </div>
        );
      })}
    </div>
  );
}