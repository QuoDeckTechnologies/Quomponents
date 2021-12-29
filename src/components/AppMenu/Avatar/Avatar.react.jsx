// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import { getQuommons } from "../../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./Avatar.scss";
import "../../../common/stylesheets/overrule.scss";

Avatar.propTypes = {
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
        hoverBackgroundColor: PropTypes.string,
        hoverTextColor: PropTypes.string,
    }),
    /**
    Use to add an icon to the component
    */
    withIcon: PropTypes.shape({
        icon: PropTypes.string,
        size: PropTypes.string,
        position: PropTypes.oneOf(["left", "right"]),
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
    Use to show/hide the component
    */
    isHidden: PropTypes.bool,
    /**
    Use to enable/disable the component
    */
    isDisabled: PropTypes.bool,
    /**
    Avatar component must have the onClick function passed as props
    */
    onClick: PropTypes.func.isRequired,
};

Avatar.defaultProps = {
    // ======================================
    // Quommon props
    //=======================================
    asVariant: "primary",
    asSize: "normal",
    asFloated: "none",

    withColor: null,
    withIcon: null,
    withUser: null,
    withAnimation: null,

    isHidden: false,
    isDisabled: false,
};


/**
## Notes
- The design system used for this component is Material UI (@mui/material)
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- MUI props are not being passed to the Avatar. Please speak to the admin to handle any new MUI prop.
**/
export default function Avatar(props) {
    //-------------------------------------------------------------------
    // 1. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props);
    if (props.isCircular)
        quommonClasses.childClasses += ` is-circular ${props.content === "" && props.withIcon ? "is-only-icon" : ""
            }`;

    quommonClasses.childClasses += ` emp-contained`;
    //-------------------------------------------------------------------
    // 2. Get Avatar if provided, default is icon
    //-------------------------------------------------------------------
    const getAvatar = (avatar,icon) => {
        let imgClasses = getQuommons(props);
        if (props.isCircular)
        imgClasses.childClasses += ` is-circular ${props.content === "" && props.withIcon ? "is-only-icon" : ""
            }`;
        if(avatar?.userImage){
            return(
                <img className={`qui-image `} src={avatar?.userImage} alt='avatar'/>
            )
        }else{
            return (
                <div className={`qui-icon qui-btn ${quommonClasses.childClasses}`}>
                    <i className={`${icon?.icon}`} ></i>
                </div>
            )
        } 
    }
    

    // ========================= Render Function =================================
   

    return (
        <div className={`qui float-${props.asFloated}`}>
            <div className={`qui-container size-${props.asSize} variant-${props.asVariant}`}>
            {getAvatar(props.withUser,props.withIcon)}
            </div>
        </div>
    );
    
}

