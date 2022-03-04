import React from "react";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./RibbonMenu.scss";
import "../../common/stylesheets/overrule.scss";

import upload from "../../assets/icons8_upload_to_ftp_64px.png";
import download from "../../assets/icons8_downloads_32px.png";
import save from "../../assets/icons8_save_32px.png";
import save_and_exit from "../../assets/icons8_logout_rounded_left_64px.png";

export default function RibbonHtmlMenu(props) {

    // ========================= Render Function =================================

    return (
        <div className={`ribbon-menu-html-container`}>
        <div className="exit-section">
            <img className={"save-exit"} alt={"exit"} src={save_and_exit} />
            <div className="label">Save & Exit</div>
        </div>
        <div className="parent-vertical-line"></div>
        <div className="save-section">
            <div className="save-section-child-container">
                <div className="save-section-child">
                    <img className={"file-icons"} alt={"exit"} src={upload} />
                    <div className="label">Upload</div>
                </div>
                <div className="child-vertical-line"></div>
                <div className="save-section-child">
                    <img className={"file-icons"} alt={"exit"} src={download} />
                    <div className="label">Download</div>
                </div>
                <div className="child-vertical-line"></div>
                <div className="save-section-child">
                    <img className={"file-icons"} alt={"exit"} src={save} />
                    <div className="label">Save</div>
                </div>
            </div>
            <div className="label-file">File</div>
        </div>
    </div>
    );
}