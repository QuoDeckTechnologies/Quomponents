// Import npm packages
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./MultiSelect.scss";
import "../../common/stylesheets/overrule.scss";
import Button from "../Buttons/Button/Button.react";
import _ from "lodash";
import { getQuommons, getTranslation } from "../../common/javascripts/helpers";

MultiSelect.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
  Each button Text has to be in content object.
  */
  content: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      isSelected: PropTypes.bool,
    })
  ).isRequired,
  /**
  Purpose defines the text which is to be displayed in the submit button, if you pass quiz then it will show check anwer otherwise submit answer.
  */
  purpose: PropTypes.string,
  /**
  Set action emphasis in increasing order 
  */
  asEmphasis: PropTypes.oneOf(["text", "outlined", "contained"]),
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
    hoverTextColor: PropTypes.string,
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
  /**
  Use to enable/disable the component
  */
  isDisabled: PropTypes.bool,
  /**
  Component must have the onClick function passed as props
  */
  onClick: PropTypes.func.isRequired,
};

MultiSelect.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  content: [],
  //=======================================
  // Quommon props
  //=======================================
  asEmphasis: "contained",
  asVariant: "primary",
  asFloated: "none",
  asPadded: "normal",
  withColor: null,
  withTranslation: null,
  withLabel: null,
  withAnimation: null,
  isHidden: false,
  isDisabled: false,
};

/**
## Notes
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- Check and uncheck your selection by clicking on it
**/
export default function MultiSelect(props) {
  let [data, setData] = useState([...props.content]);

  useEffect(() => {
    setData([...props.content]);
  }, [props.content]);

  function handleSubmit() {
    let selectedIndexes = [];
    for (let i = 0; i <= data.length; i++) {
      if (data[i]?.isSelected) {
        selectedIndexes.push(i);
      }
    }
    props.onClick(selectedIndexes);
  }

  function toggleChecked(index) {
    let tempArr = [...data];
    tempArr[index] = {
      ...tempArr[index],
      isSelected: !tempArr[index].isSelected,
    };
    setData(tempArr);
  }

  //-------------------------------------------------------------------
  // 1. Get translation of the component
  //-------------------------------------------------------------------
  let tObj = null;
  let submitButtonText =
    props.purpose === "quiz" ? "Check Answer" : "Submit Answer";
  if (
    props.withTranslation?.lang &&
    props.withTranslation.lang !== "" &&
    props.withTranslation.lang !== "en"
  ) {
    tObj = getTranslation(props.withTranslation);
    submitButtonText =
      props.purpose === "quiz" ? tObj?.checkAnswer : tObj?.submitAnswer;
  }
  //-------------------------------------------------------------------
  // 2. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "multi-select");

  return (
    <div
      className={`qui qui-multi-select-container ${quommonClasses.parentClasses}`}
    >
      {_.map(data, (text, index) => {
        return (
          <div
            key={index}
            className={`qui-multi-select-button-container ${quommonClasses.childClasses}`}
          >
            <div className="qui-multi-select-button">
              <div className={`qui-square-background`}>
                <i
                  className={`qui-multi-select-checkbox  ${
                    text.isSelected ? "fas fa-check-square" : "fa fa-square"
                  }`}
                  onClick={() => toggleChecked(index)}
                ></i>
              </div>
              {
                <Button
                  {...props}
                  withTranslation={null}
                  content={text.name}
                  onClick={() => toggleChecked(index)}
                />
              }
            </div>
          </div>
        );
      })}
      {
        <Button
          {...props}
          withTranslation={null}
          content={submitButtonText}
          onClick={() => handleSubmit()}
        />
      }
    </div>
  );
}
