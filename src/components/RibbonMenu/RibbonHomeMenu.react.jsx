import React from "react";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./RibbonMenu.scss";
import "../../common/stylesheets/overrule.scss";

import upload from "../../assets/icons8_upload_to_ftp_64px.png";
import download from "../../assets/icons8_downloads_32px.png";
import save from "../../assets/icons8_save_32px.png";
import copy_to_script from "../../assets/icons8_copy_32px.png"
import save_and_exit from "../../assets/icons8_logout_rounded_left_64px.png";
import checked from "../../assets/icons8_checked_checkbox_32px.png";
import unchecked from "../../assets/icons8_unchecked_checkbox_32px.png";
import sort from "../../assets/icons8_Descending_Sorting_32px.png";
import mobile from "../../assets/icons8_mobile_32px_2.png";
import laptop from "../../assets/icons8_laptop_32px.png";
import message from "../../assets/icons8_message_preview_64px.png";
import new_copy from "../../assets/icons8_new_copy_32px.png"

export default function RibbonHomeMenu(props) {

    // ========================= Render Function =================================

    return (
        <div className={`ribbon-menu-home-container`}>
            <div className="exit-section">
                <img className={"save-exit"} alt={"exit"} src={save_and_exit} />
                <div className="label">Save & Exit</div>
            </div>
            <div className="parent-vertical-line"></div>
            <div className="file-section">
                <div className="file-section-child-container">
                    <div className="file-section-child">
                        <img className={"file-icons"} alt={"exit"} src={upload} />
                        <div className="label">Upload</div>
                    </div>
                    <div className="child-vertical-line"></div>
                    <div className="file-section-child">
                        <img className={"file-icons"} alt={"exit"} src={download} />
                        <div className="label">Download</div>
                    </div>
                    <div className="child-vertical-line"></div>
                    <div className="file-section-child">
                        <img className={"file-icons"} alt={"exit"} src={save} />
                        <div className="label">Save</div>
                    </div>
                </div>
                <div className="label-file">File</div>
            </div>
            <div className="parent-vertical-line"></div>
            <div className="vo-section">
                <div className="vo-section-child-container">
                    <div className="vo-section-child">
                        <img className={"file-icons"} alt={"exit"} src={new_copy} />
                        <div className="label">New Slide</div>
                    </div>
                    <div className="child-vertical-line"></div>
                    <div className="vo-section-child">
                        <div className="vo-section-right-content">
                            <img className={"file-right-icons"} alt={"exit"} src={copy_to_script} />
                            <div className="label">Duplicate Slide</div>
                        </div>
                        <div className="vo-section-right-content">

                            <img className={"file-right-icons"} alt={"exit"} src={download} />
                            <div className="label">Delete Slide</div>
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
                            <img className={"file-right-icons"} alt={"exit"} src={unchecked} />
                            <div className="label">Enable Back Arrow</div>
                        </div>
                        <div className="vo-section-right-content">
                            <img className={"file-right-icons"} alt={"exit"} src={checked} />
                            <div className="label">Enable Next Arrow</div>
                        </div>
                    </div>
                </div>

                <div className="label-file">Settings</div>
            </div>
            <div className="parent-vertical-line"></div>
            <div className="view-section">
                <div className="view-section-child-container">
                    <div className="view-section-child">
                        <img className={"file-icons"} alt={"exit"} src={sort} />
                        <div className="label">Sorter</div>
                    </div>
                    <div className="child-vertical-line"></div>
                    <div className="view-section-child">
                        <img className={"file-icons"} alt={"exit"} src={mobile} />
                        <div className="label">Mobile</div>
                    </div>
                    <div className="child-vertical-line"></div>
                    <div className="view-section-child">
                        <img className={"file-icons"} alt={"exit"} src={laptop} />
                        <div className="label">Desktop</div>
                    </div>
                    <div className="child-vertical-line"></div>
                    <div className="view-section-child">
                        <img className={"file-icons"} alt={"exit"} src={message} />
                        <div className="label">Comments</div>
                    </div>
                </div>
                <div className="label-file">View</div>
            </div>
        </div>
    );
}