import React from "react";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../../common/stylesheets/common.css";
import "../../RibbonMenu.scss";
import "../RibbonHtmlMenu.scss";
import "../../../../common/stylesheets/overrule.scss";

import IconLink from "../../../Buttons/IconLink/IconLink.react";

function saveExit(){
 return alert("some value")
}
export default function SaveExitSection(props) {

    return (
        <div className="exit-section">
            <IconLink
                onClick={saveExit}
                asSize={"small"}
                withColor={{ backgroundColor: '#666666', hoverTextColor: '#666666' }}
                withIcon={{ icon: 'fa fa-sign-out-alt' }} />
            <div className="ribbon-label"  onClick={saveExit}>Save & Exit</div>
        </div>
    )

}