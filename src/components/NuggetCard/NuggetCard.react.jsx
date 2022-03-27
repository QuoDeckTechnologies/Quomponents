// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import {
    getQuommons,
    getTranslation
} from "../../common/javascripts/helpers.js";
import _ from "lodash";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./NuggetCard.scss";
import "../../common/stylesheets/overrule.scss";

import NuggetBlock from "../NuggetBlock/NuggetBlock.react.jsx";
import Tag from "../Tag/Tag.react";
import Reward from "../Reward/Reward.react";
import IconBlock from "../IconBlock/IconBlock.react";
import ShareWidget from "../ShareWidget/ShareWidget.react";
import ArcMenu from "../ArcMenu/ArcMenu.react";

import Nugget_Profiler from "../../assets/nuggets/nugget_profiler.png";
import deafaultImage from "../../assets/default.jpeg"

NuggetCard.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================

    content: PropTypes.shape({
        title: PropTypes.string,
        baseImage: PropTypes.string,
        description: PropTypes.string,
        tag: PropTypes.shape({
            name: PropTypes.string
        })
    }),


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
    Use to define component padding in increasing order
    */
    asPadded: PropTypes.oneOf(["fitted", "compact", "normal", "relaxed"]),
    /**
    Use to float the component in parent container
    */
    asFloated: PropTypes.oneOf(["left", "right", "inline"]),
    /**
    Use to override component colors and behavior
    */
    withColor: PropTypes.shape({
        backgroundColor: PropTypes.string,
        accentColor: PropTypes.string,
        textColor: PropTypes.string,
        hoverBackgroundColor: PropTypes.string,
        hoverTextColor: PropTypes.string,
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
            ""
        ]),
        duration: PropTypes.number,
        delay: PropTypes.number,
    }),
    /**
    Use to show a translated version of the component text. Dictionary must be valid JSON. 
    */
    withTranslation: PropTypes.shape({
        lang: PropTypes.string,
        tgt: PropTypes.string,
        dictionary: PropTypes.string,
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
    Button component must have the onClick function passed as props
    */
    onClick: PropTypes.func.isRequired,
};

NuggetCard.defaultProps = {
    // Component Specific props
    //=======================================
    content: {
        title: "Measure your sales readiness",
        description: "Take this quick profile test to check how well you are prepared for a sales job... ",
        baseImage: "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg",
        tag: []
    },
    // Quommon props
    //=======================================
    asVariant: "primary",
    asSize: "normal",
    asPadded: "normal",
    asFloated: "inline",
    asAligned: "center",

    withColor: null,
    withIcon: null,
    withLabel: null,
    withAnimation: null,
    withTranslation: null,

    isHidden: false,
    isDisabled: false,

    onClick: null
};

/**
## Notes
- The design system used for this component is Material UI (@mui/material)
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css

**/
export default function NuggetCard(props) {

    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "nugget-card");

    //-------------------------------------------------------------------
    // 3. Get translation of the component
    //-------------------------------------------------------------------
    let labelContent = Object.assign({}, props.content);
    let tObj = null;

    if (
        props.withTranslation?.lang &&
        props.withTranslation.lang !== "" &&
        props.withTranslation.lang !== "en"
    ) {
        tObj = getTranslation(props.withTranslation);
        if (labelContent && tObj?.title) labelContent.title = tObj.title;
        if (labelContent && tObj?.subTitle) labelContent.subTitle = tObj.subTitle;
    }

    //-------------------------------------------------------------------
    // 4. Get the custom styling of the component
    //-------------------------------------------------------------------

    function handleNuggetBlock() {
        props.onClick()
    }

    //-------------------------------------------------------------------
    // 5. Get the Base Image
    //-------------------------------------------------------------------
    let baseImage = props.content.baseImage ? props.content?.baseImage : deafaultImage;

    //-------------------------------------------------------------------
    // 5. Get the Status of Component
    //-------------------------------------------------------------------

    // 6. Get the tags
    let tags = props.content.tag

    console.log(props.content.tag[0])
    const nuggetCard = () => {
        return (
            <div className={`qui-nugget-card-container`}>
                <div className="qui-nugget-card-body">
                    <div className={`qui-nugget-card-title-container`}>
                        <div className={`qui-nugget-block-styling`}>
                            <NuggetBlock status="none" image={Nugget_Profiler} onClick={handleNuggetBlock} />
                        </div>

                        <div className={`qui-nugget-card-title`}>
                            {props.content?.title}
                        </div>
                    </div>
                    <div className="qui-nugget-card-tag-container" style={{ backkgroundColor: "red" }}>
                        {_.map(tags, (tag, index) => {
                            return (
                                <div className={`qui-nugget-card-tag`} >
                                    <Tag content={tag} asSize="tiny" withColor={{ backgroundColor: "#FFAB00", textColor: "#000" }} />
                                </div>
                            )
                        })}

                    </div>
                    <div className="qui-nugget-card-base-image" style={{ backgroundImage: `url(${baseImage})` }}>
                    </div>
                    <div className={`qui-nugget-card-description-container`}>
                        <div className={`qui-nugget-card-description`}>
                            {props.content?.description}
                        </div>
                        <div className={`qui-nugget-card-reward`}>
                            <Reward asSize="tiny" content={{ label: "Complete to win", point: "200" }} />
                        </div>
                    </div>
                </div>
                <div className="qui-nugget-card-footer">
                    <div className={`qui-nugget-card-arc-menu`}>
                        <ArcMenu content={{ arcIcon: "fas fa-th-large" }} withColor={{ backgroundColor: "#666666" }}
                            asSize="normal"
                        />
                    </div>
                    <div className={`qui-nugget-card-share-block`}>
                        <div className={`qui-nugget-card-name`}>
                            {"Profiler"}
                        </div>
                        <div className={'qui-nugget-card-share-widget'}>
                            <ShareWidget asSize="tiny" withColor={{ textColor: "#AAAAAA" }} content={{ label: "Share", url: "https://www.quodeck.com" }} />
                        </div>
                        <div className={'qui-nugget-card-link'}>
                            <a href="https://www.quodeck.com/XrPmy_OAK" >https://www.quodeck.com/XrPmy_OAK</a>
                            <IconBlock asSize="small" asEmphasis="text" withIcon={{ name: "fas fa-copy" }} withColor={{ accentColor: "yellow" }} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div
            className={`qui ${quommonClasses.parentClasses}`}>
            <div className={`${quommonClasses.childClasses}`}>
                {nuggetCard()}
            </div>
        </div>
    );
}
