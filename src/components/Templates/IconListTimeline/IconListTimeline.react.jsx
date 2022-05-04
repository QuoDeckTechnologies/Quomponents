import React, { useState } from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
    getAnimation,
    getQuommons,
    resolveImage,
} from "../../../common/javascripts/helpers";
import "../../../common/stylesheets/common.css";
import "./IconListTimeline.scss";
import "../../../common/stylesheets/overrule.scss";
import SlideHeader from "../../SlideHeader/SlideHeader.react";

IconListTimeline.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    IconListTimeline data should be passed in data field and it is a required field
    */
    data: PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string,
        image: PropTypes.object,
        backgroundImage: PropTypes.object,
        iconlist: PropTypes.arrayOf(
            PropTypes.shape({
                image: PropTypes.string,
                text: PropTypes.string,
            })),

    }).isRequired,
    /**
    IconListTimeline can set image & backgroundImage from imageLibrary array
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
    /**
    Button component must have the onClick function passed as props
    */
    onClick: PropTypes.func.isRequired,
};

IconListTimeline.defaultProps = {
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
export default function IconListTimeline(props) {
    //-------------------------------------------------------------------
    // 1. Destructuring props
    //-------------------------------------------------------------------
    let { data, withColor, imageLibrary, slideId } = props;
    //-------------------------------------------------------------------
    // 2. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "icon-list-timeline");
    //-------------------------------------------------------------------
    // 3. Use to set Color in IconListTimeline
    //-------------------------------------------------------------------
    let slideHeaderColors = {
        textColor: withColor?.slideHeaderTextColor,
        accentColor: withColor?.slideHeaderAccentColor,
        backgroundColor: withColor?.slideHeaderBackgroundColor
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
    //-------------------------------------------------------------------
    // 5. Get label on click of img
    //-------------------------------------------------------------------
    const [label, setLabel] = useState(false);

    let imageClick = (index) => {
        setLabel(true)
        console.log(index)
    }

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
            <div className={`qui-icon-list-timeline-card ${quommonClasses.childClasses}`} key={"icon-list-timeline" + slideId}>
                {!data?.image && (data?.title || data?.subtitle) && (
                    <SlideHeader {...props}
                        content={{ title: data?.title, subTitle: data?.subtitle }}
                        withColor={slideHeaderColors} />
                )}
                {data?.image && (
                    <img className="qui-icon-list-timeline-image"
                        src={resolveImage(data?.image.id, imageLibrary)}
                        alt="IconListTimeline" />
                )}
                {_.map(data.iconlist, (item, index) => {
                    return (
                        <div className="qui-iconlisttime-image-container">
                            <img
                                key={index}
                                className="qui-iconlisttime-image"
                                src={item.image}
                                // src="https://www.olympus-imaging.co.in/content/000107412.jpg"
                                alt="IconListTimeline"
                                onClick={imageClick}
                            />
                            {label &&
                                <div>
                                    {item?.text}
                                </div>}
                        </div>
                    );
                })
                }
            </div>
        </motion.div >
    );
}