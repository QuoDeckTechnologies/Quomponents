import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import Button from "./Button.react";
import "./stylesheets/FlipConfirm.scss";

FlipConfirm.propTypes = {
    label: PropTypes.string.isRequired,
    width: PropTypes.number,
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    variant: PropTypes.string,
    onClick: PropTypes.func,
};

FlipConfirm.defaultProps = {
    width: null,
    backgroundColor: null,
    textColor: null,
    variant: "normal",
    onClick: undefined,
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
    const styles = {
        btnContainer: {},
        btnFront: {
            backgroundColor: props.backgroundColor,
            color: props.textColor,
        },
        btnBack: {
            display: mode ? "block" : "none",
        },
    };

    return (
        <div
            className={`fc-btn ${mode ? "is-open" : ""}`}
            ref={buttonRef}
            style={styles.btnContainer}
        >
            <div className="fc-btn-back" style={styles.btnBack}>
                <p>Are you sure you want to do that?</p>
                <Button
                    label="Yes"
                    backgroundColor="red"
                    textColor="white"
                    variant="contained"
                    className="fc-yes"
                    onClick={yesClick}
                />
                <Button
                    label="No"
                    variant="contained"
                    className="fc-no"
                    onClick={noClick}
                />
            </div>
            <Button
                label={props.label}
                variant="contained"
                className="fc-btn-front"
                onClick={frontClick}
                style={styles.btnFront}
            />
        </div>
    );

    // Utility Functions
    // ----------------------

    function distance(x1, y1, x2, y2) {
        var dx = x1 - x2;
        var dy = y1 - y2;
        return Math.sqrt(dx * dx + dy * dy);
    }
}
