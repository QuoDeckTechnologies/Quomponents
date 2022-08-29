import React from "react";
import PropTypes from "prop-types";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";
import { motion } from "framer-motion";
import {
  getAnimation,
  getQuommons,
  getTranslation,
} from "../../common/javascripts/helpers";
import "../../common/stylesheets/common.css";
import "./ShareWidget.scss";
import "../../common/stylesheets/overrule.scss";

ShareWidget.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
    Use to define label & url's value in side the ShareWidget
  */
  label: PropTypes.string,
  url: PropTypes.string,
  //=======================================
  // Quommon props
  //=======================================
  /**
    Use to define component size in increasing order
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
    Use to float the component in parent container
  */
  asFloated: PropTypes.oneOf(["left", "right", "none", "inline"]),
  /**
    Use to set text Color in ShareWidget
  */
  withColor: PropTypes.shape({
    textColor: PropTypes.string,
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
    Use to show a translated version of the ShareWidget label. Dictionary must be valid JSON. 
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
};

ShareWidget.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  label: "",
  url: "",
  //=======================================
  // Quommon props
  //=======================================
  asSize: "normal",
  asFloated: "none",

  withColor: null,
  withAnimation: null,
  withTranslation: null,

  isHidden: false,
  isDisabled: false,
};
/**
## Notes
- The design system used for this component is HTML and CSS
- The Share icons system used for this component is React Share (react-share)
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function ShareWidget(props) {
  //-------------------------------------------------------------------
  // 1. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "share-widget");
  //-------------------------------------------------------------------
  // 2. Get translation of the ShareWidget component
  //-------------------------------------------------------------------
  let shareLabel = props.label;

  if (
    props.withTranslation?.lang &&
    props.withTranslation.lang !== "" &&
    props.withTranslation.lang !== "en"
  ) {
    let tObj = getTranslation(props.withTranslation);
    shareLabel = tObj?.label || "";
  }
  //-------------------------------------------------------------------
  // 3. Use to set label Color in ShareWidget
  //-------------------------------------------------------------------
  let Color = {
    color: props.withColor?.textColor,
  };
  //-------------------------------------------------------------------
  // 3. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props);
  // ========================= Render Function =================================
  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className={`qui ${quommonClasses.parentClasses}`}
    >
      <div
        className={`qui-sharewidget-container ${quommonClasses.childClasses}`}
      >
        <div className="qui-share-label qt-mn" style={Color}>
          {shareLabel ? shareLabel : "Share"} :
        </div>
        <div className="qui-shareicon-container">
          <FacebookShareButton
            className={`qui-share-icon  ${
              props.url ? "" : "qui-share-icon-disabled"
            }`}
            url={props.url}
          >
            <FacebookIcon round={true} />
          </FacebookShareButton>

          <TwitterShareButton
            className={`qui-share-icon ${
              props.url ? "" : "qui-share-icon-disabled"
            }`}
            url={props.url}
          >
            <TwitterIcon round={true} />
          </TwitterShareButton>

          <LinkedinShareButton
            className={`qui-share-icon ${
              props.url ? "" : "qui-share-icon-disabled"
            }`}
            url={props.url}
          >
            <LinkedinIcon round={true} />
          </LinkedinShareButton>

          <WhatsappShareButton
            className={`qui-share-icon ${
              props.url ? "" : "qui-share-icon-disabled"
            }`}
            url={props.url}
          >
            <WhatsappIcon round={true} />
          </WhatsappShareButton>

          <EmailShareButton
            className={`qui-share-icon ${
              props.url ? "" : "qui-share-icon-disabled"
            }`}
            url={props.url}
          >
            <EmailIcon round={true} />
          </EmailShareButton>
        </div>
      </div>
    </motion.div>
  );
}
