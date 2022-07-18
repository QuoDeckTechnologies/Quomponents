// Import npm packages
import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {
    getAnimation,
    getQuommons,
} from "../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./Calendar.scss";
import "../../common/stylesheets/overrule.scss";

Calender.propTypes = {

    defaultDate: PropTypes.string,

    //=======================================
    // Quommon props
    //=======================================
    /**
    Use to define component padding in increasing order
    */
    asPadded: PropTypes.oneOf(["fitted", "compact", "normal", "relaxed"]),
    /**
    Use to float the component in parent container
    */
    asFloated: PropTypes.oneOf(["left", "right", "none", "inline"]),
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
    Use to enable/disable the component
    */
    isDisabled: PropTypes.bool,
    /**
    Use to show/hide the component
    */
    isHidden: PropTypes.bool,
    /**
    Calendar component have the onDateChange function passed as props
    */
    onDateChange: PropTypes.func,
    /**
    Calendar component have the onMonthChange function passed as props
    */
    onMonthChange: PropTypes.func,
    /**
    Calendar component have the onYearChange function passed as props
    */
    onYearChange: PropTypes.func,
};

Calender.defaultProps = {

    defaultDate: null,

    //=======================================
    // Quommon props
    //=======================================
    asPadded: "normal",
    asFloated: "left",
    withAnimation: null,
    isDisabled: false,
    isHidden: false,
};

/**
## Notes
- The design system used for this component is Fontawesome Icon
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function Calender(props) {

    const [value, onChange] = useState(new Date(props.defaultDate));

    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "calendar");
    //-------------------------------------------------------------------
    // 2. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props);

    // ========================= Render Function =================================
    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui ${quommonClasses.parentClasses}`}
        >
            <div className={`qui-calendar-container ${quommonClasses.childClasses}`}>
                <Calendar
                    onChange={onChange}
                    onClickDay={props.onDateChange}
                    onClickMonth={props.onMonthChange}
                    onClickYear={props.onYearChange}
                    defaultValue={value}
                />
            </div>
        </motion.div>
    );
}
