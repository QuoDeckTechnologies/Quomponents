// Import npm packages
import React, { useState } from "react";
import PropTypes from "prop-types";
import {
    getQuommons
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
    mode: PropTypes.oneOf(["editMode", "default"]),
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
    Use to define component padding in increasing order
    */
    asPadded: PropTypes.oneOf(["fitted", "compact", "normal", "relaxed"]),
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
    mode: "default",
    content: null,

    // Quommon props
    //=======================================
    asVariant: "primary",
    asSize: "normal",
    asPadded: "normal",
    asFloated: "inline",
    asAligned: "center",

    withColor: null,
    withIcon: null,

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
    //-------------------------------------------------------------------
    // 3. Conditional Styling
    //-------------------------------------------------------------------
    function handleSection(section) {
        setActive(prevState => !prevState)
    }

    let color = isActive ? "yellow" : ""
    //-------------------------------------------------------------------
    // 5. Get the Status of Component
    //-------------------------------------------------------------------
    const sidebar = (mode) => {
        if (mode === "default") {
            return (
                <div className={`qui-side-bar-default-container`}>
                    <div style={{ backgroundImage: `url(${logo})` }} className="qui-side-bar-logo" />
                    <div className={`qui-side-bar-sections-container`}>
                        {_.map(props.content?.sections, (sections, index) => {
                            return (
                                <div className={`qui-side-bar-sections`} style={{ zIndex: 1 }} onClick={() => { handleSection(sections.name) }}
                                    key={`panellink-${index}`}>
                                    <IconLink asSize="tiny" withIcon={{ icon: sections.icon }} withLabel={{ format: "caption", content: sections.name }}
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
                <div className={`qui-side-bar-edit-mode-sections-container`}>
                {/* <div className={`qui-side-bar-edit-mode-arc-menu`}>
                        <ArcMenu type="menu" />
                    </div> */}
                    <div className={`qui-side-bar-edit-mode-label`}>
                        EDIT MODE
                    </div>
                </div>
            </div>)

        }

    }
    return (
        <div
            className={`qui ${quommonClasses.parentClasses}`}>
            <div className={`${quommonClasses.childClasses}`}>
                {sidebar(props.mode)}
            </div>
        </div>
    );
}
