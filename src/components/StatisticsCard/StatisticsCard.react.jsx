// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { getQuommons, getAnimation } from "../../common/javascripts/helpers";
import Segment from "../Segment/Segment.react"
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./StatisticsCard.scss";
import "../../common/stylesheets/overrule.scss";
import { tooltipClasses } from "@mui/material";

StatisticsCard.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    StatisticsCard can recieve content as props
    */
    content: PropTypes.shape({
        label: PropTypes.string,
        icon:PropTypes.string,
        value:PropTypes.string,
    }).isRequired,
    /**
    Use for rounded corners
    */
    isCircular: PropTypes.bool,
    //=======================================
    // Quommon props
    //=======================================
    /**
    Use to define component padding in increasing order
    */
    asPadded: PropTypes.oneOf(["fitted", "compact", "normal", "relaxed"]),
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

StatisticsCard.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    //   content: <></>,
    isCircular: true,
    //=======================================
    // Quommon props
    //=======================================
    asPadded: "normal",
    asFloated: "none",
    withColor: null,
    withAnimation: null,
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
    const { content } = props;
    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "statistics-card");
    if (props.isCircular) quommonClasses.parentClasses += ` is-circular`;
    //-------------------------------------------------------------------
    // 2. Set the component colors
    //-------------------------------------------------------------------
    let colors = props.withColor ? getColors(props.withColor) : {};
    //-------------------------------------------------------------------
    // 3. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);

    // ========================= Render Function =================================

    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui ${quommonClasses.parentClasses}`}
        >
            <Segment {...props} className={`qui-statistics-card-container ${quommonClasses.childClasses}`} style={colors?.backgroundColors}
            >
                <>
                    <i className={`qui-statistics-card-icon ${content?.icon}`}
                        style={colors?.accentColors}>
                    </i>
                    <div className="valuetooltip">
                    <h1 className={props.content?.value.length >= 7 ? "qui-statistics-card-values" : "qui-statistics-card-value"} style={colors?.textColors}>
                        {content?.value}
                    </h1>
                    <span className="tooltipvalue">{content?.value}</span>
                    </div>

                    <div className="labeltooltip">
                    <h3 className={props.content?.label.length >= 7 ? "qui-statistics-card-labels" : "qui-statistics-card-label"} style={colors?.textColors}>
                        {content?.label}
                    </h3>
                    <span className="tooltiplabel">{content?.label}</span>
                    </div>
                </>
            </Segment>
        </motion.div>
    );
}
