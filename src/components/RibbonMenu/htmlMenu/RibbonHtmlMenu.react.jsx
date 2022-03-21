import React from "react";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "../RibbonMenu.scss";
import "../../../common/stylesheets/overrule.scss";

import SaveExitSection from "./sections/SaveExitSection.react";
import SaveSection from "./sections/SaveSection.react";

export default function RibbonHtmlMenu(props) {

    // ========================= Render Function =================================

    return (
        <div className={`ribbon-menu-html-container`}>
            <SaveExitSection {...props}/>
            <div className="parent-vertical-line"></div>
            <SaveSection {...props}/>
        </div>
    );
}