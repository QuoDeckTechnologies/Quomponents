// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { getQuommons } from "../../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./Avatar.scss";
import "../../../common/stylesheets/overrule.scss";

Avatar.propTypes = {
  //=======================================
  // Component specific prop
  //=======================================
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
  Use to define component text size in increasing order
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
  Use to override component colors and behavior
  */
  withColor: PropTypes.shape({
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
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
  Avatar component must have the onClick function passed as props
  */
  onClick: PropTypes.func.isRequired,
};

Avatar.defaultProps = {
  //=======================================
  // Component specific prop
  //=======================================
  withUser: "",
  // ======================================
  // Quommon props
  //=======================================
  asVariant: "primary",
  asSize: "normal",
  asFloated: "none",
  withColor: null,
  withIcon: null,
  isHidden: false,
  isDisabled: false,
};

/**
## Notes
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function Avatar(props) {
  //-------------------------------------------------------------------
  // 1. Set the color
  //-------------------------------------------------------------------
  let colors = {
    backgroundColor: props.withColor?.backgroundColor,
    color: props.withColor?.textColor,
  };
  //-------------------------------------------------------------------
  // 2. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props);
  quommonClasses.childClasses += ` emp-contained`;
  //-------------------------------------------------------------------
  // 3. Get Avatar if provided, default is icon
  //-------------------------------------------------------------------
  const getAvatar = (icon, avatar) => {
    if (avatar) {
      return <img className={`qui-image `} src={avatar} alt="avatar" />;
    } else {
      return (
        <div
          style={colors}
          className={`qui-icon qui-btn ${quommonClasses.childClasses}`}
        >
          <i className={`${icon?.icon}`}></i>
        </div>
      );
    }
  };

  // ========================= Render Function =================================

  return (
    <div
      className={`qui qui-avatarContainer ${quommonClasses.parentClasses}`}
      onClick={props.onClick}
    >
      <div
        className={`qui-container qui-icon-container size-${props.asSize} variant-${props.asVariant}`}
      >
        {getAvatar(props.withIcon, props.withUser)}
      </div>
    </div>
  );
}
