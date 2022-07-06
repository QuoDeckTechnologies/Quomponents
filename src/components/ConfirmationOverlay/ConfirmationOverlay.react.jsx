import React from "react";
import PropTypes from "prop-types";
import {
    getQuommons,
    getTranslation,
    getAnimation,
} from "../../common/javascripts/helpers";
import { motion } from "framer-motion";

import Button from "../Buttons/Button/Button.react";
import ButtonGroup from '@mui/material/ButtonGroup';

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css"
import "./ConfirmationOverlay.scss";
import "../../common/stylesheets/overrule.scss";

ConfirmationOverlay.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================

    withConfirmation: PropTypes.shape({
        header: PropTypes.string,
        yes: PropTypes.string,
        no: PropTypes.string,
    }),


    //=======================================
    // Quommon props
    //=======================================

    /**
    Use to override component colors and behavior
    */
    withColor: PropTypes.shape({
        backgroundColor: PropTypes.string,
        textColor: PropTypes.string,
        confirmBackgroundColor: PropTypes.string,
        confirmTextColor: PropTypes.string,
        cancelBackgroundColor: PropTypes.string,
        cancelTextColor: PropTypes.string,
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
    Function to be called on acceptance event
    */
    onSubmit: PropTypes.func,
    /**
    Function to be called on denial event
    */
    onCancel: PropTypes.func,
};

ConfirmationOverlay.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================

    withConfirmation: null,

    //=======================================
    // Quommon props
    //=======================================
    withColor: null,
    withAnimation: null,
    withTranslation: null,

    isHidden: false,
    isDisabled: false,
};

function getColors(colors, state) {
    if (state === 'confirm') {
        return {
            backgroundColor: colors.confirmBackgroundColor,
            textColor: colors.confirmTextColor,
        }
    } else if (state === 'cancel') {
        return {
            backgroundColor: colors.cancelBackgroundColor,
            textColor: colors.cancelTextColor,
        }
    } else {
        return {
            background: colors.backgroundColor,
            color: colors.textColor,
        }
    }
}

/**
## Notes
- The design system used for this component is Material UI (@mui/material)
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- MUI props are not being passed to the button. Please speak to the admin to handle any new MUI prop.
**/

export default function ConfirmationOverlay(props) {
    let withConfirmation = props.withConfirmation;

    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "confirmation-overlay");

    function yesClick() {
        props.onSubmit()
    }

    function noClick() {
        props.onCancel()
    }

    //-------------------------------------------------------------------
    // 2. Translate the text objects in case their is a dictionary provided
    //-------------------------------------------------------------------
    if (
        props.withTranslation &&
        props.withTranslation.lang !== "" &&
        props.withTranslation.lang !== "en"
    ) {
        let tObj = getTranslation(props.withTranslation);
        withConfirmation = Object.assign(withConfirmation, tObj)
    }

    //-------------------------------------------------------------------
    // 3. Set the component colors
    //-------------------------------------------------------------------
    let mainColors = props.withColor ? getColors(props.withColor, 'main') : {},
        confirmColors = props.withColor ? getColors(props.withColor, 'confirm') : {},
        cancelColors = props.withColor ? getColors(props.withColor, 'cancel') : {};

    //-------------------------------------------------------------------
    // 4. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props);

    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui qui-confirmation-overlay-container ${quommonClasses.parentClasses}`}
            style={mainColors}
        >
            <h5 className="qui-overlay-header">
                {withConfirmation && withConfirmation.header ? withConfirmation.header : "Are you sure?"}
            </h5>
            <ButtonGroup className="qui-confirmation-overlay-group">
                <Button
                    asEmphasis="outlined"
                    content={withConfirmation && withConfirmation.yes ? withConfirmation.yes : "Yes"}
                    withColor={confirmColors}
                    onClick={yesClick}
                    asSize="big"
                />
                <Button
                    content={withConfirmation && withConfirmation.no ? withConfirmation.no : "No"}
                    onClick={noClick}
                    withColor={cancelColors}
                    asSize="big"
                />
            </ButtonGroup>
        </motion.div>
    );

}
