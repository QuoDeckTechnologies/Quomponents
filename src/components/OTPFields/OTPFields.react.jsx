import React, { useState } from "react";
import PropTypes from "prop-types";
import OtpInput from "react-otp-input";
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
    // Component Specific props
    //=======================================
    /**
    Use to define number of Fields in OTPFields
    */
    numFields: PropTypes.number.isRequired,
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
    onClick: PropTypes.func,
};

OTPFields.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    numFields: 5,
    //=======================================
    // Quommon props
    //=======================================
    asFloated: "none",

    withColor: null,
    withAnimation: null,

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
export default function OTPFields(props) {
    //-------------------------------------------------------------------
    // 1. Destructuring props
    //-------------------------------------------------------------------
    let { numFields, withColor } = props;
    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "otp-fields");
    //-------------------------------------------------------------------
    // 2.Declaration of OTPFields's value
    //-------------------------------------------------------------------
    const [otpValue, setOtpValue] = useState(null);

    let handleChange = (value) => {
        setOtpValue(value)
        props.onClick(value);
    }
    //-------------------------------------------------------------------
    // 3. Use to set styling for OTPFields.
    //-------------------------------------------------------------------
    let otpFieldsFocusStyle = {
        outline: 'none',
        borderBottom: `0.1em solid ${withColor?.accentColor}`,
        backgroundColor: `${withColor?.backgroundColor}`
    };
    //-------------------------------------------------------------------
    // 5. Get animation of the component
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
                <OtpInput
                    value={otpValue}
                    onChange={handleChange}
                    // onChange={(value) => { setOtpValue(value) }}
                    // onComplete={() => { props.onClick(otpValue) }}
                    numInputs={numFields}
                    containerStyle="qui-otp-fields-otp-input-container-style"
                    inputStyle="qui-otp-fields-otp-input-style"
                    isInputNum={true}
                    shouldAutoFocus={true}
                    focusStyle={otpFieldsFocusStyle}
                />
            </div>
        </motion.div>
    );
}