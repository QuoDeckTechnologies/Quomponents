import React from "react";
import PropTypes from "prop-types";
import {
    getQuommons,
} from "../../common/javascripts/helpers";
import "../../common/stylesheets/common.css";
import "./RewardBadge.scss";
import "../../common/stylesheets/overrule.scss";


RewardBadge.propTypes = {
    //=======================================
    // component specific props
    //=======================================
    image: PropTypes.string,
    //=======================================
    // Quommon props
    //=======================================
    /**
    Use to define standard component type
    */
    asVariant: PropTypes.oneOf([
        "primary",
        "secondary",
        "success",
        "warning",
        "error",
    ]),
    /**
    Use to add a heading label, a footer caption or a title popover to the component
    */
    withLabel: PropTypes.shape({
        format: PropTypes.oneOf(["label", "caption", "popover"]),
        content: PropTypes.string,
        textColor: PropTypes.string,
    }),
    /**
    Use to set Colors for accent line
    */
    withColor: PropTypes.shape({
        backgroundColor: PropTypes.string,
        textColor: PropTypes.string,
    }),
    /**
    Use to show/hide the component
    */
    isHidden: PropTypes.bool,
    /**
    Use to show/hide the component
    */
    isDisabled: PropTypes.bool,

    /**
    Reward Badge component must have the onClick function passed as props
    */
    onClick: PropTypes.func,
};

RewardBadge.defaultProps = {
    //=======================================
    // component specific props
    //=======================================

    //=======================================
    // Quommon props
    //=======================================
    asVariant: "warning",

    withColor: null,
    withLabel: null,

    isHidden: false,
    isDisabled: false,
};
/**
## Notes
- The design system used for this component is HTML and CSS
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function RewardBadge(props) {
    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "reward-badge");
    quommonClasses.childClasses += ` variant-${props.asVariant}-text`;
    //-------------------------------------------------------------------
    // 2. Get animation of the component
    //-------------------------------------------------------------------
    let labelContent = Object.assign({}, props.withLabel);
    function getLabel(labelObj, position) {
        return labelObj?.format === position ? labelObj.content : "";
    }

    // ========================= Render Function =================================
    return (
        <div
            className={`qui ${quommonClasses.parentClasses}`}
        >
            <div
                className={`qui-reward-badge-container ${props?.withLabel?.format === "popover" ? "popover" : ""}  qui-btn ${quommonClasses.childClasses}`}
                style={{ backgroundColor: props.withColor?.backgroundColor, color: props.withColor?.textColor }}
                onClick={() => props.onClick}>
                <div className="qui-badge-label qui-label">
                    <h4>
                        {getLabel(labelContent, "label")}
                    </h4>
                </div>
                {props?.image && <img
                    className="qui-reward-badge"
                    src={`${props?.image}`}
                    alt="reward-badge"
                    title={getLabel(labelContent, "popover")}
                />}
                <div className="qui-badge-caption qui-caption">
                    <h4>
                        {getLabel(labelContent, "caption")}
                    </h4>
                </div>
            </div>
        </div>
    );
}