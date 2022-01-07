import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import _ from 'lodash'
import {
    getQuommons,
    getTranslation,
    getAnimation,
} from "../../common/javascripts/helpers";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "../Carousel/BannerCard/BannerCard.scss";
import './EarnCard.scss'
import "../../common/stylesheets/overrule.scss";
import BannerCard from "../Carousel/BannerCard/BannerCard.react";

EarnCard.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    EarnCard data should be passed in content field and it is required field
    */
    content: PropTypes.shape({
        image: PropTypes.string,
        tag: PropTypes.oneOf([
            "new",
            "premium",
            "restricted",
            "free"
        ]),
        header: PropTypes.string,
        content: PropTypes.string
    }).isRequired,

    courseContent :PropTypes.shape({
        title :PropTypes.string,
        description :PropTypes.string,
        icon :PropTypes.string,
        dates: PropTypes.shape({
            end_date:PropTypes.string,
            start_date:PropTypes.string,
        }),
        topics : PropTypes.arrayOf(
            PropTypes.shape({
                name :PropTypes.string,
                contentList : PropTypes.arrayOf(
                    PropTypes.shape({})
                ),
                checked :PropTypes.bool,
            }),
        )
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
    Use to override component colors and behavior
    */
    withColor: PropTypes.shape({
        backgroundColor: PropTypes.string,
        accentColor: PropTypes.string,
        textColor: PropTypes.string,
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
    Use to show a translated version of the component text. Dictionary must be valid JSON. 
    */
    withTranslation: PropTypes.shape({
        lang: PropTypes.string,
        tgt: PropTypes.string,
        dictionary: PropTypes.string,
    }),

    /**
    Use to enable/disable the component
    */
    isDisabled: PropTypes.bool,
    /**
    Use to show/hide the component
    */
    isHidden: PropTypes.bool,

    /**
    Button component must have the onClick function passed as props
    */
    onClick: PropTypes.func.isRequired,
};

EarnCard.defaultProps = {
    // Component Specific props
    //=======================================
    content: {},

    courseContent:{},
    // Quommon props
    //=======================================
    asVariant: "primary",

    withColor: null,
    withAnimation: null,
    withTranslation: null,

    isDisabled: false,
    isHidden: false
};

/**
## Notes
- The design system used for this component is Material UI (@mui/material)
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- MUI props are not being passed to the button. Please speak to the admin to handle any new MUI prop.
**/



export default function EarnCard(props) {

    let { courseContent } = props

    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "button");
    if (props.isCircular)
        quommonClasses.childClasses += ` is-circular ${props.content === "" && props.withIcon ? "is-only-icon" : ""
            }`;

    quommonClasses.childClasses += ` emp-${props.asEmphasis}`;

    return (
        <div className="qui qui-EarnCard">
        <div className="qui-leftSide" >
            <BannerCard {...props} />
            <div className={`qui-leftLower size-${props.asSize} variant-${props.asVariant}-text`}>
                <div className="qui-leftLowerTop">
                    <div className="qui-checkbox">
                        {_.map(courseContent.topics ,(topics,index) => {
                            return (
                                <h1 className={`${topics.checked ? 'fas fa-check-square' : 'far fa-square'}`} key={topics.name}></h1>
                            )
                        })}
                    </div>
                    <div className="qui-courseDate">
                        <h2>{props.courseContent.dates.start_date}</h2>
                        <h2>&nbsp;{`-`}&nbsp;</h2>
                        <h2>{props.courseContent.dates.end_date}</h2>
                    </div>
                </div>
                <div className="qui-EarnCardIcon">
                    <i className={props.courseContent.icon}></i>
                </div>
            </div>
        </div>
        <div className="qui-rightSide">
                <div className={`qui-courseHeader size-${props.asSize}`}>
                    <h1>{props.courseContent.title}</h1>
                    <div className="courseBanner"></div>
                </div>
            <div className="qui-courseDescription">
                    <p>{props.courseContent.description}</p>
            </div>
        </div>
        </div>
    );
}