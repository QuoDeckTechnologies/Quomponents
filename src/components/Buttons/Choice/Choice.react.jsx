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
	isChoice: PropTypes.bool,
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
		primaryBackgroundColor: PropTypes.string,
		secondaryBackgroundColor: PropTypes.string,
		accentColor: PropTypes.string,
		primaryTextColor: PropTypes.string,
		secondaryTextColor: PropTypes.string,
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
	Use to enable/disable the component
	*/
	isDisabled: PropTypes.bool,
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
	isChoice: true,
	asEmphasis: "contained",
	//=======================================
	// Quommon props
	//=======================================
	asSize: "normal",
	asFloated: "inline",
	withColor: null,
	withTranslation: null,
	isHidden: false,
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

function getPrimaryButtonColors(colors, emphasis) {
	let colorStyleForPrimary;
	colorStyleForPrimary =
		emphasis === "text"
			? {
				background: "transparent",
				boxShadow: "none",
				border: "none",
				color: colors?.primaryTextColor,
			}
			: emphasis === "outlined"
				? {
					background: "transparent",
					boxShadow: "none",
					borderColor: colors?.primaryBackgroundColor,
					color: colors?.primaryBackgroundColor,
				}
				: {
					background: colors?.primaryBackgroundColor,
					color: colors?.primaryTextColor,
					border: "none",
				};
	return colorStyleForPrimary;
}

function getSecondaryButtonColors(colors, emphasis) {
	let colorStyleForSecondary;
	colorStyleForSecondary =
		emphasis === "text"
			? {
				background: "transparent",
				boxShadow: "none",
				border: "none",
				color: colors?.secondaryBackgroundColor,
			}
			: emphasis === "outlined"
				? {
					background: "transparent",
					boxShadow: "none",
					borderColor: colors?.secondaryBackgroundColor,
					color: colors?.secondaryBackgroundColor,
				}
				: {
					background: colors?.secondaryBackgroundColor,
					color: colors?.secondaryTextColor,
					border: "none",
				};
	return colorStyleForSecondary;
}

export default function Choice(props) {
	let { options } = props;
	//-------------------------------------------------------------------
	// 1. Set the classes
	//-------------------------------------------------------------------
	let quommonClasses = getQuommons(props, "choice");

	//-------------------------------------------------------------------
	// 2. Translate the text objects in case their is a dictionary provided
	//-------------------------------------------------------------------
	let text1 = options[0]?.text;
	let text2 = options[1]?.text;
	let tObj = getTranslation(props.withTranslation);
	if (
		props.withTranslation &&
		props.withTranslation.lang !== "" &&
		props.withTranslation.lang !== "en"
	) {
		if (tObj && text1 && text2) {
			text1 = tObj[0]?.text1
			text2 = tObj[1]?.text2
		}
	}

	//-------------------------------------------------------------------
	// 3. Set the component colors
	//-------------------------------------------------------------------
	let primaryButtonStyle = getPrimaryButtonColors(
		props.withColor,
		props.asEmphasis
	);
	let secondaryButtonStyle = getSecondaryButtonColors(
		props.withColor,
		props.asEmphasis
	);

	//-------------------------------------------------------------------
	// 4. Get animation of the component
	//-------------------------------------------------------------------
	const animate = getAnimation(props);

	function handleClick(index) {
		props.onClick(index)
	}
	let orStyle = {
		display: props.isChoice ? "flex" : "none",
		color: props.withColor?.accentColor,
	};

	function choice() {
		return (
			<motion.div initial={animate.from} animate={animate.to}>
				{props.options && (
					<div className={`qui-choice-container`}>
						<div
							className={`qui-btn qui-choices qui-choice1`}
							style={Object.assign({}, primaryButtonStyle)}
							onClick={() => { handleClick(0) }}
						>
							{text1}
						</div>
						<div className="qui-or" style={Object.assign({}, orStyle)}>
							OR
						</div>
						<div
							className={`qui-btn qui-choices qui-choice2`}
							style={Object.assign({}, secondaryButtonStyle)}
							onClick={() => { handleClick(1) }}
						>
							{text2}
						</div>
					</div>
				)}
			</motion.div>
		);
	}
	return (
		<div className={`qui ${quommonClasses.parentClasses} `}>
			<div className={`${quommonClasses.childClasses} `}>{choice()}</div>
		</div>
	);
}
