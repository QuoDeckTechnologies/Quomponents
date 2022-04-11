import React from "react";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "../RibbonMenu.scss";
import "./RibbonHomeMenu.scss";
import "../../../common/stylesheets/overrule.scss";

import SaveExitSection from "../htmlMenu/sections/SaveExitSection.react";
import SaveSection from "../htmlMenu/sections/SaveSection.react"
import SlideSection from "./sections/SlideSection.react";
import SlideSettings from "./sections/SlideSettings";
import ViewSection from "./sections/ViewSection.react";


export default function RibbonHomeMenu(props) {

    // ========================= Render Function =================================

    return (
        <div className={`qui-ribbon-home-menu-container`}>
            <SaveExitSection />
            <div className="qui-ribbon-menu-parent-vertical-line"></div>
            <SaveSection />
            <div className="qui-ribbon-menu-parent-vertical-line"></div>
            <SlideSection />
            <div className="qui-ribbon-menu-parent-vertical-line"></div>
            <SlideSettings />
            <div className="qui-ribbon-menu-parent-vertical-line"></div>
            <ViewSection />
        </div>
    );
}