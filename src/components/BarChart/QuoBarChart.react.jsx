import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
    Tooltip,
    BarChart,
    XAxis,
    Bar,
    Cell,
    ResponsiveContainer
} from "recharts";
import {
    getQuommons,
    getTranslation,

} from "../../common/javascripts/helpers";
import "../../common/stylesheets/common.css";
import "./QuoBarChart.scss";
import "../../common/stylesheets/overrule.scss";

QuoBarChart.propTypes = {
    //=======================================
    // component specific props
    //=======================================
    /**
       Barchart data should be passed in content field and it is required field  
      */
    activeMonth: PropTypes.string,
    data: PropTypes.array,
    //=======================================
    // Quommon props
    //=======================================
    /**
    Use to set Colors for accent line
    */
    withColor: PropTypes.shape({
        activeBarColor: PropTypes.string,
        barColor: PropTypes.string,
        backgroundColor: PropTypes.string,
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

};

QuoBarChart.defaultProps = {
    activeMonth: "January",
    data: [{}],
    //============================
    // Quommon props
    //=======================================
    withColor: null,
    withTranslation: null,
    isHidden: false,
};
/**
## Notes
- The design system used for this component is recharts
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function QuoBarChart(props) {
    let { data, withColor } = props;
    let [posData, setposData] = useState({});
    const [newData, setNewData] = useState({ data, activeIndex: 0 });

    //-------------------------------------------------------------------
    // Translate the text objects in case their is a dictionary provided
    //-------------------------------------------------------------------
    let monthName = props.activeMonth
    let activePlayers = "Active Players"
    if (
        props.withTranslation?.lang &&
        props.withTranslation.lang !== "" &&
        props.withTranslation.lang !== "en"
    ) {
        let tObj = getTranslation(props.withTranslation);
        if (tObj && props.activeMonth && props.activeMonth !== "") {
            if (monthName === "January") monthName = tObj.months.january
            if (monthName === "February") monthName = tObj.months.february
            if (monthName === "March") monthName = tObj.months.march
            if (monthName === "April") monthName = tObj.months.april
            if (monthName === "May") monthName = tObj.months.may
            if (monthName === "June") monthName = tObj.months.june
            if (monthName === "July") monthName = tObj.months.july
            if (monthName === "August") monthName = tObj.months.august
            if (monthName === "September") monthName = tObj.months.september
            if (monthName === "October") monthName = tObj.months.october
            if (monthName === "November") monthName = tObj.months.november
            if (monthName === "December") monthName = tObj.months.december
        }
        if (tObj && activePlayers !== "") {
            activePlayers = tObj.activePlayers
        }
    }
    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "bar-chart");
    quommonClasses.childClasses += ` variant-${props.asVariant}-text`;

    const customTooltip = ({ payload }) => {
        return (
            <div className="qui-custom-tooltip">
                <div className={`qui-tooltip-tringle`}>
                    <div className={`qui-custom-tooltip-arrow`} />
                </div>
                <i className="fas fa-users"></i>
                <p className="qui-bar-player-count">{`${payload[0]?.value}`}</p>
            </div>
        );
        return null;
    };
    const handleClick = (i) => {
        let temp = {
            ...newData
        }
        temp.activeIndex = i
        setNewData(temp)
    }
    // ========================= Render Function =================================
    return (
        <div className="qui-barchart-container" style={{ backgroundColor: withColor?.backgroundColor }}>
            <p className="qui-barchart-active-month">{monthName}</p>
            <p className="qui-barchart-active-players">{activePlayers}</p>
            <ResponsiveContainer height={500} >
                <BarChart
                    data={data}
                    margin={{
                        top: 110,
                        right: 40,
                        left: 40,
                        bottom: 5,
                    }}
                    barSize={50}
                >
                    <XAxis
                        tickLine={false}
                        axisLine={false}
                        dataKey="date"
                        scale="point"
                        padding={{ left: 10, right: 10 }}
                    />
                    <Tooltip
                        position={{ x: posData.x - 20, y: posData.y - 60 }}
                        content={customTooltip} />
                    <Bar
                        radius={10}
                        onMouseOver={(data) => {
                            setposData(data);
                        }}
                        dataKey="activePlayer"
                        onClick={(data, i) => handleClick(i)}
                    >
                        {newData.data.map((entry, index) => (
                            <Cell
                                key={`cell-${index + 1}`}
                                fill={index === newData.activeIndex ? withColor?.activeBarColor : withColor?.barColor}
                            />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
