import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import TextField from '@mui/material/TextField';
import { styled } from "@mui/material";
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
    Use to align content within the component container
    */
    asAligned: PropTypes.oneOf(["left", "right", "center"]),
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
};

InputField.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    content: null,
    asEmphasis: "filled",
    //=======================================
    // Quommon props
    //=======================================
    asSize: "normal",
    asFloated: "none",
    asAligned: "center",

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
export default function InputField(props) {
    const FilledInput = styled(TextField)(() => ({
        '& .MuiInputBase-root': {
            '&.MuiFilledInput-root:after': {
                backgroundColor: props.withColor?.accentColor,
                height: "0.3em",
            }, '&.MuiFilledInput-root:before': {
                backgroundColor: "#AAAAAA",
                height: "0.3em",
            },
        },
    }));
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

        if (e.key === "Enter" && e.target.value !== "") {
            e.target.blur()
        }
        if (e.key === "Escape") {
            e.target.value = ""
        }
    }
    //-------------------------------------------------------------------
    // 3. Use to set styling for InputField.
    //-------------------------------------------------------------------
    const inputRef = useRef(null);
    console.log(inputRef.current)

    const changeFocus = () => {
        inputRef.current.style.borderColor = props.withColor?.accentColor
        inputRef.current.style.backgroundColor = props.withColor?.backgroundColor
    }

    const changeBlur = () => {
        inputRef.current.style.backgroundColor = "#d4d3cf"
    }
    //-------------------------------------------------------------------
    // 4. Use to set state of InputField.
    //-------------------------------------------------------------------
    const { asEmphasis } = props
    const getInput = (asEmphasis) => {
        if (asEmphasis === "filled") {
            return (
                <FilledInput
                    className="qui-filled"
                    // InputProps={{
                    //     disableUnderline: true,
                    // }}
                    InputLabelProps={{
                        style: { color: props.withColor?.textColor },
                    }}
                    label={props.content?.label}
                    variant="filled"
                    value={input}
                    ref={inputRef}
                    onFocus={() => changeFocus()
                    }
                    onBlur={() => changeBlur()}
                    onChange={handleChange}
                    onKeyDown={handleChange}
                />

            )
        }
        if (asEmphasis === "charLimited") {
            return (
                <div className="qui-char-limited-container">
                    <div className="qui-char-limited-max-length">{`${count}/${props.content?.maxLength}`}</div>
                    <FilledInput
                        className="qui-char-limited"
                        InputLabelProps={{
                            style: { color: props.withColor?.textColor },
                        }}
                        inputProps={{ maxLength: props.content?.maxLength }}
                        multiline={true}
                        label={props.content?.label}
                        variant="filled"
                        value={input}
                        ref={inputRef}
                        onFocus={() => changeFocus()}
                        onBlur={() => changeBlur()}
                        onChange={handleChange}
                        onKeyDown={handleChange}
                    />
                </div>
            )
        }
        if (asEmphasis === "listInput") {
            return (
                <div className="qui-list-input-container">
                    <div className="qui-char-limited-max-length">{`${count}/${props.content?.maxLength}`}</div>
                    <FilledInput
                        className="qui-list-input"
                        InputLabelProps={{
                            style: { color: props.withColor?.textColor },
                        }}
                        inputProps={{ maxLength: props.content?.maxLength }}
                        placeholder={props.content?.placeholder}
                        multiline={true}
                        size="small"
                        variant="filled"
                        value={input}
                        ref={inputRef}
                        onFocus={() => changeFocus()}
                        onBlur={() => changeBlur()}
                        onChange={handleChange}
                        onKeyDown={handleChange}
                    />
                </div>
            )
        }
        else {
            return (
                <input
                    className="qui-short-field"
                    type="number"
                    min="0"
                    value={input}
                    ref={inputRef}
                    onFocus={() => changeFocus()}
                    onBlur={() => changeBlur()}
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