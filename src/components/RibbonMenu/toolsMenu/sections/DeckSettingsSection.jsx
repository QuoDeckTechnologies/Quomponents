import React, { useState } from "react";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../../common/stylesheets/common.css";
import "../../RibbonMenu.scss";
import "../RibbonToolMenu.scss";
import "../../../../common/stylesheets/overrule.scss";

import IconLink from "../../../Buttons/IconLink/IconLink.react";



export default function DeckSettingsSection(props) {
    const [isNavigationChecked, setNavigationChecked] = useState(false);
    const [isSlideChecked, setSlideChecked] = useState(false);
    const [isVoiceoverChecked, setVoiceoverChecked] = useState(false);
    function toggleNavigationChecked() {
        setNavigationChecked(prevState => !prevState)
    }
    function toggleSlideChecked() {
        setSlideChecked(prevState => !prevState)
    }
    function toggleVoiceoverChecked() {
        setVoiceoverChecked(prevState => !prevState)
    }
    // ========================= Render Function =================================
    return (
        <div className="qui-ribbon-menu-settings-section">
        <div className="ribbon-menu-settings-section-child-container">
            <div className="qui-ribbon-menu-settings-section-child">
                <div className="qui-ribbon-menu-settings-section-right-content">
                    <IconLink
                        {...props}
                        key={2}
                        asSize={'tiny'}
                        withColor={{ backgroundColor: '#666666', hoverTextColor: '#666666' }}
                        withIcon={{ icon: `qui-ribbon-file-right-icons ${isNavigationChecked ? "far fa-check-square" : "far fa-square"}` }}
                        onClick={() => toggleNavigationChecked()} />
                    <div className="qui-ribbon-menu-label" onClick={() => toggleNavigationChecked()}>Enable Navigation</div>
                </div>
                <div className="qui-ribbon-menu-settings-section-right-content">
                    <IconLink
                        {...props}
                        key={3}
                        asSize={'tiny'}
                        withColor={{ backgroundColor: '#666666', hoverTextColor: '#666666' }}
                        withIcon={{ icon: `qui-ribbon-file-right-icons ${isSlideChecked ? "far fa-check-square" : "far fa-square"}` }}
                        onClick={() => toggleSlideChecked()} />
                    <div className="qui-ribbon-menu-label" onClick={() => toggleSlideChecked()}>Enable Slide List</div>
                </div>
                <div className="qui-ribbon-menu-settings-section-right-content">
                    <IconLink
                        {...props}
                        key={4}
                        asSize={'tiny'}
                        withColor={{ backgroundColor: '#666666', hoverTextColor: '#666666' }}
                        withIcon={{ icon: `qui-ribbon-file-right-icons ${isVoiceoverChecked ? "far fa-check-square" : "far fa-square"}` }}
                        onClick={() => toggleVoiceoverChecked()} />
                    <div className="qui-ribbon-menu-label" onClick={() => toggleVoiceoverChecked()}>Enable Voiceovers</div>
                </div>
            </div>
        </div>
        <div className="qui-ribbon-menu-label-file">Settings</div>
    </div>

    )
}