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
import './ContentTableRow.scss'
import "../../common/stylesheets/overrule.scss";


ContentTableRow.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
    ContentTableRow data should be passed in content field and it is a required field
    */
  content: PropTypes.shape({
    
  }).isRequired,
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

ContentTableRow.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  content: {},
  //=======================================
  // Quommon props
  //=======================================
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
export default function ContentTableRow(props) {
  const quommonClasses = getQuommons(props,'content-table-row')

  // ========================= Render Function =================================
  return (
    <div className={`qui ${quommonClasses.parentClasses}`}>
        <input type="checkbox" className="qui-content-checkbox"/>
        <input type="text" className="qui-content-input"/>
        <button className="qui-content-menu"><i class="fas fa-ellipsis-v"></i></button>
    </div>
  );
}