import React from "react";
import PropTypes from "prop-types";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { motion } from "framer-motion";
import {
    getAnimation,
    getQuommons,
} from "../../common/javascripts/helpers";
import "../../common/stylesheets/common.css";
import "./CategoryCard.scss";
import "../../common/stylesheets/overrule.scss";
import AmplayfierDrawerRect from "../AmplayfierDrawerRect/AmplayfierDrawerRect.react";
import AccentLine from "../AccentLine/AccentLine.react"
import defaultImage from "../../assets/default.jpeg";

CategoryCard.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    Content props consist of all the data which are required for CategoryCard component.
    */
    content: PropTypes.shape({
        label: PropTypes.string,
        image: PropTypes.string,
        percentage: PropTypes.number,
    }),
    //=======================================
    // Quommon props
    //=======================================
    /**
    Use to float the component in parent container
    */
    asFloated: PropTypes.oneOf(["left", "right", "none", "inline"]),
    /**
    Use to set Colors
    */
    withColor: PropTypes.shape({
        textColor: PropTypes.string,
        backgroundColor: PropTypes.string,
        accentColor: PropTypes.string,
        pathColor: PropTypes.string,
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

CategoryCard.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    content: {},
    //=======================================
    // Quommon props
    //=======================================
    asFloated: "none",

    withColor: null,
    withAnimation: null,

    isHidden: false,
};
/**
## Notes
- The design system used for this component is HTML and CSS
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function CategoryCard(props) {
    //-------------------------------------------------------------------
    // 1. Destructuring props
    //-------------------------------------------------------------------
    let { content, withColor } = props;
    //-------------------------------------------------------------------
    // 2. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "category-card");
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
            {content && <div className={`qui-category-card-container ${quommonClasses.childClasses}`}>
                <AmplayfierDrawerRect {...props} isFluid={false} isCircular={true}>
                    <img
                        className="qui-category-card-image"
                        src={content?.image ? content?.image : defaultImage}
                        alt="categoryCard"
                    />
                    {content?.label &&
                        <div
                            className="qui-category-card-label"
                            style={{ color: withColor?.textColor }}
                        >
                            {content?.label}
                        </div>
                    }
                    <div className="qui-category-card">
                        {content?.percentage && (
                            <div className="qui-category-card-pie-chart-container">
                                <div className="qui-category-card-pie-chart">
                                    <CircularProgressbar
                                        value={content.percentage}
                                        strokeWidth={30}
                                        styles={buildStyles({
                                            strokeLinecap: "butt",
                                            pathColor: withColor?.pathColor,
                                        })}
                                    />
                                </div>
                                <h2 className="qui-category-card-pie-chart-percentage">
                                    {`${content?.percentage}%`}
                                </h2>
                                <div className={`qui-category-card-accent-line`}>
                                    <AccentLine withColor={{ accentColor: withColor?.accentColor }} />
                                </div>
                            </div>
                        )}
                    </div>
                </AmplayfierDrawerRect>
            </div >}
        </motion.div >
    );
}