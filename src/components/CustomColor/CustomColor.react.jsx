import React, { useState, useEffect, useRef } from "react";
import { ChromePicker } from "react-color";
import PropTypes from "prop-types";
import {
    getQuommons,
    getTranslation,
} from "../../common/javascripts/helpers";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./CustomColor.scss";
import "../../common/stylesheets/overrule.scss";

CustomColor.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================

    /**
    CustomColor Text has to be in content or passed as children to the component. 
    */
    content: PropTypes.shape({
        color: PropTypes.string,
        title: PropTypes.string,
    }).isRequired,


    // Quommon props
    //=======================================

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

};

CustomColor.defaultProps = {
    // Component Specific props
    //=======================================

    content: {},
    // Quommon props
    //=======================================
    asSize: "normal",

    withColor: null,
    withAnimation: null,
    withTranslation: null,

    isHidden: false,
    isDisabled: false,
};

/**
## Notes
- The design system used for this component is Material UI (@mui/material)
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function CustomColor(props) {

    //-------------------------------------------------------------------
    // 1. Destructuring content from props
    //-------------------------------------------------------------------
    let { content } = props;
    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------

    let quommonClasses = getQuommons(props, "custom-color");
    if (props.isCircular)
        quommonClasses.childClasses += ` is-circular ${props.content === "" && props.withIcon ? "is-only-icon" : ""
            }`;

    quommonClasses.childClasses += ` emp-${props.asEmphasis}`;

    //-------------------------------------------------------------------
    // 4. Get translation of the component
    //-------------------------------------------------------------------
    let labelContent = {
        title: content?.title,
    };
    let tObj = null;

    if (
        props.withTranslation?.lang &&
        props.withTranslation.lang !== "" &&
        props.withTranslation.lang !== "en"
    ) {
        tObj = getTranslation(props.withTranslation);
        if (labelContent && tObj) {
            labelContent.title = tObj.title;
        }
    }
    const ref = useRef()
    const [color, setColor] = useState("#fff");
    const [showColorPicker, setshowColorPicker] = useState(false);

    useEffect(() => {
        const checkIfClickedOutside = e => {
            if (showColorPicker && ref.current && !ref.current.contains(e.target)) {
                setshowColorPicker(false)
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [showColorPicker])
    const closePicker = e => {
        if(ref.current === e.target){
            setshowColorPicker(true)
        }else{
            setshowColorPicker(false)
        }
    }
    console.log(closePicker)
    // ========================= Render Function =================================

    return (
        <div className={`qui ${quommonClasses.parentClasses}`} ref={ref}>
            <div className={`qui-custom-color-container ${quommonClasses.childClasses}`}>
                <div className="qui-custom-color-button-container">
                    <button
                        className="qui-custom-color-button"
                        style={{ backgroundColor:color }}
                        onClick={() => setshowColorPicker(showColorPicker => !showColorPicker)} />
                    <div className="qui-custom-color-title">{labelContent?.title}</div>
                </div>
                <div className="qui-chrome-picker-container">
                    {showColorPicker && (
                        <ChromePicker
                            className="qui-chrome-picker"
                            color={color}
                            onChange={updateColor => setColor(updateColor.hex)}
                        />
                    )}
                </div>

            </div>
        </div>
    );
}
