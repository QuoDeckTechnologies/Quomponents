import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import {
    getQuommons,
    getTranslation,
    getAnimation,
} from "../../../common/javascripts/helpers";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./Loader.scss";
import "../../../common/stylesheets/overrule.scss";

Loader.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================

    //=======================================
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
    Use to define component text size in increasing order
    */
    asSize: PropTypes.oneOf([
        "tiny",
        "small",
        "normal",
        "big",
        "huge",
        "massive",
    ]),
    /**
    Use to define component padding in increasing order
    */
    asPadded: PropTypes.oneOf(["fitted", "compact", "normal", "relaxed"]),
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
    }),
    /**
    Use to add the spinning icon to the component
    Icon Options: https://fontawesome.com/v5.15/icons?d=gallery&p=2&c=spinners&m=free
    */
    withIcon: PropTypes.shape({
        icon: PropTypes.string,
        size: PropTypes.string,
    }),
    /**
    Use to add a heading label, a footer caption or a title popover to the component
    */
    withLabel: PropTypes.shape({
        format: PropTypes.oneOf(["label", "caption"]),
        header: PropTypes.string,
        content: PropTypes.arrayOf(PropTypes.string),
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
    Use to toggle the component taking the full width of the parent container
    */
    isFluid: PropTypes.bool,
};

Loader.defaultProps = {
    // Component Specific props
    //=======================================

    // Quommon props
    //=======================================
    asVariant: "primary",
    asSize: "normal",
    asPadded: "normal",
    asAligned: "center",

    withColor: null,
    withIcon: null,
    withLabel: null,
    withAnimation: null,
    withTranslation: null,

    isHidden: false,
    isFluid: true,
};

function getBoxAccent(props) {
    return props.withColor?.accentColor && props.withColor.accentColor !== ""
        ? props.withColor.accentColor
        : `${props.asVariant}.main`;
}
function getClassAccent(props) {
    return props.withColor?.accentColor && props.withColor.accentColor !== ""
        ? "none"
        : props.asVariant;
}

function getLabel(labelObj, position, props) {
    return labelObj && labelObj.format === position ? (
        <div className={`qui-loader-label`}>
            <div className="qui-loader-header">{labelObj.header}</div>
            <Box
                sx={{
                    backgroundColor: getBoxAccent(props),
                }}
                className={`qui-loader qui-loader-dash variant-${getClassAccent(
                    props
                )}`}
            />
            <div className="qui-loader-content">{labelObj.content}</div>
        </div>
    ) : (
        <div></div>
    );
}

export default function Loader(props) {
    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props);

    //-------------------------------------------------------------------
    // 2. Set the component colors
    //-------------------------------------------------------------------
    let colors = {
        backgroundColor: props.withColor?.backgroundColor,
        color: props.withColor?.textColor,
    };

    //-------------------------------------------------------------------
    // 3. Set the loader design
    //-------------------------------------------------------------------
    let loadingIcon = props.withIcon?.icon;
    let isImageIcon = null;
    if (loadingIcon) {
        isImageIcon = /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/.test(
            loadingIcon
        );
    }
    let iconStyle = props.withIcon?.size
        ? isImageIcon
            ? { width: props.withIcon.size }
            : { fontSize: props.withIcon.size }
        : {};
    //-------------------------------------------------------------------
    // 4. Set the label/caption and loading text
    //-------------------------------------------------------------------
    let labelContent = props.withLabel
        ? Object.assign({}, props.withLabel, {
              content: _.sample(props.withLabel.content),
          })
        : null;
    let labelStyle = props.withColor?.textColor
        ? { color: props.withColor.textColor }
        : {};
    let loadingText = "Please wait...";

    //-------------------------------------------------------------------
    // 5. Translate the text objects in case their is a dictionary provided
    //-------------------------------------------------------------------
    if (
        props.withTranslation?.lang &&
        props.withTranslation.lang !== "" &&
        props.withTranslation.lang !== "en"
    ) {
        let tObj = getTranslation(props.withTranslation, "loader");
        if (labelContent && tObj?.header) labelContent.header = tObj.header;
        if (labelContent && tObj?.content)
            labelContent.content = _.sample(tObj.content);
        loadingText = getTranslation(props.withTranslation, "loading");
    }

    //-------------------------------------------------------------------
    // 6. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);
    const animateIcon = getAnimation({
        animation: "zoom",
        duration: 0.5,
        delay: 0,
    });

    // ========================= Render Function =================================

    return (
        <div className={`qui ${quommonClasses.parentClasses}`} style={colors}>
            <div className={`qui-loader-block ${quommonClasses.childClasses}`}>
                <motion.div
                    initial={animate.from}
                    animate={animate.to}
                    className="qui-label"
                    style={labelStyle}
                >
                    {getLabel(labelContent, "label", props)}
                </motion.div>

                {
                    // Set up a default loader if nothing is passed in
                    //-------------------------------------------------
                    props.withIcon == null && props.withLabel == null && (
                        <Box
                            sx={{
                                color: getBoxAccent(props),
                            }}
                        >
                            <i
                                className={`qui-loader-icon fa fa-spinner fa-spin variant-${getClassAccent(
                                    props
                                )}-text`}
                                style={iconStyle}
                            ></i>
                            <br />
                            <div
                                className={`variant-${getClassAccent(
                                    props
                                )}-text`}
                            >
                                {loadingText}
                            </div>
                        </Box>
                    )
                }

                <motion.div
                    initial={animateIcon.from}
                    animate={animateIcon.to}
                    className="qui-label"
                    style={labelStyle}
                >
                    {isImageIcon ? (
                        <img
                            className={`qui-loader-image`}
                            src={loadingIcon}
                            style={iconStyle}
                            alt="Please wait..."
                        />
                    ) : (
                        <Box
                            sx={{
                                color: getBoxAccent(props),
                            }}
                        >
                            <i
                                className={`qui-loader-icon ${
                                    props.withIcon?.icon
                                } variant-${getClassAccent(props)}-text`}
                                style={iconStyle}
                            ></i>
                        </Box>
                    )}
                </motion.div>
                <motion.div
                    initial={animate.from}
                    animate={animate.to}
                    className="qui-caption"
                    style={labelStyle}
                >
                    {getLabel(labelContent, "caption", props)}
                </motion.div>
            </div>
            <Box
                sx={{
                    backgroundColor: getBoxAccent(props),
                }}
                className={`qui-loader qui-loader-slash variant-${getClassAccent(
                    props
                )}`}
            />
        </div>
    );
}
