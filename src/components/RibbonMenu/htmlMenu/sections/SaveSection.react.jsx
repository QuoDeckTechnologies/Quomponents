import React from "react";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../../common/stylesheets/common.css";
import "../../RibbonMenu.scss";
import "../RibbonHtmlMenu.scss";
import "../../../../common/stylesheets/overrule.scss";

import IconLink from "../../../Buttons/IconLink/IconLink.react";



export default function SaveSection(props) {

    // ========================= Render Function =================================

    return (
        <div className="save-section">
            <div className="save-section-child-container">
                <div className="save-section-child">
                    <IconLink
                        onClick={() => { console.log("test") }}
                        className={`file-icons`}
                        {...props}
                        asSize={'tiny'}
                        withColor={{ backgroundColor: '#666666', hoverTextColor: '#666666' }}
                        withIcon={{ icon: 'fas fa-file-upload' }} />
                    <div className="ribbon-label">Upload</div>
                </div>
                <div className="child-vertical-line"></div>
                <div className="save-section-child">
                    <IconLink
                        onClick={() => { console.log("test") }}
                        className={`file-icons`}
                        {...props}
                        asSize={'tiny'}
                        withColor={{ backgroundColor: '#666666', hoverTextColor: '#666666' }}
                        withIcon={{ icon: 'fas fa-download' }} />
                    <div className="ribbon-label">Download</div>
                </div>
                <div className="child-vertical-line"></div>
                <div className="save-section-child">
                    <IconLink
                        onClick={() => { console.log("test") }}
                        {...props}
                        asSize={'tiny'}
                        withColor={{ backgroundColor: '#666666', hoverTextColor: '#666666' }}
                        withIcon={{ icon: 'far fa-file-alt' }} />
                    <div className="ribbon-label">Save</div>
                </div>
            </div>
            <div className="label-file">File</div>
        </div>
    );
}