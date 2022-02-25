// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import _ from "lodash";
import {
    getAnimation,
    getQuommons,
    getTranslation,
} from "../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./DeckCard.scss";
import "../../common/stylesheets/overrule.scss";
import Ribbon from "../Ribbons/Ribbon/Ribbon.react";
DeckCard.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
      DeckCard data should be passed in content field and it is a required field
      */
    content: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        image: PropTypes.string,
        icon: PropTypes.string,
        tag: PropTypes.oneOf(["new", "premium", "restricted", "free"]),
        topics: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
                checked: PropTypes.bool,
            })
        ),
    }).isRequired,
    isHiddenRibbon: PropTypes.bool,

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

DeckCard.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    isHiddenRibbon: false,
    //=======================================
    // Quommon props
    //=======================================
    asVariant: "primary",
    withColor: null,
    withAnimation: null,
    withTranslation: null,
    isDisabled: false,
    isHidden: false,
};

function getColors(colors) {
    let colorStyle = {
        textColors: {
            color: colors.textColor,
        },
        accentColors: {
            color: colors.accentColor,
        },
        bannerColors: {
            backgroundColor: colors.textColor,
        },
        cardColors: {
            backgroundColor: colors.backgroundColor,
        },
    };
    return colorStyle;
}
/**
## Notes
- The design system used for this component is Fontawesome Icon
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- Status of topics can be changed from content prop
**/
export default function DeckCard(props) {
    //-------------------------------------------------------------------
    // 1. Destructuring content from props
    //-------------------------------------------------------------------
    let { content, isHiddenRibbon, isHidden } = props;
    //-------------------------------------------------------------------
    // 2. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "deckcard");
    quommonClasses.childClasses += ` variant-${props.asVariant}-text`;
    //-------------------------------------------------------------------
    // 3. Set the component colors
    //-------------------------------------------------------------------
    let colors = props.withColor ? getColors(props.withColor) : {};
    //-------------------------------------------------------------------
    // 4. Get translation of the component
    //-------------------------------------------------------------------
    let labelContent = {
        title: content?.title,
        description: content?.description,
    };
    let tObj = null;

    if (
        props.withTranslation?.lang &&
        props.withTranslation.lang !== "" &&
        props.withTranslation.lang !== "en"
    ) {
        tObj = getTranslation(props.withTranslation);
        if (labelContent && tObj) {
            labelContent.title = tObj?.title;
            labelContent.description = tObj?.description;
        }
    }
    //-------------------------------------------------------------------
    // 5. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);

    // ========================= Render Function =================================
    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
        >
            <div className={`qui-deckcard-label`}>
                <Ribbon
                    asEmphasis={content?.tag}
                    withTranslation={props.withTranslation}
                />
            </div>
            <div className={`qui ${quommonClasses.parentClasses}`} onClick={props.onClick}

                style={colors.cardColors}
            >
                <div className="qui-left">
                    <div>
                        <img className="image" src={props.content?.image} />
                    </div>
                </div>
                <div className={`qui-middle`}>
                    <div className="qui-course-title" style={colors.textColors}>
                        <h1>{labelContent?.title}</h1>
                    </div>
                    <div className="qui-description">
                        <h3>{labelContent?.description}</h3>
                    </div>
                </div>

                <div className={`qui-right`}>
                    <div className={`${quommonClasses.childClasses}`} style={colors.accentColors}
                    >
                        <i className={content?.icon}></i>
                    </div>
                    <div className="banner" style={colors.bannerColors}></div>
                    <div>
                        {_.map(content?.topics, (topics, index) => {
                            return (
                                <div
                                    key={topics.name + index}
                                ><i
                                    className={`${quommonClasses.childClasses} ${topics.checked ? "fa fa-check-square" : "far fa-square"
                                        }`}
                                    style={colors.accentColors}
                                ></i></div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
