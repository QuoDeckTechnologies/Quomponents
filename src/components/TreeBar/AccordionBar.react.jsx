// Import npm packages
import React, { useState } from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Tree from "@naisutech/react-tree";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Chip from "@mui/material/Chip";

import {
    getQuommons,
    getTranslation,
    getAnimation,
} from "../../common/javascripts/helpers";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./AccordionBar.scss";
import "../../common/stylesheets/overrule.scss";

import Button from "../Buttons/Button/Button.react";
import SearchBar from "../SearchBar/SearchBar.react";

AccordionBar.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
     AccordionBar pass the Page Header.
   */
    pageHeader: PropTypes.string.isRequired,
    /**
     Page Header Height.
   */
    headerHeight: PropTypes.string,

    /**
    Treebar pass tree folder structure data
    */
    treeData: PropTypes.array.isRequired,
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

AccordionBar.defaultProps = {
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
export default function AccordionBar(props) {
    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "accordionbar");

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
        tObj = getTranslation(props.withTranslation, "AccordionBar");
    }
    if (tObj && props.pageHeader) {
        pageHeaderTitle = tObj.pageHeader;
    }

    //-------------------------------------------------------------------
    // 3. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props);

    //-------------------------------------------------------------------
    // 4. Search the specific data
    //-------------------------------------------------------------------
    const [folderStructure, setfolderStructure] = useState(props.treeData);

    const startSearch = (inputData) => {
        let filter = inputData ? inputData : "";
        if (!filter) {
            return setfolderStructure(props.treeData);
        }
        let filtered = filterTree(
            { label: "Results", items: props.treeData },
            filter
        );
        filtered = expandFilteredNodes(filtered, filter);
        setfolderStructure(filtered?.items);
    };

    let selected = _.filter(props.sections, { selected: true })[0];
    let inactives = _.filter(props.sections, {
        selected: false,
        active: false,
    });
    let actives = _.filter(props.sections, { selected: false, active: true });
    const btnAreaHt = (actives.length + inactives.length) * 40;
    const treeCanvasStyle = {
        height: `calc(100vh - ${btnAreaHt + 180}px)`,
    };

    // ========================= Render Function =================================
    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui ${quommonClasses.parentClasses} qui-accordionbar-parent`}
        >
            <div
                className={quommonClasses.childClasses}
                style={{ height: "100%", width: "100%" }}
            >
                {props.pageHeader && (
                    <div
                        className="qui-accordionbar-pageheader secfont"
                        style={{ height: props.headerHeight, width: "100%" }}
                    >
                        {pageHeaderTitle}
                        {props.createBtn && (
                            <Button
                                url={props.createBtn}
                                asSize="large"
                                isCircular
                                float-right
                                withIcon={{
                                    icon: "fas fa-plus",
                                    size: "1em",
                                    position: "left",
                                }}
                            />
                        )}
                    </div>
                )}
                <div className="qui-accordionbar-active-area">
                    <ListItem className="qui-selected-list-item" button divider>
                        <ListItemText primary={selected.name} />
                    </ListItem>
                    <div className="qui-accordionbar-canvas">
                        <div className="qui-accordionbar-searchbar">
                            <SearchBar float-none onClick={startSearch} />
                        </div>
                        <div className="qui-accordionbar-tree">
                            <Tree
                                nodes={folderStructure}
                                onOpenClose={props.onOpenClose}
                                onSelect={props.onSelect}
                                theme="light"
                                grow
                                size="full"
                                animations
                                containerStyle={treeCanvasStyle}
                            >
                                {(controls) => {
                                    return (
                                        <button
                                            className={
                                                "qui-accordionbar-expand-btn"
                                            }
                                            onClick={
                                                controls.toggleOpenCloseAllNodes
                                            }
                                        >
                                            Expand/Collapse All
                                        </button>
                                    );
                                }}
                            </Tree>
                        </div>
                    </div>
                </div>
                <div className="qui-accordionbar-button-area">
                    <List
                        dense
                        component="nav"
                        aria-label="QuoDeck Sections"
                        className="qui-accordionbar-closed-list"
                    >
                        {_.map(actives, (section, idx) => {
                            return (
                                <ListItem
                                    component="a"
                                    href={section.link}
                                    className="qui-active-list-item"
                                    key={`qui-active-list-item-${idx}`}
                                    button
                                    divider
                                >
                                    <ListItemText primary={section.name} />
                                </ListItem>
                            );
                        })}
                        {_.map(inactives, (section, idx) => {
                            return (
                                <ListItem
                                    component="a"
                                    href={props.inactiveLink}
                                    className="qui-inactive-list-item"
                                    key={`qui-inactive-list-item-${idx}`}
                                    button
                                    divider
                                >
                                    <ListItemText primary={section.name} />
                                    {_.keys(section.chip).length > 0 && (
                                        <Chip
                                            label={section.chip?.name}
                                            className={`qui-section-chip secfont`}
                                            style={{
                                                background: section.chip?.bg,
                                                color: section.chip?.color,
                                            }}
                                        />
                                    )}
                                </ListItem>
                            );
                        })}
                    </List>
                </div>
            </div>
        </motion.div>
    );
}

// -------------------------------------------------
// Helper functions for filtering tree
// -------------------------------------------------

export const defaultMatcher = (filterText, node) => {
    return node.label.toLowerCase().indexOf(filterText.toLowerCase()) !== -1;
};

export const findNode = (node, filter, matcher) => {
    return (
        matcher(filter, node) || // i match
        (node.items && // or i have decendents and one of them match
            node.items.length &&
            !!node.items.find((child) => findNode(child, filter, matcher)))
    );
};

export const filterTree = (node, filter, matcher = defaultMatcher) => {
    // If im an exact match then all my children get to stay
    if (matcher(filter, node) || !node.items) {
        return node;
    }
    // If not then only keep the ones that match or have matching descendants
    const filtered = node.items
        .filter((child) => findNode(child, filter, matcher))
        .map((child) => filterTree(child, filter, matcher));
    return Object.assign({}, node, { children: filtered });
};

export const expandFilteredNodes = (node, filter, matcher = defaultMatcher) => {
    let children = node.items;
    const childrenWithMatches = node.items?.filter((child) =>
        findNode(child, filter, matcher)
    );
    const shouldExpand = childrenWithMatches?.length > 0;
    // If im going to expand, go through all the matches and see if thier children need to expand
    if (shouldExpand) {
        children = childrenWithMatches.map((child) => {
            return expandFilteredNodes(child, filter, matcher);
        });
    }
    if (!children || children?.length === 0) {
        return Object.assign({}, node, { toggled: false });
    }
    return Object.assign({}, node, {
        items: children,
        toggled: shouldExpand,
    });
};
