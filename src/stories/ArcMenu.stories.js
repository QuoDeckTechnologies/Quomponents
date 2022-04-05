import React, { useState } from "react";
import ArcMenu from "../components/ArcMenu/ArcMenu.react";
import Backdrop from '@mui/material/Backdrop'

import Nugget_Story from "../assets/nuggets/nugget_story.png";
import Nugget_Quiz from "../assets/nuggets/nugget_quiz.png";
import Nugget_Assessment from "../assets/nuggets/nugget_assessment.png";
import Nugget_Game from "../assets/nuggets/nugget_game.png";
import Nugget_Article from "../assets/nuggets/nugget_article.png";
import Nugget_Feedback from "../assets/nuggets/nugget_feedback.png";

export default {
  title: "Design System/ArcMenu/ArcMenu",
  component: ArcMenu,
  argTypes: {
    menuContent: [],
    nuggetContent: [],
    type: {
      control: "select",
      options: ["close", "menu", "add", "nugget-menu"],
    },
    arcIcon: {
      control: "select",
      options: ["close", "menu", "add"],
    },
    position: {
      control: "select",
      options: ["top-right", "top-left", "bottom-right", "bottom-left"],
    },
    isDisabled: {
      table: {
        category: "is-Toggles",
        defaultValue: false,
      },
    },
    isHidden: {
      table: {
        category: "is-Toggles",
        defaultValue: false,
      },
    },
    onClick: {
      table: {
        category: "Events",
        defaultValue: null,
      },
    },
  },
  decorators: [
    (story) => (
      <div
        style={{
          width: "100%",
        }}
      >
        {story()}
      </div>
    ),
  ],
  parameters: {
    componentSubtitle: "Displays a ArcMenu component",
    a11y: { disable: true },
    docs: {
      iframeHeight: 300,
    },
  },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => {
  return <ArcMenu {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  menuContent: [
    {
      header: "learning",
      list: ["upload scorm", "upload pdf", "add video link", "create qdf deck"],
    },
    {
      header: "evaluating",
      list: ["create survey", "create quiz", "add a game"],
    },
    {
      header: "rewarding",
      list: ["give a certificate", "give a badge", "give a reward"],
    },
  ],
  nuggetContent: [
    { link: "/nugget_story", image: Nugget_Story },
    { link: "/nugget_quiz", image: Nugget_Quiz },
    { link: "/nugget_assessment", image: Nugget_Assessment },
    { link: "/nugget_game", image: Nugget_Game },
    { link: "/nugget_article", image: Nugget_Article },
    { link: "/nugget_feedback", image: Nugget_Feedback },
  ],
  type: "close",
  arcIcon: "close",
  position: "top-right",
  isDisabled: false,
  isHidden: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<ArcMenu {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Nugget Menu button
// -------------------------------------------------------------
export const NuggetMenuButton = Template.bind({});
NuggetMenuButton.args = {
  ...Default.args,
  nuggetContent: [
    { link: "/nugget_story", image: Nugget_Story },
    { link: "/nugget_quiz", image: Nugget_Quiz },
    { link: "/nugget_assessment", image: Nugget_Assessment },
    { link: "/nugget_game", image: Nugget_Game },
    { link: "/nugget_article", image: Nugget_Article },
    { link: "/nugget_feedback", image: Nugget_Feedback },
  ],
  menuContent: [],
  type: "nugget-menu",
  arcIcon: "menu",
  position: "bottom-left",
};
NuggetMenuButton.parameters = {
  docs: {
    source: {
      code: `<ArcMenu {...${JSON.stringify(NuggetMenuButton.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Menu button
// -------------------------------------------------------------
export const MenuButton = Template.bind({});
MenuButton.args = {
  ...Default.args,
  menuContent: [
    {
      header: "learning",
      list: ["upload scorm", "upload pdf", "add video link", "create qdf deck"],
    },
    {
      header: "evaluating",
      list: ["create survey", "create quiz", "add a game"],
    },
    {
      header: "rewarding",
      list: ["give a certificate", "give a badge", "give a reward"],
    },
  ],
  nuggetContent: [],
  type: "menu",
  arcIcon: "menu",
  position: "bottom-left",
};
MenuButton.parameters = {
  docs: {
    source: {
      code: `<ArcMenu {...${JSON.stringify(MenuButton.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Menu button
// -------------------------------------------------------------
export const AddButton = Template.bind({});
AddButton.args = {
  ...Default.args,
  type: "add",
  arcIcon: "add",
  position: "bottom-left",
};
AddButton.parameters = {
  docs: {
    source: {
      code: `<ArcMenu {...${JSON.stringify(AddButton.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Menu button
// -------------------------------------------------------------
const ExampleTemplate = (args) => {
  const [openModalOne, setOpenModalOne] = useState(false);
  const [openModalTwo, setOpenModalTwo] = useState(false);
  return (
    <div
      className="qui"
      style={{
        height: "100vh",
        border: "0.1em solid black",
        overflow: "visible",
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
      }}
    >
      <Backdrop open={openModalOne} sx={{zIndex:10}} onClick={()=>setOpenModalOne(false)}/>
      <Backdrop open={openModalTwo} sx={{zIndex:21}} onClick={()=>setOpenModalTwo(false)}/>
      {openModalOne && (
        <div className="qui-first-imported-component" style={{position:'absolute',zIndex:20,left:'0',bottom:'20%'}}>
          <div className="qui-test-component-element" style={{width:'10em',backgroundColor:'#454545',color:'white',marginBottom:'0.1em',cursor:'pointer'}} onClick={()=>setOpenModalTwo(true)}>Option One</div>
          <div className="qui-test-component-element" style={{width:'10em',backgroundColor:'#454545',color:'white',cursor:'pointer'}} onClick={()=>setOpenModalTwo(true)}>Option Two</div>
        </div>
      )}
     {openModalTwo && <div/*parent must have a qui class for arcmenu*/className="qui qui-second-imported-component" style={{position:'absolute',zIndex:22,background:'white',padding:'5em'}}>
       <h1>Testing Second Modal</h1>
       <ArcMenu
        type="close"
        arcIcon="close"
        position="top-right"
        onClick={() => setOpenModalTwo(false)}
      />
       </div>}
      <ArcMenu
        type="add"
        arcIcon="add"
        position="bottom-left"
        onClick={() => setOpenModalOne(true)}
      />
    </div>
  );
};
export const AddCloseButtonUseCase = ExampleTemplate.bind({});
AddCloseButtonUseCase.parameters = {
  docs: {
    source: {
      code: `<ArcMenu {...${JSON.stringify(AddCloseButtonUseCase.args, null, 2)}}/>`,
    },
  },
};
