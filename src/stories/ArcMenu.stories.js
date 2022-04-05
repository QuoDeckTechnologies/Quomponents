import React from "react";
import ArcMenu from "../components/ArcMenu/ArcMenu.react";

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
    { image: Nugget_Story },
    { image: Nugget_Quiz },
    { image: Nugget_Assessment },
    { image: Nugget_Game },
    { image: Nugget_Article },
    { image: Nugget_Feedback },
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
    { image: Nugget_Story },
    { image: Nugget_Quiz },
    { image: Nugget_Assessment },
    { image: Nugget_Game },
    { image: Nugget_Article },
    { image: Nugget_Feedback },
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
