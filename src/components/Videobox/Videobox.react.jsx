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
Videobox.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    Use to define url of component
    */
    url: PropTypes.string,
    // Quommon props
    //=======================================
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
    Videobox component must have the onReady function passed as props
    */
    onReady: PropTypes.func,
    /**
    Videobox component must have the onError function passed as props
    */
    onError: PropTypes.func,
    /**
    Videobox component must have the onPlay function passed as props
    */
    onPlay: PropTypes.func,
    /**
    Videobox component must have the onPause function passed as props
    */
    onPause: PropTypes.func,
    /**
    Videobox component must have the onEnded function passed as props
    */
    onEnded: PropTypes.func,

};

Videobox.defaultProps = {
    // Component Specific props
    //=======================================
    url: "",
    // Quommon props
    //=======================================
    withAnimation: null,

    isHidden: false,
    isDisabled: false,
};

/**
## Notes
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function Videobox(props) {

    let onReady = () => {
        return props.onReady;
    };

    let onError = () => {
        return props.onError;
    };

    let onPlay = () => {
        return props.onPlay;
    };

    let onPause = () => {
        return props.onPause;
    };

    let onEnded = () => {
        return props.onEnded;
    };

    
    const {url}=props;
    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "video-box");
    //-------------------------------------------------------------------
    // 2. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);

    // ========================= Render Function =================================
    return (
        <motion.div
            initial={animate?.from}
            animate={animate?.to}
            className={`qui ${quommonClasses.parentClasses}`}
        >
            <div className={`react-video-player`}>
                <ReactPlayer
                    className="react-player"
                    url={url ? url : "https://www.youtube.com/watch?v=NpEaa2P7qZI"}
                    width="100%"
                    height="100%"
                    playing
                    controls={true}
                    onReady={onReady()}
                    onError={onError()}
                    onPlay={onPlay()}
                    onPause={onPause()}
                    onEnded={onEnded()}
                />
            </div>
        </motion.div>
    );
}