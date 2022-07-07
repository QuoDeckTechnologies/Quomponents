import React, { useState } from "react";
import PropTypes from "prop-types";

import { getQuommons, getTranslation } from "../../../../common/javascripts/helpers";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../../common/stylesheets/common.css";
import "../../RibbonMenu.scss";
import "../RibbonDesignMenu.scss";
import "../../../../common/stylesheets/overrule.scss";
import ImageUploadModal from "../../../ImageUploadModal/ImageUploadModal.react";

SlideBackground.propTypes = {
	//=======================================
	// Component Specific props
	//=======================================
	actions: PropTypes.shape({
		updateDeck: PropTypes.func
	}),

	//=======================================
	// Quommon props
	//=======================================
	/**
	Use to float the component in parent container
	*/
	asFloated: PropTypes.oneOf(["left", "right", "inline"]),
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
};

export default function SlideBackground(props) {
	//-------------------------------------------------------------------
	// 1. Set the classes
	//-------------------------------------------------------------------
	let quommonClasses = getQuommons(
		props,
		"ribbon-design-menu-slide-background-parent"
	);

	let slide_Background = {
		slideBackground: "Slide Background",
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
		slide_Background = tObj;
	}

	const [isImageModalOpen, setImageModalOpen] = useState(false);

	function handleModalOpen() {
		setImageModalOpen(true)
	}
	function handleModalSave(value) {
		props.actions.updateDeck({ backgroundImage: value })
	}
	function removeBackground() {
		props.actions.updateDeck({ backgroundImage: "" })
	}

	// ========================= Render Function =================================
	return (
		<div className={`qui ${quommonClasses.parentClasses}`}>
			<div className={`${quommonClasses.childClasses}`}>
				<div className="qui-ribbon-menu-overlay-background-section">
					<div
						className="qui-ribbon-menu-overlay-background-section-child-container"
					>
						<div className="qui-ribbon-menu-overlay-background-section-child">
							<div className="qui-ribbon-menu-set-remove" >
								{props.deck?.backgroundImage && props.deck?.backgroundImage !== "" && (
									<img
										className="qui-ribbon-design-menu-slide-background-image"
										id="background-preview"
										src={
											props.deck?.backgroundImage
										}
										alt="preview"
									/>
								)}
							</div>
							<div className="qui-ribbon-menu-label-set-remove-container">
								<div className="qui-ribbon-menu-label-set" onClick={handleModalOpen}>{slide_Background?.setBackground || "Set"}</div>
								<div className="qui-ribbon-menu-label-remove" onClick={removeBackground}>{slide_Background?.removeBackground || "Remove"}</div>
							</div>
						</div>
					</div>
					<div className="qui-ribbon-menu-label-file">{slide_Background?.slideBackground || "Slide Background"}</div>
				</div>
			</div>
			{isImageModalOpen &&
				<div>
					<ImageUploadModal isOpen={isImageModalOpen} onClick={(value) => { handleModalSave(value) }} onClose={(value) => { setImageModalOpen(value) }} />
				</div>
			}
		</div>
	);
}
