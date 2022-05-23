import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
    getAnimation,
    getQuommons,
} from "../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./RewardCard.scss";
import "../../common/stylesheets/overrule.scss";
import defaultImage from "../../assets/default.jpeg";
import Reward from "../Reward/Reward.react"
import AccentLine from "../AccentLine/AccentLine.react"

RewardCard.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    Content props consist of all the data which are required for RewardCard component
    */
    content: PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.string,
        cost: PropTypes.number,
        stock: PropTypes.shape({
            left: PropTypes.number,
            total: PropTypes.number
        }),
    }),
    /**
    Use to set the state of RewardCard 
    */
    status: PropTypes.oneOf(["default", "blankRewardCard", "soldOutRewardCard"]),
    //=======================================
    // Quommon props
    //=======================================
    /**
    Use to float the component in parent container
    */
    asFloated: PropTypes.oneOf(["left", "right", "none", "inline"]),
    /**
    Use to set Color in RewardCard component
    */
    withColor: PropTypes.shape({
        textColor: PropTypes.string,
        accentColor: PropTypes.string,
        backgroundColor: PropTypes.string,
        soldTextColor: PropTypes.string,
        soldAccentColor: PropTypes.string,
        soldBackgroundColor: PropTypes.string,
        blankTextColor: PropTypes.string,
        blankBackgroundColor: PropTypes.string,
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
    RewardCard component must have the onClick function passed as props
    */
    onClick: PropTypes.func.isRequired,
};

RewardCard.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    content: {},
    status: "default",
    //=======================================
    // Quommon props
    //=======================================
    asFloated: "none",

    withColor: null,
    withAnimation: null,

    isHidden: false,
    isDisabled: false,
};
/**
## Notes
- The design system used for this component is HTML and CSS
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- Pass all the required props to the component.
**/
export default function RewardCard(props) {
    //-------------------------------------------------------------------
    // 1. Destructuring props
    //-------------------------------------------------------------------
    let { content, withColor, status } = props;
    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "reward-card");
    //-------------------------------------------------------------------
    // 2. Conditinal class rendering
    //-------------------------------------------------------------------
    const [stockStyle, setStockStyle] = useState('qui-reward-card-cost-stock-container-row')

    useEffect(() => {
        let cost = content?.cost?.toString();
        let left = content?.stock?.left?.toString();
        let total = content?.stock?.total?.toString();

        cost?.length > 5 || left?.length > 5 || total?.length > 5 ? setStockStyle("qui-reward-card-cost-stock-container-column") : setStockStyle("qui-reward-card-cost-stock-container-row");
    }, [content?.cost, content?.stock?.left, content?.stock?.total]);

    let rewardImage = content?.image === "" ? defaultImage : content?.image;
    //-------------------------------------------------------------------
    // 2. Use to the state of RewardCard Component
    //-------------------------------------------------------------------
    const getRewardCard = (status) => {
        if (status === "blankRewardCard") {
            return (
                <div
                    className="qui-reward-card-container"
                    style={{ color: withColor?.blankTextColor, backgroundColor: withColor?.blankBackgroundColor }}
                    onClick={props.onClick}
                >
                    <i className="fas fa-plus-square qui-blank-reward-card-icon" />
                </div >
            )
        }
        if (status === "soldOutRewardCard") {
            return (
                <div
                    className="qui-reward-card-container"
                    style={{ color: withColor?.soldTextColor, backgroundColor: withColor?.soldBackgroundColor }}
                    onClick={props.onClick}
                >
                    {content?.name &&
                        <div className="qui-reward-card-name">
                            {content?.name}
                        </div>
                    }
                    {rewardImage &&
                        <div
                            className="qui-reward-card-image"
                            style={{ backgroundImage: `url(${rewardImage})` }}
                        >
                            <div className="qui-reward-card-image-caption">
                                SOLD OUT!
                            </div>
                        </div>
                    }
                    <div className={`qui-reward-card-cost-stock-container ${stockStyle}`}>
                        {content?.cost &&
                            <div className="qui-reward-card-cost">
                                <Reward
                                    content={{ point: content?.cost?.toString() }}
                                    withColor={{ accentColor: withColor?.soldTextColor }}
                                />
                            </div>
                        }
                        {content?.stock &&
                            <div className="qui-reward-card-stock">
                                <div>
                                    {content?.stock?.left} / {content?.stock?.total}
                                </div>
                                <div>
                                    left
                                </div>
                            </div>
                        }
                    </div>
                    {content &&
                        <div className="qui-reward-card-accent-line">
                            <AccentLine
                                withColor={{ accentColor: withColor?.soldAccentColor }}
                            />
                        </div>
                    }
                </div>
            )
        }
        else {
            return (
                <div
                    className="qui-reward-card-container"
                    style={{ color: withColor?.textColor, backgroundColor: withColor?.backgroundColor }}
                    onClick={props.onClick}
                >
                    {content?.name &&
                        <div className="qui-reward-card-name">
                            {content?.name}
                        </div>
                    }
                    {rewardImage &&
                        <div
                            className="qui-reward-card-image"
                            style={{ backgroundImage: `url(${rewardImage})` }}
                        >
                        </div>
                    }
                    <div className={`qui-reward-card-cost-stock-container ${stockStyle}`}>
                        {content?.cost &&
                            <div className="qui-reward-card-cost">
                                <Reward
                                    content={{ point: content?.cost?.toString() }}
                                    withColor={{ accentColor: withColor?.textColor }}
                                />
                            </div>
                        }
                        {content?.stock &&
                            <div className="qui-reward-card-stock">
                                <div>
                                    {content?.stock?.left} / {content?.stock?.total}
                                </div>
                                <div>
                                    left
                                </div>
                            </div>
                        }
                    </div>
                    {content &&
                        <div className="qui-reward-card-accent-line">
                            <AccentLine
                                withColor={{ accentColor: withColor?.accentColor }}
                            />
                        </div>
                    }
                </div >
            )
        }
    }
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
            <div className={`${quommonClasses.childClasses}`}>
                {getRewardCard(status)}
            </div>
        </motion.div>
    );
}