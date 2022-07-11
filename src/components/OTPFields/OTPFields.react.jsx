import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
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
    Use to define number of Inputs in OTPFields
    */
    numInputs: PropTypes.number.isRequired,
    //=======================================
    // Quommon props
    //=======================================
    /**
    Use to define component size in increasing order
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
    Use to set Colors
    */
    withColor: PropTypes.shape({
        textColor: PropTypes.string,
        accentColor: PropTypes.string,
        backgroundColor: PropTypes.string,
        focusAccentColor: PropTypes.string,
        focusBackgroundColor: PropTypes.string,
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
    Use to toggle the component taking the full width of the parent container
    */
    isFluid: PropTypes.bool,
    /**
    OTPFields component must have the onClick function passed as props
    */
    onClick: PropTypes.func.isRequired,
};

OTPFields.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    numInputs: 5,
    //=======================================
    // Quommon props
    //=======================================
    asSize: "normal",
    asFloated: "none",

    withColor: null,
    withAnimation: null,

    isHidden: false,
    isDisabled: false,
    isFluid: false,
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
    let { numInputs, withColor } = props;
    //-------------------------------------------------------------------
    // 2. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "otp-fields");
    //-------------------------------------------------------------------
    // 3.Declaration of OTPFields's value
    //-------------------------------------------------------------------
    const [otpValue, setOtpValue] = useState(new Array(numInputs).fill(""));
    const re = new RegExp(/^$|^[0-9]$/)
    const handleChange = (element, index) => {
        if (re.test(element.value)) {
            setOtpValue([...otpValue.map((d, idx) => (idx === index ? element.value : d))]);
        }
        //Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    }

    useEffect(() => {
        setOtpValue(new Array(numInputs).fill(""))
    }, [numInputs])
    //-------------------------------------------------------------------
    // 4. Use to set styling for OTPFields.
    //-------------------------------------------------------------------
    let changeFocus = (element) => {
        element.select()
        element.style.borderColor = withColor?.focusAccentColor
        element.style.backgroundColor = withColor?.focusBackgroundColor
    }

    let changeBlur = (element) => {
        element.style.borderColor = withColor?.accentColor
        element.style.backgroundColor = withColor?.backgroundColor

        let otpLength = otpValue.join("")
        if (numInputs === otpLength.length) {
            props.onClick(otpLength)
        }
    }
    //-------------------------------------------------------------------
    // 5. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props);
    // ========================= Render Function =================================
    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui ${quommonClasses.parentClasses}`}
        >
            <div className={`qui-otp-fields-container ${quommonClasses.childClasses}`}>
                {otpValue.map((data, index) => {
                    return (
                        <input
                            className="qui-otp-fields-otp-input-style"
                            type="number"
                            min="0"
                            max="9"
                            name="otp"
                            maxLength="1"
                            key={index}
                            value={data}
                            onChange={e => handleChange(e.target, index)}
                            onFocus={(e) => changeFocus(e.target)}
                            onBlur={(e) => changeBlur(e.target)}
                            style={{
                                color: withColor?.textColor,
                                backgroundColor: withColor?.backgroundColor,
                                borderBottom: `3px solid ${withColor?.accentColor}`
                            }}
                        />
                    );
                })}
            </div>
        </motion.div>
    );
}