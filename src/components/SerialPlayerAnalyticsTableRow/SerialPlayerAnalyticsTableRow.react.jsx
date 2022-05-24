// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
  getAnimation,
  getQuommons,
} from "../../common/javascripts/helpers.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./SerialPlayerAnalyticsTableRow.scss";
import "../../common/stylesheets/overrule.scss";
SerialPlayerAnalyticsTableRow.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
    SerialPlayerAnalyticsTableRow content should be passed in content field and it is a required field
    */
  content: PropTypes.shape({
    name: PropTypes.string,
    phone: PropTypes.string,
    daysPlayed: PropTypes.string,
    cohort: PropTypes.string,
    wallet: PropTypes.string,
  }).isRequired,
  //=======================================
  // Quommon props
  //=======================================
  /**
    Use to override component colors and behavior
    */
  withColor: PropTypes.shape({
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
    Use to show/hide the component
    */
  isHidden: PropTypes.bool,
};

SerialPlayerAnalyticsTableRow.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  content: {},
  //=======================================
  // Quommon props
  //=======================================
  withColor: null,
  withAnimation: null,
  isHidden: false,
};
/**
## Notes
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- Displays a SerialPlayerAnalyticsTableRow with name, id , phone number , cohort name and wallet.
**/
export default function SerialPlayerAnalyticsTableRow(props) {
  let { content, withColor } = props
  //-------------------------------------------------------------------
  // Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "spa-table-row");
  quommonClasses.childClasses += ` variant-${props.asVariant}-text`;
  //-------------------------------------------------------------------
  // Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props.withAnimation);

  // ========================= Render Function =================================
  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className={`qui ${quommonClasses.parentClasses}`}
    >
      <div className="qui-spa-table-row-card">
        <div className="qui-spa-name" style={{ color: withColor?.textColor }}>{content?.name}</div>
        <div className="qui-spa-phone" style={{ color: withColor?.textColor }}>{content?.phone}</div>
        <div className="qui-spa-days-played" style={{ color: withColor?.textColor }}>{content?.daysPlayed}</div>
        <div className="qui-spa-cohort" style={{ color: withColor?.textColor }}>{content?.cohort}</div>
        <div className="qui-spa-wallet" style={{ color: withColor?.textColor }}>{content?.wallet}</div>
      </div>
    </motion.div>
  );
}
