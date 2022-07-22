import React, { useState } from 'react';
import _ from "lodash";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
    getAnimation,
    getQuommons,
    getTranslation,
} from "../../common/javascripts/helpers";
import "../../common/stylesheets/common.css";
import "./FAQItem.scss";
import "../../common/stylesheets/overrule.scss";
import Segment from "../Segment/Segment.react";
import AccentLine from "../AccentLine/AccentLine.react";

FAQItem.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    FAQItem's question & answer data should be passed in data field
    */
    data: PropTypes.arrayOf(
        PropTypes.shape({
            question: PropTypes.string,
            answer: PropTypes.string,
        })
    ),
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
    Use to float the component in parent container
    */
    asFloated: PropTypes.oneOf(["left", "right", "none", "inline"]),
    /**
    Use to align content within the component container
    */
    asAligned: PropTypes.oneOf(["left", "right", "center"]),
    /**
    Use to set Colors for accent line
    */
    withColor: PropTypes.shape({
        accentColor: PropTypes.string,
        textColor: PropTypes.string,
        backgroundColor: PropTypes.string,
        hoverBackgroundColor: PropTypes.string,
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
    Use to show a translated version of the component text. Dictionary must be valid JSON. 
    */
    withTranslation: PropTypes.shape({
        lang: PropTypes.string,
        tgt: PropTypes.string,
        dictionary: PropTypes.string,
    }),
    /**
    Use to show/hide the component
    */
    isHidden: PropTypes.bool,
    /**
    Use to enable/disable the component
    */
    isDisabled: PropTypes.bool,
};

FAQItem.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    data: [],
    //=======================================
    // Quommon props
    //=======================================
    asVariant: "warning",
    asFloated: "none",
    asAligned: "center",

    withColor: null,
    withAnimation: null,
    withTranslation: null,

    isHidden: false,
    isDisabled: false,
};
/**
## Notes
- The design system used for this component is HTML and CSS
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function FAQItem(props) {
    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "faq-item");
    quommonClasses.childClasses += ` variant-${props.asVariant}-text`;
    //-------------------------------------------------------------------
    // 2. Use to set FAQItem Color
    //-------------------------------------------------------------------
    let FAQItemColors = {
        color: props.withColor?.textColor,
    };
    //-------------------------------------------------------------------
    // 3. Get the handle Expand function
    //-------------------------------------------------------------------
    const [activeIndex, setActiveIndex] = useState("");

    const handleExpand = (index) => {
        if (activeIndex === index) {
            setActiveIndex("")
        }
        else setActiveIndex(index)
    }
    //-------------------------------------------------------------------
    // 4. Translate the data objects in case their is a dictionary provided
    //-------------------------------------------------------------------
    let faqQuestions = props?.data;
    let tObj;
    if (
        props.withTranslation?.lang &&
        props.withTranslation.lang !== "" &&
        props.withTranslation.lang !== "en"
    ) {
        tObj = getTranslation(props.withTranslation);
        faqQuestions = tObj?.data;
    }
    //-------------------------------------------------------------------
    // 5. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props);
    // ========================= Render Function =================================
    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui ${quommonClasses.parentClasses}`}
        >
            <div className={`qui-faq-item-container ${quommonClasses.childClasses}`}>
                <Segment
                    isCircular={true}
                    withColor={{ backgroundColor: props.withColor?.backgroundColor }}
                >
                    {_.map(faqQuestions, (faqs, index) => {
                        return (
                            <div
                                className="qui-faq-item"
                                style={FAQItemColors}
                                key={index}
                            >
                                <Segment
                                    isCircular={true}
                                    withColor={{ backgroundColor: props.withColor?.hoverBackgroundColor }}
                                >
                                    <h6
                                        className="qui-faq-item-question"
                                        onClick={() => handleExpand(index)}
                                    >
                                        {faqs?.question}
                                        <i className={`${activeIndex === index ? "fas fa-minus-circle" : "fas fa-plus-circle"} qui-faq-item-icon-style`} />
                                    </h6>
                                    {activeIndex === index && <div>
                                        <AccentLine withColor={{ accentColor: props.withColor?.accentColor }} />
                                        <div className="qui-faq-item-answer">{faqs?.answer}</div>
                                    </div>}
                                </Segment>
                            </div>
                        );
                    })}
                </Segment>
            </div >
        </motion.div >
    );
}
