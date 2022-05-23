import React, { useState } from "react";
import PropTypes from "prop-types";
import TextField from '@mui/material/TextField';
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
    // 2. Use to set OTPFields Color
    //-------------------------------------------------------------------
    const [inputOne, setInputOne] = useState(null);
    const [inputTwo, setInputTwo] = useState(null);
    const [inputThree, setInputThree] = useState(null);
    const [inputFour, setInputFour] = useState(null);
    const [inputFive, setInputFive] = useState(null);

    function handleCondition(e) {
        if (e.key === "Enter") {
            e.target.blur()
            props.onClick(e.target.name, e.target.value);
        }
        if (e.key === "Escape") {
            e.target.value = ""
        }
    }

    const re = new RegExp(/^$|^[0-9]$/)

    function handleChangeOne(e) {
        if (re.test(e.target.value)) {
            setInputOne(e.target.value);
        }
        handleCondition(e)
    }

    function handleChangeTwo(e) {
        if (re.test(e.target.value)) {
            setInputTwo(e.target.value);
        }
        handleCondition(e)
    }

    function handleChangeThree(e) {
        if (re.test(e.target.value)) {
            setInputThree(e.target.value);
        }
        handleCondition(e)
    }

    function handleChangeFour(e) {
        if (re.test(e.target.value)) {
            setInputFour(e.target.value);
        }
        handleCondition(e)
    }

    function handleChangeFive(e) {
        if (re.test(e.target.value)) {
            setInputFive(e.target.value);
        }
        handleCondition(e)
    }
    //-------------------------------------------------------------------
    // 2. Use to set OTPFields Color
    //-------------------------------------------------------------------
    let inputOneRef = React.useRef();
    let inputTwoRef = React.useRef();
    let inputThreeRef = React.useRef();
    let inputFourRef = React.useRef();
    let inputFiveRef = React.useRef();

    let changeFocus = () => {
        if (inputOneRef.current.focus) {
            inputOneRef.current.style.backgroundColor = props.withColor?.backgroundColor
        }
        if (inputTwoRef.current.focus) {
            inputTwoRef.current.style.backgroundColor = props.withColor?.backgroundColor
        }
        if (inputThreeRef.current.focus) {
            inputThreeRef.current.style.backgroundColor = props.withColor?.backgroundColor
        }
        if (inputFourRef.current.focus) {
            inputFourRef.current.style.backgroundColor = props.withColor?.backgroundColor
        }
        if (inputFiveRef.current.focus) {
            inputFiveRef.current.style.backgroundColor = props.withColor?.backgroundColor
        }
    };

    let changeBlur = (e) => {
        inputOneRef.current.style.backgroundColor = "#d4d3cf"
        inputTwoRef.current.style.backgroundColor = "#d4d3cf"
        inputThreeRef.current.style.backgroundColor = "#d4d3cf"
        inputFourRef.current.style.backgroundColor = "#d4d3cf"
        inputFiveRef.current.style.backgroundColor = "#d4d3cf"
        props.onClick(e.target.name, e.target.value);
    };

    let outlineStyle = {
        "& .MuiFilledInput-root:after": {
            borderBottom: `0.3em solid ${props.withColor?.accentColor ? props.withColor?.accentColor : "#ffab00"}`,
        },
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
                    <TextField
                        className="qui-otp-fields-textField"
                        sx={outlineStyle}
                        type="number"
                        InputProps={{ inputProps: { min: 0, max: 9 } }}
                        size={"small"}
                        variant="filled"
                        value={inputOne}
                        name={"one"}
                        ref={inputOneRef}
                        onFocus={changeFocus}
                        onBlur={changeBlur}
                        onChange={handleChangeOne}
                        onKeyDown={handleChangeOne}
                    />
                    <TextField
                        className="qui-otp-fields-textField"
                        sx={outlineStyle}
                        type="number"
                        InputProps={{ inputProps: { min: 0, max: 9 } }}
                        size={"small"}
                        variant="filled"
                        value={inputTwo}
                        name={"two"}
                        ref={inputTwoRef}
                        onFocus={changeFocus}
                        onBlur={changeBlur}
                        onChange={handleChangeTwo}
                        onKeyDown={handleChangeTwo}
                    />
                    <TextField
                        className="qui-otp-fields-textField"
                        sx={outlineStyle}
                        type="number"
                        InputProps={{ inputProps: { min: 0, max: 9 } }}
                        size={"small"}
                        variant="filled"
                        value={inputThree}
                        name={"three"}
                        ref={inputThreeRef}
                        onFocus={changeFocus}
                        onBlur={changeBlur}
                        onChange={handleChangeThree}
                        onKeyDown={handleChangeThree}
                    />
                    <TextField
                        className="qui-otp-fields-textField"
                        sx={outlineStyle}
                        type="number"
                        InputProps={{ inputProps: { min: 0, max: 9 } }}
                        size={"small"}
                        variant="filled"
                        value={inputFour}
                        name={"four"}
                        ref={inputFourRef}
                        onFocus={changeFocus}
                        onBlur={changeBlur}
                        onChange={handleChangeFour}
                        onKeyDown={handleChangeFour}
                    />
                    <TextField
                        className="qui-otp-fields-textField"
                        sx={outlineStyle}
                        type="number"
                        InputProps={{ inputProps: { min: 0, max: 9 } }}
                        size={"small"}
                        variant="filled"
                        value={inputFive}
                        name={"five"}
                        ref={inputFiveRef}
                        onFocus={changeFocus}
                        onBlur={changeBlur}
                        onChange={handleChangeFive}
                        onKeyDown={handleChangeFive}
                    />
                </div>
            </div>
        </motion.div>
    );
}
