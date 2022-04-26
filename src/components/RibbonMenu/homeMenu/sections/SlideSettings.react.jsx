import React, { useState , useEffect} from "react";
import PropTypes from "prop-types";

import { getQuommons } from "../../../../common/javascripts/helpers";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../../common/stylesheets/common.css";
import "../../RibbonMenu.scss";
import "../RibbonHomeMenu.scss";
import "../../../../common/stylesheets/overrule.scss";

import IconLink from "../../../Buttons/IconLink/IconLink.react";

SlideSettings.propTypes = {
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
    SlideSettings component must have the onClick function passed as props
    */
	onClick: PropTypes.func,
};

export default function SlideSettings(props) {
	//-------------------------------------------------------------------
	// 1. Set the classes
	//-------------------------------------------------------------------
	let quommonClasses = getQuommons(
		props,
		"ribbon-home-menu-slide-setting-section-parent"
	);

	//-------------------------------------------------------------------
	// 2. Toggle the state of Back and Next checkboxes
	//-------------------------------------------------------------------
	const [isBackChecked, setBakChecked] = useState(false);
	const [isNextChecked, setNextChecked] = useState(false);

	function toggleBackChecked() {
		setBakChecked((prevState) => !prevState);
	}
	function toggleNextChecked() {
		setNextChecked((prevState) => !prevState);
	}

	let toggleStatus ={
		back: isBackChecked,
		next: isNextChecked,
	}

	useEffect(()=>{
		props.onClick(toggleStatus)
	})

	// ========================= Render Function =================================
	return (
		<div className={`qui ${quommonClasses.parentClasses}`}>
			<div className={`${quommonClasses.childClasses}`}>
				<div className="qui-ribbon-menu-settings-section">
					<div className="qui-ribbon-home-menu-settings-section-child-container">
						<div className="qui-ribbon-home-menu-settings-section-child">
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
											isBackChecked ? "far fa-check-square" : "far fa-square"
										}`,
									}}
									onClick={toggleBackChecked}
								/>
								<div
									className="qui-ribbon-menu-label"
									onClick={toggleBackChecked}
								>
									Enable Back Arrow
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
											isNextChecked ? "far fa-check-square" : "far fa-square"
										}`,
									}}
									onClick={() => toggleNextChecked()}
								/>
								<div
									className="qui-ribbon-menu-label"
									onClick={() => toggleNextChecked()}
								>
									Enable Next Arrow
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
