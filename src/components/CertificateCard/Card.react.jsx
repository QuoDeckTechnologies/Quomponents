import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import "../../common/stylesheets/overrule.scss";
import "./Card.scss";
import { getAnimation, getQuommons } from "../../common/javascripts/helpers";

Card.propTypes = {
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
        icon: PropTypes.string,
        certificate: PropTypes.string,

    }),
    /**
    Use to add a heading label, a footer caption or a title popover to the component
    */
    withLabel: PropTypes.shape({
        format: PropTypes.oneOf(["label", "caption"]),
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
    /**
       Use to enable/disable the Button
     */
    isDisabled: PropTypes.bool,

    /**
    Button component must have the onClick function passed as props
    */
    onClick: PropTypes.func.isRequired,

};

Card.defaultProps = {
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
    isDisabled: false,
};


export default function Card(props) {

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


    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui ${quommonClasses.parentClasses}`}
        >
        <div>
            <div className={`qui-card `}>
                <div className="qui-margin">
                <div className="qui-header">
                    <div className={`qui-colorBanner qui-btn ${quommonClasses.childClasses}`} style={bannerColors}></div>
                    <div className={`qui-courseHeader variant-${props.asVariant}-text`} style={headerColors}>
                        <p>{props.withLabel ? props.withLabel.content : ''}</p>
                    </div>
                </div>
                <div className="qui-imageCard">
                {props.asStatus === 'certificate' &&  <div>
                    <img className="qui-certificateImage" src={`${props.withIcon ? props.withIcon.certificate : ''}`} alt="certificate" /> 
                </div>}
                {props.asStatus === 'not started' &&
                    <div className="qui-status">
                            <div className="qui-statusInner">
                                <p>NOT STARTED</p>
                                <i className={`far fa-circle variant-${props.asVariant}-text`} style={accentColors}></i>
                            </div>
                    </div>
                }
                { props.asStatus === 'in progress' && 
                        <div className="qui-status">
                            <div className="qui-statusInner">
                            <p>IN PROGRESS</p>
                            <i className={`fas fa-adjust qui-icon-rotate variant-${props.asVariant}-text`} style={accentColors}></i>
                            </div>
                        </div>
                }
                { props.asStatus === 'completed' && 
                    <div className="qui-status">
                        <div className="qui-statusInner">
                        <p>COMPLETED</p>
                        <i className={`fas fa-check-circle variant-${props.asVariant}-text`} style={accentColors}d></i>
                        </div>
                    </div>
                }
                </div>
                </div>
            </div>    
        </div>
        </motion.div>
    );
}