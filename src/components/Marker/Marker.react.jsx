import React from "react";
import PropTypes from "prop-types";
import { motion, MotionConfig } from "framer-motion";
import _ from "lodash";
import {
    getAnimation,
    getQuommons,
} from "../../common/javascripts/helpers";
import "../../common/stylesheets/common.css";
import "./Marker.scss";
import "../../common/stylesheets/overrule.scss";
import { WrapperList } from "../../common/schema/WrapperSchema.react";

Marker.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    content: PropTypes.shape({
        wrapper: PropTypes.string,
        inset: PropTypes.number
    }),
    /**
    Use to set the state of MobileToolbar 
    */
    status: PropTypes.oneOf([
        "current",
        "complete",
        "incomplete",
    ]),
    //=======================================
    // Quommon props
    //=======================================
    /**
    Use to define component size in increasing order
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
    component must have the onClick function passed as props
    */
    onClick: PropTypes.func.isRequired,
};

Marker.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    content: {},
    status: "current",

    //=======================================
    // Quommon props
    //=======================================
    asSize: "normal",

    withAnimation: null,

    isHidden: false,
    isDisabled: false,
};
/**
## Notes
- The design system used for this component is HTML and CSS
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function Marker(props) {
    //-------------------------------------------------------------------
    // 1. Destructuring content from props
    //-------------------------------------------------------------------
    let { content, status } = props;
    //-------------------------------------------------------------------
    // 2. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "marker");
    //-------------------------------------------------------------------
    // 3. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);


    // ========================= Render Function =================================

    let node_list = content?.node?.contentList.length;
    let isPortrait = window.innerHeight > window.innerWidth;

    const iconWrapper = {
        float: "right",
        marginTop: "6px",
        color: "#121212",
    };
    let gameList = {
        marginTop: 0,
        height: node_list > 4 ? "23vh" : "",
        overflow: "auto",
    };

    let indicator = (deck) => {
        return props.completion[deck.deckId] === 100 ? (
            <i className="qui-indicator" name={"check circle"} />
        ) : (
            <i className="qui-indicator" name={"bullseye"} />
        );
    };
    let iconName = (readerType) => {
        switch (readerType) {
            case "videck":
                return "video";
            case "docdeck":
                return "file pdf outline";
            case "assessment":
                return "treatment";
            case "survey":
                return "wpforms";
            case "adaptive":
                return "random";
            case "quiz":
                return "question circle outline";
            case "casestudy":
                return "archive";
            case "dialogue":
                return "talking outline";
            case "qdf":
                return "file outline";
            case "game":
                return "game";
            default:
                return "file outline";
        }
    };
    let markerBlock = (
        <div className={`qui ${quommonClasses.parentClasses}`}>
            <div className={`qui ${quommonClasses.childClasses}`}>
                <img
                    className="qui-marker-img"
                    src={
                        WrapperList[content?.wrapper]?.customMarker
                            ? "assets/courses/" +
                            content?.wrapper +
                            "/markers/" +
                            status +
                            ".png"
                            : "assets/images/configurable/wrappericons/" +
                            status +
                            ".png"
                    }
                />
                {WrapperList[content?.wrapper]?.sequenceInset && (
                    <div className="qui-marker-text">{content?.inset}</div>
                )}
            </div>
        </div>
    );
    let prevComplete = 0;
    let currComplete = 0;
    let marker =
        status === "current" ? (
            <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="qui-marker-style">
                    {markerBlock}
                </div>
            </motion.div>
        ) : (
            <div className="qui-marker-style">
                {markerBlock}
            </div>
        );
    return isPortrait || status !== null ? (
        marker
    ) : (
        <div trigger={marker} onClick={props.onClick} className="qui-marker-popup">
            <img
                src={
                    "assets/courses/" +
                    content?.wrapper +
                    "/header.jpg"
                }
                alt=""
                className="qui-marker-imagestyle"
            />
            <div className="qui-marker-wellstyle">
                <h2 className="qui-marker-header">{content?.node?.name}</h2>
                <p className="qui-marker-desc">
                    {content?.node?.description}
                </p>
            </div>

            <ul key={'list-' + Math.random()} divided style={gameList}>
                {_.map(content?.node?.contentList, (deck, index) => {
                    prevComplete = currComplete !== undefined ? currComplete : 0;
                    currComplete = props.completion[deck._id];
                    return (
                        <li
                            key={`deckitem-${deck._id}`}
                            style={{
                                padding: "5px 10px",
                                opacity: props.sequential && index !== 0
                                    ? prevComplete === 100 ? "none" : "0.3" : "none",
                                background: props.sequential && index !== 0
                                    ? prevComplete === 100 ? "none" : "#e8e8e8" : "none"
                            }}
                            onClick={props.sequential && index !== 0 ? prevComplete > 80 ?
                                () => props.openDeck(
                                    {
                                        deckId: deck._id,
                                        readerType: deck.readerType,
                                    },
                                    content?.inset - 1
                                ) : null :
                                () => props.openDeck(
                                    {
                                        deckId: deck._id,
                                        readerType: deck.readerType,
                                    },
                                    content?.inset - 1
                                )
                            }
                        >
                            <div className="qui-itemcontent">
                                {indicator({
                                    deckId: deck._id,
                                    readerType: deck.readerType,
                                })}
                                {deck.name}
                            </div>
                            <div style={iconWrapper}>
                                <i
                                    name={iconName(deck.readerType)}
                                />
                                <i className="fa fa share" />
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}