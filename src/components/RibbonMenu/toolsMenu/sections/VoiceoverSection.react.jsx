import React from "react";
import PropTypes from "prop-types";

import { getQuommons, getTranslation } from "../../../../common/javascripts/helpers";

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
	VoiceoverSection component must have the onClick function passed as props
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

	let voiceoverSection = {
		voiceover: "Voicerover",
		upload: "Upload",
		copySlidesToScript: "Copy Slides to Script",
		downloadScript: "Download Script"
	};

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
		voiceoverSection = tObj;
	}
	//-------------------------------------------------------------------
	// 2. Handle Voiceover open modal
	//-------------------------------------------------------------------
	const handleVoModalOpen = () => {
		// Logic here
	};

	//-------------------------------------------------------------------
	// 3. Copy Slide to Voiceover function
	//-------------------------------------------------------------------
	const copySlideToVoiceover = () => {
		// Logic here
	};

	//-------------------------------------------------------------------
	// 4. Save Voiceover function
	//-------------------------------------------------------------------
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
								{voiceoverSection?.upload || "Upload"}
							</div>
						</div>
						<div className="qui-qui-ribbon-menu-child-vertical-line"></div>
						<div className="qui-vo-section-child">
							<div className="qui-vo-section-right-container-parent">
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
										{voiceoverSection?.copySlidesToScript || "Copy Slides to Script"}
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
										{voiceoverSection?.downloadScript || "Download Script"}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="qui-ribbon-menu-label-file">
						{voiceoverSection?.voiceover || "Voicerover"}
					</div>
				</div>
			</div>
		</div>
	);
}
