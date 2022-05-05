// Import npm packages
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Document, Page } from 'react-pdf';
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
  data: {},
  docLibrary: [{}],
  slideId: 0,
  //=======================================
  // Quommon props
  //=======================================
  asVariant: "primary",
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
- component is used to show the question and the jumbled answer , user need to submit the correct
  answer using the input field, typed answer will submitted as it is.
**/
export default function PdfViewer(props) {
  let { withColor, docLibrary, imageLibrary, data } = props

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

  //-------------------------------------------------------------------
  // Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "pdf-viewer");
  quommonClasses.childClasses += ` variant-${props.asVariant}-text`;
  //-------------------------------------------------------------------
  // Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props.withAnimation);
  const getBackground = () => {
    return {
      background: `url(${resolveImage(props.data?.backgroundImage.id, imageLibrary)})`,
      backgroundSize: "cover",
    };
  };
  const background = props.data?.backgroundImage
    ? getBackground()
    : { backgroundColor: withColor?.backgroundColor ? withColor?.backgroundColor : "#fff" };
  console.log(docLibrary)
  // ========================= Render Function =================================
  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className={`qui ${quommonClasses.parentClasses}`}
    >
      <div className="qui-pdf-viewer-card" style={{ ...background }}>
        <Document externalLinkTarget={"https://www.clickdimensions.com/links/TestPDFfile.pdf"} />
      </div>
    </motion.div>
  );
}
