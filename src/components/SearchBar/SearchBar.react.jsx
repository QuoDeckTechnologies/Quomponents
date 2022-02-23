import React, { useEffect, useState, useRef } from "react";
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
    Use to define standard component type
    */
    asVariant: PropTypes.oneOf([
        "primary",
        "secondary",
        "success",
        "warning",
        "error",
    ]),
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
    Use to toggle the component having expandable effect or not
    */
    isClosed: PropTypes.bool,
    /**
    SearchBar component must have the onClick function passed as props
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
    asVariant:"primary",
    asFloated: "left", //Please do not set it inline for expandle search bar. You can set inline for static search bar.
    asSize: "normal",

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
- props are not being passed to the SearchBar. Please speak to the admin to handle any new prop.
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

    //-------------------------------------------------------------------
    // 3. Handle Enter and Button Press Events
    //-------------------------------------------------------------------
    const [expandable, setExpandable] = useState(false);

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleButtonPress();
        }
    }
    const handleButtonPress = () => {
        const value = document.getElementById("input").value;
        return props.onClick(value);
    }

    //-------------------------------------------------------------------
    // 4. Handle Open and Close Input box
    //-------------------------------------------------------------------
    function useOutsideAlerter(ref) {
        useEffect(() => {
            // Function for click event
            function handleOutsideClick(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setExpandable(false)
                }
            }

            // Adding click event listener
            document.addEventListener("click", handleOutsideClick);
            return () => document.removeEventListener("click", handleOutsideClick);
        }, [ref]);
    }

    const box = useRef(null);
    useOutsideAlerter(box);

    //-------------------------------------------------------------------
    // 5. Get Conditional Styling of Component
    //-------------------------------------------------------------------
    function searchBar(isClosed) {
        let searchBarStyle, inputStyle, iconStyle;
        if (isClosed) {
            if (props.isFluid === false) {
                if (expandable === false) {
                    searchBarStyle = "search-bar-child-container-closed";
                    inputStyle = "search-bar-input-closed";
                    iconStyle = "search-bar-icon-closed";
                }
            }
        }

        return (
            <div className={`search-bar-container`}
                onClick={() => { setExpandable(true) }}
                ref={box}
            >
                <div className={`search-bar-child-container ${searchBarStyle} `}>
                    <input
                        className={`search-bar-input-field ${inputStyle} `}
                        placeholder={searchPlaceHolder}
                        style={{ color: props.withColor?.textColor}}
                        id="input"
                        onKeyPress={handleKeyPress}
                    />
                    <button
                        aria-label="Search-Icon"
                        className={`search-bar-icon ${iconStyle} variant-${props.asVariant}`}
                        onClick={handleButtonPress}
                        style={{ backgroundColor: props.withColor?.backgroundColor }}
                    >
                        <i className={props.withIcon?.icon}></i>
                    </button>
                    <div className={`search-bar-expand-effect`}
                        style={{ display: props.isClosed ? expandable ? "none" : "flex" : "none" }}>
                    </div>
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