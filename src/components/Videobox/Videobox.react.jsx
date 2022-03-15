// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import ReactPlayer from 'react-player';
import {
    getQuommons,
    getAnimation,
} from "../../common/javascripts/helpers.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./Videobox.scss";
import "../../common/stylesheets/overrule.scss";
import videoBoxImg from "../../assets/videoplaceholder.png"
Videobox.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    Use to define title, sub-title and image of component
    */
    content: PropTypes.shape({
        url: PropTypes.string,
    }).isRequired,
    // Quommon props
    //=======================================
    /**
    Use to define component text size in increasing order
    */
    asSize: PropTypes.oneOf([
        "tiny",
        "small",
        "normal",
        "big",
        "huge",
        "massive",
    ]),
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
            ""
        ]),
        duration: PropTypes.number,
        delay: PropTypes.number,
    }),
    /**
    Use to show/hide the component
    */
    isHidden: PropTypes.bool,
    /**
    Use to enable/disable the component
    */
    isDisabled: PropTypes.bool,
    /**
    Videobox component must have the onClick function passed as props
    */
    onClick: PropTypes.func.isRequired,
};

Videobox.defaultProps = {
    // Component Specific props
    //=======================================
    content: {},
    // Quommon props
    //=======================================
    asSize: "normal",

    withAnimation: null,

    isHidden: false,
    isDisabled: false,
};

/**
## Notes
- The design system used for this component is Material UI (@mui/material)
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- Action Button has 2 phases, with button and with image. Pass props according to your convenience
- isEllipse is a prop to add ellipse background or not.
**/
export default function Videobox(props) {
    //-------------------------------------------------------------------
    // 1. Destructuring content from props
    //-------------------------------------------------------------------
    let { content } = props;    
    //-------------------------------------------------------------------
    // 2. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "video-box");
    //-------------------------------------------------------------------
    // 3. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);
    //-------------------------------------------------------------------
    // 4. Get the Status of Component
    //-------------------------------------------------------------------
    const videoBoxBackground = (content) => {
        let videoBoxStyle = content?.url ? "videoplayer" : "videoboximg";
        if (content?.url) {
            return (
                <div className={`videoplayer ${videoBoxStyle}`}>
                    <ReactPlayer
                        url={content.url}
                        width="100%"
                        playing
                        controls={true}
                    />
                </div>
            )
        } else {
            return (
                <div className={`${videoBoxStyle}`}>
                    <img
                        alt="img"
                        className="videoboximg"
                        src={videoBoxImg}
                        onClick={props.onClick}
                    />
                </div>
            )
        }
    }
    return (
        <motion.div
            initial={animate?.from}
            animate={animate?.to}
            className={`qui ${quommonClasses.parentClasses}`}>
            <div className={`${quommonClasses.childClasses}`}>
                {videoBoxBackground(props.content)}
            </div>
        </motion.div>
    );
}