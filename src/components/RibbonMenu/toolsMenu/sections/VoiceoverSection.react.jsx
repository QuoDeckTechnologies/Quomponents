import React, { useState } from "react";
import PropTypes from "prop-types";

import { getQuommons } from "../../../../common/javascripts/helpers";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../../common/stylesheets/common.css";
import "../../RibbonMenu.scss";
import "../RibbonToolsMenu.scss";
import "../../../../common/stylesheets/overrule.scss";

import IconLink from "../../../Buttons/IconLink/IconLink.react";

VoiceoverSection.propTypes = {
	//=======================================
	// Component Specific props
	//=======================================

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
	DeckSettingsSection component must have the onClick function passed as props
	*/
	onClick: PropTypes.func,
};

export default function VoiceoverSection(props) {
	//-------------------------------------------------------------------
	// 1. Set the classes
	//-------------------------------------------------------------------
	let quommonClasses = getQuommons(
		props,
		"ribbon-tools-menu-voiceover-section-parent"
	);

	const [voModalOpen, setVoModalOpen] = useState();

	const handleVoModalOpen = () => setVoModalOpen(true);
	const handleVoModalClose = () => setVoModalOpen(false);

	/**
	 * Copies the voiceover from the text fields into the tts_audio field
	 * Does not return a value, calls updateDeck action
	 *
	 * @public
	 */
	const copySlideToVoiceover = () => {
		// Logic here
	};
	const handleVoiceoverSave = () => {
		// Logic here
	};

	return (
		<div className={`qui ${quommonClasses.parentClasses}`}>
			<div className={`${quommonClasses.childClasses}`}>
				<div className="qui-vo-section">
					<div className="qui-vo-section-child-container">
						<div className="qui-vo-section-child upload">
							<IconLink
								onClick={handleVoModalOpen}
								asSize="tiny"
								asPadded="fitted"
								withColor={{
									backgroundColor: "#666666",
									hoverTextColor: "#666666",
								}}
								withIcon={{ icon: "fas fa-file-upload" }}
							/>
							<div className="qui-ribbon-menu-label" onClick={handleVoModalOpen}>
								Upload
							</div>
						</div>
						<div className="qui-qui-ribbon-menu-child-vertical-line"></div>
						<div className="qui-vo-section-child">
							<div className="qui-vo-section-right-content">
								<IconLink
									onClick={copySlideToVoiceover}
									asSize="tiny"
									asPadded="fitted"
									withColor={{
										backgroundColor: "#666666",
										hoverTextColor: "#666666",
									}}
									withIcon={{ icon: "far fa-copy" }}
								/>
								<div
									className="qui-ribbon-menu-tool-label"
									onClick={copySlideToVoiceover}
								>
									Copy Slides to Script
								</div>
							</div>
							<div className="qui-vo-section-right-content">
								<IconLink
									onClick={handleVoiceoverSave}
									asSize="tiny"
									asPadded="fitted"
									withColor={{
										backgroundColor: "#666666",
										hoverTextColor: "#666666",
									}}
									withIcon={{ icon: "fas fa-download" }}
								/>
								<div
									className="qui-ribbon-menu-tool-label"
									onClick={handleVoiceoverSave}
								>
									Download Script
								</div>
							</div>
						</div>
					</div>
					<div className="qui-ribbon-menu-label-file" onClick={props.onClick}>
						Voiceovers
					</div>
				</div>
				{voModalOpen &&
					<div className="qui-ribbon-tools-menu-voiceover-modal" onClick={handleVoModalClose}>
						{/* Voiceover Modal here */}
					</div>}
			</div>
		</div>
	);
}
