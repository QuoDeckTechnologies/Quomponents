import React, {useState} from "react";

import IconLink from "../Buttons/IconLink/IconLink.react";

export default function RibbonToolMenu(props) {
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
        <div className={`ribbon-menu-tools-container`}>
            <div className="question-bank-section">
                <IconLink
                    {...props}
                    key={1}
                    asSize={"small"}
                    withColor={{ backgroundColor: '#666666', hoverTextColor: '#666666' }}
                    withIcon={{ icon: 'fab fa-stack-exchange' }} />
                <div className="ribbon-label">Question Bank</div>
            </div>
            <div className="parent-vertical-line"></div>
            <div className="settings-section">
                <div className="settings-section-child-container">
                    <div className="settings-section-child">
                        <div className="settings-section-right-content">
                            <IconLink
                                {...props}
                                key={2}
                                asSize={'tiny'}
                                withColor={{ backgroundColor: '#666666', hoverTextColor: '#666666' }}
                                withIcon={{ icon:`file-right-icons ${isNavigationChecked ? "far fa-check-square" : "far fa-square"}`  }}
                                onClick={() => toggleNavigationChecked()}/>
                            <div className="ribbon-label" onClick={() => toggleNavigationChecked()}>Enable Navigation</div>
                        </div>
                        <div className="settings-section-right-content">
                            <IconLink
                                {...props}
                                key={3}
                                asSize={'tiny'}
                                withColor={{ backgroundColor: '#666666', hoverTextColor: '#666666' }}
                                withIcon={{ icon:`file-right-icons ${isSlideChecked ? "far fa-check-square" : "far fa-square"}`  }}
                                onClick={() => toggleSlideChecked()}/>
                            <div className="ribbon-label" onClick={() => toggleSlideChecked()}>Enable Slide List</div>
                        </div>
                        <div className="settings-section-right-content">
                            <IconLink
                                {...props}
                                key={4}
                                asSize={'tiny'}
                                withColor={{ backgroundColor: '#666666', hoverTextColor: '#666666' }}
                                withIcon={{ icon:`file-right-icons ${isVoiceoverChecked ? "far fa-check-square" : "far fa-square"}`  }}
                                onClick={() => toggleVoiceoverChecked()}/>
                            <div className="ribbon-label" onClick={() => toggleVoiceoverChecked()}>Enable Voiceovers</div>
                        </div>
                    </div>
                </div>
                <div className="label-file">Settings</div>
            </div>
            <div className="parent-vertical-line"></div>
            <div className="vo-section">
                <div className="vo-section-child-container">
                    <div className="vo-section-child upload">
                        <IconLink
                            {...props}
                            key={5}
                            asSize={'tiny'}
                            withColor={{ backgroundColor: '#666666', hoverTextColor: '#666666' }}
                            withIcon={{ icon: 'fas fa-file-upload' }} />
                        <div className="ribbon-label">Upload</div>
                    </div>
                    <div className="child-vertical-line"></div>
                    <div className="vo-section-child">
                        <div className="vo-section-right-content">
                            <IconLink
                                {...props}
                                key={6}
                                asSize={'tiny'}
                                withColor={{ backgroundColor: '#666666', hoverTextColor: '#666666' }}
                                withIcon={{ icon: 'far fa-copy' }} />
                            <div className="tool-label">Copy Slides to Script</div>
                        </div>
                        <div className="vo-section-right-content">
                            <IconLink
                                {...props}
                                key={7}
                                asSize={'tiny'}
                                withColor={{ backgroundColor: '#666666', hoverTextColor: '#666666' }}
                                withIcon={{ icon: 'fas fa-download' }} />
                            <div className="tool-label">Download Script</div>
                        </div>
                    </div>
                </div>
                <div className="label-file">Voiceovers</div>
            </div>
            <div className="parent-vertical-line"></div>
            <div className="question-bank-section">
                <IconLink
                key={8}
                    {...props}
                    asSize={"small"}
                    withColor={{ backgroundColor: '#666666', hoverTextColor: '#666666' }}
                    withIcon={{ icon: 'fas fa-chart-area' }} />
                <div className="ribbon-label">Analysis</div>
            </div>
        </div>
    );
}