import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  getQuommons,
  getTranslation,
} from "../../../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../../common/stylesheets/common.css";
import "../../RibbonMenu.scss";
import "../RibbonHomeMenu.scss";
import "../../../../common/stylesheets/overrule.scss";
import IconLink from "../../../Buttons/IconLink/IconLink.react";

SlideSettings.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /** 
  The Actions object is received from DeckEditorContainer for use.
  */
  actions: PropTypes.shape({
    changeSlideNav: PropTypes.func,
  }),
  /** 
  The Deck state is handed down from DeckEditorContainer for use.
  */
  deck: PropTypes.shape({
    currentSlide: PropTypes.number,
    content: PropTypes.array,
  }),

  //=======================================
  // Quommon props
  //=======================================
  /**
  Use to float the component in parent container
  */
  asFloated: PropTypes.oneOf(["left", "right", "none", "inline"]),
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
  SlideSettings component must have the onClick function passed as props
  */
  onClick: PropTypes.func,
};

export default function SlideSettings(props) {
  //-------------------------------------------------------------------
  // 1. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(
    props,
    "ribbon-home-menu-slide-setting-section-parent"
  );

  let slideSettings = {
    settings: "Settings",
    enableBackArrow: "Enable Back Arrow",
    enableNextArrow: "Enable Next Arrow",
  };

  //-------------------------------------------------------------------
  // 2. Get translation of the component
  //-------------------------------------------------------------------
  let tObj = null;
  if (
    props.withTranslation?.lang &&
    props.withTranslation.lang !== "" &&
    props.withTranslation.lang !== "en"
  ) {
    tObj = getTranslation(props.withTranslation);
    slideSettings = tObj;
  }

  //-------------------------------------------------------------------
  // 3. Toggle the state of Back and Next checkboxes
  //-------------------------------------------------------------------
  const [isBackChecked, setBakChecked] = useState(false);
  const [isNextChecked, setNextChecked] = useState(false);

  function handleChangeSlideNav(navObj) {
    props.actions.changeSlideNav(navObj);
  }

  function toggleBackState() {
    setBakChecked((prevState) => !prevState);
  }

  function toggleNextState() {
    setNextChecked((prevState) => !prevState);
  }

  // ========================= Render Function =================================
  return (
    <div className={`qui ${quommonClasses.parentClasses}`}>
      <div className={`${quommonClasses.childClasses}`}>
        <div className="qui-ribbon-menu-settings-section">
          <div className="qui-ribbon-home-menu-settings-section-child-container">
            <div className="qui-ribbon-home-menu-settings-section-child">
              <div
                className="qui-ribbon-menu-settings-section-right-content"
                style={
                  props.deck?.currentSlide === 0
                    ? { pointerEvents: "none", opacity: "0.6" }
                    : { pointerEvents: "auto" }
                }
              >
                <IconLink
                  isDisabled={props.deck?.currentSlide === 0 ? true : false}
                  asSize="tiny"
                  asPadded="fitted"
                  withColor={{
                    backgroundColor: "#666666",
                    hoverTextColor: "#666666",
                  }}
                  withIcon={{
                    icon: `qui-ribbon-file-right-icons ${
                      isBackChecked ? "far fa-check-square" : "far fa-square"
                    }`,
                  }}
                  onClick={() => {
                    toggleBackState();
                    handleChangeSlideNav({
                      previous: !isBackChecked,
                      next: isNextChecked,
                    });
                  }}
                />
                <div
                  className="qui-ribbon-menu-label"
                  onClick={() => {
                    toggleBackState();
                    handleChangeSlideNav({
                      previous: !isBackChecked,
                      next: isNextChecked,
                    });
                  }}
                >
                  {slideSettings?.enableBackArrow || "Enable Back Arrow"}
                </div>
              </div>
              <div
                className="qui-ribbon-menu-settings-section-right-content"
                style={
                  props.deck?.currentSlide === props.deck?.content?.length - 1
                    ? { pointerEvents: "none", opacity: "0.6" }
                    : { pointerEvents: "auto" }
                }
              >
                <IconLink
                  isDisabled={
                    props.deck?.currentSlide === props.deck?.content?.length - 1
                      ? true
                      : false
                  }
                  asSize="tiny"
                  asPadded="fitted"
                  withColor={{
                    backgroundColor: "#666666",
                    hoverTextColor: "#666666",
                  }}
                  withIcon={{
                    icon: `qui-ribbon-file-right-icons ${
                      isNextChecked ? "far fa-check-square" : "far fa-square"
                    }`,
                  }}
                  onClick={() => {
                    toggleNextState();
                    handleChangeSlideNav({
                      previous: !isBackChecked,
                      next: isNextChecked,
                    });
                  }}
                />
                <div
                  className="qui-ribbon-menu-label"
                  onClick={() => {
                    toggleNextState();
                    handleChangeSlideNav({
                      previous: !isBackChecked,
                      next: isNextChecked,
                    });
                  }}
                >
                  {slideSettings?.enableNextArrow || "Enable Next Arrow"}
                </div>
              </div>
            </div>
          </div>
          <div className="qui-ribbon-menu-label-file">
            {slideSettings?.settings || "Settings"}
          </div>
        </div>
      </div>
    </div>
  );
}
