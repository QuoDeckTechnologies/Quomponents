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
                image: PropTypes.object,
                text: PropTypes.string,
            })),

    }).isRequired,
    /**
    IconListTimeline can set image, backgroundImage & iconlist's image from imageLibrary array
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
    Use to float the component in parent container
    */
    asFloated: PropTypes.oneOf(["left", "right", "none", "inline"]),
    /**
    Use to override component colors and behavior
    */
    withColor: PropTypes.shape({
        textColor: PropTypes.string,
        backgroundColor: PropTypes.string,
        accentColor: PropTypes.string,
        slideHeaderTextColor: PropTypes.string,
        slideHeaderBackgroundColor: PropTypes.string,
        slideHeaderAccentColor: PropTypes.string,
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

IconListTimeline.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    data: {},
    imageLibrary: null,
    slideId: 0,
    //=======================================
    // Quommon props
    //=======================================
    asFloated: "left",
    withColor: null,
    withAnimation: null,

    isHidden: false,
};
/**
## Notes
- Displays a IconListTimeline with Image, Text & SlideHeader
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
    // 3. Use to set Color of the imported components
    //-------------------------------------------------------------------
    let slideHeaderColors = {
        textColor: withColor?.slideHeaderTextColor,
        accentColor: withColor?.slideHeaderAccentColor,
        backgroundColor: withColor?.slideHeaderBackgroundColor
    }
    //-------------------------------------------------------------------
    // 4. Function to set label on click of image
    //-------------------------------------------------------------------
    const [label, setLabel] = useState(_.map(data.iconlist, () => false));

    let imageClick = (index) => {
        let newState = label
        newState[index] = true;
        let newLabelState = [...label]
        setLabel(newLabelState)
    }
    //-------------------------------------------------------------------
    // 5. Function to set background
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
                className={`qui-icon-list-timeline-card ${quommonClasses.childClasses}`}
                key={"icon-list-timeline" + slideId}
            >
                {!data?.image && (data?.title || data?.subtitle) && (
                    <SlideHeader {...props}
                        content={{ title: data?.title, subTitle: data?.subtitle }}
                        withColor={slideHeaderColors}
                    />
                )}
                {data?.image && (
                    <img
                        className="qui-icon-list-timeline-image"
                        src={resolveImage(data?.image.id, imageLibrary)}
                        alt="IconListTimeline"
                    />
                )}
                {_.map(data?.iconlist, (item, index) => {
                    let listTextStyle = {
                        display:
                            label[index] === true ? "block" : "none",
                        marginLeft: "15px",
                        color: withColor?.textColor,
                    };
                    return (
                        <div
                            className="qui-iconlisttime-list-container"
                            key={`img- ${index}`}
                        >
                            <div
                                className="qui-iconlisttime-line"
                                style={{ backgroundColor: withColor?.accentColor }}
                            />
                            <img
                                className="qui-iconlisttime-image"
                                src={resolveImage(item?.image.id, imageLibrary)}
                                alt="IconListTimeline"
                                onClick={() => imageClick(index)}
                            />
                            <div style={listTextStyle}>
                                {item?.text}
                            </div>
                        </div>
                    );
                })
                }
            </div>
        </motion.div >
    );
}