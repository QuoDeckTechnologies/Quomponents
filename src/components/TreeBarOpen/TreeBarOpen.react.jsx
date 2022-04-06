// Import npm packages
import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Treebeard, decorators } from "react-treebeard";
import defaultTheme from "react-treebeard/dist/themes/default";

import {
    getQuommons,
    getTranslation,
    getAnimation,
} from "../../common/javascripts/helpers";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./TreeBarOpen.scss";
import "../../common/stylesheets/overrule.scss";

import SearchBar from "../SearchBar/SearchBar.react";

TreeItem.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
     TreeBar pass the Page Header.
   */
    pageHeader: PropTypes.string.isRequired,

    /**
    Treebar pass tree folder structure data
    */
    content: PropTypes.shape({}),

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

    /**
    Button component must have the onClick function passed as props
    */
    onClick: PropTypes.func.isRequired,
};

TreeItem.defaultProps = {
    // Component Specific props
    //=======================================
    pageHeader: "Page Header",
    content: {},

    // Quommon props
    //=======================================

    asFloated: "none",

    withTranslation: null,

    isHidden: false,
    isDisabled: false,
    isFluid: false,
};

decorators.Header = ({ node }) => {
    const iconType = node?.children ? "far fa-folder" : "fas fa-bullseye";
    return (
        <div className={node?.children ? node?.active ? "qui-treebar-activeHeaderStyle" : "qui-treebar-headerStyle" : "qui-treebar-headerStyle-child"}>
            <div className={node?.active ? "qui-treebar-activeTitleStyle" : "qui-treebar-titleStyle"}>
                <i className={`${iconType} qui-treebar-iconStyle`}></i>
                {node?.name}
            </div>
        </div>
    );
};


/**
## Notes
- The design system used for this component is Material UI (@mui/material)
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- MUI props are not being passed to the button. Please speak to the admin to handle any new MUI prop.
**/
export default function TreeItem(props) {
    const [cursor, setCursor] = useState(props.content.TreeData);
    const [folderStructure, setfolderStructure] = useState(props.content.TreeData);
    //-------------------------------------------------------------------
    // Search the specific data
    //-------------------------------------------------------------------
    const startSearch = (inputData) => {
        let filter = inputData ? inputData : "";
        if (!filter) {
            return setfolderStructure(props.content.TreeData);
        }
        let filtered = filterTree(props.content.TreeData, filter);
        filtered = expandFilteredNodes(filtered, filter);
        setfolderStructure(filtered);
    };

    //-------------------------------------------------------------------
    // Treebar toggle selected node
    //-------------------------------------------------------------------
    const onToggle = (node, toggled) => {
        if (cursor) {
            cursor.active = false;
        }
        node.active = true;
        if (node.children) {
            node.toggled = toggled;
        }
        setCursor(Object.assign({}, cursor))
        props.onSelectData(node);
    };

    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "treebar");

    //-------------------------------------------------------------------
    // 2. Get translation of the component
    //-------------------------------------------------------------------
    let pageHeaderTitle = props.pageHeader;
    let tObj = null
    if (
        props.withTranslation?.lang &&
        props.withTranslation.lang !== "" &&
        props.withTranslation.lang !== "en"
    ) {
        tObj = getTranslation(props.withTranslation);
    }
    if (tObj && props.pageHeader) {
        pageHeaderTitle = tObj.pageHeader;
    }

    //-------------------------------------------------------------------
    // 3. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);

    //-------------------------------------------------------------------
    // 4. Treebeard default style
    //-------------------------------------------------------------------
    defaultTheme.tree.node.link = {
        ...defaultTheme.tree.node.link,
        color: "#454545",
        background: "#F5F5F5",
        width: "100%"
    };

    defaultTheme.tree.node.activeLink = {
        ...defaultTheme.tree.node.activeLink,
        color: "#454545",
        background: "#dddddd",
        width: "100%"
    };

    defaultTheme.tree.node.subtree = {
        ...defaultTheme.tree.node.subtree,
        width: "100%",
        paddingLeft: "1em"
    };

    defaultTheme.tree.node.base = {
        ...defaultTheme.tree.node.base,
        width: "100%",
        backgroundColor: "#fffff",
        margin: "0.1em 0",
        right: "0.7em",
    };

    // ========================= Render Function =================================
    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui ${quommonClasses.parentClasses} qui-treebar-parent`}
        >
            <div className={quommonClasses.childClasses}>
                {props.pageHeader && (
                    <div className="qui-treebar-pageheader">
                        {pageHeaderTitle}
                    </div>
                )}
                <div className="qui-treebar-searchbar">
                    <SearchBar
                        {...props.content.props}
                        onClick={startSearch}
                    />
                </div>
                {props.content.TreeData && (
                    <div>
                        <div className={`qui-treebar-container`}>
                            <div className="qui-treebar-content">
                                <Treebeard
                                    data={folderStructure}
                                    decorators={decorators}
                                    onToggle={onToggle}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    );
}
// -------------------------------------------------
// Helper functions for filtering tree
// -------------------------------------------------

export const defaultMatcher = (filterText, node) => {
    return node.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1;
};

export const findNode = (node, filter, matcher) => {
    return (
        matcher(filter, node) || // i match
        (node.children && // or i have decendents and one of them match
            node.children.length &&
            !!node.children.find((child) => findNode(child, filter, matcher)))
    );
};

export const filterTree = (node, filter, matcher = defaultMatcher) => {
    // If im an exact match then all my children get to stay
    if (matcher(filter, node) || !node.children) {
        return node;
    }
    // If not then only keep the ones that match or have matching descendants
    const filtered = node.children
        .filter((child) => findNode(child, filter, matcher))
        .map((child) => filterTree(child, filter, matcher));
    return Object.assign({}, node, { children: filtered });
};

export const expandFilteredNodes = (node, filter, matcher = defaultMatcher) => {
    let children = node.children;
    if (!children || children.length === 0) {
        return Object.assign({}, node, { toggled: false });
    }
    const childrenWithMatches = node.children.filter((child) =>
        findNode(child, filter, matcher)
    );
    const shouldExpand = childrenWithMatches.length > 0;
    // If im going to expand, go through all the matches and see if thier children need to expand
    if (shouldExpand) {
        children = childrenWithMatches.map((child) => {
            return expandFilteredNodes(child, filter, matcher);
        });
    }
    return Object.assign({}, node, {
        children: children,
        toggled: shouldExpand,
    });
};
