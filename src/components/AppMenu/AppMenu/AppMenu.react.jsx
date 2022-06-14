// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import {
  getQuommons,
  getTranslation,
} from "../../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./AppMenu.scss";
import "../../../common/stylesheets/overrule.scss";
import MenuBlock from "../MenuBlock/MenuBlock.react";
import Avatar from "../Avatar/Avatar.react";

AppMenu.propTypes = {
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
  asFloated: PropTypes.oneOf(["left", "right", "inline"]),
  /**
  Use to override component colors and behavior
  */
  withColor: PropTypes.shape({
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
  }),
  /**
  Use to add a heading label, a footer caption or a title popover to the component
  */
  withLabel: PropTypes.shape({
    format: PropTypes.oneOf(["label", "caption", "popover"]),
    content: PropTypes.string,
  }),
  /**
  Use to add an icon to the component
  */
  withIcon: PropTypes.shape({
    icon: PropTypes.string,
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
  AppMenu component must have the onClick function passed as props
  */
  onClick: PropTypes.func.isRequired,
};

AppMenu.defaultProps = {
  //=======================================
  // Quommon props
  //=======================================
  asVariant: "primary",
  asSize: "normal",
  withColor: null,
  withIcon: null,
  withTranslation: null,
  isHidden: false,
  isDisabled: false,
};
/**
## Notes
- The design system used for this component is fontawesome Icons
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- props are not being passed to the AppMenu. Please speak to the admin to handle any new prop.
**/

export default function AppMenu(props) {
  //-------------------------------------------------------------------
  // 1. Destructuring withlabel props
  //-------------------------------------------------------------------
  let { withLabel } = props;
  //-------------------------------------------------------------------
  // 2. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "AppMenu");
  //-------------------------------------------------------------------
  // 3. Set the color
  //-------------------------------------------------------------------
  let colors = {
    backgroundColor: props.withColor?.backgroundColor,
    color: props.withColor?.textColor,
  };
  //-------------------------------------------------------------------
  // 4. Translate the text objects in case their is a dictionary provided
  //-------------------------------------------------------------------
  let tObj;
  if (
    props.withTranslation?.lang &&
    props.withTranslation.lang !== "" &&
    props.withTranslation.lang !== "en"
  ) {
    tObj = getTranslation(props.withTranslation);
  }

  // ========================= Render Function =================================

  return (
    <div className={`qui ${quommonClasses.parentClasses}`}>
      <div className="qui-main-container">
        <div
          style={colors}
          className={`qui-container qui-menuBlock qui-btn size-${props.asSize} 
            variant-${props.asVariant} emp-${props.asEmphasis} `}
        >
          <div className="qui-iconContainer">
            <div className="qui-catalogContainer">
              {tObj || props.withLabel?.content ? (
                <p className="qui-catalogLabel">
                  {tObj ? tObj.content : withLabel?.content}{" "}
                </p>
              ) : null}
            </div>
          </div>
        </div>
        <div className={`qui-appMenuContainer float-${props.asFloated}`}>
          <div
            style={colors}
            className={`qui-appMenuAvatar qui-btn variant-${props.asVariant}`}
          >
            <Avatar {...props} withIcon={props.withIcon} />
          </div>
          <div className="qui-menuIconContainer">
            <MenuBlock
              {...props}
              withIcon={{ icon: "fas fa-ellipsis-v" }}
              withLabel={{ content: "" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
