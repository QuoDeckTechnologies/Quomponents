import React from "react";

import IconLink from "../Buttons/IconLink/IconLink.react";

export default function RibbonToolMenu(props) {

    // ========================= Render Function =================================

    return (
        <div className={`ribbon-menu-tools-container`}>
            <div className="question-bank-section">
                <IconLink
                    {...props}
                    tilt={false}
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
                                asSize={'tiny'}
                                withColor={{ backgroundColor: '#666666', hoverTextColor: '#666666' }}
                                withIcon={{ icon: 'fas fa-check-square file-right-icons' }} />
                            <div className="ribbon-label">Enable Navigation</div>
                        </div>
                        <div className="settings-section-right-content">
                            <IconLink
                                {...props}
                                asSize={'tiny'}
                                withColor={{ backgroundColor: '#666666', hoverTextColor: '#666666' }}
                                withIcon={{ icon: 'fas fa-check-square file-right-icons' }} />
                            <div className="ribbon-label">Enable Slide List</div>
                        </div>
                        <div className="settings-section-right-content">
                            <IconLink
                                {...props}
                                asSize={'tiny'}
                                withColor={{ backgroundColor: '#666666', hoverTextColor: '#666666' }}
                                withIcon={{ icon: 'fas fa-check-square file-right-icons' }} />
                            <div className="ribbon-label">Enable Voiceovers</div>
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
                                asSize={'tiny'}
                                withColor={{ backgroundColor: '#666666', hoverTextColor: '#666666' }}
                                withIcon={{ icon: 'fas fa-copy' }} />
                            <div className="tool-label">Copy Slides to Script</div>
                        </div>
                        <div className="vo-section-right-content">
                            <IconLink
                                {...props}
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
                    {...props}
                    asSize={"small"}
                    withColor={{ backgroundColor: '#666666', hoverTextColor: '#666666' }}
                    withIcon={{ icon: 'fas fa-chart-area' }} />
                <div className="ribbon-label">Analysis</div>
            </div>
        </div>
    );
}