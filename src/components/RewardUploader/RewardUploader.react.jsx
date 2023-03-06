// Import npm packages
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Input, Button, Label, Modal, Icon, Segment, Grid, Card } from 'semantic-ui-react'
import { getAnimation, getQuommons, getTranslation } from "../../common/javascripts/helpers";
import "../../common/stylesheets/common.css";
import 'semantic-ui-css/semantic.min.css'
import "./RewardUploader.scss";
import "../../common/stylesheets/overrule.scss";
import AvatarAdjustor from "../AvatarAdjustor/AvatarAdjustor.react";

RewardUploader.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    Use to define modal's tile
    */
    title: PropTypes.string.isRequired,
    /**
    Use to provide initial value for reward's image, name, header and content initial value
    */
    image: PropTypes.string,
    rewardName: PropTypes.string,
    rewardHeader: PropTypes.string,
    rewardContent: PropTypes.string,
    /**
    Use to define if modal is open
    */
    isOpen: PropTypes.bool.isRequired,
    /**
    Use to define if modal is Editable
    */
    isEditable: PropTypes.bool,
    //=======================================
    // Quommon props
    //=======================================
    /**
    Use to override component colors and behavior
    */
    withColor: PropTypes.shape({
        textColor: PropTypes.string,
        accentColor: PropTypes.string,
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
    rewardUploadModal component should have the onSubmit function passed as props
    */
    onSubmit: PropTypes.func,
};

RewardUploader.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    title: "Create a Reward",
    image: null,
    rewardName: null,
    rewardHeader: null,
    rewardContent: null,
    isOpen: true,
    isEditable: true,
    //=======================================
    // Quommon props
    //=======================================
    withColor: null,
    withAnimation: null,
    withTranslation: null,

    isHidden: false,
    isFluid: false,
};
/**
## Notes
- The design system used for this component is HTML and CSS
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function RewardUploader(props) {
    //-------------------------------------------------------------------
    // 1. Destructuring data from props
    //-------------------------------------------------------------------
    const { withColor, isEditable } = props;
    //-------------------------------------------------------------------
    // 2. Defining state and variable
    //-------------------------------------------------------------------
    const [rewardName, setRewardName] = useState(props.rewardName ? props.rewardName : null);
    const [rewardHeader, setRewardHeader] = useState(props.rewardHeader ? props.rewardHeader : null);
    const [rewardContent, setRewardContent] = useState(props.rewardContent ? props.rewardContent : null);
    const [image, setImage] = useState(props.image ? props.image : "/assets/reward/reward.png");
    const [openUploadModal, setOpenUploadModal] = useState(props.isOpen);
    const [imgModalOpen, setImgModalOpen] = useState(false);

    useEffect(() => {
        setOpenUploadModal(props.isOpen);
        setRewardName(props.rewardName)
        setRewardHeader(props.rewardHeader)
        setRewardContent(props.rewardContent)
    }, [props.isOpen, props.rewardName, props.rewardHeader, props.rewardContent]);
    //-------------------------------------------------------------------
    // 4. Function to upload image
    //-------------------------------------------------------------------
    const handleChange = (img) => {
        setImage(img)
        setImgModalOpen(false)
    };

    const handleSave = () => {
        if (props.onSubmit) props.onSubmit({
            Image: image,
            Name: rewardName,
            Header: rewardHeader,
            Content: rewardContent
        });
    };

    const handleCancel = () => {
        setOpenUploadModal(false)
    };
    //-------------------------------------------------------------------
    // 5. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "reward-uploader");
    //-------------------------------------------------------------------
    // 6. Translate the text objects in case their is a dictionary provided
    //-------------------------------------------------------------------
    let tObj = null;
    if (
        props.withTranslation?.lang &&
        props.withTranslation.lang !== "" &&
        props.withTranslation.lang !== "en"
    ) {
        tObj = getTranslation(props.withTranslation);
    };
    //-------------------------------------------------------------------
    // 7. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props);
    // ========================= Render Function =================================
    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
        >
            <Modal
                size="small"
                dimmer="blurring"
                open={openUploadModal}
                style={{ borderRadius: "15px" }}
                className={`qui ${quommonClasses.parentClasses}`}
            >
                <div className="qui-reward-uploader-modal-container">
                    <div
                        style={{ backgroundColor: withColor?.accentColor }}
                        className={`qui-reward-uploader-modal-header ${quommonClasses.childClasses}`}
                    >
                        <h2 style={{ color: withColor?.textColor }}>
                            {tObj?.title || props?.title}
                        </h2>
                        <i
                            className="fa fa-times"
                            onClick={() => setOpenUploadModal(false)}
                        />
                    </div>
                    <div className="qui-reward-uploader-modal-body">
                        <Grid>
                            <Grid.Row>
                                {isEditable && <Grid.Column width={10}>
                                    <Segment>
                                        <p>
                                            Create a reward to incentivize your audience
                                        </p>
                                        <Grid>
                                            <Grid.Row>
                                                <Grid.Column>
                                                    <Button
                                                        onClick={() => { setImgModalOpen(true) }}
                                                        icon
                                                        fluid
                                                        labelPosition='right'
                                                        className="qui-reward-uploader-save-button">
                                                        {tObj?.buttons?.chooseFile || "Upload Reward Image"}
                                                        <Icon name='upload' className="qui-reward-uploader-save-button-icon" />
                                                    </Button>
                                                    <AvatarAdjustor
                                                        isOpen={imgModalOpen}
                                                        onChange={handleChange}
                                                        image={image}
                                                    />
                                                    <Input
                                                        fluid
                                                        value={rewardName}
                                                        onChange={(e) => { setRewardName(e.target.value) }}
                                                        style={{
                                                            marginTop: "3px",
                                                        }}
                                                    >
                                                        <Label
                                                            style={{
                                                                backgroundColor: withColor?.accentColor,
                                                                color: withColor?.textColor,
                                                            }}
                                                            className="qui-input-lables">
                                                            {"Name"}
                                                        </Label>
                                                        <input
                                                            onClick={(e) => e.stopPropagation()}
                                                            onKeyDown={(e) =>
                                                                e.keyCode === 32 ? e.stopPropagation() : null
                                                            }
                                                        />
                                                    </Input>
                                                    <Input
                                                        fluid
                                                        value={rewardHeader}
                                                        onChange={(e) => { setRewardHeader(e.target.value) }}
                                                        style={{
                                                            marginTop: "3px",
                                                        }}
                                                    >
                                                        <Label
                                                            style={{
                                                                backgroundColor: withColor?.accentColor + "!important",
                                                                color: withColor?.textColor,
                                                            }}
                                                            className="qui-input-lables">
                                                            {"Reward"}
                                                        </Label>
                                                        <input
                                                            onClick={(e) => e.stopPropagation()}
                                                            onKeyDown={(e) =>
                                                                e.keyCode === 32 ? e.stopPropagation() : null
                                                            }
                                                        />
                                                    </Input>
                                                    <Input
                                                        fluid
                                                        value={rewardContent}
                                                        onChange={(e) => { setRewardContent(e.target.value) }}
                                                        style={{
                                                            marginTop: "3px",
                                                        }}
                                                    >
                                                        <Label
                                                            style={{
                                                                backgroundColor: withColor?.accentColor,
                                                                color: withColor?.textColor,
                                                            }}
                                                            className="qui-input-lables">
                                                            {"Contact Details"}
                                                        </Label>
                                                        <input
                                                            onClick={(e) => e.stopPropagation()}
                                                            onKeyDown={(e) =>
                                                                e.keyCode === 32 ? e.stopPropagation() : null
                                                            }
                                                        />
                                                    </Input>
                                                </Grid.Column>
                                            </Grid.Row>
                                        </Grid>
                                    </Segment>
                                </Grid.Column>}
                                <Grid.Column width={isEditable ? 6 : 16}>
                                    <Card
                                        image={image ? image : "/assets/default.jpeg"}
                                        header={rewardName}
                                        meta="Reward"
                                        description={rewardHeader}
                                        extra={rewardContent}
                                    />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </div>
                    <div className="qui-reward-uploader-buttons">
                        {isEditable ?
                            <Button
                                disabled={
                                    rewardName === "" ||
                                    rewardHeader === "" ||
                                    rewardContent === "" ||
                                    image === ""
                                }
                                onClick={handleSave}
                                icon
                                labelPosition='right'
                                className="qui-reward-uploader-save-button">
                                {tObj?.buttons?.save || "Save"}
                                <Icon name='check' className="qui-reward-uploader-save-button-icon" />
                            </Button> :
                            <Button
                                onClick={handleCancel}
                                icon
                                labelPosition='left'
                                className="qui-reward-uploader-cancel-button">
                                {tObj?.buttons?.cancel || "Cancel"}
                                <Icon name='delete' className="qui-reward-uploader-cancel-button-icon" />
                            </Button>
                        }
                    </div>
                </div>
            </Modal>
        </motion.div>
    );
}
