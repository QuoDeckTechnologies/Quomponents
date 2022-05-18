import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
    getAnimation,
    getQuommons,
} from "../../common/javascripts/helpers";
import "../../common/stylesheets/common.css";
import "./SerialHelpDeskTableRow.scss";
import "../../common/stylesheets/overrule.scss";
import IconBlock from "../IconBlock/IconBlock.react"

SerialHelpDeskTableRow.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    Content props consist of all the data which are required for SerialHelpDeskTableRow component
    */
    content: PropTypes.shape({
        label: PropTypes.string,
        icon: PropTypes.string,
        date: PropTypes.string,
    }),
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
    Use to set Colors
    */
    withColor: PropTypes.shape({
        textColor: PropTypes.string,
        iconBlockAccentColor: PropTypes.string,
        iconBlockBackgroundColor: PropTypes.string
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
    SerialHelpDeskTableRow component must have the onClick function passed as props
    */
    onClick: PropTypes.func,
};

SerialHelpDeskTableRow.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    content: null,
    //=======================================
    // Quommon props
    //=======================================
    asVariant: "warning",

    withColor: null,
    withAnimation: null,

    isHidden: false,
};
/**
## Notes
- The design system used for this component is HTML and CSS
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function SerialHelpDeskTableRow(props) {
    //-------------------------------------------------------------------
    // 1. Destructuring content props
    //-------------------------------------------------------------------
    const { content, withColor } = props;
    //-------------------------------------------------------------------
    // 2. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "serial-helpdesk-table-row");
    quommonClasses.childClasses += ` variant-${props.asVariant}-text`;
    //-------------------------------------------------------------------
    // 3. Use to set SerialHelpDeskTableRow Color
    //-------------------------------------------------------------------
    let serialHelpDeskTableRowColors = {
        color: withColor?.textColor
    };
    let iconBlockColors = {
        accentColor: withColor?.iconBlockAccentColor,
        backgroundColor: withColor?.iconBlockBackgroundColor
    };
    //-------------------------------------------------------------------
    // 4. Use to date in SerialHelpDeskTableRow
    //-------------------------------------------------------------------
    let date = content?.date
        ? new Date(content?.date).toDateString()
        : new Date().toDateString();

    const getMonth = (month) => {
        return month;
    };
    //-------------------------------------------------------------------
    // 5. Function to handle date string
    //-------------------------------------------------------------------
    const getDate = () => {
        let dateSplit = date?.split(" ");
        let month = dateSplit[1];
        let currentDate = dateSplit[2];
        let year = dateSplit[3];
        return `${currentDate} ${getMonth(month)} ${year}`;
    };
    //-------------------------------------------------------------------
    // 6. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);
    // ========================= Render Function =================================
    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui ${quommonClasses.parentClasses}`}
        >
            <div className={`qui-serial-helpdesk-table-row-container ${quommonClasses.childClasses}`}>
                <div
                    className="qui-serial-helpdesk-table-row-label"
                    style={serialHelpDeskTableRowColors}
                >
                    {content?.label}
                </div>
                <div
                    className="qui-serial-helpdesk-table-row-date"
                    style={serialHelpDeskTableRowColors}
                >
                    {getDate()}
                </div>
                <div className="qui-serial-helpdesk-table-row-icon">
                    <IconBlock
                        withIcon={{
                            name: content?.icon,
                        }}
                        asPadded={"fitted"}
                        withColor={iconBlockColors}
                        onClick={props.onClick}
                    />
                </div>
            </div>
        </motion.div>
    );
}
