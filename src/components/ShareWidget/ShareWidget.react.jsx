import React from "react";
import PropTypes from "prop-types";
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon,
    WhatsappShareButton,
    WhatsappIcon,
    EmailShareButton,
    EmailIcon,
} from "react-share";
import { motion } from "framer-motion";
import {
    getAnimation,
    getQuommons,
    getTranslation,
} from "../../common/javascripts/helpers";
import "../../common/stylesheets/common.css";
import "./ShareWidget.scss";
import "../../common/stylesheets/overrule.scss";

ShareWidget.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    /**
    Use to define content's value in side the ShareWidget
    */
    content: PropTypes.shape({
        label: PropTypes.string,
        url: PropTypes.string,
    }),
    //=======================================
    // Quommon props
    //=======================================
    /**
    Use to float the component in parent container
    */
    asFloated: PropTypes.oneOf(["left", "right", "none", "inline"]),
    /**
    Use to set text Color in ShareWidget
    */
    withColor: PropTypes.shape({
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
    Use to show/hide the component
    */
    isHidden: PropTypes.bool,
    /**
    Use to enable/disable the component
    */
    isDisabled: PropTypes.bool,
};

ShareWidget.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    content: "",
    //=======================================
    // Quommon props
    //=======================================
    asFloated: "none",

    withColor: null,
    withAnimation: null,

    isHidden: false,
    isDisabled: false,
};
/**
## Notes
- The design system used for this component is HTML and CSS
- The Share icons system used for this component is React Share (react-share)
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function ShareWidget(props) {
    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "share-widget");
    //-------------------------------------------------------------------
    // 2. Get translation of the ShareWidget component
    //-------------------------------------------------------------------
    let shareContent = Object.assign({}, props.content);
    let tObj = null;

    if (
        props.withTranslation?.lang &&
        props.withTranslation.lang !== "" &&
        props.withTranslation.lang !== "en"
    ) {
        tObj = getTranslation(props.withTranslation);
        if (shareContent && tObj?.label) shareContent.label = tObj.label;
    }
    //-------------------------------------------------------------------
    // 3. Use to set label Color in ShareWidget
    //-------------------------------------------------------------------
    let Color = {
        color: props.withColor?.textColor,
    };
    //-------------------------------------------------------------------
    // 3. Get animation of the component
    //-------------------------------------------------------------------
    const animate = getAnimation(props.withAnimation);
    // ========================= Render Function =================================
    return (
        <motion.div
            initial={animate.from}
            animate={animate.to}
            className={`qui ${quommonClasses.parentClasses}`}
        >
            <div className={`qui-sharewidget-container ${quommonClasses.childClasses}`}>
                <div className="qui-share-label" style={Color}>
                    {shareContent?.label} :
                </div>
                <div className="qui-shareicon-container">
                    <FacebookShareButton className={`qui-share-icon  ${shareContent?.url ? "" : "qui-share-icon-disabled"}`} url={shareContent?.url}>
                        <FacebookIcon round={true} />
                    </FacebookShareButton>

                    <TwitterShareButton className={`qui-share-icon ${shareContent?.url ? "" : "qui-share-icon-disabled"}`} url={shareContent?.url}>
                        <TwitterIcon round={true} />
                    </TwitterShareButton>

                    <LinkedinShareButton className={`qui-share-icon ${shareContent?.url ? "" : "qui-share-icon-disabled"}`} url={shareContent?.url}>
                        <LinkedinIcon round={true} />
                    </LinkedinShareButton>

                    <WhatsappShareButton className={`qui-share-icon ${shareContent?.url ? "" : "qui-share-icon-disabled"}`} url={shareContent?.url}>
                        <WhatsappIcon round={true} />
                    </WhatsappShareButton>

                    <EmailShareButton className={`qui-share-icon ${shareContent?.url ? "" : "qui-share-icon-disabled"}`} url={shareContent?.url}>
                        <EmailIcon round={true} />
                    </EmailShareButton>
                </div>
            </div>
        </motion.div>
    );
}
