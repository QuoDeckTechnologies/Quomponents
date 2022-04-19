import React from "react";
import PropTypes from "prop-types";

import { getQuommons } from "../../../../common/javascripts/helpers";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../../common/stylesheets/common.css";
import "../../RibbonMenu.scss";
import "../RibbonHomeMenu.scss";
import "../../../../common/stylesheets/overrule.scss";

import IconLink from "../../../Buttons/IconLink/IconLink.react";

ViewSection.propTypes = {
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
    ViewSection component must have the onClick function passed as props
    */
	onClick: PropTypes.func,
};

export default function ViewSection(props) {
	//-------------------------------------------------------------------
	// 1. Set the classes
	//-------------------------------------------------------------------
	let quommonClasses = getQuommons(
		props,
		"ribbon-home-menu-view-section-parent"
	);

	// ========================= Render Function =================================
	return (
		<div className={`qui ${quommonClasses.parentClasses}`}>
			<div className={`${quommonClasses.childClasses}`}>
				<div className="qui-ribbon-menu-view-section">
					<div className="qui-ribbon-menu-view-section-child-container">
						<div className="qui-ribbon-menu-view-section-child">
							<IconLink
								onClick={props.onClick}
								asSize="tiny"
								asPadded="fitted"
								withColor={{
									backgroundColor: "#666666",
									hoverTextColor: "#666666",
								}}
								withIcon={{ icon: "fas fa-filter" }}
							/>
							<div className="qui-ribbon-menu-label" onClick={props.onClick}>
								Sorter
							</div>
						</div>
						<div className="qui-ribbon-menu-child-vertical-line"></div>
						<div className="qui-ribbon-menu-view-section-child">
							<IconLink
								onClick={props.onClick}
								asSize="tiny"
								asPadded="fitted"
								withColor={{
									backgroundColor: "#666666",
									hoverTextColor: "#666666",
								}}
								withIcon={{ icon: "fas fa-mobile-alt" }}
							/>
							<div className="qui-ribbon-menu-label" onClick={props.onClick}>
								Mobile
							</div>
						</div>
						<div className="qui-ribbon-menu-child-vertical-line"></div>
						<div className="qui-ribbon-menu-view-section-child">
							<IconLink
								onClick={props.onClick}
								asSize="tiny"
								asPadded="fitted"
								withColor={{
									backgroundColor: "#666666",
									hoverTextColor: "#666666",
								}}
								withIcon={{ icon: "fas fa-laptop" }}
							/>
							<div className="qui-ribbon-menu-label" onClick={props.onClick}>
								Desktop
							</div>
						</div>
						<div className="qui-ribbon-menu-child-vertical-line"></div>
						<div className="qui-ribbon-menu-view-section-child">
							<IconLink
								onClick={props.onClick}
								asSize="tiny"
								asPadded="fitted"
								withColor={{
									backgroundColor: "#666666",
									hoverTextColor: "#666666",
								}}
								withIcon={{ icon: "fas fa-comments" }}
							/>
							<div className="qui-ribbon-menu-label" onClick={props.onClick}>
								Comments
							</div>
						</div>
					</div>
					<div className="qui-ribbon-menu-label-file">View</div>
				</div>
			</div>
		</div>
	);
}
