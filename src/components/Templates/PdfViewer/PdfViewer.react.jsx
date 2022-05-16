// Import npm packages
import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
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
    pdf: PropTypes.object,
    backgroundImage: PropTypes.object,
    editorWidth: PropTypes.bool
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
    editorWidth: false,
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
  const [zoom, setZoom] = useState(10);


  // const [fetch, setFetch] = useState(true);
  // const [blobData, setBlobData] = useState("");
  // const [pageNumber, setPageNumber] = useState(1);
  // const [pageScale, setPageScale] = useState(10);
  // const [showInfo, setShowInfo] = useState(true);
  // const [fullScreenOpen, setFullScreenOpen] = useState(false);
  // const [showControl, setShowControl] = useState(false);
  // const [noPdfMessage, setNoPdfMessage] = useState("loading pdf please wait...");
  // const [seenPages, setSeenPages] = useState(0);

  //-------------------------------------------------------------------
  // Set the classes
  //-------------------------------------------------------------------
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
      background: `url(${resolveImage(data?.backgroundImage.id, imageLibrary)})`,
      backgroundSize: "cover",
    };
  };
  const background = data?.backgroundImage
    ? getBackground()
    : { backgroundColor: withColor?.backgroundColor ? withColor?.backgroundColor : "#fff" };

  function onDocumentLoadSuccess1({ numPages }) {
    setNumPages(numPages);
  }

  let resolveDocument = (pdf, library) => {
    if (library !== undefined && library.length > 0) {
      if (pdf.id !== "") {
        let data = library.find((doc) => doc.id === pdf.id);
        if (data) {
          return data.doc;
        } else {
          if (typeof props.data.pdf === "object") {
            return props.data.pdf.id.toString()
          } else {
            return props.data.pdf;
          }
        }
      } else {
        return "";
      }
    } else {
      if (typeof props.data.pdf === "object") {
        return props.data.pdf.id.toString()
      } else {
        return props.data.pdf;
      }
    }
  }
  let card = () => {
    return (
      <div className="qui-pdf-viewer-card" style={{ ...background }} />
    )
  }

  // ========================= Render Function =================================
  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className={`qui ${quommonClasses.parentClasses}`}
    >
      {data && data.pdf ?
        <div className="qui-pdf-viewer-container">
          <Document
            file={resolveDocument(data.pdf, props.docLibrary)}
            options={{ workerSrc: "/pdf.worker.js" }}
            onLoadSuccess={onDocumentLoadSuccess1}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                size="A4"
                key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
        </div>
        :
        card()
      }
    </motion.div>
  );
}