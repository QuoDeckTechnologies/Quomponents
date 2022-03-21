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

        <div className={`ribbon-menu-design-container`}>
            <PalleteThemeSection/>
            <div className="parent-vertical-line"></div>
            <div className="overlay-background-section">
                <div className="overlay-background-section-child-container">
                    <div className="overlay-background-section-child">
                        <div className="set-remove"></div>
                        <div className="label-set-remove">Set Remove</div>
                    </div>
                </div>
                <div className="label-file">Slide Background</div>
            </div>
            <div className="parent-vertical-line"></div>
            <div className="slide-background-section">
                <div className="slide-background-section-child-container">
                    <div className="slide-background-section-child">
                        <div className="set-remove"></div>
                        <div className="label-set-remove">Set Remove</div>
                    </div>
                </div>
                <div className="label-file">Overlay Background</div>
            </div>
        </div>
    );
}