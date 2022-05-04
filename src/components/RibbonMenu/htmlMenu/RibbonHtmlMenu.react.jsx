import React from "react";
import PropTypes from "prop-types";

import { getQuommons } from "../../../common/javascripts/helpers";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "../RibbonMenu.scss";
import "./RibbonHtmlMenu.scss";
import "../../../common/stylesheets/overrule.scss";

import SaveExitSection from "./sections/SaveExitSection.react";
import SaveSection from "./sections/SaveSection.react";

RibbonHtmlMenu.propTypes = {
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
	RibbonHtmlMenu component must have the onClick function passed as props
	*/
	onClick: PropTypes.func,
};

export default function RibbonHtmlMenu(props) {
	//-------------------------------------------------------------------
	// 1. Set the classes
	//-------------------------------------------------------------------
	let quommonClasses = getQuommons(props, "ribbon-html-menu-parent");

	// ========================= Render Function =================================
	return (
		<div className={`qui ${quommonClasses.parentClasses}`}>
			<div className={`${quommonClasses.childClasses}`}>
				<div className={`qui-ribbon-html-menu-container`}>
					<SaveExitSection {...props} />
					<div className="qui-ribbon-menu-parent-vertical-line"></div>
					<SaveSection {...props} />
				</div>
			</div>
		</div>
	);
}
