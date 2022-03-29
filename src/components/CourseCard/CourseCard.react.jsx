// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import {
    getQuommons
} from "../../common/javascripts/helpers.js";
import _ from "lodash";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./CourseCard.scss";
import "../../common/stylesheets/overrule.scss";

import NuggetBlock from "../NuggetBlock/NuggetBlock.react.jsx";
import Tag from "../Tag/Tag.react";
import Reward from "../Reward/Reward.react";
import IconBlock from "../IconBlock/IconBlock.react";
import ShareWidget from "../ShareWidget/ShareWidget.react";
import ArcMenu from "../ArcMenu/ArcMenu.react";

import Nugget_Course from "../../assets/nuggets/nugget_course.png";
import deafaultImage from "../../assets/default.jpeg";

CourseCard.propTypes = {
//=======================================
// Component Specific props
//=======================================
content: PropTypes.shape({
    published:PropTypes.bool,
    category:PropTypes.string,
    tags: PropTypes.array,
    courseName: PropTypes.string,
    description:PropTypes.string,
    baseImage: PropTypes.string,
    points:PropTypes.string,
    identifier:PropTypes.string,
    date:PropTypes.string
}),

// Quommon props
//=======================================
/**
Use to float the component in parent container
*/
asFloated: PropTypes.oneOf(["left", "right", "inline"]),
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
Component must have the onClick function passed as props
*/
onClick: PropTypes.func.isRequired,
};

CourseCard.defaultProps = {
// Component Specific props
//=======================================
content: {
    published:false,
    tags: [],
    category:"Course",
    courseName: "Measure your sales readiness",
    description: "Take this quick profile test to check how well you are prepared for a sales job",
    image: "https://www.amplayfy.com/public/articleImages/600aa823d7574462d1bab297/6242e5ab08022402d009e90d.jpg",
    points:"200",
    identifier:"XrPmy_OAK",
    startDate:"26th Feb",
    endDate: "3rd May"
},    
// Quommon props
//=======================================
asFloated: "inline",

withAnimation: null,

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
export default function CourseCard(props) {
    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "course-card");

    //-------------------------------------------------------------------
    // 2. Get the Base Image
    //-------------------------------------------------------------------
    let image = props.content?.image ? props.content?.image : deafaultImage;

    //-------------------------------------------------------------------
    // 3. Get the tags
    //-------------------------------------------------------------------
    let tags = props.content?.tags ? props.content?.tags : [""];

    //-------------------------------------------------------------------
    // 4.  Create link of article based on this identifier
    //-------------------------------------------------------------------
    let link = "https://www.quodeck.com/"+ props.content?.identifier;

    const CourseCard = () => {
    return (
        <div className={`qui-course-card-container`}>
            <div className="qui-course-card-body">
                <div className={`qui-course-card-title-container`}>
                    <div className={`qui-nugget-block-styling`}>
                        <NuggetBlock published={props.content?.published} image={Nugget_Course} onClick={()=>{console.log("Nugget Block")}} />
                    </div>
                    <div className={`qui-course-card-title`}>
                        {props.content?.courseName}
                    </div>
                </div>
                <div className="qui-course-card-tag-and-date-container">
                <div className="qui-course-card-tag-container">
                    {_.map(tags, (tag, index) => {
                        return (
                            <div key={index} className={`qui-course-card-tag`} >
                                <Tag content={tag} asSize="tiny" withColor={{ backgroundColor: "#FFAB00", textColor: "#000" }} />
                            </div>
                        )
                    })}
                </div>
                <div className="qui-course-card-date-container">
                <IconBlock asSize="tiny" asEmphasis="text" withIcon={{ name: "far fa-calendar-alt" , size:"2em"}} withColor={{ accentColor: "#000" }}
                        onClick={()=>{console.log("Icon Block")}}    />
                    <div>
                    {props.content?.startDate} - {props.content?.endDate}
                    </div>
                </div>
                </div>
            
                <div className="qui-course-card-base-image" style={{ backgroundImage: `url(${image})` }}>
                </div>
                <div className={`qui-course-card-description-container`}>
                    <div className={`qui-course-card-description`}>
                        {props.content?.description}
                    </div>
                    <div className={`qui-course-card-reward`}>
                        <Reward asSize="tiny" content={{ label: "Complete to win", point: props.content?.points }} />
                    </div>
                </div>
            </div>
            <div className="qui-course-card-footer">
                <div className={`qui-course-card-arc-menu`}>
                    <ArcMenu
                        withColor={{ backgroundColor: "#666666" }}
                        asSize="tiny"
                        type="add"
                        arcIcon="fas fa-th-large"
                        position="bottom-left"
                        onClick={() => { console.log("Arc Menu") }}
                    />
                </div>
                <div className={`qui-course-card-share-block`}>
                    <div className={`qui-course-card-name`}>
                        {props.content?.nuggetType}
                    </div>
                    <div className={'qui-course-card-share-widget'}>
                        <ShareWidget asSize="tiny" withColor={{ textColor: "#AAAAAA" }} content={{ label: "Share", url: link }} />
                    </div>
                    <div className={'qui-course-card-link-container'}>
                        <a className={'qui-course-card-link'} href={link}>{link}</a>
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
            {CourseCard()}
        </div>
    </div>
    );
}