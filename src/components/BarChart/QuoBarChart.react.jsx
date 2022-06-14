import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
    Tooltip,
    BarChart,
    XAxis,
    Bar,
    Cell,
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
      Barchart active month should be passed 
     */
    activeMonth: PropTypes.string,
    /**
       Barchart data should be passed in content field 
      */
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
    const [newData, setNewData] = useState({ data, activeIndex: 0 });
    const [width, setWidth] = useState(window.innerWidth <= 481 ? window.innerWidth * 0.94 : window.innerWidth <= 834 ? window.innerWidth * 0.96 : window.innerWidth * 0.97)
    const [position, setPosition] = useState(null);

    const resizeHandler = () => {
        if (window.innerWidth <= 481) {
            setWidth(window.innerWidth * 0.94)
        } if (window.innerWidth <= 834) {
            setWidth(window.innerWidth * 0.96)
        } else {
            setWidth(window.innerWidth * 0.97)
        }
    }
    useEffect(() => {
        window.addEventListener("resize", resizeHandler);
        return () => {
            window.removeEventListener("resize", resizeHandler);
        };
    }, []);
    useEffect(() => {
        const tooltip = document.querySelector(".recharts-tooltip-wrapper");
        if (!tooltip) return;
        const tooltipHeight = tooltip.getBoundingClientRect().height;
        const tooltipWidth = tooltip.getBoundingClientRect().width;
        const spaceForLittleTriangle = 10;
        tooltip.style = `
      transform: translate(${position?.data.x}px, ${position?.data.y}px);
      pointer-events: none;  position: absolute;
      top: -${tooltipHeight + spaceForLittleTriangle + 15}px;
      left: -${tooltipWidth / 2 - position?.data.width / 2}px;
   
      transition: all 400ms ease 0s;
    `;
    }, [position]);
    //-------------------------------------------------------------------
    // Translate the text objects in case their is a dictionary provided
    //-------------------------------------------------------------------
    let monthName = props.activeMonth
    let activePlayers = "Active Players"
    let tObj = getTranslation(props.withTranslation);
    const getMonthName = (monthName) => {
        if (tObj) {
            return tObj.months[monthName.toLowerCase()]
        } else {
            return monthName
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
            <p className="qui-barchart-active-month">{getMonthName(monthName)}</p>
            <p className="qui-barchart-active-players">{activePlayers}</p>
            <BarChart
                width={width}
                height={500}
                data={data}
                margin={{
                    top: 110,
                    right: 30,
                    left: window.innerWidth <= 540 ? 15 : 30,
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
                    position={{
                        x: position?.data.x ?? 30,
                        y: position?.data.y ?? 30
                    }}
                    content={customTooltip} />
                <Bar
                    className="qui-bar"
                    radius={10}
                    onMouseOver={(data) => setPosition({ data: data, show: true })}
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
        </div>
    );
}
