// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "./Button.scss";

Button.propTypes = {
    asVariant: PropTypes.oneOf(["default", "primary", "secondary"]),
    asSize: PropTypes.string,
    asPadded: PropTypes.string,
    asFloated: PropTypes.string,
    asAligned: PropTypes.string,
    withColor: PropTypes.object,
    withIcon: PropTypes.object,
    withAnimation: PropTypes.object,
    withTranslation: PropTypes.object,
    isHidden: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isFluid: PropTypes.bool,
    isPaged: PropTypes.bool,
    isLoading: PropTypes.bool,
    onButtonClick: PropTypes.func,
};

Button.defaultProps = {
    asVariant: "default",
    asSize: "tiny",
    asPadded: "fitted",
    asFloated: "inline",
    asAligned: "left",
    withColor: {
        backgroundColor: "red",
        accentColor: "",
        textColor: "",
        hoverBackgroundColor: "",
        hoverTextColor: "",
    },
    withIcon: { name: "fas fa-share", size: "1em" },
    withAnimation: { name: "rotate", duration: "0.7s", delay: "3s" },
    withTranslation: { lang: "", key: "", dictionary: "" },
    isHidden: false,
    isDisabled: false,
    isFluid: false,
    isPaged: false,
    isLoading: false,
};

export default function Button(props) {
    const styles = {
        btnContainer: {
            position: props.isPaged ? "" : "relative",
            float: props.asFloated,
            width: props.isFluid ? "100%" : "auto",
        },
        btnPaged: {
            width: props.isFluid ? "100%" : "auto",
            position: props.isFluid && !props.isPaged ? "relative" : "absolute",
            top: "50%",
            left: !props.isFluid ? "50%" : "0",
            transform: props.isFluid
                ? "translate(0%, 0%)"
                : "translate(-50%, -50%)",
        },
    };

    return (
        <div style={styles.btnContainer}>
            <div style={props.isPaged ? styles.btnPaged : {}}>
                {!props.isHidden && (
                    <button
                        title={
                            props.withLabel.format === "popover"
                                ? props.withLabel.content
                                : ""
                        }
                        className={[
                            props.type,
                            props.asSize,
                            props.asVariant,
                            props.withColor,
                            props.isFluid ? "fluid_button" : "",
                        ].join(" ")}
                        disabled={props.isDisabled}
                        loading={props.isLoading ? "" : ""}
                        onClick={
                            props.isLoading ? () => {} : props.onButtonClick
                        }
                        style={{
                            backgroundColor:
                                props.withColor &&
                                props.withColor.backgroundColor,
                            color: props.withColor && props.withColor.textColor,
                            textAlign: props.asAligned,
                        }}
                    >
                        {props.type === "default" &&
                        props.withLabel.format === "label"
                            ? props.withLabel.content + " "
                            : ""}
                        {props.isLoading && (
                            <i class="fa fa-spinner fa-spin"></i>
                        )}
                        {!props.isLoading &&
                            props.withIcon &&
                            props.withIcon.name && (
                                <i
                                    className={props.withIcon.name}
                                    style={{ fontSize: props.withIcon.size }}
                                ></i>
                            )}
                    </button>
                )}
            </div>
        </div>
    );
}
