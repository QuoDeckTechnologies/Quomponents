import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { getQuommons } from "../../../../common/javascripts/helpers";

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

export default function DeckSettingsSection(props) {
	//-------------------------------------------------------------------
	// 1. Set the classes
	//-------------------------------------------------------------------
	let quommonClasses = getQuommons(props, "ribbon-tools-menu-deck-settings-section-parent");

	const [isNavigationChecked, setNavigationChecked] = useState(false);
	const [isSlideChecked, setSlideChecked] = useState(false);
	const [isVoiceoverChecked, setVoiceoverChecked] = useState(false);
	function toggleNavigationChecked() {
		setNavigationChecked((prevState) => !prevState);
	}
	function toggleSlideChecked() {
		setSlideChecked((prevState) => !prevState);
	}
	function toggleVoiceoverChecked() {
		setVoiceoverChecked((prevState) => !prevState);
	}

	let toggleStatus ={
		navigation: isNavigationChecked,
		slideList: isSlideChecked,
		voiceOver: isVoiceoverChecked
	}

	useEffect(()=>{
		props.onClick(toggleStatus)
	})
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
										icon: `qui-ribbon-file-right-icons ${
											isNavigationChecked
												? "far fa-check-square"
												: "far fa-square"
										}`,
									}}
									onClick={toggleNavigationChecked}
								/>
								<div
									className="qui-ribbon-menu-label"
									onClick={toggleNavigationChecked}
								>
									Enable Navigation
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
										icon: `qui-ribbon-file-right-icons ${
											isSlideChecked ? "far fa-check-square" : "far fa-square"
										}`,
									}}
									onClick={() => toggleSlideChecked()}
								/>
								<div
									className="qui-ribbon-menu-label"
									onClick={() => toggleSlideChecked()}
								>
									Enable Slide List
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
										icon: `qui-ribbon-file-right-icons ${
											isVoiceoverChecked
												? "far fa-check-square"
												: "far fa-square"
										}`,
									}}
									onClick={() => toggleVoiceoverChecked()}
								/>
								<div
									className="qui-ribbon-menu-label"
									onClick={() => toggleVoiceoverChecked()}
								>
									Enable Voiceovers
								</div>
							</div>
						</div>
					</div>
					<div className="qui-ribbon-menu-label-file">Settings</div>
				</div>
			</div>
		</div>
	);
}
