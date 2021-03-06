// Import npm packages
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { motion } from "framer-motion";
import { getQuommons, getAnimation, getTranslation } from "../../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./OrderingList.scss";
import "../../../common/stylesheets/overrule.scss";
import Button from "../../Buttons/Button/Button.react";

OrderingList.propTypes = {
  /**
  OrderingList title data should be passed in content field and it is required field  
  */
  content: PropTypes.arrayOf(PropTypes.string),
  /**
  Purpose defines the text which is to be displayed in the submit button, if you pass quiz then it will show check anwer otherwise submit answer.
  */
  purpose: PropTypes.string,
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
  Use to override component colors and behavior
  */
  withColor: PropTypes.shape({
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    hoverBackgroundColor: PropTypes.string,
    hoverTextColor: PropTypes.string
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
  OrderingList component must have the onClick function passed as props
  */
  onClick: PropTypes.func.isRequired,
};

OrderingList.defaultProps = {
  // Component Specific props
  //=======================================
  content: [],
  purpose: "",
  //=======================================
  // Quommon props
  //=======================================
  asVariant: "primary",
  asSize: "normal",
  asFloated: "none",
  withTranslation: null,
  isHidden: false,
  isDisabled: false,
};

/**
## Notes
- The design system used for this component is fontawesome Icons
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- Component is used to rank/ arrange the options using up and down buttons and submit the arranged response.
**/
export default function OrderingList(props) {
  const [shuffle, setShuffle] = useState(_.shuffle(props.content));

  useEffect(() => {
    setShuffle(_.shuffle(props.content))
  }, [props.content]);
  //swap the item
  let swap = (to, from, shuffle) => {
    let swapArray = shuffle;
    let b = swapArray[to];
    swapArray[to] = swapArray[from];
    swapArray[from] = b;
    setShuffle([...swapArray]);
  };

  let upClick = (index, shuffle) => {
    if (index > 0 && index <= shuffle.length - 1) {
      swap(index, index - 1, shuffle);
    }
  };

  let downClick = (index, shuffle) => {
    if (index >= 0 && index < shuffle.length - 1) {
      swap(index, index + 1, shuffle);
    }
  };

  function handleSubmit() {
    props.onClick(shuffle)
  }
  // 1. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "ordering-list");
  quommonClasses.childClasses += ` variant-${props.asVariant}-text`;
  // 2. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props);

  //-------------------------------------------------------------------
  // 3. Setting the colors of the imported components
  //-------------------------------------------------------------------
  let orderingListstyle = {
    color: props.withColor?.textColor,
    backgroundColor: props.withColor?.backgroundColor
  }

  //-------------------------------------------------------------------
  // 4. Get translation of the component
  //-------------------------------------------------------------------
  let tObj = null;
  let submitButtonText = props.purpose === "quiz" ? "Check Answer" : "Submit Answer";
  if (
    props.withTranslation?.lang &&
    props.withTranslation.lang !== "" &&
    props.withTranslation.lang !== "en"
  ) {
    tObj = getTranslation(props.withTranslation);    submitButtonText = props.purpose === "quiz" ? tObj?.checkAnswer : tObj?.submitAnswer;

  }
  // ========================= Render Function =================================
  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className={`qui ${quommonClasses.parentClasses} `}
    >
      <div className="qui-ordering-list-parent-container">
        {_.map(shuffle, ((item, index) => (
          <div key={index}>
            <div className={`qui-ordering-list ${quommonClasses.childClasses}`}>
              <div
                className="qui-ordering-btn"
                onClick={() => upClick(index, shuffle)}
              >
                <div className="qui-ordering-border-up">
                  <div className="qui-ordering-dotted-up">
                    <button className={`qui-ordering-btn-icon fa fa-arrow-up `}></button>
                  </div>
                </div>
              </div>
              <div
                className={`qui-btn qui-ordering-title-bttn ${quommonClasses.childClasses}`}
                style={orderingListstyle} >
                <div className={`qui-ordering-title-content`} >{item}</div>
              </div>
              <div
                className={`qui-ordering-btn`}
                onClick={() => downClick(index, shuffle)}
              >
                <div className="qui-ordering-border-down">
                  <div className="qui-ordering-dotted-down">
                    <button
                      className={`qui-ordering-btn-icon fa fa-arrow-down`}
                    ></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )))}
        <div className="qui-submit">
          {<Button
            {...props}
            withTranslation={null}
            asFloated="none"
            onClick={() => handleSubmit()}
            content={submitButtonText}
          />}
        </div>
      </div>
    </motion.div>
  );
}
