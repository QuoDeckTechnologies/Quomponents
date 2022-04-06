// Import npm packages
import React from "react"
import PropTypes from "prop-types";
import { Switch, styled } from "@mui/material";
import { motion } from "framer-motion";
import {
    getQuommons,
    getTranslation,
    getAnimation,
} from "../../common/javascripts/helpers";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./ToggleButton.scss";
import "../../common/stylesheets/overrule.scss";

ToggleButton.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    content: PropTypes.string,
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
    Use to float the component in parent container
    */
    asFloated: PropTypes.oneOf(["left", "right", "none", "inline"]),
    /**
    Use to override component colors 
    */
    withColor: PropTypes.shape({
        backgroundColor: PropTypes.string,
        accentColor: PropTypes.string,
        textColor: PropTypes.string,
    }),
    /**
    Use to define the entry animation of the component
    */
    withAnimation: PropTypes.shape({
        animation: PropTypes.oneOf([
            "zoom",
            "collapse",
            "fade",
            "slideDown",
            "slideUp",
            "slideLeft",
            "slideRight",
            ""
        ]),
        duration: PropTypes.number,
        delay: PropTypes.number,
    }),

    /**
    Use to show a translated version of the component text. Dictionary must be valid JSON. 
    */
    withTranslation: PropTypes.shape({
        lang: PropTypes.string,
        tgt: PropTypes.string,
        dictionary: PropTypes.string,
    }),
    /**
    Use to show/hide the component
    */
    isHidden: PropTypes.bool,
    /**
    Use to enable/disable the component
    */
    isDisabled: PropTypes.bool,

    /**
    ToggleButton component must have the onClick function passed as props
    */
    onClick: PropTypes.func.isRequired,
};

ToggleButton.defaultProps = {
    // Component Specific props
    //=======================================
    content: "",
    // Quommon props
    //=======================================
    asVariant: "primary",
    asFloated: "none",

    withColor: null,
    withAnimation: null,
    withTranslation: null,

    isHidden: false,
    isDisabled: false,
};

/**
## Notes
- The design system used for this component is Material UI (@mui/material)
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- MUI props are not being passed to the ToggleButton. Please speak to the admin to handle any new MUI prop.
**/
export default function ToggleButton(props) {
    const ToggleSwitch = styled(Switch)(() => ({
        '& .MuiSwitch-switchBase': {
            color: '#AAAAAA ',
            '&.Mui-checked': {
                color: props.withColor?.accentColor,
                '& + .MuiSwitch-track': {
                    backgroundColor: props.withColor?.backgroundColor,
                },
            },
        },
        '& .MuiSwitch-track': {
            backgroundColor: props.withColor?.backgroundColor,
        },
    }));
    let { content } = props
    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "toggle-button");
    // -------------------------------------------------------------------
    // 5. Translate the text objects in case their is a dictionary provided
    // -------------------------------------------------------------------
    if (
        props.withTranslation?.lang &&
        props.withTranslation.lang !== "" &&
        props.withTranslation.lang !== "en"
    ) {
        let tObj = getTranslation(props.withTranslation);
        if (tObj && content && content !== "") {
        }
        if (content && tObj?.content) content = tObj.content;
    }
    //-------------------------------------------------------------------
    // 7. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);

    const handleChange = (event) => {
        if (event.target.checked) {
            props.onClick(event.target.checked)
        }
    };

    // ========================= Render Function =================================
    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui ${quommonClasses.parentClasses}`}
        >
            <div className="qui-toggle-button-container">
                <ToggleSwitch
                    onChange={handleChange}
                    id="qui-switch-toggle"
                    disableRipple={true}
                />
                <label
                    htmlFor="qui-switch-toggle"
                    className={`qui-Toggle-Button-title`}
                    style={{ color: props.withColor?.textColor }}>
                    {content}
                </label>
            </div>
        </motion.div >
    );
}
