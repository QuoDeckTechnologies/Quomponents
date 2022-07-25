// Import npm packages
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { getQuommons } from "../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./ProgressBar.scss";
import "../../common/stylesheets/overrule.scss";

ProgressBar.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    Below are additional props that are used in the ProgressBar
    */
    leftIcon: PropTypes.string,
    rightIcon: PropTypes.string,
    totalSlides: PropTypes.number,
    activeSlide: PropTypes.number,
    enableLeftNavigation: PropTypes.bool,
    enableRightNavigation: PropTypes.bool,
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
    Use to define component padding in increasing order
    */
    asPadded: PropTypes.oneOf(["fitted", "compact", "normal", "relaxed"]),
    /**
    Use to float the component in parent container
    */
    asFloated: PropTypes.oneOf(["left", "right", "none", "inline"]),
    /**
    Use to override component colors and behavior
    */
    withColor: PropTypes.shape({
        accentColor: PropTypes.string,
        backgroundColor: PropTypes.string,
        textColor: PropTypes.string,
        hoverTextColor: PropTypes.string,
    }),
    /**
    Use to enable/disable the component
    */
    isDisabled: PropTypes.bool,
    /**
    Use to show/hide the component
    */
    isHidden: PropTypes.bool,
    /**
    Use to toggle the component taking the full width of the parent container
    */
    isFluid: PropTypes.bool,
};

ProgressBar.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    leftIcon: "",
    rightIcon: "",
    totalSlides: 5,
    activeSlide: 1,
    enableLeftNavigation: false,
    enableRightNavigation: false,
    //=======================================
    // Quommon props
    //=======================================
    asVariant: "primary",
    asPadded: "normal",
    asFloated: "none",

    withColor: null,

    isHidden: false,
    isDisabled: false,
    isFluid: false,
};
/**
## Notes
- The design system used for this component is Fontawesome Icon
- The design system used for this component is HTML and CSS
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function ProgressBar(props) {
    //-------------------------------------------------------------------
    // 1. Destructuring props
    //-------------------------------------------------------------------
    const { withColor,
        leftIcon,
        rightIcon,
        totalSlides,
        activeSlide,
        enableLeftNavigation,
        enableRightNavigation,
    } = props;
    //-------------------------------------------------------------------
    // 2. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "progressbar");
    quommonClasses.childClasses += ` variant-${props.asVariant}-text`;
    //-------------------------------------------------------------------
    // 3. Use to set styling for ProgressBar
    //-------------------------------------------------------------------
    const [currentIndex, setCurrentIndex] = useState(activeSlide);

    useEffect(() => {
        setCurrentIndex(activeSlide)
    }, [activeSlide])

    function increment() {
        if (totalSlides !== currentIndex) {
            setCurrentIndex(nextState => nextState + 1)
        }
    }

    function decrement() {
        if (currentIndex !== 1) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }

    let rightArrowStyle = {
        color: (currentIndex === totalSlides) && (enableRightNavigation) ? "#aaaaaa" : withColor?.accentColor
    }

    let leftArrowStyle = {
        color: (currentIndex === 1) && (enableLeftNavigation) ? "#aaaaaa" : withColor?.accentColor
    }
    // ========================= Render Function =================================
    return (
        <div
            className={`qui ${quommonClasses.parentClasses}`}
            style={{ backgroundColor: withColor?.backgroundColor }}
        >
            <div className={`qui-progressbar${quommonClasses.childClasses}`}>
                <div>
                    <i
                        className={`qui-progressbaricons ${leftIcon ? leftIcon : "fa fa-arrow-alt-circle-left"}`}
                        style={leftArrowStyle}
                        onClick={() => decrement()}
                    />
                </div>
                <div className="qui-progressbarmiddle">
                    {_.times(totalSlides, (index) => {
                        return (
                            <div
                                className="qui-currentstep"
                                key={index}
                                style={currentIndex >= index + 1 ? { backgroundColor: withColor?.hoverTextColor } : { backgroundColor: withColor?.textColor }}
                            >
                            </div>
                        )
                    })}
                </div>
                <div>
                    <i className={`qui-progressbaricons ${rightIcon ? rightIcon : "fa fa-arrow-alt-circle-right"}`}
                        style={rightArrowStyle}
                        onClick={() => increment()}
                    />
                </div>
            </div>
        </div >
    );
}