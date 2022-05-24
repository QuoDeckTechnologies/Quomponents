import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';
import { motion } from "framer-motion";
import {
    getAnimation,
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

QuoBarChart.defaultProps = {
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

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Bar Chart',
            },
        },
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const barData = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Dataset 2',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };


    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "bar-chart");
    quommonClasses.childClasses += ` variant-${props.asVariant}-text`;

    const animate = getAnimation(props.withAnimation);
    // ========================= Render Function =================================
    return (
        <div>
            <Bar options={options} data={barData} />;
        </div>
    );
}
