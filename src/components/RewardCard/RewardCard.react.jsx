import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
    getAnimation,
    getQuommons,
    getTranslation
} from "../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./RewardCard.scss";
import "../../common/stylesheets/overrule.scss";
import Reward from "../Reward/Reward.react"
import AccentLine from "../AccentLine/AccentLine.react"

RewardCard.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    id,name,image,cost & stock props consist all the data which are required for RewardCard component
    */
    id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    cost: PropTypes.number,
    stock: PropTypes.shape({
        left: PropTypes.number,
        total: PropTypes.number
    }),
    /**
    Use to set the state of RewardCard 
    */
    asEmphasis: PropTypes.oneOf(["default", "soldout", "blank"]),
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
    Use to set Color in RewardCard component
    */
    withColor: PropTypes.shape({
        textColor: PropTypes.string,
        accentColor: PropTypes.string,
        backgroundColor: PropTypes.string,
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
    id: "",
    name: "",
    image: "",
    cost: 500,
    stock: {},
    asEmphasis: "default",
    //=======================================
    // Quommon props
    //=======================================
    asSize: "normal",

    withColor: null,
    withAnimation: null,
    withTranslation: null,

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
    let { withColor, asEmphasis } = props;
    //-------------------------------------------------------------------
    // 2. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "reward-card");
    //-------------------------------------------------------------------
    // 3. Conditinal class rendering
    //-------------------------------------------------------------------
    const [stockStyle, setStockStyle] = useState('qui-reward-card-cost-stock-container-row')

    useEffect(() => {
        let cost = props.cost?.toString();
        let left = props.stock?.left?.toString();
        let total = props.stock?.total?.toString();

        cost?.length > 7 || left?.length > 7 || total?.length > 7 ? setStockStyle("qui-reward-card-cost-stock-container-column") : setStockStyle("qui-reward-card-cost-stock-container-row");
    }, [props.cost, props.stock?.left, props.stock?.total]);

    let rewardImage = props.image === "" ? "../../assets/default.jpeg" : props.image;
    //-------------------------------------------------------------------
    // 4. Get translation of the component
    //-------------------------------------------------------------------
    let tObj = null;
    let contentName = props.name;
    let soldoutText = "SOLD OUT!";
    let leftText = "left";
    if (
        props.withTranslation?.lang &&
        props.withTranslation.lang !== "" &&
        props.withTranslation.lang !== "en"
    ) {
        tObj = getTranslation(props.withTranslation)
        soldoutText = tObj?.soldout || soldoutText
        leftText = tObj?.left || leftText
    }
    //-------------------------------------------------------------------
    // 5. Use to the state of RewardCard Component
    //-------------------------------------------------------------------
    const getRewardCard = (asEmphasis) => {
        if (asEmphasis === "blank") {
            return (
                <div>
                    <i className="fas fa-plus-square qui-blank-reward-card-icon" />
                </div>
            )
        }
        if (asEmphasis === "soldout") {
            return (
                <div>
                    {contentName &&
                        <div className="qui-reward-card-name">
                            {contentName}
                        </div>
                    }
                    {rewardImage &&
                        <div
                            className="qui-reward-card-image"
                            style={{ backgroundImage: `url(${rewardImage})` }}
                        >
                            <div className="qui-reward-card-image-caption">
                                {soldoutText}
                            </div>
                        </div>
                    }
                    <div className={`qui-reward-card-cost-stock-container ${stockStyle}`}>
                        {props.cost !== undefined && props.cost !== '' &&
                            <div className="qui-reward-card-cost">
                                <Reward
                                    content={{ point: props.cost?.toString() }}
                                    withColor={{ accentColor: withColor?.textColor }}
                                />
                            </div>
                        }
                        {props.stock &&
                            <div className="qui-reward-card-stock qt-sm">
                                <div>
                                    {props.stock?.left} / {props.stock?.total}
                                </div>
                                <div>
                                    {leftText}
                                </div>
                            </div>
                        }
                    </div>
                    <div className="qui-reward-card-accent-line">
                        <AccentLine
                            withColor={{ accentColor: withColor?.accentColor }}
                        />
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    {contentName &&
                        <div className="qui-reward-card-name">
                            {contentName}
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
                        {props.cost !== undefined && props.cost !== '' &&
                            <div className="qui-reward-card-cost">
                                <Reward
                                    content={{ point: props.cost?.toString() }}
                                    withColor={{ accentColor: withColor?.textColor }}
                                />
                            </div>
                        }
                        {props.stock &&
                            <div className="qui-reward-card-stock qt-sm">
                                <div>
                                    {props.stock?.left} / {props.stock?.total}
                                </div>
                                <div>
                                    {leftText}
                                </div>
                            </div>
                        }
                    </div>
                    <div className="qui-reward-card-accent-line">
                        <AccentLine
                            withColor={{ accentColor: withColor?.accentColor }}
                        />
                    </div>
                </div>
            )
        }
    }
    //-------------------------------------------------------------------
    // 6. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props);
    // ========================= Render Function =================================
    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui ${quommonClasses.parentClasses}`}
        >
            <div
                style={{ color: withColor?.textColor, backgroundColor: withColor?.backgroundColor }}
                onClick={props.onClick}
                className={`qui-reward-card-container ${quommonClasses.childClasses}`}>
                {getRewardCard(asEmphasis)}
            </div>
        </motion.div>
    );
}