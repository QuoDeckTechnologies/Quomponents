import React from "react";

import AnalysisSection from "./sections/AnalysisSection";
import DeckSettingsSection from "./sections/DeckSettingsSection";
import QuestionBankSection from "./sections/QuestionBankSection.react";
import VoiceoverSection from "./sections/VoiceoverSection.react";


export default function RibbonToolMenu(props) {

    // ========================= Render Function =================================

    return (
        <div className={`qui-ribbon-tools-menu-container`}>
            <QuestionBankSection />
            <div className="qui-ribbon-menu-parent-vertical-line"></div>
            <DeckSettingsSection />
            <div className="qui-ribbon-menu-parent-vertical-line"></div>
            <VoiceoverSection />
            <div className="qui-ribbon-menu-parent-vertical-line"></div>
            <AnalysisSection />
        </div>
    );
}