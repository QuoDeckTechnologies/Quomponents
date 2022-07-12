// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
  getQuommons,
  getTranslation,
  getAnimation
} from "../../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./AppMenu.scss";
import "../../../common/stylesheets/overrule.scss";
import MenuBlock from "../MenuBlock/MenuBlock.react";
import Avatar from "../Avatar/Avatar.react";

AppMenu.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  avatar: PropTypes.string,
  /**
  Use for rounded corners or circular icon button 
  */
  isCircular: PropTypes.bool,
  //=======================================
  // Quommon props
  //=======================================
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
  Use to add text title in the component
  */
  withLabel: PropTypes.shape({
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
  // Component Specific props
  //=======================================
  isCircular: true,
  avatar: "",
  //=======================================
  // Quommon props
  //=======================================
  asSize: "normal",
  withColor: null,
  withIcon: null,
  withTranslation: null,
  withAnimation: null,
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
  let quommonClasses = getQuommons(props, "app-menu");
  if (props.isCircular) quommonClasses.childClasses += ` is-circular`;
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
  //-------------------------------------------------------------------
  // 5. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props);

  // ========================= Render Function =================================

  return (
    <motion.div
      initial={animate?.from}
      animate={animate?.to}
      className={`qui ${quommonClasses.parentClasses} ${props.isCircular ? "qui-app-menu-circular" : ""
        } qt-shadow`}
    >
      <div className="qui-app-menu-container">
        <div
          style={colors}
          className={`qui-app-menu-inner-container qui-btn ${quommonClasses.childClasses} `}
        >
          <div className="qui-app-menu-icon-container">
            <div className="qui-app-menu-catalog-container">
              {tObj || props.withLabel?.content ? (
                <p className="qui-app-menu-catalog-label">
                  {tObj ? tObj.content : withLabel?.content}{" "}
                </p>
              ) : null}
            </div>
          </div>
        </div>
        <div
          className={`qui-app-menu-avatar-container float-${props.asFloated}`}
        >
          <div
            style={colors}
            className={`qui-app-menu-avatar qui-btn`}
          >
            <Avatar
              {...props}
              withIcon={
                props.avatar ? { icon: props.avatar } : { icon: "fas fa-user" }
              }
            />
          </div>
          <div className="qui-app-menu-icon-container">
            <MenuBlock
              {...props}
              withIcon={props.withIcon ? props.withIcon : { icon: "fas fa-ellipsis-v" }}
              withLabel={{ content: "" }}
              withTranslation={null}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
