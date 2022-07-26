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
    size: PropTypes.string,
  }),
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
  withIcon: null,
};

/**
## Notes
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- MUI props are not being passed to the DesktopNavbar. Please speak to the admin to handle any new MUI prop.
**/
export default function DesktopNavbar(props) {
  const { links, user } = props;

  let quommonClasses = getQuommons(props, "desktop-navbar");
  //-------------------------------------------------------------------
  // 3. Set the user image or icon
  //-------------------------------------------------------------------
  let icon = props.withIcon?.icon;
  let isImageIcon = null;
  if (icon) {
    isImageIcon = /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/.test(
      icon
    );
  }
  // ========================= Render Function =================================

  return (
    <div className={`qui qt-shadow ${quommonClasses.parentClasses}`}>
      <div className="qui-desktop-navbar-wrapper">
        <div
          className="qui-desktop-navbar-logo"
          style={{
            backgroundImage: `url(https://s3-alpha-sig.figma.com/img/62a7/fe58/4eecae9f288351910a0eb692d867ee13?Expires=1659916800&Signature=AlWDFcksp3SrNfu0e9xxYSVnvJDtrx0ckNiajI2LAfAuD8Wshhp8KhQwgCx1nyZjuagwO2wW6r8uKC4O6QBeCw1OvYF6L42cuCSZaFqoA-Io74RDywQrgRxCrR3SXRSgamPEhGvwZnlSco~kYXn4DnIhEbtmErawR21H~hFoxTOpTaoVmFw-29dz2SPxj-L1sKZM6kXj1vozhHOzHq6GM5IQLysBP9RJu6jjG4TmVuHQRx9Uy-i9j8he0q00Uvp1HV5-RZLY05dGNHxrQIdVq8UuB3U9P5kStx9dbC286AFVNVZfxky6pgP5ITb~Z~LRa28KqfGBn8ovGOYukrVVQw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA)`,
          }}
        ></div>
        <div className="qui-desktop-navabr-search-bar-wrapper">
          <SearchBar asFloated="none" isFluid={false} onClick={props.onClick} />
        </div>
        <div className="qui-desktop-navbar-icon-link-wrapper">
          {_.map(links, (link, index) => {
            return (
              <div
                className="qui-desktop-navbar-icon-link-container"
                key={index}
              >
                <LinkIcon
                  icon={link.icon}
                  label={link.text}
                  onClick={() => {}}
                />
              </div>
            );
          })}
        </div>
        <div className="qui-desktop-navbar-app-menu-wrapper">
          <p className="qui-desktop-navbar-user-name">{user.name}</p>
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
              asFloated="inline"
              withIcon={{ icon: user.icon }}
              isCircular={false}
              onClick={(d) => {console.log(d)}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
