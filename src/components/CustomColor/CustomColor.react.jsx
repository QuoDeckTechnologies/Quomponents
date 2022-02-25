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
    Use to align content within the component container
    */
    asAligned: PropTypes.oneOf(["left", "right", "center"]),

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
    asAligned: "center",

    withColor: null,
    withAnimation: null,
    withTranslation: null,

    isHidden: false,
    isDisabled: false,
    isFluid: false,
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

    let quommonClasses = getQuommons(props, "button");
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

    const [color, setColor] = useState("#18CB3C");
    const [showColorPicker, setshowColorPicker] = useState(false);

    // ========================= Render Function =================================

    return (
        <div className={`qui ${quommonClasses.parentClasses}`}>
            <div className={`custom-color ${quommonClasses.childClasses}`}>
                <div className="color-picker">
                    <button
                        className="qui-color-picker-button "
                        style={{ backgroundColor: color }}
                        onClick={() =>
                            setshowColorPicker(showColorPicker => !showColorPicker)
                        }
                    >
                        {showColorPicker}
                    </button>
                    <div className="qui-color-picker-title">{labelContent?.title}</div>
                    {showColorPicker && (
                        <div className="qui-chrome-picker-container"
                            onClick={() => setshowColorPicker(false)}>
                            <ChromePicker
                                color={color}
                                onChange={updateColor => setColor(updateColor.hex)}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
