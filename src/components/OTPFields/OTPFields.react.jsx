import React from "react";
import PropTypes from "prop-types";
import InputField from "../InputField/InputField.react"
import { motion } from "framer-motion";
import {
    getAnimation,
    getQuommons,
} from "../../common/javascripts/helpers";
import "../../common/stylesheets/common.css";
import "./OTPFields.scss";
import "../../common/stylesheets/overrule.scss";

OTPFields.propTypes = {
    //=======================================
    // Quommon props
    //=======================================
    /**
    Use to float the component in parent container
    */
    asFloated: PropTypes.oneOf(["left", "right", "none", "inline"]),
    /**
    Use to set Colors
    */
    withColor: PropTypes.shape({
        accentColor: PropTypes.string,
        backgroundColor: PropTypes.string,
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
            "",
        ]),
        duration: PropTypes.number,
        delay: PropTypes.number,
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
    OTPFields component must have the onClick function passed as props
    */
    onClick: PropTypes.func.isRequired,
};

OTPFields.defaultProps = {
    //=======================================
    // Quommon props
    //=======================================
    asFloated: "none",

    withColor: null,
    withAnimation: null,

    isHidden: false,
    isDisabled: false,

    onClick: null,
};
/**
## Notes
- The design system used for this component is HTML and CSS
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function OTPFields(props) {
    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "otp-fields");
    //-------------------------------------------------------------------
    // 2. Use to set OTPFields Color
    //-------------------------------------------------------------------
    let OTPFieldsColors = {
        backgroundColor: props.withColor?.backgroundColor,
        accentColor: props.withColor?.accentColor,
    };
    //-------------------------------------------------------------------
    // 3. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);
    // ========================= Render Function =================================
    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui ${quommonClasses.parentClasses}`}
        >
            <div className={`qui-otp-fields-container ${quommonClasses.childClasses}`}>
                <div className="qui-otp-fields">
                    <InputField {...props}
                        InputProps={{ inputProps: { min: 0, max: 9 } }}
                        name={"one"}
                        content={{
                            value: "1"
                        }}
                        asEmphasis="shortField"
                        asFloated="left"
                        withColor={OTPFieldsColors}
                        onClick={(name, value) =>
                            props.onClick(name, value)
                        }
                    />
                    <InputField
                        name={"two"}
                        content={{
                            value: "2"
                        }}
                        asEmphasis="shortField"
                        asFloated="left"
                        withColor={OTPFieldsColors}
                        onClick={(name, value) =>
                            props.onClick(name, value)
                        }
                    />
                    <InputField
                        name={"three"}
                        content={{
                            value: "3"
                        }}
                        asEmphasis="shortField"
                        asFloated="left"
                        withColor={OTPFieldsColors}
                        onClick={(name, value) =>
                            props.onClick(name, value)
                        }
                    />
                    <InputField
                        name={"four"}
                        content={{
                            value: "4"
                        }}
                        asEmphasis="shortField"
                        asFloated="left"
                        withColor={OTPFieldsColors}
                        onClick={(name, value) =>
                            props.onClick(name, value)
                        }
                    />
                    <InputField
                        name={"five"}
                        content={{
                            value: "5"
                        }}
                        asEmphasis="shortField"
                        asFloated="left"
                        withColor={OTPFieldsColors}
                        onClick={(name, value) =>
                            props.onClick(name, value)
                        }
                    />
                </div>
            </div>
        </motion.div>
    );
}
