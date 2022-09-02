// Import npm packages
import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import defaultTheme from "react-treebeard/dist/themes/default";

import {
    getQuommons,
    getTranslation,
    getAnimation,
} from "../../common/javascripts/helpers";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./TreeBar.scss";
import "../../common/stylesheets/overrule.scss";

TreeBar.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
     TreeBar pass the Page Header.
   */
    pageHeader: PropTypes.string.isRequired,
    /**
     Page Header Height.
   */
    headerHeight: PropTypes.string,

    /**
    Treebar pass tree folder structure data
    */
    content: PropTypes.shape({}).isRequired,
    //=======================================
    // Quommon props
    //=======================================

    /**
    Use to float the component in parent container
    */
    asFloated: PropTypes.oneOf(["left", "right", "none", "inline"]),

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
    Use to toggle the component taking the full width of the parent container
    */
    isFluid: PropTypes.bool,
};

TreeBar.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    pageHeader: "Explore",
    headerHeight: "80px",
    //=======================================
    // Quommon props
    //=======================================
    asFloated: "none",
    withTranslation: null,
    isHidden: false,
    isDisabled: false,
    isFluid: false,
};

/**
## Notes
- The design system used for this component is Material UI (@mui/material)
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- MUI props are not being passed to the button. Please speak to the admin to handle any new MUI prop.
**/
export default function TreeBar(props) {
    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "treebar");

    //-------------------------------------------------------------------
    // 2. Get translation of the component
    //-------------------------------------------------------------------
    let pageHeaderTitle = props.pageHeader;
    let tObj = null;
    if (
        props.withTranslation?.lang &&
        props.withTranslation.lang !== "" &&
        props.withTranslation.lang !== "en"
    ) {
        tObj = getTranslation(props.withTranslation, "TreeBar");
    }
    if (tObj && props.pageHeader) {
        pageHeaderTitle = tObj.pageHeader;
    }

    //-------------------------------------------------------------------
    // 3. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props);

    //-------------------------------------------------------------------
    // 4. Treebeard default style
    //-------------------------------------------------------------------
    defaultTheme.tree.node.link = {
        ...defaultTheme.tree.node.link,
        color: "#454545",
        background: "#F5F5F5",
        width: "100%",
    };

    defaultTheme.tree.node.activeLink = {
        ...defaultTheme.tree.node.activeLink,
        color: "#454545",
        background: "#dddddd",
        width: "100%",
    };

    defaultTheme.tree.node.subtree = {
        ...defaultTheme.tree.node.subtree,
        width: "100%",
        paddingLeft: "1em",
    };

    defaultTheme.tree.node.base = {
        ...defaultTheme.tree.node.base,
        width: "100%",
        backgroundColor: "#e8e8e8",
        margin: "0.1em 0",
    };

    // ========================= Render Function =================================
    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui ${quommonClasses.parentClasses} qui-treebar-parent`}
        >
            <div
                className={quommonClasses.childClasses}
                style={{ height: "100%" }}
            >
                {props.pageHeader && (
                    <div
                        className="qui-treebar-pageheader secfont"
                        style={{ height: props.headerHeight }}
                    >
                        {pageHeaderTitle}
                    </div>
                )}
                <div className="qui-treebar-canvas">
                    <div className="qui-treebar-active-area">
                        {props.children}
                    </div>
                    <div className="qui-treebar-closed-list">
                        {_.map(props.sections, (section, idx) => {
                            return <div>{section.name}</div>;
                        })}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
