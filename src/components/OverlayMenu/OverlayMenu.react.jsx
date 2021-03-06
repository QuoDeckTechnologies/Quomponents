import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Avatar from "../AppMenu/Avatar/Avatar.react";
import IconLink from "../Buttons/IconLink/IconLink.react";
import Grid from "@mui/material/Grid";
import _ from "lodash";
import { motion } from "framer-motion";
import {
    getQuommons,
    getAnimation,
    getTranslation,
} from "../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./OverlayMenu.scss";
import "../../common/stylesheets/overrule.scss";
import Modal from "@mui/material/Modal";

OverlayMenu.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    Use to define if modal is open
    */
    isOpen: PropTypes.bool.isRequired,
    /**
    Use to define user image to component
    */
    withUser: PropTypes.string,
    /**
    Use to define buttons to component
    */
    content: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.string,
            label: PropTypes.string,
            link: PropTypes.string,
        })
    ).isRequired,
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
    Use to define component text size in increasing order
    */
    asSize: PropTypes.oneOf([
        "tiny",
        "small",
        "normal",
        "big",
        "huge",
        "massive",
    ]),
    /**
    Use to float the component in parent container
    */
    asFloated: PropTypes.oneOf(["left", "right", "none", "inline"]),
    /**
    Use to override component colors and behavior
    */
    withColor: PropTypes.shape({
        backgroundColor: PropTypes.string,
        accentColor: PropTypes.string,
        textColor: PropTypes.string,
        hoverTextColor: PropTypes.string,
    }),
    /**
    Use to add an icon to the component
    */
    withIcon: PropTypes.shape({
        icon: PropTypes.string,
    }),
    /**
    Use to add a heading label, a footer caption or a title popover to the component
    */
    withLabel: PropTypes.shape({
        format: PropTypes.oneOf(["label", "caption", "popover"]),
        content: PropTypes.string,
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
    Use to show/hide the component
    */
    isHidden: PropTypes.bool,
    /**
    Use to enable/disable the component
    */
    isDisabled: PropTypes.bool,
    /**
    OverlayMenu component can have the onClose function passed as props to return open/close state
    */
    onClose: PropTypes.func,
    /**
    OverlayMenu component must have the onClick function passed as props
    */
    onClick: PropTypes.func.isRequired,
};

OverlayMenu.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    In content you  can pass buttons as Grid Item
    */
    content: [],
    /**
    withUser contains the link to the progile image that can replace the profile default icon.
    */
    withUser: "",
    /**
    Use it for open modal
    */
    isOpen: true,

    //=======================================
    // Quommon props
    //=======================================
    asVariant: "primary",
    asSize: "normal",
    asFloated: "none",
    withColor: null,
    withIcon: null,
    withAnimation: null,
    withTranslation: null,
    isHidden: false,
    isDisabled: false,
};

/**
## Notes
- The design system used for this component is fontawesome Icons
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- props are not being passed to the OverlayMenu. Please speak to the admin to handle any new prop.
**/
export default function OverlayMenu(props) {
    const [openModal, setOpenModal] = useState(props.isOpen);
    useEffect(() => {
        setOpenModal(props.isOpen);
    }, [props.isOpen]);

    let { content, withLabel } = props;

    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props);
    //-------------------------------------------------------------------
    // 2. Set the label/caption/popover and loading text
    //-------------------------------------------------------------------
    let labelContent = Object.assign({}, props.withLabel);
    let iconLabel = null;
    let tObj = null;
    if (
        props.withTranslation?.lang &&
        props.withTranslation.lang !== "" &&
        props.withTranslation.lang !== "en"
    ) {
        tObj = getTranslation(props.withTranslation);
        iconLabel = tObj?.content;
        labelContent.content = tObj?.label;
    }
    //-------------------------------------------------------------------
    // 3. Set the color
    //-------------------------------------------------------------------
    let colors = {
        backgroundColor: props.withColor?.backgroundColor,
    };
    //-------------------------------------------------------------------
    // 4. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props);
    //-------------------------------------------------------------------
    // 5. Destructure content prop to itirate
    //-------------------------------------------------------------------
    return (
        <Modal className="qui qui-modal"
            open={openModal}
        >
            <motion.div
                initial={animate.from}
                animate={animate.to}
                className={` ${quommonClasses.parentClasses}`}
            >
                <div className="qui-card">
                    <div className={"av-contain"} style={colors}>
                        <i className={`fa fa-times cross-icon`}
                            onClick={() => {
                                setOpenModal(false);
                                props.onClose(false);
                            }} />
                        <div
                            className={`qui-contain qui-profileContainer`}
                            title={withLabel?.format === "popover" ? withLabel?.content : ""}
                        >
                            <div className={`qui-profileAvatar `}>
                                <div className="qui-profileCaption">
                                    {withLabel?.format === "label" ? withLabel?.content : ""}
                                </div>
                                <Avatar {...props} withUser={props.withUser} />
                                <div className={`qui-profileCaption size-${props.asSize}`}>
                                    {withLabel?.format === "caption" ? withLabel?.content : ""}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`lower-div`}>
                        <div className="container">
                            <Grid
                                container
                                rowSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1 }}
                                columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1 }}
                            >
                                {_.map(content, (icon, index) => {
                                    return (
                                        <Grid key={index} item xs={4} sm={4} md={4} lg={4}>
                                            <div
                                                className={`qui-btn qui-inner-button variant-${props.asVariant}`}
                                                style={{
                                                    backgroundColor: props.withColor?.accentColor,
                                                }}
                                            >
                                                <IconLink
                                                    asEmphasis="text"
                                                    withColor={{
                                                        ...props.withColor,
                                                        textColor: props.withColor?.textColor,
                                                        backgroundColor: props.withColor?.textColor,
                                                    }}
                                                    withIcon={{ icon: icon.icon }}
                                                    withTranslation={null}
                                                    withLabel={{
                                                        content: tObj ? iconLabel[index].label : icon.label,
                                                        format: icon.format,
                                                    }}
                                                    onClick={props.onClick}
                                                />
                                            </div>
                                        </Grid>
                                    );
                                })}
                            </Grid>
                        </div>
                    </div>
                </div>
            </motion.div>
        </Modal>
    );
}
