// Import npm packages
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
    getQuommons,
    getTranslation,
    getAnimation,
} from "../../common/javascripts/helpers";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./ActionButton.scss";
import "../../common/stylesheets/overrule.scss";

import "@fontsource/oswald";
import "@fontsource/quicksand";

ActionButton.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================

    // Quommon props
    //=======================================

    // Use to toggle button type

    buttonType: PropTypes.oneOf([
        "withButton",
        "withImage"
    ]),

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
    Use to define component padding in increasing order
    */
    asPadded: PropTypes.oneOf(["fitted", "compact", "normal", "relaxed"]),
    /**
    Use to float the component in parent container
    */
    asFloated: PropTypes.oneOf(["left", "right", "inline"]),
    /**
    Use to align content within the component container
    */
    asAligned: PropTypes.oneOf(["left", "right", "center"]),

    /**
    Use to override component colors and behavior
    */
    withColor: PropTypes.shape({
        backgroundColor: PropTypes.string,
        accentColor: PropTypes.string,
        textColor: PropTypes.string,
        hoverBackgroundColor: PropTypes.string,
        hoverTextColor: PropTypes.string,
    }),
    /**
    Use to add an icon to the component
    */
    withIcon: PropTypes.shape({
        icon: PropTypes.string,
        width: PropTypes.string,
        iconColor: PropTypes.string
    }),
    /**
    Use to add a heading label, a footer caption or a title popover to the component
    */
    withLabel: PropTypes.shape({
        format: PropTypes.oneOf(["label", "caption", "popover"]),
        content: PropTypes.string,
        amount: PropTypes.string,
        rupeeSymbol: PropTypes.string,
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
    Button component must have the onClick function passed as props
    */
    onClick: PropTypes.func.isRequired,
};

ActionButton.defaultProps = {
    // Component Specific props
    //=======================================
    buttonType: "withButton",

    // Quommon props
    //=======================================
    asVariant: "primary",
    asSize: "normal",
    asPadded: "normal",
    asFloated: "inline",
    asAligned: "center",

    withColor: null,
    withIcon: null,
    withLabel: null,
    withAnimation: null,
    withTranslation: null,

    isHidden: false,
    isDisabled: false,
    isFluid: false,
    isLoading: false,
};

/**
## Notes
- The design system used for this component is Material UI (@mui/material)
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- MUI props are not being passed to the button. Please speak to the admin to handle any new MUI prop.
**/
export default function ActionButton(props) {

    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props);


    //-------------------------------------------------------------------
    // 7. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);

    //-------------------------------------------------------------------
    // 5. Get translation of the component
    //-------------------------------------------------------------------
    let labelContent = Object.assign({}, props.withLabel);
    let tObj = null;

    if (
        props.withTranslation?.lang &&
        props.withTranslation.lang !== "" &&
        props.withTranslation.lang !== "en"
    ) {
        tObj = getTranslation(props.withTranslation);
        if (labelContent && tObj?.label) labelContent.content = tObj.label;
        if (labelContent && tObj?.amount) labelContent.amount = tObj.amount;
        if (labelContent && tObj?.rupeeSymbol) labelContent.rupeeSymbol = tObj.rupeeSymbol;
    }


    // ========================= Render Function =================================
    //-------------------------------------------------------------------
    // 6. Get Status Card of the component
    //-------------------------------------------------------------------

    let actionButtonTextStyle = {
        fontFamily: "Oswald",
        fontStyle: "Regular"
    }

    let playButtonStyle = {
        fontFamily: "Oswald",
        fontStyle: "Regular",
        fontSize: "1.7em",
        color: props.withIcon.iconColor
    }
    let actionButtonImageStyle = {
        fontFamily: "Quicksand"
    }
    let textStyle = {
        color: props.withColor?.textColor,
        backgroundColor: props.withColor?.backgroundColor
    };

    let imgStyle = {
        width: props.withIcon?.width
    }
    const playButton = (buttonType) => {
        let actionButton1, actionButton2;

        if (buttonType === "withButton") actionButton1 = "actionButton";
        if (buttonType === "withImage") actionButton2 = "actionButtonWithImage";

        if (buttonType === "withButton") {
            return (
                <div className={`qui-btn variant-${props.asVariant} ${actionButton1} `} style={textStyle}>
                    <div className={`actionButton-text`} style={actionButtonTextStyle}>
                        {labelContent?.content}
                    </div>
                    <div className={`actionButton-amount`} style={actionButtonImageStyle}>

                        {labelContent.rupeeSymbol}{" "}
                        {labelContent?.amount}

                    </div>
                </div>
            )

        } else {
            if (buttonType === "withImage" && props.withIcon.icon === "") {
                return (
                    <span style={playButtonStyle}>
                        PLAY
                    </span>
                )
            }
            else {
                return (

                    <img
                        className={`${actionButton2}`}
                        alt="img"
                        src={props.withIcon.icon}
                        style={imgStyle}
                    />
                )
            }

        }
    }


    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui ${quommonClasses.parentClasses}`}
        >
            <div className={`qui ${quommonClasses.childClasses}`}>
                <div className={`actionButtonContainer`}>
                    {playButton(props.buttonType)}
                </div>
            </div>
        </motion.div>
    );
}
