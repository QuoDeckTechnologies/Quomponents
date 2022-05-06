// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
    getAnimation,
    getQuommons,
    resolveImage
} from "../../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./ExternalLink.scss";
import "../../../common/stylesheets/overrule.scss";
import SlideHeader from "../../SlideHeader/SlideHeader.react";
import TextBlock from "../../TextBlock/TextBlock.react";
import Button from "../../Buttons/Button/Button.react";

ExternalLink.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
      ExternalLink content should be passed in data field and it is a required field
      */
    data: PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string,
        paragraph: PropTypes.string,
        link: PropTypes.string,
        image: PropTypes.object,
        backgroundImage: PropTypes.object,
    }).isRequired,
    /**
      ExternalLink can set image & backgroundImage from imageLibrary.
      */
    imageLibrary: PropTypes.array,
    /**
      slideId can be used if same template is used continueously for multiple slides.
      */
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
      ExternalLink component must have the onClick function passed as props
      */
    onClick: PropTypes.func.isRequired,
};

ExternalLink.defaultProps = {
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
export default function ExternalLink(props) {
    //-------------------------------------------------------------------
    // 1. Destructuring data from props
    //-------------------------------------------------------------------
    let { data, withColor, imageLibrary, slideId } = props;
    //-------------------------------------------------------------------
    // 2. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "external-link");
    //-------------------------------------------------------------------
    // 3. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);
    //-------------------------------------------------------------------
    // 4. Setting the colors of the imported components
    //-------------------------------------------------------------------
    let buttonColors = {
        textColor: withColor?.buttonTextColor,
        backgroundColor: withColor?.buttonBackgroundColor,
        hoverBackgroundColor: withColor?.buttonHoverBackgroundColor,
        hoverTextColor: withColor?.buttonHoverTextColor
    }
    let captionColors = {
        textColor: withColor?.captionTextColor,
        backgroundColor: withColor?.captionBackgroundColor
    }
    let slideHeaderColors = {
        textColor: withColor?.slideHeaderTextColor,
        accentColor: withColor?.slideHeaderAccentColor,
        backgroundColor: withColor?.slideHeaderBackgroundColor
    }
    //-------------------------------------------------------------------
    // 5. Set background image and color for card
    //-------------------------------------------------------------------
    const getBackground = () => {
        if (data?.backgroundImage) {
            return {
                backgroundImage: `url(${resolveImage(
                    data?.backgroundImage.id,
                    imageLibrary
                )})`,
            };
        }
    };
    const background = getBackground();
    // ========================= Render Function =================================
    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui ${quommonClasses.parentClasses}`}
            style={{
                ...background,
                backgroundColor: withColor?.backgroundColor,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}
        >
            <div className={`qui-external-link-card ${quommonClasses.childClasses}`} key={"External-link" + slideId}
            >
                {!data?.image && (data?.title || data?.subtitle) && (
                    <SlideHeader
                        content={{ title: data?.title, subTitle: data?.subtitle }}
                        withColor={slideHeaderColors} />
                )}
                {data?.image && (
                    <img className="qui-external-link-image"
                        src={resolveImage(data?.image.id, imageLibrary)}
                        alt="ImageWithCaption" />
                )}
                <TextBlock {...props}
                    content={props.data?.paragraph}
                    withColor={captionColors}
                />
                <a href={data?.link} className="qui-external-link-address">
                    {<Button {...props}
                        content={"Go"}
                        onClick={props.onClick}
                        withColor={buttonColors}
                    />}
                </a>
            </div>
        </motion.div>
    );
}