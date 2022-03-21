import React from "react";

import AnalysisSection from "./sections/AnalysisSection";
import DeckSettingsSection from "./sections/DeckSettingSection";
import QuestionBankSection from "./sections/QuestionBankSection.react";
import VoiceoverSection from "./sections/VoiceoverSection.react";


export default function RibbonToolMenu(props) {

    // ========================= Render Function =================================

    return (
        <div className={`ribbon-menu-tools-container`}>
            <QuestionBankSection />
            <div className="parent-vertical-line"></div>
            <DeckSettingsSection />
            <div className="parent-vertical-line"></div>
            <VoiceoverSection />
            <div className="parent-vertical-line"></div>
            <AnalysisSection />
        </div>
    );
}