import React, { useState } from "react";
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
	/** 
	The Actions object is received from DeckEditorContainer for use.
	*/
	actions: PropTypes.shape({
		addPoints: PropTypes.func
	}),
	/** 
	The deckId is received from DeckEditorContainer for use.
	*/
	deckId: PropTypes.string,
	/** 
	The onSaveDeck function is received from DeckEditorContainer for use.
	*/
	onSaveDeck: PropTypes.func,
	/** 
	The onAddQDF function is received from DeckEditorContainer for use.
	*/
	onAddQDF: PropTypes.func,
	params: PropTypes.shape({
		deckId: PropTypes.string
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

	const [modalOpen, setModalOpen] = useState(false);

	const handlePoModalClose = () => setModalOpen(false);

	const handleSave = () => {
		setModalOpen(true)
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
						asSize={"small"}
						withColor={{
							backgroundColor: "#666666",
							hoverTextColor: "#666666",
						}}
						withIcon={{ icon: "fa fa-sign-out-alt" }}
					/>
					<div className="qui-ribbon-menu-label" onClick={handleSave}>
						Save & Exit
					</div>
				</div>
				{modalOpen &&
					<div className="qui-ribbon-html-menu-points-modal" onClick={handlePoModalClose}>
						{/* Points Modal here */}
					</div>}
			</div>
		</div>
	);
}
