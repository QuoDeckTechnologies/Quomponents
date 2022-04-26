import React from "react";
import PropTypes from "prop-types";

import { getQuommons } from "../../../../common/javascripts/helpers";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../../common/stylesheets/common.css";
import "../../RibbonMenu.scss";
import "../RibbonDesignMenu.scss";
import "../../../../common/stylesheets/overrule.scss";

OverlayBackground.propTypes = {
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
    RibbbonDesignMenu component must have the onClick function passed as props
    */
	onClick: PropTypes.func,
};

export default function OverlayBackground(props) {
	//-------------------------------------------------------------------
	// 1. Set the classes
	//-------------------------------------------------------------------
	let quommonClasses = getQuommons(
		props,
		"ribbon-design-menu-overlay-background-parent"
	);

	// ========================= Render Function =================================
	return (
		<div className={`qui ${quommonClasses.parentClasses}`}>
			<div className={`${quommonClasses.childClasses}`}>
				<div className="qui-ribbon-menu-slide-background-section">
					<div
						className="qui-ribbon-menu-slide-background-section-child-container"
						onClick={props.onClick}
					>
						<div className="qui-ribbon-menu-slide-background-section-child">
							<div className="qui-ribbon-menu-set-remove"></div>
							<div className="qui-ribbon-menu-label-set-remove">Set Remove</div>
						</div>
					</div>
					<div className="qui-ribbon-menu-label-file">Overlay Background</div>
				</div>
			</div>
		</div>
	);
}
