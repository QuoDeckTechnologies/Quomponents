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
import SlideHeader from "../../SlideHeader/SlideHeader.react"
import IconListItem from "../../IconListItem/IconListItem/IconListItem.react"

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
            PropTypes.string
            // image: PropTypes.string,
            // text: PropTypes.string,
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
    data: null,
    slideId: 0,
    //=======================================
    // Quommon props
    //=======================================
    asVariant: "primary",
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
    let getBackground = () => {
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
        >
            <div className={`qui-icon-bullet-list-card ${quommonClasses.childClasses}`} style={background} key={"icon-bullet-list" + slideId}>
                {!data?.image && (data?.title || data?.subtitle) && (
                    <SlideHeader {...props}
                        content={{ title: data?.title, subTitle: data?.subtitle }}
                        withColor={slideHeaderColors} />
                )}
                {data?.image && (
                    <img className="qui-icon-bullet-list-image" src={data?.image} alt="" />
                )}
                <IconListItem {...props}
                    asVariant={asVariant}
                    asEmphasis={"list"}
                    content={[
                        {
                            image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
                            title: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old"
                        },
                        {
                            image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg",
                            title: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old"
                        },
                    ]}
                />
            </div>
        </motion.div>
    );
}
