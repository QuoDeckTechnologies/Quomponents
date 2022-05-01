import React from "react";
import PropTypes from "prop-types";

import { getQuommons } from "../../../../common/javascripts/helpers";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../../common/stylesheets/common.css";
import "../../RibbonMenu.scss";
import "../RibbonHomeMenu.scss";
import "../../../../common/stylesheets/overrule.scss";

import IconLink from "../../../Buttons/IconLink/IconLink.react";

SlideSection.propTypes = {
	//=======================================
	// Component Specific props
	//=======================================
	/** 
	The Actions object is received from DeckEditorContainer for use.
	*/
	actions: PropTypes.shape({
		addSlide: PropTypes.func,
		duplicateSlide: PropTypes.func,
		deleteSlide: PropTypes.func
	}),
	/** 
	The Deck state is handed down from DeckEditorContainer for use.
	*/
	deck: PropTypes.shape({
		content: PropTypes.array
	}),

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
	SlideSection component must have the onClick function passed as props
	*/
	onClick: PropTypes.func,
};

export default function SlideSection(props) {
	//-------------------------------------------------------------------
	// 1. Set the classes
	//-------------------------------------------------------------------
	let quommonClasses = getQuommons(props, "ribbon-menu-slide-section-parent");

	// ========================= Render Function =================================
	return (
		<div className={`qui ${quommonClasses.parentClasses}`}>
			<div className={`${quommonClasses.childClasses}`}>
				<div className="qui-ribbon-menu-slide-section">
					<div className="qui-ribbon-menu-slide-section-child-container">
						<div className="qui-ribbon-menu-slide-section-child upload">
							<IconLink
								onClick={props.actions?.addSlide}
								asSize="tiny"
								asPadded="fitted"
								withColor={{
									backgroundColor: "#666666",
									hoverTextColor: "#666666",
								}}
								withIcon={{ icon: "fas fa-plus" }}
							/>
							<div className="qui-ribbon-menu-label" onClick={props.actions?.addSlide}>
								New Slide
							</div>
						</div>
						<div className="qui-ribbon-menu-child-vertical-line"></div>
						<div className="qui-ribbon-menu-slide-section-child">
							<div className="qui-ribbon-menu-slide-section-right-content">
								<IconLink
									onClick={props.actions?.duplicateSlide}
									asSize="tiny"
									asPadded="fitted"
									withColor={{
										backgroundColor: "#666666",
										hoverTextColor: "#666666",
									}}
									withIcon={{ icon: "far fa-copy" }}
								/>
								<div
									className="qui-ribbon-menu-slide-label"
									onClick={props.actions?.duplicateSlide}
								>
									Duplicate Slide
								</div>
							</div>
							<div className="qui-ribbon-menu-slide-section-right-content"
								style={props.deck.content.length === 1 ? { pointerEvents: "none", opacity: "0.6" } : { pointerEvents: "auto" }}>
								<IconLink
									onClick={props.actions?.deleteSlide}
									asSize="tiny"
									asPadded="fitted"
									withColor={{
										backgroundColor: "#666666",
										hoverTextColor: "#666666",
									}}
									isDisabled={props.deck?.content?.length === 1 ? true : false}
									withIcon={{ icon: "fas fa-trash" }}
								/>
								<div
									className="qui-ribbon-menu-slide-label"
									onClick={props.actions?.deleteSlide}
								>
									Delete Slide
								</div>
							</div>
						</div>
					</div>
					<div className="qui-ribbon-menu-label-file">Slide</div>
				</div>
			</div>
		</div>
	);
}
