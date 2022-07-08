// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
    getAnimation,
    getQuommons,
    resolveImage
} from "../../../common/javascripts/helpers.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./Popuplist.scss";
import "../../../common/stylesheets/overrule.scss";
import SlideHeader from "../../SlideHeader/SlideHeader.react";
import ButtonBank from "../../ButtonBank/ButtonBank.react";

Popuplist.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    Popuplist data should be passed in data field and it is a required field
    */
    data: PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string,
        image: PropTypes.object,
        backgroundImage: PropTypes.object,
        popupitems: PropTypes.array,
    }).isRequired,
    slideId: PropTypes.number,
    /**
    Popuplist can set image & backgroundImage from imageLibrary array
    */
    imageLibrary: PropTypes.array,
    /**
    Set action emphasis in increasing order 
    */
    asEmphasis: PropTypes.oneOf(["text", "outlined", "contained"]),
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
        slideHeaderTextColor: PropTypes.string,
        slideHeaderAccentColor: PropTypes.string,
        slideHeaderBackgroundColor: PropTypes.string,
        buttonBackgroundColor: PropTypes.string,
        buttonTextColor: PropTypes.string,
        buttonHoverBackgroundColor: PropTypes.string,
        buttonHoverTextColor: PropTypes.string,
        backgroundColor: PropTypes.string
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
    Use to enable/disable the component
    */
    isDisabled: PropTypes.bool,
    /**
    Use to show/hide the component
    */
    isHidden: PropTypes.bool,
    /**
    Popuplist component must have the onClick function passed as props
    */
    onClick: PropTypes.func.isRequired,
};

Popuplist.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    data: {},
    slideId: 0,
    asEmphasis: "contained",
    //=======================================
    // Quommon props
    //=======================================
    asVariant: "primary",
    withColor: null,
    withAnimation: null,
    isDisabled: false,
    isHidden: false,
};
/**
## Notes
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- Displays a Popuplist with a Title and Subtitle, the user can navigate through each options by clicking on the buttons, we can switch between the image and SlideHeader by adding or removing the image prop.
**/
export default function Popuplist(props) {
    let { data } = props;
    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "slide-popup-list");
    quommonClasses.childClasses += ` variant-${props.asVariant}-text`;

    //-------------------------------------------------------------------
    // 2. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props);

    //-------------------------------------------------------------------
    // 3. Setting the colors of the imported components
    //-------------------------------------------------------------------
    let slideHeaderColors = {
        textColor: props.withColor?.slideHeaderTextColor,
        accentColor: props.withColor?.slideHeaderAccentColor,
        backgroundColor: props.withColor?.slideHeaderBackgroundColor,
    };

    //-------------------------------------------------------------------
    // 4. Function to return a view for title
    //-------------------------------------------------------------------
    const getView = (data) => {
        if ((!data?.image || data?.image?.id === "") && (data?.title || data?.subtitle)) {
            return (
                <SlideHeader
                    content={{ title: data?.title, subTitle: data?.subtitle }}
                    withColor={slideHeaderColors}
                />
            );
        } else if (data?.image) {
            return (
                data?.image && (
                    <img
                        className="qui-slide-popup-list-image"
                        src={resolveImage(data?.image.id, props.imageLibrary)}
                        alt="slide"
                    />
                )
            );
        }
    };

    //-------------------------------------------------------------------
    // 5. Function to set background
    //-------------------------------------------------------------------
    const getBackground = () => {
        if (data?.backgroundImage && (data?.backgroundImage?.id !== "" && data?.backgroundImage?.id)) {
            return {
                backgroundImage: `url(${resolveImage(
                    data?.backgroundImage.id,
                    props.imageLibrary
                )})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            };
        } else {
            return {
                backgroundColor: props.withColor?.backgroundColor ? props.withColor?.backgroundColor : "#ffffff"
            }
        }
    };
    const background = getBackground();

    //-------------------------------------------------------------------
    // 6. Variable for ButtonBank content props
    //-------------------------------------------------------------------
    let optionsArray = [];
    data?.popupitems?.forEach((item) => optionsArray.push(item?.option?.toLowerCase()));

    // ========================= Render Function =================================
    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui ${quommonClasses.parentClasses}`}
        >
            {data && (
                <div
                    className="qui-slide-popup-list-card"
                    key={"slide-popup-list" + props.slideId}
                    style={{ ...background }}
                >
                    {getView(data)}
                    <div className="qui-slide-popup-list-container">
                        <ButtonBank
                            {...props}
                            content={optionsArray}
                            asSize="massive"
                            asFloated="none"
                            withColor={{
                                backgroundColor: props.withColor?.buttonBackgroundColor,
                                textColor: props.withColor?.buttonTextColor,
                                hoverBackgroundColor: props.withColor?.buttonHoverBackgroundColor,
                                hoverTextColor: props.withColor?.buttonHoverTextColor,
                            }}
                            withAnimation={null}
                            onClick={(e) =>
                                props.onClick(
                                    optionsArray.indexOf(e.target.innerText?.toLowerCase())
                                )
                            }
                        />
                    </div>
                </div>
            )}
        </motion.div>
    );
}