// Import npm packages
import React, { useState } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { motion } from "framer-motion";
import {
  getAnimation,
  getQuommons,
  resolveImage,
} from "../../../common/javascripts/helpers.js";
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
    url: PropTypes.string.isRequired,
    editorWidth: PropTypes.bool,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    pdf: PropTypes.object,
    backgroundImage: PropTypes.object,
  }).isRequired,
  /**
    PdfViewer should have imageLibrary array
    */
  imageLibrary: PropTypes.array,
  /**
    PdfViewer should have docLibrary array
    */
  docLibrary: PropTypes.array,
  slideId: PropTypes.number,
  //=======================================
  // Quommon props
  //=======================================
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
    editorWidth: false
  },
  docLibrary: [{}],
  slideId: 0,
  //=======================================
  // Quommon props
  //=======================================
  withAnimation: null,
  isDisabled: false,
  isHidden: false,
};
/**
## Notes
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- component is used to show the question and the jumbled answer , user need to submit the correct
  answer using the input field, typed answer will submitted as it is.
**/
export default function PdfViewer(props) {

  const [numPages, setNumPages] = useState(null);
  // const [fetch, setFetch] = useState(true);
  // const [blobData, setBlobData] = useState("");
  // const [pageNumber, setPageNumber] = useState(1);
  // const [pageScale, setPageScale] = useState(10);
  // const [showInfo, setShowInfo] = useState(true);
  // const [fullScreenOpen, SetFullScreenOpen] = useState(false);
  // const [showControl, SetShowControl] = useState(false);
  // const [noPdfMessage, setNoPdfMessage] = useState("loading pdf please wait...");


  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  let { withColor, docLibrary, imageLibrary, data } = props;

  // function handleNavigation(currentPage, totalPages) {
  //   if (props.handleCompletion)
  //     props.handleCompletion(currentPage, totalPages);
  // }
  // let onDocumentLoad = ({ numPages }) => {
  //   if (numPages === 1) this.handleNavigation(numPages, numPages);
  //   this.setState({ numPages });
  // };
  let resolveDocument = (pdf, library) => {
    if (library !== undefined && library.length > 0) {
      if (pdf.id !== "") {
        let data = library.find((doc) => doc.id === pdf.id);
        if (data) {
          return data.doc;
        } else {
          if (typeof data.pdf === "object") {
            return data.pdf.id.toString()
          } else {
            return data.pdf;
          }
        }
      } else {
        return "";
      }
    } else {
      if (typeof data.pdf === "object") {
        return data.pdf.id.toString()
      } else {
        return data.pdf;
      }
    }
  }
  // let pdfDocument = (
  //   <Document
  //     file={this.state.blobData}
  //     onLoadSuccess={this.onDocumentLoad}
  //     loading={this.messageDom("loading pdf please wait...")}
  //     noData={this.messageDom(this.state.noPdfMessage)}
  //   >
  //     {_.times(this.state.numPages, num => {
  //       return (
  //         <Page
  //           key={"page-" + num}
  //           pageNumber={num + 1}
  //           width={
  //             ((this.state.fullScreenOpen
  //               ? 450
  //               : this.props.editorWidth
  //                 ? 330
  //                 : 290) *
  //               this.state.pageScale) /
  //             10
  //           }
  //           onClick={this.handleControlOpen}
  //         />
  //       );
  //     })}
  //   </Document>
  // );
  // console.log(resolveDocument)
  //-------------------------------------------------------------------
  // Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "pdf-viewer");
  //-------------------------------------------------------------------
  // Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props.withAnimation);
  const getBackground = () => {
    return {
      background: `url(${resolveImage(props.data?.backgroundImage.id, imageLibrary)})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat"
    };
  };
  const background = props.data?.backgroundImage
    ? getBackground()
    : { backgroundColor: withColor?.backgroundColor ? withColor?.backgroundColor : "#fff" };
  // ========================= Render Function =================================
  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className={`qui ${quommonClasses.parentClasses}`}
    >
      <div className="qui-pdf-viewer-card" style={{ ...background }}>
        <header className="App-header">
          <Document
            file={resolveDocument(data?.pdf, docLibrary)}
            onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(
              new Array(numPages),
              (el, index) => (
                <Page
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                />
              )
            )}
          </Document>
        </header>
      </div>
    </motion.div>
  );
}
