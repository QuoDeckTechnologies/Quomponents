import React, { useState } from "react";
import PropTypes from "prop-types";

import { getQuommons, getTranslation } from "../../../../common/javascripts/helpers";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../../common/stylesheets/common.css";
import "../../RibbonMenu.scss";
import "../RibbonDesignMenu.scss";
import "../../../../common/stylesheets/overrule.scss";
import ImageUploadModal from "../../../ImageUploadModal/ImageUploadModal.react";

OverlayBackground.propTypes = {
	//=======================================
	// Component Specific props
	//=======================================
	/** 
	The Actions object is received from DeckEditorContainer for use.
	*/
	actions: PropTypes.shape({
		updateDeck: PropTypes.func
	}),

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
	RibbbonDesignMenu component must have the onClick function passed as props
	*/
	onClick: PropTypes.func,
	/**
	updateDeck component must have the onClick function passed as props
	*/
	updateDeck: PropTypes.func,
};

export default function OverlayBackground(props) {
	//-------------------------------------------------------------------
	// 1. Set the classes
	//-------------------------------------------------------------------
	let quommonClasses = getQuommons(
		props,
		"ribbon-design-menu-overlay-background-parent"
	);

	let overlayBackground = {
		overlayBackground: "Overlay Background",
		setBackground: "Set",
		removeBackground: "Remove"
	}

	//-------------------------------------------------------------------
	// 5. Get translation of the component
	//-------------------------------------------------------------------
	let tObj = null;
	if (
		props.withTranslation?.lang &&
		props.withTranslation.lang !== "" &&
		props.withTranslation.lang !== "en"
	) {
		tObj = getTranslation(props.withTranslation);
		overlayBackground = tObj;
	}

	const [isImageModalOpen, setImageModalOpen] = useState(false);

	function handleModalOpen() {
		setImageModalOpen(true)
	}
	function handleModalSave(editedImage) {
		props.actions?.updateDeck({ backgroundImage: editedImage })
	}
	function removeBackground() {
		props.actions?.updateDeck({ backgroundImage: "" })
	}

	// ========================= Render Function =================================
	return (
		<div className={`qui ${quommonClasses.parentClasses}`}>
			<div className={`${quommonClasses.childClasses}`}>
				<div className="qui-ribbon-menu-slide-background-section">
					<div
						className="qui-ribbon-menu-slide-background-section-child-container"
					>
						<div className="qui-ribbon-menu-slide-background-section-child">
							<div className="qui-ribbon-menu-set-remove"></div>
							<div className="qui-ribbon-menu-label-set-remove-container">
								<div className="qui-ribbon-menu-label-set" onClick={handleModalOpen}>{overlayBackground?.setBackground || "Set"}</div>
								<div className="qui-ribbon-menu-label-remove" onClick={removeBackground}> {overlayBackground?.removeBackground || "Remove"}</div>
							</div>
						</div>
					</div>
					<div className="qui-ribbon-menu-label-file">{overlayBackground?.overlayBackground || "Overlay Background"}</div>
				</div>
				{isImageModalOpen &&
					<div>
						<ImageUploadModal isOpen={isImageModalOpen} onClick={(editedImage) => { handleModalSave(editedImage) }} onClose={(value) => { setImageModalOpen(value) }} />
					</div>}
			</div>
		</div>
	);
}
