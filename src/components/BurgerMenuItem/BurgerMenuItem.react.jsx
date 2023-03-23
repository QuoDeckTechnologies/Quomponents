import React, { useState } from "react";
import { Icon } from "semantic-ui-react";

export default function BurgerMenuItem(props) {
    let menuItemStyle = {
        display: "block",
        background: "#efefef",
        padding: "5px 10px",
        fontSize: "0.9em",
        border: "1px solid #cccccc",
        color: "#000000",
        cursor: "pointer",
        pointerEvents: "auto",
        opacity: 1,
    };
    return (
        <div
            style={menuItemStyle}
            onClick={() => {
                props.setActivePanel(props.link)
                props.onClose()
            }}
        >
            <Icon name={"bullseye"}
                style={{ marginRight: "15px" }}
            />
            {props.name}
        </div>
    );

}