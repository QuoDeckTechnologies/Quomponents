import React from "react";
import PropTypes from "prop-types";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion";
import {
    getAnimation,
    getQuommons,
    resolveImage,
} from "../../common/javascripts/helpers";
import "../../common/stylesheets/common.css";
import "./CategoryCard.scss";
import "../../common/stylesheets/overrule.scss";
import AmplayfierDrawerRect from "../AmplayfierDrawerRect/AmplayfierDrawerRect.react";
import AccentLine from "../AccentLine/AccentLine.react"

CategoryCard.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    Content props consist of all the data which are required for CategoryCard component.
    */
    content: PropTypes.object,
    /**
    CategoryCard can set image from imageLibrary array
    */
    imageLibrary: PropTypes.array,
    //=======================================
    // Quommon props
    //=======================================
    /**
    Use to define component size in increasing order
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
    /**
    Use to enable/disable the component
    */
    isDisabled: PropTypes.bool,
    /**
    CategoryCard component must have the onClick function passed as props
    */
    onClick: PropTypes.func.isRequired,
};

CategoryCard.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    content: {
        id: "",
        name: "",
        image: { id: "", extention: "" },
        viewedPercentage: 80,
    },
    imageLibrary: [],
    //=======================================
    // Quommon props
    //=======================================
    asSize: "normal",
    asFloated: "none",

    withColor: null,
    withAnimation: null,

    isHidden: false,
    isDisabled: false,
};
/**
## Notes
- The design system used for this component is HTML and CSS 
- The design system used for this component is React Circular Progressbar (@react-circular-progressbar)
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function CategoryCard(props) {
    //-------------------------------------------------------------------
    // 1. Destructuring props
    //-------------------------------------------------------------------
    let { content, withColor, imageLibrary } = props;
    //-------------------------------------------------------------------
    // 2. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "category-card");
    //-------------------------------------------------------------------
    // 3. Function to set image in the CategoryCard
    //-------------------------------------------------------------------
    const getImage = () => {
        if (content?.image) {
            return {
                backgroundImage: `url(${resolveImage(
                    content?.image.id,
                    imageLibrary
                )})`,
            };
        }
    };
    const categoryCardImage = getImage();
    //-------------------------------------------------------------------
    // 4. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props);
    // ========================= Render Function =================================
    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui ${quommonClasses.parentClasses}`}
        >
            {content &&
                <div
                    className={`qui-category-card-container ${quommonClasses.childClasses}`}
                    onClick={props.onClick}
                >
                    <AmplayfierDrawerRect
                        isCircular={true}
                        withColor={{ backgroundColor: withColor?.backgroundColor }}
                    >
                        <div>
                            {content?.image &&
                                <div
                                    className="qui-category-card-image"
                                    style={{
                                        ...categoryCardImage,
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: "center",
                                        backgroundSize: "cover",
                                    }}
                                />
                            }
                            {content?.name &&
                                <div
                                    className="qui-category-card-name"
                                    style={{ color: withColor?.textColor }}
                                >
                                    {content?.name}
                                </div>
                            }
                            <div className="qui-category-card-box">
                                {content?.viewedPercentage !== undefined &&
                                    content?.viewedPercentage !== '' && (
                                        <div className="qui-category-card-pie-chart-container">
                                            <div className="qui-category-card-pie-chart">
                                                <CircularProgressbar
                                                    value={content?.viewedPercentage}
                                                    strokeWidth={30}
                                                    styles={buildStyles({
                                                        strokeLinecap: "butt",
                                                        pathColor: withColor?.pathColor,
                                                    })}
                                                />
                                            </div>
                                            <h5 className="qui-category-card-pie-chart-viewed-percentage">
                                                {`${content?.viewedPercentage}%`}
                                            </h5>
                                            <div className={`qui-category-card-accent-line`}>
                                                <AccentLine withColor={{ accentColor: withColor?.accentColor }} />
                                            </div>
                                        </div>
                                    )}
                            </div>
                        </div>
                    </AmplayfierDrawerRect>
                </div >}
        </motion.div >
    );
}