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
    asStatus: PropTypes.oneOf(["not started", "in progress", "completed", "certificate"]),

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
        textColor: PropTypes.string,
        accentColor : PropTypes.string
    }),
    /**
    Use to add the spinning icon to the component
    */
    withIcon: PropTypes.shape({
        certificate: PropTypes.string,
    }),
    /**
    Use to add a heading label, a footer caption or a title popover to the component
    */
    withLabel: PropTypes.shape({
        content: PropTypes.string,
    }),
       /**
    Use to define component text size in increasing order
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
    // Component Specific props
    //=======================================
    asStatus : 'in progress',

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




export default function CertificateCard(props) {

    
    const animate = getAnimation(props.withAnimation);

    let quommonClasses = getQuommons(props);

    let bannerColors = {
        backgroundColor: props.withColor?.textColor,
    };
    let headerColors = {
        color: props.withColor?.textColor,
    };
    let accentColors = {
        color: props.withColor?.accentColor,
    };

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

    const getStatusCard = (status) => {
        let iconClass
        if( status === 'in progress') iconClass = 'fas fa-adjust qui-icon-rotate'
        if( status === 'not started') iconClass = 'far fa-circle '
        if( status === 'completed') iconClass = 'fas fa-check-circle'
        
        return (
            <div className="qui-status">
                <div className={`qui-statusInner ${quommonClasses.childClasses}`}>
                    { tObj ? <p>{tObj?.text[status.replace(' ','')]}</p> : <p>{status.toUpperCase()}</p>}                  
                    <i className={`${iconClass} variant-${props.asVariant}-text`} style={accentColors}></i>
                </div>
            </div>
        )
    }

    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui ${quommonClasses.parentClasses}`}
        >
        <div>
            <div className={`qui-card `}>
                <div className={`qui-header`}>
                    <div className={`qui-colorBanner qui-btn ${quommonClasses.childClasses}`} style={bannerColors}></div>
                    <div className={`qui-courseHeader variant-${props.asVariant}-text`} style={headerColors}>
                        <p>{labelContent?.content}</p>
                    </div>
                </div>
                <div className="qui-imageCard">
                    {props.asStatus === 'certificate' &&  <div>
                        <img className="qui-certificateImage" src={`${props.withIcon?.certificate}`} alt="certificate" /> 
                    </div>}
                    {props.asStatus !== 'certificate' && getStatusCard(props.asStatus)}
                </div>
            </div>    
        </div>
        </motion.div>
    );
}