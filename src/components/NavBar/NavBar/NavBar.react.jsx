// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
  getQuommons,
  getTranslation,
  getAnimation,
} from "../../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./NavBar.scss";
import "../../../common/stylesheets/overrule.scss";
import IconLink from "../../Buttons/IconLink/IconLink.react";
import AppMenu from "../../AppMenu/AppMenu/AppMenu.react";

NavBar.propTypes = {
  //=======================================
  // Component specific props
  //=======================================
  /**
  NavBar Title has to be in title props.
  */
  title: PropTypes.string,
  /**
  NavBar small logo has to be in shortLogo props.
  */
  shortLogo: PropTypes.string,
  /**
  NavBar full lenght Logo has to be in fullLogo props.
  */
  fullLogo: PropTypes.string,
  /**
  NavBar back icon and its link has to be in iconLink props.
  */
  iconLink: PropTypes.object,
  /**
  Use to show search icon in NavBar component.
  */
  isSearch: PropTypes.bool,
  /**
  Use to show AppMenu Component if user is logged in.
  */
  isMenuBar: PropTypes.bool,
  /**
  Use to set header type for different locations.
  */
  isBackButton: PropTypes.bool,
  /**
  Use for rounded corners or circular icon button 
  */
  isCircular: PropTypes.bool,
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
  Use to add an icon to the component
  */
  withIcon: PropTypes.shape({
    icon: PropTypes.string,
  }),
  /**
  Use to override component colors and behavior
  */
  withColor: PropTypes.shape({
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    accentColor: PropTypes.string,
    hoverTextColor: PropTypes.string,
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
  /**
  NavBar component must have the onSearch function passed as props
  */
  onSearch: PropTypes.func.isRequired,
  /**
  NavBar component must have the onMenuClick function passed as props
  */
  onMenuClick: PropTypes.func.isRequired,
  /**
  NavBar component must have the onAppMenuClick function passed as props
  */
  onAppMenuClick: PropTypes.func.isRequired,
};

NavBar.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  title: "",
  shortLogo: "",
  fullLogo: "",
  iconLink: "",
  isSearch: true,
  isMenuBar: true,
  isBackButton: true,
  isCircular: true,
  //=======================================
  // Quommon props
  //=======================================
  asVariant: "primary",
  isHidden: false,
  isDisabled: false,
  withColor: null,
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
  let {
    title,
    shortLogo,
    fullLogo,
    iconLink,
    isBackButton,
    isSearch,
    isMenuBar,
    withIcon,
    withColor,
  } = props;
  //-------------------------------------------------------------------
  // 2. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "navbar");
  quommonClasses.childClasses += ` variant-${props.asVariant}-text`;
  //-------------------------------------------------------------------
  // 3. Translate the text objects in case their is a dictionary provided
  //-------------------------------------------------------------------
  let labelContent = title;
  let tObj = null;
  if (
    props.withTranslation?.lang &&
    props.withTranslation.lang !== "" &&
    props.withTranslation.lang !== "en"
  ) {
    tObj = getTranslation(props.withTranslation);
    if (labelContent && tObj) {
      labelContent = tObj.title;
    }
  }
  //-------------------------------------------------------------------
  // 4. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props);
  //-------------------------------------------------------------------
  // 5. Function to return menu icon
  //-------------------------------------------------------------------
  const getMenu = () => {
    return (
      <div
        className="qui-nav-bar-menu-icon-container"
        onClick={props.onMenuClick}
      >
        <i
          className="fas fa-bars qui-nav-bar-icon"
          style={{ color: props.withColor?.backgroundColor }}
        ></i>
      </div>
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
        <div className="qui-navbar-left">
          {isBackButton && (
            <IconLink
              {...props}
              asPadded="fitted"
              isCircular={false}
              link={iconLink?.link}
              withIcon={{ icon: iconLink?.icon }}
              withColor={{ textColor: withColor?.accentColor }}
              onClick={props.onClick}
            />
          )}
          {shortLogo && (
            <img src={shortLogo} className="qui-navbar-logo-img" alt="Logo" />
          )}
          {!labelContent && (
            <img
              src={fullLogo}
              className="qui-avatar-full-logo-img"
              alt="Logo"
            />
          )}
          <div className="qui-navbar-content">
            {isSearch ? (
              <h4
                className="qui-nav-bar-title"
                style={{ color: withColor?.textColor }}
              >
                {labelContent}
              </h4>
            ) : (
              <h3
                className="qui-nav-bar-title"
                style={{ color: withColor?.textColor }}
              >
                {labelContent}
              </h3>
            )}
          </div>
        </div>
        <div className="qui-right-navbar">
          {isSearch && (
            <div
              className="qui-navbar-searching-icon-container"
              style={{ color: withColor?.accentColor }}
              onClick={props.onSearch}
            >
              <i className="fas fa-search qui-navbar-search-icon"></i>
            </div>
          )}
          {isMenuBar ? (
            <AppMenu
              {...props}
              withIcon={withIcon}
              withColor={{
                backgroundColor: withColor?.backgroundColor,
                textColor: withColor?.hoverTextColor,
              }}
              withTranslation={null}
              onClick={props.onAppMenuClick}
            />
          ) : (
            getMenu()
          )}
        </div>
      </div>
    </motion.div>
  );
}
