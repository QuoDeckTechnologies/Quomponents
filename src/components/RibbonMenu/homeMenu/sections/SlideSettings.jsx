import React , { useState }from "react";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../../common/stylesheets/common.css";
import "../../RibbonMenu.scss";
import "../RibbonHomeMenu.scss";
import "../../../../common/stylesheets/overrule.scss";

import IconLink from "../../../Buttons/IconLink/IconLink.react";

export default function SlideSettings(props) {
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
<div className="qui-ribbon-menu-settings-section">
                <div className="ribbon-menu-settings-section-child-container">
                    <div className="qui-ribbon-menu-settings-section-child">
                        <div className="qui-ribbon-menu-settings-section-right-content">
                            <IconLink
                                {...props}
                                asSize={'tiny'}
                                withColor={{ backgroundColor: '#666666', hoverTextColor: '#666666' }}
                                withIcon={{ icon: `qui-ribbon-file-right-icons ${isBackChecked ? "far fa-check-square" : "far fa-square"}` }}
                                onClick={() => toggleBackChecked()} />
                            <div className="qui-ribbon-menu-label" onClick={() => toggleBackChecked()}>Enable Back Arrow</div>
                        </div>
                        <div className="qui-ribbon-menu-settings-section-right-content">
                            <IconLink
                                {...props}
                                asSize={'tiny'}
                                withColor={{ backgroundColor: '#666666', hoverTextColor: '#666666' }}
                                withIcon={{ icon: `qui-ribbon-file-right-icons ${isNextChecked ? "far fa-check-square" : "far fa-square"}` }}
                                onClick={() => toggleNextChecked()} />
                            <div className="qui-ribbon-menu-label" onClick={() => toggleNextChecked()}>Enable Next Arrow</div>
                        </div>
                    </div>
                </div>
                <div className="qui-ribbon-menu-label-file">Settings</div>
            </div>
    );
}