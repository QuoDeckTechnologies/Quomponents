// Import npm packages
import PropTypes from "prop-types";
import { Switch , styled} from "@mui/material";
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
    Use to define component text size in increasing order
    */
    asSize: PropTypes.oneOf([
        "tiny",
        "small",
        "normal",
        "big",
        "huge",
        "massive",
    ]),
    /**
    Use to float the component in parent container
    */
    asFloated: PropTypes.oneOf(["left", "right", "none", "inline"]),
    /**
    Use to override component colors and behavior
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
    asSize: "normal",
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
- MUI props are not being passed to the button. Please speak to the admin to handle any new MUI prop.
**/
export default function ToggleButton(props) {
    const ToggleSwitch = styled(Switch)(() => ({
        width: '3.5em',
        height: '2em',
        '& .MuiSwitch-switchBase': {
            color: '#AAAAAA',
            margin: 1,
            padding: 0,
            transform: 'translate(0.5em,0.2em)',
            '&.Mui-checked': {
                color: props.withColor?.accentColor,
                transform: 'translate(1.5em,0.2em)',
                '& + .MuiSwitch-track': {
                    opacity: 1,
                    backgroundColor: props.withColor?.backgroundColor,
                },
            },
        },
        '& .MuiSwitch-thumb': {
            width: ' 1.5em',
            height: '1.5em',
        },
        '& .MuiSwitch-track': {
            opacity: 1,
            backgroundColor: props.withColor?.backgroundColor,
            borderRadius: '1em',
        },
    }));



    let { content } = props
    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "toggle-button");
    //-------------------------------------------------------------------
    // 2. Set the component colors
    //-------------------------------------------------------------------
    let textColor = {
        color: props.withColor?.textColor
    }
    //-------------------------------------------------------------------
    // 2. Set the component colors
    //--------------------------
   
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
            props.onClick(event.target.checked)
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
                />
                <div
                    className={`qui-Toggle-Button-title size-${props.asSize}`}
                    style={textColor}>
                    {content}
                </div>
            </div>
        </motion.div >
    );
}
