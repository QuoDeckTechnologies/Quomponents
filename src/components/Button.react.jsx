import React from "react";
import PropTypes from "prop-types";
import IButton from "@mui/material/Button";

export default function Button({
    label,
    primary,
    secondary,
    variant,
    size,
    backgroundColor,
    textColor,
    onClick,
}) {
    return (
        <IButton
            primary={primary}
            secondary={secondary}
            variant={variant}
            size={size}
            onClick={onClick}
            style={{ backgroundColor: backgroundColor, color: textColor }}
        >
            {label}
        </IButton>
    );
}

Button.propTypes = {
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    variant: PropTypes.string,
    size: PropTypes.string,
    label: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    primary: true,
    secondary: false,
    variant: "contained",
    size: "medium",
    backgroundColor: null,
    textColor: null,
    onClick: undefined,
};
