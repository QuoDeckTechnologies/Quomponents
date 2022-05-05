import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
    getAnimation,
    getQuommons,
    resolveImage,
} from "../../../common/javascripts/helpers";
import "../../../common/stylesheets/common.css";
import "./BulletList.scss";
import "../../../common/stylesheets/overrule.scss";
import SlideHeader from "../../SlideHeader/SlideHeader.react"
import BulletBlock from "../../BulletBlock/BulletBlock.react"

BulletList.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    BulletList data should be passed in data field and it is a required field
    */
    data: PropTypes.shape({
        title: PropTypes.string,
        subTitle: PropTypes.string,
        image: PropTypes.object,
        backgroundImage: PropTypes.object,
        bullets: PropTypes.arrayOf(
            PropTypes.string
        ).isRequired,
    }),
    /**
    BulletList can set image and backgroundImage from imageLibrary array
    */
    imageLibrary: PropTypes.array,
    /**
    slideId can be used if same template is used continuously for multiple slides.
    */
    slideId: PropTypes.number,
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
        bulletBlockTextColor: PropTypes.string,
        bulletBlockBackgroundColor: PropTypes.string,
        bulletBlockAccentColor: PropTypes.string,
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

BulletList.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    data: null,
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
- The design system used for this component is HTML and CSS
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function BulletList(props) {
    //-------------------------------------------------------------------
    // 1. Destructuring props
    //-------------------------------------------------------------------
    let { data, imageLibrary, slideId, withColor } = props;
    //-------------------------------------------------------------------
    // 2. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "bullet-list");
    //-------------------------------------------------------------------
    // 3. Use to set Color in BulletList
    //-------------------------------------------------------------------
    let slideHeaderColors = {
        textColor: withColor?.slideHeaderTextColor,
        accentColor: withColor?.slideHeaderAccentColor,
        backgroundColor: withColor?.slideHeaderBackgroundColor
    }
    let bulletBlockColors = {
        textColor: withColor?.bulletBlockTextColor,
        accentColor: withColor?.bulletBlockAccentColor,
        backgroundColor: withColor?.bulletBlockBackgroundColor
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
    const animate = getAnimation(props.withAnimation);
    // ========================= Render Function =================================
    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui ${quommonClasses.parentClasses}`}
        >
            <div className={`qui-bullet-list-card ${quommonClasses.childClasses}`} key={"bullet-list" + slideId}
                style={{
                    ...background,
                    backgroundColor: withColor?.backgroundColor,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
            >
                {!data?.image && (data?.title || data?.subTitle) && (
                    <SlideHeader {...props}
                        content={{ title: data?.title, subTitle: data?.subTitle }}
                        withColor={slideHeaderColors} />
                )}
                {data?.image && (
                    <img className="qui-bullet-list-image"
                        src={resolveImage(data?.image?.id, imageLibrary)}
                        alt="bulletlist" />
                )}
                <BulletBlock {...props}
                    content={data?.bullets}
                    withColor={bulletBlockColors}
                    asAligned={"left"}
                />
            </div>
        </motion.div>
    );
}