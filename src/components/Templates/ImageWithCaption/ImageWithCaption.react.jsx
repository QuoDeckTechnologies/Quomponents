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
import "./ImageWithCaption.scss";
import "../../../common/stylesheets/overrule.scss";
import SlideHeader from "../../SlideHeader/SlideHeader.react";
import TextBlock from "../../TextBlock/TextBlock.react";
import Button from "../../Buttons/Button/Button.react";

ImageWithCaption.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
      ImageWithCaption content should be passed in data field and it is a required field
      */
    data: PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string,
        caption: PropTypes.string,
        image: PropTypes.string,
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
        slideHeaderTextColor: PropTypes.string,
        slideHeaderAccentColor: PropTypes.string,
        slideHeaderBackgroundColor: PropTypes.string,
        captionTextColor: PropTypes.string,
        captionBackgroundColor: PropTypes.string,
        buttonTextColor: PropTypes.string,
        buttonBackgroundColor: PropTypes.string,
        buttonHoverBackgroundColor: PropTypes.string,
        buttonHoverTextColor: PropTypes.string,
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
      ImageWithCaption component must have the onClick function passed as props
      */
    onClick: PropTypes.func.isRequired,
};

ImageWithCaption.defaultProps = {
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
    isDisabled: false,
    isHidden: false,
};

/**
## Notes
- The design system used for this component is Fontawesome Icon
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function ImageWithCaption(props) {
    //-------------------------------------------------------------------
    // 1. Destructuring data from props
    //-------------------------------------------------------------------
    let { data } = props;
    //-------------------------------------------------------------------
    // 2. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "image-with-caption");
    quommonClasses.childClasses += ` variant-${props.asVariant}-text`;
    //-------------------------------------------------------------------
    // 3. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);
    //-------------------------------------------------------------------
    // Setting the colors of the imported components
    //-------------------------------------------------------------------
    let buttonColors = {
        textColor: props.withColor?.buttonTextColor,
        backgroundColor: props.withColor?.buttonBackgroundColor,
        hoverBackgroundColor: props.withColor?.buttonHoverBackgroundColor,
        hoverTextColor: props.withColor?.buttonHoverTextColor
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
    // ========================= Render Function =================================
    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui ${quommonClasses.parentClasses}`}
        >
            <div className={`qui-image-with-caption-card ${quommonClasses.childClasses}`}>
                {!data?.image && (data?.title || data?.subtitle) && (
                    <SlideHeader
                        content={{ title: data?.title, subTitle: data?.subtitle }}
                        withColor={slideHeaderColors} />
                )}

                {data?.image && (
                    <img className="qui-image-with-caption-image" src={data?.image} alt="" />
                )}
                <TextBlock {...props}
                    key={props.slideId}
                    content={props.data?.caption}
                    withColor={captionColors}
                />
                {<Button {...props}
                    content={"Continue"}
                    onClick={props.onClick}
                    withColor={buttonColors}
                />}
            </div>
        </motion.div>
    );
}