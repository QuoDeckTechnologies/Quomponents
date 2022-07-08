import React from "react";
import PropTypes from "prop-types";

import { getQuommons, getTranslation } from "../../../../common/javascripts/helpers";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../../common/stylesheets/common.css";
import "../../RibbonMenu.scss";
import "../RibbonHtmlMenu.scss";
import "../../../../common/stylesheets/overrule.scss";

import IconLink from "../../../Buttons/IconLink/IconLink.react";

SaveSection.propTypes = {
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
	SaveSection component must have the onClick function passed as props
	*/
	onClick: PropTypes.func,
};

export default function SaveSection(props) {
	//-------------------------------------------------------------------
	// 1. Set the classes
	//-------------------------------------------------------------------
	let quommonClasses = getQuommons(props, "ribbon-menu-save-section-parent");

	let saveSection = {
		upload: "Upload",
		download: "Download",
		save: "Save",
		file: "File"
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
		saveSection = tObj;
	}

	//-------------------------------------------------------------------
	// 3. Save function
	//-------------------------------------------------------------------
	const handleSave = () => {
		// Logic here
	};

	//-------------------------------------------------------------------
	// 4. Upload function
	//-------------------------------------------------------------------
	const handleUpload = () => {
		// Logic here
	};

	//-------------------------------------------------------------------
	// 5. Download function
	//-------------------------------------------------------------------
	const handleDownload = () => {
		// Logic here
	};

	// ========================= Render Function =================================
	return (
		<div className={`qui ${quommonClasses.parentClasses}`}>
			<div className={`${quommonClasses.childClasses}`}>
				<div className="qui-ribbon-menu-save-section">
					<div className="qt-shadow qui-ribbon-menu-save-section-child-container">
						<div className="qui-ribbon-menu-save-section-child">
							<IconLink
								onClick={handleUpload}
								asSize="tiny"
								asPadded="fitted"
								withColor={{
									backgroundColor: "#666666",
									hoverTextColor: "#666666",
								}}
								withIcon={{ icon: "fas fa-file-upload" }}
							/>
							<div className="qui-ribbon-menu-label" onClick={handleUpload}>
								{saveSection?.upload || "Upload"}
							</div>
						</div>
						<div className="qui-ribbon-menu-child-vertical-line"></div>
						<div className="qui-ribbon-menu-save-section-child">
							<IconLink
								onClick={handleDownload}
								asPadded="fitted"
								asSize="tiny"
								withColor={{
									backgroundColor: "#666666",
									hoverTextColor: "#666666",
								}}
								withIcon={{ icon: "fas fa-download" }}
							/>
							<div className="qui-ribbon-menu-label" onClick={handleDownload}>
								{saveSection?.download || "Download"}
							</div>
						</div>
						<div className="qui-ribbon-menu-child-vertical-line"></div>
						<div className="qui-ribbon-menu-save-section-child">
							<IconLink
								onClick={handleSave}
								asSize="tiny"
								asPadded="fitted"
								withColor={{
									backgroundColor: "#666666",
									hoverTextColor: "#666666",
								}}
								withIcon={{ icon: "far fa-file-alt" }}
							/>
							<div className="qui-ribbon-menu-label" onClick={handleSave}>
								{saveSection?.save || "Save"}
							</div>
						</div>
					</div>
					<div className="qui-ribbon-menu-label-file">{saveSection?.file || "File"}</div>
				</div>
			</div>
		</div>
	);
}
