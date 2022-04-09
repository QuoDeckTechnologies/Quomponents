import React from "react";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../../common/stylesheets/common.css";
import "../../RibbonMenu.scss";
import "../RibbonHomeMenu.scss";
import "../../../../common/stylesheets/overrule.scss";

import IconLink from "../../../Buttons/IconLink/IconLink.react";

export default function SlideSection(props) {

    // ========================= Render Function =================================

    return (
        <div className="qui-ribbon-menu-slide-section">
            <div className="qui-ribbon-menu-slide-section-child-container">
                <div className="qui-ribbon-menu-slide-section-child upload">
                    <IconLink
                        {...props}
                        asSize={'tiny'}
                        withColor={{ backgroundColor: '#666666', hoverTextColor: '#666666' }}
                        withIcon={{ icon: 'fas fa-plus' }} />
                    <div className="qui-ribbon-menu-label">New Slide</div>
                </div>
                <div className="qui-ribbon-menu-child-vertical-line"></div>
                <div className="qui-ribbon-menu-slide-section-child">
                    <div className="qui-ribbon-menu-slide-section-right-content">
                        <IconLink
                            {...props}
                            asSize={'tiny'}
                            withColor={{ backgroundColor: '#666666', hoverTextColor: '#666666' }}
                            withIcon={{ icon: 'far fa-copy' }} />
                        <div className="qui-ribbon-menu-slide-label">Duplicate Slide</div>
                    </div>
                    <div className="qui-ribbon-menu-slide-section-right-content">
                        <IconLink
                            {...props}
                            asSize={'tiny'}
                            withColor={{ backgroundColor: '#666666', hoverTextColor: '#666666' }}
                            withIcon={{ icon: 'fas fa-trash' }} />
                        <div className="qui-ribbon-menu-slide-label">Delete Slide</div>
                    </div>
                </div>
            </div>
            <div className="qui-ribbon-menu-label-file">Slide</div>
        </div>
    );
}