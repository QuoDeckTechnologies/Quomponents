// Import npm packages
import React, { useState } from "react";
import PropTypes from "prop-types";
import {
    getQuommons,
} from "../../common/javascripts/helpers.js";
import YouTube from "react-youtube";
import { Player, BigPlayButton } from "video-react";
import "video-react/dist/video-react.css";
import Vimeo from "@u-wave/react-vimeo";
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
    url: PropTypes.string.isRequired,
    // Quommon props
    //=======================================
    /**
    Use to show/hide the component
    */
    isHidden: PropTypes.bool,
    /**
    Use to play auto the component
    */
    autoplay: PropTypes.bool,

    loop: PropTypes.bool,
    /**
    Use to enable/disable the component
    */
    isDisabled: PropTypes.bool,
    /**
    Videobox component must have the onReady function passed as props
    */
    onReady: PropTypes.func,
    /**
    Videobox component must have the onPlay function passed as props
    */
    onPlay: PropTypes.func,
    /**
    Videobox component must have the onPause function passed as props
    */
    onPause: PropTypes.func,
    /**
    Videobox component must have the onEnd function passed as props
    */
    onEnd: PropTypes.func,

};

Videobox.defaultProps = {
    // Component Specific props
    //=======================================
    url: "https://www.youtube.com/watch?v=NpEaa2P7qZI",
    // Quommon props
    //=======================================
    autoplay: true,
    loop: false,

    isHidden: false,
    isDisabled: false,
};

/**
## Notes
- The animation system used for component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function Videobox(props) {

    const { url, autoplay, loop } = props;

    const [error, setError] = useState(false);

    function onReady(e) {
        if (e.target && props.autoplay) {
            e.target.playVideo();
        }
        if (props.onReady) { props.onReady(e) };
    }

    function onPlay(e) {
        if (props.onPlay) { props.onPlay(e) };
    };

    function onEnd(e) {
        if (props.loop) e.target.playVideo();
        if (props.onEnd) { props.onEnd(e) };
    };

    function onPause(e) {
        if (props.onPause) { props.onPause(e) };
    };

    function onError(e) {
        setError(true);
    };
    const loadPlayer = () => {
        if (error) {
            return (
                <div className="qui-errorbox">
                    {" "}
                    Error While loading video..
                    please make sure that you are connected to internet and try again later{" "}
                </div>
            );
        } else {
            const opts = {
                playerVars: {
                    autoplay: autoplay ? 1 : 0,
                    loop: loop ? 1 : 0,
                },
            };

            let getVideoId = (url) => {
                let videoId = "";
                if (url.indexOf("v=") === -1) {
                    var video_array = url.split("/");
                    videoId = video_array[video_array.length - 1];
                }
                else {
                    videoId = url.split("v=")[1];
                    var ampersandPosition = videoId.indexOf("&");
                    if (ampersandPosition !== -1) {
                        videoId = videoId.substring(0, ampersandPosition);
                    }
                }
                return videoId;
            };

            if (url.indexOf("vimeo") !== -1) {

                return (
                    <div
                        className="video-responsive vimeo-embed-container"
                    >
                        <Vimeo
                            className="react-player"
                            video={url}
                            autoplay={props.autoplay}
                            playerOptions={{ width: window.innerWidth }}
                            onReady={onReady}
                            onPlay={onPlay}
                            onEnd={onEnd}
                            onError={onError}
                            onPause={onPause}
                        />
                    </div>
                );
            } if (url.indexOf("youtu.be") !== -1 || url.indexOf("youtube") !== -1) {
                return (
                    <div
                        className="video-responsive"
                    >
                        <YouTube
                            className="react-player"
                            videoId={getVideoId(url)}
                            opts={opts}
                            onReady={onReady}
                            onPlay={onPlay}
                            onEnd={onEnd}
                            onError={onError}
                            onPause={onPause}
                        />
                    </div>
                );
            }
            else {
                return (
                    <div
                        className="video-responsive"
                    >
                        <Player
                            src={url}
                            playsInline
                            autoplay={props.autoplay}
                        >
                            <BigPlayButton position="center" />
                        </Player>
                    </div>
                );
            }
        }
    };

    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "video-box");

    // ========================= Render Function =================================
    return (
        <div
            className={`qui ${quommonClasses.parentClasses}`}
        >
            <div className={`qui-react-video-player ${quommonClasses.childClasses}`}>
                {loadPlayer()}
            </div>
        </div>
    );

}