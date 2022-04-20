import React, { useState } from "react";
import _ from "lodash";
import PropTypes from "prop-types";

import { getQuommons } from "../../../../common/javascripts/helpers";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../../common/stylesheets/common.css";
import "../../RibbonMenu.scss";
import "../RibbonDesignMenu.scss";
import "../../../../common/stylesheets/overrule.scss";

import CustomColor from "../../../CustomColor/CustomColor.react";
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

	const [selectedColor, setColor] = useState();
	const select = (colors) => {
		setColor(colors);
	};

	// ========================= Render Function =================================
	return (
		<div className={`qui ${quommonClasses.parentClasses}`}>
			<div className={`${quommonClasses.childClasses}`}>
				<div
					className={`qui-ribbon-menu-pallete-custom-color-section-container`}
				>
					<div className="qui-ribbon-menu-color-pallete-section">
						<div className="qui-ribbon-menu-color-pallete-section-child-container">
							{_.map(PaletteSet, (colors, index) => {
								return (
									<div
										className="qui-ribbon-menu-color-pallete-section-child"
										onClick={() => select(colors)}
										key={index}
									>
										<ColorSwatch
											asPadded="fitted"
											asSize="small"
											withColor={{
												primaryColor: colors.colors[0],
												accentColor: colors.colors[1],
												secondaryColor: colors.colors[2],
												pageColor: colors.colors[3],
											}}
										/>
									</div>
								);
							})}
						</div>
						<div className="qui-ribbon-menu-label-file">Settings</div>
					</div>
					<div className={`qui-ribbon-menu-custom-color-container`}>
						<CustomColor
							asSize="tiny"
							content={{ color: selectedColor?.colors[3], title: "Page Color" }}
						/>
						<CustomColor
							asSize="tiny"
							content={{
								color: selectedColor?.colors[0],
								title: "Primary Color",
							}}
						/>
						<CustomColor
							asSize="tiny"
							content={{
								color: selectedColor?.colors[1],
								title: "Accent Color",
							}}
						/>
						<CustomColor
							asSize="tiny"
							content={{
								color: selectedColor?.colors[2],
								title: "Secondary Color",
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
