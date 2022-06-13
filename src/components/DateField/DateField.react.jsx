import { React, useState, useRef } from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { motion } from "framer-motion";
import {
    getAnimation,
    getQuommons,
} from "../../common/javascripts/helpers";
import "../../common/stylesheets/common.css";
import "./DateField.scss";
import "../../common/stylesheets/overrule.scss";

DateField.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    Use to define label in DateField component
    */
    label: PropTypes.string,
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
    Use to show/hide the component
    */
    isHidden: PropTypes.bool,
    /**
    Use to enable/disable the component
    */
    isDisabled: PropTypes.bool,
    /**
    DateField component must have the onClick function passed as props
    */
    onClick: PropTypes.func.isRequired,
};

DateField.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    label: "",
    //=======================================
    // Quommon props
    //=======================================
    asPadded: "normal",

    withColor: null,
    withAnimation: null,

    isHidden: false,
    isDisabled: false,
};
/**
## Notes
- The design system used for this component is React Datepicker (@react-datepicker)
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function DateField(props) {
    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "date-field");
    //-------------------------------------------------------------------
    // 2. Declaration of DateFiled's value
    //-------------------------------------------------------------------
    const [startDate, setStartDate] = useState(new Date());

    const datepicker = useRef();
    function handleClickDatepickerIcon() {
        const datepickerElement = datepicker.current;
        datepickerElement.setFocus(true);
    };
    //-------------------------------------------------------------------
    // 3. Use to set Color in DateField
    //-------------------------------------------------------------------
    let Color = {
        backgroundColor: props.withColor?.backgroundColor,
        color: props.withColor?.textColor,
        borderBottomColor: `${props.withColor?.accentColor}`,
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
            className={`qui ${quommonClasses.parentClasses}`}
        >
            <div className={`qui-date-field-container ${quommonClasses.childClasses}`} >
                <div className="qui-date-field" style={Color}>
                    <div className="qui-date-field-label">
                        {props.label}
                    </div>
                    <div>
                        <i className={`far fa-calendar qui-calendar-icon`}
                            onClick={() => handleClickDatepickerIcon()}
                        ></i>
                        <DatePicker
                            className="qui-date-field-date-picker"
                            selected={startDate}
                            onChange={(date) => {
                                props.onClick(date)
                                setStartDate(date)
                            }}
                            onKeyDown={(e) => {
                                e.preventDefault();
                            }}
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={1}
                            dateFormat="dd/MM/yyyy hh:mm aaa"
                            timeCaption="time"
                            showYearDropdown
                            dateFormatCalendar="MMMM"
                            scrollableYearDropdown
                            yearDropdownItemNumber={100}
                            ref={datepicker}
                            popperProps={{ strategy: 'fixed' }}
                        />
                    </div>
                </div>
            </div>
        </motion.div >
    );
}