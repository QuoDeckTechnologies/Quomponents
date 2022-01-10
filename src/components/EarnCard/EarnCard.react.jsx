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
        content: PropTypes.string,
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
    }).isRequired,

    // courseContent :PropTypes.shape({
    //     title :PropTypes.string,
    //     description :PropTypes.string,
    //     icon :PropTypes.string,
    //     dates: PropTypes.shape({
    //         end_date:PropTypes.string,
    //         start_date:PropTypes.string,
    //     }),
    //     topics : PropTypes.arrayOf(
    //         PropTypes.shape({
    //             name :PropTypes.string,
    //             contentList : PropTypes.arrayOf(
    //                 PropTypes.shape({})
    //             ),
    //             checked :PropTypes.bool,
    //         }),
    //     )
    // }),
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
    // courseContent:{},
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

    let { content } = props

    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "button");
    if (props.isCircular)
        quommonClasses.childClasses += ` is-circular ${props.content === "" && props.withIcon ? "is-only-icon" : ""
            }`;

    quommonClasses.childClasses += ` emp-${props.asEmphasis}`;
    //-------------------------------------------------------------------
    // 4. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);

    // ========================= Render Function =================================
    return (
        <motion.div
        initial={animate.from}
        animate={animate.to}
        className="qui qui-EarnCard">
        <div className="qui-leftSide" >
            <BannerCard {...props} />
            <div className={`qui-leftLower size-${props.asSize} variant-${props.asVariant}-text`}>
                <div className="qui-EarnCardIcon">
                    <i className={props.content?.icon}></i>
                </div>
                <div className="qui-leftLowerTop">
                    <div className="qui-checkbox">
                        {_.map(content.topics ,(topics,index) => {
                            return (
                                <h1 className={`${topics.checked ? 'fas fa-check-square' : 'far fa-square'}`} key={topics.name+index}></h1>
                            )
                        })}
                    </div>
                    <div className="qui-courseDate">
                        <h2>{props.content?.dates.start_date}</h2>
                        <h2>&nbsp;{`-`}&nbsp;</h2>
                        <h2>{props.content?.dates.end_date}</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className={`qui-rightSide size-${props.asSize}`}>
                <div className={`qui-courseHeader variant-${props.asVariant}-text`}>
                    <h1>{props.content?.title}</h1>
                    <div className={`qui-courseBanner variant-${props.asVariant} qui-btn`}></div>
                </div>
            <div className="qui-courseDescription">
                    <p>{props.content?.description}</p>
            </div>
        </div>
        </motion.div>
    );
}