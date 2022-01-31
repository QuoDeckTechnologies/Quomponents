import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import _ from "lodash";
import {
  getAnimation,
  getQuommons,
  getTranslation,
} from "../../common/javascripts/helpers";
import Ribbon from "../Ribbons/Ribbon/Ribbon.react";
import "../../common/stylesheets/common.css";
import "./LearnCard.scss";
import "../../common/stylesheets/overrule.scss";

LearnCard.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
  All the text and icons has to be in content prop or passed as children to the component.
  */
  content: PropTypes.shape({
    heading: PropTypes.string,
    points: PropTypes.string,
    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    icon: PropTypes.string,
  }),
  /**
  Ribbon Text is taken from Emphasis prop or passed as children to the component.
  */
  asEmphasis: PropTypes.oneOf(["new", "premium", "restricted", "free"]),
  /**
  Use to show/hide the Ribbon component
  */
  isHiddenRibbon: PropTypes.bool,
  //=======================================
  // Quommon props
  //=======================================
  /**
  Use to define tag colors and points colors
  */
  asVariant: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "warning",
    "error",
  ]),
  /**
  Use to define component text and icon size in increasing order
  */
  asSize: PropTypes.oneOf([
    "tiny",
    "small",
    "normal",
    "big",
    "huge",
    "massive",
  ]),
  /**
  Use background color and text color to set ribbon colors and accent color for header and banner colors 
  */
  withColor: PropTypes.shape({
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    accentColor: PropTypes.string,
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
  Button component must have the onClick function passed as props
  */
  onClick: PropTypes.func.isRequired,
};

LearnCard.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  asEmphasis: "new",
  isHiddenRibbon: false,
  //=======================================
  // Quommon props
  //=======================================
  asVariant: "primary",
  withColor: null,
  withIcon: null,
  withLabel: null,
  withAnimation: null,
  withTranslation: null,
  isHidden: false,
};
/**
## Notes
- The design system used for this component is HTML and CSS
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/

export default function LearnCard(props) {
  //-------------------------------------------------------------------
  // 1. Destructure content,isHiddenRibbon,isHidden from props
  //-------------------------------------------------------------------
  let { content, isHiddenRibbon, isHidden } = props;
  //-------------------------------------------------------------------
  // 2. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "learn-card");
  //-------------------------------------------------------------------
  // 3. Get translation of the component
  //-------------------------------------------------------------------
  let labelContent = Object.assign({}, props.content);
  if (
    props.withTranslation?.lang &&
    props.withTranslation.lang !== "" &&
    props.withTranslation.lang !== "en"
  ) {
    let tObj = getTranslation(props.withTranslation);
    if (labelContent && tObj?.heading) {
      labelContent.heading = tObj.heading;
      labelContent.description = tObj.description;
      labelContent.tags = tObj.tags;
    }
  }
  //-------------------------------------------------------------------
  // 4. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props.withAnimation);

  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className="qui-learn-card"
      onClick={props.onClick}
    >
      <Ribbon
        {...props}
        asFloated="left"
        isHidden={isHiddenRibbon ? isHiddenRibbon : isHidden}
        asVariant=""
      />
      <div className={`qui ${quommonClasses.parentClasses}`}>
        <div className={quommonClasses.childClasses}>
          <img
            className="qui-game-thumbnail"
            src={content?.image}
            alt="game thumbnail"
          />
        </div>
        <div className={`qui-content ${quommonClasses.childClasses}`}>
          <div className={`qui-learn-card-header `}>
            <h1 style={{ color: props.withColor?.accentColor }}>
              {labelContent.heading}
            </h1>
            <div className="qui-points">
              <h1 className={`qui-btn variant-${props.asVariant}-text`}>
                {content?.points}
              </h1>
              <img
                className="qui-coin-image"
                src="https://lh3.googleusercontent.com/kG6f_MoL-4JkAaqeCMRbbAwTXByEoDZ59wJFM5WVWpn2z_r-UiNCJPpNp5LWTLMtaBrxn7c=s55"
                alt="coin"
              />
            </div>
          </div>
          <div className="qui-description">
            <h2>{labelContent.description}</h2>
          </div>
          <div className="qui-lower-container">
            <div className="qui-info">
              <i className={content?.icon}></i>
              <div className="qui-tags">
                {_.map(labelContent?.tags, (tag, i) => {
                  return (
                    <div className="qui-tag-container" key={i}>
                      <p
                        className={`qui-single-tag qui-btn variant-${props.asVariant}`}
                      >
                        {tag}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div
              className="qui-banner"
              style={{ backgroundColor: props.withColor?.accentColor }}
            ></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
