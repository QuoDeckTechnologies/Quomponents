import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import "./FlipConfirm.scss";

FlipConfirm.propTypes = {
    label: PropTypes.string.isRequired,
    confirmMsg: PropTypes.string,
    confirmYes: PropTypes.string,
    confirmNo: PropTypes.string,
    backgroundColor: PropTypes.string,
    iconBtn: PropTypes.bool,
    onClick: PropTypes.func,
};

FlipConfirm.defaultProps = {
    label: "Delete",
    variant: "contained",
    confirmMsg: "Are you sure you want to do that?",
    confirmYes: "Yes",
    confirmNo: "No",
    backgroundColor: null,
    iconBtn: false,
    onClick: null,
};

export default function FlipConfirm(props) {
    const [mode, setMode] = useState(false);
    const buttonRef = useRef(null);

    // Click Handlers
    // ----------------------
    function frontClick(event) {
        var mx = event.clientX - buttonRef.current.offsetLeft,
            my = event.clientY - buttonRef.current.offsetTop;

        var w = buttonRef.current.offsetWidth,
            h = buttonRef.current.offsetHeight;

        var directions = [
            { id: "top", x: w / 2, y: 0 },
            { id: "right", x: w, y: h / 2 },
            { id: "bottom", x: w / 2, y: h },
            { id: "left", x: 0, y: h / 2 },
        ];

        directions.sort(function (a, b) {
            return distance(mx, my, a.x, a.y) - distance(mx, my, b.x, b.y);
        });

        buttonRef.current.setAttribute("data-direction", directions.shift().id);
        setMode(true);
    }

    function yesClick() {
        setMode(false);
        props.onClick();
    }
    function noClick() {
        setMode(false);
    }

    // Style Handlers
    // ----------------------
    const textColor =
        props.backgroundColor &&
        (fixTextColor(props.backgroundColor) ? "#000" : "#fff");

    const outlineColor =
        props.backgroundColor &&
        (fixTextColor(props.backgroundColor) ? "#000" : props.backgroundColor);

    const styles = {
        btnContainer: {
            width: "280px",
            margin: "0 auto",
        },
        btnFront: {
            backgroundColor: props.backgroundColor,
            color: textColor,
        },
        btnOutline: {
            border: props.backgroundColor && `1px solid ${outlineColor}`,
            color: props.backgroundColor && outlineColor,
        },
        btnBack: {
            display: mode ? "block" : "none",
        },
    };

    return (
        <div style={styles.btnContainer}>
            <div className={`fc-btn ${mode ? "is-open" : ""}`} ref={buttonRef}>
                <div className="fc-btn-back" style={styles.btnBack}>
                    <p>{props.confirmMsg}</p>
                    <Button
                        size="small"
                        variant="contained"
                        className="fc-yes"
                        style={styles.btnFront}
                        onClick={yesClick}
                    >
                        {props.confirmYes}
                    </Button>
                    <Button
                        size="small"
                        variant="outlined"
                        className="fc-no"
                        style={styles.btnOutline}
                        onClick={noClick}
                    >
                        {props.confirmNo}
                    </Button>
                </div>
                {props.iconBtn && (
                    <IconButton
                        {...props}
                        aria-label="delete"
                        className="fc-btn-front"
                        onClick={frontClick}
                        style={styles.btnFront}
                    >
                    </IconButton>
                )}
                {!props.iconBtn && (
                    <Button
                        {...props}
                        className="fc-btn-front"
                        onClick={frontClick}
                        style={styles.btnFront}
                    >
                        {props.label}
                    </Button>
                )}
            </div>
        </div>
    );

    // Utility Functions
    // ----------------------

    function distance(x1, y1, x2, y2) {
        var dx = x1 - x2;
        var dy = y1 - y2;
        return Math.sqrt(dx * dx + dy * dy);
    }

    function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
        };
    }

    function fixTextColor(srcColor) {
        let color = hexToRgb(srcColor);
        return color.r * 0.299 + color.g * 0.587 + color.b * 0.114 > 186;
    }
}
