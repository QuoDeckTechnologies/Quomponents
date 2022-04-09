import React from "react";


import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "../RibbonMenu.scss";
import "./RibbonDesignMenu.scss"
import "../../../common/stylesheets/overrule.scss";
import PalleteThemeSection from "./sections/PalleteThemeSection";



export default function RibbonDesignMenu(props) {

    // ========================= Render Function =================================

    return (

        <div className={`ribbon-design-menu-container`}>
            <PalleteThemeSection/>
            <div className="qui-ribbon-menu-parent-vertical-line"></div>
            <div className="qui-ribbon-menu-overlay-background-section">
                <div className="qui-ribbon-menu-overlay-background-section-child-container">
                    <div className="qui-ribbon-menu-overlay-background-section-child">
                        <div className="qui-ribbon-menu-set-remove"></div>
                        <div className="qui-ribbon-menu-label-set-remove">Set Remove</div>
                    </div>
                </div>
                <div className="qui-ribbon-menu-label-file">Slide Background</div>
            </div>
            <div className="qui-ribbon-menu-parent-vertical-line"></div>
            <div className="qui-ribbon-menu-slide-background-section">
                <div className="qui-ribbon-menu-slide-background-section-child-container">
                    <div className="qui-ribbon-menu-slide-background-section-child">
                        <div className="qui-ribbon-menu-set-remove"></div>
                        <div className="qui-ribbon-menu-label-set-remove">Set Remove</div>
                    </div>
                </div>
                <div className="qui-ribbon-menu-label-file">Overlay Background</div>
            </div>
        </div>
    );
}