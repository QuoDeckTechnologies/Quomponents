import React from "react";
import PropTypes from "prop-types";
import {
  getQuommons,
  getTranslation,
} from "../../../common/javascripts/helpers";

import "../../../common/stylesheets/common.css";
import "./Ribbon.scss";
import "../../../common/stylesheets/overrule.scss";
Ribbon.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================

  /**
    Ribbon Text has to be in content or passed as children to the component.
    */
  asEmphasis: PropTypes.oneOf(["new", "premium", "restricted", "free"]),

  // Quommon props
  //=======================================

  /**
    Use to float the component in parent container
    */
  asFloated: PropTypes.oneOf(["left", "right", "none"]),

  /**
    Use to override component colors and behavior
    */
  withColor: PropTypes.shape({
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
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
};

Ribbon.defaultProps = {
  // Component Specific props
  //=======================================
  asEmphasis: "new",

  // Quommon props
  //=======================================
  asFloated: "none",

  withColor: null,
  withTranslation: null,

  isHidden: false,
};

/**
## Notes
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function Ribbon(props) {
  let ribbonText = props.asEmphasis;

  //-------------------------------------------------------------------
  // 1. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "ribbon-container");

  //-------------------------------------------------------------------
  // 2. Set the component colors
  //-------------------------------------------------------------------
  let colors = props.withColor;

  //-------------------------------------------------------------------
  // 3. Translate the text objects in case their is a dictionary provided
  //-------------------------------------------------------------------
  if (
    props.withTranslation?.lang &&
    props.withTranslation.lang !== "" &&
    props.withTranslation.lang !== "en"
  ) {
    let tobj = getTranslation(props.withTranslation, "ribbon");
    ribbonText = tobj?.[props.asEmphasis] || props.asEmphasis;
  }

  // ========================= Render Function =================================

  return (
    <div className={`qui ${quommonClasses.parentClasses}`}>
      <div
        className={`qui-ribbon ${quommonClasses.childClasses} ${props.asEmphasis}`}
        style={{ backgroundColor: colors?.backgroundColor }}
      >
        <span className="qui-ribbon-text" style={{ color: colors?.textColor }}>
          {ribbonText}
        </span>
      </div>
    </div>
  );
}
