import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
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
    onClick: PropTypes.func.isRequired,
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
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "otp-fields");
    //-------------------------------------------------------------------
    // 2.Declaration of OTPFields's value
    //-------------------------------------------------------------------
    // const [otpValue, setOtpValue] = useState(null);

    const re = new RegExp(/^$|^[0-9]$/);

    function handleCondition(e) {
        if (e.key === "Enter") {
            e.target.blur()
            // props.onClick(e.target.name, e.target.value);
        }
        if (e.key === "Escape") {
            e.target.value = ""
        }
    }
    // function handleChange(e) {
    //     if (re.test(e.target.value)) {
    //         setOtpValue(e.target.value);
    //     }
    //     handleCondition(e)
    // }
    
    let arr = [];
    function handleChange(e) {
        if (re.test(e.target.value) && e.target.value.length === 1) {
            arr.push(e.target.value);
        }
        handleCondition(e)
    }
    //-------------------------------------------------------------------
    // 3. Use to set styling for OTPFields.
    //-------------------------------------------------------------------
    let otpRef = useRef();

    let changeFocus = () => {
        otpRef.current.style.borderColor = props.withColor?.accentColor
        otpRef.current.style.backgroundColor = props.withColor?.backgroundColor
    };

    let changeBlur = (e) => {
        otpRef.current.style.backgroundColor = "#b5b5b1"
        otpRef.current.style.borderColor = "#8c8c89"

        if (e.target.value !== "" && re.test(e.target.value)) {
            // props.onClick(e.target.name, e.target.value);
        }
    };
    //-------------------------------------------------------------------
    // 4. Use to set function for OTPFields.
    //-------------------------------------------------------------------
    let otpFields = [];
    _.times(props.numFields, (i) => {
        otpFields.push(
            <input
                key={i}
                className="qui-otp-fields-input"
                type="number"
                onFocus={() => changeFocus(i)}
                onBlur={changeBlur}
                // value={otpValue}
                value={arr[i]}
                name={"otp-field-" + i}
                ref={otpRef}
                onChange={handleChange}
                onKeyDown={handleChange}
            />
        );
    });
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
                <div className="qui-otp-fields">
                    {otpFields}
                </div>
            </div>
        </motion.div>
    );
}