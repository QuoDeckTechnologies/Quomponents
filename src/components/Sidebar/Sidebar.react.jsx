// Import npm packages
import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
    getQuommons,
    getAnimation,
    getTranslation,
} from "../../common/javascripts/helpers.js";
import _ from "lodash";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "../Sidebar/Sidebar.scss";
import "../../common/stylesheets/overrule.scss";

import LinkIcon from "../LinkIcon/LinkIcon.react";
import ArcMenu from "../ArcMenu/ArcMenu.react";

Sidebar.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    Use to define logo
    */
    logo: PropTypes.string.isRequired,
    /**
    Use to define content
    */
    content: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            title: PropTypes.string,
            active: PropTypes.bool,
            onClick: PropTypes.func.isRequired,
        })
    ).isRequired,
    /**
    Use to define width of the sidebar
    */
    width: PropTypes.string,
    /**
    Use to define the text for edit mode on the sidebar
    */
    editMode: PropTypes.shape({
        active: PropTypes.bool,
        label: PropTypes.string,
        onClick: PropTypes.func,
    }),
    /**
    Use to float the component in parent container
    */
    asFloated: PropTypes.oneOf(["left", "right", "none", "inline"]),
    /**
    Use to override component colors and behavior
    */
    withColor: PropTypes.shape({
        backgroundColor: PropTypes.string,
        textColor: PropTypes.string,
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
};

Sidebar.defaultProps = {
    // Component Specific props
    //=======================================
    width: "64px",
    editMode: {
        active: false,
        label: "Edit Mode",
        onClick: () => true,
    },
    // Quommon props
    //=======================================
    asFloated: "left",

    withColor: null,
    withAnimation: null,

    isHidden: false,
};

/**
## Notes
- The design system used as a navigation bar in Dashboard
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- Sidebar shows content according to the license type of the user
**/
export default function Sidebar(props) {
    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "sidebar");

    //-------------------------------------------------------------------
    // 2. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props);

    const topLogo = () => {
        return (
            <div
                className="qui-sidebar-logo"
                style={{ width: props.width, height: props.width }}
            >
                <img src={props.logo} alt="" />
            </div>
        );
    };
    const editMode = () => {
        return (
            <div
                className={`qui-sidebar-block edit-mode ${quommonClasses.childClasses}`}
                style={{
                    backgroundColor: props.withColor?.backgroundColor,
                    width: props.width,
                }}
            >
                {topLogo()}
                <h3
                    className={`qui-sidebar-edit-mode-label`}
                    style={{ color: props.withColor?.textColor }}
                >
                    {props.editMode?.label}
                </h3>
                <ArcMenu
                    position="bottom-left"
                    menuType="close"
                    arcIcon="close"
                    onClick={props.editMode?.onClick}
                />
            </div>
        );
    };
    const sidebar = () => {
        if (props.editMode.active) return editMode();
        else {
            return (
                <div
                    className={`qui-sidebar-block ${quommonClasses.childClasses}`}
                    style={{
                        backgroundColor: props.withColor?.backgroundColor,
                        width: props.width,
                    }}
                >
                    {topLogo()}
                    <div className={`qui-sidebar-sections-container`}>
                        {_.map(props.content, (section, index) => {
                            return (
                                <div
                                    className={`qui-sidebar-section`}
                                    key={`panellink-${index}`}
                                >
                                    <LinkIcon
                                        icon={section.icon}
                                        label={section.label}
                                        title={section.title}
                                        active={section.active}
                                        width={props.width}
                                        asSize={props.asSize}
                                        withColor={props.withColor}
                                        onClick={section.onClick}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            );
        }
    };
    return (
        <motion.div
            initial={animate?.from}
            animate={animate?.to}
            className={`qui ${quommonClasses.parentClasses}`}
        >
            {sidebar()}
        </motion.div>
    );
}
