import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { getAnimation, getQuommons, getTranslation } from "../../common/javascripts/helpers";

import "../../common/stylesheets/common.css";
import "./CertificateCard.scss";
import "../../common/stylesheets/overrule.scss";

CertificateCard.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================

    /**
    Use to define user status of completion
    */
    asStatus: PropTypes.oneOf(["not started", "in progress", "completed"]),

    //=======================================
    // Quommon props
    //=======================================
    /**
    Use to define component header and icon color
    */
    asVariant: PropTypes.oneOf([
        "primary",
        "secondary",
        "success",
        "warning",
        "error",
    ]),
    /**
    Use to define component text and icon size in increasing order
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
    Use to accent color is used to change the icon color used and text color is used to change the header color in the component 
    */
    withColor: PropTypes.shape({
        textColor: PropTypes.string,
        accentColor: PropTypes.string
    }),
    /**
    Use to add the Certificate's image to the component without certificate image status show is completed
    */
    withIcon: PropTypes.shape({
        icon: PropTypes.string,
    }),
    /**
    Use to add header label of the component
    */
    withLabel: PropTypes.shape({
        content: PropTypes.string,
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
            ""
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
};

CertificateCard.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    asStatus: 'in progress',
    //=======================================
    // Quommon props
    //=======================================
    asVariant: "primary",

    withColor: null,
    withIcon: null,
    withLabel: null,
    withAnimation: null,
    withTranslation: null,

    isHidden: false,
};
/**
## Notes
- The design system used for this component is HTML and CSS
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function CertificateCard(props) {
    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props);
    //-------------------------------------------------------------------
    // 2. Use to set header banner Color
    //-------------------------------------------------------------------
    let bannerColors = {
        backgroundColor: props.withColor?.textColor,
    };
    //-------------------------------------------------------------------
    // 3.Use to set header Color
    //-------------------------------------------------------------------
    let headerColors = {
        color: props.withColor?.textColor,
    };
    //-------------------------------------------------------------------
    // 4. Use to set accent Color of icon
    //-------------------------------------------------------------------
    let accentColors = {
        color: props.withColor?.accentColor,
    };
    //-------------------------------------------------------------------
    // 5. Get translation of the component
    //-------------------------------------------------------------------
    let labelContent = Object.assign({}, props.withLabel);
    let tObj = null

    if (
        props.withTranslation?.lang &&
        props.withTranslation.lang !== "" &&
        props.withTranslation.lang !== "en"
    ) {
        tObj = getTranslation(props.withTranslation);
        if (labelContent && tObj?.label) labelContent.content = tObj.label;
    }
    //-------------------------------------------------------------------
    // 6. Get Status Card of the component
    //-------------------------------------------------------------------
    const getStatusCard = (status = 'completed') => {
        let iconClass
        if (status === 'in progress') iconClass = 'fas fa-adjust qui-icon-rotate'
        if (status === 'not started') iconClass = 'far fa-circle'
        if (status === 'completed') iconClass = 'fas fa-check-circle'

        return (
            <div className="qui-status">
                <div className={`qui-statusInner ${quommonClasses.childClasses}`}>
                    {tObj ? <p>{tObj?.text[status.replace(' ', '')]}</p> : <p>{status.toUpperCase()}</p>}
                    <i className={`${iconClass} variant-${props.asVariant}-text`} style={accentColors}></i>
                </div>
            </div>
        )
    }
    //-------------------------------------------------------------------
    // 7. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);

    // ========================= Render Function =================================
    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui ${quommonClasses.parentClasses}`}
        >
            <div className="qui-card">
                <div className="qui-header">
                    <div className={`qui-colorBanner qui-btn ${quommonClasses.childClasses}`} style={bannerColors}></div>
                    <div className={`qui-courseHeader variant-${props.asVariant}-text`} style={headerColors}>
                        <p>{labelContent?.content}</p>
                    </div>
                </div>
                <div className="qui-imageCard">
                    {props.withIcon?.icon && <img className="qui-certificateImage" src={`${props.withIcon?.icon}`} alt="certificate" />}
                    {!props.withIcon?.icon && getStatusCard(props.asStatus)}
                </div>
            </div>
        </motion.div>
    );
}