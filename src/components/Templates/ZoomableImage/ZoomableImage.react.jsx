// Import npm packages
import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { PinchView } from "react-pinch-zoom-pan";
import {
    getAnimation,
    getQuommons,
    resolveImage,
} from "../../../common/javascripts/helpers.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./ZoomableImage.scss";
import "../../../common/stylesheets/overrule.scss";
import SlideHeader from "../../SlideHeader/SlideHeader.react";
import TextBlock from "../../TextBlock/TextBlock.react";
import Button from "../../Buttons/Button/Button.react";
import PinchImage from "../../../assets/pinch.png"

ZoomableImage.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
      ZoomableImage data should be passed in data field and it is a required field
      */
    data: PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string,
        caption: PropTypes.string,
        zoomableImage: PropTypes.object,
        image: PropTypes.object,
        backgroundImage: PropTypes.object,
        presenter: PropTypes.object,
    }),
    /**
      ZoomableImage can set presenter image from imageLibrary array
      */
    imageLibrary: PropTypes.array,
    /**
      ZoomableImage slideId should be passed with props, to specify the slide.
      */
    slideId: PropTypes.number,
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
        textBlockTextColor: PropTypes.string,
        textBlockBackgroundColor: PropTypes.string,
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
      Use to show/hide the component
    */
    isHidden: PropTypes.bool,
    /**
      Use to enable/disable the component
      */
    isDisabled: PropTypes.bool,
    /**
      ZoomableImage component must have the onClick function passed as props
      */
    onClick: PropTypes.func.isRequired,
};

