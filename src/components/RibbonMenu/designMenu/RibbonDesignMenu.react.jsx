import React from "react";
import PropTypes from "prop-types";
import { getQuommons } from "../../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "../RibbonMenu.scss";
import "./RibbonDesignMenu.scss";
import "../../../common/stylesheets/overrule.scss";
import PalleteThemeSection from "./sections/PalleteThemeSection.react";
import SlideBackground from "./sections/SlideBackground.react";
import OverlayBackground from "./sections/OverlayBackground.react";

RibbonDesignMenu.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  actions: PropTypes.shape({
    updateDeck: PropTypes.func,
  }),
  //=======================================
  // Quommon props
  //=======================================
  /**
  Use to float the component in parent container
  */
  asFloated: PropTypes.oneOf(["left", "right", "inline"]),
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
  /**
  Use to enable/disable the component
  */
  isDisabled: PropTypes.bool,
  /**
  RibbbonDesignMenu component must have the onClick function passed as props
  */
  onClick: PropTypes.func,
};

export default function RibbonDesignMenu(props) {
  //-------------------------------------------------------------------
  // 1. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "ribbon-design-menu-parent");

  // ========================= Render Function =================================
  return (
    <div className={`qui ${quommonClasses.parentClasses}`}>
      <div className={`${quommonClasses.childClasses}`}>
        <div className={`qui-ribbon-design-menu-container`}>
          <PalleteThemeSection {...props} />
          <div className="qui-ribbon-menu-parent-vertical-line"></div>
          <SlideBackground {...props} />
          <div className="qui-ribbon-menu-parent-vertical-line"></div>
          <OverlayBackground {...props} />
        </div>
      </div>
    </div>
  );
}
