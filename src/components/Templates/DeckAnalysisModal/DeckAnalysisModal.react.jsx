// Import npm packages
import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "@mui/material/Modal";
import _ from "lodash";
import { getQuommons, getAnimation } from "../../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./DeckAnalysisModal.scss";
import "../../../common/stylesheets/overrule.scss";
import ArcMenu from "../../ArcMenu/ArcMenu.react";
import DeckAnalysisBlock from "../../DeckAnalysisBlock/DeckAnalysisBlock.react"
import Button from "../../Buttons/Button/Button.react";

DeckAnalysisModal.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
      Use to define if modal is open
      */
    isOpen: PropTypes.bool.isRequired,
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
      imageUploadModal component must have the onClick function passed as props
      */
    onClick: PropTypes.func.isRequired,
};

DeckAnalysisModal.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    isOpen: true,
    //=======================================
    // Quommon props
    //=======================================
    asVariant: "secondary",
    withAnimation: null,
    isDisabled: false,
    isHidden: false,
};
/**
## Notes
- The design system used for component is Material UI (@mui/material)
- The animation system used for component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function DeckAnalysisModal(props) {
    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "deck-analysis-modal");
    quommonClasses.childClasses += ` variant-${props.asVariant}-text`;
    //-------------------------------------------------------------------
    // 2. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);

    // let getSlidesCheck = () => {
    //     return (
    //         content.length > 9 &&
    //         content.length < 41
    //     );
    // };

    let getTextCheck = () => {
        // let textCheck = true;
        // let culpritSlideText = [];
        // let defaultText = 0;
        // _.each(content, slide => {
        //     _.each(_.toPairs(slide.data), component => {
        //         switch (ComponentInputs[component[0]].type) {
        //             case "text":
        //             case "textarea":
        //                 /* istanbul ignore next - Implicit check */
        //                 if (
        //                     component[1].indexOf("<<") !== -1 ||
        //                     component[1].indexOf(">>") !== -1
        //                 ) {
        //                     textCheck = false;
        //                     culpritSlideText.push(slide.slideSeq + 1);
        //                     defaultText++;
        //                 }
        //                 break;
        //             case "bullets":
        //                 _.each(component[1], li => {
        //                     /* istanbul ignore next - Implicit check */
        //                     if (
        //                         li.indexOf("<<") !== -1 ||
        //                         li.indexOf(">>") !== -1
        //                     ) {
        //                         textCheck = false;
        //                         culpritSlideText.push(slide.slideSeq + 1);
        //                         defaultText++;
        //                     }
        //                 });
        //                 break;
        //             case "imagelist":
        //             case "radiolist":
        //             case "checklist":
        //                 _.each(component[1], li => {
        //                     /* istanbul ignore next - Implicit check */
        //                     if (
        //                         li.text.indexOf("<<") !== -1 ||
        //                         li.text.indexOf(">>") !== -1
        //                     ) {
        //                         textCheck = false;
        //                         culpritSlideText.push(slide.slideSeq + 1);
        //                         defaultText++;
        //                     }
        //                 });
        //                 break;
        //             default:
        //         }
        //     });
        // });
        return {
            status: true,
            // errorCount: defaultText,
            // culprit: _.uniq(culpritSlideText)
        };
    };

    let getImagesCheck = () => {
        // let imagesCheck = true;
        // let culpritSlideImage = [];
        // let defaultImages = 0;
        // _.each(content, slide => {
        //     _.each(_.toPairs(slide.data), component => {
        //         switch (ComponentInputs[component[0]].type) {
        //             case "image":
        //                 /* istanbul ignore next - Implicit check */
        //                 if (
        //                     ComponentInputs[component[0]].name !==
        //                     "Presenter Character" &&
        //                     (component[1] === "default11" ||
        //                         component[1] === "default43")
        //                 ) {
        //                     imagesCheck = false;
        //                     culpritSlideImage.push(slide.slideSeq + 1);
        //                     defaultImages++;
        //                 }
        //                 break;
        //             case "imagelist":
        //             case "optionimages":
        //                 _.each(component[1], li => {
        //                     /* istanbul ignore next - Implicit check */
        //                     if (
        //                         li.image === "default11" ||
        //                         li.image === "default43"
        //                     ) {
        //                         imagesCheck = false;
        //                         culpritSlideImage.push(slide.slideSeq + 1);
        //                         defaultImages++;
        //                     }
        //                 });
        //                 break;
        //             default:
        //         }
        //     });
        // });
        return {
            status: true,
            // errorCount: defaultImages,
            // culprit: _.uniq(culpritSlideImage)
        };
    };

    let getVideoCheck = () => {
        // let videoCheck = true;
        // let culpritSlideVideo = [];
        // let defaultVideos = 0;
        // _.each(content, slide => {
        //     _.each(_.toPairs(slide.data), component => {
        //         if (component[0] === "video")
        //             if (component[1].indexOf("NpEaa2P7qZI") !== -1) {
        //                 videoCheck = false;
        //                 culpritSlideVideo.push(slide.slideSeq + 1);
        //                 defaultVideos++;
        //             }
        //     });
        // });
        return {
            status: true,
            // errorCount: defaultVideos,
            // culprit: _.uniq(culpritSlideVideo)
        };
    };

    let getCommentsCheck = () => {
        // let commentsCheck = true;
        // let culpritSlideComments = [];
        // let openComments = 0;
        // _.each(content, slide => {
        //     _.each(slide.comments, comment => {
        //         if (!comment.status) {
        //             commentsCheck = false;
        //             culpritSlideComments.push(slide.slideSeq + 1);
        //             openComments++;
        //         }
        //     });
        // });
        return {
            status: true,
            // errorCount: openComments,
            // culprit: _.uniq(culpritSlideComments)
        };
    };

    let getVoCheck = () => {
        // let voCheck = true;
        // let culpritSlideVo = [];
        // let missingVo = 0;
        // if (voEnabled)
        //     _.each(content, slide => {
        //         if (slide.voiceover === null) {
        //             voCheck = false;
        //             culpritSlideVo.push(slide.slideSeq + 1);
        //             missingVo++;
        //         }
        //     });
        return {
            status: true,
            //     errorCount: missingVo,
            //     culprit: _.uniq(culpritSlideVo)
        };
    };

    let getVisualCheck = () => {
        // let visualTotal = 0;
        // let visualTemplates = _.map(
        //     _.filter(TemplateList, tmpl => {
        //         return tmpl.audit.visual === true;
        //     }),
        //     "key"
        // );
        // _.each(content, slide => {
        //     if (visualTemplates.indexOf(slide.template) !== -1) visualTotal++;
        // });
        // let visualScore = Math.round(
        //     (100 * visualTotal) / content.length
        // );
        // let visualCheck = visualScore > 30;

        return {
            status: true,
            // score: visualScore
        };
    };

    let getInteractiveCheck = () => {
        // let interactiveTotal = 0;
        // let interactiveTemplates = _.map(
        //     _.filter(TemplateList, tmpl => {
        //         return tmpl.audit.interactive === true;
        //     }),
        //     "key"
        // );
        // _.each(content, slide => {
        //     if (interactiveTemplates.indexOf(slide.template) !== -1)
        //         interactiveTotal++;
        // });
        // let interactiveScore = Math.round(
        //     (100 * interactiveTotal) / content.length
        // );
        // let interactiveCheck = interactiveScore > 30;

        return {
            status: true,
            // score: interactiveScore
        };
    };

    let getVerbosityCheck = () => {
        // let verbosityTotal = 0;
        // let verboseTemplates = _.map(
        //     _.filter(TemplateList, tmpl => {
        //         return tmpl.audit.verbose === true;
        //     }),
        //     "key"
        // );
        // _.each(content, slide => {
        //     if (verboseTemplates.indexOf(slide.template) !== -1)
        //         verbosityTotal++;
        // });
        // let verbosityScore = Math.round(
        //     (100 * verbosityTotal) / content.length
        // );
        // let verbosityCheck = verbosityScore < 30;

        return {
            status: true,
            //score: verbosityScore
        };
    };

    let getAllCheck = () => {
        let allCheck =
            //getSlidesCheck() &
            getTextCheck().status &
            getImagesCheck().status &
            getVideoCheck().status &
            getCommentsCheck().status &
            getInteractiveCheck().status &
            getVerbosityCheck().status &
            getVisualCheck().status &
            getVoCheck().status;
        //     if (voEnabled)
        //         allCheck = allCheck & getVoCheck().status;
        return allCheck === 1;
    };

    const [openUploadModal, setOpenModal] = useState(props.isOpen);

    // ========================= Render Function =================================
    return (
        <Modal
            open={openUploadModal}
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
            className={`qui ${quommonClasses.parentClasses}`}
        >
            <div
                className={`qui-deck-analysis-modal-container ${quommonClasses.childClasses}`}
            >
                <div
                    className={`qui-deck-analysis-modal-heading`}
                >
                    <h2>{"Deck Analysis"}</h2>
                </div>
                <div className="qui-deck-analysis-modal-block">
                    <DeckAnalysisBlock
                        {...props}
                        content={{
                            header: "SLIDES",
                            fheader: "SLIDES",
                            message:
                                "Deck Should have 10 to 40 slides",
                            icon: " fa fa-desktop",
                            slideCount: 18,
                            status: true,
                        }}
                    /><DeckAnalysisBlock
                        {...props}
                        content={{
                            header: "Comments",
                            fheader: "COMMENTS",
                            message:
                                "Deck should have no open review comments",
                            icon: " fa fa-desktop",
                            slideCount: 6,
                            status: true,
                        }}
                    /><DeckAnalysisBlock
                        {...props}
                        content={{
                            header: " Voiceovers",
                            fheader: "Vo's",
                            message:
                                "All slides should have voiceovers",
                            icon: " fa fa-desktop",
                            slideCount: 2,
                            status: false,
                        }}
                    /><DeckAnalysisBlock
                        {...props}
                        content={{
                            header: " Text",
                            fheader: "DEFAULTS",
                            message:
                                "Deck should have no placeholder texts",
                            icon: " fa fa-desktop",
                            slideCount: 7,
                            status: true,
                        }}
                    /><DeckAnalysisBlock
                        {...props}
                        content={{
                            header: " Images",
                            fheader: "DEFAULTS",
                            message:
                                "Deck should have no placeholder images",
                            icon: " fa fa-desktop",
                            slideCount: 1,
                            status: true,
                        }}
                    /><DeckAnalysisBlock
                        {...props}
                        content={{
                            header: " Videos",
                            fheader: "DEFAULTS",
                            message:
                                "Deck should have no placeholder videos",
                            icon: " fa fa-desktop",
                            slideCount: 3,
                            status: true,
                        }}
                    /><DeckAnalysisBlock
                        {...props}
                        content={{
                            header: " Visuality",
                            fheader: "PERCENT",
                            message:
                                "At least 30% slides have images or videos",
                            icon: " fa fa-desktop",
                            slideCount: 10,
                            status: true,
                        }}
                    /><DeckAnalysisBlock
                        {...props}
                        content={{
                            header: "Interactivity",
                            fheader: "PERCENT",
                            message:
                                "At least 30%+ slides are interactive",
                            icon: " fa fa-desktop",
                            slideCount: 5,
                            status: false,
                        }}
                    /><DeckAnalysisBlock
                        {...props}
                        content={{
                            header: " Verbosity",
                            fheader: "PERCENT",
                            message:
                                "At most 30% slides are text heavy",
                            icon: " fa fa-desktop",
                            slideCount: 0,
                            status: false,
                        }}
                    />
                </div>
                <div className="qui-deck-analysis-modal-close-icon-btn">
                    <h3><i className={getAllCheck() ? "fa fa-check" : "fa fa-times"}></i>Status : {getAllCheck() ? "OK" : "Failed"}</h3>

                    <Button
                        {...props}
                        content={"Close"}
                        asVariant="warning"
                        asEmphasis="conatined"
                        asFloated="right"
                        onClick={() => {
                            setOpenModal(false);
                        }} />
                </div>
                <ArcMenu
                    {...props}
                    type="close"
                    arcIcon="close"
                    position="top-right"
                    onClick={() => {
                        setOpenModal(false);
                    }}
                />
            </div>
        </Modal >
    );
}
