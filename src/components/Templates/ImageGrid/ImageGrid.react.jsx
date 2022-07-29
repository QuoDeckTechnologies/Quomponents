// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid"
import _ from "lodash";
import { motion } from "framer-motion";
import {
    getAnimation,
    getQuommons,
    resolveImage
} from "../../../common/javascripts/helpers.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./ImageGrid.scss";
import "../../../common/stylesheets/overrule.scss";
import SlideHeader from "../../SlideHeader/SlideHeader.react";
import TextBlock from "../../TextBlock/TextBlock.react";
import ClickableImage from "../../ClickableImage/ClickableImage.react";

ImageGrid.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
      ImageGrid data should be passed in data field and it is a required field
      */
    data: PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string,
        caption: PropTypes.string,
        image: PropTypes.object,
        backgroundImage: PropTypes.object,
        Presenter: PropTypes.object,
        grid: PropTypes.array,
    }),
    /**
      ImageGrid can set presenter image from imageLibrary array
      */
    imageLibrary: PropTypes.array,
    /**
      ImageGrid slideId should be passed with props, to specify the slide.
      */
    slideId: PropTypes.number,
    //=======================================
    // Quommon props
    //=======================================
    /**
      Use to override component colors 
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
      ImageGrid component must have the onClick function passed as props
      */
    onClick: PropTypes.func.isRequired,
};

ImageGrid.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    data: {
        title: "",
        subtitle: "",
        caption: "",
        image: {},
        backgroundImage: {},
        grid: [],
        presenter: {},
    },
    imageLibrary: [{}],
    slideId: 0,
    //=======================================
    // Quommon props
    //=======================================
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
- Displays a ImageGrid with TextBlock, clickableImages and a SlideHeader
**/
export default function ImageGrid(props) {
    const { data, withColor, imageLibrary } = props;
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
    let quommonClasses = getQuommons(props, "ImageGrid");

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
    //-------------------------------------------------------------------
    // Function to return a view for ImageGrid
    //-------------------------------------------------------------------
    const ImageGridView = (data) => {
        return (
            <div className="qui-image-grid-card" key={"imageGrid-slide-" + props.slideId} style={{
                ...background,
                backgroundColor: withColor?.backgroundColor,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}>
                <div className={`${quommonClasses.childClasses}`} key={"imageGrid-" + props.slideId}>
                    {!data?.image && (data?.title || data?.subtitle) && (
                        <SlideHeader
                            title={data?.title}
                            subtitle={data?.subtitle}
                            withColor={slideHeaderColors} />
                    )}
                    {data?.image && (
                        <img className="qui-image-grid-image" src={resolveImage(data?.image.id, imageLibrary)} alt="" />
                    )}
                </div>
                <Grid container
                    rowSpacing={{ xs: 0.5, sm: 0.5, md: 0.5, lg: 0.5, xl: 0.5 }}
                    columnSpacing={{ xs: 0.5, sm: 0.5, md: 0.5, lg: 0.5, xl: 0.5 }} className="qui-image-grid-container">
                    {_.map(data?.grid, (image, index) => {
                        return (
                            <Grid key={index} item xs={6} sm={6} md={6} lg={6}
                                className="qui-grid-images">
                                <ClickableImage {...props} content={{ image: resolveImage(image.image.id, imageLibrary) }} onClick={() => props.onClick(index)} />
                            </Grid>
                        );
                    })}
                </Grid>
                <TextBlock {...props} content={data?.caption} withColor={textBlockColors} />
            </div>
        );
    };
    //-------------------------------------------------------------------
    // Function to return a view for ImageGrid with presenter
    //-------------------------------------------------------------------
    const ImageGridPresenterView = (data) => {
        return (
            <div className="qui-image-grid-presenter-container"
                style={{
                    ...background,
                    backgroundColor: withColor?.backgroundColor,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <div className="qui-image-grid-presenter-title" >
                    <TextBlock {...props}
                        content={data?.title}
                        asFloated="left"
                        withColor={textBlockColors} />
                </div>
                <div className="qui-image-grid-presenter-sub-title">
                    <TextBlock {...props}
                        content={data?.subtitle}
                        asFloated="left"
                        withColor={textBlockColors} />
                </div>
                <Grid container
                    rowSpacing={{ xs: 0.5, sm: 0.5, md: 0.5, lg: 0.5, xl: 0.5 }}
                    columnSpacing={{ xs: 0.5, sm: 0.5, md: 0.5, lg: 0.5, xl: 0.5 }} className="qui-image-grid-container">
                    {_.map(data.grid, (image, index) => {
                        return (
                            <Grid key={index} item xs={6} sm={6} md={6} lg={6}>
                                <ClickableImage {...props} content={{ image: resolveImage(image.image.id, imageLibrary) }} onClick={() => props.onClick(index)} />
                            </Grid>
                        );
                    })}
                </Grid>
                <div className="qui-image-grid-presenter-caption">
                    <TextBlock {...props}
                        content={data?.caption}
                        asFloated="left"
                        conversation={true}
                        position="right-bottom"
                        withColor={textBlockColors} />
                </div>
                {hasPresenter && (
                    <img
                        className="qui-image-grid-presenter"
                        src={resolveImage(data.presenter.id, imageLibrary)}
                        alt=""
                    />
                )}
            </div>

        );
    };
    //-------------------------------------------------------------------
    //  Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props);

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
        >{data &&
            <div>
                {data?.presenter ? ImageGridPresenterView(data) : ImageGridView(data)}
            </div>}
        </motion.div>
    );
}