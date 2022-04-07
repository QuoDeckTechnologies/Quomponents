import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import TextField from '@mui/material/TextField';
import { motion } from "framer-motion";
import {
    getAnimation,
    getQuommons,
} from "../../common/javascripts/helpers";
import "../../common/stylesheets/common.css";
import "./InputField.scss";
import "../../common/stylesheets/overrule.scss";

InputField.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    Use to define InputField's value
    */
    content: PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string,
        placeholder: PropTypes.string,
        maxLength: PropTypes.number,
    }),
    /**
    Use to define name's ID
    */
    name: PropTypes.string.isRequired,
    /**
    Use to set the state of InputField 
    */
    asEmphasis: PropTypes.oneOf([
        "filled",
        "charLimited",
        "listInput",
        "shortField",
    ]),
    //=======================================
    // Quommon props
    //=======================================
    /**
    Use to float the component in parent container
    */
    asFloated: PropTypes.oneOf(["left", "right", "none", "inline"]),
    /**
    Use to set Colors in component 
    */
    withColor: PropTypes.shape({
        textColor: PropTypes.string,
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
    InputField component must have the onClick function passed as props
    */
    onClick: PropTypes.func.isRequired,
};

InputField.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    content: null,
    name: "",
    asEmphasis: "filled",
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
- The design system used for this component is Material UI (@mui/material)
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function InputField(props) {
    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "input-field");
    //-------------------------------------------------------------------
    // 2. Declaration of InputField's value
    //-------------------------------------------------------------------
    const [input, setInput] = useState(props.content?.value);
    const [count, setCount] = useState(props.content?.maxLength);

    function handleChange(e) {
        setInput(e.target.value);
        setCount(e.target.value.length)

        if (e.key === "Enter") {
            e.target.blur()
            props.onClick(e.target.name, e.target.value);
        }
        if (e.key === "Escape") {
            e.target.value = ""
        }
    }
    //-------------------------------------------------------------------
    // 3. Use to set styling for InputField.
    //-------------------------------------------------------------------
    let inputRef = useRef();

    let changeFocus = () => {
        inputRef.current.style.backgroundColor = props.withColor?.backgroundColor
    }

    let changeBlur = (e) => {
        inputRef.current.style.backgroundColor = "#d4d3cf"
        props.onClick(e.target.name, e.target.value);
    }

    let inputlabelColor = {
        style: { color: props.withColor?.textColor ? props.withColor?.textColor : "#666666" },
    }

    let outlineStyle = {
        "& .MuiFilledInput-root:after": {
            borderBottom: `0.3em solid ${props.withColor?.accentColor ? props.withColor?.accentColor : "#ffab00"}`
        },
    }
    //-------------------------------------------------------------------
    // 4. Use to set state of InputField.
    //-------------------------------------------------------------------
    const { asEmphasis } = props;

    const getInput = (asEmphasis) => {
        if (asEmphasis === "filled") {
            return (
                <TextField
                    className="qui-filled"
                    InputLabelProps={inputlabelColor}
                    sx={outlineStyle}
                    label={props.content?.label}
                    variant="filled"
                    value={input}
                    name={props.name}
                    ref={inputRef}
                    onFocus={changeFocus}
                    onBlur={changeBlur}
                    onChange={handleChange}
                    onKeyDown={handleChange}
                />
            )
        }
        if (asEmphasis === "charLimited") {
            return (
                <div className="qui-char-limited-container">
                    <div className={props.content?.maxLength >= count ? "qui-char-limit-max-length" : "qui-char-limit-ideal-length"}>{`${count}/${props.content?.maxLength}`}</div>
                    <TextField
                        className="qui-char-limited"
                        InputLabelProps={inputlabelColor}
                        sx={outlineStyle}
                        multiline={true}
                        label={props.content?.label}
                        variant="filled"
                        value={input}
                        name={props.name}
                        ref={inputRef}
                        onFocus={changeFocus}
                        onBlur={changeBlur}
                        onChange={handleChange}
                        onKeyDown={handleChange}
                    />
                </div>
            )
        }
        if (asEmphasis === "listInput") {
            return (
                <div className="qui-list-input-container">
                    <div className={props.content?.maxLength >= count ? "qui-char-limit-max-length" : "qui-char-limit-ideal-length"}>{`${count}/${props.content?.maxLength}`}</div>
                    <TextField
                        className="qui-list-input"
                        sx={outlineStyle}
                        placeholder={props.content?.placeholder}
                        multiline={true}
                        size="small"
                        variant="filled"
                        value={input}
                        name={props.name}
                        ref={inputRef}
                        onFocus={changeFocus}
                        onBlur={changeBlur}
                        onChange={handleChange}
                        onKeyDown={handleChange}
                    />
                </div>
            )
        }
        else {
            return (
                <TextField
                    className="qui-short-field"
                    sx={outlineStyle}
                    type="number"
                    InputProps={{ inputProps: { min: 0 } }}
                    size={"small"}
                    variant="filled"
                    value={input}
                    name={props.name}
                    ref={inputRef}
                    onFocus={changeFocus}
                    onBlur={changeBlur}
                    onChange={handleChange}
                    onKeyDown={handleChange}
                />
            )
        }
    }
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
            <div className={`qui-input-field-container ${quommonClasses.childClasses}`}>
                {getInput(asEmphasis)}
            </div>
        </motion.div>
    );
}