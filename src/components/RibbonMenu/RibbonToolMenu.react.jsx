import React from "react";
import upload from "../../assets/icons8_upload_to_ftp_64px.png";
import download from "../../assets/icons8_downloads_32px.png";
import copy_to_script from "../../assets/icons8_copy_32px.png"
import question_bank from "../../assets/icons8_database_restore_64px.png";
import analysis from "../../assets/icons8_test_tube_64px.png";
import checked from "../../assets/icons8_checked_checkbox_32px.png";
import unchecked from "../../assets/icons8_unchecked_checkbox_32px.png"

export default function RibbonToolMenu(props) {

    // ========================= Render Function =================================

    return (
        <div className={`ribbon-menu-tools-container`}>
            <div className="question-bank-section">
                <img className={"question-bank"} alt={"question bank icon"} src={question_bank} />
                <div className="label">Question Bank</div>
            </div>
            <div className="parent-vertical-line"></div>
            <div className="settings-section">
                <div className="settings-section-child-container">
                <div className="vo-section-child">
                        <div className="vo-section-right-content">
                            <img className={"file-right-icons"} alt={"exit"} src={unchecked} />
                            <div className="label">Enable Navigation</div>
                        </div>
                        <div className="vo-section-right-content">
                            <img className={"file-right-icons"} alt={"exit"} src={checked} />
                            <div className="label">Enable Slide List</div>
                        </div>
                        <div className="vo-section-right-content">
                            <img className={"file-right-icons"} alt={"exit"} src={checked} />
                            <div className="label">Enable Voiceovers</div>
                        </div>
                    </div>
                </div>

                <div className="label-file">Settings</div>
            </div>
            <div className="parent-vertical-line"></div>
            <div className="vo-section">
                <div className="vo-section-child-container">
                    <div className="vo-section-child">
                        <img className={"file-icons"} alt={"exit"} src={upload} />
                        <div className="label">Upload</div>
                    </div>
                    <div className="child-vertical-line"></div>
                    <div className="vo-section-child">
                        <div className="vo-section-right-content">
                            <img className={"file-right-icons"} alt={"exit"} src={copy_to_script} />
                            <div className="label">Copy Slides to Script</div>
                        </div>
                        <div className="vo-section-right-content">

                            <img className={"file-right-icons"} alt={"exit"} src={download} />
                            <div className="label">Download Script</div>
                        </div>

                    </div>
                </div>

                <div className="label-file">Voiceovers</div>
            </div>
            <div className="parent-vertical-line"></div>
            <div className="question-bank-section">
                <img className={"question-bank"} alt={"question bank icon"} src={analysis} />
                <div className="label">Analysis</div>
            </div>
        </div>
    );
}