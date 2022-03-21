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
    )
}