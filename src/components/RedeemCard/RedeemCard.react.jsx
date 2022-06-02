// Import npm packages
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { getQuommons, getTranslation } from "../../common/javascripts/helpers.js";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./RedeemCard.scss";
import "../../common/stylesheets/overrule.scss";

import Reward from "../Reward/Reward.react"
import defaultImage from "../../assets/default.jpeg";
import AccentLine from "../AccentLine/AccentLine.react"
import Button from "../Buttons/Button/Button.react";

RedeemCard.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    Content props consist of all the data which are required for RedeemCard component. status consist of 3 options to display the card accordingly.
    */
    content: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        image: PropTypes.string,
        cost: PropTypes.number,
        stock: PropTypes.shape({
            left: PropTypes.number,
            total: PropTypes.number
        }),
        status: PropTypes.oneOf(["Pending", "InProgress", "Completed"])
    }),

    // Quommon props
    //=======================================
    /**
    Use to set Colors for accent line
    */
    withColor: PropTypes.shape({
        textColor: PropTypes.string,
        accentColor: PropTypes.string,
        buttonTextColor: PropTypes.string,
        buttonBackgroundColor: PropTypes.string,
        buttonHoverBackgroundColor: PropTypes.string,
        buttonHoverTextColor: PropTypes.string,
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
    Component should have the onClick function passed as props
    */
    onClick: PropTypes.func,
};

RedeemCard.defaultProps = {
    // Component Specific props
    //=======================================
    content: {},

    // Quommon props
    //=======================================
    withTranslation: null,
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
- status consist of 3 options('Pending', 'InProgress','Completed') to display the card accordingly.
**/

export default function RedeemCard(props) {
    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "redeem-card");

    //-------------------------------------------------------------------
    // 2. State Definitions
    //-------------------------------------------------------------------
    const [expandTags, setExpandTags] = useState(false);
    const [showMoreBtn, setShowMoreBtn] = useState(true);
    const [stockStyle, setStockStyle] = useState('qui-redeem-card-cost-stock-container-row');

    //-------------------------------------------------------------------
    // 4. Conditional class definitions and visiblity of show more button depending on the latest length of data using useEffect
    //-------------------------------------------------------------------
    useEffect(() => {
        let cost = props.content?.cost?.toString();
        let left = props.content?.stock?.left?.toString();
        let total = props.content?.stock?.total?.toString();
        props.content?.description?.length > 113 ? setShowMoreBtn(true) : setShowMoreBtn(false);
        cost?.length > 5 || left?.length > 5 || total?.length > 5 ? setStockStyle("qui-redeem-card-cost-stock-container-column") : setStockStyle("qui-redeem-card-cost-stock-container-row");
    }, [showMoreBtn, props.content?.description, props.content?.cost, props.content?.stock?.left, props.content?.stock?.total]);

    //-------------------------------------------------------------------
    // 3. Conditional class definiction of show more button and Handle show more button action
    //-------------------------------------------------------------------
    let descriptionStyle = expandTags ? "qui-redeem-card-description-show-more-active" : "qui-redeem-card-description-show-more-non-active"

    function handleLessTags() {
        setExpandTags(false)
    }
    function handleMoreTags() {
        setExpandTags(true)
    }

    //-------------------------------------------------------------------
    // 4. Conditional handling of backgroundImage
    //-------------------------------------------------------------------
    let backgroundImage = props.content?.image === "" ? defaultImage : props.content?.image;

    //-------------------------------------------------------------------
    // 5. Get Button Styling
    //-------------------------------------------------------------------
    let buttonStyle = {
        textColor: props.withColor?.buttonTextColor,
        hoverBackgroundColor: props.withColor?.buttonHoverBackgroundColor,
        hoverTextColor: props.withColor?.buttonHoverTextColor,
        backgroundColor: props.withColor?.buttonBackgroundColor,
    }

    //-------------------------------------------------------------------
    // 6. Get translation of the component
    //-------------------------------------------------------------------
    let tObj = null;
    let buttonText = "Redeem";
    let inProgressText = "YOUR REDEMPTION REQUEST IS IN PROCESS";
    let completedText = "YOU HAVE REDEEMED THIS OFFER";
    let leftText = "left";
    if (
        props.withTranslation?.lang &&
        props.withTranslation.lang !== "" &&
        props.withTranslation.lang !== "en"
    ) {
        tObj = getTranslation(props.withTranslation);
        buttonText = tObj.button;
        inProgressText = tObj.inprogress;
        completedText = tObj.completed;
        leftText = tObj.left
    }
    //-------------------------------------------------------------------
    // 7. Get the RedeemCard Component
    //-------------------------------------------------------------------
    const redeemCard = () => {
        return (<div>
            {props.content && <div className={`qui-redeem-card-container`} style={{ color: props.withColor?.textColor, backgroundColor: props.withColor?.backgroundColor }}>
                {props.content?.name &&
                    <div className={`qui-redeem-card-name`}>
                        {props.content?.name}
                    </div>}
                {backgroundImage &&
                    <div className={`qui-redeem-card-image`} style={{ backgroundImage: `url(${backgroundImage})` }}>
                    </div>}
                <div className={`qui-redeem-card-cost-stock-container ${stockStyle}`}>
                    {props.content?.cost &&
                        <div className={`qui-redeem-card-cost`}>
                            <Reward content={{ point: props.content?.cost?.toString() }} withColor={{ accentColor: props.withColor?.textColor }} />
                            <div className={`qui-redeem-card-accent-line`}>
                                <AccentLine withColor={{ accentColor: props.withColor?.accentColor }} />
                            </div>
                        </div>
                    }
                    {props.content?.stock &&
                        <div className={`qui-redeem-card-stock`}>
                            <div>
                                {props.content?.stock?.left}/{props.content?.stock?.total}
                            </div>
                            <div>
                                {leftText}
                            </div>
                        </div>
                    }
                </div>
                <div className={`qui-redeem-card-description-container`}>
                    <div className={`${descriptionStyle}`}>
                        {props.content?.description}
                    </div>
                    {showMoreBtn && <button
                        className={`qui-redeem-card-show-more`}
                        onClick={expandTags ? handleLessTags : handleMoreTags}
                    >
                        <i className={expandTags ? "fas fa-angle-up" : "fas fa-angle-down"} />
                    </button>}
                </div>
                {props.content?.status?.toLowerCase() === "pending" &&
                    <div className={`qui-redeem-card-status`}>
                        <Button isDisabled={props.isDisabled} withColor={buttonStyle} content={buttonText} onClick={props.onClick} />
                    </div>
                }
                {props.content?.status?.toLowerCase() === "inprogress" &&
                    <div className={`qui-redeem-card-status qui-redeem-card-redeem-inprogress`}>
                        {inProgressText}
                    </div>
                }
                {props.content?.status?.toLowerCase() === "completed" &&
                    <div className={`qui-redeem-card-status qui-redeem-card-redeem-completed`}>
                        {completedText}
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