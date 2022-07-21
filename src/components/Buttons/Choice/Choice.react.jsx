import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
	getQuommons,
	getTranslation,
	getAnimation,
} from "../../../common/javascripts/helpers";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./Choice.scss";
import "../../../common/stylesheets/overrule.scss";
import Button from "../Button/Button.react";

Choice.propTypes = {
	//=======================================
	// Component Specific props
	//=======================================
	/**
	Options prop is array of 2 object has the correct choice with its text.
	*/
	options: PropTypes.arrayOf(
		PropTypes.shape({
			correct: PropTypes.string,
			text: PropTypes.string,
		})
	).isRequired,
	/**
	Use to enable/disable the OR tag
	*/
	textSeparator: PropTypes.bool,
	/**
	Use to define component padding in increasing order
	*/
	asPadded: PropTypes.oneOf(["fitted", "compact", "normal", "relaxed"]),
	/**
	Set action emphasis in increasing order 
	*/
	asEmphasis: PropTypes.oneOf(["text", "outlined", "contained"]),
	//=======================================
	// Quommon props
	//=======================================
	/**
	Use to define component text size in increasing order
	*/
	asSize: PropTypes.oneOf([
		"tiny",
		"small",
		"normal",
		"big",
		"huge",
		"massive",
	]),
	/**
	Use to float the component in parent container
	*/
	asFloated: PropTypes.oneOf(["left", "right", "none", "inline"]),

	/**
	Use to override component colors and behavior
	*/
	withColor: PropTypes.shape({
		backgroundColor: PropTypes.string,
		textColor: PropTypes.string,
		accentColor: PropTypes.string,
		hoverBackgroundColor: PropTypes.string,
		hoverTextColor: PropTypes.string,
	}),
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
	Use to toggle the component taking the full width of the parent container
	*/
	isFluid: PropTypes.bool,
	/**
	Use to enable/disable the component
	*/
	isDisabled: PropTypes.bool,
	/**
	Use to toggle a loading state for the component
	*/
	isLoading: PropTypes.bool,
	/**
	Choice component must have the onClick function passed as props
	*/
	onClick: PropTypes.func.isRequired,
};

Choice.defaultProps = {
	//=======================================
	// Component Specific props
	//=======================================
	options: [
		{
			correct: "checked",
			text: "Item 1",
		},
		{
			correct: "",
			text: "Item 2",
		},
	],
	textSeparator: true,
	asEmphasis: "contained",
	//=======================================
	// Quommon props
	//=======================================
	asSize: "normal",
	asPadded: "normal",
	asFloated: "inline",
	withColor: null,
	withTranslation: null,
	isHidden: false,
	isFluid: false,
	isLoading: false,
	isDisabled: false,
};
/**
## Notes
- The design system used for this component is fontawesome Icons
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- Component consist of array of 2 object with the props of correct and text, pass checked in the correct props and string the text props which you want to display on th button.
**/

// function getPrimaryButtonColors(colors, emphasis) {
// 	let colorStyleForPrimary;
// 	colorStyleForPrimary =
// 		emphasis === "text"
// 			? {
// 				background: "transparent",
// 				boxShadow: "none",
// 				border: "none",
// 				color: colors?.primaryTextColor,
// 			}
// 			: emphasis === "outlined"
// 				? {
// 					background: "transparent",
// 					boxShadow: "none",
// 					borderColor: colors?.primaryBackgroundColor,
// 					color: colors?.primaryBackgroundColor,
// 				}
// 				: {
// 					background: colors?.primaryBackgroundColor,
// 					color: colors?.primaryTextColor,
// 					border: "none",
// 				};
// 	return colorStyleForPrimary;
// }


export default function Choice(props) {
	let { options } = props;
	let orChoiceColor = {
		backgroundColor: props?.withColor?.accentColor,
		hoverBackgroundColor: props?.withColor?.hoverBackgroundColor,
		hoverTextColor: props?.withColor?.hoverTextColor,
		textColor: props?.withColor?.textColor,
	}
	//-------------------------------------------------------------------
	// 1. Set the classes
	//-------------------------------------------------------------------
	let quommonClasses = getQuommons(props, "choice");

	//-------------------------------------------------------------------
	// 2. Translate the text objects in case their is a dictionary provided
	//-------------------------------------------------------------------
	let text1 = options[0]?.text;
	let text2 = options[1]?.text;
	let tObj = getTranslation(props.withTranslation, "options");
	if (
		props.withTranslation &&
		props.withTranslation.lang !== "" &&
		props.withTranslation.lang !== "en"
	) {
		if (tObj && text1 && text2) {
			text1 = tObj?.text1
			text2 = tObj?.text2
		}
	}
	//-------------------------------------------------------------------
	// 3. Get animation of the component
	//-------------------------------------------------------------------
	const animate = getAnimation(props);

	function handleClick(index) {
		props.onClick(index)
	}
	let orStyle = {
		display: props.textSeparator ? "flex" : "none",
		color: props.withColor?.accentColor,
	};
	return (
		<motion.div initial={animate.from} animate={animate.to} className={`qui ${quommonClasses.parentClasses} `}>
			{props.options && (
				<div className="qui-choice-container">
					<Button
						{...props}
						isFluid={props.isFluid}
						content={text1}
						withTranslation={null}
						onClick={() => { handleClick(0) }} />
					<div className={`qui-or pad-${props.asPadded}`} style={Object.assign({}, orStyle)}>
						OR
					</div>
					<Button
						{...props}
						withColor={orChoiceColor}
						isFluid={props.isFluid}
						content={text2}
						withTranslation={null}
						onClick={() => { handleClick(0) }} />
				</div>

			)}
		</motion.div>
	);
}