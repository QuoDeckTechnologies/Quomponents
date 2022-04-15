import React from "react";
import PropTypes from "prop-types";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
// import "../RibbonMenu.scss";
import "../../../common/stylesheets/overrule.scss";

import SaveExitSection from "./sections/SaveExitSection.react";
import SaveSection from "./sections/SaveSection.react";

RibbonHtmlMenu.propTypes = {
	//=======================================
	// Component Specific props
	//=======================================
    saveExit: PropTypes.func,

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
};

export default function RibbonHtmlMenu(props) {
	// ========================= Render Function =================================
    

    function handleSaveExit(){
        props.saveExit("some value")
    }
	return (
		<div className={`qui-ribbon-html-menu-container`}>
			<SaveExitSection asFloated="inline" onClick={handleSaveExit}/>
			<div className="qui-ribbon-menu-parent-vertical-line"></div>
			<SaveSection {...props} />
		</div>
	);
}
