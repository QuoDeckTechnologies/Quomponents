// Import npm packages
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Slider from "../../Slider/Slider.react";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { motion } from "framer-motion";
import {
  getAnimation,
  getQuommons,
  resolveImage,
} from "../../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./PdfViewer.scss";
import "../../../common/stylesheets/overrule.scss";
PdfViewer.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
    PdfViewer data should be passed in data field and it is a required field
    */
  data: PropTypes.shape({
    title: PropTypes.string,
    pdf: PropTypes.object.isRequired,
    backgroundImage: PropTypes.object,
  }),

  docLibrary: PropTypes.array,
  /**
    PdfViewer slideId should be passed with props, to specify the slide.
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
    sliderBackgroundColor: PropTypes.string,
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
    PdfViewer component must have the onClick function passed as props
    */
  onClick: PropTypes.func.isRequired,
};

PdfViewer.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  data: {
    title: "",
    url: "",
    backgroundImage: {},
  },
  /**
    PdfViewer component must have the onClick function passed as props
    */
  imageLibrary: [{}],
  docLibrary: [{}],
  slideId: 0,
  //=======================================
  // Quommon props
  //=======================================
  asVariant: "primary",
  withColor: null,
  withAnimation: null,
  isHidden: false,
  isDisabled: false,
};
/**
## Notes
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- Displays a Open Answer slide withSlideHeader , TextBlock, inputFiled, and a Button
**/
export default function PdfViewer(props) {
  let { data, withColor, imageLibrary } = props
  const [numPages, setNumPages] = useState(null);
  const [zoom, setZoom] = useState(22);
  const [showSlider, setShowSlider] = useState(false);
  const [rotate, setRotate] = useState(false);
  const [width, setWidth] = useState(window.innerWidth <= 320 ? 560 : window.innerWidth <= 481 ? 660 : window.innerWidth <= 540 ? 700 : window.innerWidth <= 769 ? 700 : 700);
  //-------------------------------------------------------------------
  // Set the classes
  //-------------------------------------------------------------------  innerHeight
  let quommonClasses = getQuommons(props, "pdf-viewer");
  quommonClasses.childClasses += ` variant-${props.asVariant}-text`;
  //-------------------------------------------------------------------
  //  Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props.withAnimation);

  //-------------------------------------------------------------------
  //  Setting the colors of imported components
  //-------------------------------------------------------------------
  const getBackground = () => {
    return {
      background: `url(${resolveImage(data?.backgroundImage?.id, imageLibrary)})`,
      backgroundSize: "cover",
      backgroundPosition: "50% 50%"
    };
  };
  const background = data?.pdf
    ? { backgroundColor: withColor?.backgroundColor ? withColor?.backgroundColor : "#fff" }
    : getBackground();

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const resizeHandler = () => {
    if (window.innerWidth <= 320) {
      setWidth(560);
    } else if (window.innerWidth <= 481) {
      setWidth(660);
    } else if (window.innerWidth <= 540) {
      setWidth(700);
    } else if (window.innerWidth <= 769) {
      setWidth(700);
    } else {
      setWidth(700);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    setZoom(zoom)
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [zoom]);

  let resolveDocument = (pdf, library) => {
    if (data?.pdf) {
      if (library !== undefined && library.length > 0) {
        if (pdf?.id !== "") {
          let data = library.find((doc) => doc.id === pdf?.id);
          if (data) {
            return data.doc;
          } else {
            if (typeof data?.pdf === "object") {
              return data?.pdf?.id.toString()
            } else {
              return data?.pdf;
            }
          }
        } else {
          return "";
        }
      } else {
        if (typeof data?.pdf === "object") {
          return data?.pdf?.id.toString()
        } else {
          return data?.pdf;
        }
      }
    }
  };

  // ========================= Render Function =================================
  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className={`qui ${quommonClasses.parentClasses}`}
    >
      <div className={`qui-pdf-viewer-outer-container`} style={{ ...background }}>
        {data &&
          <div className={`qui-pdf-viewer-container`}>
            {
              data?.pdf &&
              <div className={`${rotate ? "qui-rotate-title" : "qui-pdf-title"}`}>
                {rotate ? "" : data?.title}
              </div>
            }
            <Document
              title={data?.title}
              file={resolveDocument(data?.pdf, props?.docLibrary)}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              {Array.from(new Array(numPages), (el, index) => (
                <Page
                  scale={rotate ? 50 / 50 : zoom >= 22 ? zoom / 50 : 22 / 50}
                  size="A4"
                  rotate={rotate ? 90 : 0}
                  width={width}
                  className={`${rotate ? "qui-rotated-page" : ""}`}
                  key={`page_${index + 1}`} pageNumber={index + 1} />
              ))}
            </Document>
            {data?.pdf &&
              <div>
                {rotate ? "" :
                  <i
                    className={`qui-pdf-zoom-icon ${showSlider ? "fas fa-toggle-on" : "fas fa-toggle-off"}`}
                    onClick={() => setShowSlider(preState => !preState)} />}
              </div>}

            {data?.pdf &&
              <div>
                {showSlider &&
                  <div
                    className={"qui-footer-slider-icon-container"}
                    style={rotate ? { backgroundColor: "#55555500" } : { backgroundColor: props.withColor.sliderBackgroundColor }}>
                    {rotate ? "" : <Slider
                      initialValue={22}
                      onClick={(value) => setZoom(value)} />}
                    <i
                      className={`qui-pdf-rotate-icon ${rotate ? "fas fa-compress" : "fas fa-expand"}`} onClick={() => setRotate(prevState => !prevState)} />
                  </div>
                }
              </div>}
          </div>}
      </div>

    </motion.div>
  );
}