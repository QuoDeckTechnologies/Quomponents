// Import npm packages
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { getQuommons } from "../../../common/javascripts/helpers";
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
  Use to define component padding in increasing order
  */
  asPadded: PropTypes.oneOf(["fitted", "compact", "normal", "relaxed"]),
  /**
  Use to align content within the component container
  */
  asAligned: PropTypes.oneOf(["left", "right", "center"]),
  /**
  Use to float the component in parent container
  */
  asFloated: PropTypes.oneOf(["left", "right", "none", "inline"]),
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
  asPadded: "fitted",
  asVariant: "primary",
  asAligned: "center",
  asSize: "normal",
  asFloated: "none",
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
  //-------------------------------------------------------------------
  // 2. Setting the colors of the imported components
  //-------------------------------------------------------------------
  let orderingListstyle = {
    color: props.withColor?.textColor,
    backgroundColor: props.withColor?.backgroundColor
  }
  let submitButtonText = props.purpose === "quiz" ? "Check Answer" : "Submit Answer";
  // ========================= Render Function =================================
  return (
    <div
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
            asAligned={props.asAligned}
            onClick={() => handleSubmit()}
            content={submitButtonText}
          />}
        </div>
      </div>
    </div>
  );
}
