import React from "react";
import PropTypes from "prop-types";

import { getQuommons } from "../../../common/javascripts/helpers";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "../RibbonMenu.scss";
import "./RibbonToolsMenu.scss";
import "../../../common/stylesheets/overrule.scss";

import AnalysisSection from "./sections/AnalysisSection.react";
import DeckSettingsSection from "./sections/DeckSettingsSection.react";
import QuestionBankSection from "./sections/QuestionBankSection.react";
import VoiceoverSection from "./sections/VoiceoverSection.react";

RibbonToolsMenu.propTypes = {
	//=======================================
	// Component Specific props
	//=======================================
	/** 
	The Actions object is received from DeckEditorContainer for use.
	*/
	actions: PropTypes.shape({
		updateDeck: PropTypes.func
	}),
	/** 
	The Deck state is handed down from DeckEditorContainer for use.
	*/
	deck: PropTypes.shape({
		navEnabled: PropTypes.bool,
		snEnabled: PropTypes.bool,
		voEnabled: PropTypes.bool
	}),

	//=======================================
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
	SaveExitSection component must have the onClick function passed as props
	*/
	onClick: PropTypes.func,
};

export default function RibbonToolsMenu(props) {
	//-------------------------------------------------------------------
	// 1. Set the classes
	//-------------------------------------------------------------------
	let quommonClasses = getQuommons(props, "ribbon-tools-menu-parent");

	// ========================= Render Function =================================
	return (
		<div className={`qui ${quommonClasses.parentClasses}`}>
			<div className={`${quommonClasses.childClasses}`}>
				<div className={`qui-ribbon-tools-menu-container`}>
					<QuestionBankSection {...props} />
					<div className="qui-ribbon-menu-parent-vertical-line"></div>
					<DeckSettingsSection {...props} />
					<div className="qui-ribbon-menu-parent-vertical-line"></div>
					<VoiceoverSection {...props} />
					<div className="qui-ribbon-menu-parent-vertical-line"></div>
					<AnalysisSection {...props} />
				</div>
			</div>
		</div>
	);
}
