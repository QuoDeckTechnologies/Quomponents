import React, {useState} from "react";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./RibbonMenu.scss";
import "../../common/stylesheets/overrule.scss";

import IconLink from "../Buttons/IconLink/IconLink.react"

export default function RibbonHomeMenu(props) {
    const [isBackChecked, setBakChecked] = useState(false);
    const [isNextChecked, setNextChecked] = useState(false);

    function toggleBackChecked() {
        setBakChecked(prevState => !prevState)
    }
    function toggleNextChecked() {
        setNextChecked(prevState => !prevState)
    }
    // ========================= Render Function =================================

    return (
        <div className={`ribbon-menu-home-container`}>
            <div className="exit-section">
                <IconLink
                    {...props}
                    tilt={false}
                    asSize={"small"}
                    withColor={{ backgroundColor: '#666666', hoverTextColor: '#666666' }}
                    withIcon={{ icon: 'fa fa-sign-out-alt' }} />
                <div className="ribbon-label">Save & Exit</div>
            </div>
            <div className="parent-vertical-line"></div>
            <div className="file-section">
                <div className="file-section-child-container">
                    <div className="file-section-child">
                        <IconLink
                            {...props}
                            asSize={'tiny'}
                            withColor={{ backgroundColor: '#666666', hoverTextColor: '#666666' }}
                            withIcon={{ icon: 'fas fa-file-upload' }} />
                        <div className="ribbon-label">Upload</div>
                    </div>
                    <div className="child-vertical-line"></div>
                    <div className="file-section-child">
                        <IconLink
                            {...props}
                            asSize={'tiny'}
                            withColor={{ backgroundColor: '#666666', hoverTextColor: '#666666' }}
                            withIcon={{ icon: 'fas fa-download' }} />
                        <div className="ribbon-label">Download</div>
                    </div>
                    <div className="child-vertical-line"></div>
                    <div className="file-section-child">
                        <IconLink
                            {...props}
                            asSize={'tiny'}
                            withColor={{ backgroundColor: '#666666', hoverTextColor: '#666666' }}
                            withIcon={{ icon: 'far fa-file-alt' }} />
                        <div className="ribbon-label">Save</div>
                    </div>
                </div>
                <div className="label-file">File</div>
            </div>
            <div className="parent-vertical-line"></div>
            <div className="slide-section">
                <div className="slide-section-child-container">
                    <div className="slide-section-child upload">
                        <IconLink
                            {...props}
                            asSize={'tiny'}
                            withColor={{ backgroundColor: '#666666', hoverTextColor: '#666666' }}
                            withIcon={{ icon: 'fas fa-plus' }} />
                        <div className="ribbon-label">New Slide</div>
                    </div>
                    <div className="child-vertical-line"></div>
                    <div className="slide-section-child">
                        <div className="slide-section-right-content">
                            <IconLink
                                {...props}
                                asSize={'tiny'}
                                withColor={{ backgroundColor: '#666666', hoverTextColor: '#666666' }}
                                withIcon={{ icon: 'far fa-copy' }} />
                            <div className="slide-label">Duplicate Slide</div>
                        </div>
                        <div className="slide-section-right-content">
                            <IconLink
                                {...props}
                                asSize={'tiny'}
                                withColor={{ backgroundColor: '#666666', hoverTextColor: '#666666' }}
                                withIcon={{ icon: 'fas fa-trash' }} />
                            <div className="slide-label">Delete Slide</div>
                        </div>
                    </div>
                </div>
                <div className="label-file">Slide</div>
            </div>
            <div className="parent-vertical-line"></div>
            <div className="settings-section">
                <div className="settings-section-child-container">
                    <div className="vo-section-child">
                        <div className="vo-section-right-content">
                        <IconLink
                                {...props}
                                asSize={'tiny'}
                                withColor={{ backgroundColor: '#666666', hoverTextColor: '#666666' }}
                                withIcon={{ icon:`file-right-icons ${isBackChecked ? "far fa-check-square" : "far fa-square"}`  }}
                                onClick={() => toggleBackChecked()}/>
                            <div className="ribbon-label" onClick={() => toggleBackChecked()}>Enable Back Arrow</div>
                        </div>
                        <div className="vo-section-right-content">
                        <IconLink
                                {...props}
                                asSize={'tiny'}
                                withColor={{ backgroundColor: '#666666', hoverTextColor: '#666666' }}
                                withIcon={{ icon:`file-right-icons ${isNextChecked ? "far fa-check-square" : "far fa-square"}`  }}
                                onClick={() => toggleNextChecked()}/>
                            <div className="ribbon-label" onClick={() => toggleNextChecked()}>Enable Next Arrow</div>
                        </div>
                    </div>
                </div>
                <div className="label-file">Settings</div>
            </div>
            <div className="parent-vertical-line"></div>
            <div className="view-section">
                <div className="view-section-child-container">
                    <div className="view-section-child">
                        <IconLink
                            {...props}
                            asSize={'tiny'}
                            withColor={{ backgroundColor: '#666666', hoverTextColor: '#666666' }}
                            withIcon={{ icon: 'fas fa-filter' }} />
                        <div className="ribbon-label">Sorter</div>
                    </div>
                    <div className="child-vertical-line"></div>
                    <div className="view-section-child">
                        <IconLink
                            {...props}
                            asSize={'tiny'}
                            withColor={{ backgroundColor: '#666666', hoverTextColor: '#666666' }}
                            withIcon={{ icon: 'fas fa-mobile-alt' }} />
                        <div className="ribbon-label">Mobile</div>
                    </div>
                    <div className="child-vertical-line"></div>
                    <div className="view-section-child">
                        <IconLink
                            {...props}
                            asSize={'tiny'}
                            withColor={{ backgroundColor: '#666666', hoverTextColor: '#666666' }}
                            withIcon={{ icon: 'fas fa-laptop' }} />
                        <div className="ribbon-label">Desktop</div>
                    </div>
                    <div className="child-vertical-line"></div>
                    <div className="view-section-child">
                        <IconLink
                            {...props}
                            asSize={'tiny'}
                            withColor={{ backgroundColor: '#666666', hoverTextColor: '#666666' }}
                            withIcon={{ icon: 'fas fa-comments' }} />
                        <div className="ribbon-label">Comments</div>
                    </div>
                </div>
                <div className="label-file">View</div>
            </div>
        </div>
    );
}