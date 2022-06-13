// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
  getQuommons,
  getTranslation,
  getAnimation,
} from "../../../common/javascripts/helpers";
import _ from "lodash";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./NavBar.scss";
import "../../../common/stylesheets/overrule.scss";
import IconLink from "../../Buttons/IconLink/IconLink.react";
import AppMenu from "../../AppMenu/AppMenu/AppMenu.react";

NavBar.propTypes = {
  //=======================================
  // Component specific prop
  //=======================================
  /**
  NavBar Text has to be in content or passed as children to the component.
  */
  content: PropTypes.object,
  /**
  Use to show search icon in NavBar component.
  */
  isSearchLogo: PropTypes.bool,
  /**
  Use to show AppMenu Component if user is logged in.
  */
  isLoggedIn: PropTypes.bool,
  /**
  Use to define component user image
  */
  withUser: PropTypes.string,
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
  Use to add a heading label, a footer caption or a title popover to the component
  */
  withLabel: PropTypes.shape({
    content: PropTypes.string,
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
  NavBar component must have the onClick function passed as props
  */
  onClick: PropTypes.func.isRequired,
};

NavBar.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  content: {},
  //=======================================
  // Quommon props
  //=======================================
  asVariant: "primary",
  isHidden: false,
  isDisabled: false,
  withTranslation: null,
};
/**
## Notes
- The design system used for this component is fontawesome Icons
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function NavBar(props) {
  //-------------------------------------------------------------------
  // 1. Destructuring content from props
  //-------------------------------------------------------------------
  let { content, isSearchLogo, isLoggedIn } = props;
  // 2. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "NavBar");
  quommonClasses.childClasses += ` variant-${props.asVariant}-text`;
  //-------------------------------------------------------------------
  // 3. Translate the text objects in case their is a dictionary provided
  //-------------------------------------------------------------------
  let labelContent = {
    title: content?.title,
  };
  let tObj = null;
  if (
    props.withTranslation?.lang &&
    props.withTranslation.lang !== "" &&
    props.withTranslation.lang !== "en"
  ) {
    tObj = getTranslation(props.withTranslation);
    if (labelContent && tObj) {
      labelContent.title = tObj.title;
    }
  }
  //-------------------------------------------------------------------
  // 4. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props.withAnimation);

  const getLogoImage = (title) => {
    let image;
    if (title) {
      image = content?.shortLogo;
    } else {
      image = content?.fullLogo;
    }
    return (
      <img
        src={image}
        className={`qui-logo-img ${
          title ? "qui-short-logo-img" : "qui-full-logo-img"
        }`}
        alt="Logo"
      />
    );
  };

  // ========================= Render Function =================================
  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className={`qui ${quommonClasses.parentClasses}`}
    >
      <div className={`qui-navbar-container ${quommonClasses.childClasses}`}>
        <div className="qui-left-navbar">
          {_.map(content?.iconlink, (icon, index) => {
            return (
              <IconLink
                {...props}
                key={index}
                content={{ link: icon.link }}
                withIcon={{ icon: icon.icon }}
                asPadded="fitted"
              />
            );
          })}
          {/* {getLogoImage(content?.title)} */}
          <img src={content?.shortLogo} className="qui-logo-img" alt="Logo" />
          {!content?.title && (
            <img
              src={content?.fullLogo}
              className="qui-full-logo-img"
              alt="Logo"
            />
          )}
          <div className="qui-content">
            <h4 className="qui-nav-bar-title">{labelContent?.title}</h4>
          </div>
        </div>
        <div className="qui-right-navbar">
          {isSearchLogo && (
            <div className="qui-searching" onClick={props.onClick}>
              <i className="fas fa-search"></i>
            </div>
          )}
          {isLoggedIn ? (
            <AppMenu {...props} withIcon={{ icon: "fas fa-ellipsis-v" }} />
          ) : (
            <div className="qui-nav-bar-menu-icon">
              <div className="qui-nav-bar-menu-icon-element qui-nav-bar-menu-element-top"></div>
              <div className="qui-nav-bar-menu-icon-element qui-nav-bar-menu-element-middle"></div>
              <div className="qui-nav-bar-menu-icon-element qui-nav-bar-menu-element-bottom"></div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