ZoomableImage.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    data: {
        title: "",
        subtitle: "",
        caption: "",
        zoomableImage: "",
        image: "",
        backgroundImage: {},
        zoomable: [],
        presenter: {},
    },
    slideId: 0,
    //=======================================
    // Quommon props
    //=======================================
    asVariant: "warning",
    withColor: null,
    withAnimation: null,
    isHidden: false,
    isDisabled: false,

};
/**
## Notes
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- Displays a ZoomableImage with TextBlock, Image and a SlideHeader
**/
export default function ZoomableImage(props) {
    const { data, withColor, imageLibrary, slideId } = props;

    const [fullScreen, setfullScreen] = useState(false);
    const [pinch, setPinch] = useState(false);

    const toggleFullscreen = (visible) => {
        setfullScreen(visible);
        setPinch(true)
        setTimeout(() => {
            setPinch(false);
        }, 1000);
    }

    //-------------------------------------------------------------------
    // Variable to set presenter image
    //-------------------------------------------------------------------
    let hasPresenter =
        data?.presenter !== undefined &&
        data?.presenter.id !== undefined &&
        data?.presenter.id !== "default43";

    //-------------------------------------------------------------------
    // Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "zoomable-image");

    //-------------------------------------------------------------------
    //  Setting the colors of imported components
    //-------------------------------------------------------------------
    let slideHeaderColors = {
        textColor: props.withColor?.slideHeaderTextColor,
        accentColor: props.withColor?.slideHeaderAccentColor,
        backgroundColor: props.withColor?.slideHeaderBackgroundColor
    }
    let textBlockColors = {
        textColor: props.withColor?.textBlockTextColor,
        backgroundColor: props.withColor?.textBlockBackgroundColor
    }
    let SlideHeaderText = {
        title: data?.title,
        subTitle: data?.subtitle,
    }
    //-------------------------------------------------------------------
    // Function to return a view for zoomable image
    //------------------------------------------------------------------
    const zoomabelImage = (data) => {
        if (fullScreen) {
            return (
                <PinchView
                    backgroundColor="#666"
                    maxScale={4}
                    containerRatio={(400 / 600) * 100}
                >
                    <div className="qui-zoomable-image-segment">
                        <div className={`${quommonClasses.childClasses}`} key={"zoomable-image" + slideId}>
                            <div className="qui-zoomable-image-conteiner">
                                <div className="qui-pinchview-zoomable-icon">
                                    <Button
                                        withIcon={{ icon: "fa fa-times", size: "1em", position: "left" }}
                                        asVariant={"warning"}
                                        onClick={() => toggleFullscreen(false)}
                                    />
                                </div>

                                {pinch && <img className="qui-pinchview-zoomable-hint" src={PinchImage} alt="" />}

                                {data?.zoomableImage && (
                                    <img className="qui-pinchview-zoomable-image" src={resolveImage(data.zoomableImage.id, imageLibrary)} alt="" />
                                )}
                            </div>
                        </div>
                    </div>
                </PinchView>
            );
        }
        else {
            return (
                <div className="qui-zoomable-image-card" key={"zoomable-image-slide-" + slideId} style={{
                    ...background,
                    backgroundColor: withColor?.backgroundColor,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}>
                    <div className={`${quommonClasses.childClasses}`} key={"zoomable-image" + slideId}>
                        {!data?.image && (data?.title || data?.subtitle) && (
                            <SlideHeader
                                content={SlideHeaderText}
                                withColor={slideHeaderColors} />
                        )}
                        <div className="qui-zoomable-icon">
                            {<Button
                                withIcon={{ icon: "fas fa-expand", size: "1em", position: "left" }}
                                asVariant={"warning"}
                                onClick={() => toggleFullscreen(true)}
                            />}
                        </div>

                        {data?.image && (
                            <img className="qui-header-image" src={resolveImage(data.image.id, imageLibrary)} alt="" />
                        )}
                        <div className="qui-pinchview-zoom">
                            {pinch && <img className="qui-pinchview-image" src={PinchImage} alt="" />}

                            {data?.zoomableImage && (
                                <img className="qui-zoomable-picture" src={resolveImage(data.zoomableImage.id, imageLibrary)} alt="" />
                            )}
                        </div>
                        <TextBlock {...props} content={data?.caption} withColor={textBlockColors} />
                    </div>
                </div>
            )
        }
    };
    //-------------------------------------------------------------------
    // Function to return a view for zoomable with presenter
    //-------------------------------------------------------------------
    const zoomableImagePresenterView = (data) => {
        if (fullScreen) {
            return (
                <PinchView
                    backgroundColor="#666"
                    maxScale={4}
                    containerRatio={(400 / 600) * 100}
                >
                    <div className="qui-zoomable-image-segment">
                        <div className={`${quommonClasses.childClasses}`} key={"zoomable-image" + slideId}>
                            <div className="qui-zoomable-image-container">
                                <div className="qui-pinchview-zoomable-icon">
                                    <Button
                                        withIcon={{ icon: "fa fa-times", size: "1em", position: "left" }}
                                        asVariant={"warning"}
                                        onClick={() => toggleFullscreen(false)}
                                    />
                                </div>
                                {pinch && <img className="qui-pinchview-zoomable-hint" src={PinchImage} alt="" />}

                                {data?.zoomableImage && (
                                    <img className="qui-pinchview-zoomable-image" src={resolveImage(data.zoomableImage.id, imageLibrary)} alt="" />
                                )}
                            </div>
                        </div>
                    </div >
                </PinchView >
            );
        }
        else {
            return (

                <div className="qui-zoomable-image-presenter-container"
                    style={{
                        ...background,
                        backgroundColor: withColor?.backgroundColor,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}
                >
                    <div className="qui-zoomable-image-presenter-title" >
                        <TextBlock {...props}
                            content={data?.title}
                            asFloated="left"
                            withColor={textBlockColors} />
                    </div>
                    <div className="qui-zoomable-image-presenter-sub-title">
                        <TextBlock {...props}
                            content={data?.subtitle}
                            asFloated="left"
                            withColor={textBlockColors} />
                    </div>
                    <div className="qui-zoomable-icon">
                        {<Button
                            withIcon={{ icon: "fas fa-expand", size: "1em", position: "left" }}
                            asVariant={"warning"}
                            onClick={() => toggleFullscreen(true)}
                        />}
                    </div>
                    <div className="qui-pinchview-zoom">
                        {pinch && <img className="qui-pinchview-image" src={PinchImage} alt="" />}

                        {data?.zoomableImage && (
                            <img className="qui-zoomable-picture" src={resolveImage(data.zoomableImage.id, imageLibrary)} alt="" />
                        )}
                    </div>

                    <div className="qui-zoomable-image-presenter-caption">
                        <TextBlock {...props}
                            content={data?.caption}
                            asFloated="left"
                            conversation={true}
                            position="right-bottom"
                            withColor={textBlockColors} />
                    </div>
                    {hasPresenter && (
                        <img
                            className="qui-zoomable-image-presenter"
                            src={resolveImage(data.presenter.id, imageLibrary)}
                            alt=""
                        />
                    )}
                </div>
            );
        }
    };
    //-------------------------------------------------------------------
    //  Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);

    //-------------------------------------------------------------------
    // Function to set background for presenter view
    //-------------------------------------------------------------------
    const getBackground = () => {
        if (data?.backgroundImage) {
            return {
                backgroundImage: `url(${resolveImage(
                    data?.backgroundImage.id,
                    imageLibrary
                )})`,
            };
        }
    };
    const getPresenterBackground = () => {
        if (data?.backgroundImage) {
            return {
                backgroundImage: `url(${resolveImage(
                    data?.backgroundImage.id,
                    imageLibrary
                )})`,
            };
        }
    };
    const background = data?.presenter ? getPresenterBackground() : getBackground();

    // ========================= Render Function =================================
    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui ${quommonClasses.parentClasses} `}
        >
            {data && <div>
                {data?.presenter ? zoomableImagePresenterView(data) : zoomabelImage(data)}
            </div>}
        </motion.div>
    );
}