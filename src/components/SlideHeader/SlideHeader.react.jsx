import React from "react";
import PropTypes from "prop-types";
import { getQuommons } from "../../common/javascripts/helpers";
import "../../common/stylesheets/common.css";
import "./SlideHeader.scss";
import "../../common/stylesheets/overrule.scss";

SlideHeader.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    Use to define title and subtitle in SliderHeader
    */
    title: PropTypes.string,
    subtitle: PropTypes.string,
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
    Use to set Color 
    */
    withColor: PropTypes.shape({
        textColor: PropTypes.string,
        accentColor: PropTypes.string,
        backgroundColor: PropTypes.string,
    }),
    /**
    Use to show/hide the component
    */
    isHidden: PropTypes.bool,
};

SlideHeader.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    title: "",
    subtitle: "",
    //=======================================
    // Quommon props
    //=======================================
    asVariant: "primary",
    asPadded: "normal",
    asFloated: "none",
    asAligned: "center",

    withColor: null,

    isHidden: false,
};
/**
## Notes
- The design system used for this component is HTML and CSS
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function SlideHeader(props) {
    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "slide-header");
    quommonClasses.childClasses += ` variant-${props.asVariant}-text`;
    //-------------------------------------------------------------------
    // 2. Use to set title and subtitle in SliderHeader
    //-------------------------------------------------------------------
    let title = props.title;
    let subtitle = props.subtitle;
    //-------------------------------------------------------------------
    // 3. Use to set Color in SliderHeader
    //-------------------------------------------------------------------
    let Color = {
        backgroundColor: props.withColor?.backgroundColor,
        color: props.withColor?.textColor,
        borderBottomColor: `${props.withColor?.accentColor}`,
    };
    // ========================= Render Function =================================
    return (
        <div className={`qui ${quommonClasses.parentClasses}`}>
            <div
                className={`qui-title-block ${quommonClasses.childClasses}`}
                style={Color}
            >
                <h4 className="qui-title" >
                    {title}
                </h4>
                <h6 className="qui-sub-title">
                    {subtitle}
                </h6>
            </div>
        </div>
    );
}

