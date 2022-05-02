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


    const [openUploadModal, setOpenUploadModal] = useState(props.isOpen);

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
                className={`qui-deck-analysis-modal-container`}
            >
                <div
                    className={`qui-deck-analysis-modal-heading ${quommonClasses.childClasses}`}
                >
                    <h2>{"Deck Analysis"}</h2>
                </div>
                <div
                    className={`qui-deck-analysis-modal-blocks ${quommonClasses.childClasses}`}
                >
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
                            header: " Voiceover",
                            fheader: "Vo's",
                            message:
                                "Deck Should have 10 to 40 slides",
                            icon: " fa fa-desktop",
                            slideCount: 18,
                            status: false,
                        }}
                    /><DeckAnalysisBlock
                        {...props}
                        content={{
                            header: " Voiceover",
                            fheader: "Vo's",
                            message:
                                "Deck Should have 10 to 40 slides",
                            icon: " fa fa-desktop",
                            slideCount: 18,
                            status: true,
                        }}
                    /><DeckAnalysisBlock
                        {...props}
                        content={{
                            header: " Voiceover",
                            fheader: "Vo's",
                            message:
                                "Deck Should have 10 to 40 slides",
                            icon: " fa fa-desktop",
                            slideCount: 18,
                            status: true,
                        }}
                    /><DeckAnalysisBlock
                        {...props}
                        content={{
                            header: " Voiceover",
                            fheader: "Vo's",
                            message:
                                "Deck Should have 10 to 40 slides",
                            icon: " fa fa-desktop",
                            slideCount: 18,
                            status: true,
                        }}
                    /><DeckAnalysisBlock
                        {...props}
                        content={{
                            header: " Voiceover",
                            fheader: "Vo's",
                            message:
                                "Deck Should have 10 to 40 slides",
                            icon: " fa fa-desktop",
                            slideCount: 18,
                            status: true,
                        }}
                    /><DeckAnalysisBlock
                        {...props}
                        content={{
                            header: " Voiceover",
                            fheader: "Vo's",
                            message:
                                "Deck Should have 10 to 40 slides",
                            icon: " fa fa-desktop",
                            slideCount: 18,
                            status: false,
                        }}
                    /><DeckAnalysisBlock
                        {...props}
                        content={{
                            header: " Voiceover",
                            fheader: "Vo's",
                            message:
                                "Deck Should have 10 to 40 slides",
                            icon: " fa fa-desktop",
                            slideCount: 18,
                            status: false,
                        }}
                    />
                </div>
                <div className="qui-deck-analysis-modal-close-btn">
                    <h2>Status :</h2>

                    <Button
                        {...props}
                        asSize="normal"
                        content={"Close"}
                        asVariant="warning"
                        asEmphasis="conatined"
                        asFloated="right"
                        withTranslation={null}
                        withAnimation={null}
                        onClick={() => {
                            setOpenUploadModal(false);
                        }} />
                </div>
                <ArcMenu
                    {...props}
                    type="close"
                    arcIcon="close"
                    position="top-right"
                    onClick={() => {
                        setOpenUploadModal(false);
                    }}
                />
            </div>
        </Modal>
    );
}
