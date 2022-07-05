import React, { useState } from "react";
import PropTypes from "prop-types";
import { Select, MenuItem } from "@mui/material";
import { motion } from "framer-motion";
import _ from "lodash";
import {
    getAnimation,
    getQuommons,
    getTranslation,
} from "../../common/javascripts/helpers";
import "../../common/stylesheets/common.css";
import "./SelectField.scss";
import "../../common/stylesheets/overrule.scss";

SelectField.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    Use to define Content in component
    */
    content: PropTypes.shape({
        label: PropTypes.string,
        categoryOptions: PropTypes.array,
        placeHolder: PropTypes.string,
    }
    ).isRequired,
    //=======================================
    // Quommon props
    //=======================================
    /**
    Use to define component padding in increasing order
    */
    asPadded: PropTypes.oneOf(["fitted", "compact", "normal", "relaxed"]),
    /**
    Use to override component colors and behavior
    */
    withColor: PropTypes.shape({
        backgroundColor: PropTypes.string,
        accentColor: PropTypes.string,
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
    SelecField component must have the onClick function passed as props
    */
    onClick: PropTypes.func.isRequired,
};

SelectField.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    content: [],
    //=======================================
    // Quommon props
    //=======================================
    asPadded: "normal",

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
- MUI props are not being passed to the Select and MenuItem. Please speak to the admin to handle any new MUI prop.
**/
export default function SelectField(props) {
    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "select-field");
    //-------------------------------------------------------------------
    // 2. Declaration of SelectField's value
    //-------------------------------------------------------------------
    const [selectValue, setSelectValue] = useState("none");

    const handleChange = (e) => {
        setSelectValue(e.target.value);
        props.onClick(e.target.value);
    };
    //-------------------------------------------------------------------
    // 3. Use to set Color in SelectField
    //-------------------------------------------------------------------
    let Color = {
        backgroundColor: props.withColor?.backgroundColor,
        color: props.withColor?.textColor,
        borderBottomColor: `${props.withColor?.accentColor}`,
    };

    //-------------------------------------------------------------------
    // 4. Get translation of the component
    //-------------------------------------------------------------------
    let tObj = null;
    let label = props.content?.label;
    let placeHolder = props.content?.placeHolder;
    if (
        props.withTranslation?.lang &&
        props.withTranslation.lang !== "" &&
        props.withTranslation.lang !== "en"
    ) {
        tObj = getTranslation(props.withTranslation)
        label = tObj?.label || props.content?.label
        placeHolder = tObj?.placeHolder || props.content?.placeHolder;
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
            <div className={`qui-select-field-container ${quommonClasses.childClasses}`} style={Color}>
                <div className="qui-select-field">
                    <div className="qui-select-field-label">
                        {label}
                    </div>
                    <Select className="qui-select-field-select"
                        defaultValue="none"
                        value={selectValue}
                        onChange={handleChange}
                        sx={{
                            '.MuiSelect-icon': {
                                color: props.withColor?.textColor
                            },
                            ".MuiSelect-outlined": {
                                color: props.withColor?.textColor
                            }
                        }}
                    >
                        <MenuItem disabled value="none" >
                            <div className="qui-select-field-menu-item">
                                {placeHolder}
                            </div>
                        </MenuItem>
                        {props.content?.categoryOptions?.map((option) => (
                            <MenuItem
                                key={option}
                                value={option}
                            >
                                <div className="qui-select-field-menu-item">
                                    {(_.startCase(option))}
                                </div>
                            </MenuItem>
                        ))}
                    </Select>
                </div>
            </div >
        </motion.div >
    );
}