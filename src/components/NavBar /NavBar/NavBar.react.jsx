// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import './msg.png';
import AppMenu from "../../AppMenu/AppMenu/AppMenu.react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./NavBar.scss";
import "../../../common/stylesheets/overrule.scss";
import { motion } from "framer-motion";
import { getQuommons, getTranslation, getAnimation, } from "../../../common/javascripts/helpers";


NavBar.propTypes = {

    //=======================================
    // Component specific prop
    //=======================================
    /**
    Use to define component user image
    */
    withUser: PropTypes.string,

    /**
    NavBar Text has to be in content or passed as children to the component. Is optional if you only want an icon.
    */
    content: PropTypes.string,
    /**
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
    Use to override component colors and behavior
    */
    withColor: PropTypes.shape({
        backgroundColor: PropTypes.string,
        textColor: PropTypes.string,
    }),
    /**
    Use to add a heading label, a footer caption or a title popover to the component
    */
    withLabel: PropTypes.shape({
        format: PropTypes.oneOf(["label", "caption", "popover"]),
        content: PropTypes.string,
        textColor: PropTypes.string,
    }),
    /**
    Use to add an icon to the component
    */
    withIcon: PropTypes.shape({
        icon: PropTypes.string,
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
    Use to enable/disable the component
    */
    isDisabled: PropTypes.bool,
    /**
    AppMenu component must have the onClick function passed as props
    */
    onClick: PropTypes.func.isRequired,
};

NavBar.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    withUser: "",
    //=======================================
    // Quommon props
    //=======================================
    asVariant: "primary",
    asSize: "normal",

    withColor: null,
    withIcon: null,
    isHidden: false,
    isDisabled: false,
    withTranslation: null,
};

/**
## Notes
- The design system used for this component is fontawesome Icons
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- props are not being passed to the NavBar. Please speak to the admin to handle any new prop.
**/

export default function NavBar(props) {
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "NavBar");
    quommonClasses.childClasses += ` variant-${props.asVariant}-text`;

    // 1. Set the color
    //-------------------------------------------------------------------
    let colors = {
        backgroundColor: props.withColor?.backgroundColor,
        color: props.withColor?.textColor
    }
    //-------------------------------------------------------------------
    // 2. Translate the text objects in case their is a dictionary provided
    //-------------------------------------------------------------------
    if (
        props.withTranslation?.lang &&
        props.withTranslation.lang !== "" &&
        props.withTranslation.lang !== "en"
    ) {
        let tObj = getTranslation(props.withTranslation);
        if (tObj && props.content && props.content !== "") {
        }
    }
    //-------------------------------------------------------------------
    // 3. Set the label/caption/popover and loading text
    //-------------------------------------------------------------------
    let labelContent = Object.assign({}, props.withLabel);
    let labelStyle = labelContent?.textColor
        ? { color: labelContent.textColor }
        : {};
    //-------------------------------------------------------------------
    // 4. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);

    // ========================= Render Function =================================
    return (
        <motion.div
            initial={animate.from}
            animate={animate.to} className={`qui ${quommonClasses.parentClasses}`} onClick={props.onClick}>
            <div style={colors} className={`qui-NavMain-container ${quommonClasses.childClasses} variant-${props.asVariant} `} >
                <div className={`qui-left-container size-${props.asSize} `}>
                    <div style={colors} className={`qui-angel`}><i className={props.withIcon?.icon}></i></div>
                    <div className="qui-dots" >
                        <i class="fas fa-comment-alt"></i></div>
                    <div className="qui-label" style={labelStyle}>
                        {props.content} </div>

                </div>
                <div className="qui-right-container" >
                    <div className={`qui-searching size-${props.asSize} `}><i class="fas fa-search"></i></div>
                    <div><AppMenu {...props} withIcon={{ icon: 'fas fa-ellipsis-v' }} /></div>
                </div>
            </div>
        </motion.div>
    );
}   