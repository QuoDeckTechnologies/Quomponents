// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import _ from "lodash";
import {
    getAnimation,
    getQuommons
} from "../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./SerialCard.scss";
import "../../common/stylesheets/overrule.scss";

SerialCard.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    Use to below fields to decide SerialCard's properties
    */
    title: PropTypes.string,
    description: PropTypes.string,
    backImage: PropTypes.string,
    image: PropTypes.string,
    playerIcon: PropTypes.string,
    playersValue: PropTypes.number,
    iconOpt: PropTypes.array,
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
      Use to enable/disable the component
      */
    isDisabled: PropTypes.bool,
    /**
      Use to show/hide the component
      */
    isHidden: PropTypes.bool,
    /**
      SerialCard component must have the onClick function passed as props
      */
    onClick: PropTypes.func
};

SerialCard.defaultProps = {
    //=======================================
    // Quommon props
    //=======================================
    asVariant: "error",
    withColor: null,
    withAnimation: null,
    isDisabled: false,
    isHidden: false,
};

function getColors(colors) {
    let colorStyle = {
        textColors: {
            color: colors.textColor,
        },
        accentColors: {
            color: colors.accentColor,
        },
        cardColors: {
            backgroundColor: colors.backgroundColor,
        },
    };
    return colorStyle;
}
/**
## Notes
- The design system used for this component is Fontawesome Icon
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- Status of topics can be changed from content prop
**/
export default function SerialCard(props) {
    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "serial-card");
    quommonClasses.childClasses += ` variant-${props.asVariant}-text`;
    //-------------------------------------------------------------------
    // 2. Set the component colors
    //-------------------------------------------------------------------
    let colors = props.withColor ? getColors(props.withColor) : {};
    //-------------------------------------------------------------------
    // 3. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props);

    // ========================= Render Function =================================
    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui qt-shadow ${quommonClasses.parentClasses}`}
            style={colors.cardColors}
        >
            <div className={`qui-serialcard-container ${quommonClasses.childClasses}`}>
                <div className="qui-serialcard-top">
                    <img className="qui-serialcard-backimg" src={props.backImage} alt="" />
                    <div className="qui-serialcard-date-name" style={colors.textColors}>
                        <span className="qt-sm">{props.title}</span>
                        <h6>{props.description}</h6>
                    </div>
                </div>
                <div className="qui-serialcard-bottom">
                    <img className="qui-serialcard-frontimg" src={props.image} alt="" />
                    <div className={"qui-serialcard-player"}>
                        <i className={`qui-serialcard-player-icon ${props.playerIcon}`} style={colors.accentColors} />
                        <span className="qt-sm" style={colors.textColors}>{props.playersValue}</span>
                    </div>
                    <div className="qui-serialcard-icons">
                        {_.map(props.iconOpt, (icons, index) => {
                            return (
                                <div key={index}>
                                    <i
                                        className={`qui-serialcard-icon ${icons.icon}`}
                                        style={colors.accentColors}
                                        onMouseDown={() =>{icons.func()}}
                                    >
                                    </i>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}