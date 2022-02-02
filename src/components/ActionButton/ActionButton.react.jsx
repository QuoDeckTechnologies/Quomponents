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

    /**
    Use to define content of component 
    */
    content: PropTypes.shape({
        name: PropTypes.string,
        amount: PropTypes.string,
        rupeeSymbol: PropTypes.string,
        icon: PropTypes.string,
        iconWidth: PropTypes.string,
    }),

    /**
    Use to define circle status of component 
    */
    isCircle: PropTypes.bool,

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

    // Quommon props
    //=======================================
    content: null,
    isCircle: true,
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
    // 2. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);

    //-------------------------------------------------------------------
    // 3. Get translation of the component
    //-------------------------------------------------------------------
    let labelContent = Object.assign({}, props.content);
    let tObj = null;

    if (
        props.withTranslation?.lang &&
        props.withTranslation.lang !== "" &&
        props.withTranslation.lang !== "en"
    ) {
        tObj = getTranslation(props.withTranslation);
        if (labelContent && tObj?.name) labelContent.name = tObj.name;
        if (labelContent && tObj?.amount) labelContent.amount = tObj.amount;
        if (labelContent && tObj?.rupeeSymbol) labelContent.rupeeSymbol = tObj.rupeeSymbol;
    }

    //-------------------------------------------------------------------
    // 4. Get the custom button styling of the component
    //-------------------------------------------------------------------

    let buttonStyle = {
        color: props.withColor?.textColor,
        backgroundColor: props.withColor?.backgroundColor,
    };

    // ========================= Render Function =================================
    //-------------------------------------------------------------------
    // 5. Get the Status of Component
    //-------------------------------------------------------------------


    const actionButtonBackground = (isCircle) => {

        //with cirlce and without circle classes definition
        let actionButtonStyle, label, amount, labelStyle, amountStyle;
        label = labelContent?.name;
        amount = labelContent.amount;

        actionButtonStyle = isCircle? "actionButtonContainer" : "actionButtonContainerWithNoCircle"
        console.log(amount.length)
        if(label.length >5 || amount.length > 5){
            labelStyle = "responsiveLabelSize"
            amountStyle= "responsiveAmountSize"
        }
        if (labelContent?.icon) {
            return (
                <div className={actionButtonStyle}>
                    <img
                        className={`actionButtonWithImage`}
                        alt="img"
                        src={labelContent ? `${labelContent.icon}` : ""}
                        style={{ width: labelContent.iconWidth ? `${labelContent.iconWidth}` : "4em" }}
                    />
                </div>
            )
        } else {
            return (
                <div className={actionButtonStyle}>
                    <div className={`qui-btn variant-${props.asVariant} actionButton `} style={buttonStyle} onClick={props.onClick}>
                        <div className={`actionButton-label ${labelStyle}`}>
                            {labelContent?.name}
                        </div>
                        <div className={`actionButton-amount ${amountStyle}`}>
                            {labelContent.rupeeSymbol}{" "}
                            {labelContent?.amount}
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui ${quommonClasses.parentClasses}`}>
            <div className={`${quommonClasses.childClasses}`}>
                {actionButtonBackground(props.isCircle)}
            </div>
        </motion.div>
    );
}
