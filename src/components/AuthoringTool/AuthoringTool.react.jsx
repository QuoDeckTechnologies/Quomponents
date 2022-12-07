// Import npm packages
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Backdrop from "@mui/material/Backdrop";
import RibbonMenu from "../RibbonMenu/RibbonMenu.react";
import { getAnimation, getQuommons } from "../../common/javascripts/helpers";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../common/stylesheets/common.css";
import "./AuthoringTool.scss";
import "../../common/stylesheets/overrule.scss";

AuthoringTool.propTypes = {
  //=======================================
  // Component Specific props
  //=======================================
  /**
    AuthoringTool can accept another component which is rendered when menu icon is clicked
    */
  children: PropTypes.element,
  /**
    AuthoringTool data should be passed in content field and it is a required field
    */
  content: PropTypes.shape({
    name: PropTypes.string,
    readerType: PropTypes.string,
  }).isRequired,
  //=======================================
  // Quommon props
  //=======================================
  /**
    Use to define component padding in increasing order
    */
  asPadded: PropTypes.oneOf(["fitted", "compact", "normal", "relaxed"]),
  /**
      Use to override component colors and behavior
    */
  withColor: PropTypes.shape({
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    hoverTextColor: PropTypes.string,
    hoverBackgroundColor: PropTypes.string,
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
    AuthoringTool component must have the onChange function passed as props
    */
  onChange: PropTypes.func.isRequired,
  /**
    AuthoringTool component must have the onChecked function passed as props
    */
  onChecked: PropTypes.func.isRequired,
  /**
    AuthoringTool component must have the onUnchecked function passed as props
    */
  onUnchecked: PropTypes.func.isRequired,
  /**
    AuthoringTool component must have the onContentUpdate function passed as props
    */
  onContentUpdate: PropTypes.func.isRequired,
};

AuthoringTool.defaultProps = {
  //=======================================
  // Component Specific props
  //=======================================
  content: {},
  //=======================================
  // Quommon props
  //=======================================
  asPadded: "normal",
  withAnimation: null,
  withColor: null,
};

/**
## Notes
- The design system used for this component is Fontawesome Icon
- The animation system used for this component is Framer Motion (framer-motion)
- Pass inline styles to the component to override any of the component css
- Or add custom css in overrule.scss to override the component css
- Status of topics can be changed from content prop
**/

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const getRibbonMenu = (index) => {
  let emphasis;
  if (index === 0) {
    emphasis = "home";
  }
  if (index === 1) {
    emphasis = "design";
  }
  if (index === 2) {
    emphasis = "tools";
  }
  return (
    <RibbonMenu
      asEmphasis={emphasis}
      actions={{
        updateDeck: (settingsObj) => {
          return settingsObj;
        },
        addSlide: (value) => {
          return value;
        },
        duplicateSlide: (value) => {
          return value;
        },
        deleteSlide: (value) => {
          return () => {};
        },
        changeSlideNav: (navObj) => {
          return navObj;
        },
        setUserOptions: (view) => {
          return view;
        },
        uploadQuestionBank: () => console.log("this is the"),
      }}
      deck={{
        navEnabled: false,
        snEnabled: false,
        voEnabled: false,
        content: [{}, {}, {}],
        currentSlide: 1,
      }}
      isDisabled={false}
      isHidden={false}
    />
  );
};

const getTabStyles = () => {
  return {
    "&.Mui-selected": {
      backgroundColor: "#e8e8e8",
      color: "#000",
    },
    fontSize: "0.7em",
    padding: "0.9em 0",
    minHeight: 0,
  };
};

export default function AuthoringTool(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // ========================= Render Function =================================

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#FFBF00",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "transparent",
            },
            paddingLeft: 5,
            minHeight: 0,
          }}
        >
          <Tab label="Home" sx={getTabStyles()} />
          <Tab label="Design" sx={getTabStyles()} />
          <Tab label="Tools" sx={getTabStyles()} />
        </Tabs>
        <div className="qui-nav-panel-editing-text-container">
          <div className="qui-nav-panel-editing-text">
            <h6 className="qui-nav-panel-editing-deck-name">
              Editing:
              {props.editingDeck ? props.editingDeck : "Writing Letters"}
            </h6>
          </div>
          <div className="qui-nav-panel-language-container">
            <i className="fas fa-comment-alt"></i>
          </div>
        </div>
      </Box>
      <TabPanel value={value} index={0}>
        {getRibbonMenu(0)}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {getRibbonMenu(1)}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {getRibbonMenu(2)}
      </TabPanel>
    </Box>
  );
}
