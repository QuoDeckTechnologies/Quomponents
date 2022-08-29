import React from "react";
import PropTypes from "prop-types";
import {
  getQuommons,
  getTranslation,
} from "../../../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../../common/stylesheets/common.css";
import "../../RibbonMenu.scss";
import "../RibbonToolsMenu.scss";
import "../../../../common/stylesheets/overrule.scss";
import IconLink from "../../../Buttons/IconLink/IconLink.react";

AnalysisSection.propTypes = {
  //=======================================
  // Quommon props
  //=======================================
  /**
  Use to float the component in parent container
  */
  asFloated: PropTypes.oneOf(["left", "right", "inline", "none"]),
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
  AnalysisSection component must have the onClick function passed as props
  */
  onClick: PropTypes.func,
};

export default function AnalysisSection(props) {
  //-------------------------------------------------------------------
  // 1. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "ribbon-tools-menu-analysis-parent");

  let analysis = "Analysis";
  //-------------------------------------------------------------------
  // 5. Get translation of the component
  //-------------------------------------------------------------------
  let tObj = null;
  if (
    props.withTranslation?.lang &&
    props.withTranslation.lang !== "" &&
    props.withTranslation.lang !== "en"
  ) {
    tObj = getTranslation(props.withTranslation);
    analysis = tObj?.analysis || "Analysis";
  }
  //-------------------------------------------------------------------
  // 2. Handle Open Modal
  //-------------------------------------------------------------------
  const handleModalOpen = () => {
    // Logic here
  };

  // ========================= Render Function =================================
  return (
    <div className={`qui ${quommonClasses.parentClasses}`}>
      <div className={`${quommonClasses.childClasses}`}>
        <div className="qui-ribbon-menu-analytics-section">
          <IconLink
            onClick={handleModalOpen}
            asSize="small"
            asPadded="fitted"
            withColor={{
              backgroundColor: "#666666",
              hoverTextColor: "#666666",
            }}
            withIcon={{ icon: "fas fa-chart-area" }}
          />
          <div className="qui-ribbon-menu-label" onClick={handleModalOpen}>
            {analysis}
          </div>
        </div>
      </div>
    </div>
  );
}
