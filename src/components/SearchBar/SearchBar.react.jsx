import React, { useState } from "react";
import PropTypes from "prop-types";
import {
    getQuommons,
    getTranslation,
} from "../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "../../common/stylesheets/overrule.scss";
import "../SearchBar/SearchBar.scss"

SearchBar.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================

    placeHolder: PropTypes.string.isRequired,


    //=======================================
    // Quommon props
    //=======================================


    /**
    Use to float the component in parent container
    */
    asFloated: PropTypes.oneOf(["left", "right", "inline"]),
    /**
    Use to override component colors and behavior
    */
    withColor: PropTypes.shape({
        textColor: PropTypes.string,
    }),
    /**
    Use to add an icon to the component
    */
    withIcon: PropTypes.shape({
        icon: PropTypes.string,
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
    Use to toggle the component taking the full width of the parent container
    */
    isFluid: PropTypes.bool,
    /**
    Use to toggle the component having expandable property or not
    */
    isClosed: PropTypes.bool,
    /**
    OverlayMenu component must have the onClick function passed as props
    */
    onClick: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    placeHolder: "Search...",

    //=======================================
    // Quommon props
    //=======================================
    asFloated: "left", //Please do not set it inline for expandle search bar. You can set inline for static search bar.

    withColor: null,
    withIcon: null,
    withTranslation: null,

    isHidden: false,
    isDisabled: false,
    isFluid: false,
    isClosed: false
};
/**
## Notes
- The design system used for this component is fontawesome Icons
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- props are not being passed to the OverlayMenu. Please speak to the admin to handle any new prop.
**/
export default function SearchBar(props) {
    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props);

    //-------------------------------------------------------------------
    // 2. Get translation of the component
    //-------------------------------------------------------------------
    let searchPlaceHolder = props.placeHolder;
    let tObj = null
    if (
        props.withTranslation?.lang &&
        props.withTranslation.lang !== "" &&
        props.withTranslation.lang !== "en"
    ) tObj = getTranslation(props.withTranslation);
    if (tObj && props.placeHolder && props.placeHolder !== "") {
        searchPlaceHolder = tObj.placeHolder;
    }

    const [expandable, setExpandable] = useState(false);

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            const value = document.getElementById("input").value;
            return value;
        }
    }
    const handleButtonPress = () => {
        const value = document.getElementById("input").value;
        return value;
    }

    function searchBar(isClosed) {
        let searchBarContainer, searchBarStyle, inputStyle, iconStyle;
        if (isClosed) {
            if (props.isFluid === false) {
                if (expandable === false) {
                    searchBarContainer = "container";
                    searchBarStyle = "child-container-closed";
                    inputStyle = "input-closed";
                    iconStyle = "icon-closed";
                }
            }
        }


        return (
            <div className={`container ${searchBarContainer} `}
                onClick={() => { setExpandable(true) }}

            >
                <div className={`child-container ${searchBarStyle}`}>
                    <input
                        className={`input-field ${inputStyle}`}
                        placeholder={searchPlaceHolder}
                        style={{ color: props.withColor?.textColor }}
                        id="input"
                        onKeyPress={handleKeyPress}
                        onBlur={() => { setExpandable(false) }}
                    />

                    <button className={`icon ${iconStyle}`} onClick={handleButtonPress}
                    >
                        <i

                            className={props.withIcon?.icon}
                            style={{ fontSize: props.withIcon?.size }}
                        ></i>
                    </button>

                </div>
            </div>
        )
    }

    return (
        <div className={`qui ${quommonClasses.parentClasses}`}>
            <div className={`${quommonClasses.childClasses}`}>
                {searchBar(props.isClosed)}
            </div>
        </div>
    )
}