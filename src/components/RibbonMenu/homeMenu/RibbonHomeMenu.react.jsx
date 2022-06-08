import React from "react";
import PropTypes from "prop-types";

import { getQuommons } from "../../../common/javascripts/helpers";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "../RibbonMenu.scss";
import "./RibbonHomeMenu.scss";
import "../../../common/stylesheets/overrule.scss";

import SaveExitSection from "../htmlMenu/sections/SaveExitSection.react";
import SaveSection from "../htmlMenu/sections/SaveSection.react";
import SlideSection from "./sections/SlideSection.react";
import SlideSettings from "./sections/SlideSettings.react";
import ViewSection from "./sections/ViewSection.react";

RibbonHomeMenu.propTypes = {
	//=======================================
	// Component Specific props
	//=======================================
	/** 
	The Actions object is received from DeckEditorContainer for use.
	*/
	actions: PropTypes.shape({
		addSlide: PropTypes.func,
		duplicateSlide: PropTypes.func,
		deleteSlide: PropTypes.func,
		changeSlideNav: PropTypes.func,
		setUserOptions: PropTypes.func
	}),
	/** 
	The Deck state is handed down from DeckEditorContainer for use.
	*/
	deck: PropTypes.shape({
		content: PropTypes.array,
		currentSlide: PropTypes.number
	}),

	//=======================================
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
	RibbonHomeMenu component must have the onClick function passed as props
	*/
	onClick: PropTypes.func,
};

export default function RibbonHomeMenu(props) {
	//-------------------------------------------------------------------
	// 1. Set the classes
	//-------------------------------------------------------------------
	let quommonClasses = getQuommons(props, "ribbon-home-menu-parent");

	// ========================= Render Function =================================
	return (
		<div className={`qui ${quommonClasses.parentClasses}`}>
			<div className={`${quommonClasses.childClasses}`}>
				<div className={`qui-ribbon-home-menu-container`}>
					<SaveExitSection {...props} />
					<div className="qui-ribbon-menu-parent-vertical-line"></div>
					<SaveSection {...props} />
					<div className="qui-ribbon-menu-parent-vertical-line"></div>
					<SlideSection {...props} />
					<div className="qui-ribbon-menu-parent-vertical-line"></div>
					<SlideSettings {...props} />
					<div className="qui-ribbon-menu-parent-vertical-line"></div>
					<ViewSection {...props} />
				</div>
			</div>
		</div>
	);
}
