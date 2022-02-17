import React, { useState } from "react";
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
      Use to define component text and icon size in increasing order
    */
    content: PropTypes.string.isRequired,
    //=======================================
    // Quommon props
    //=======================================
    /**
      Use to define component text and icon size in increasing order
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
    asFloated: PropTypes.oneOf(["left", "right", "none", "inline"]),
    /**
    Use to align content within the component container
    */
    asAligned: PropTypes.oneOf(["left", "right", "center"]),
    /**
      Use to set Accent Color and Text Color 
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
};

InlineEdit.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    content: "",
    //=======================================
    // Quommon props
    //=======================================
    asSize: "normal",
    asPadded: "normal",
    asFloated: "none",
    asAligned: "center",

    withColor: null,
    withAnimation: null,

    isHidden: false,
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
    let quommonClasses = getQuommons(props);
    //-------------------------------------------------------------------
    // 2. Declaration of Input's value
    //-------------------------------------------------------------------
    const [input, setInput] = useState(props.content)
    //-------------------------------------------------------------------
    // 3. Use to set styling of input tag.
    //-------------------------------------------------------------------
    let Color = {
        backgroundColor: props.withColor?.backgroundColor,
        color: props.withColor?.textColor,
    };

    const changeFocus = (event) => {
        let inp = event.target.id
        document.getElementById(inp).setAttribute("style", `border-color:${props.withColor?.accentColor}`)
    }
    //-------------------------------------------------------------------
    // 4. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);
    // ========================= Render Function =================================
    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui ${quommonClasses.parentClasses}`}
        >
            <div className={`qui-input-container`}>
                <input
                    id={1}
                    className={`qui-input-field ${quommonClasses.childClasses}`}
                    value={input}
                    onFocus={(e) => changeFocus(e)}
                    onChange={(e) => setInput(e.target.value)}
                    style={Color}
                />
            </div>
        </motion.div>
    );
}


