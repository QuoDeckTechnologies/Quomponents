// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
    getAnimation,
    getQuommons,
    resolveImage,
} from "../../../common/javascripts/helpers.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./RankingOptions.scss";
import "../../../common/stylesheets/overrule.scss";
import SlideHeader from "../../SlideHeader/SlideHeader.react";
import OrderingList from "../../OrderingList/OrderingList/OrderingList.react"

RankingOptions.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    RankingOptions data should be passed in data field and it is a required field
    */
    data: PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string,
        image: PropTypes.object,
        backgroundImage: PropTypes.object,
        question: PropTypes.string,
        purpose: PropTypes.string,
        bullets: PropTypes.arrayOf(PropTypes.string)
    }).isRequired,
    /**
    RankingOptions should have imageLibrary array
    */
    imageLibrary: PropTypes.array,
    slideId: PropTypes.number,
    /**
    RankingOptions component must have the trackInteraction function passed as props
    */
    trackInteraction: PropTypes.func,
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
        questionColor: PropTypes.string,
        slideHeaderTextColor: PropTypes.string,
        slideHeaderAccentColor: PropTypes.string,
        slideHeaderBackgroundColor: PropTypes.string,
        buttonTextColor: PropTypes.string,
        buttonBackgroundColor: PropTypes.string,
        buttonHoverBackgroundColor: PropTypes.string,
        buttonHoverTextColor: PropTypes.string,
        backgroundColor: PropTypes.string,
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
    isHidden: PropTypes.bool
};

RankingOptions.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    data: {},
    slideId: 0,
    //=======================================
    // Quommon props
    //=======================================
    asVariant: "primary",
    withColor: null,
    withAnimation: null,
    isDisabled: false,
    isHidden: false,
};
/**
## Notes
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- Component is used to rank/ arrange the element and submit it.
**/
export default function RankingOptions(props) {
    let { data, withColor, imageLibrary } = props
    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "ranking-options");
    quommonClasses.childClasses += ` variant-${props.asVariant}-text`;
    //-------------------------------------------------------------------
    // 2. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);

    //-------------------------------------------------------------------
    // 3. Setting the colors of the imported components
    //-------------------------------------------------------------------
    let slideHeaderColors = {
        textColor: props.withColor?.slideHeaderTextColor,
        accentColor: props.withColor?.slideHeaderAccentColor,
        backgroundColor: props.withColor?.slideHeaderBackgroundColor
    };
    let orderingListColors = {
        textColor: props.withColor?.buttonTextColor,
        backgroundColor: props.withColor?.buttonBackgroundColor,
        hoverBackgroundColor: props.withColor?.buttonHoverBackgroundColor,
        hoverTextColor: props.withColor?.buttonHoverTextColor,
    }

    const getBackground = () => {
        return {
            backgroundImage: `url(${resolveImage(data?.backgroundImage.id, imageLibrary)})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
        };
    };
    const background = data?.backgroundImage
        ? getBackground()
        : { backgroundColor: withColor?.backgroundColor ? withColor?.backgroundColor : "#fff" };

    // ========================= Render Function =================================
    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui ${quommonClasses.parentClasses}`}
        >
            {data &&
                <div className="qui-ranking-options-card" style={{ ...background }}>
                    {!data?.image && (data?.title || data?.subtitle) && (
                        <SlideHeader
                            content={{ title: data?.title, subTitle: data?.subtitle }}
                            withColor={slideHeaderColors} />
                    )}
                    {data?.image && (
                        <img className="qui-ranking-options-image" src={resolveImage(data?.image.id, imageLibrary)} alt="" />
                    )}
                    <div
                        className={`qui-ranking-options-label variant-${props.asVariant}-text`}
                        style={{ color: props.withColor?.questionColor }}
                        key={"ranking-options-label-" + props.slideId}>
                        {props.data?.question}
                    </div>
                    <div className="qui-ranking-options-button-container">
                        <OrderingList withColor={orderingListColors} content={props.data?.bullets} onClick={(items) => props.trackInteraction(items)} />
                    </div>
                </div>}
        </motion.div>
    );
}