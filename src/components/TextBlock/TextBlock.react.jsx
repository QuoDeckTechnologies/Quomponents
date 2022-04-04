// Import npm packages
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
    getQuommons,
    getAnimation,
} from "../../common/javascripts/helpers";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./TextBlock.scss";
import "../../common/stylesheets/overrule.scss";

TextBlock.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    Opacity used to set the background opacity of the text block
    */
    opacity: PropTypes.string,
    /**
    toggle the conversation prop to see the component as chat conversation
    */
    conversation: PropTypes.bool,
    /**
    TextBlock Text has to be in content or passed as string to the component.
    */
    content: PropTypes.string,

    /**
    Use to toggle position of text-block conversation
    */
    position: PropTypes.oneOf([
        "right-top",
        "right-bottom",
        "left-top",
        "left-bottom",
    ]),
    // Quommon props
    //=======================================
    /**
    Use to float the component in parent container
    */
    asFloated: PropTypes.oneOf(["left", "right", "inline"]),
    /**
    Use to define component text size in increasing order
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
    Use to override component colors and behavior
    */
    withColor: PropTypes.shape({
        backgroundColor: PropTypes.string,
        textColor: PropTypes.string,
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
            ""
        ]),
        duration: PropTypes.number,
        delay: PropTypes.number,
    }),
    /**
    Use to show/hide the component
    */
    isHidden: PropTypes.bool,
};

TextBlock.defaultProps = {
    // Component Specific props
    //=======================================
    content: "",
    opacity: "",
    position: "left-top",
    conversation: false,
    // Quommon props
    //=======================================
    asFloated: "inline",
    asSize:"normal",

    withColor: null,
    withAnimation: null,

    isHidden: false,
    isDisabled: false,
};
/**
## Notes
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- TextBlock component can be used as the conversation or just a block with content.
- Conversation props passed as true/false
**/
export default function TextBlock(props) {
    let { content } = props
    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "text-block");
    //-------------------------------------------------------------------
    // 2. Get custom styling 
    //-------------------------------------------------------------------
    const getArrowPosition = (position) => {
        if (position === "right-bottom") {
            return "qui-arrow-right-bottom";
        }
        if (position === "left-bottom") {
            return "qui-arrow-left-bottom";
        }
        if (position === "right-top") {
            return "qui-arrow-right-top";
        } else {
            return "qui-arrow-left-top";
        }
    };
    //-------------------------------------------------------------------
    // 3. Use to set Color in text-block
    //-------------------------------------------------------------------
    let componentStyle = {
        mainContainer: {
            backgroundColor: props.withColor?.backgroundColor,
            color: props.withColor?.textColor,
        }
    };
    //-------------------------------------------------------------------
    // 4. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);

    // ========================= Render Function =================================
    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui qui-text-block-container ${quommonClasses.parentClasses}`}
        >
            <div className={`qui-text-block-area ${quommonClasses.childClasses} `} style={{ ...componentStyle.mainContainer, opacity: props.opacity }}>
            </div>
            <div className={`qui-block-text size-${props.asSize}`} style={{ ...componentStyle.mainContainer }}>
                {content}
            </div>
            {props.conversation && <div className={`qui-text-block-tringle size-${props.asSize}`}>
                <div className={`qui-text-block-chat-arrow ${getArrowPosition(props.position)}`}
                    style={{
                        opacity: props.opacity,
                        borderRightColor: props.withColor.backgroundColor,
                        borderLeftColor: props.withColor.backgroundColor
                    }}>
                </div>
            </div>}
        </motion.div >
    );
}
