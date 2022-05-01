import React, { useState } from "react";
import PropTypes from "prop-types";

import { getQuommons } from "../../../../common/javascripts/helpers";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../../common/stylesheets/common.css";
import "../../RibbonMenu.scss";
import "../RibbonToolsMenu.scss";
import "../../../../common/stylesheets/overrule.scss";

import IconLink from "../../../Buttons/IconLink/IconLink.react";

AnalysisSection.propTypes = {
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
	AnalysisSection component must have the onClick function passed as props
	*/
	onClick: PropTypes.func,
};

export default function AnalysisSection(props) {
	//-------------------------------------------------------------------
	// 1. Set the classes
	//-------------------------------------------------------------------
	let quommonClasses = getQuommons(props, "ribbon-tools-menu-analysis-parent");

	const [modalOpen, setModalOpen] = useState();
	const handleModalOpen = () => { setModalOpen(true) };
	const handleModalClose = () => { setModalOpen(false) };

	// ========================= Render Function =================================
	return (
		<div className={`qui ${quommonClasses.parentClasses}`}>
			<div className={`${quommonClasses.childClasses}`}>
				<div className="qui-ribbon-menu-analytics-section">
					<IconLink
						onClick={handleModalOpen}
						asSize="small"
						asPadded="fitted"
						withColor={{
							backgroundColor: "#666666",
							hoverTextColor: "#666666",
						}}
						withIcon={{ icon: "fas fa-chart-area" }}
					/>
					<div className="qui-ribbon-menu-label" onClick={handleModalOpen}>
						Analysis
					</div>
				</div>
				{modalOpen && <div onClick={handleModalClose}>
					{/* Deck Analysis modal here	 */}
				</div>}
			</div>
		</div>
	);
}
