// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
	getAnimation,
	getQuommons,
} from "../../../common/javascripts/helpers.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./Choice.scss";
import "../../../common/stylesheets/overrule.scss";
import SlideHeader from "../../SlideHeader/SlideHeader.react";
import Choice from "../../Buttons/Choice/Choice.react";

SlideChoice.propTypes = {
	//=======================================
	// Component Specific props
	//=======================================
	/**
	SlideChoice data should be passed in data field and it is a required field
	*/
	data: PropTypes.shape({
		title: PropTypes.string,
		subtitle: PropTypes.string,
		image: PropTypes.string,
		question: PropTypes.string,
		backgroundImage: PropTypes.string,
		choice: PropTypes.arrayOf(
			PropTypes.shape({
				correct: PropTypes.string,
				text: PropTypes.string,
			})
		),
	}).isRequired,
	slideId: PropTypes.number,
	/**
	Use to enable/disable the OR tag
	*/
	isChoice: PropTypes.bool,
	//=======================================
	// Quommon props
	//=======================================
	/**
	Use to define standard component type
	*/
	asVariant: PropTypes.oneOf([
		"primary",
		"secondary",
		"success",
		"warning",
		"error",
	]),
	/**
	Use to override component colors and behavior
	*/
	withColor: PropTypes.shape({
		questionColor: PropTypes.string,
		slideHeaderTextColor: PropTypes.string,
		slideHeaderAccentColor: PropTypes.string,
		slideHeaderBackgroundColor: PropTypes.string,
		backgroundColor: PropTypes.string,
		primaryBackgroundColor: PropTypes.string,
		secondaryBackgroundColor: PropTypes.string,
		accentColor: PropTypes.string,
		primaryTextColor: PropTypes.string,
		secondaryTextColor: PropTypes.string,
	}),
	/**
	Use to define the entry animation of the component
	*/
	withAnimation: PropTypes.shape({
		animation: PropTypes.oneOf([
			"zoom",
			"collapse",
			"fade",
			"slideDown",
			"slideUp",
			"slideLeft",
			"slideRight",
			"",
		]),
		duration: PropTypes.number,
		delay: PropTypes.number,
	}),
	/**
	Set action emphasis in increasing order 
	*/
	asEmphasis: PropTypes.oneOf(["text", "outlined", "contained"]),
	/**
	Use to enable/disable the component
	*/
	isDisabled: PropTypes.bool,
	/**
	Use to show/hide the component
	*/
	isHidden: PropTypes.bool,
	/**
	SlideChoice component must have the onClick function passed as props
	*/
	onClick: PropTypes.func.isRequired,
};

SlideChoice.defaultProps = {
	//=======================================
	// Component Specific props
	//=======================================
	data: {},
	slideId: 0,
	//=======================================
	// Quommon props
	//=======================================
	asVariant: "primary",
	asEmphasis: "contained",
	withColor: null,
	withAnimation: null,
	isDisabled: false,
	isHidden: false,
};
/**
## Notes
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- component is used to show the question with the choice buttons, user need to submit the correct
  answer using choice button.
**/
export default function SlideChoice(props) {
	let { data } = props;
	//-------------------------------------------------------------------
	// Set the classes
	//-------------------------------------------------------------------
	let quommonClasses = getQuommons(props, "slide-choice");
	quommonClasses.childClasses += ` variant-${props.asVariant}-text`;
	//-------------------------------------------------------------------
	// Get animation of the component
	//-------------------------------------------------------------------
	const animate = getAnimation(props.withAnimation);

	//-------------------------------------------------------------------
	// Setting the colors of the imported components
	//-------------------------------------------------------------------
	let slideHeaderColors = {
		textColor: props.withColor?.slideHeaderTextColor,
		accentColor: props.withColor?.slideHeaderAccentColor,
		backgroundColor: props.withColor?.slideHeaderBackgroundColor,
	};
	let cardBackground = props.withColor?.backgroundColor
		? props.withColor?.backgroundColor
		: "#ffffff";
	const getBackground = () => {
		return {
			background: `url(${data?.backgroundImage})`,
			backgroundSize: "cover",
		};
	};
	const background = data?.backgroundImage
		? getBackground()
		: { backgroundColor: cardBackground };

	// ========================= Render Function =================================
	return (
		<motion.div
			initial={animate.from}
			animate={animate.to}
			className={`qui ${quommonClasses.parentClasses}`}
		>
			{data && (
				<div
					className="qui-slide-choice-card"
					key={"slide-choice" + props.slideId}
					style={background}
				>
					{!data?.image && (data?.title || data?.subtitle) && (
						<SlideHeader
							content={{ title: data?.title, subTitle: data?.subtitle }}
							withColor={slideHeaderColors}
						/>
					)}
					{data?.image && (
						<img className="qui-slide-choice-image" src={data?.image} alt="" />
					)}
					<div
						className={`qui-slide-choice-question variant-${props.asVariant}-text`}
						style={{ color: props.withColor?.questionColor }}
					>
						{data?.question}
					</div>
					{data?.choice && (
						<div className="qui-slide-choices">
							<Choice
								{...props}
								withColor={{
									primaryBackgroundColor:
										props.withColor?.primaryBackgroundColor,
									secondaryBackgroundColor:
										props.withColor?.secondaryBackgroundColor,
									accentColor: props.withColor?.accentColor,
									primaryTextColor: props.withColor?.primaryTextColor,
									secondaryTextColor: props.withColor?.secondaryTextColor,
								}}
								asEmphasis={props.asEmphasis}
								asPadded="fitted"
								asSize="huge"
								options={[
									{
										correct: data?.choice[0]?.correct,
										text: data?.choice[0]?.text,
									},
									{
										correct: data?.choice[1]?.correct,
										text: data?.choice[1]?.text,
									},
								]}
							/>
						</div>
					)}
				</div>
			)}
		</motion.div>
	);
}
