// Import npm packages
import React, { useState } from "react";
import PropTypes from "prop-types";

import { getQuommons } from "../../common/javascripts/helpers.js";
import _ from "lodash";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./NuggetCard.scss";
import "../../common/stylesheets/overrule.scss";

import NuggetBlock from "../NuggetBlock/NuggetBlock.react";
import Tag from "../Tag/Tag.react";
import Reward from "../Reward/Reward.react";
import IconBlock from "../IconBlock/IconBlock.react";
import ShareWidget from "../ShareWidget/ShareWidget.react";
import ArcMenu from "../ArcMenu/ArcMenu.react";
import BannerCard from "../Carousel/BannerCard/BannerCard.react";

import defaultImage from "../../assets/default.jpeg";
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
	/**
    Content props consist of all the data which are required for Nugget Card component
    */
	content: PropTypes.shape({
		published: PropTypes.bool,
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
		tags: PropTypes.arrayOf(PropTypes.string),
		name: PropTypes.string,
		description: PropTypes.string,
		image: PropTypes.string,
		points: PropTypes.string,
		identifier: PropTypes.string,
	}),

	// Quommon props
	//=======================================
	/**
	Use to float the component in parent container
	*/
	asFloated: PropTypes.oneOf(["left", "right", "none", "inline"]),
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
	content: {},

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

export default function NuggetCard(props) {
	//-------------------------------------------------------------------
	// 1. Set the classes
	//-------------------------------------------------------------------
	let quommonClasses = getQuommons(props, "nugget-card");

	//-------------------------------------------------------------------
	// 2. Get the Image
	//-------------------------------------------------------------------
	let image = props.content?.image ? props.content?.image : defaultImage;

	//-------------------------------------------------------------------
	// 3. Get the tag styling
	//-------------------------------------------------------------------
	let tagStyle = props.content?.tags ? "flex" : "none";

	//-------------------------------------------------------------------
	// 4. Create link of article, based on the identifier
	//-------------------------------------------------------------------
	let link;
	if (props.content?.identifier) {
		link = "https://www.quodeck.com/" + props.content?.identifier;
	} else {
		link = "";
	}

	//-------------------------------------------------------------------
	// 5. Get published status
	//-------------------------------------------------------------------
	let status = props.content?.published === true ? "published" : "none";

	//-------------------------------------------------------------------
	// 6. Get the Nugget Image
	//-------------------------------------------------------------------
	const nuggetImages = {
		quiz: Nugget_Quiz,
		assessment: Nugget_Assessment,
		game: Nugget_Game,
		profiler: Nugget_Profiler,
		recommendation: Nugget_Recco,
		calculator: Nugget_Calculator,
		survey: Nugget_Survey,
		poll: Nugget_Poll,
		feedback: Nugget_Feedback,
		submission: Nugget_Submission,
		linklist: Nugget_Linklist,
		article: Nugget_Article,
		document: Nugget_Document,
		video: Nugget_Video,
		story: Nugget_Story,
		event: Nugget_Event,
		news: Nugget_News,
		webinar: Nugget_Webinar,
		gallery: Nugget_Gallery,
		faq: Nugget_Faq,
	};

	//-------------------------------------------------------------------
	// 7. Capitalize first letter of category text
	//-------------------------------------------------------------------
	let category = props.content?.category ? props.content?.category?.charAt(0).toUpperCase() + props.content?.category?.slice(1) : "";

	//-------------------------------------------------------------------
	// 8. If number of tags greater than 3 or if the tags contains long text then will display showmore icon
	//-------------------------------------------------------------------
	let truncate;
	let tag1Length = props.content?.tags?.length > 0 ? props.content?.tags[0]?.length : "";
	let tag2Length = props.content?.tags?.length > 0 ? props.content?.tags[1]?.length : "";
	let tag3Length = props.content?.tags?.length > 0 ? props.content?.tags[2]?.length : "";
	let showMoreBtn = false;
	let minTags = 5;
	let maxTags = props.content?.tags?.length;
	let showTags = 5;

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
	if (tag1Length >= 15 || tag2Length >= 15 || tag3Length >= 15 || props.content?.tags?.length > 5) {
		showMoreBtn = true;
		if (expandTags === true) {
			truncate = "qui-nugget-card-untruncate";
		} else {
			truncate = "qui-nugget-card-truncate";
		}
	} else {
		showMoreBtn = false;
	}

	//-------------------------------------------------------------------
	// 9. Get the NuggetCard Component
	//-------------------------------------------------------------------
	const nuggetCard = () => {
		return (
			<div className={`qui-nugget-card-container`}>
				<div className="qui-nugget-card-body">
					<div className={`qui-nugget-card-title-container`}>
						<div className={`qui-nugget-block-styling`}>
							<NuggetBlock
								status={status}
								image={nuggetImages[props.content?.category]}
							/>
						</div>
						<div className={`qui-nugget-card-title`}>{props.content?.name}</div>
					</div>
					<div className="qui-nugget-card-tag-show-more">
						<div
							className={`qui-nugget-card-tag-container`}
							style={{ display: tagStyle }} >
							{_.map(props.content?.tags, (tag, index) => {
								if (index < itirate) {
									return (
										<div
											key={index}
											className={`qui-nugget-card-tag ${truncate}`}>
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
							{showMoreBtn && (
								<div className={`qui-nugget-card-show-more`}>
									<button
										className={`qui-course-card-show-more`}
										onClick={expandTags ? handleLessTags : handleMoreTags}>
										<i className={expandTags ? "fas fa-angle-up" : "fas fa-angle-down"} />
									</button>
								</div>
							)}
						</div>
					</div>
					<BannerCard content={{ image: image }} onClick={() => { }} />
					<div className={`qui-nugget-card-description-container`}>
						<div className={`qui-nugget-card-description`}>
							{props.content?.description}
						</div>
						<div className={`qui-nugget-card-reward`}>
							<Reward
								asSize="tiny"
								content={{
									label: "Complete to win",
									point: props.content?.points,
								}}
							/>
						</div>
					</div>
				</div>
				<div className="qui-nugget-card-footer">
					<div className={`qui-nugget-card-arc-menu`}>
						<ArcMenu
							menuContent={props.content?.menuContent}
							menuType="menu"
							arcIcon="menu"
							position="bottom-left"
							onClick={props.onClick}
						/>
					</div>
					<div className={`qui-nugget-card-share-block`}>
						<div className={`qui-nugget-card-name`}>{category}</div>
						<div className={"qui-nugget-card-share-widget"}>
							<ShareWidget
								asSize="tiny"
								withColor={{ textColor: "#AAAAAA" }}
								content={{ label: "Share", url: link }}
							/>
						</div>
						<div className={"qui-nugget-card-link-container"}>
							<a className={"qui-nugget-card-link"} href={link}>
								{link}
							</a>
							<div className={`qui-nugget-card-copy-icon-container`}>
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
			</div>
		);
	};
	return (
		<div className={`qui ${quommonClasses.parentClasses}`}>
			<div className={`${quommonClasses.childClasses}`}>{nuggetCard()}</div>
		</div>
	);
}