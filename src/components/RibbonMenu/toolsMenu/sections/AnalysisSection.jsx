import React from "react";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../../common/stylesheets/common.css";
import "../../RibbonMenu.scss";
import "../RibbonToolMenu.scss";
import "../../../../common/stylesheets/overrule.scss";

import IconLink from "../../../Buttons/IconLink/IconLink.react";



export default function AnalysisSection(props) {

    return (
        <div className="analytics-bank-section">
            <IconLink
                key={8}
                {...props}
                asSize={"small"}
                withColor={{ backgroundColor: '#666666', hoverTextColor: '#666666' }}
                withIcon={{ icon: 'fas fa-chart-area' }} />
            <div className="ribbon-label">Analysis</div>
        </div>
    )
}