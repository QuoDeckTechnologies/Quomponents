// Import npm packages
import React, { useState } from "react";
import PropTypes from "prop-types";
import { getQuommons } from "../../common/javascripts/helpers";
import _ from "lodash";
import SearchBar from "../SearchBar/SearchBar.react";
import LinkIcon from "../LinkIcon/LinkIcon.react";
import AppMenu from "../AppMenu/AppMenu/AppMenu.react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./DesktopNavbar.scss";
import "../../common/stylesheets/overrule.scss";

DesktopNavbar.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  links: PropTypes.array,
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
  const [linkData, setLinkData] = useState(links);
  //-------------------------------------------------------------------
  // 2. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "desktop-navbar");
  //-------------------------------------------------------------------
  // 3. Set the user image or icon
  //-------------------------------------------------------------------
  let icon = props.withIcon?.icon;
  //-------------------------------------------------------------------
  // 4. LinkIcon click handler
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
        <div className="qui-desktop-navbar-icon-link-wrapper">
          {_.map(linkData, (link, index) => {
            return (
              <div
                className="qui-desktop-navbar-icon-link-container"
                key={index}
              >
                <LinkIcon
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
              menu={[
                {
                  icon: "fa fa-home",
                  label: "Home",
                  onClick: () => {},
                },
                {
                  icon: "fa fa-archive",
                  label: "Archives",
                  onClick: () => {},
                },
                {
                  icon: "divider",
                  label: "",
                  onClick: () => {},
                },
                {
                  icon: "fa fa-power-off",
                  label: "Logout",
                  onClick: () => {},
                },
              ]}
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
