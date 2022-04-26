import React, { useState, useRef, useEffect } from "react";
import { ChromePicker } from "react-color";
import _ from "lodash";
import PropTypes from "prop-types";

import { getQuommons } from "../../../../common/javascripts/helpers";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../../common/stylesheets/common.css";
import "../../RibbonMenu.scss";
import "../RibbonDesignMenu.scss";
import "../../../CustomColor/CustomColor.scss";
import "../../../../common/stylesheets/overrule.scss";

import ColorSwatch from "../../../ColorSwatch/ColorSwatch.react";

import { PaletteSet } from "../../PalleteSelect.react";

PalleteThemeSection.propTypes = {
	//=======================================
	// Component Specific props
	//=======================================

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
    RibbbonDesignMenu component must have the onClick function passed as props
    */
	onClick: PropTypes.func,
};

export default function PalleteThemeSection(props) {
	//-------------------------------------------------------------------
	// 1. Set the classes
	//-------------------------------------------------------------------
	let quommonClasses = getQuommons(
		props,
		"ribbon-design-menu-pallete-theme-section-parent"
	);

	const [selectedPageColor, setPageColor] = useState("#ffffff");
	const [selectedPrimaryColor, setPrimaryColor] = useState("#f88a8a");
	const [selectedAccentColor, setAccentColor] = useState("#ef2929");
	const [selectedSecondaryColor, setSecondaryColor] = useState("#685555");

	const updateTheme = (colorSet) => {
		setPageColor(colorSet.pageColor);
		setPrimaryColor(colorSet.primaryColor);
		setAccentColor(colorSet.accentColor);
		setSecondaryColor(colorSet.secondaryColor);
	};

	let updatedTheme = {
		primaryColor: selectedPrimaryColor,
		accentColor: selectedAccentColor,
		pageColor: selectedPageColor,
		secondaryColor: selectedSecondaryColor,
	};

	useEffect(() => {
		props.onClick(updatedTheme);
	});

	const box = useRef(null);
	const [showPageColorPicker, setPageShowColorPicker] = useState(false);
	const [showPrimaryColorPicker, setPrimaryColorPicker] = useState(false);
	const [showAccentColorPicker, setAccentColorPicker] = useState(false);
	const [showSecondaryColorPicker, setSecondaryColorPicker] = useState(false);

	//-------------------------------------------------------------------
	// 4. Handle Closing of Color Picker Container
	//-------------------------------------------------------------------
	function useOutsideAlerter(ref) {
		useEffect(() => {
			// Function for click event
			function handleOutsideClick(event) {
				if (ref.current && !ref.current.contains(event?.target)) {
					setPageShowColorPicker(false);
					setPrimaryColorPicker(false);
					setAccentColorPicker(false);
					setSecondaryColorPicker(false);
				}
			}
			// Adding click event listener
			document.addEventListener("mousedown", handleOutsideClick);
			return () =>
				document.removeEventListener("mousedown", handleOutsideClick);
		}, [ref]);
	}
	useOutsideAlerter(box);
	// ========================= Render Function =================================
	return (
		<div className={`qui ${quommonClasses.parentClasses}`}>
			<div className={`${quommonClasses.childClasses}`}>
				<div
					className={`qui-ribbon-menu-pallete-custom-color-section-container`}
				>
					<div className="qui-ribbon-menu-color-pallete-section">
						<div className="qui-ribbon-menu-color-pallete-section-child-container">
							{_.map(PaletteSet, (colorSet, index) => {
								return (
									<div
										className="qui-ribbon-menu-color-pallete-section-child"
										onClick={() => updateTheme(colorSet)}
										key={index}
									>
										<ColorSwatch
											asPadded="fitted"
											asSize="small"
											withColor={{
												primaryColor: colorSet.primaryColor,
												accentColor: colorSet.accentColor,
												secondaryColor: colorSet.secondaryColor,
												pageColor: colorSet.pageColor,
											}}
										/>
									</div>
								);
							})}
						</div>
						<div className="qui-ribbon-menu-label-file">Settings</div>
					</div>
					<div className={`qui-ribbon-menu-custom-color-container`}>
						<div className="qui-ribbon-design-menu-color-picker-container">
							<div
								className={`qui-ribbon-design-menu-custom-color-container  qui-ribbon-design-menu-color-container`}
								ref={box}
							>
								<div className="qui-ribbon-design-menu-button-title-container">
									<button
										className="qui-ribbon-design-menu-custom-color-button"
										style={{ backgroundColor: selectedPageColor }}
										onClick={() => setPageShowColorPicker(true)}
									/>
									<div className="qui-ribbon-design-menu-custom-color-title">
										Page Color
									</div>
								</div>
								{showPageColorPicker && (
									<ChromePicker
										className={"qui-ribbon-design-menu-chrome-picker"}
										color={selectedPageColor}
										onChangeComplete={(update) => {
											setPageColor(update.hex);
										}}
									/>
								)}
							</div>
						</div>
						<div className="qui-ribbon-design-menu-color-picker-container">
							<div
								className={`qui-ribbon-design-menu-custom-color-container  qui-ribbon-design-menu-color-container`}
								ref={box}
							>
								<div className="qui-ribbon-design-menu-button-title-container">
									<button
										className="qui-ribbon-design-menu-custom-color-button"
										style={{ backgroundColor: selectedPrimaryColor }}
										onClick={() => setPrimaryColorPicker(true)}
									/>
									<div className="qui-ribbon-design-menu-custom-color-title">
										Primary Color
									</div>
								</div>
								{showPrimaryColorPicker && (
									<ChromePicker
										className={"qui-ribbon-design-menu-chrome-picker"}
										color={selectedPrimaryColor}
										onChangeComplete={(update) => {
											setPrimaryColor(update.hex);
										}}
									/>
								)}
							</div>
						</div>
						<div className="qui-ribbon-design-menu-color-picker-container">
							<div
								className={`qui-ribbon-design-menu-custom-color-container  qui-ribbon-design-menu-color-container `}
								ref={box}
							>
								<div className="qui-ribbon-design-menu-button-title-container">
									<button
										className="qui-ribbon-design-menu-custom-color-button"
										style={{ backgroundColor: selectedAccentColor }}
										onClick={() => setAccentColorPicker(true)}
									/>
									<div className="qui-ribbon-design-menu-custom-color-title">
										Accent Color
									</div>
								</div>
								{showAccentColorPicker && (
									<ChromePicker
										className={"qui-ribbon-design-menu-chrome-picker"}
										color={selectedAccentColor}
										onChangeComplete={(update) => {
											setAccentColor(update.hex);
										}}
									/>
								)}
							</div>
						</div>
						<div className="qui-ribbon-design-menu-color-picker-container">
							<div
								className={`qui-ribbon-design-menu-custom-color-container  qui-ribbon-design-menu-color-container`}
								ref={box}
							>
								<div className="qui-ribbon-design-menu-button-title-container">
									<button
										className="qui-ribbon-design-menu-custom-color-button"
										style={{ backgroundColor: selectedSecondaryColor }}
										onClick={() => setSecondaryColorPicker(true)}
									/>
									<div className="qui-ribbon-design-menu-custom-color-title">
										Secondary Color
									</div>
								</div>
								{showSecondaryColorPicker && (
									<ChromePicker
										className={"qui-ribbon-design-menu-chrome-picker"}
										color={selectedSecondaryColor}
										onChangeComplete={(update) => {
											setSecondaryColor(update.hex);
										}}
									/>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
