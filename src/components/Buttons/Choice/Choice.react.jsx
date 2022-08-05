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
	Use to define standard component type
	*/
	asVariant: PropTypes.oneOf(["primary", "secondary", "success", "warning", "error",]),
	/**
	Use to float the component in parent container
	*/
	asFloated: PropTypes.oneOf(["left", "right", "none", "inline"]),
	/**
	Use to define component padding in increasing order
	*/
	asPadded: PropTypes.oneOf(["fitted", "compact", "normal", "relaxed"]),
	/**
	Set action emphasis in increasing order 
	*/
	asEmphasis: PropTypes.oneOf(["text", "outlined", "contained"]),
	/**
	Use to align content within the component container
	*/
	asAligned: PropTypes.oneOf(["left", "right", "center"]),
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
	Use to show label of the component text. 
	*/
	withLabel: PropTypes.shape({
		format: PropTypes.oneOf(["label", "caption", "popover"]),
		contentOne: PropTypes.string,
		contentTwo: PropTypes.string,
		textColor: PropTypes.string,
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
	asVariant: "primary",
	asSize: "normal",
	asPadded: "normal",
	asFloated: "inline",
	asAligned: "center",
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

export default function Choice(props) {
	let { options } = props;
	let choiceOneColor = {
		backgroundColor: props?.withColor?.backgroundColor,
		hoverBackgroundColor: props?.withColor?.hoverBackgroundColor,
		hoverTextColor: props?.withColor?.hoverTextColor,
		textColor: props.asEmphasis === "contained" ? props.withColor?.textColor : props.withColor?.backgroundColor
	}
	let choiceTwoColor = {
		backgroundColor: props?.withColor?.accentColor,
		hoverBackgroundColor: props?.withColor?.hoverBackgroundColor,
		hoverTextColor: props?.withColor?.hoverTextColor,
		textColor: props.asEmphasis === "contained" ? props.withColor?.textColor : props.withColor?.accentColor
	}


	function getLabelOne(labelObj, position) {
		return labelObj?.format === position ? labelObj.contentOne : "";
	}
	function getLabelTwo(labelObj, position) {
		return labelObj?.format === position ? labelObj.contentTwo : "";
	}

	let labelContent = Object.assign({}, props.withLabel);
	let labelStyle = labelContent?.textColor
		? { color: labelContent.textColor }
		: {};
	//-------------------------------------------------------------------
	// 1. Set the classes
	//-------------------------------------------------------------------
	let quommonClasses = getQuommons(props, "choice");

	//-------------------------------------------------------------------
	// 2. Translate the text objects in case their is a dictionary provided
	//-------------------------------------------------------------------
	let text1 = labelContent?.contentOne;
	let text2 = labelContent?.contentTwo;
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
					<div style={{ display: "flex", flexDirection: "column" }}>
						<div className="qui-label qt-lbl" style={labelStyle}>
							{getLabelOne(labelContent, "label")}
						</div>
						<Button
							{...props}
							withColor={choiceOneColor}
							isFluid={props.isFluid}
							content={text1}
							withTranslation={null}
							withLabel={props.withLabel}
							onClick={() => { handleClick(0) }} />
						<div className="qui-caption qt-lbl" style={labelStyle}>
							{getLabelOne(labelContent, "caption")}
						</div>
					</div>
					<div className={`qui-or pad-${props.asPadded}`} style={Object.assign({}, orStyle)}>
						OR
					</div>
					<div style={{ display: "flex", flexDirection: "column" }}>
						<div className="qui-label qt-lbl" style={labelStyle}>
							{getLabelTwo(labelContent, "label")}
						</div>
						<Button
							{...props}
							withColor={choiceTwoColor}
							isFluid={props.isFluid}
							content={text2}
							withTranslation={null}
							onClick={() => { handleClick(1) }} />
						<div className="qui-caption qt-lbl" style={labelStyle}>
							{getLabelTwo(labelContent, "caption")}
						</div>
					</div>
				</div>

			)}
		</motion.div>
	);
}