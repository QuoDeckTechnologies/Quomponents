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
        <div className="qui-ribbon-menu-save-section">
            <div className="qui-ribbon-menu-save-section-child-container">
                <div className="qui-ribbon-menu-save-section-child">
                    <IconLink
                        onClick={() => { console.log("test") }}
                        className={`file-icons`}
                        {...props}
                        asSize={'tiny'}
                        withColor={{ backgroundColor: '#666666', hoverTextColor: '#666666' }}
                        withIcon={{ icon: 'fas fa-file-upload' }} />
                    <div className="qui-ribbon-menu-label">Upload</div>
                </div>
                <div className="qui-ribbon-menu-child-vertical-line"></div>
                <div className="qui-ribbon-menu-save-section-child">
                    <IconLink
                        onClick={() => { console.log("test") }}
                        className={`file-icons`}
                        {...props}
                        asSize={'tiny'}
                        withColor={{ backgroundColor: '#666666', hoverTextColor: '#666666' }}
                        withIcon={{ icon: 'fas fa-download' }} />
                    <div className="qui-ribbon-menu-label">Download</div>
                </div>
                <div className="qui-ribbon-menu-child-vertical-line"></div>
                <div className="qui-ribbon-menu-save-section-child">
                    <IconLink
                        onClick={() => { console.log("test") }}
                        {...props}
                        asSize={'tiny'}
                        withColor={{ backgroundColor: '#666666', hoverTextColor: '#666666' }}
                        withIcon={{ icon: 'far fa-file-alt' }} />
                    <div className="qui-ribbon-menu-label">Save</div>
                </div>
            </div>
            <div className="qui-ribbon-menu-label-file">File</div>
        </div>
    );
}