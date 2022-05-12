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
    url: PropTypes.string.isRequired
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
    title: "",
    subtitle: "",
    question: "",
    image: {},
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

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  let handleRangeChange = e =>
    this.setState({ pageScale: parseInt(e.target.value, 0) });
  let handleFullScreenOpen = () =>
    this.setState({
      fullScreenOpen: !fullScreenOpen,
      pageScale: 10
    });
  let handleControlOpen = () =>
    setShowControl({ showControl: !showControl });

  let handleScroll = event => {
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
      setSeenPages({ seenPages: seenPages + 1 });
    }
  };

  function messageDom(message) {
    return <div style={{ width: "100vw" }}>{message}</div>;
  }

  let onDocumentLoad = ({ numPages }) => {
    setNumPages({ numPages }, () =>
      seenPages + 1,
      numPages
    );
  };

  let pdfDocument = (
    <Document
      file={blobData}
      onLoadSuccess={onDocumentLoad}
      loading={messageDom("loading pdf please wait...")}
      noData={messageDom(noPdfMessage)}
    >
      {_.times(numPages, num => {
        return (
          <Page
            key={"page-" + num}
            pageNumber={num + 1}
            // width={
            //   ((fullScreenOpen
            //     ? 450
            //     : editorWidth
            //       ? 330
            //       : 290) *
            //     pageScale) /
            //   10
            // }
            onClick={this.handleControlOpen}
          />
        );
      })}
    </Document>
  );
  // if (fetching) { return <Loading />; }
  // else {
  //   return (
  //     <div style={wrapperStyle}>
  //       <div
  //         style={
  //           fullScreenOpen
  //             ? modalStyle
  //             : defaultStyle
  //         }
  //         onScroll={handleScroll}
  //       >
  //         <div
  //           style={
  //             fullScreenOpen ? rotated : unrotated
  //           }
  //         >
  //           {pdfDocument}
  //         </div>
  //       </div>
  //       {isPortrait && (
  //         <div style={controlStyle}>
  //           <div style={zoomSlider}>
  //             <input
  //               type="range"
  //               min="5"
  //               max="25"
  //               step="5"
  //               value={pageScale}
  //               className="slider"
  //               onChange={handleRangeChange}
  //             />
  //           </div>
  //           <Icon
  //             name="expand"
  //             size="large"
  //             style={fullScreenIcon}
  //             onClick={handleFullScreenOpen}
  //           />
  //         </div>
  //       )}
  //     </div>
  //   );
  // }

  // onDocumentLoad = ({ numPages }) => {
  //   numPages, () =>
  //     this.props.handleCompletion(
  //       this.state.seenPages + 1,
  //       this.state.numPages
  //     )
  // };
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


  // ========================= Render Function =================================
  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className={`qui ${quommonClasses.parentClasses}`}
    >{data &&
      <div className="qui-pdf-viewer-card" style={{ ...background }}>
        {pdfDocument}
      </div>}
    </motion.div>
  );
}