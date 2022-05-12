// Import npm packages
import React, { useState } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
// import { Document, Page } from "react-pdf";
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
import sample from "./sample.pdf"
PdfViewer.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
    PdfViewer data should be passed in data field and it is a required field
    */
  data: PropTypes.shape({
    url: PropTypes.string.isRequired,
    editorWidth: PropTypes.bool
  }),
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
  const [fetch, setFetch] = useState(true);
  const [blobData, setBlobData] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [pageScale, setPageScale] = useState(10);
  const [showInfo, setShowInfo] = useState(true);
  const [fullScreenOpen, setFullScreenOpen] = useState(false);
  const [showControl, setShowControl] = useState(false);
  const [noPdfMessage, setNoPdfMessage] = useState("loading pdf please wait...");
  const [seenPages, setSeenPages] = useState(0);

  function onDocumentLoadSuccess(numPages) {
    setNumPages(numPages);
  }

  // function componentDidMount() {
  //   this.fetchAsset()
  //     .then(blob => {
  //       if (blob !== 0) {
  //         this.setState({
  //           blobData: blob,
  //           noPdfMessage: "Loading PDF",
  //           fetching: false
  //         });
  //       }
  //     })
  //     .catch(err => {
  //       setNoPdfMessage("No pdf found...")
  //     });
  // }

  let handleCompletion = (currentPage, totalPages) => {
    //logic for individual pdf slide to be added
  };


  let onDocumentLoad = (numPages) => {
    setNumPages(
      handleCompletion(
        seenPages + 1,
        numPages
      )
    )
  };

  function fetchAsset() {
    let pdfData = props.url;
    if (pdfData && pdfData.indexOf(";base64,") > -1) {
      return Promise.resolve(pdfData);
    } else if (pdfData && pdfData.indexOf("http") > -1) {
      return Promise.resolve(pdfData);
    } else {
      return Promise.reject(0);
    }
  }
  function messageDom(message) {
    return <div style={{ width: "100vw" }}>{message}</div>;
  }

  let handleRangeChange = (e) => {
    setPageScale(parseInt(e.target.value, 0))
  }

  let handleFullScreenOpen = () => {
    setFullScreenOpen(!fullScreenOpen)
    setPageScale(10)
  }

  let handleControlOpen = () => { setShowControl(!showControl); }

  let handleScroll = (event) => {
    let pageHeight =
      Math.floor(
        document.getElementsByClassName("ReactPDF__Document")[0]
          .clientHeight / numPages,
        0
      ) - 5;
    if (
      event.target.scrollTop + window.innerHeight >
      (seenPages + 1) * pageHeight ||
      event.target.scrollLeft + window.innerWidth >
      (seenPages + 1) * pageHeight
    ) {
      setSeenPages(seenPages + 1)
    }
  };
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


  //---------------------
  // Component Styles
  //---------------------

  let isPortrait = window.innerHeight > window.innerWidth;
  let wrapperStyle = {
    height: "100%",
    width: "100%",
    textAlign: "center",
    position: "relative",
    background: "#666",
    overflow: "hidden"
  };
  let defaultStyle = {
    height: "100%",
    width: "100%"
  };
  let controlStyle = {
    position: "fixed",
    bottom: "0",
    height: "7vh",
    padding: "15px 10px",
    width: "100%",
    background: "#333333",
    zIndex: "1004",
    display: showControl ? "block" : "none"
  };
  let zoomSlider = {
    width: isPortrait ? "85%" : "100%",
    float: "left",
    display: !fullScreenOpen ? "block" : "none"
  };
  let fullScreenIcon = {
    float: "right",
    color: "white"
  };
  let modalStyle = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    overflow: "auto hidden",
    padding: "0",
    margin: "0",
    zIndex: "1003",
    background: "#666666"
  };
  let rotated = {
    position: "absolute",
    top: "22vh",
    left: "22vh",
    width: "100vw",
    height: "100vh",
    transform: "rotate(-90deg)"
  };
  let unrotated = {
    display: "block",
    height: "100%",
    overflowY: "scroll",
    overflowX: isPortrait ? "scroll" : "hidden"
  };

  let pdfDocument = () => {
    <Document
      file={sample}
      onLoadSuccess={onDocumentLoad}
      loading={messageDom("loading pdf please wait...")}
      noData={messageDom(noPdfMessage)}
    >
      {_.times(numPages, num => {
        return (
          <Page
            key={"page-" + num}
            pageNumber={num + 1}
            width={
              ((fullScreenOpen
                ? 450
                : props.editorWidth
                  ? 330
                  : 290) *
                pageScale) /
              10
            }
            onClick={handleControlOpen}
          />
        );
      })}
    </Document>
  };
  function showPdf() {
    <div style={wrapperStyle}>
      <div
        style={
          fullScreenOpen
            ? modalStyle
            : defaultStyle
        }
        onScroll={handleScroll}
      >
        <div
          style={
            fullScreenOpen ? rotated : unrotated
          }
        >
          {pdfDocument}
        </div>
      </div>
      {isPortrait && (
        <div style={controlStyle}>
          <div style={zoomSlider}>
            <input
              type="range"
              min="5"
              max="25"
              step="5"
              value={pageScale}
              className="slider"
              onChange={handleRangeChange}
            />
          </div>
          {/* <Icon
              name="expand"
              size="large"
              style={fullScreenIcon}
              onClick={handleFullScreenOpen}
            /> */}
        </div>
      )}
    </div>
  }
  // ========================= Render Function =================================
  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className={`qui ${quommonClasses.parentClasses}`}
    >{data &&
      <div className="qui-pdf-viewer-card" style={{ ...background }}>
        {fetch ? showPdf() : "no pdf"}
      </div>}
    </motion.div>
  );
}