import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
    getAnimation,
    getQuommons,
} from "../../../common/javascripts/helpers";
import "../../../common/stylesheets/common.css";
import "./IconBulletlist.scss";
import "../../../common/stylesheets/overrule.scss";
import SlideHeader from "../../SlideHeader/SlideHeader.react";
import IconListItem from "../../IconListItem/IconListItem/IconListItem.react";

IconBulletlist.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
      IconBulletlist data should be passed in data field and it is a required field
      */
    data: PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string,
        image: PropTypes.string,
        backgroundImage: PropTypes.string,
        iconlist: PropTypes.arrayOf(
            PropTypes.shape({
                image: PropTypes.string,
                text: PropTypes.string,
            })),

    }).isRequired,
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
    Use to float the component in parent container
    */
    asFloated: PropTypes.oneOf(["left", "right", "none", "inline"]),
    /**
    Use to override component colors and behavior
    */
    withColor: PropTypes.shape({
        backgroundColor: PropTypes.string,
        slideHeaderTextColor: PropTypes.string,
        slideHeaderBackgroundColor: PropTypes.string,
        slideHeaderAccentColor: PropTypes.string,
        iconListItemTextColor: PropTypes.string,
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

IconBulletlist.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    data: {},
    slideId: 0,
    //=======================================
    // Quommon props
    //=======================================
    asVariant: "primary",
    asFloated: "left",
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
export default function IconBulletlist(props) {
    //-------------------------------------------------------------------
    // 1. Destructuring props
    //-------------------------------------------------------------------
    let { data, withColor, slideId, asVariant } = props;
    //-------------------------------------------------------------------
    // 2. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "icon-bullet-list");
    //-------------------------------------------------------------------
    // 3. Use to set Color in IconBulletlist
    //-------------------------------------------------------------------
    let slideHeaderColors = {
        textColor: withColor?.slideHeaderTextColor,
        accentColor: withColor?.slideHeaderAccentColor,
        backgroundColor: withColor?.slideHeaderBackgroundColor
    }
    let iconListItemColors = {
        textColor: withColor?.iconListItemTextColor,
    }
    let iconBulletListbackgroundColor = {
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
        : iconBulletListbackgroundColor;
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
            style={{ ...background }}
        >
            <div className={`qui-icon-bullet-list-card ${quommonClasses.childClasses}`} key={"icon-bullet-list" + slideId}>
                {!data?.image && (data?.title || data?.subtitle) && (
                    <SlideHeader {...props}
                        content={{ title: data?.title, subTitle: data?.subtitle }}
                        withColor={slideHeaderColors} />
                )}
                {data?.image && (
                    <img className="qui-icon-bullet-list-image"
                        src={data?.image}
                        alt="IconBulletlist" />
                )}
                <IconListItem {...props}
                    asVariant={asVariant}
                    asEmphasis={"list"}
                    withColor={iconListItemColors}
                    content={data?.iconlist}
                />
            </div>
        </motion.div>
    );
}
