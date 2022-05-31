// Import npm packages
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import _ from "lodash";
import { Document, Page, pdfjs } from 'react-pdf';
import Slider from "../../Slider/Slider.react";

import { motion } from "framer-motion";
import {
  getAnimation,
  getQuommons,
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
    pdf: PropTypes.object,
  }).isRequired,
  /**
    PdfViewer data should be passed in docLibrary for checking the given id of the document passed in pdf prop
    */
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
    url: "",
  },
  /**
    PdfViewer component must have the onClick function passed as props
    */
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
- This template component is to be used to show pdf.
**/
export default function PdfViewer(props) {
  let { data, withColor } = props
  const [numPages, setNumPages] = useState(null);
  const [zoom, setZoom] = useState(22);
  const [showSlider, setShowSlider] = useState(false);
  const [rotate, setRotate] = useState(false);
  const [width, setWidth] = useState(window.innerWidth * 2)
  const [rotatedWidth, setRotatedWidth] = useState(window.innerHeight * 1.4)

  //-------------------------------------------------------------------
  // Set the classes
  //-------------------------------------------------------------------  innerHeight
  let quommonClasses = getQuommons(props, "pdf-viewer");
  quommonClasses.childClasses += ` variant-${props.asVariant}-text`;
  //-------------------------------------------------------------------
  //  Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props.withAnimation);
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  //-------------------------------------------------------------------
  //  Setting the colors of imported components
  //-------------------------------------------------------------------
  const getBackground = () => {
    return {
      background: `url(https://icon-library.com/images/pdf-icon-free/pdf-icon-free-15.jpg)`,
      backgroundSize: "cover",
      backgroundPosition: "50% 50%"
    };
  };
  const background = data?.pdf && props.docLibrary
    ? { backgroundColor: withColor?.backgroundColor ? withColor?.backgroundColor : "#ddd6d600" }
    : getBackground();

  const resizeHandler = () => {
    setWidth(window.innerWidth * 2)
  }
  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  const resizeHandlerRotated = () => {
    setRotatedWidth(window.innerHeight * 1.4)
  }
  useEffect(() => {
    window.addEventListener("resize", resizeHandlerRotated);
    return () => {
      window.removeEventListener("resize", resizeHandlerRotated);
    };
  }, []);

  let resolveDocument = (pdf, library) => {
    let libraryDoc = _.find(library, { id: pdf });
    if (libraryDoc?.id !== pdf || libraryDoc === null || library.length === 0) {
      return getBackground()
    }
    return libraryDoc?.doc
  };
  // ========================= Render Function =================================
  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className={`qui ${quommonClasses.parentClasses}`}
    >
      <div className={`qui-pdf-viewer-outer-container`}>
        {data && data?.docLibrary !== null &&
          < div className={`qui-pdf-viewer-container ${rotate ? '-rotated' : ''}`}>
            {props?.docLibrary &&
              < Document
                file={data?.pdf?.id ? resolveDocument(data.pdf?.id, props?.docLibrary) : "No data"}
                onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                onClick={() => setShowSlider(preState => !preState)}
              >
                {Array.from(new Array(numPages), (el, index) => (
                  <Page
                    scale={rotate ? 50 / 50 : zoom >= 22 ? zoom / 50 : 22 / 50}
                    size="A4"
                    rotate={rotate ? 90 : 0}
                    width={rotate ? rotatedWidth : width}
                    key={`page_${index + 1}`} pageNumber={index + 1} />
                ))}
              </Document>}
            {data?.pdf &&
              <div>
                {window.innerWidth <= 480 && showSlider &&
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
      {!data?.pdf || !data?.docLibrary &&
        <img src="https://icon-library.com/images/pdf-icon-free/pdf-icon-free-15.jpg" className="qui-pdf-background" />}
    </motion.div >
  );
}