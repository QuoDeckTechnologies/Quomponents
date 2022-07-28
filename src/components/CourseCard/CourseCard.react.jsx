// Import npm packages
import React, { useState } from "react";
import PropTypes from "prop-types";
import { getQuommons } from "../../common/javascripts/helpers.js";
import _ from "lodash";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./CourseCard.scss";
import "../../common/stylesheets/overrule.scss";

import NuggetBlock from "../NuggetBlock/NuggetBlock.react";
import Tag from "../Tag/Tag.react";
import Reward from "../Reward/Reward.react";
import ShareWidget from "../ShareWidget/ShareWidget.react";
import ArcMenu from "../ArcMenu/ArcMenu.react";
import BannerCard from "../Carousel/BannerCard/BannerCard.react";
import Nugget_Course from "../../assets/nuggets/nugget_course.png";
import defaultImage from "../../assets/default.jpeg";

CourseCard.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
  Use to set published props
  */
  published: PropTypes.bool,
  /**
  Use to set types props
  */
  type: PropTypes.oneOf(["standard", "exam"]),
  /**
  Use to set wrapper props
  */
  wrapper: PropTypes.string,
  /**
  Use to set tags props
  */
  tags: PropTypes.array,
  /**
  Use to set name props
  */
  name: PropTypes.string,
  /**
  Use to set description
  */
  description: PropTypes.string,
  /**
  Use to set image props
  */
  image: PropTypes.string,
  /**
  Use to set points
  */
  points: PropTypes.number,
  /**
  Use to set identifier
  */
  identifier: PropTypes.string,
  /**
  Use to set date
  */
  date: PropTypes.object,
  /**
  Use to set sequential
  */
  sequential: PropTypes.bool,
  //=======================================
  // Quommon props
  //=======================================
  /**
  Use to float the component in parent container
  */
  asFloated: PropTypes.oneOf(["left", "right", "inline", "none"]),
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
  //=======================================
  // Component Specific props
  //=======================================
  published: false,
  type: "",
  wrapper: "",
  tags: [],
  name: "",
  description: "",
  image: "",
  points: 0,
  identifier: "",
  date: {
    start_date: "",
    end_date: "",
  },
  sequential: false,
  //=======================================
  // Quommon props
  //=======================================
  asFloated: "inline",
  isHidden: false,
  isDisabled: false,
  onClick: null,
};
/**
## Notes
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- Pass all the required props to the component.
**/
export default function CourseCard(props) {
  //-------------------------------------------------------------------
  // 1. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "course-card");
  //-------------------------------------------------------------------
  // 2.  Set image according to course type
  //-------------------------------------------------------------------
  let image = props.image
    ? props.image
    : props.wrapper
    ? "assets/courses/" + props.wrapper + "/play_backdrop.jpg"
    : defaultImage;
  //-------------------------------------------------------------------
  // 3.  Create link of article based on identifier
  //-------------------------------------------------------------------
  let link;
  if (props.identifier) {
    link = "https://www.quodeck.com/" + props.identifier;
  } else {
    link = "";
  }
  //-------------------------------------------------------------------
  // 4. Get the status of Sequential course
  //-------------------------------------------------------------------
  let isSequential = props.sequential
    ? "Sequential Course"
    : "Non Sequential Course";
  //-------------------------------------------------------------------
  // 5. Get translation of the component
  //-------------------------------------------------------------------
  let points = props.points;
  let shareLabel = "Share";
  let rewardLabel = "Complete to win";
  //-------------------------------------------------------------------
  // 6. Standardize Date
  //-------------------------------------------------------------------
  let start_date, end_date;
  start_date = new Date(props.date?.start_date).toDateString();
  end_date = new Date(props.date?.end_date).toDateString();
  //-------------------------------------------------------------------
  // 7. Function to return suffix
  //-------------------------------------------------------------------
  const getSuffix = (digit) => {
    if (digit === "1") {
      return "st";
    }
    if (digit === "2") {
      return "nd";
    }
    if (digit === "3") {
      return "rd";
    } else return "th";
  };
  //-------------------------------------------------------------------
  // 8. Function to return date with suffix
  //-------------------------------------------------------------------
  const getDateWithSuffix = (date) => {
    if (date) {
      let d = date?.split("");
      if (d[0] === "0") {
        return `${d[1]}${getSuffix(d[1])}`;
      } else if (d[0] === "1") {
        return `${date}${getSuffix("")}`;
      } else {
        return `${date}${getSuffix(d[1])}`;
      }
    }
  };
  //-------------------------------------------------------------------
  // 10. Function to handle date string
  //-------------------------------------------------------------------
  const getDate = () => {
    let startDateSplit = start_date?.split(" ");
    let startMonth = startDateSplit[1];
    let startDate = getDateWithSuffix(startDateSplit[2]);
    let endDateSpilt = end_date?.split(" ");
    let endMonth = endDateSpilt[1];
    let endDate = getDateWithSuffix(endDateSpilt[2]);
    return `${startDate} ${startMonth} - ${endDate} ${endMonth}`;
  };
  //-------------------------------------------------------------------
  // 11. Get published status
  //-------------------------------------------------------------------
  let status = props.published ? "published" : "none";
  //-------------------------------------------------------------------
  // 12. Get header of wrapper
  //-------------------------------------------------------------------
  let header = "";
  if (props.wrapper) {
    if (props.wrapper?.toLowerCase() === "none" || props.wrapper === "") {
      header = "";
    } else {
      header = props.wrapper;
    }
  }
  //-------------------------------------------------------------------
  // 13. If number of tags greater than 3 or if the tags contains long text then will display showmore icon
  //-------------------------------------------------------------------
  let truncate;
  let tag1Length = props.tags?.length > 0 ? props.tags[0]?.length : "";
  let tag2Length = props.tags?.length > 0 ? props.tags[1]?.length : "";
  let tag3Length = props.tags?.length > 0 ? props.tags[2]?.length : "";
  let showMoreBtn = false;
  let minTags = 3;
  let maxTags = props.tags?.length;

  let showTags = 3;
  const [expandTags, setExpandTags] = useState(false);
  const [itirate, setItirate] = useState(showTags);
  const [lessTags] = useState(
    props.tags.slice(0, 3).map((ele) => {
      if (ele.length > 20) {
        return ele.slice(0, 20) + "...";
      } else return ele;
    })
  );

  const handleLessTags = () => {
    setItirate(minTags);
    setExpandTags(false);
  };
  const handleMoreTags = () => {
    setItirate(maxTags);
    setExpandTags(true);
  };
  if (
    tag1Length >= 15 ||
    tag2Length >= 15 ||
    tag3Length >= 15 ||
    props.tags?.length > 3
  ) {
    showMoreBtn = true;
    if (expandTags === true) {
      truncate = "qui-course-card-untruncate";
    } else {
      truncate = "qui-course-card-truncate";
    }
  } else {
    showMoreBtn = false;
  }
  //-------------------------------------------------------------------
  // 14. Get the CourseCard Component
  //-------------------------------------------------------------------
  const CourseCard = () => {
    return (
      <div className={`qui-course-card-container`}>
        <div className="qui-course-card-body">
          <div className={`qui-course-card-title-container`}>
            <div className={`qui-nugget-block-styling`}>
              <NuggetBlock status={status} image={Nugget_Course} />
            </div>
            <div className={`qui-course-card-title`}>
              <h4 className="qui-course-card-title-text">{props.name}</h4>
            </div>
          </div>
          <div className="qui-course-card-date-and-tags-container">
            <div className="qui-course-card-show-more-date-container">
              {showMoreBtn && (
                <div className={`qui-course-card-show-more-container`}>
                  <button
                    className={`qui-course-card-show-more`}
                    onClick={expandTags ? handleLessTags : handleMoreTags}
                  >
                    <i
                      className={
                        expandTags ? "fas fa-angle-up" : "fas fa-angle-down"
                      }
                    />
                  </button>
                </div>
              )}
              {props.date?.start_date && props.date?.end_date && (
                <div className="qui-course-card-date-container">
                  <i className="far fa-calendar-alt qui-course-card-date-icon"></i>
                  <div className={`qui-course-card-date qt-sm`}>
                    {getDate()}
                  </div>
                </div>
              )}
            </div>
            <div className={`qui-course-card-tag-container ${truncate}`}>
              {_.map(expandTags ? props.tags : lessTags, (tag, index) => {
                if (index < itirate) {
                  return (
                    <div key={index} className={`qui-course-card-tag`}>
                      <Tag
                        asPadded="compact"
                        content={tag}
                        asSize="tiny"
                        withColor={{
                          backgroundColor: "#FFAB00",
                          textColor: "#000",
                        }}
                      />
                    </div>
                  );
                }
              })}
            </div>
          </div>
          <BannerCard image={image} header={header} onClick={() => {}} />
          <div className={`qui-course-card-description-container`}>
            <div className={`qui-course-card-description`}>
              {props.description}
            </div>
            <div className={`qui-course-card-reward`}>
              <Reward
                content={{
                  label: rewardLabel,
                  point: points?.toString(),
                }}
              />
            </div>
          </div>
        </div>
        <div className="qui-course-card-footer">
          <div className={`qui-course-card-arc-menu`}>
            <ArcMenu
              withIcon={{ icon: "fas fa-user" }}
              withColor={{
                backgroundColor: "#666666",
                textColor: "#FFBF00",
                hoverBackgroundColor: "#666666",
                hoverTextColor: "#FFBF00",
              }}
              menuPosition="bottom-left"
              onClick={props.onClick}
            />
          </div>
          <div className={`qui-course-card-share-block`}>
            <div className={`qui-course-card-name`}>{isSequential}</div>
            <div className={"qui-course-card-share-widget"}>
              <ShareWidget
                asSize="big"
                withColor={{ textColor: "#AAAAAA" }}
                content={{ label: shareLabel, url: link }}
              />
            </div>
            <div className={"qui-course-card-link-container"}>
              <a className={"qui-course-card-link"} href={link}>
                {link}
              </a>
              <i className="fas fa-copy qui-course-card-link-copy-icon"></i>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className={`qui ${quommonClasses.parentClasses} qt-shadow`}>
      {CourseCard()}
    </div>
  );
}
