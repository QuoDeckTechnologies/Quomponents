import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
    getAnimation,
    getQuommons,
} from "../../../common/javascripts/helpers";
import "../../../common/stylesheets/common.css";
import "./BulletList.scss";
import "../../../common/stylesheets/overrule.scss";
import SlideHeader from "../../SlideHeader/SlideHeader.react"
import BulletBock from "../../BulletBlock/BulletBlock.react"

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
        image: PropTypes.string,
        listItems: PropTypes.arrayOf(
            PropTypes.string
        ).isRequired,
    }),
    /**
    slideId can be used if same template is used continueously for multiple slides.
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
        bulletBockTextColor: PropTypes.string,
        bulletBockBackgroundColor: PropTypes.string,
        bulletBockAccentColor: PropTypes.string,
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
    let { data, withColor, slideId } = props;
    //-------------------------------------------------------------------
    // 2. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "bullet-list");
    //-------------------------------------------------------------------
    // 3. Use to set Color in BulletList
    //-------------------------------------------------------------------
    let Color = {
        backgroundColor: withColor?.backgroundColor ? withColor?.backgroundColor : "#ffffff",
    };
    let slideHeaderColors = {
        textColor: withColor?.slideHeaderTextColor,
        accentColor: withColor?.slideHeaderAccentColor,
        backgroundColor: withColor?.slideHeaderBackgroundColor
    }
    let bulletBockColors = {
        textColor: withColor?.bulletBockTextColor,
        accentColor: withColor?.bulletBockAccentColor,
        backgroundColor: withColor?.bulletBockBackgroundColor
    }
    //-------------------------------------------------------------------
    // 4. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);
    // ========================= Render Function =================================
    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui ${quommonClasses.parentClasses}`}
        >
            <div className={`qui-bullet-list-card ${quommonClasses.childClasses}`} style={Color}>
                {!data?.image && (data?.title || data?.subTitle) && (
                    <SlideHeader {...props}
                        content={{ title: data?.title, subTitle: data?.subTitle }}
                        withColor={slideHeaderColors} />
                )}
                {data?.image && (
                    <img className="qui-bullet-list-image" src={data?.image} alt="" />
                )}
                <BulletBock {...props}
                    content={data?.listItems}
                    withColor={bulletBockColors}
                    asAligned={"left"}
                />
            </div>
        </motion.div>
    );
}