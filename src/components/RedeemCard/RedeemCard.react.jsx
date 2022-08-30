// Import npm packages
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
  getAnimation,
  getQuommons,
  getTranslation,
} from "../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./RedeemCard.scss";
import "../../common/stylesheets/overrule.scss";
import Reward from "../Reward/Reward.react";
import defaultImage from "../../assets/default.jpeg";
import AccentLine from "../AccentLine/AccentLine.react";
import Button from "../Buttons/Button/Button.react";

RedeemCard.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
  Below props consist of all the data which are required for RedeemCard component. status consist of 3 options to display the card accordingly.
  */
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  cost: PropTypes.number,
  stock: PropTypes.shape({
    left: PropTypes.number,
    total: PropTypes.number,
  }),
  status: PropTypes.oneOf(["Pending", "InProgress", "Completed"]),
  //=======================================
  // Quommon props
  //=======================================
  /** 
  Use to define component padding in increasing order
  */
  asPadded: PropTypes.oneOf(["fitted", "compact", "normal", "relaxed"]),
  /**
  Use to float the component in parent container
  */
  asFloated: PropTypes.oneOf(["left", "right", "none", "inline"]),
  /**
  Use to set Colors for accent line
  */
  withColor: PropTypes.shape({
    accentColor: PropTypes.string,
    textColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    hoverTextColor: PropTypes.string,
    hoverBackgroundColor: PropTypes.string,
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
  Use to show/hide the component
  */
  isHidden: PropTypes.bool,
  /**
  Use to enable/disable the component
  */
  isDisabled: PropTypes.bool,
  /**
  Component should have the onClick function passed as props
  */
  onClick: PropTypes.func,
};

RedeemCard.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  id: "",
  name: "",
  description: "",
  image: "",
  cost: 500,
  stock: {},
  status: "Pending",
  //=======================================
  // Quommon props
  //=======================================
  asPadded: "normal",
  asFloated: "inline",
  withColor: null,
  withAnimation: null,
  withTranslation: null,
  isHidden: false,
  isDisabled: false,
  onClick: null,
};
/**
## Notes
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- Pass all the required props to the component.
- status consist of 3 options('Pending', 'InProgress','Completed') to display the card accordingly.
**/
export default function RedeemCard(props) {
  //-------------------------------------------------------------------
  // 1. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "redeem-card");
  //-------------------------------------------------------------------
  // 2. State Definitions
  //-------------------------------------------------------------------
  const [expandTags, setExpandTags] = useState(false);
  const [showMoreBtn, setShowMoreBtn] = useState(true);
  const [stockStyle, setStockStyle] = useState(
    "qui-redeem-card-cost-stock-container-row"
  );
  //-------------------------------------------------------------------
  // 4. Conditional class definitions and visiblity of show more button depending on the latest length of data using useEffect
  //-------------------------------------------------------------------
  useEffect(() => {
    let cost = props.cost?.toString();
    let left = props.stock?.left?.toString();
    let total = props.stock?.total?.toString();
    props.description?.length > 113
      ? setShowMoreBtn(true)
      : setShowMoreBtn(false);
    cost?.length > 4 || left?.length > 4 || total?.length > 4
      ? setStockStyle("qui-redeem-card-cost-stock-container-column")
      : setStockStyle("qui-redeem-card-cost-stock-container-row");
  }, [
    showMoreBtn,
    props.description,
    props.cost,
    props.stock?.left,
    props.stock?.total,
  ]);
  //-------------------------------------------------------------------
  // 3. Conditional class definiction of show more button and Handle show more button action
  //-------------------------------------------------------------------
  let descriptionStyle = expandTags
    ? "qui-redeem-card-description-show-more-active"
    : "qui-redeem-card-description-show-more-non-active";

  function handleLessTags() {
    setExpandTags(false);
  }
  function handleMoreTags() {
    setExpandTags(true);
  }
  //-------------------------------------------------------------------
  // 4. Conditional handling of backgroundImage
  //-------------------------------------------------------------------
  let backgroundImage = props.image === "" ? defaultImage : props.image;
  //-------------------------------------------------------------------
  // 5. Get Button Styling
  //-------------------------------------------------------------------
  let buttonStyle = {
    textColor: props.withColor?.textColor,
    backgroundColor: props.withColor?.accentColor,
    hoverTextColor: props.withColor?.hoverTextColor,
    hoverBackgroundColor: props.withColor?.hoverBackgroundColor,
  };
  //-------------------------------------------------------------------
  // 6. Get translation of the component
  //-------------------------------------------------------------------
  let tObj = null;
  let buttonText = "Redeem";
  let inProgressText = "YOUR REDEMPTION REQUEST IS IN PROCESS";
  let completedText = "YOU HAVE REDEEMED THIS OFFER";
  let leftText = "left";
  if (
    props.withTranslation?.lang &&
    props.withTranslation.lang !== "" &&
    props.withTranslation.lang !== "en"
  ) {
    tObj = getTranslation(props.withTranslation);
    buttonText = tObj?.button || buttonText;
    inProgressText = tObj?.inprogress || inProgressText;
    completedText = tObj?.completed || completedText;
    leftText = tObj?.left || leftText;
  }
  //-------------------------------------------------------------------
  // 7. Get the RedeemCard Component
  //-------------------------------------------------------------------
  const redeemCard = () => {
    return (
      <div>
        <div
          className={`qui-redeem-card-container`}
          style={{
            color: props.withColor?.textColor,
            backgroundColor: props.withColor?.backgroundColor,
          }}
        >
          {props.name && (
            <h5 className={`qui-redeem-card-name`}>{props.name}</h5>
          )}
          {backgroundImage && (
            <div
              className={`qui-redeem-card-image`}
              style={{ backgroundImage: `url(${backgroundImage})` }}
            ></div>
          )}
          <div className={`qui-redeem-card-cost-stock-container ${stockStyle}`}>
            {props.cost && (
              <div className={`qui-redeem-card-cost`}>
                <Reward
                  content={{ point: props.cost?.toString() }}
                  withColor={{ accentColor: props.withColor?.textColor }}
                />
                <div className={`qui-redeem-card-accent-line`}>
                  <AccentLine
                    withColor={{ accentColor: props.withColor?.accentColor }}
                  />
                </div>
              </div>
            )}
            {props.stock && (
              <h5 className={`qui-redeem-card-stock`}>
                <div>
                  {props.stock?.left}/{props.stock?.total}
                </div>
                <div>{leftText}</div>
              </h5>
            )}
          </div>
          <div className={`qui-redeem-card-description-container`}>
            <div className={`${descriptionStyle}`}>{props.description}</div>
            {showMoreBtn && (
              <button
                className={`qui-redeem-card-show-more`}
                onClick={expandTags ? handleLessTags : handleMoreTags}
              >
                <i
                  className={
                    expandTags ? "fas fa-angle-up" : "fas fa-angle-down"
                  }
                />
              </button>
            )}
          </div>
          {props.status?.toLowerCase() === "pending" && (
            <div className={`qui-redeem-card-status`}>
              <Button
                isDisabled={props.isDisabled}
                withColor={buttonStyle}
                content={buttonText}
                onClick={props.onClick}
              />
            </div>
          )}
          {props.status?.toLowerCase() === "inprogress" && (
            <div
              className={`qui-redeem-card-status qui-redeem-card-redeem-inprogress`}
            >
              {inProgressText}
            </div>
          )}
          {props.status?.toLowerCase() === "completed" && (
            <div
              className={`qui-redeem-card-status qui-redeem-card-redeem-completed`}
            >
              {completedText}
            </div>
          )}
        </div>
      </div>
    );
  };
  //-------------------------------------------------------------------
  // 8. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props);
  // ========================= Render Function =================================
  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className={`qui ${quommonClasses.parentClasses}`}
    >
      <div className={`${quommonClasses.childClasses}`}>{redeemCard()}</div>
    </motion.div>
  );
}
