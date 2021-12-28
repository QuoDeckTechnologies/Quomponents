// Import npm packages
import React, { useState } from "react";
import PropTypes from "prop-types";
import MenuBlock from "../MenuBlock/MenuBlock.react";
import Avatar from "../Avatar/Avatar.react";
import {
    getQuommons,
    getTranslation,
    getAnimation,
} from "../../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./AppMenu.scss";
import "../../../common/stylesheets/overrule.scss";


AppMenu.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================

    /**
    AppMenu Text has to be in content or passed as children to the component. Is optional if you only want an icon.
    */
    content: PropTypes.string,
    /**
    Set action emphasis in increasing order 
    */
    asEmphasis: PropTypes.oneOf(["text", "outlined", "contained"]),
    /**
    Use for rounded corners or circular icon AppMenu 
    */
    isCircular: PropTypes.bool,

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
    Use to float the component in parent container
    */
    asFloated: PropTypes.oneOf(["left", "right", "none", "inline"]),
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
    Use to add an icon to the component
    */
    withIcon: PropTypes.shape({
        icon: PropTypes.string,
        size: PropTypes.string,
        position: PropTypes.oneOf(["left", "right"]),
    }),  /**
    Use to add an image to the component
    */
    withImage: PropTypes.shape({
        userImage: PropTypes.string,
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
    Use to toggle the component taking the full width of the parent container
    */
    isFluid: PropTypes.bool,
    /**
    Use to toggle a loading state for the component
    */
    isLoading: PropTypes.bool,

    /**
    AppMenu component must have the onClick function passed as props
    */
    onClick: PropTypes.func.isRequired,
};

AppMenu.defaultProps = {
    // Component Specific props
    //=======================================
    asEmphasis: "contained",
    isCircular: false,

    // Quommon props
    //=======================================
    asVariant: "primary",
    asSize: "normal",
    asPadded: "normal",
    asFloated: "none",
    asAligned: "center",

    withColor: null,
    withIcon: null,
    withUser: null,
    withLabel: null,
    withAnimation: null,
    withTranslation: null,

    isHidden: false,
    isDisabled: false,
    isFluid: false,
    isLoading: false,
};

export default function AppMenu(props) {
    const [hovered, setHovered] = useState(false);

    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props);
    if (props.isCircular)
        quommonClasses.childClasses += ` is-circular ${props.content === "" && props.withIcon ? "is-only-icon" : ""
            }`;

    quommonClasses.childClasses += ` emp-${props.asEmphasis}`;
  
    //-------------------------------------------------------------------
    // 3. Set the AppMenu text
    //-------------------------------------------------------------------
    let AppMenuText = props.content
        ? props.content
        : props.children
            ? props.children
            : "";
    let iconOnly = AppMenuText === "";

    //-------------------------------------------------------------------
    // 4. Set the label/caption/popover and loading text
    //-------------------------------------------------------------------
    let labelContent = Object.assign({}, props.withLabel);
    let labelStyle = labelContent?.textColor
        ? { color: labelContent.textColor }
        : {};
    let loadingText = "Please Wait...";

    //-------------------------------------------------------------------
    // 5. Translate the text objects in case their is a dictionary provided
    //-------------------------------------------------------------------
    if (
        props.withTranslation?.lang &&
        props.withTranslation.lang !== "" &&
        props.withTranslation.lang !== "en"
    ) {
        let tObj = getTranslation(props.withTranslation);
        if (tObj && props.content && props.content !== "") {
            AppMenuText = tObj.text;
        }
        if (labelContent && tObj?.label) labelContent.content = tObj.label;
        loadingText = getTranslation(props.withTranslation, "loading");
    }

    //-------------------------------------------------------------------
    // 6. Provide loading text if loading is clicked
    //-------------------------------------------------------------------
    AppMenuText = props.isLoading ? loadingText : AppMenuText;
    labelContent = props.isLoading ? "" : labelContent;

    //-------------------------------------------------------------------
    // 7. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);


    // ========================= Render Function =================================


    return (
            <div className="qui-container">
                 <div className="qui-avtarImage">
                    <Avatar {...props}/>
                </div>
                <MenuBlock {...props}/>
               
            </div>
    );
     
}
