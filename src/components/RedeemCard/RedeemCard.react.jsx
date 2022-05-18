// Import npm packages
import React from "react";
import PropTypes from "prop-types";

import { getQuommons } from "../../common/javascripts/helpers.js";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./RedeemCard.scss";
import "../../common/stylesheets/overrule.scss";

import Reward from "../Reward/Reward.react"
import defaultImage from "../../assets/default.jpeg";
import AccentLine from "../AccentLine/AccentLine.react"
import Button from "../Buttons/Button/Button.react"

RedeemCard.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    Content props consist of all the data which are required for Nugget Card component
    */
    content: PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.string,
        cost: PropTypes.string,
        stock: PropTypes.shape({
            left: PropTypes.number,
            total: PropTypes.number
        }),
        label: PropTypes.string,
        redemptionStatus: PropTypes.oneOf(["redeem", "process", "completed"])
    }),

    // Quommon props
    //=======================================
    /**
    Use to set Colors for accent line
    */
    withColor: PropTypes.shape({
        accentColor: PropTypes.string,
    }),
    /**
    Use to float the component in parent container
    */
    asFloated: PropTypes.oneOf(["left", "right", "inline"]),
    /**
    Use to show/hide the component
    */
    isHidden: PropTypes.bool,
    /**
    Use to enable/disable the component
    */
    isDisabled: PropTypes.bool,
    /**
    Component must have the onClick function passed as props
    */
    onClick: PropTypes.func.isRequired,
};

RedeemCard.defaultProps = {
    // Component Specific props
    //=======================================
    content: {},

    // Quommon props
    //=======================================
    asFloated: "inline",
    isHidden: false,
    isDisabled: false,
    onClick: null,
};

/**
## Notes
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- Pass all the required props to the component.
**/

export default function RedeemCard(props) {
    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "redeem-card");


    let backgroundImage = props.content?.image === "" ? defaultImage : props.content?.image;
    //-------------------------------------------------------------------
    // 9. Get the RedeemCard Component
    //-------------------------------------------------------------------
    const redeemCard = () => {
        return (<div>
            {props.content && <div className={`qui-redeem-card-container`}>
                {props.content?.name &&
                    <div className={`qui-redeem-card-name`}>
                        {props.content?.name}
                    </div>}
                {backgroundImage &&
                    <div className={`qui-redeem-card-image`} style={{ backgroundImage: `url(${backgroundImage})` }}>
                    </div>}
                <div className={`qui-redeem-card-cost-stock-container`}>
                    {props.content?.cost &&
                        <Reward content={{ point: props.content?.cost }} />
                    }
                    {props.content?.stock &&
                        <div className={`qui-redeem-card-stock`}>
                            <div>
                                {props.content?.stock?.left} / {props.content?.stock?.total}
                            </div>
                            <div>
                                Left
                            </div>
                        </div>
                    }
                </div>
                <div className={`qui-redeem-card-accent-line`}>
                    <AccentLine withColor={{ accentColor: props.withColor?.accentColor }} />
                </div>
                <div className={`qui-redeem-card-label`}>
                    {props.content?.label}
                </div>

                {props.content?.redemptionStatus === "redeem" &&
                    <div className={`qui-redeem-card-status`}>
                        <Button content="Redeem" onClick={props.onClick} />
                    </div>
                }
                {props.content?.redemptionStatus === "process" &&
                    <div className={`qui-redeem-card-status qui-redeem-card-redeem-process`}>
                        YOUR REDEMPTION REQUEST IS IN PROCESS
                    </div>
                }
                {props.content?.redemptionStatus === "complete" &&
                    <div className={`qui-redeem-card-status qui-redeem-card-redeem-success`}>
                    YOU HAVE REDEEMED THIS OFFER
                    </div>
                }
            </div>}
        </div>
        );
    };
    return (
        <div className={`qui ${quommonClasses.parentClasses}`}>
            <div className={`${quommonClasses.childClasses}`}>{redeemCard()}</div>
        </div>
    );
}