// Import npm packages
import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
    getQuommons,
    getAnimation,
    getTranslation
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
    withAnimation: null,
    withTranslation: null,

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
    const [state, setState] = useState("/")
    //-------------------------------------------------------------------
    // 2. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props);
    //-------------------------------------------------------------------
    // 3. Get the translation of panelLinks
    //-------------------------------------------------------------------
    let translatedPanelLinks = {
        welcome: "Welcome",
        content: {
            library: "Library",
            editor: "Editor",
            settings: "Settings",
            enrollment: "Enrollment",
            preview: "Preview",
        },
        admin: {
            users: "Users",
            courses: "Courses",
            branding: "Branding",
            tags: "Tags",
            ads: "Ads",
            ticketCenters: "Ticket Centers",
        },
        analytics: {
            org: "Org",
            teams: "Teams",
            trainees: "Trainees",
            courses: "Courses",
            articles: "Articles",
        },
        blog: {
            articles: "Articles",
            editor: "Editor",
        },
        social: {
            text: "Text",
            link: "Link",
            image: "Image",
            gallery: "Gallery",
            video: "Video",
        },
        help: {
            chatbot: "Chatbot",
            faq: "FAQ",
            support: "Support",
        }
    }
    //-------------------------------------------------------------------
    // Get translation of the component
    //-------------------------------------------------------------------
    let editLabel = "Edit Mode"
    let tObj = null;
    if (
        props.withTranslation?.lang &&
        props.withTranslation.lang !== "" &&
        props.withTranslation.lang !== "en"
    ) {
        tObj = getTranslation(props.withTranslation);
        editLabel = tObj?.content
        translatedPanelLinks = tObj?.translatedPanelLinks
    }

    //-------------------------------------------------------------------
    // Get the location of the section 
    //-------------------------------------------------------------------
    const panelLinks = {
        welcome: [
            {
                key: "welcome",
                name: translatedPanelLinks?.welcome,
                icon: "fas fa-handshake",
                show: true,
            },
        ],
        content: [
            {
                key: "platforms",
                name: translatedPanelLinks?.content?.library,
                icon: "fas fa-sitemap",
                show: ["SuperAdmin", "Admin", "Creator", "Manager", "Trainer"].includes(props.licenseType),
            },
            {
                key: "files",
                name: translatedPanelLinks?.content?.editor,
                icon: "fas fa-desktop",
                show: ["SuperAdmin", "Admin", "Creator", "Manager", "Trainer"].includes(props.licenseType) && !props.noCourses,
            },
            {
                key: "advanced",
                name: translatedPanelLinks?.content?.settings,
                icon: "fas fa-cogs",
                show: ["SuperAdmin", "Admin", "Creator", "Manager", "Trainer"].includes(props.licenseType) && !props.noCourses,
            },
            {
                key: "share",
                name: translatedPanelLinks?.content?.enrollment,
                icon: "fa fa-person-booth",
                show: ["SuperAdmin", "Admin", "Creator", "Manager", "Trainer"].includes(props.licenseType) && !props.noCourses,
            },
            {
                key: "preview",
                name: translatedPanelLinks?.content?.preview,
                icon: "fas fa-eye",
                show: ["SuperAdmin", "Admin", "Creator", "Manager", "Trainer"].includes(props.licenseType) && !props.noCourses && window.innerHeight > window.innerWidth,
            },
        ],
        admin: [
            { key: "users", name: translatedPanelLinks?.admin?.users, icon: "fas fa-users", show: ["SuperAdmin", "Admin",].includes(props.licenseType), },
            { key: "courses", name: translatedPanelLinks?.admin?.courses, icon: "fas fa-book", show: ["SuperAdmin", "Admin",].includes(props.licenseType), },
            {
                key: "branding",
                name: translatedPanelLinks?.admin?.branding,
                icon: "fas fa-paint-brush",
                show: ["SuperAdmin", "Admin", "Creator"].includes(props.licenseType),
            },
            { key: "tags", name: translatedPanelLinks?.admin?.tags, icon: "fas fa-tags", show: ["SuperAdmin", "Admin",].includes(props.licenseType), },
            { key: "adverts", name: translatedPanelLinks?.admin?.ads, icon: "fas fa-image", show: ["SuperAdmin", "Admin",].includes(props.licenseType), },
            { key: "tickets", name: translatedPanelLinks?.admin?.ticketCenters, icon: "fas fa-envelope-open-text", show: ["SuperAdmin", "Admin",].includes(props.licenseType), },
        ],
        analytics: [
            {
                key: "organization",
                name: translatedPanelLinks?.analytics?.org,
                icon: "fas fa-building",
                show: ["SuperAdmin", "Admin", "DataAdmin"].includes(props.licenseType),
            },
            {
                key: "users",
                name: translatedPanelLinks?.analytics?.teams,
                icon: "fa fa-users",
                show: ["SuperAdmin", "Admin", "Creator", "Manager", "Trainer"].includes(props.licenseType),
            },
            {
                key: "trainees",
                name: translatedPanelLinks?.analytics?.trainees,
                icon: "fas fa-chalkboard-teacher",
                show: ["SuperAdmin", "Admin", "Trainer"].includes(props.licenseType),
            },
            {
                key: "courses",
                name: translatedPanelLinks?.analytics?.courses,
                icon: "fas fa-book",
                show: ["SuperAdmin", "Admin", "Creator", "Manager", "Trainer"].includes(props.licenseType),
            },
            {
                key: "articles",
                name: translatedPanelLinks?.analytics?.articles,
                icon: "fas fa-newspaper",
                show: ["SuperAdmin", "Admin", "Creator", "Manager", "Trainer"].includes(props.licenseType),
            },
        ],
        blog: [
            {
                key: "articles",
                name: translatedPanelLinks?.blog?.articles,
                icon: "fas fa-newspaper",
                show: ["SuperAdmin", "Admin", "Creator"].includes(props.licenseType),
            },
            { key: "editor", name: translatedPanelLinks?.blog?.editor, icon: "fas fa-pencil-alt", show: ["SuperAdmin", "Admin", "Creator"].includes(props.licenseType), },
        ],
        social: [
            { key: "text", name: translatedPanelLinks?.social?.text, icon: "fas fa-pencil-alt", show: ["SuperAdmin", "Admin", "Creator"].includes(props.licenseType), },
            { key: "link", name: translatedPanelLinks?.social?.link, icon: "fas fa-link", show: ["SuperAdmin", "Admin", "Creator"].includes(props.licenseType), },
            { key: "image", name: translatedPanelLinks?.social?.image, icon: "fas fa-image", show: ["SuperAdmin", "Admin", "Creator"].includes(props.licenseType), },
            { key: "gallery", name: translatedPanelLinks?.social?.gallery, icon: "fas fa-images", show: ["SuperAdmin", "Admin", "Creator"].includes(props.licenseType), },
            { key: "video", name: translatedPanelLinks?.social?.video, icon: "fas fa-film", show: ["SuperAdmin", "Admin", "Creator"].includes(props.licenseType), },
        ],
        help: [
            { key: "chat", name: translatedPanelLinks?.help?.chatbot, icon: "fas fa-comment", show: true },
            { key: "faq", name: translatedPanelLinks?.help?.faq, icon: "fas fa-comments", show: true },
            { key: "ticket", name: translatedPanelLinks?.help?.support, icon: "fas fa-desktop", show: true },
        ]
    };
    function editMode() {
        return (
            <div className={`qui-side-bar-editmode-container`} style={{ backgroundColor: props.withColor?.backgroundColor }}>
                <img className="qui-side-bar-logo" src={coloredDefaultLogo} alt="" />
                <p className={`qui-side-bar-edit-mode-label`} style={{ color: props.withColor?.textColor }}>
                    {editLabel}
                </p>
                <ArcMenu position="bottom-left" menuType="close" arcIcon="close" onClick={props.onClick} />
            </div>
        )
    }
    const sidebar = (asEmphasis) => {
        if (asEmphasis === "default") {
            return (
                <div className={`qui-side-bar-default-container`}>
                    <img className="qui-side-bar-logo" src={coloredDefaultLogo} alt="" />
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

