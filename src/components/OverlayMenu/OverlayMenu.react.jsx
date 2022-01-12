import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
    getQuommons,
    getAnimation,
    getTranslation,
} from "../../common/javascripts/helpers";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./OverlayMenu.scss";
import "../../common/stylesheets/overrule.scss";
import Avatar from "../AppMenu/Avatar/Avatar.react"
import IconLink from "../Buttons/IconLink/IconLink.react"
import _ from "lodash";


OverlayMenu.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================

    /**
    Use to define component user image
    */
    withUser: PropTypes.string,

    content: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.string,
            label: PropTypes.string,
            link: PropTypes.string,
        })
    ).isRequired,
    /**
    Set action emphasis in increasing order 
    */
    asEmphasis: PropTypes.oneOf(["text", "outlined", "contained"]),
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
    Use to float the component in parent container
    */
    asFloated: PropTypes.oneOf(["left", "right", "none", "inline"]),
    /**
    Use to override component colors and behavior
    */
    withColor: PropTypes.shape({
        backgroundColor: PropTypes.string,
        accentColor: PropTypes.string,
        textColor: PropTypes.string,
    }),
    /**
    Use to add an icon to the component
    */
    withIcon: PropTypes.shape({
        icon: PropTypes.string,
    }),
    /**
    Use to add a heading label, a footer caption or a title popover to the component
    */
    withLabel: PropTypes.shape({
        format: PropTypes.oneOf(["label", "caption", "popover"]),
        content: PropTypes.string,
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
    OverlayMenu component must have the onClick function passed as props
    */
    onClick: PropTypes.func.isRequired,
};

OverlayMenu.defaultProps = {

    content: [],
    withUser: "",
    //=======================================
    // Component Specific props
    //=======================================
    asEmphasis: "text",
    //=======================================
    // Quommon props
    //=======================================
    asVariant: "primary",
    asSize: "normal",
    asFloated: "none",

    withColor: null,
    withIcon: null,
    withAnimation: null,
    withTranslation: null,

    isHidden: false,
    isDisabled: false,
};

function getLabel(labelObj, position) {
    return labelObj?.format === position ? labelObj.content : "";
}
/**
## Notes
- The design system used for this component is fontawesome Icons
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- props are not being passed to the OverlayMenu. Please speak to the admin to handle any new prop.
**/
export default function OverlayMenu(props) {

    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props);
    // quommonClasses.childClasses += ` emp-${props.asEmphasis}`;
    quommonClasses.childClasses += ` emp-contained`;


    //-------------------------------------------------------------------
    // 4. Set the label/caption/popover and loading text
    //-------------------------------------------------------------------
    let labelContent = Object.assign({}, props.withLabel);
    let labelStyle = labelContent?.textColor
        ? { color: labelContent.textColor }
        : {};
    let tObj = getTranslation(props.withTranslation);
    if (
        props.withTranslation?.lang &&
        props.withTranslation.lang !== "" &&
        props.withTranslation.lang !== "en"
    ) {
        tObj = getTranslation(props.withTranslation);
        if (labelContent && tObj?.label) labelContent.content = tObj.label;
    }
    //-------------------------------------------------------------------
    // 1. Set the color
    //-------------------------------------------------------------------
    let colors = {
        backgroundColor: props.withColor?.accentColor,
    }
    //-------------------------------------------------------------------
    // 4. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);
    //-------------------------------------------------------------------
    // 3. Destructure content prop to itirate
    //-------------------------------------------------------------------
    let { content } = props;
    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui ${quommonClasses.parentClasses}`}
        >
            <div className="qui-card">
                <div className={"av-contain"} style={colors}>
                    <i className={`fa fa-times cross-icon   `} onClick={props.onClick} />
                    <div className={`qui-contain qui-profileContainer float-${props.asFloated}`}>
                        <div className={`qui-profileAvatar  `}>
                            <Avatar {...props} withUser={props.withUser} />
                            <div className={`qui-profileCaption size-${props.asSize}`} style={labelStyle}>
                                {getLabel(labelContent, "caption")}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`lower-div`}>
                    {_.map(content, (icon) => {
                        return (
                            <div className={`qui-btn qui-inner-button variant-${props.asVariant}`}>
                                <IconLink
                                    {...props}
                                    withIcon={{ icon: icon.icon }}
                                    withLabel={{ content: icon.label, format: icon.format }}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
};
