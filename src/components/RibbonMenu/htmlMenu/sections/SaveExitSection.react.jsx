import React from "react";
import PropTypes from "prop-types";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../../common/stylesheets/common.css";
import "../../RibbonMenu.scss";
import "../RibbonHtmlMenu.scss";
import "../../../../common/stylesheets/overrule.scss";

import IconLink from "../../../Buttons/IconLink/IconLink.react";

SaveExitSection.propTypes = {
    saveExit: PropTypes.func
}

SaveExitSection.defaultProps = {
    saveExit: (value) => { alert(value) }
}

export default function SaveExitSection(props) {
    const handleSave = () => {
       return props.saveExit("parameter")
    }
    return (
        <div className="qui-ribbon-menu-exit-section">
            <IconLink
                onClick={handleSave}
                asSize={"small"}
                withColor={{ backgroundColor: '#666666', hoverTextColor: '#666666' }}
                withIcon={{ icon: 'fa fa-sign-out-alt' }} />
            <div className="qui-ribbon-menu-label" onClick={handleSave}>Save & Exit</div>
        </div>
    )

}