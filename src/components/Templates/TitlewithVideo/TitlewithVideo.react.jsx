import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
    getAnimation,
    getQuommons,
    resolveImage,
} from "../../../common/javascripts/helpers";
import "../../../common/stylesheets/common.css";
import "./TitlewithVideo.scss";
import "../../../common/stylesheets/overrule.scss";
import TextBlock from "../../TextBlock/TextBlock.react";
import Videobox from "../../Videobox/Videobox.react";

TitlewithVideo.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    TitlewithVideo data should be passed in data field and it is a required field
    */
    data: PropTypes.shape({
        title: PropTypes.string,
        video: PropTypes.string,
        backgroundImage: PropTypes.object,
    }).isRequired,
    /**
    TitlewithVideo can set backgroundImage from imageLibrary.
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
    Use to override component colors and behavior
    */
    withColor: PropTypes.shape({
        backgroundColor: PropTypes.string,
        textBlockTextColor: PropTypes.string,
        textBlockBackgroundColor: PropTypes.string,
        textBlockAccentColor: PropTypes.string,
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

TitlewithVideo.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    data: {},
    imageLibrary: null,
    slideId: 0,
    //=======================================
    // Quommon props
    //=======================================
    withColor: null,
    withAnimation: null,

    isHidden: false,
};
/**
## Notes
- Displays a TitlewithVideo with Videobox and TextBlock
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function TitlewithVideo(props) {
    //-------------------------------------------------------------------
    // 1. Destructuring props
    //-------------------------------------------------------------------
    let { data, withColor, imageLibrary, slideId } = props;
    //-------------------------------------------------------------------
    // 2. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "title-with-video");
    //-------------------------------------------------------------------
    // 3. Use to set Color in TitlewithVideo
    //-------------------------------------------------------------------
    let textBlockColors = {
        textColor: withColor?.textBlockTextColor,
        accentColor: withColor?.textBlockAccentColor,
        backgroundColor: withColor?.textBlockBackgroundColor
    }
    //-------------------------------------------------------------------
    // 4. Function to set background
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
    //-------------------------------------------------------------------
    // 5. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props);
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
                backgroundSize: "cover",
            }}
        >
            <div
                className={`qui-title-with-video-card ${quommonClasses.childClasses}`}
                key={"title-with-video" + slideId}
            >
                <div className="qui-title-with-video-videobox-container">
                    <Videobox {...props}
                        url={data?.video}
                    />
                </div>
                <div className="qui-title-with-video-textblock">
                    <TextBlock {...props}
                        content={data?.title}
                        withColor={textBlockColors}
                    />
                </div>
            </div>
        </motion.div>
    );
}