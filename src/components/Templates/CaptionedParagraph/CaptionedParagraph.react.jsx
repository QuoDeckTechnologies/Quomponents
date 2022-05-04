// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
    getAnimation,
    getQuommons,
} from "../../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./CaptionedParagraph.scss";
import "../../../common/stylesheets/overrule.scss";
import SlideHeader from "../../SlideHeader/SlideHeader.react";
import TextBlock from "../../TextBlock/TextBlock.react";

CaptionedParagraph.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
      CaptionedParagraph content should be passed in data field and it is a required field
      */
    data: PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string,
        label: PropTypes.string,
        caption: PropTypes.string,
        image: PropTypes.string,
        backgroundImage: PropTypes.string,
    }).isRequired,

    slideId: PropTypes.number,
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
        slideHeaderTextColor: PropTypes.string,
        slideHeaderAccentColor: PropTypes.string,
        slideHeaderBackgroundColor: PropTypes.string,
        captionTextColor: PropTypes.string,
        captionBackgroundColor: PropTypes.string,
        textblockTextColor: PropTypes.string,
        textblockBackgroundColor: PropTypes.string,
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

CaptionedParagraph.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    data: {},
    slideId: 0,
    //=======================================
    // Quommon props
    //=======================================
    asVariant: "warning",
    withColor: null,
    withAnimation: null,
    isHidden: false,
};

/**
## Notes
- The design system used for this component is Fontawesome Icon
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function CaptionedParagraph(props) {
    //-------------------------------------------------------------------
    // 1. Destructuring data from props
    //-------------------------------------------------------------------
    let { data, withColor } = props;
    //-------------------------------------------------------------------
    // 2. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "captioned-paragraph");
    quommonClasses.childClasses += ` variant-${props.asVariant}-text`;
    //-------------------------------------------------------------------
    // 3. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);
    //-------------------------------------------------------------------
    // 4. Setting the colors of the imported components
    //-------------------------------------------------------------------
    let textblockColors = {
        textColor: props.withColor?.textblockTextColor,
        backgroundColor: props.withColor?.textblockBackgroundColor,
    }
    let captionColors = {
        textColor: props.withColor?.captionTextColor,
        backgroundColor: props.withColor?.captionBackgroundColor
    }
    let slideHeaderColors = {
        textColor: props.withColor?.slideHeaderTextColor,
        accentColor: props.withColor?.slideHeaderAccentColor,
        backgroundColor: props.withColor?.slideHeaderBackgroundColor
    }
    //-------------------------------------------------------------------
    // 5. Set background image and color for card
    //-------------------------------------------------------------------
    const getBackground = () => {
        return {
            background: `url(${data?.backgroundImage})`,
            backgroundSize: "cover",
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
            style={{ ...background }}

        >
            <div className={`qui-captioned-paragraph-card ${quommonClasses.childClasses}`} key={"captioned paragraph" + props?.slideId}>
                {!data?.image && (data?.title || data?.subtitle) && (
                    <SlideHeader
                        content={{ title: data?.title, subTitle: data?.subtitle }}
                        withColor={slideHeaderColors} />
                )}

                {data?.image && (
                    <img className="qui-captioned-paragraph-image" src={data?.image} alt="" />
                )}
                <div className="qui-captioned-paragraph-text-block">
                    <TextBlock {...props}
                        content={props.data?.label}
                        withColor={textblockColors}
                    />
                </div>
                <TextBlock {...props}
                    content={props.data?.caption}
                    withColor={captionColors}
                />

            </div>
        </motion.div>
    );
}