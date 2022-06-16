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
  // Component specific prop
  //=======================================
  /**
  NavBar Text has to be in content or passed as children to the component.
  */
  content: PropTypes.object,
  /**
  Use to show search icon in NavBar component.
  */
  isSearch: PropTypes.bool,
  /**
  Use to show AppMenu Component if user is logged in.
  */
  isLoggedIn: PropTypes.bool,
  /**
  Use to set header type for different locations.
  */
  headerPath: PropTypes.string,
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
    menuBackgroundColor: PropTypes.string,
    menuAccentColor: PropTypes.string,
    backIconColor: PropTypes.string,
    searchIconColor: PropTypes.string,
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
  content: {},
  isSearch: true,
  isLoggedIn: true,
  headerPath: "",
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
    content,
    headerPath,
    isSearch,
    isLoggedIn,
    withIcon,
    withColor,
  } = props;
  //-------------------------------------------------------------------
  // 2. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "NavBar");
  quommonClasses.childClasses += ` variant-${props.asVariant}-text`;
  //-------------------------------------------------------------------
  // 3. Translate the text objects in case their is a dictionary provided
  //-------------------------------------------------------------------
  let labelContent = {
    title: content?.title,
    menuTitle : content?.menuTitle
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
      labelContent.menuTitle = tObj.menuTitle;
    }
  }
  //-------------------------------------------------------------------
  // 4. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props.withAnimation);
  //--------------------------------------------------------------------
  // 5. Function to return back button
  //-------------------------------------------------------------------
  const getBackButton = () => {
    if (!content?.title && !isLoggedIn) {
      if (headerPath !== "back-menu-button") return;
    }
    return (
      <IconLink
        {...props}
        asPadded="fitted"
        content={{ link: content?.iconLink?.link }}
        withIcon={{ icon: content?.iconLink?.icon }}
        withColor={{ backgroundColor: withColor?.backIconColor }}
        onClick={props.onClick}
      />
    );
  };
  //-------------------------------------------------------------------
  // 6. Function to return menu icon
  //-------------------------------------------------------------------
  const getMenu = () => {
    if (!content?.title && !isLoggedIn) {
      if (headerPath === "none") return;
    }
    return (
      <div className="qui-nav-bar-menu-icon" onClick={props.onMenuClick}>
        <div
          className="qui-nav-bar-menu-icon-element qui-nav-bar-menu-element-top"
          style={{ backgroundColor: withColor?.menuBackgroundColor }}
        ></div>
        <div
          className="qui-nav-bar-menu-icon-element qui-nav-bar-menu-element-middle"
          style={{ backgroundColor: withColor?.menuAccentColor }}
        ></div>
        <div
          className="qui-nav-bar-menu-icon-element qui-nav-bar-menu-element-bottom"
          style={{ backgroundColor: withColor?.menuBackgroundColor }}
        ></div>
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
        <div className="qui-left-navbar">
          {getBackButton()}
          {content?.shortLogo && (
            <img src={content?.shortLogo} className="qui-logo-img" alt="Logo" />
          )}
          {!labelContent?.title && (
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
          {isSearch && (
            <div
              className="qui-searching"
              style={{ color: withColor?.searchIconColor }}
              onClick={props.onSearch}
            >
              <i className="fas fa-search"></i>
            </div>
          )}
          {isLoggedIn ? (
            <AppMenu
              {...props}
              withLabel={{
                content: labelContent?.menuTitle,
              }}
              withIcon={withIcon}
              withColor={{
                backgroundColor: withColor?.menuBackgroundColor,
                textColor: withColor?.textColor,
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
