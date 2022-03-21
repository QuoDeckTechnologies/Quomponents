import React from "react";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../../common/stylesheets/common.css";
import "../../RibbonMenu.scss";
import "../RibbonToolMenu.scss";
import "../../../../common/stylesheets/overrule.scss";

import IconLink from "../../../Buttons/IconLink/IconLink.react";



export default function QuestionBankSection(props) {

    // ========================= Render Function =================================
    return (
        <div className="question-bank-section">
            <IconLink
                {...props}
                key={1}
                asSize={"small"}
                withColor={{ backgroundColor: '#666666', hoverTextColor: '#666666' }}
                withIcon={{ icon: 'fab fa-stack-exchange' }} />
            <div className="ribbon-label">Question Bank</div>
        </div>

    )
}