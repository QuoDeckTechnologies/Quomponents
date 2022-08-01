import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import _ from "lodash";
import {
    getQuommons,
} from "../../common/javascripts/helpers";
import "../../common/stylesheets/common.css";
import "./Marker.scss";
import "../../common/stylesheets/overrule.scss";
import { WrapperList } from "../../common/schema/WrapperSchema.react";

Marker.propTypes = {
    //=======================================
    // Component Specific props
    //=======================================
    content: PropTypes.shape({
        wrapper: PropTypes.string,
        inset: PropTypes.number,
        completion: PropTypes.number,
        node: PropTypes.shape({
            _id: PropTypes.string,
            name: PropTypes.string,
            description: PropTypes.string,
            contentList: PropTypes.arrayOf(
                PropTypes.shape({
                    _id: PropTypes.string,
                    name: PropTypes.string,
                    readerType: PropTypes.string,
                    sequence: PropTypes.number,
                })),
            sequence: PropTypes.number,
        })
    }),
    /**
    Use to set the state of MobileToolbar 
    */
    status: PropTypes.oneOf([
        "current",
        "complete",
        "incomplete",
    ]),
    /**
   Use to show/hide the component
   */
    sequential: PropTypes.bool,
    //=======================================
    // Quommon props
    //=======================================
    /**
    Use to define component size in increasing order
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
    Use to show/hide the component
    */
    isHidden: PropTypes.bool,
    /**
    Use to enable/disable the component
    */
    isDisabled: PropTypes.bool,
    /**
    component must have the onClick function passed as props
    */
    onClick: PropTypes.func.isRequired,
    /**
    component must have the onClick function passed as props
    */
    openDeck: PropTypes.func
};

Marker.defaultProps = {
    //=======================================
    // Component Specific props
    //=======================================
    content: {},
    status: "current",

    //=======================================
    // Quommon props
    //=======================================
    asSize: "normal",

    isHidden: false,
    isDisabled: false,
};
/**
## Notes
- The design system used for this component is HTML and CSS
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
**/
export default function Marker(props) {
    //-------------------------------------------------------------------
    // 1. Destructuring content from props
    //-------------------------------------------------------------------
    let { content, status, openDeck } = props;

    //-------------------------------------------------------------------
    // 2. Set the classes
    //-------------------------------------------------------------------
    let quommonClasses = getQuommons(props, "marker");

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        if (status === "current" || status === "complete") { setAnchorEl(event.currentTarget); }
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    let node_list = content?.node?.contentList.length;
    let gameList = {
        marginTop: 0,
        height: node_list > 4 ? "23vh" : "",
        overflow: "auto",
    };

    let indicator = (deck) => {
        return props.content?.completion[deck.deckId] === 100 ? (
            <i className="qui-indicator fa fa-check-circle" />
        ) : (
            <i className="qui-indicator fa fa-bullseye" />
        );
    };
    let iconName = (readerType) => {
        switch (readerType) {
            case "videck":
                return "fa fa-video-camera";
            case "docdeck":
                return "fa fa-file-zip-o";
            case "assessment":
                return "fa fa-medkit";
            case "survey":
                return "fas fa-poll";
            case "adaptive":
                return "fa fa-random";
            case "quiz":
                return "fa fa-question-circle";
            case "casestudy":
                return "fa fa-archive";
            case "dialogue":
                return "fa fa-comments-o";
            case "qdf":
                return "fa fa-file";
            case "game":
                return "game";
            default:
                return "fa fa-file";
        }
    };
    let markerBlock = (
        <div onClick={handleClick}>
            <img
                className={"qui-marker-img"}
                src={
                    WrapperList[content?.wrapper]?.customMarker
                        ? "assets/courses/" +
                        content?.wrapper +
                        "/markers/" +
                        status +
                        ".png"
                        : "assets/images/" +
                        status +
                        ".png"
                }
                alt="marker"
            />
            {WrapperList[content?.wrapper]?.sequenceInset && (
                <div className="qui-marker-text">{content?.inset}</div>
            )}
        </div>
    );
    let prevComplete = 0;
    let currComplete = 0;

    let marker = () => {
        return (
            status === "current" ? (
                <div className="qui-marker-style">
                    <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        {markerBlock}
                    </motion.div>
                </div>
            ) : (
                <div className="qui-marker-style">
                    {markerBlock}
                </div>
            ));
    }

    // ========================= Render Function =================================

    return (
        <div className={`qui ${quommonClasses.parentClasses}`}>
            <div className={`${quommonClasses.childClasses}`}>
                {marker()}
                < Menu id="marker"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        "aria-labelledby": "marker-button",
                    }
                    }
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: "visible",
                            width: 240,
                            maxWidth: "100%",
                            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                            mt: 1.5,
                            "& .MuiPaper-root": {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            "&:before": {
                                content: '""',
                                display: "block",
                                position: "absolute",
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: "background.paper",
                                transform:
                                    "translateY(-50%) rotate(45deg)",
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{
                        horizontal: "right",
                        vertical: "top",
                    }}
                    anchorOrigin={{
                        horizontal: "right",
                        vertical: "bottom",
                    }}>
                    <MenuItem>
                        <img className="qui-marker-imagestyle"
                            src={
                                "assets/courses/" +
                                content?.wrapper +
                                "/header.jpg"
                            }
                            alt="ok"
                        />
                        <div className="qui-marker-wellstyle">
                            <h5 className="qui-marker-header">
                                {content?.node?.name}
                            </h5>
                            <div className="qui-marker-desc">
                                {content?.node?.description}
                            </div>
                        </div>
                        <div key={'list-' + Math.random()} divided style={gameList}>
                            {_.map(content?.node?.contentList, (deck, index) => {
                                prevComplete = currComplete !== undefined ? currComplete : 0;
                                currComplete = props.content?.completion[deck._id];
                                return (
                                    <div className="qui-icons-name"
                                        key={`deckitem-${deck._id}`}
                                        style={{
                                            opacity: props.sequential && index !== 0
                                                ? prevComplete === 100 ? "none" : "0.3" : "none",
                                            background: props.sequential && index !== 0
                                                ? prevComplete === 100 ? "none" : "#e8e8e8" : "none"
                                        }}
                                        onClick={props.sequential && index !== 0 ? prevComplete > 80 ?
                                            () => openDeck(
                                                {
                                                    deckId: deck._id,
                                                    readerType: deck.readerType,
                                                },
                                                content?.inset - 1
                                            ) : null :
                                            () => openDeck(
                                                {
                                                    deckId: deck._id,
                                                    readerType: deck.readerType,
                                                },
                                                content?.inset - 1
                                            )
                                        }
                                    >
                                        <div className="qui-itemcontent">
                                            {indicator({
                                                deckId: deck._id,
                                                readerType: deck.readerType,
                                            })}
                                            {deck.name}
                                        </div>
                                        <div className="qui-iconwrapper">
                                            <i
                                                className={iconName(deck.readerType)}
                                            />
                                            <i className="fa fa-chevron-right" />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </MenuItem>
                </Menu >
            </div>
        </div>
    );
}