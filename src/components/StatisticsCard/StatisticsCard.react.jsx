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

StatisticsCard.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
      StatisticsCard can recieve content as props
      */
    content: PropTypes.object,
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
    /**
      Use to enable/disable the component
      */
    isDisabled: PropTypes.bool,
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
    isDisabled: false,
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
            style={colors?.backgroundColors}
        >
            <Segment {...props} className={`qui-statistics-crad-container ${quommonClasses.childClasses}`}             style={colors?.backgroundColors}
>
                <>
                    <i className={`qui-statistics-crad-icon ${content?.playerIcon}`}
                        style={colors?.accentColors}>
                    </i>
                    <p className="qui-statistics-crad-number" style={colors?.textColors}>
                        {content?.playerNum}
                    </p>
                    <p className="qui-statistics-crad-players" style={colors?.textColors}>
                        {content?.players}
                    </p>
                </>
            </Segment>
        </motion.div>
    );
}
