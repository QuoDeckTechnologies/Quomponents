// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
  getAnimation,
  getQuommons,
  resolveImage,
} from "../../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./Splash.scss";
import "../../../common/stylesheets/overrule.scss";
import TextBlock from "../../TextBlock/TextBlock.react";

Splash.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
    Splash data should be passed in data field and it is a required field
    */
  data: PropTypes.shape({
    splash: PropTypes.string,
    backgroundImage: PropTypes.object,
    presenter: PropTypes.object,
  }).isRequired,
  /**
    Splash can set presenter image from imageLibrary array
    */
  imageLibrary: PropTypes.array,
  /**
    slideId can be used if same template is used continueously for multiple slides in qdf.
    */
  slideId: PropTypes.number,
  //=======================================
  // Quommon props
  //=======================================
  /**
    Use to override component colors and behavior
    */
  withColor: PropTypes.shape({
    backgroundColor: PropTypes.string,
    textBlockBackgroundColor: PropTypes.string,
    textBlockTextColor: PropTypes.string,
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
    Use to enable/disable the component
    */
  isDisabled: PropTypes.bool,
  /**
    Use to show/hide the component
    */
  isHidden: PropTypes.bool,
};

Splash.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  data: {},
  imageLibrary: [],
  //=======================================
  // Quommon props
  //=======================================
  asFloated: "left",
  withColor: null,
  withAnimation: null,
  isDisabled: false,
  isHidden: false,
};
/**
## Notes
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function Splash(props) {
  //-------------------------------------------------------------------
  // 1. Destructuring props
  //-------------------------------------------------------------------
  const { data, withColor, slideId, imageLibrary } = props;
  //-------------------------------------------------------------------
  // 2. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "splash");
  //-------------------------------------------------------------------
  // 3. Variable to set presenter image
  //-------------------------------------------------------------------
  let hasPresenter =
    data?.presenter !== undefined &&
    data?.presenter?.id !== undefined &&
    data?.presenter?.id !== "default43";
  //-------------------------------------------------------------------
  // 4. Function to return a view for splash
  //-------------------------------------------------------------------
  const getView = (data) => {
    return (
      <div className="qui-splash-text" key={`splash-${slideId}`}>
        <p style={{ color: withColor?.textColor }}>{data?.splash}</p>
      </div>
    );
  };
  //-------------------------------------------------------------------
  // 5. Function to return a view for splash with presenter
  //-------------------------------------------------------------------
  const getPresenterView = (data) => {
    return (
      <div key={`splash-presenter-${slideId}`}>
        <div className="qui-splash-text-block">
          <TextBlock
            content={data?.splash}
            conversation={true}
            position="right-bottom"
            asFloated="left"
            asSize="small"
            withColor={{
              backgroundColor: withColor?.textBlockBackgroundColor,
              textColor: withColor?.textBlockTextColor,
            }}
          />
        </div>
        <div className="qui-splash-presenter-image-container"></div>
        {hasPresenter && (
          <img
            className="qui-splash-presenter"
            src={resolveImage(data?.presenter?.id, imageLibrary)}
            alt="Presenter"
          />
        )}
      </div>
    );
  };
  //-------------------------------------------------------------------
  // 6. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props);
  //-------------------------------------------------------------------
  // 7. Functions to set background for the template
  //-------------------------------------------------------------------
  const getBackground = () => {
    if (data?.backgroundImage) {
      return {
        backgroundImage: `url(${resolveImage(
          data?.backgroundImage.id,
          imageLibrary
        )})`,
      };
    }
  };
  const background = getBackground();

  // ========================= Render Function =================================

  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className={`qui ${quommonClasses.parentClasses} ${
        data?.presenter ? "qui-splash-presenter-container" : ""
      }`}
      style={{
        ...background,
        backgroundColor: withColor?.backgroundColor,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="qui-splash-wrapper">
        <div className={`qui-splash-container ${quommonClasses.childClasses}`}>
          {!data?.presenter && getView(data)}
        </div>
        {data?.presenter && getPresenterView(data)}
      </div>
    </motion.div>
  );
}
