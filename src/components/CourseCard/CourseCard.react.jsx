// Import npm packages
import React, { useState } from "react";
import PropTypes from "prop-types";

import { getQuommons, getTranslation } from "../../common/javascripts/helpers.js";
import _ from "lodash";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./CourseCard.scss";
import "../../common/stylesheets/overrule.scss";

import NuggetBlock from "../NuggetBlock/NuggetBlock.react";
import Tag from "../Tag/Tag.react";
import Reward from "../Reward/Reward.react";
import IconBlock from "../IconBlock/IconBlock.react";
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
	Content props consist of all the data which are required for Course Card component
	*/
	content: PropTypes.shape({
		published: PropTypes.bool,
		courseType: PropTypes.oneOf(["standard", "exam"]),
		wrapper: PropTypes.string,
		tags: PropTypes.array,
		courseName: PropTypes.string,
		description: PropTypes.string,
		courseImage: PropTypes.string,
		points: PropTypes.number,
		identifier: PropTypes.string,
		date: PropTypes.shape({
			start_date: PropTypes.string,
			end_date: PropTypes.string,
		}),
		sequential: PropTypes.bool,
	}),

	// Quommon props
	//=======================================
	/**
	Use to float the component in parent container
	*/
	asFloated: PropTypes.oneOf(["left", "right", "inline"]),
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
	Component must have the onClick function passed as props
	*/
	onClick: PropTypes.func.isRequired,
};

