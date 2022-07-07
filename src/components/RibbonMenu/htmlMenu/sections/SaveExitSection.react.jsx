import React from "react";
import PropTypes from "prop-types";

import { getQuommons, getTranslation } from "../../../../common/javascripts/helpers";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../../common/stylesheets/common.css";
import "../RibbonHtmlMenu.scss";
import "../../RibbonMenu.scss";
import "../../../../common/stylesheets/overrule.scss";

import IconLink from "../../../Buttons/IconLink/IconLink.react";

SaveExitSection.propTypes = {
	//=======================================
	// Component Specific props
	//=======================================

	//=======================================
	// Quommon props
	//=======================================
	/**
	Use to float the component in parent container
	*/
	asFloated: PropTypes.oneOf(["left", "right", "none", "inline"]),
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
	SaveExitSection component must have the onClick function passed as props
	*/
	onClick: PropTypes.func,
};

export default function SaveExitSection(props) {
	//-------------------------------------------------------------------
	// 1. Set the classes
	//-------------------------------------------------------------------
	let quommonClasses = getQuommons(
		props,
		"ribbon-menu-exit-save-section-parent"
	);

	let saveExitSection = {
		saveExit: "Save & Exit"
	}

	//-------------------------------------------------------------------
	// 2. Get translation of the component
	//-------------------------------------------------------------------
	let tObj = null;
	if (
		props.withTranslation?.lang &&
		props.withTranslation.lang !== "" &&
		props.withTranslation.lang !== "en"
	) {
		tObj = getTranslation(props.withTranslation);
		saveExitSection = tObj;
	}

	//-------------------------------------------------------------------
	// 4. Save function
	//-------------------------------------------------------------------
	const handleSave = () => {
		//Logic here
	}

	// ========================= Render Function =================================
	return (
		<div className={`qui ${quommonClasses.parentClasses}`}>
			<div className={`${quommonClasses.childClasses}`}>
				<div className="qui-ribbon-exit-save-section">
					<IconLink
						asPadded="fitted"
						onClick={handleSave}
						asSize="small"
						withColor={{
							backgroundColor: "#666666",
							hoverTextColor: "#666666",
						}}
						withIcon={{ icon: "fa fa-sign-out-alt" }}
					/>
					<div className="qui-ribbon-menu-label" onClick={handleSave}>
						{saveExitSection?.saveExit || "Save & Exit"}
					</div>
				</div>
			</div>
		</div>
	);
}
