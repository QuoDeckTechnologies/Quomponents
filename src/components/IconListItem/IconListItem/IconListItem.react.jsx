// Import npm packages
import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
  getAnimation,
  getQuommons,
} from "../../../common/javascripts/helpers";
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

  content: PropTypes.shape(
    PropTypes.shape({
      image: PropTypes.arrayOf(),
      title: PropTypes.arrayOf(),
    }).isRequired,
  ),
  //=======================================
  // Quommon props
  //=======================================

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
Use to float the component in parent container
*/
  asFloated: PropTypes.oneOf(["left", "right", "none", "inline"]),

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
  //=======================================
  // Quommon props
  //=======================================
  asSize: "normal",
  asFloated: "none",
  withAnimation: null,
  isHidden: false,
};

/**
## Notes
- The design system used for this component is Fontawesome Icon
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- Status of topics can be changed from content prop
**/
export default function IconListItem(props) {
  // const [btnArr] = useState(props.content)
  //-------------------------------------------------------------------
  // 1. Destructuring content prop
  //-------------------------------------------------------------------
  const { content } = props;
  // 1. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "IconListItem");
  quommonClasses.childClasses += ` variant-${props.asVariant}-text`;
  //-------------------------------------------------------------------
  // 4. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props.withAnimation);
  // ========================= Render Function =================================
  return (
    <div className={`qui ${quommonClasses.parentClasses}`}>
      {_.map(content,(item, index) => {
        return (
          <motion.div
            initial={animate.from}
            animate={animate.to}
            key={index}>
            <div className={`qui-icon-list ${quommonClasses.childClasses}`}>
              <p className={`qui-list-title `} style={{ order: index % 2 === 0 ? 2 : 1 }} >
                {item?.title}
              </p>
              <img className="qui-list-image" style={{ order: index % 2 === 0 ? 1 : 2 }} src={item?.image} alt=""></img>
            </div>
          </motion.div>
        );
      })}
    </div>
  );

}