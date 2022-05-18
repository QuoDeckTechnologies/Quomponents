import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
    getAnimation,
    getQuommons,
    resolveImage,
} from "../../../common/javascripts/helpers";
import "../../../common/stylesheets/common.css";
import "./BackgroundImage.scss";
import "../../../common/stylesheets/overrule.scss";
import TextBlock from "../../TextBlock/TextBlock.react";

BackgroundImage.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    BackgroundImage data should be passed in data field and position props define the position of textblock(top-left,top-center, top-right, center-left, center-center, center-right, bottom-left, bottom-center, bottom-right) component and it is a required field
    */
    data: PropTypes.shape({
        paragraph: PropTypes.string,
        background: PropTypes.object,
        position: PropTypes.string,
    }).isRequired,
    /**
    BackgroundImage can set background from imageLibrary.
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

BackgroundImage.defaultProps = {
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
- Displays a BackgroundImage with TextBlock & Background
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function BackgroundImage(props) {
    //-------------------------------------------------------------------
    // 1. Destructuring props
    //-------------------------------------------------------------------
    let { data, withColor, imageLibrary, slideId } = props;
    //-------------------------------------------------------------------
    // 2. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "background-image");
    //-------------------------------------------------------------------
    // 3. Use to set Color in BackgroundImage
    //-------------------------------------------------------------------
    let textBlockColors = {
        textColor: withColor?.textBlockTextColor,
        backgroundColor: withColor?.textBlockBackgroundColor
    }
    //-------------------------------------------------------------------
    // 4. Function to set background
    //-------------------------------------------------------------------
    const getBackground = () => {
        if (data?.background) {
            return {
                background: `url(${resolveImage(
                    data?.background.id,
                    imageLibrary
                )})`,
            };
        }
    };

    const background = getBackground();
    //-------------------------------------------------------------------
    // 5. Function to set custom styling
    //-------------------------------------------------------------------
    const getTextPosition = (position) => {
        let lowerCase = position?.toLowerCase()
        return `qui-position-${lowerCase}`
    };
    //-------------------------------------------------------------------
    // 6. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);
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
                className={`qui-background-image-card ${quommonClasses.childClasses}`}
                key={"background-image" + slideId}
            >
                <div className={`qui-background-image-textblock ${getTextPosition(data?.position)}`}>
                    <TextBlock {...props}
                        content={data?.paragraph}
                        withColor={textBlockColors}
                    />
                </div>
            </div>
        </motion.div>
    );
}