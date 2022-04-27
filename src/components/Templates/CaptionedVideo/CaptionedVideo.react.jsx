import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { getAnimation, getQuommons } from "../../../common/javascripts/helpers";
import "../../../common/stylesheets/common.css";
import "./CaptionedVideo.scss";
import "../../../common/stylesheets/overrule.scss";
import SlideHeader from "../../SlideHeader/SlideHeader.react"
import Videobox from "../../Videobox/Videobox.react"
import TextBlock from "../../TextBlock/TextBlock.react"

CaptionedVideo.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    CaptionedVideo data should be passed in data field and it is a required field
    */
    data: PropTypes.shape({
        title: PropTypes.string,
        subTitle: PropTypes.string,
        image: PropTypes.string,
        backgroundImage: PropTypes.string,
        video: PropTypes.string,
        caption: PropTypes.string,
    }).isRequired,
    /**
    slideId can be used if same template is used continueously for multiple slides.
    */
    slideId: PropTypes.number,
    /**
    CaptionedVideo component can use presenter props to show presenter template
    */
    isPresenter: PropTypes.bool,
    //=======================================
    // Quommon props
    //=======================================
    /**
    Use to set Color 
    */
    withColor: PropTypes.shape({
        backgroundColor: PropTypes.string,
        slideHeaderTextColor: PropTypes.string,
        slideHeaderBackgroundColor: PropTypes.string,
        slideHeaderAccentColor: PropTypes.string,
        textBockTextColor: PropTypes.string,
        textBockBackgroundColor: PropTypes.string,
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

CaptionedVideo.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    data: null,
    slideId: 0,
    isPresenter: false,
    //=======================================
    // Quommon props
    //=======================================
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
export default function CaptionedVideo(props) {
    //-------------------------------------------------------------------
    // 1. Destructuring props
    //-------------------------------------------------------------------
    let { data, withColor, slideId, isPresenter } = props;
    //-------------------------------------------------------------------
    // 2. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "bullet-list");
    //-------------------------------------------------------------------
    // 3. Use to set Color in CaptionedVideo
    //-------------------------------------------------------------------
    let slideHeaderColors = {
        textColor: withColor?.slideHeaderTextColor,
        accentColor: withColor?.slideHeaderAccentColor,
        backgroundColor: withColor?.slideHeaderBackgroundColor
    }
    let textBockColors = {
        textColor: withColor?.textBockTextColor,
        backgroundColor: withColor?.textBockBackgroundColor
    }
    let captionedVideobackgroundColor = {
        backgroundColor: withColor?.backgroundColor ? withColor?.backgroundColor : "#ffffff",
    };
    //-------------------------------------------------------------------
    // 4. Function to set background
    //-------------------------------------------------------------------
    const getBackground = () => {
        return {
            background: `url(${data?.backgroundImage})`,
            backgroundSize: "cover",
        };
    };
    const background = data?.backgroundImage
        ? getBackground()
        : captionedVideobackgroundColor;
    //-------------------------------------------------------------------
    // 5. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);
    // ========================= Render Function =================================
    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui ${quommonClasses.parentClasses}`}
        >
            <div className={`qui-captioned-video-card ${quommonClasses.childClasses}`} style={background} key={"captioned-video" + slideId}>
                {!data?.image && (data?.title || data?.subTitle) && (
                    <SlideHeader
                        content={{ title: data?.title, subTitle: data?.subTitle }}
                        withColor={slideHeaderColors} />
                )}
                {data?.image && (
                    <img className="qui-captioned-video-image" src={data?.image} alt="" />
                )}

                <div className="qui-captioned-video-videobox">
                    <Videobox {...props} url={data?.video ? data?.video : "https://www.youtube.com/watch?v=NpEaa2P7qZI"} />
                </div>
                <TextBlock {...props}
                    content={data?.caption}
                    withColor={textBockColors}
                />
            </div>
        </motion.div>
    );
}