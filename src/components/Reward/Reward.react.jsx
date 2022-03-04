import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
    getAnimation,
    getQuommons,
} from "../../common/javascripts/helpers";
import "../../common/stylesheets/common.css";
import "./Reward.scss";
import "../../common/stylesheets/overrule.scss";
import rewardImage from "../../assets/icons8_coin_96px.png";

Reward.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    Use to add label,point and image in the Reward
    */
    content: PropTypes.shape({
        label: PropTypes.string,
        point: PropTypes.string,
        image: PropTypes.string,
    }),
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
    Use to set Colors for points and label
    */
    withColor: PropTypes.shape({
        textColor: PropTypes.string,
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
};

Reward.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    content: null,
    //=======================================
    // Quommon props
    //=======================================
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
- Content props is use to add label and points in the component
**/

export default function Reward(props) {
    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "reward");
    //-------------------------------------------------------------------
    // 2. Use to set label Color
    //-------------------------------------------------------------------
    let labelColors = {
        color: props.withColor?.textColor,
    };
    //-------------------------------------------------------------------
    // 3.Use to set Point Color
    //-------------------------------------------------------------------
    let pointColor = {
        color: props.withColor?.accentColor,
    };
    //-------------------------------------------------------------------
    // 4. Use to set content in the Reward component
    //-------------------------------------------------------------------
    let rewardContent = Object.assign({}, props.content);
    //-------------------------------------------------------------------
    // 5. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);

    // ========================= Render Function =================================
    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui ${quommonClasses.parentClasses}`}
        >
            <div className={` ${quommonClasses.childClasses}`}>
                <div className={`qui-reward-container ${props.asSize}`}>
                    <div className={`qui-label-container`} style={labelColors}>
                        {rewardContent?.label}
                    </div>
                    <div className={`qui-point-container`}>
                        <div>
                            <img
                                className={`qui-reward-image`}
                                src={rewardContent?.image ? rewardContent.image : rewardImage}
                                alt="coin"
                            />
                        </div>
                        <div className="qui-point" style={pointColor}>
                            {rewardContent?.point}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
