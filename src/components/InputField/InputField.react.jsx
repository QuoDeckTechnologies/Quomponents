import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import TextField from '@mui/material/TextField';
import { motion } from "framer-motion";
import {
    getAnimation,
    getQuommons,
    getTranslation,
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
        type: PropTypes.string,
        multiLine: PropTypes.bool
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
    withTranslation: null,

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
    let [input, setInput] = useState(props.content?.value);

    let inputCountLength = input?.length;
    let [count, setCount] = useState(inputCountLength);

    useEffect(() => {
        setInput(props.content?.value)
    }, [props.content?.value])

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
    };

    let changeBlur = (e) => {
        props.onClick(e.target.name, e.target.value);
    };

    let inputlabelColor = {
        style: { color: props.withColor?.textColor ? props.withColor?.textColor : "#666666" },
    };

    let outlineStyle = {
        "& .MuiFilledInput-root:after": {
            borderBottom: `0.3em solid ${props.withColor?.accentColor ? props.withColor?.accentColor : "#ffab00"}`
        },
    };
    //-------------------------------------------------------------------
    // 4. Get translation of the component
    //-------------------------------------------------------------------
    let tObj = null;
    let label = props.content?.label;
    let placeholder = props.content?.placeholder;

    if (
        props.withTranslation?.lang &&
        props.withTranslation.lang !== "" &&
        props.withTranslation.lang !== "en"
    ) {
        tObj = getTranslation(props.withTranslation)
        label = tObj.label
        placeholder = tObj.placeholder
    }
    //-------------------------------------------------------------------
    // 5. Use to set state of InputField.
    //-------------------------------------------------------------------
    const { asEmphasis } = props;

    const getInput = (asEmphasis) => {
        if (asEmphasis === "filled") {
            return (
                <TextField
                    className="qui-filled"
                    InputLabelProps={inputlabelColor}
                    InputProps={{
                        inputProps: { min: 0 },
                        style: inputlabelColor.style
                    }}
                    type={props.content?.type}
                    sx={outlineStyle}
                    multiline={props.content?.multiLine}
                    label={props.content?.label}
                    placeholder={props.content?.placeholder}
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
                    {(props.content?.maxLength || props.content?.maxLength >= 0) && <div className={props.content?.maxLength >= count ? "qui-char-limit-max-length" : "qui-char-limit-ideal-length"}>{`${count}/${props.content?.maxLength}`}</div>}
                    <TextField
                        className="qui-char-limited"
                        InputLabelProps={inputlabelColor}
                        InputProps={{
                            inputProps: { min: 0 },
                            style: inputlabelColor.style
                        }}
                        sx={outlineStyle}
                        multiline={props.content?.multiLine}
                        label={props.content?.label}
                        placeholder={props.content?.placeholder}
                        type={props.content?.type}
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
                    {(props.content?.maxLength || props.content?.maxLength >= 0) && < div className={props.content?.maxLength >= count ? "qui-char-limit-max-length" : "qui-char-limit-ideal-length"}>{`${count}/${props.content?.maxLength}`}</div>}
                    <TextField
                        className="qui-list-input"
                        sx={outlineStyle}
                        placeholder={props.content?.placeholder}
                        InputProps={{
                            inputProps: { min: 0 },
                            style: inputlabelColor.style
                        }}
                        type={props.content?.type}
                        multiline={props.content?.multiLine}
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
                </div >
            )
        }
        else {
            return (
                <TextField
                    className="qui-short-field"
                    sx={outlineStyle}
                    type="number"
                    InputProps={{
                        inputProps: { min: 0 },
                        style: inputlabelColor.style
                    }}
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
    // 6. Get animation of the component
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