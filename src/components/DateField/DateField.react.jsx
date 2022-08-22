import { React, useState, useRef } from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { motion } from "framer-motion";
import {
  getAnimation,
  getQuommons,
  getTranslation,
} from "../../common/javascripts/helpers";
import "../../common/stylesheets/common.css";
import "./DateField.scss";
import "../../common/stylesheets/overrule.scss";

DateField.propTypes = {
  /**
  Use to define label in DateField component
  */
  label: PropTypes.string,
  //=======================================
  // Quommon props
  //=======================================
  /**
  Use to define component size in increasing order
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
  Use to float the component in parent container
  */
  asFloated: PropTypes.oneOf(["left", "right", "none", "inline"]),
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
  Use to toggle the component taking the full width of the parent container
  */
  isFluid: PropTypes.bool,
  /**
  DateField component must have the onChange function passed as props
  */
  onChange: PropTypes.func.isRequired,
};

DateField.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  label: "",
  //=======================================
  // Quommon props
  //=======================================
  asSize: "normal",
  asFloated: "none",
  withColor: null,
  withAnimation: null,
  withTranslation: null,
  isHidden: false,
  isDisabled: false,
  isFluid: false,
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
  }
  //-------------------------------------------------------------------
  // 3. Use to set Color in DateField
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
  let label = props.label;
  if (
    props.withTranslation?.lang &&
    props.withTranslation.lang !== "" &&
    props.withTranslation.lang !== "en"
  ) {
    tObj = getTranslation(props.withTranslation);
    label = tObj?.label || props.label;
  }
  //-------------------------------------------------------------------
  // 5. Get animation of the component
  //-------------------------------------------------------------------
  const animate = getAnimation(props);
  //-------------------------------------------------------------------
  // 6. Get custom input in the component
  //-------------------------------------------------------------------
  const Input = ({ onChange, value, onClick }) => (
    <input
      className="qui-date-field-date-picker"
      onChange={onChange}
      placeholder={"dd/MM/yyyy hh:mm aaa"}
      value={value}
      onClick={onClick}
    />
  );
  // ========================= Render Function =================================
  return (
    <motion.div
      initial={animate.from}
      animate={animate.to}
      className={`qui ${quommonClasses.parentClasses}`}
    >
      <div
        className={`qui-date-field-container ${quommonClasses.childClasses}`}
      >
        <div className="qui-date-field" style={Color}>
          <div className="qui-date-field-label qt-sm">{label}</div>
          <div>
            <i
              className={`far fa-calendar qui-calendar-icon`}
              onClick={() => handleClickDatepickerIcon()}
            ></i>
            <DatePicker
              customInput={<Input />}
              className="qui-date-field-date-picker"
              selected={startDate}
              onChange={(date) => {
                props.onChange(date);
                setStartDate(date);
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
              popperProps={{ strategy: "fixed" }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
