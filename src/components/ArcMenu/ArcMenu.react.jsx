// Import npm packages
import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import _ from "lodash";
import { getTranslation,getQuommons } from "../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./ArcMenu.scss";
import "../../common/stylesheets/overrule.scss";

ArcMenu.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
  ArcMenu icons can be passed with content prop
  */
  content:PropTypes.shape({
    arcIcon:PropTypes.string,
    menuData : PropTypes.arrayOf(PropTypes.shape({
      name : PropTypes.string,
      icon : PropTypes.string
    }))
  }).isRequired,
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
  Use to override component colors and behavior
  */
  withColor: PropTypes.shape({
    backgroundColor: PropTypes.string,
    accentColor: PropTypes.string,
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
  Use to enable/disable the component
  */
  isDisabled: PropTypes.bool,
  /**
  Use to show/hide the component
  */
  isHidden: PropTypes.bool,
  /**
  Button component must have the onClick function passed as props
  */
  onClick: PropTypes.func.isRequired,
};

ArcMenu.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  content: {
    icons: [],
  },
  //=======================================
  // Quommon props
  //=======================================
  asVariant: "primary",
  asSize: "normal",
  withColor: null,
  withAnimation: null,
  withTranslation: null,
  isDisabled: false,
  isHidden: false,
};

const getColors = (withColor) => {
  let colors = {
    backgroundColor: withColor.backgroundColor,
    borderColor: withColor.accentColor,
    color: withColor.textColor,
  };
  return colors;
};

/**
## Notes
- ArcMenu must be used as last child of `qui` parent class
- The design system used for this component is HTML and CSS
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- Icons can be changed from content prop
**/
export default function ArcMenu(props) {
  const [openMenu,setOpenMenu] = useState (false)
  //-------------------------------------------------------------------
  // 1. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "arc-menu-button");
  //-------------------------------------------------------------------
  // 2. Set the component colors
  //-------------------------------------------------------------------
  let colors = props.withColor ? getColors(props.withColor) : {};
  //-------------------------------------------------------------------
  // 3. Get translation of the component
  //-------------------------------------------------------------------
  let labelContent = Object.assign({}, props.content);
  let tObj = null;

  if (
    props.withTranslation?.lang &&
    props.withTranslation.lang !== "" &&
    props.withTranslation.lang !== "en"
  ) {
    tObj = getTranslation(props.withTranslation);
    if (labelContent && tObj) labelContent.menuData = tObj?.content?.menuData;
  }

  return (
    <div className={`qui ${quommonClasses.parentClasses}`}>
      <motion.div
        initial = {false}
        animate = { !openMenu ? {display:'none',opacity:0} : {display:'block',opacity:1} }
        className={`qui-arc-menu-modal`}
        onClick={()=>setOpenMenu(false)}
      ></motion.div>
      <div className={quommonClasses.childClasses}>
        <div className={`qui-arc`} style={{ borderColor: colors.borderColor }}>
          <button
            className={`qui-arc-menu-button qui-btn ${quommonClasses.childClasses}`}
            style={{ backgroundColor: colors.backgroundColor }}
            onClick={()=>setOpenMenu(prevState => !prevState)}
          >
            <i
              className={`qui-arch-icon ${labelContent?.arcIcon ? labelContent?.arcIcon : "fas fa-desktop"}`}
              style={{ color: colors.color }}
            ></i>
          </button>
          <motion.div
            initial = {false}
            animate = { !openMenu ? {opacity:0,y:'100%'} : {opacity:1,y:0} }
            className = {`qui-arc-menu-buttons `}
          >
            {_.map(labelContent.menuData,(dataObj,i)=>{
              return (
                <div className={`qui-menu-button ${quommonClasses.childClasses}`} key={i}>
                  <button className={`qui-btn qui-single-button ${quommonClasses.childClasses}`} style={{ backgroundColor: colors.backgroundColor,color:colors.color }}><i className={dataObj.icon} style={{ color: colors.color }}></i><small>{dataObj.name}</small></button>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}