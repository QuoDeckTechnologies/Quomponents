// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { getQuommons } from "../../common/javascripts/helpers";
import Segment from "../Segment/Segment.react"
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./StatisticsCard.scss";
import "../../common/stylesheets/overrule.scss";

StatisticsCard.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    Use to below fields to decide StatisticsCard's properties
    */
    value: PropTypes.string,
    /**
    Use for rounded corners
    */
    isCircular: PropTypes.bool,
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
        size: PropTypes.string,
        position: PropTypes.oneOf(["left", "right"]),
    }),
    /**
    Use to add a heading label, a footer caption or a title popover to the component
    */
    withLabel: PropTypes.shape({
        content: PropTypes.string,
    }),
    /**
    Use to show/hide the component
    */
    isHidden: PropTypes.bool,
};

StatisticsCard.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    value: null,
    isCircular: true,
    //=======================================
    // Quommon props
    //=======================================
    asVariant: "primary",
    asPadded: "normal",
    asFloated: "none",
    asAligned: "center",

    withIcon: null,
    withLabel: null,
    withColor: null,

    isHidden: false,
};
function getColors(colors) {
    let colorStyle = {
        backgroundColors: {
            backgroundColor: colors.backgroundColor,
        },
        textColors: {
            color: colors.textColor,
        },
        accentColors: {
            color: colors.accentColor,
        },
    };
    return colorStyle;
}
/**
## Notes
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function StatisticsCard(props) {
    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "statistics-card");
    if (props.isCircular) quommonClasses.parentClasses += ` is-circular`;
    //-------------------------------------------------------------------
    // 2. Set the component colors
    //-------------------------------------------------------------------
    let colors = props.withColor ? getColors(props.withColor) : {};

    // ========================= Render Function =================================

    return (
        <div
            className={`qui ${quommonClasses.parentClasses}`}
        >
            <Segment {...props} className={`${quommonClasses.childClasses}`} style={colors?.backgroundColors}
            >
                <>
                    {props.withIcon?.icon && <i className={`qui-icon qui-statistics-card-icon ${props.withIcon?.icon}`}
                        style={colors?.accentColors}>
                    </i>}
                    <div className="qui-statistics-card-valuetooltip">
                        <h4 className={"qui-statistics-card-value"} style={colors?.textColors}>
                            {props.value}
                        </h4>
                        <span className="qui-statistics-card-tooltipvalue">{props.value}</span>
                    </div>
                    <div className="qui-statistics-card-labeltooltip">
                        <h6 className={"qui-statistics-card-label"} style={colors?.textColors}>
                            {props.withLabel?.content}
                        </h6>
                        <span className="qui-statistics-card-tooltiplabel">{props.withLabel?.content}</span>
                    </div>
                </>
            </Segment>
        </div>
    );
}
