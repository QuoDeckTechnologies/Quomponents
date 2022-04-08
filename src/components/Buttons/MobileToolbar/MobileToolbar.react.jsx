// Import npm packages
import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
    getQuommons,
    getAnimation,
} from "../../../common/javascripts/helpers.js";
import _ from "lodash";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./MobileToolbar.scss";
import "../../../common/stylesheets/overrule.scss";
import IconLink from "../IconLink/IconLink.react";
import ArcMenu from "../../ArcMenu/ArcMenu.react"

MobileToolbar.propTypes = {
    /**
    Use to define MobileToolbar's value
    */
    label: PropTypes.string,

    content: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.string,
            label: PropTypes.string,
            link: PropTypes.string,
        })
    ).isRequired,
    /**
    Use to set the state of MobileToolbar 
    */
    asEmphasis: PropTypes.oneOf([
        "default",
        "editing",
    ]),
    //=======================================
    // Quommon props
    //=======================================
    /**
    Use to define standard component type
    */
    asVariant: PropTypes.oneOf(["primary", "secondary", "success", "warning", "error"]),
    /**
    Use to set Colors in component 
    */
    withColor: PropTypes.shape({
        textColor: PropTypes.string,
        accentColor: PropTypes.string,
        backgroundColor: PropTypes.string,
        hoverBackgroundColor: PropTypes.string,
        hoverTextColor: PropTypes.string,
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
    Use for rounded corners or circular icon IconLink 
    */
    isCircular: PropTypes.bool,
    /**
    Use to enable/disable the component
    */
    isDisabled: PropTypes.bool,
    /**
    MobileToolbar component must have the onClick function passed as props
    */
    onClick: PropTypes.func.isRequired,
};

MobileToolbar.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    label: "Edit Mode",
    content: [],
    asEmphasis: "default",
    //=======================================
    // Quommon props
    //=======================================
    asVariant: "primary",

    withColor: null,
    withAnimation: null,

    isCircular: true,
    isHidden: false,
    isDisabled: false,

    onClick: null,
};

function getColors(colors) {
    let colorStyle = {
        textColors: {
            color: colors.textColor,
        },
        accentColors: {
            color: colors.accentColor,
        },
        backgroundColors: {
            color: colors.backgroundColor,
        }
    };
    return colorStyle;
}

/**
##Notes
- The design system used for this component is HTML and CSS
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function MobileToolbar(props) {
    const [state, setState] = useState("https://quodeck.com/")
    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "mobile-toolbar");
    //-------------------------------------------------------------------
    // 2. Set the component colors
    //-------------------------------------------------------------------
    let colors = props.withColor ? getColors(props.withColor) : {};
    //-------------------------------------------------------------------
    // 3. Use to set styling for MobileToolbar.
    //-------------------------------------------------------------------
    const { asEmphasis, content, label } = props
    const getInput = (asEmphasis) => {
        if (asEmphasis === "default") {
            return (
                <div className="qui-default-toolbar">
                    {_.map(content, (item, index) => {
                        return (
                            <div key={index}>
                                <IconLink
                                    {...props}
                                    asEmphasis={item.link === state ? "contained" : "text"}
                                    content={{ link: item.link }}
                                    withIcon={{ icon: item.icon }}
                                    withLabel={{
                                        content: item.label,
                                        format: item.format,
                                    }}
                                    onClick={() => {
                                        setState(item.link);
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>
            )
        }
        else {
            return (
                <div className="qui-editing-toolbar">
                    <ArcMenu
                        position="bottom-left" arcIcon="close"
                        onClick={props.onClick}
                    />
                    <h2 className="qui-editing-title" style={colors.textColors}>{label}</h2>
                </div>
            )
        }
    }
    //-------------------------------------------------------------------
    // 4. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);
    // ========================= Render Function =================================
    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui ${quommonClasses.parentClasses}`}
            style={{ backgroundColor: props.withColor?.accentColor }}
        >
            <div className={`${quommonClasses.childClasses}`}>
                {getInput(asEmphasis)}
            </div>
        </motion.div>
    );
}