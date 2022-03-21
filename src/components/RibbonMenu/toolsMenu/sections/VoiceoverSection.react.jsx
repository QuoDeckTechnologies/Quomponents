import React from "react";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../../common/stylesheets/common.css";
import "../../RibbonMenu.scss";
import "../RibbonToolMenu.scss";
import "../../../../common/stylesheets/overrule.scss";

import IconLink from "../../../Buttons/IconLink/IconLink.react";



export default function VoiceoverSection(props) {

    return (
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

    )
}