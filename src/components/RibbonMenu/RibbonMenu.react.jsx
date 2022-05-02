import React from "react";
import PropTypes from "prop-types";

import { getQuommons } from "../../common/javascripts/helpers";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./RibbonMenu.scss";
import "../../common/stylesheets/overrule.scss";

import RibbonToolsMenu from "./toolsMenu/RibbonToolsMenu.react";
import RibbonDesignMenu from "./designMenu/RibbonDesignMenu.react";
import RibbonHomeMenu from "./homeMenu/RibbonHomeMenu.react";
import RibbonHtmlMenu from "./htmlMenu/RibbonHtmlMenu.react";

RibbonMenu.propTypes = {
	//=======================================
	// Component Specific props
	//=======================================
	/**
	RibbonMenu tabs data should be passed in content field and it is required field  
	*/
	asEmphasis: PropTypes.oneOf(["html", "design", "tools", "home"]),
	/** 
	The Actions object is received from DeckEditorContainer for use.
	*/
	actions: PropTypes.shape({
		updateDeck: PropTypes.func,
		addPoints: PropTypes.func,
		addSlide: PropTypes.func,
		duplicateSlide: PropTypes.func,
		deleteSlide: PropTypes.func,
		changeSlideNav: PropTypes.func,
		setUserOptions: PropTypes.func
	}),
	/** 
	The Deck state is handed down from DeckEditorContainer for use.
	*/
	deck: PropTypes.shape({
		navEnabled: PropTypes.bool,
		snEnabled: PropTypes.bool,
		voEnabled: PropTypes.bool,
		content: PropTypes.array,
		currentSlide: PropTypes.number
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

RibbonMenu.defaultProps = {
	//=======================================
	// Component Specific props
	//=======================================
	asEmphasis: "html",

	//=======================================
	// Quommon props
	//=======================================
	isHidden: false,
	isDisabled: false,

	onClick: null,
};

/**
## Notes
- The design system used for this component is fontawesome Icons
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- Pass tabs props to display different tabs
**/
export default function RibbonMenu(props) {
	//-------------------------------------------------------------------
	// 1. Set the classes
	//-------------------------------------------------------------------
	let quommonClasses = getQuommons(props, "ribbon-menu");

	// ========================= Render Function =================================
	const ribbonMenu = (tabs) => {
		if (tabs?.toUpperCase() === "HTML") {
			return <RibbonHtmlMenu {...props} />;
		} else if (tabs?.toUpperCase() === "DESIGN") {
			return <RibbonDesignMenu {...props} />;
		} else if (tabs?.toUpperCase() === "TOOLS") {
			return <RibbonToolsMenu {...props} />;
		} else {
			return <RibbonHomeMenu {...props} />;
		}
	};
	return (
		<div className={`qui ${quommonClasses.parentClasses}`}>
			<div className={`${quommonClasses.childClasses} qui-ribbon-menu`}>
				{ribbonMenu(props.asEmphasis)}
			</div>
		</div>
	);
}