CourseCard.defaultProps = {
	// Component Specific props
	//=======================================
	content: {},

	// Quommon props
	//=======================================
	asFloated: "inline",
	withTranslation: null,
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
	let image = props.content?.courseImage
		? props.content?.courseImage
		: props.content?.wrapper
			? "assets/courses/" + props.content?.wrapper + "/play_backdrop.jpg"
			: defaultImage;

	//-------------------------------------------------------------------
	// 3.  Create link of article based on identifier
	//-------------------------------------------------------------------
	let link;
	if (props.content?.identifier) {
		link = "https://www.quodeck.com/" + props.content?.identifier;
	} else {
		link = "";
	}
	//-------------------------------------------------------------------
	// 4. Get the status of Sequential course
	//-------------------------------------------------------------------
	let isSequential = props.content?.sequential
		? "Sequential Course"
		: "Non Sequential Course";

	//-------------------------------------------------------------------
	// 5. Get translation of the component
	//-------------------------------------------------------------------
	let tObj = null;
	let points = props.content?.points;
	let shareLabel = "Share";
	let rewardLabel = "Complete to win";
	let menu = [
		"EDIT DETAILS",
		"EDIT CONTENT",
		"MANAGE LEARNERS",
		"VIEW ANALYTICS",
		"DELETE COURSE"
	];
	if (
		props.withTranslation?.lang &&
		props.withTranslation.lang !== "" &&
		props.withTranslation.lang !== "en"
	) {
		tObj = getTranslation(props.withTranslation);
		isSequential = props.content?.sequential ? tObj?.isSequential?.true || "Sequential Course" : tObj?.isSequential?.false || "Non Sequential Course";
		points = points?.toLocaleString("hi-u-nu-deva");
		shareLabel = tObj?.share || "Share";
		rewardLabel = tObj?.rewardLabel || "Complete to win";
		menu = tObj?.arcMenu || menu;
	} else {
		points = points?.toLocaleString("en");
	}

	//-------------------------------------------------------------------
	// 6. Standardize Date
	//-------------------------------------------------------------------
	let start_date, end_date;
	start_date = new Date(props.content?.date?.start_date).toDateString();
	end_date = new Date(props.content?.date?.end_date).toDateString();

	//-------------------------------------------------------------------
	// 7. Function to return suffix
	//-------------------------------------------------------------------
	const getSuffix = (digit) => {
		if (!tObj) {
			if (digit === "1") {
				return "st";
			}
			if (digit === "2") {
				return "nd";
			}
			if (digit === "3") {
				return "rd";
			} else return "th";
		} else return "";
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
	// 9. Function to return translated month if translation props is provided
	//-------------------------------------------------------------------
	const getMonth = (month) => {
		if (tObj) {
			return tObj?.months[month];
		}
		return month;
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
		return `${startDate} ${getMonth(startMonth)} - ${endDate} ${getMonth(endMonth)}`;
	};

	//-------------------------------------------------------------------
	// 11. Get published status
	//-------------------------------------------------------------------
	let status = props.content?.published === true ? "published" : "none";

	//-------------------------------------------------------------------
	// 12. Get header of wrapper
	//-------------------------------------------------------------------
	let header = "";
	if (props.content?.wrapper) {
		if (props.content?.wrapper?.toLowerCase() === "none" || props.content?.wrapper === "") {
			header = "";
		} else {
			header = `${props.content?.wrapper?.charAt(0).toUpperCase()}${props.content?.wrapper?.slice(1)}`;
		}
	}

	//-------------------------------------------------------------------
	// 13. If number of tags greater than 3 or if the tags contains long text then will display showmore icon
	//-------------------------------------------------------------------
	let truncate;
	let tag1Length = props.content?.tags?.length > 0 ? props.content?.tags[0]?.length : "";
	let tag2Length = props.content?.tags?.length > 0 ? props.content?.tags[1]?.length : "";
	let tag3Length = props.content?.tags?.length > 0 ? props.content?.tags[2]?.length : "";
	let showMoreBtn = false;
	let minTags = 3;
	let maxTags = props.content?.tags?.length;

	let showTags = 3;
	const [expandTags, setExpandTags] = useState(false);
	const [itirate, setItirate] = useState(showTags);

	const handleLessTags = () => {
		setItirate(minTags);
		setExpandTags(false);
	};
	const handleMoreTags = () => {
		setItirate(maxTags);
		setExpandTags(true);
	};
	if (tag1Length >= 15 || tag2Length >= 15 || tag3Length >= 15 || props.content?.tags?.length > 3) {
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
							{props.content?.courseName}
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
										<i className={expandTags ? "fas fa-angle-up" : "fas fa-angle-down"} />
									</button>
								</div>
							)}
							{props.content?.date?.start_date && props.content?.date?.end_date && (
								<div className="qui-course-card-date-container">
									<IconBlock
										asSize="tiny"
										asPadded="fitted"
										asEmphasis="text"
										withIcon={{ name: "far fa-calendar-alt", size: "2em" }}
										withColor={{ accentColor: "#000" }}
									/>
									<div className={`qui-course-card-date`}>
										{getDate()}
									</div>
								</div>
							)}
						</div>
						<div className="qui-course-card-tag-container">
							{_.map(props.content?.tags, (tag, index) => {
								if (index < itirate) {
									return (
										<div
											key={index}
											className={`qui-course-card-tag ${truncate}`}
										>
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
					<BannerCard
						content={{ image: image, header: header }}
						onClick={() => { }}
					/>
					<div className={`qui-course-card-description-container`}>
						<div className={`qui-course-card-description`}>
							{props.content?.description}
						</div>
						<div className={`qui-course-card-reward`}>
							<Reward
								asSize="tiny"
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
							menuContent={props.content?.menuContent}
							menuType="menu"
							arcIcon="menu"
							position="bottom-left"
							onClick={props.onClick}
						/>
					</div>
					<div className={`qui-course-card-share-block`}>
						<div className={`qui-course-card-name`}>{isSequential}</div>
						<div className={"qui-course-card-share-widget"}>
							<ShareWidget
								asSize="tiny"
								withColor={{ textColor: "#AAAAAA" }}
								content={{ label: shareLabel, url: link }}
							/>
						</div>
						<div className={"qui-course-card-link-container"}>
							<a className={"qui-course-card-link"} href={link}>
								{link}
							</a>
							<IconBlock
								asSize="small"
								asEmphasis="text"
								withIcon={{ name: "fas fa-copy" }}
								withColor={{ accentColor: "#FFBF00" }}
								asPadded="fitted"
								onClick={() => {
									navigator.clipboard.writeText(link);
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	};
	return (
		<div className={`qui ${quommonClasses.parentClasses}`}>
			<div className={`${quommonClasses.childClasses}`}>{CourseCard()}</div>
		</div>
	);
}
