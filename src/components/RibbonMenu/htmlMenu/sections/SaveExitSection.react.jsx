import React from "react";
import PropTypes from "prop-types";

import { getQuommons } from "../../../../common/javascripts/helpers";

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
      RibbonMenu component must have the onClick function passed as props
      */
	onClick: PropTypes.func,
};

export default function SaveExitSection(props) {
	//-------------------------------------------------------------------
	// 1. Set the classes
	//-------------------------------------------------------------------
	let quommonClasses = getQuommons(props, "ribbon-menu-exit-save-section");

	return (
		<div className={`qui ${quommonClasses.parentClasses}`}>
			<div className={`${quommonClasses.childClasses}`}>
				<div className="qui-ribbon-exit-save-section">
					<IconLink
						asPadded="fitted"
						onClick={props.onClick}
						asSize={"small"}
						withColor={{
							backgroundColor: "#666666",
							hoverTextColor: "#666666",
						}}
						withIcon={{ icon: "fa fa-sign-out-alt" }}
					/>
					<div
						className="qui-ribbon-menu-label"
						onClick={props.onClick}
					>
						Save & Exit
					</div>
				</div>
			</div>
		</div>
	);
}
