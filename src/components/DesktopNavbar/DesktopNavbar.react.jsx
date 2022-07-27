// Import npm packages
import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { getQuommons } from "../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./DesktopNavbar.scss";
import "../../common/stylesheets/overrule.scss";
import SearchBar from "../SearchBar/SearchBar.react";
import LinkIcon from "../LinkIcon/LinkIcon.react";
import AppMenu from "../AppMenu/AppMenu/AppMenu.react";

DesktopNavbar.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
  Use to define links to LinkIcon component in DesktopNavbar
  */
  links: PropTypes.array,
  /**
  Use to define AppMenu component in DesktopNavbar
  */
  user: PropTypes.object,
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
  Use to override component colors and behavior
  */
  withColor: PropTypes.shape({
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    accentColor: PropTypes.string,
    hoverBackgroundColor: PropTypes.string,
    hoverTextColor: PropTypes.string,
  }),
  /**
  Use to add an icon to the component
  */
  withIcon: PropTypes.shape({
    icon: PropTypes.string,
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
  DesktopNavbar component must have the onClick function passed as props
  */
  onClick: PropTypes.func.isRequired,
  /**
  DesktopNavbar component must have the onSearch function passed as props
  */
  onSearch: PropTypes.func.isRequired,
};

DesktopNavbar.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  links: [],
  user: null,
  //=======================================
  // Quommon props
  //=======================================
  asVariant: "primary",
  withColor: null,
  withIcon: null,
  isDisabled: false,
  isHidden: false,
};
/**
## Notes
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- MUI props are not being passed to the DesktopNavbar. Please speak to the admin to handle any new MUI prop.
**/
export default function DesktopNavbar(props) {
  //-------------------------------------------------------------------
  // 1. Destructuring props
  //-------------------------------------------------------------------
  const { links, user, asVariant, withColor } = props;
  //-------------------------------------------------------------------
  // 2. Defining states
  //-------------------------------------------------------------------
  const [linkData, setLinkData] = useState(links);
  const [showNavigation, setShowNavigation] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [leftNavigation, setLeftNavigation] = useState(false);
  const [rightNavigation, setRightNavigation] = useState(true);
  const ref = useRef();
  //-------------------------------------------------------------------
  // 3. useEffect for component update
  //-------------------------------------------------------------------
  useEffect(() => {
    if (ref.current.clientWidth < ref.current.scrollWidth) {
      setShowNavigation(true);
    } else setShowNavigation(false);
  }, [setShowNavigation]);

  useEffect(() => {
    ref.current.scrollLeft = scroll;
    if (scroll + ref.current.clientWidth >= ref.current.scrollWidth) {
      setRightNavigation(false);
    } else {
      setRightNavigation(true);
    }
    if (scroll <= 0) {
      setLeftNavigation(false);
    } else {
      setLeftNavigation(true);
    }
  }, [scroll, setRightNavigation]);
  //-------------------------------------------------------------------
  // 4. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "desktop-navbar");
  //-------------------------------------------------------------------
  // 5. Set the user image or icon
  //-------------------------------------------------------------------
  let icon = props.withIcon?.icon;
  //-------------------------------------------------------------------
  // 6. LinkIcon click handler
  //-------------------------------------------------------------------
  const handelClick = (data) => {
    let tmp_state = linkData;
    let tmp_arr = [];
    let tmp_obj = {};

    tmp_state.forEach((dataObj) => {
      if (dataObj?.text === data.label) {
        tmp_obj = { ...dataObj };
        tmp_obj.active = true;
        tmp_arr.push(tmp_obj);
      } else {
        tmp_obj = { ...dataObj };
        tmp_obj.active = false;
        tmp_arr.push(tmp_obj);
      }
    });
    setLinkData([...tmp_arr]);
  };
  //-------------------------------------------------------------------
  // 7. Function to handle right click
  //-------------------------------------------------------------------
  const handleRight = () => {
    if (
      ref.current.scrollLeft + ref.current.clientWidth <
      ref.current.scrollWidth
    ) {
      setScroll(
        (prevState) => prevState + Math.ceil(ref.current.scrollWidth / 2)
      );
    }
  };
  //-------------------------------------------------------------------
  // 8.  Function to handle left click
  //-------------------------------------------------------------------
  const handleLeft = () => {
    if (ref.current.scrollLeft > 0) {
      setScroll(
        (prevState) => prevState - Math.ceil(ref.current.scrollWidth / 2)
      );
    }
  };
  //-------------------------------------------------------------------
  // 9.  Function to handle scroll event
  //-------------------------------------------------------------------
  const handleScroll = (e) => {
    if (e.target.scrollLeft === 0) {
      setLeftNavigation(false);
    } else {
      setLeftNavigation(true);
    }
    if (e.target.scrollLeft + e.target.clientWidth >= e.target.scrollWidth) {
      setRightNavigation(false);
    } else {
      setRightNavigation(true);
    }
  };

  // ========================= Render Function =================================

  return (
    <div className={`qui qt-shadow ${quommonClasses.parentClasses}`}>
      <div
        className="qui-desktop-navbar-wrapper"
        style={{ backgroundColor: withColor?.backgroundColor }}
      >
        <div
          className="qui-desktop-navbar-logo"
          style={{
            backgroundImage: `url(${icon})`,
          }}
          onClick={props.onClick}
        ></div>
        <div className="qui-desktop-navabr-search-bar-wrapper">
          <SearchBar asFloated="none" isFluid={true} onClick={props.onSearch} />
        </div>
        <div className="qui-desktop-navbar-navigation-link-icon-wrapper">
          {showNavigation && (
            <div
              className={`qui-desktop-navigation-left-navigation qui-desktop-navigation-navigation ${
                leftNavigation ? "" : "qui-desktop-navbar-button-disable"
              }`}
              style={{ color: withColor?.textColor }}
              onClick={handleLeft}
            >
              <i className="fas fa-angle-left"></i>
            </div>
          )}
          <div
            className="qui-desktop-navbar-link-icon-wrapper"
            ref={ref}
            onScroll={handleScroll}
          >
            {_.map(linkData, (link, index) => {
              return (
                <div
                  className="qui-desktop-navbar-link-icon-container"
                  key={index}
                >
                  <LinkIcon
                    width=""
                    icon={link.icon}
                    active={link.active}
                    withColor={{
                      backgroundColor: withColor?.backgroundColor,
                      accentColor: withColor?.accentColor,
                      textColor: withColor?.textColor,
                      hoverBackgroundColor: withColor?.backgroundColor,
                      hoverTextColor: withColor?.textColor,
                    }}
                    label={link.text}
                    onClick={handelClick}
                  />
                </div>
              );
            })}
          </div>
          {showNavigation && (
            <div
              className={`qui-desktop-navigation-right-navigation qui-desktop-navigation-navigation ${
                rightNavigation ? "" : "qui-desktop-navbar-button-disable"
              }`}
              style={{ color: withColor?.textColor }}
            >
              <i className="fas fa-angle-right" onClick={handleRight}></i>
            </div>
          )}
        </div>
        <div className="qui-desktop-navbar-app-menu-wrapper">
          <div className="qui-desktop-navbar-name-container">
            <p
              className="qui-desktop-navbar-user-name"
              style={{ color: withColor?.hoverTextColor }}
            >
              {user?.first_name}&nbsp;
            </p>
            <p
              className="qui-desktop-navbar-user-name"
              style={{ color: withColor?.hoverTextColor }}
            >
              {user?.last_name}
            </p>
          </div>
          <div className="qui-desktop-navbar-app-menu-container">
            <AppMenu
              menu={user?.menu}
              asVariant={asVariant}
              asFloated="inline"
              withColor={{
                backgroundColor: withColor?.hoverBackgroundColor,
              }}
              withIcon={{ icon: user?.icon ? user?.icon : "fas fa-user" }}
              isCircular={false}
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
