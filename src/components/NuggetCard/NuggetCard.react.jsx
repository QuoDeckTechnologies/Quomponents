// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import {
    getQuommons
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
import BannerCard from "../Carousel/BannerCard/BannerCard.react";

import deafaultImage from "../../assets/default.jpeg";
import Nugget_Story from "../../assets/nuggets/nugget_story.png";
import Nugget_Quiz from "../../assets/nuggets/nugget_quiz.png";
import Nugget_Assessment from "../../assets/nuggets/nugget_assessment.png";
import Nugget_Game from "../../assets/nuggets/nugget_game.png";
import Nugget_Article from "../../assets/nuggets/nugget_article.png";
import Nugget_Feedback from "../../assets/nuggets/nugget_feedback.png";
import Nugget_Poll from "../../assets/nuggets/nugget_poll.png";
import Nugget_Profiler from "../../assets/nuggets/nugget_profiler.png";
import Nugget_Recco from "../../assets/nuggets/nugget_recco.png";
import Nugget_Document from "../../assets/nuggets/nugget_document.png";
import Nugget_Survey from "../../assets/nuggets/nugget_survey.png";
import Nugget_Submission from "../../assets/nuggets/nugget_submission.png";
import Nugget_Calculator from "../../assets/nuggets/nugget_calculator.png";
import Nugget_Linklist from "../../assets/nuggets/nugget_linklist.png";
import Nugget_Faq from "../../assets/nuggets/nugget_faq.png";
import Nugget_Event from "../../assets/nuggets/nugget_event.png";
import Nugget_Video from "../../assets/nuggets/nugget_video.png";
import Nugget_News from "../../assets/nuggets/nugget_news.png";
import Nugget_Webinar from "../../assets/nuggets/nugget_webinar.png";
import Nugget_Gallery from "../../assets/nuggets/nugget_gallery.png";

NuggetCard.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    content: PropTypes.shape({
        status: PropTypes.oneOf(["published", "unpublished", "none"]),
        category: PropTypes.oneOf([
            "quiz",
            "assessment",
            "game",
            "profiler",
            "recommendation",
            "calculator",
            "survey",
            "poll",
            "feedback",
            "submission",
            "linklist",
            "article",
            "document",
            "video",
            "story",
            "event",
            "news",
            "webinar",
            "gallery",
            "faq",
        ]),
        tags: PropTypes.array,
        name: PropTypes.string,
        description: PropTypes.string,
        image: PropTypes.string,
        points: PropTypes.string,
        identifier: PropTypes.string
    }),

    // Quommon props
    //=======================================
    /**
    Use to float the component in parent container
    */
    asFloated: PropTypes.oneOf(["left", "right", "inline"]),
    /**
    Use to show/hide the component
    */
    isHidden: PropTypes.bool,
    /**
    Use to enable/disable the component
    */
    isDisabled: PropTypes.bool,
    /**
    Component must have the onClick function passed as props
    */
    onClick: PropTypes.func.isRequired,
};

NuggetCard.defaultProps = {
    // Component Specific props
    //=======================================
    content: {
        status: "none",
        tags: [],
        category: "profiler",
        name: "Measure your sales readiness",
        description: "Take this quick profile test to check how well you are prepared for a sales job",
        image: "https://www.amplayfy.com/public/articleImages/600aa823d7574462d1bab297/6242e5ab08022402d009e90d.jpg",
        points: "200",
        identifier: "XrPmy_OAK"
    },
    // Quommon props
    //=======================================
    asFloated: "inline",

    isHidden: false,
    isDisabled: false,

    onClick: null
};

/**
## Notes
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- Pass all the required props to the component.
- Give width to the parent component to work the component properly
**/

