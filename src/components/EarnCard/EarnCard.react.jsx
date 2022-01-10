import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import _ from 'lodash'
import {
    getAnimation,
} from "../../common/javascripts/helpers";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "../Carousel/BannerCard/BannerCard.scss";
import './EarnCard.scss'
import "../../common/stylesheets/overrule.scss";
import BannerCard from "../Carousel/BannerCard/BannerCard.react";

EarnCard.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    EarnCard data should be passed in content field and it is required field
    */
    content: PropTypes.shape({
        image: PropTypes.string,
        tag: PropTypes.oneOf([
            "new",
            "premium",
            "restricted",
            "free"
        ]),
        header: PropTypes.string,
        content: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        icon: PropTypes.string,
        dates: PropTypes.shape({
            end_date: PropTypes.string,
            start_date: PropTypes.string,
        }),
        topics: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
                contentList: PropTypes.arrayOf(
                    PropTypes.shape({})
                ),
                checked: PropTypes.bool,
            }),
        )
    }).isRequired,
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
            ""
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
    Button component must have the onClick function passed as props
    */
    onClick: PropTypes.func.isRequired,
};

EarnCard.defaultProps = {
    // Component Specific props
    //=======================================
    content: {},

    // Quommon props
    //=======================================
    asVariant: "primary",

    withColor: null,
    withAnimation: null,

    isDisabled: false,
    isHidden: false
};

function getColors(colors) {
    let colorStyle = {
        textColors: {
            color: colors.textColor
        },
        accentColors: {
            color: colors.accentColor
        },
        bannerColors: {
            backgroundColor: colors.textColor
        },
        cardColors: {
            backgroundColor: colors.backgroundColor
        }
    }
    return colorStyle
}
/**
## Notes
- The design system used for this component is Fontawesome Icon
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- Status of topics can be changed from content prop
**/
export default function EarnCard(props) {
    //-------------------------------------------------------------------
    // 1. Destructuring the content, size and variant from props
    //-------------------------------------------------------------------
    let { content } = props
    let { asSize } = props
    let { asVariant } = props
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
            className="qui qui-EarnCard" style={colors.cardColors}>
            <div className="qui-leftSide" >
                <BannerCard {...props} />
                <div className={`qui-leftLower size-${asSize} variant-${asVariant}-text`}>
                    <div className="qui-EarnCardIcon" style={colors.accentColors}>
                        <i className={content?.icon}></i>
                    </div>
                    <div className="qui-leftLowerTop">
                        <div className="qui-checkbox">
                            {_.map(content?.topics, (topics, index) => {
                                return (
                                    <h1 className={`${topics.checked ? 'fas fa-check-square' : 'far fa-square'}`} key={topics.name + index} style={colors.accentColors}></h1>
                                )
                            })}
                        </div>
                        <div className="qui-courseDate" style={colors.textColors}>
                            <h2>{content?.dates.start_date}</h2>
                            <h2>&nbsp;{`-`}&nbsp;</h2>
                            <h2>{content?.dates.end_date}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`qui-rightSide size-${asSize}`}>
                <div className={`qui-courseHeader variant-${asVariant}-text`} style={colors.textColors}>
                    <h1>{props.content?.title}</h1>
                    <div className={`qui-courseBanner variant-${asVariant} qui-btn`} style={colors.bannerColors}></div>
                </div>
                <div className="qui-courseDescription">
                    <p>{props.content?.description}</p>
                </div>
            </div>
        </motion.div>
    );
}