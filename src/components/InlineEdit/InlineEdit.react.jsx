import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
    getAnimation,
    getQuommons,
} from "../../common/javascripts/helpers";
import "../../common/stylesheets/common.css";
import "./InlineEdit.scss";
import "../../common/stylesheets/overrule.scss";

InlineEdit.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    Use to define InlineEdit's value
    */
    content: PropTypes.string.isRequired,
    /**
    Use to define name's ID
    */
    name: PropTypes.string.isRequired,
    /**
    Use to set the state of InlineEdit 
    */
    asEmphasis: PropTypes.oneOf(["singleLine", "multiLine"]),
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
    InlineEdit component must have the onSubmit function passed as props
    */
    onSubmit: PropTypes.func.isRequired,
};

InlineEdit.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    content: "",
    name: "",
    asEmphasis: "singleLine",
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

    onSubmit: null,
};
/**
## Notes
- The design system used for this component is HTML and CSS
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function InlineEdit(props) {
    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "inline-edit");
    //-------------------------------------------------------------------
    // 2. Declaration of Input's value
    //-------------------------------------------------------------------
    const [input, setInput] = useState(props.content);

    function handleChange(e) {
        setInput(e.target.value);
        if (e.key === "Enter" && e.target.value !== "") {
            e.target.blur()
            props.onSubmit(e.target.name, e.target.value);
        }
        if (e.key === "Escape") {
            e.target.value = ""
        }
    }
    //-------------------------------------------------------------------
    // 3. Use to set styling for InlineEdit.
    //-------------------------------------------------------------------
    const inputRef = useRef();

    const onInput = (target) => {
        if (target.scrollHeight > 33) {
            target.style.height = "5px";
            target.style.height = target.scrollHeight - 16 + "px";
        }
    };

    useEffect(() => {
        onInput(inputRef.current);
    }, [inputRef]);

    const changeFocus = () => {
        inputRef.current.style.borderColor = props.withColor?.accentColor
        inputRef.current.style.backgroundColor = props.withColor?.backgroundColor
    }

    const changeBlur = (e) => {
        inputRef.current.style.backgroundColor = "transparent"
        props.onSubmit(e.target.name, e.target.value);
    }
    //-------------------------------------------------------------------
    // 4. Use to set state of InlineEdit.
    //-------------------------------------------------------------------
    const { asEmphasis } = props
    const getInput = (asEmphasis) => {
        if (asEmphasis === "multiLine") {
            return (
                <textarea
                    className={`qui-textarea-field ${props.asAligned}-aligned`}
                    value={input}
                    name={props.name}
                    ref={inputRef}
                    onFocus={changeFocus}
                    onBlur={changeBlur}
                    onChange={handleChange}
                    onKeyDown={handleChange}
                    onInput={(e) => onInput(e.target)}
                />
            )
        }
        else {
            return (
                <input
                    className={`qui-input-field ${props.asAligned}-aligned`}
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
            <div className={`${quommonClasses.childClasses}`}>
                {getInput(asEmphasis)}
            </div>
        </motion.div>
    );
}