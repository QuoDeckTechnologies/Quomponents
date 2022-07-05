import React from "react";
import PropTypes from "prop-types";

import { getQuommons } from "../../../../common/javascripts/helpers";

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
	SaveSection component must have the onClick function passed as props
	*/
	onClick: PropTypes.func,
};

export default function SaveSection(props) {
	//-------------------------------------------------------------------
	// 1. Set the classes
	//-------------------------------------------------------------------
	let quommonClasses = getQuommons(props, "ribbon-menu-save-section-parent");

	//-------------------------------------------------------------------
	// 2. Save function
	//-------------------------------------------------------------------
	const handleSave = () => {
		// Logic here
	};

	//-------------------------------------------------------------------
	// 3. Upload function
	//-------------------------------------------------------------------
	const handleUpload = () => {
		// Logic here
	};

	//-------------------------------------------------------------------
	// 4. Download function
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
							<div className="qt-utn qui-ribbon-menu-label" onClick={handleUpload}>
								Upload
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
							<div className="qt-utn qui-ribbon-menu-label" onClick={handleDownload}>
								Download
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
							<div className="qt-utn qui-ribbon-menu-label" onClick={handleSave}>
								Save
							</div>
						</div>
					</div>
					<div className="qt-sm qui-ribbon-menu-label-file">File</div>
				</div>
			</div>
		</div>
	);
}