export default function NuggetCard(props) {

    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "nugget-card");

    //-------------------------------------------------------------------
    // 3. Get the Image
    //-------------------------------------------------------------------
    let image = props.content?.image ? props.content?.image : deafaultImage;

    //-------------------------------------------------------------------
    // 4. Get the tags
    //-------------------------------------------------------------------
    let tags = props.content?.tags ? props.content?.tags : [""];

    //-------------------------------------------------------------------
    // 5. Create link of article, based on the identifier
    //-------------------------------------------------------------------
    let link;
    if (props.content?.identifier) {
        link = "https://www.quodeck.com/" + props.content?.identifier;
    } else {
        link = "";
    }

    //-------------------------------------------------------------------
    // 6. Get the Nugget Image
    //-------------------------------------------------------------------
    const nuggetImages = {
        "quiz": Nugget_Quiz,
        "assessment": Nugget_Assessment,
        "game": Nugget_Game,
        "profiler": Nugget_Profiler,
        "recommendation": Nugget_Recco,
        "calculator": Nugget_Calculator,
        "survey": Nugget_Survey,
        "poll": Nugget_Poll,
        "feedback": Nugget_Feedback,
        "submission": Nugget_Submission,
        "linklist": Nugget_Linklist,
        "article": Nugget_Article,
        "document": Nugget_Document,
        "video": Nugget_Video,
        "story": Nugget_Story,
        "event": Nugget_Event,
        "news": Nugget_News,
        "webinar": Nugget_Webinar,
        "gallery": Nugget_Gallery,
        "faq": Nugget_Faq
    };

    //-------------------------------------------------------------------
    // 6. Capitalize first letter of category text
    //-------------------------------------------------------------------
    let category = props.content?.category ? props.content?.category?.charAt(0).toUpperCase() + props.content?.category?.slice(1) : "";

    //-------------------------------------------------------------------
    // 7. Get the NuggetCard Component
    //-------------------------------------------------------------------
    const nuggetCard = () => {
        return (
            <div className={`qui-nugget-card-container`}>
                <div className="qui-nugget-card-body">
                    <div className={`qui-nugget-card-title-container`}>
                        <div className={`qui-nugget-block-styling`}>
                            <NuggetBlock status={props.content?.status} image={nuggetImages[props.content?.category]} />
                        </div>
                        <div className={`qui-nugget-card-title`}>
                            {props.content?.name}
                        </div>
                    </div>
                    <div className="qui-nugget-card-tag-container">
                        {_.map(tags, (tag, index) => {
                            return (
                                <div key={index} className={`qui-nugget-card-tag`} >
                                    <Tag content={tag} asSize="tiny" withColor={{ backgroundColor: "#FFAB00", textColor: "#000" }} />
                                </div>
                            )
                        })}
                    </div>
                    <BannerCard {...props} content={{image:image}}/>
                    <div className={`qui-nugget-card-description-container`}>
                        <div className={`qui-nugget-card-description`}>
                            {props.content?.description}
                        </div>
                        <div className={`qui-nugget-card-reward`}>
                            <Reward asSize="tiny" content={{ label: "Complete to win", point: props.content?.points }} />
                        </div>
                    </div>
                </div>
                <div className="qui-nugget-card-footer">
                    <div className={`qui-nugget-card-arc-menu`}>
                        <ArcMenu
                            withColor={{ backgroundColor: "#666666" }}
                            asSize="tiny"
                            type="add"
                            arcIcon="fas fa-th-large"
                            position="bottom-left"
                            onClick={() => { console.log("Arc Menu") }}
                        />
                    </div>
                    <div className={`qui-nugget-card-share-block`}>
                        <div className={`qui-nugget-card-name`}>
                            {category}
                        </div>
                        <div className={'qui-nugget-card-share-widget'}>
                            <ShareWidget asSize="tiny" withColor={{ textColor: "#AAAAAA" }} content={{ label: "Share", url: link }} />
                        </div>
                        <div className={'qui-nugget-card-link-container'}>
                            <a className={'qui-nugget-card-link'} href={link}>{link}</a>
                            <IconBlock asSize="small" asEmphasis="text" withIcon={{ name: "fas fa-copy" }} withColor={{ accentColor: "#FFBF00" }}
                                onClick={() => { navigator.clipboard.writeText(link) }} />
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
