import React, { useState, useEffect, useRef } from "react";
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
} from "../../common/javascripts/helpers";
import "../../common/stylesheets/common.css";
import "./QuoBarChart.scss";
import "../../common/stylesheets/overrule.scss";

QuoBarChart.propTypes = {
    //=======================================
    // component specific props
    //=======================================
    /**
      Barchart Title should be passed 
     */
    title: PropTypes.string,
    /**   /**
      Barchart subtitle hould be passed 
     */
    subtitle: PropTypes.string,
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
    Use to show/hide the component
    */
    isHidden: PropTypes.bool,

};

QuoBarChart.defaultProps = {
    title: "January",
    subtitle: "Active Player",
    data: [{}],
    //============================
    // Quommon props
    //=======================================
    withColor: null,
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
    const [width, setWidth] = useState(window.innerWidth <= 481 ? window.innerWidth * 2 : window.innerWidth <= 834 ? window.innerWidth * 1.5 : window.innerWidth * 1.5)
    const [height, setHeight] = useState(window.innerHeight <= 600 ? 150 : window.innerHeight <= 900 ? 220 : 300)
    const [position, setPosition] = useState(null);

    const resizeWidth = () => {
        if (window.innerWidth <= 481) {
            setWidth(window.innerWidth * 2)
        } if (window.innerWidth <= 834) {
            setWidth(window.innerWidth * 1.5)
        } else {
            setWidth(window.innerWidth * 1.5)
        }
    }
    useEffect(() => {
        window.addEventListener("resize", resizeWidth);
        return () => {
            window.removeEventListener("resize", resizeWidth);
        };
    }, []);

    const resizeHeight = () => {
        if (window.innerHeight <= 600) {
            setHeight(150)
        }
        if (window.innerHeight <= 900) {
            setHeight(220)
        } else {
            setHeight(300)
        }
    }
    useEffect(() => {
        window.addEventListener("resize", resizeHeight);
        return () => {
            window.removeEventListener("resize", resizeWidth);
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
    const ref = useRef(null);
    // ========================= Render Function =================================
    return (
        <div className="qui-barchart-container" style={{ backgroundColor: withColor?.backgroundColor }}>
            <h3 className="qui-barchart-active-month">{props?.title}</h3>
            <h5 className="qui-barchart-active-players">{props?.subtitle}</h5>
            <BarChart
                width={width}
                height={height}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: window.innerWidth <= 540 ? 15 : 30,
                    bottom: 5,
                }}
                barSize={window.innerWidth <= 540 ? 40 : 50}
                barGap={50}
            >
                <XAxis
                    tickLine={false}
                    axisLine={false}
                    dataKey="label"
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
                    dataKey="count"
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
