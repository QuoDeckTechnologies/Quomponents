import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {
    PieChart,
    Pie,
    Tooltip,
    BarChart,
    XAxis,
    YAxis,
    Legend,
    LineChart, Line,
    AreaChart, Area,
    CartesianGrid,
    ResponsiveContainer,
    Cell,
    Bar,
} from "recharts";
import { motion } from "framer-motion";
import {
    getAnimation,
    getQuommons,
} from "../../common/javascripts/helpers";
import "../../common/stylesheets/common.css";
import "./QuoBarChart.scss";
import "../../common/stylesheets/overrule.scss";

BarChart.propTypes = {
    //=======================================
    // component specific props
    //=======================================
    /**
       Barchart data should be passed in content field and it is required field  
      */
    data: PropTypes.array,
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
    Use to set Colors for accent line
    */
    withColor: PropTypes.shape({
        accentColor: PropTypes.string,
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
    Use to toggle the component taking the full width of the parent container
    */
    isFluid: PropTypes.bool,
};

BarChart.defaultProps = {
    data: [],
    //=======================================
    // Quommon props
    //=======================================
    asVariant: "warning",
    asSize: "normal",
    asFloated: "none",

    withColor: null,
    withAnimation: null,

    isHidden: false,
    isFluid: false,
};


/**
## Notes
- The design system used for this component is HTML and CSS
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function QuoBarChart(props) {
    let { data } = props;
    const [activeIndex, setActiveIndex] = useState(0)
    const activeItem = data[activeIndex];
    const handleClick = useCallback((index) => {
        setActiveIndex(index);
    }, [activeIndex]);
    const data1 = [
        { name: "Facebook", users: 2000000000 },
        { name: "Instagram", users: 1500000000 },
        { name: "Twiter", users: 1000000000 },
        { name: "Telegram", users: 500000000 },
    ];
    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "bar-chart");
    quommonClasses.childClasses += ` variant-${props.asVariant}-text`;

    const animate = getAnimation(props.withAnimation);
    // ========================= Render Function =================================
    return (
        // <div>
        //     <p>Click each rectangle </p>
        //     <BarChart width={600} height={300} data={data}>
        //         <Bar dataKey={"data.uv"} >
        //             {data.map((entry, index) => (
        //                 <Cell
        //                     onClick={(index) => handleClick(index)}
        //                     cursor="pointer"
        //                     fill={index === activeIndex ? "#82ca9d" : "#8884d8"}
        //                     key={`cell-${index}`}
        //                 />
        //             ))}
        //         </Bar>
        //     </BarChart>
        //     <p className="content">{`Uv of "${activeItem.name}": ${activeItem.uv}`}</p>
        // </div>
        <div style={{ textAlign: "center" }}>
            <h1>Recharts</h1>
            <div className="App">
                <br />
                <h3>PieChart</h3>
                <PieChart width={400} height={400}>
                    <Pie
                        dataKey="uv"
                        isAnimationActive={false}
                        data={data}
                        cx={200}
                        cy={200}
                        outerRadius={80}
                        fill="#8884d8"
                        label
                    />
                    <Tooltip />
                </PieChart>
                <br />
                <h3>AreaChart</h3>
                <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                    <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
                </AreaChart>
                <br />
                <h3>LineChart</h3>
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeDasharray="5 5" />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
                </LineChart>
                <br />
                <h3>BarChart</h3>
                <BarChart width={150} height={40} data={data}>
                    <Bar dataKey="uv" fill="#8884d8" />
                </BarChart>
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="uv" fill="#8884d8" background={{ fill: "#eee" }} >
                        {data.map((entry, index) => (
                            <Cell
                                cursor="pointer"
                            // fill={index === activeIndex ? "yellow" : "gray"}
                            // key={`cell-${index}`}
                            />
                        ))}
                    </Bar>
                    <Bar dataKey="pv" fill="#8884d8" background={{ fill: "#eee" }} />
                    <Bar dataKey="amt" fill="#8884d8" background={{ fill: "#eee" }} />
                </BarChart>
                <br />
                <h3>AreaChart</h3>
                <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </div>
        </div>
    );
}
