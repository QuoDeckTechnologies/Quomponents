// Import npm packages
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { getQuommons, getAnimation, } from "../../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./OrderingList.scss";
import "../../../common/stylesheets/overrule.scss";
import ButtonBank from "../../ButtonBank/ButtonBank.react";



OrderingList.propTypes = {
    /**
     OrderingList title data should be passed in content field and it is required field  
    */
    content: PropTypes.shape
        ({
            title: PropTypes.arrayOf(
                PropTypes.string
            ),
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
    Use to define component text size in increasing order
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
            ""
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
    OrderingList component must have the onClick function passed as props
    */
    onClick: PropTypes.func.isRequired,
};

OrderingList.defaultProps = {
    //=======================================
    // Quommon props
    //=======================================
    asVariant: "primary",
    asSize: "normal",
    isHidden: false,
    isDisabled: false,
    withTranslation: null,
};

/**
## Notes
- The design system used for this component is fontawesome Icons
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- props are not being passed to the NavBar. Please speak to the admin to handle any new prop.
**/

export default function OrderingList(props) {
    let Content = Object.assign({}, props.content?.title);

    const [btnArr, setBtnArr] = useState(Content.title);

    useEffect(() => {
        setBtnArr(props.content?.title);
    }, [props.content?.title]);

    const handleUpClick = (index) => {
        let temp_state = [...btnArr];

        //Make a shallow copy of the element you want to mutate
        if (btnArr[index - 1]) {
            const beforeItem = btnArr[index - 1];
            const currentItem = btnArr[index];

            //Put it back into our array. N.B. we are mutating the array here, but that's why we made a copy first
            temp_state[index] = beforeItem;
            temp_state[index - 1] = currentItem;
        }
        else {
            const currentItem = btnArr[index];
            const afterItem = btnArr[index + 1];
            // Update the property you're interested in
            // Put it back into our array. N.B. we are mutating the array here, but that's why we made a copy first
            temp_state[index] = afterItem;
            temp_state[index + 1] = currentItem;
        }
        //Set the state to our new copy
        setBtnArr(temp_state);
    };
    const handleDownClick = (index) => {
        let temp_state = [...btnArr];
        //Make a shallow copy of the element you want to mutate
        if (btnArr[index + 1]) {
            const currentItem = btnArr[index];
            const afterItem = btnArr[index + 1];

            //Put it back into our array. N.B. we are mutating the array here, but that's why we made a copy first
            temp_state[index] = afterItem;
            temp_state[index + 1] = currentItem;
        } else {
            const currentItem = btnArr[index];
            const afterItem = btnArr[index + 1];

            //Put it back into our array. N.B. we are mutating the array here, but that's why we made a copy first
            temp_state[index] = afterItem;
            temp_state[index - 1] = currentItem;
        }
        //Set the state to our new copy
        setBtnArr(temp_state);
    };
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "orderinglist");
    quommonClasses.childClasses += ` variant-${props.asVariant}-text`;

    // 2. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);

    // ========================= Render Function =================================
    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui ${quommonClasses.parentClasses}`}>
            {btnArr?.map((item, index) => (
                <div key={index}>
                    <div className={`qui-ordering-list ${quommonClasses.childClasses}`}>
                        <div style={{ pointerEvents: index === 0 ? "none" : "" }} className="qui-ordering-btn" onClick={() => handleUpClick(index)}>
                            <div className="qui-up-solid-border">
                                <div className="qui-up-dotted-border">
                                    <button className={`qui-slide-icon fa fa-arrow-up `} ></button>
                                </div>
                            </div>
                        </div>
                        <div className={`qui-btn qui-title-bttn ${quommonClasses.childClasses}`}>
                            <div className={`qui-title-content`}>{item}</div>
                        </div>
                        <div style={{ pointerEvents: index === btnArr.length - 1 ? "none" : "" }} className={`qui-ordering-btn`} onClick={() => handleDownClick(index)}>
                            <div className="qui-down-solid-border">
                                <div className="qui-down-dotted-border">
                                    <button className={`qui-slide-icon  fa fa-arrow-down`}></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </motion.div>
    );
}