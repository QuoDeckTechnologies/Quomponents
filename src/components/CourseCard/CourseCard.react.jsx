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
import BannerCard from "../Carousel/BannerCard/BannerCard.react";

import Nugget_Course from "../../assets/nuggets/nugget_course.png";
import deafaultImage from "../../assets/default.jpeg";


CourseCard.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    content: PropTypes.shape({
        status: PropTypes.string,
        courseType: PropTypes.oneOf([
            "standard",
            "exam"
        ]),
        wrapper: PropTypes.string,
        tags: PropTypes.array,
        courseName: PropTypes.string,
        description: PropTypes.string,
        courseImage: PropTypes.string,
        points: PropTypes.string,
        identifier: PropTypes.string,
        date: PropTypes.shape({
            start_date: PropTypes.string,
            end_date: PropTypes.string
        })
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

CourseCard.defaultProps = {
    // Component Specific props
    //=======================================
    content: {
        status: "",
        tags: [],
        courseType: "standard",
        wrapper: "carnival",
        courseName: "Measure your sales readiness",
        description: "Take this quick profile test to check how well you are prepared for a sales job",
        courseImage: "https://topkit.org/wp-content/uploads/2018/07/Sample-Course.png",
        points: "200",
        identifier: "XrPmy_OAK",
        date: {
            start_date: "2016-01-04 10:34:23",
            end_date: "2016-03-15 10:34:23"
        }
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
export default function CourseCard(props) {
    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "course-card");

    //-------------------------------------------------------------------
    // 2.  Set image according to course type
    //-------------------------------------------------------------------
    let image;
    if (props.content?.wrapper !== "none") {
        image = props.content?.courseImage ? props.content?.courseImage : props.content?.wrapper ? "assets/courses/" + props.content?.wrapper + "/play_backdrop.jpg" : deafaultImage;
    } else {
        image = props.content?.courseImage ? props.content?.courseImage : deafaultImage;
    }

    //-------------------------------------------------------------------
    // 3. Get the tags
    //-------------------------------------------------------------------
    let tags = props.content?.tags ? props.content?.tags : [""];

    //-------------------------------------------------------------------
    // 4.  Create link of article based on identifier
    //-------------------------------------------------------------------
    let link;
    if (props.content?.identifier) {
        link = "https://www.quodeck.com/" + props.content?.identifier;
    } else {
        link = "";
    }
    //-------------------------------------------------------------------
    // 5. Standardize Date
    //-------------------------------------------------------------------
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "October", "Nov", "Dec"];

    let sD = new Date(props.content?.date?.start_date) // Create the instance of start date
    let eD = new Date(props.content?.date?.end_date) // Create the instance of end date
    let startDayNum = sD.toLocaleString('en-US', { day: 'numeric' }); // Get start day in numeric
    let endDayNum = eD.toLocaleString('en-US', { day: 'numeric' }); // Get end day in numeric
    let startMonthWord = months[sD.getMonth()]; //Get month in words
    let endMonthWord = months[eD.getMonth()]; //Convert month number to word

    //Adding suffix of th, st, nd, rd after months
    let dateSuffix = ["th", "st", "nd", "rd"];
    let startDay = sD % 100;
    let endDay = eD % 100;

    //Set the startDate and endDate
    
    let startDate = startDayNum + (dateSuffix[(startDay - 20) % 10] || dateSuffix[startDay] || dateSuffix[0]) + " " + startMonthWord;
    let endDate = endDayNum + (dateSuffix[(endDay - 20) % 10] || dateSuffix[endDay] || dateSuffix[0]) + " " + endMonthWord;

    //-------------------------------------------------------------------
    // 6. Capitalize first letter of wrapper text
    //-------------------------------------------------------------------
    let wrapper = props.content?.wrapper ? props.content?.wrapper?.charAt(0).toUpperCase() + props.content?.wrapper?.slice(1): "";

    //-------------------------------------------------------------------
    // 7. Get the CourseCard Component
    //-------------------------------------------------------------------
    const CourseCard = () => {
        return (
            <div className={`qui-course-card-container`}>
                <div className="qui-course-card-body">
                    <div className={`qui-course-card-title-container`}>
                        <div className={`qui-nugget-block-styling`}>
                            <NuggetBlock status={props.content?.status} image={Nugget_Course} onClick={() => { console.log("Nugget Block") }} />
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
                            <IconBlock asSize="tiny" asEmphasis="text" withIcon={{ name: "far fa-calendar-alt", size: "2em" }} withColor={{ accentColor: "#000" }}
                            />
                            <div className={`qui-course-card-date`}>
                                {startDate} - {endDate}
                            </div>
                        </div>
                    </div>
                    <BannerCard {...props} content={{image:image , header:wrapper}}/>
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
                            {wrapper}
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