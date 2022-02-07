import React, { useState } from "react";
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
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    icon: PropTypes.string,
    points: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
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
  // 2. Setting each tag length, tags quantity(maxTags) and title length
  //-------------------------------------------------------------------
  let tagLength = 5;
  let maxTags = 10;
  let titleLength = 20;
  //-------------------------------------------------------------------
  // 3. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "learn-card-ribbon");
  //-------------------------------------------------------------------
  // 4. Get translation of the component
  //-------------------------------------------------------------------
  let labelContent = Object.assign({}, props.content);
  let tObj = null;
  if (
    props.withTranslation?.lang &&
    props.withTranslation.lang !== "" &&
    props.withTranslation.lang !== "en"
  ) {
    tObj = getTranslation(props.withTranslation);
    if (labelContent && tObj?.title) {
      labelContent.title = tObj.title;
      labelContent.description = tObj.description;
      labelContent.tags = tObj.tags;
    }
  }
  //-------------------------------------------------------------------
  // 5. States to hold expand tags logic
  //-------------------------------------------------------------------
  const [expandTags, setExpandTags] = useState(false);
  const [itirate, setItirate] = useState(labelContent?.tags.length);
  //-------------------------------------------------------------------
  // 6. Functions to expand and collapse tags
  //-------------------------------------------------------------------
  const handleLessTags = (e) => {
    e.preventDefault();
    setItirate(labelContent?.tags.length);
    setExpandTags(false);
  };
  const handleMoreTags = (e) => {
    e.preventDefault();
    setItirate(maxTags - 1);
    setExpandTags(true);
  };
  //-------------------------------------------------------------------
  // 7. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props.withAnimation);

  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      onClick={props.onClick}
      className={`qui ${quommonClasses.parentClasses}`}
    >
      <div className="qui-card-label">
        <Ribbon
          {...props}
          asFloated="left"
          isHidden={isHiddenRibbon ? isHiddenRibbon : isHidden}
          asVariant=""
        />
      </div>
      <div>
        <div className="qui-learn-card">
          <div className={quommonClasses.childClasses}>
            <img
              className="qui-game-thumbnail"
              src={content?.image ? content?.image : 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg'}
              alt="game thumbnail"
            />
          </div>
          <div className={`qui-content ${quommonClasses.childClasses}`}>
            <div className={`qui-learn-card-header `}>
              <h1 style={{ color: props.withColor?.accentColor }}>
                {labelContent.title.slice(0,titleLength) + (labelContent.title.length > titleLength ? '...' : '')}
              </h1>
              <div className="qui-points">
                <h1 className={`qui-btn variant-${props.asVariant}-text`}>
                  {content?.points}
                </h1>
                <img
                  className="qui-coin-image"
                  src="https://www.usmint.gov/wordpress/wp-content/uploads/2020/12/2021-general-george-washington-crossing-the-delaware-quarter-uncirculated-obverse-philadelphia.jpg"
                  alt="coin"
                />
              </div>
            </div>
            <div className="qui-description">
              {!expandTags && <h2>{labelContent?.description}</h2>}
            </div>
            <div className="qui-lower-container">
              <div className="qui-info">
                <i className={content?.icon}></i>
                <div className="qui-tags">
                  {_.map(labelContent?.tags, (tag, i) => {
                    if (i <= itirate) {
                      return (
                        <div className="qui-tag-container" key={i}>
                          <p
                            className={`qui-single-tag qui-btn variant-${props.asVariant}`}
                          >
                            {tag?.length > tagLength &&
                            !expandTags &&
                            labelContent?.tags.length > 2
                              ? tag?.slice(0, tagLength) + "..."
                              : tag}
                          </p>
                        </div>
                      );
                    }
                  })}
                  {labelContent?.tags?.length > 2 && !expandTags && (
                    <div className="qui-see-more-tags">
                      <a href="!#" onClick={(e) => handleMoreTags(e)}>
                        {tObj ? tObj?.seeMore : "See more"}
                      </a>
                    </div>
                  )}
                  {expandTags && (
                    <div className="qui-see-more-tags">
                      <a href="!#" onClick={(e) => handleLessTags(e)}>
                        {tObj ? tObj?.seeLess : "See less"}
                      </a>
                    </div>
                  )}
                </div>
              </div>
              <div
                className="qui-banner"
                style={{ backgroundColor: props.withColor?.accentColor }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
