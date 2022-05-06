// Import npm packages
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { motion } from "framer-motion";
import { getQuommons, getAnimation } from "../../../common/javascripts/helpers";
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
  OrderingList component must have the onClick function passed as props
  */
  onClick: PropTypes.func.isRequired,
};

OrderingList.defaultProps = {
  // Component Specific props
  //=======================================
  content: [],
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
- props are not being passed to the NavBar. Please speak to the admin to handle any new prop.
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
  const animate = getAnimation(props.withAnimation);
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
            >
              <div className={`qui-ordering-title-content`}>{item}</div>
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
          asFloated="none"
          onClick={() => handleSubmit()}
          content={"Submit Answer"}
        />}
      </div>
    </div>
    </motion.div>
  );
}
