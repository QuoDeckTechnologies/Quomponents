import React, { useState } from "react";
import PropTypes from "prop-types";

import { getQuommons, getTranslation } from "../../../../common/javascripts/helpers";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../../common/stylesheets/common.css";
import "../../RibbonMenu.scss";
import "../RibbonToolsMenu.scss";
import "../../../../common/stylesheets/overrule.scss";

import IconLink from "../../../Buttons/IconLink/IconLink.react";

DeckSettingsSection.propTypes = {
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
	asFloated: PropTypes.oneOf(["left", "right", "inline", "none"]),
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
	DeckSettingsSection component must have the onClick function passed as props
	*/
	onClick: PropTypes.func,
};

export default function DeckSettingsSection(props) {
	//-------------------------------------------------------------------
	// 1. Set the classes
	//-------------------------------------------------------------------
	let quommonClasses = getQuommons(
		props,
		"ribbon-tools-menu-deck-settings-section-parent"
	);

	let deckSettingsSection = {
		settings: "Settings",
		enableNavigation: "Enable Navigation",
		enableSlideList: "Enable Slide List",
		enableVoiceovers: "Enable Voiceovers"
	}

	//-------------------------------------------------------------------
	// 5. Get translation of the component
	//-------------------------------------------------------------------
	let tObj = null;
	if (
		props.withTranslation?.lang &&
		props.withTranslation.lang !== "" &&
		props.withTranslation.lang !== "en"
	) {
		tObj = getTranslation(props.withTranslation);
		deckSettingsSection.settings = tObj?.settings || "Settings";
		deckSettingsSection.enableNavigation = tObj?.enableNavigation || "Enable Navigation";
		deckSettingsSection.enableSlideList = tObj?.enableSlideList || "Enable Slide List";
		deckSettingsSection.enableVoiceovers = tObj?.enableVoiceovers || "Enable Voiceovers";
	}

	//-------------------------------------------------------------------
	// 2. Handle states of Navigation, SlideList and Voiceover checkboxes
	//-------------------------------------------------------------------
	const [isNavEnabled, setNavigationChecked] = useState(props.deck?.navEnabled);
	const [isSlideEnabled, setSlideChecked] = useState(props.deck?.snEnabled);
	const [isVoiceoverEnabled, setVoiceoverChecked] = useState(props.deck?.voEnabled);

	const handleChangeDeckSettings = (settingsObj) => {
		props.actions.updateDeck(settingsObj);
	};
	function toggleNavigationChecked() {
		setNavigationChecked((prevState) => !prevState)
	}
	function toggleSlideChecked() {
		setSlideChecked((prevState) => !prevState)
	}
	function toggleVoiceoverChecked() {
		setVoiceoverChecked((prevState) => !prevState)
	}
	// ========================= Render Function =================================
	return (
		<div className={`qui ${quommonClasses.parentClasses}`}>
			<div className={`${quommonClasses.childClasses}`}>
				<div className="qui-ribbon-menu-settings-section">
					<div className="qui-ribbon-menu-settings-section-child-container">
						<div className="qui-ribbon-menu-settings-section-child">
							<div className="qui-ribbon-menu-settings-section-right-content">
								<IconLink
									asSize="tiny"
									asPadded="fitted"
									withColor={{
										backgroundColor: "#666666",
										hoverTextColor: "#666666",
									}}
									withIcon={{
										icon: `qui-ribbon-file-right-icons ${isNavEnabled
											? "far fa-check-square"
											: "far fa-square"
											}`,
									}}
									onClick={() => {
										toggleNavigationChecked();
										handleChangeDeckSettings({
											navEnabled: !isNavEnabled
										})
									}}
								/>
								<div
									className="qui-ribbon-menu-label"
									onClick={() => {
										toggleNavigationChecked();
										handleChangeDeckSettings({
											navEnabled: !isNavEnabled
										})
									}}
								>
									{deckSettingsSection.enableNavigation}
								</div>
							</div>
							<div className="qui-ribbon-menu-settings-section-right-content">
								<IconLink
									asSize="tiny"
									asPadded="fitted"
									withColor={{
										backgroundColor: "#666666",
										hoverTextColor: "#666666",
									}}
									withIcon={{
										icon: `qui-ribbon-file-right-icons ${isSlideEnabled ? "far fa-check-square" : "far fa-square"
											}`,
									}}
									onClick={() => {
										toggleSlideChecked();
										handleChangeDeckSettings({
											snEnabled: !isSlideEnabled
										})
									}}
								/>
								<div
									className="qui-ribbon-menu-label"
									onClick={() => {
										toggleSlideChecked();
										handleChangeDeckSettings({
											snEnabled: !isSlideEnabled
										})
									}}
								>
									{deckSettingsSection.enableSlideList}
								</div>
							</div>
							<div className="qui-ribbon-menu-settings-section-right-content">
								<IconLink
									asSize="tiny"
									asPadded="fitted"
									withColor={{
										backgroundColor: "#666666",
										hoverTextColor: "#666666",
									}}
									withIcon={{
										icon: `qui-ribbon-file-right-icons ${isVoiceoverEnabled
											? "far fa-check-square"
											: "far fa-square"
											}`,
									}}
									onClick={() => {
										toggleVoiceoverChecked();
										handleChangeDeckSettings({
											voEnabled: !isVoiceoverEnabled
										})
									}}
								/>
								<div
									className="qui-ribbon-menu-label"
									onClick={() => {
										toggleVoiceoverChecked();
										handleChangeDeckSettings({
											voEnabled: !isVoiceoverEnabled
										})
									}}
								>
									{deckSettingsSection.enableVoiceovers}
								</div>
							</div>
						</div>
					</div>
					<div className="qui-ribbon-menu-label-file">{deckSettingsSection.settings}</div>
				</div>
			</div>
		</div>
	);
}
