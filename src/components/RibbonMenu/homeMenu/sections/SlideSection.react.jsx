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
        <div className="slide-section">
            <div className="slide-section-child-container">
                <div className="slide-section-child upload">
                    <IconLink
                        {...props}
                        asSize={'tiny'}
                        withColor={{ backgroundColor: '#666666', hoverTextColor: '#666666' }}
                        withIcon={{ icon: 'fas fa-plus' }} />
                    <div className="ribbon-label">New Slide</div>
                </div>
                <div className="child-vertical-line"></div>
                <div className="slide-section-child">
                    <div className="slide-section-right-content">
                        <IconLink
                            {...props}
                            asSize={'tiny'}
                            withColor={{ backgroundColor: '#666666', hoverTextColor: '#666666' }}
                            withIcon={{ icon: 'far fa-copy' }} />
                        <div className="slide-label">Duplicate Slide</div>
                    </div>
                    <div className="slide-section-right-content">
                        <IconLink
                            {...props}
                            asSize={'tiny'}
                            withColor={{ backgroundColor: '#666666', hoverTextColor: '#666666' }}
                            withIcon={{ icon: 'fas fa-trash' }} />
                        <div className="slide-label">Delete Slide</div>
                    </div>
                </div>
            </div>
            <div className="label-file">Slide</div>
        </div>
    );
}