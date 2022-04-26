import React from "react";
import PropTypes from "prop-types";

import { getQuommons } from "../../../../common/javascripts/helpers";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../../common/stylesheets/common.css";
import "../../RibbonMenu.scss";
import "../RibbonToolsMenu.scss";
import "../../../../common/stylesheets/overrule.scss";

import IconLink from "../../../Buttons/IconLink/IconLink.react";

QuestionBankSection.propTypes = {
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

export default function QuestionBankSection(props) {
	//-------------------------------------------------------------------
	// 1. Set the classes
	//-------------------------------------------------------------------
	let quommonClasses = getQuommons(
		props,
		"ribbon-tools-menu-question-bank-parent"
	);

	// ========================= Render Function =================================
	return (
		<div className={`qui ${quommonClasses.parentClasses}`}>
			<div className={`${quommonClasses.childClasses}`}>
				<div className="qui-ribbon-menu-question-bank-section">
					<IconLink
						onClick={props.onClick}
						asSize="small"
						asPadded="fitted"
						withColor={{
							backgroundColor: "#666666",
							hoverTextColor: "#666666",
						}}
						withIcon={{ icon: "fab fa-stack-exchange" }}
					/>
					<div className="qui-ribbon-menu-label" onClick={props.onClick}>
						Question Bank
					</div>
				</div>
			</div>
		</div>
	);
}
