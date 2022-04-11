import React from "react";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../../common/stylesheets/common.css";
import "../../RibbonMenu.scss";
import "../RibbonHomeMenu.scss";
import "../../../../common/stylesheets/overrule.scss";

import IconLink from "../../../Buttons/IconLink/IconLink.react";

export default function ViewSection(props) {

    // ========================= Render Function =================================

    return (

        <div className="ribbon-menu-view-section">
        <div className="ribbon-menu-view-section-child-container">
            <div className="ribbon-menu-view-section-child">
                <IconLink
                    {...props}
                    asSize={'tiny'}
                    withColor={{ backgroundColor: '#666666', hoverTextColor: '#666666' }}
                    withIcon={{ icon: 'fas fa-filter' }} />
                <div className="qui-ribbon-menu-label">Sorter</div>
            </div>
            <div className="qui-ribbon-menu-child-vertical-line"></div>
            <div className="ribbon-menu-view-section-child">
                <IconLink
                    {...props}
                    asSize={'tiny'}
                    withColor={{ backgroundColor: '#666666', hoverTextColor: '#666666' }}
                    withIcon={{ icon: 'fas fa-mobile-alt' }} />
                <div className="qui-ribbon-menu-label">Mobile</div>
            </div>
            <div className="qui-ribbon-menu-child-vertical-line"></div>
            <div className="ribbon-menu-view-section-child">
                <IconLink
                    {...props}
                    asSize={'tiny'}
                    withColor={{ backgroundColor: '#666666', hoverTextColor: '#666666' }}
                    withIcon={{ icon: 'fas fa-laptop' }} />
                <div className="qui-ribbon-menu-label">Desktop</div>
            </div>
            <div className="qui-ribbon-menu-child-vertical-line"></div>
            <div className="ribbon-menu-view-section-child">
                <IconLink
                    {...props}
                    asSize={'tiny'}
                    withColor={{ backgroundColor: '#666666', hoverTextColor: '#666666' }}
                    withIcon={{ icon: 'fas fa-comments' }} />
                <div className="qui-ribbon-menu-label">Comments</div>
            </div>
        </div>
        <div className="qui-ribbon-menu-label-file">View</div>
    </div>
    )
}