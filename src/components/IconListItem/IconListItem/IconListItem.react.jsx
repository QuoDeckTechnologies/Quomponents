// Import npm packages
import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { getAnimation, getQuommons, resolveImage } from "../../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./IconListItem.scss";
import "../../../common/stylesheets/overrule.scss";

IconListItem.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
  IconListItem data should be passed in content field and it is a required field
  */
  content: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.object,
      text: PropTypes.string,
    }).isRequired
  ),
  /**
  IconListItem can set image from imageLibrary array
  */
  imageLibrary: PropTypes.array,
  /**
  Use to set the state of IconListItem 
  */
  asEmphasis: PropTypes.oneOf(["conversation", "list"]),
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
  Use to override text color of the component
  */
  withColor: PropTypes.shape({
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
  Use to show/hide the component
  */
  isHidden: PropTypes.bool,
};

IconListItem.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  content: [],
  imageLibrary: null,
  asEmphasis: "conversation",
  //=======================================
  // Quommon props
  //=======================================
  asVariant: "primary",
  withColor: null,
  withAnimation: null,
  isHidden: false,
};
/**
## Notes
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- Status of topics can be changed from content prop
**/
export default function IconListItem(props) {
  //-------------------------------------------------------------------
  // 1. Destructuring content prop
  //-------------------------------------------------------------------
  const { content, asEmphasis, imageLibrary, withColor } = props;
  // 2. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "icon-list-item");
  quommonClasses.childClasses += ` variant-${props.asVariant}-text`;
  //-------------------------------------------------------------------
  // 3. Use to set state of IconListItem.
  //-------------------------------------------------------------------
  const getIconListItem = (asEmphasis) => {
    if (asEmphasis === "conversation") {
      return (
        <div>
          {_.map(content, (item, index) => {
            return (
              <motion.div initial={animate.from} animate={animate.to} key={index}>
                <div className={`qui-icon-list-item ${quommonClasses.childClasses}`}>
                  <div className={`qui-icon-list-item-text`} style={{ order: index % 2 === 0 ? 2 : 1, color: withColor.textColor }} >
                    {item?.text}
                  </div>
                  <img
                    className="qui-icon-list-item-image"
                    style={{ order: index % 2 === 0 ? 1 : 2 }}
                    src={resolveImage(item?.image.id, imageLibrary)}
                    alt="iconlist"
                  />
                </div>
              </motion.div>
            );
          })
          }
        </div>
      )
    }
    else {
      return (
        <div>
          {_.map(content, (item, index) => {
            return (
              <motion.div initial={animate.from} animate={animate.to} key={index}>
                <div className={`qui-icon-list-item ${quommonClasses.childClasses}`}>
                  <img
                    className="qui-icon-list-item-image"
                    src={resolveImage(item?.image.id, imageLibrary)}
                    alt="iconlist"
                  />
                  <div className="qui-icon-list-item-text" style={{ color: withColor.textColor }}>
                    {item?.text}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )
    }
  }
  //-------------------------------------------------------------------
  // 4. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props.withAnimation);
  // ========================= Render Function =================================
  return (
    <div className={`qui ${quommonClasses.parentClasses}`}>
      {getIconListItem(asEmphasis)}
    </div>
  );
}