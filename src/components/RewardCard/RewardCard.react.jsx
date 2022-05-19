// Import npm packages
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getQuommons } from "../../common/javascripts/helpers.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./RewardCard.scss";
import "../../common/stylesheets/overrule.scss";
import Reward from "../Reward/Reward.react"
import defaultImage from "../../assets/default.jpeg";
import AccentLine from "../AccentLine/AccentLine.react"

RewardCard.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    Content props consist of all the data which are required for Nugget Card component
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

    // Quommon props
    //=======================================
    /**
    Use to set Colors for accent line
    */
    withColor: PropTypes.shape({
        textColor: PropTypes.string,
        accentColor: PropTypes.string,
        backgroundColor: PropTypes.string,
    }),
    /**
    Use to float the component in parent container
    */
    asFloated: PropTypes.oneOf(["left", "right", "inline", "none"]),
    /**
    Use to show/hide the component
    */
    isHidden: PropTypes.bool,
};

RewardCard.defaultProps = {
    // Component Specific props
    //=======================================
    content: {},

    // Quommon props
    //=======================================
    asFloated: "inline",
    isHidden: false,
};

/**
## Notes
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- Pass all the required props to the component.
**/
export default function RewardCard(props) {
    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "reward-card");

    const [stockStyle, setStockStyle] = useState('qui-reward-card-cost-stock-container-row')

    useEffect(() => {
        let cost = props.content?.cost?.toString();
        let left = props.content?.stock?.left?.toString();
        let total = props.content?.stock?.total?.toString();

        cost?.length > 5 || left?.length > 6 || total?.length > 6 ? setStockStyle("qui-reward-card-cost-stock-container-column") : setStockStyle("qui-reward-card-cost-stock-container-row");
    }, [props.content?.cost, props.content?.stock?.left, props.content?.stock?.total]);

    let backgroundImage = props.content?.image === "" ? defaultImage : props.content?.image;
    //-------------------------------------------------------------------
    // 9. Get the RewardCard Component
    //-------------------------------------------------------------------
    const rewardCard = () => {
        return (
            <div>
                {
                    props.content && <div className={`qui-reward-card-container`} style={{ color: props.withColor?.textColor, backgroundColor: props.withColor?.backgroundColor }}>
                        {props.content?.name &&
                            <div className={`qui-reward-card-name`}>
                                {props.content?.name}
                            </div>}
                        {backgroundImage &&
                            <div className={`qui-reward-card-image`} style={{ backgroundImage: `url(${backgroundImage})` }}>
                            </div>}
                        <div className={`qui-reward-card-cost-stock-container ${stockStyle}`}>
                            {props.content?.cost &&
                                <div className={`qui-reward-card-cost`}>
                                    <Reward content={{ point: props.content?.cost?.toString() }} withColor={{ accentColor: props.withColor?.textColor }} />
                                </div>
                            }
                            {props.content?.stock &&
                                <div className={`qui-reward-card-stock`}>
                                    <div>
                                        {props.content?.stock?.left} / {props.content?.stock?.total}
                                    </div>
                                    <div>
                                        left
                                    </div>
                                </div>
                            }
                        </div>
                        <div className={`qui-reward-card-accent-line`}>
                            <AccentLine withColor={{ accentColor: props.withColor?.accentColor }} />
                        </div>
                    </div>
                }
            </div>
        );
    };
    return (
        <div className={`qui ${quommonClasses.parentClasses}`}>
            <div className={`${quommonClasses.childClasses}`}>{rewardCard()}</div>
        </div>
    );
}