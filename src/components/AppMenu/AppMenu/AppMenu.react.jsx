// Import npm packages
import React from "react";
import PropTypes from "prop-types";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import {
  getQuommons,
  getTranslation,
} from "../../../common/javascripts/helpers";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../common/stylesheets/common.css";
import "./AppMenu.scss";
import "../../../common/stylesheets/overrule.scss";
import MenuBlock from "../MenuBlock/MenuBlock.react";
import Avatar from "../Avatar/Avatar.react";

AppMenu.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
  Use for rounded corners or circular icon button 
  */
  isCircular: PropTypes.bool,
  menu: PropTypes.array,
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
  asFloated: PropTypes.oneOf(["left", "right", "inline"]),
  /**
  Use to override component colors and behavior
  */
  withColor: PropTypes.shape({
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
  }),
  /**
  Use to add text title in the component
  */
  withLabel: PropTypes.shape({
    content: PropTypes.string,
  }),
  /**
  Use to add an icon to the component
  */
  withIcon: PropTypes.shape({
    icon: PropTypes.string,
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
  AppMenu component must have the onClick function passed as props
  */
  onClick: PropTypes.func.isRequired,
};

AppMenu.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  isCircular: true,
  //=======================================
  // Quommon props
  //=======================================
  asVariant: "primary",
  asSize: "normal",
  withColor: null,
  withIcon: null,
  withTranslation: null,
  isHidden: false,
  isDisabled: false,
};
/**
## Notes
- The design system used for this component is fontawesome Icons
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- props are not being passed to the AppMenu. Please speak to the admin to handle any new prop.
**/

export default function AppMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //-------------------------------------------------------------------
  // 1. Destructuring withlabel props
  //-------------------------------------------------------------------
  let { withLabel } = props;
  //-------------------------------------------------------------------
  // 2. Set the classes
  //-------------------------------------------------------------------
  let quommonClasses = getQuommons(props, "app-menu");
  if (props.isCircular) quommonClasses.childClasses += ` is-circular`;
  //-------------------------------------------------------------------
  // 3. Set the color
  //-------------------------------------------------------------------
  let colors = {
    backgroundColor: props.withColor?.backgroundColor,
    color: props.withColor?.textColor,
  };
  //-------------------------------------------------------------------
  // 4. Translate the text objects in case their is a dictionary provided
  //-------------------------------------------------------------------
  let tObj;
  if (
    props.withTranslation?.lang &&
    props.withTranslation.lang !== "" &&
    props.withTranslation.lang !== "en"
  ) {
    tObj = getTranslation(props.withTranslation);
  }

  // ========================= Render Function =================================

  return (
    <div
      className={`qui ${quommonClasses.parentClasses} ${
        props.isCircular ? "qui-app-menu-circular" : ""
      } qt-shadow`}
    >
      <div className="qui-app-menu-container">
        <div
          style={colors}
          className={`qui-app-menu-inner-container qui-btn ${quommonClasses.childClasses} `}
        >
          <div className="qui-app-menu-icon-container">
            <div className="qui-app-menu-catalog-container">
              {tObj || props.withLabel?.content ? (
                <p className="qui-app-menu-catalog-label">
                  {tObj ? tObj.content : withLabel?.content}{" "}
                </p>
              ) : null}
            </div>
          </div>
        </div>
        <div
          className={`qui-app-menu-avatar-container float-${props.asFloated}`}
        >
          <div
            style={colors}
            className={`qui-app-menu-avatar qui-btn variant-${props.asVariant}`}
          >
            <Avatar
              {...props}
              withIcon={
                props.withIcon ? props.withIcon : { icon: "fas fa-user" }
              }
            />
          </div>
          <div className="qui-app-menu-icon-container">
            <MenuBlock
              {...props}
              withIcon={{ icon: "fas fa-ellipsis-v" }}
              withLabel={{ content: "" }}
              withTranslation={null}
              onClick={handleClick}
            />
            <Menu
              id="app-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "app-menu-button",
              }}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  width: 240,
                  maxWidth: "100%",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
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
                    transform: "translateY(-50%) rotate(45deg)",
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
              }}
            >
              {props.menu?.map((item, index) =>
                item.icon === "divider" ? (
                  <Divider key={index} />
                ) : (
                  <MenuItem onClick={item.onClick} key={index}>
                    <ListItemIcon>
                      <i className={item.icon} />
                    </ListItemIcon>
                    <ListItemText>{item.label}</ListItemText>
                  </MenuItem>
                )
              )}
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
}
