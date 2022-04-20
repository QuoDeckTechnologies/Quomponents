// Import npm packages
import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
    getQuommons,
    getAnimation
} from "../../common/javascripts/helpers.js";
import _ from "lodash";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "../Sidebar/Sidebar.scss";
import "../../common/stylesheets/overrule.scss";

import IconLink from "../Buttons/IconLink/IconLink.react";
import ArcMenu from "../ArcMenu/ArcMenu.react"
import coloredDefaultLogo from "../../assets/coloredDefaultLogo.png";

Sidebar.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    Use to define section content and logo
    */
    asEmphasis: PropTypes.oneOf(["editMode", "default"]),
    /**
    Use to define license type
    */
    licenseType: PropTypes.string,
    /**
    Use to define section label of edit Mode
    */
    label: PropTypes.string,
    /**
    Use to toggle if there is course assigned by the related license or not
    */
    noCourses: PropTypes.bool,
    /**
     Use to define the location of the sidebar
     */
    sidebarLocation: PropTypes.string,
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
    asFloated: PropTypes.oneOf(["left", "right", "inline"]),
    /**
    Use to override component colors and behavior
    */
    withColor: PropTypes.shape({
        backgroundColor: PropTypes.string,
        textColor: PropTypes.string,
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
            ""
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
    Button component must have the onClick function passed as props
    */
    onClick: PropTypes.func.isRequired,
};

Sidebar.defaultProps = {
    // Component Specific props
    //=======================================
    licenseType: "",
    asEmphasis: "default",
    label: "",
    noCourses: false,
    sidebarLocation: "",
    // Quommon props
    //=======================================
    asVariant: "primary",
    asFloated: "inline",

    withColor: null,
    withIcon: null,
    withAnimation: null,

    isHidden: false,
    isDisabled: false,

    onClick: null
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
    let quommonClasses = getQuommons(props, "side-bar");
    quommonClasses.childClasses += ` emp-${props.asEmphasis}`;

    //-------------------------------------------------------------------
    // 2. Set the Logo Image
    //-------------------------------------------------------------------
    let logo = coloredDefaultLogo;
    const [state, setState] = useState("/")
    //-------------------------------------------------------------------
    // 2. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);
    //-------------------------------------------------------------------
    // 3. Get the location of the section 
    //-------------------------------------------------------------------
    const panelLinks = {
        welcome: [
            {
                key: "welcome",
                name: "Welcome",
                icon: "fas fa-handshake",
                show: true,
            },
        ],
        content: [
            {
                key: "platforms",
                name: "Library",
                icon: "fas fa-sitemap",
                show: ["SuperAdmin", "Admin", "Creator", "Manager", "Trainer"].includes(props.licenseType),
            },
            {
                key: "files",
                name: "Editor",
                icon: "fas fa-desktop",
                show: ["SuperAdmin", "Admin", "Creator", "Manager", "Trainer"].includes(props.licenseType) && !props.noCourses,
            },
            {
                key: "advanced",
                name: "Settings",
                icon: "fas fa-cogs",
                show: ["SuperAdmin", "Admin", "Creator", "Manager", "Trainer"].includes(props.licenseType) && !props.noCourses,
            },
            {
                key: "share",
                name: "Enrolment",
                icon: "fa fa-person-booth",
                show: ["SuperAdmin", "Admin", "Creator", "Manager", "Trainer"].includes(props.licenseType) && !props.noCourses,
            },
            {
                key: "preview",
                name: "Preview",
                icon: "fas fa-eye",
                show: ["SuperAdmin", "Admin", "Creator", "Manager", "Trainer"].includes(props.licenseType) && !props.noCourses && window.innerHeight > window.innerWidth,
            },
        ],
        admin: [
            { key: "users", name: "Users", icon: "fas fa-users", show: ["SuperAdmin", "Admin",].includes(props.licenseType), },
            { key: "courses", name: "Courses", icon: "fas fa-book", show: ["SuperAdmin", "Admin",].includes(props.licenseType), },
            {
                key: "branding",
                name: "Branding",
                icon: "fas fa-paint-brush",
                show: ["SuperAdmin", "Admin", "Creator"].includes(props.licenseType),
            },
            { key: "tags", name: "Tags", icon: "fas fa-tags", show: ["SuperAdmin", "Admin",].includes(props.licenseType), },
            { key: "adverts", name: "Ads", icon: "fas fa-image", show: ["SuperAdmin", "Admin",].includes(props.licenseType), },
            { key: "tickets", name: "Ticket Centers", icon: "fas fa-envelope-open-text", show: ["SuperAdmin", "Admin",].includes(props.licenseType), },
        ],
        analytics: [
            {
                key: "organization",
                name: "Org",
                icon: "fas fa-building",
                show: ["SuperAdmin", "Admin", "DataAdmin"].includes(props.licenseType),
            },
            {
                key: "users",
                name: "Teams",
                icon: "fa fa-users",
                show: ["SuperAdmin", "Admin", "Creator", "Manager", "Trainer"].includes(props.licenseType),
            },
            {
                key: "trainees",
                name: "Trainees",
                icon: "fas fa-chalkboard-teacher",
                show: ["SuperAdmin", "Admin", "Trainer"].includes(props.licenseType),
            },
            {
                key: "courses",
                name: "Courses",
                icon: "fas fa-book",
                show: ["SuperAdmin", "Admin", "Creator", "Manager", "Trainer"].includes(props.licenseType),
            },
            {
                key: "articles",
                name: "Articles",
                icon: "fas fa-newspaper",
                show: ["SuperAdmin", "Admin", "Creator", "Manager", "Trainer"].includes(props.licenseType),
            },
        ],
        blog: [
            {
                key: "articles",
                name: "Articles",
                icon: "fas fa-newspaper",
                show: ["SuperAdmin", "Admin", "Creator"].includes(props.licenseType),
            },
            { key: "editor", name: "Editor", icon: "fas fa-pencil-alt", show: ["SuperAdmin", "Admin", "Creator"].includes(props.licenseType), },
        ],
        social: [
            { key: "text", name: "Text", icon: "fas fa-pencil-alt", show: ["SuperAdmin", "Admin", "Creator"].includes(props.licenseType), },
            { key: "link", name: "Link", icon: "fas fa-link", show: ["SuperAdmin", "Admin", "Creator"].includes(props.licenseType), },
            { key: "image", name: "Image", icon: "fas fa-image", show: ["SuperAdmin", "Admin", "Creator"].includes(props.licenseType), },
            { key: "gallery", name: "Gallery", icon: "fas fa-images", show: ["SuperAdmin", "Admin", "Creator"].includes(props.licenseType), },
            { key: "video", name: "Video", icon: "fas fa-film", show: ["SuperAdmin", "Admin", "Creator"].includes(props.licenseType), },
        ],
        help: [
            { key: "chat", name: "Chatbot", icon: "fas fa-comment", show: true },
            { key: "faq", name: "FAQ", icon: "fas fa-comments", show: true },
            { key: "ticket", name: "Support", icon: "fas fa-desktop", show: true },
        ]
    };
    function editMode() {
        return (
            <div className={`qui-side-bar-editmode-container`}>
                <div style={{ backgroundImage: `url(${logo})` }} className="qui-side-bar-logo" />
                <p className={`qui-side-bar-edit-mode-label`}>
                    {props.label}
                </p>
                <ArcMenu position="bottom-left" menuType="close" arcIcon="close" onClick={props.onClick} />
            </div>
        )
    }
    const sidebar = (asEmphasis) => {
        if (asEmphasis === "default") {
            return (
                <div className={`qui-side-bar-default-container`}>
                    <div
                        style={{ backgroundImage: `url(${logo})` }}
                        className="qui-side-bar-logo" />
                    <div
                        className={`qui-side-bar-sections-container`}>
                        {_.map(_.filter(panelLinks[props.sidebarLocation], (l) => l.show),
                            (sections, index) => {
                                return (
                                    <div
                                        className={`qui-side-bar-sections`}
                                        onClick={() => { setState(sections.key); }}
                                        key={`panellink-${index}`}
                                    >
                                        <IconLink
                                            asEmphasis={sections.key === state ? "contained" : "text"}
                                            asSize="tiny"
                                            withIcon={{ icon: sections.icon }}
                                            asVariant={props.asVariant}
                                            withLabel={{ format: "caption", content: sections.name }}
                                            withColor={props.withColor}
                                            onClick={() => { setState(sections.key); }}
                                        />
                                    </div>

                                )
                            })}
                    </div>
                </div>
            )
        } else {
            return (
                editMode()
            )
        }
    }
    return (
        <motion.div
            initial={animate?.from}
            animate={animate?.to}
            className={`qui ${quommonClasses.parentClasses}`}>
            {sidebar(props.asEmphasis)}
        </motion.div>
    );
}

