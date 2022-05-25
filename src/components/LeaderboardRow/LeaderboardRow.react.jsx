// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
    getQuommons,
    getAnimation,
} from "../../common/javascripts/helpers.js";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./LeaderboardRow.scss";
import "../../common/stylesheets/overrule.scss";

import goldMedal from "../../assets/icons8_1st_place_medal_96px.png";
import silverMedal from "../../assets/icons8_2nd_place_medal_96px.png";
import bronzeMedal from "../../assets/icons8_3rd_place_medal_96px.png";
import unRank from "../../assets/icons8_un_rank_medal_96px.png";

LeaderboardRow.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    Use to define the rank of user
    */
    rank: PropTypes.number,
    /**
    Contains the users records such as name and points
    */
    record: PropTypes.shape({
        name: PropTypes.string,
        points: PropTypes.number
    }),

    // Quommon props
    //=======================================
    /**
    Use to override component colors and behavior
    */
    withColor: PropTypes.shape({
        backgroundColor: PropTypes.string,
        textColor: PropTypes.string
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
            ""
        ]),
        duration: PropTypes.number,
        delay: PropTypes.number,
    }),
    /**
    Use to enable/disable the component
    */
    isDisabled: PropTypes.bool
};

LeaderboardRow.defaultProps = {
    // Component Specific props
    //=======================================
    rank: "",
    record: {},

    // Quommon props
    //=======================================
    withColor: null,
    withAnimation: null,
    isHidden: false,
    isDisabled: false
};

/**
## Notes
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- Pass rank and record props to display the LeaderboardRow component.
- Pass withColor props to change the styling of component.
**/
export default function LeaderboardRow(props) {

    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "action-button");

    //-------------------------------------------------------------------
    // 2. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);

    //-------------------------------------------------------------------
    // 3. Conditional styling
    //-------------------------------------------------------------------
    let recordStyle = {
        backgroundColor: (props.rank === 0 || props.rank === 1 || props.rank === 2) && props.withColor?.backgroundColor ? props.withColor?.backgroundColor : '#454545',
        color: (props.rank === 0 || props.rank === 1 || props.rank === 2) ? props.withColor?.textColor ? props.withColor?.textColor : '#FFBF00' : props.withColor?.backgroundColor ? props.withColor?.backgroundColor : '#FFBF00'
    }

    //-------------------------------------------------------------------
    // 4. Set medals according to the ranks
    //-------------------------------------------------------------------
    let rankImage = props.rank === 0 ? goldMedal : props.rank === 1 ? silverMedal : props.rank === 2 ? bronzeMedal : unRank;

    return (
        <motion.div
            initial={animate?.from}
            animate={animate?.to}
            className={`qui ${quommonClasses.parentClasses} qui-leaderboard-row-parent-class`}>
            {props.record && <div className={`${quommonClasses.childClasses}`} >
                <div className={`qui-leaderboard-row-container`} style={recordStyle}>
                    <div className={`qui-leaderboard-row-rank-container`}>
                        <img alt={'medal'} src={rankImage} className={`qui-leaderboard-row-medal`} />
                    </div>
                    <div className={`qui-leaderboard-row-name`} style={{ color: recordStyle?.color, textAlign: props.record?.points ? 'left' : 'right', marginRight: props.record?.points ? '0.5em' : '1.5em' }}>{props.record?.name}</div>
                    {props.record?.points && <div className={`qui-leaderboard-row-points`} style={{ color: recordStyle?.color }}>{props.record?.points}</div>}
                </div>
            </div>}
        </motion.div>
    );
}
