// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import {
    getQuommons
} from "../../common/javascripts/helpers.js";
import _ from "lodash";
import { nugget } from "../../assets/nuggets/nuggets.js";

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

import deafaultImage from "../../assets/default.jpeg";

NuggetCard.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    content: PropTypes.shape({
        published: PropTypes.bool,
        category: PropTypes.string,
        tags: PropTypes.array,
        name: PropTypes.string,
        description: PropTypes.string,
        image: PropTypes.string,
        points: PropTypes.string,
        identifier: PropTypes.string,
        startDate: PropTypes.string,
        endDate: PropTypes.string
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
        published: false,
        tags: [],
        category: "Profiler",
        name: "Measure your sales readiness",
        description: "Take this quick profile test to check how well you are prepared for a sales job",
        image: "https://www.amplayfy.com/public/articleImages/600aa823d7574462d1bab297/6242e5ab08022402d009e90d.jpg",
        points: "200",
        identifier: "XrPmy_OAK",
        startDate: "26th Feb",
        endDate: "3rd May"
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
    // 2. Handle NuggetBlock onClick Event
    //-------------------------------------------------------------------
    function handleNuggetBlock() {
        console.log("Nugget Block");
    }

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
    let link = "https://www.quodeck.com/" + props.content?.identifier;

    //-------------------------------------------------------------------
    // 6. Get the Nugget Image and Nugget Category
    //-------------------------------------------------------------------
    let nuggetCategory;
    nugget.filter(nuggets => nuggets.name.toUpperCase().includes(props.content?.category?.toUpperCase())).map(filteredCategory => (
        nuggetCategory = {
            name: filteredCategory.name,
            image: filteredCategory.image
        }
    ))

    //-------------------------------------------------------------------
    // 7. Get the NuggetCard Component
    //-------------------------------------------------------------------
    const nuggetCard = () => {
        return (
            <div className={`qui-nugget-card-container`}>
                <div className="qui-nugget-card-body">
                    <div className={`qui-nugget-card-title-container`}>
                        <div className={`qui-nugget-block-styling`}>
                            <NuggetBlock published={props.content?.published} image={nuggetCategory.image} onClick={handleNuggetBlock} />
                        </div>
                        <div className={`qui-nugget-card-title`}>
                            {props.content?.name}
                        </div>
                    </div>
                    <div className="qui-nugget-card-tag-container" style={{ backkgroundColor: "red" }}>
                        {_.map(tags, (tag, index) => {
                            return (
                                <div key={index} className={`qui-nugget-card-tag`} >
                                    <Tag content={tag} asSize="tiny" withColor={{ backgroundColor: "#FFAB00", textColor: "#000" }} />
                                </div>
                            )
                        })}
                    </div>
                    <div className="qui-nugget-card-base-image" style={{ backgroundImage: `url(${image})` }}>
                    </div>
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
                            {nuggetCategory.name}
                        </div>
                        <div className={'qui-nugget-card-share-widget'}>
                            <ShareWidget asSize="tiny" withColor={{ textColor: "#AAAAAA" }} content={{ label: "Share", url: props.content?.link }} />
                        </div>
                        <div className={'qui-nugget-card-link-container'}>
                            <a className={'qui-nugget-card-link'} href={link}>{link}</a>
                            <IconBlock asSize="small" asEmphasis="text" withIcon={{ name: "fas fa-copy" }} withColor={{ accentColor: "yellow" }}
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
