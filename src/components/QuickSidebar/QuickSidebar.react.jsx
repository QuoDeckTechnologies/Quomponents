// Import npm packages
import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { getQuommons, getAnimation } from "../../common/javascripts/helpers.js";
import _ from "lodash";
import 'semantic-ui-css/semantic.min.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./QuickSidebar.scss";
import "../../common/stylesheets/overrule.scss";
import QuickLinkIcon from "../QuickLinkIcon/QuickLinkIcon.react"
import { Image, Popup } from "semantic-ui-react";

QuickSidebar.propTypes = {
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
            url: PropTypes.string,
            onClick: PropTypes.func,
        })
    ),
    /**
    Use to define width of the QuickSidebar
    */
    width: PropTypes.string,
    /**
    Use to define page title on the QuickSidebar
    */
    pageTitle: PropTypes.string,
    /**
    Use to define the text for edit mode on the QuickSidebar
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

QuickSidebar.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    width: "80px",
    editMode: {
        active: false,
        label: "Edit Mode",
        onClick: () => true,
    },
    //=======================================
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
- QuickSidebar shows content according to the license type of the user
**/
export default function QuickSidebar(props) {
    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "quick-sidebar");

    //-------------------------------------------------------------------
    // 2. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props);

    const [active, setActive] = useState(props.active)

    const handleClick = (link) => {
        props.setActivePanel(link.key)
        setActive(link.key)
    }

    let logoQ = {
        width: "64px",
        height: "64px",
        background: "#666666",
        cursor: "pointer",
    };
    let dockIcon = {
        fontSize: "0.75em",
        textAlign: "center",
        borderBottom: "1px solid #f5f5f5",
        cursor: "pointer",
        position: "relative",
    };
    let arrowRight = {
        position: "absolute",
        right: "-6px",
        top: "50%",
        transform: "translate(0,-50%)",
        width: "0",
        height: "0",
        borderTop: "12px solid transparent",
        borderBottom: "12px solid transparent",
        zindex: "10",
    };
    let pageTitleStyle = {
        position: "absolute",
        bottom: "25px",
        left: "24px",
        whiteSpace: "nowrap",
        fontSize: "24px",
        writingMode: "vertical-lr",
        transform: "rotate(180deg)",
        color: "#666666",
        textTransform: "uppercase",
    };

    return (
        <motion.div
            initial={animate?.from}
            animate={animate?.to}
            className={`qui ${quommonClasses.parentClasses}`}
        >
            <div className="qui-quick-sidebar-main-container">
                <div style={logoQ} onClick={props.goToHome}>
                    <Image src={props.logo} />
                </div>
                <div>
                    {_.map(
                        _.filter(
                            props.panelLinks[props.location],
                            (l) => l.show
                        ),
                        (link, idx) => {
                            return (
                                <Popup
                                    key={`panellink-${idx}`}
                                    trigger={
                                        <div
                                            style={
                                                props.active === link.key
                                                    ? {
                                                        ...dockIcon,
                                                        background:
                                                            link.color,
                                                    }
                                                    : dockIcon
                                            }
                                            onClick={() =>
                                                props.active ===
                                                    link.key
                                                    ? null
                                                    : handleClick(link)
                                            }
                                        >
                                            <QuickLinkIcon
                                                icon={link.icon}
                                                size="big"
                                                asPadded="normal"
                                                label=""
                                                disabled={
                                                    props.active ===
                                                    "editor" &&
                                                    link.key !== "editor"
                                                }
                                                color={
                                                    props.active ===
                                                        link.key
                                                        ? "#000000"
                                                        : "#666666"
                                                }
                                                hoverColor={
                                                    props.active ===
                                                        link.key
                                                        ? "#121212"
                                                        : "#000000"
                                                }

                                            />
                                            {active === link.key && (
                                                <div
                                                    style={{
                                                        ...arrowRight,
                                                        borderLeft:
                                                            "6px solid " +
                                                            link.color,
                                                    }}
                                                />
                                            )}
                                        </div>
                                    }
                                    position="right center"
                                    positionFixed
                                    inverted
                                >
                                    <Popup.Header>{link?.name}</Popup.Header>
                                    <Popup.Content>
                                        {link.description}
                                    </Popup.Content>
                                </Popup>
                            );
                        }
                    )}
                </div>
                <div style={pageTitleStyle}>
                    {props.location.toUpperCase()}
                </div>
            </div>
        </motion.div>
    );
}
