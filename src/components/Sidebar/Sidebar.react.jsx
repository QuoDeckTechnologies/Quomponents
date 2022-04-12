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
import "./Sidebar.scss";
import "../../common/stylesheets/overrule.scss";

import IconLink from "../Buttons/IconLink/IconLink.react";
import ArcMenu from "../ArcMenu/ArcMenu.react"

import defaultImage from "../../assets/default.jpeg";

Sidebar.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    Use to define section content and logo
    */
    asEmphasis: PropTypes.oneOf(["editMode", "default"]),
    /**
    Use to define section content and logo
    */
    content: PropTypes.shape({
        image: PropTypes.string,
        sections: PropTypes.shape({
            link: PropTypes.string,
            name: PropTypes.string,
            icon: PropTypes.string,
            show: PropTypes.array
        })
    }).isRequired,

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
    Use to align content within the component container
    */
    asAligned: PropTypes.oneOf(["left", "right", "center"]),

    /**
    Use to override component colors and behavior
    */
    withColor: PropTypes.shape({
        backgroundColor: PropTypes.string,
        accentColor: PropTypes.string,
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
    asEmphasis: "default",
    content: null,

    // Quommon props
    //=======================================
    asVariant: "primary",
    asSize: "normal",
    asFloated: "inline",
    asAligned: "center",

    withColor: null,
    withIcon: null,
    withAnimation: null,

    isHidden: false,
    isDisabled: false,

    onClick: null
};

/**
## Notes
- The design system used for this component is Material UI (@mui/material)
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- Action Button has 2 phases, with button and with image. Pass props according to your convenience
- isEllipse is a prop to add ellipse background or not.
**/
export default function Sidebar(props) {

    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "side-bar");

    //-------------------------------------------------------------------
    // 2. Set the Logo Image
    //-------------------------------------------------------------------
    let logo = props.content?.image ? props.content?.image : defaultImage;

    const [isActive, setActive] = useState(false)
    const [state, setState] = useState("https://quodeck.com/")
    //-------------------------------------------------------------------
    // 3. Conditional Styling
    //-------------------------------------------------------------------
    function handleSection(section) {
        setActive(prevState => !prevState)
    }

    //-------------------------------------------------------------------
    // 2. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);
    let modeColor = {
        color: props.withColor?.accentColor
    }
    let color = isActive ? "yellow" : ""
    //-------------------------------------------------------------------
    // 5. Get the Status of Component
    //-------------------------------------------------------------------
    const sidebar = (asEmphasis) => {
        if (asEmphasis === "default") {
            return (
                <div className={`qui-side-bar-default-container`}>
                    <div
                        style={{ backgroundImage: `url(${logo})` }}
                        className="qui-side-bar-logo" />
                    <div
                        className={`qui-side-bar-sections-container`}>
                        {_.map(props.content?.sections, (sections, index) => {
                            return (
                                <div
                                    className={`qui-side-bar-sections`}
                                    style={{ background: props.withColor?.backgroundColor }}
                                    onClick={() => { handleSection(sections.name) }}
                                    key={`panellink-${index}`}>
                                    <IconLink
                                        asEmphasis={sections.link === state ? "contained" : "text"}
                                        asSize="tiny"
                                        withIcon={{ icon: sections.icon }}
                                        withLabel={{ format: "caption", content: sections.name }}
                                        withColor={{ backgroundColor: props.withColor?.textColor }}
                                        onClick={() => { setState(sections.link); }}
                                    />
                                </div>

                            )
                        })}
                    </div>
                </div>
            )
        } else {
            return (<div className={`qui-side-bar-editmode-container`}>
                <div style={{ backgroundImage: `url(${logo})` }} className="qui-side-bar-logo" />
                <p className={`qui-side-bar-edit-mode-label`}>
                    EDIT MODE
                </p>
                <ArcMenu position="bottom-left" menuType="close" arcIcon="close" onClick={props.onClick} />
            </div>)

        }

    }
    return (
        <motion.div
            initial={animate?.from}
            animate={animate?.to}
            className={`qui ${quommonClasses.parentClasses}`}>
            <div className={`${quommonClasses.childClasses}`}>
                {sidebar(props.asEmphasis)}
            </div>
        </motion.div>
    );
}
