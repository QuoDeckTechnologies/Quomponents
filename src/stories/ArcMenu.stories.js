import React, { useState } from "react";
import ArcMenu from "../components/ArcMenu/ArcMenu.react";
import Backdrop from "@mui/material/Backdrop";

const dictionary = JSON.stringify({
  hi: {
    arcMenu: {
      menuContent: [
        {
          header: "सीखें",
          list: [
            { title: "अपलोड scorm", func: () => {} },
            { title: "अपलोड pdf", func: () => {} },
            { title: "वीडियो लिंक जोड़ें", func: () => {} },
            { title: "qdf डेक बनाएं", func: () => {} },
          ],
        },
        {
          header: "मूल्यांकन",
          list: [
            { title: "सर्वेक्षण बनाएं", func: () => {} },
            { title: "प्रश्नोत्तरी बनाएँ", func: () => {} },
            { title: "एक खेल जोड़ें", func: () => {} },
          ],
        },
        {
          header: "पुरस्कृत",
          list: [
            { title: "प्रमाण पत्र दो", func: () => {} },
            { title: "एक बैज दें", func: () => {} },
            { title: "इनाम दो", func: () => {} },
          ],
        },
      ],
    },
  },
});

export default {
  title: "Design System/ArcMenu",
  component: ArcMenu,
  argTypes: {
    menuContent: [],
    nuggetContent: [],
    menuType: {
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
    withColor: {
      table: {
        category: "with-Params",
        defaultValue: {
          backgroundColor: "",
          iconColor: "",
          arcColor: "",
          menuBackgroundColor: "",
          textColor: "",
          headingTextColor: "",
          accentColorPrimary: "",
          accecntColorSecondary: "",
        },
      },
    },
    withTranslation: {
      table: {
        category: "with-Params",
        defaultValue: {
          lang: "",
          tgt: "",
          dictionary: "",
        },
      },
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
  parameters: {
    componentSubtitle: "Displays a ArcMenu component",
    a11y: { disable: true },
    docs: {
      iframeHeight: 500,
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
      list: [
        { title: "upload scorm", func: () => {} },
        { title: "upload pdf", func: () => {} },
        { title: "add video link", func: () => {} },
        {
          title: "create qdf deck",
          func: () => {},
        },
      ],
    },
    {
      header: "evaluating",
      list: [
        {
          title: "create survey",
          func: () => {},
        },
        {
          title: "create quiz",
          func: () => {},
        },
        {
          title: "add a game",
          func: () => {},
        },
      ],
    },
    {
      header: "rewarding",
      list: [
        { title: "give a certificate", func: () => {} },
        { title: "give a badge", func: () => {} },
        { title: "give a reward", func: () => {} },
      ],
    },
  ],
  nuggetContent: [
    { name: "nugget story", image: "../assets/nuggets/nugget_story.png", func: () => {} },
    { name: "nugget quiz", image: "../assets/nuggets/nugget_quiz.png", func: () => {} },
    { name: "nugget assessment", image: "../assets/nuggets/nugget_assessment.png", func: () => {} },
    { name: "nugget game", image: "../assets/nuggets/nugget_game.png", func: () => {} },
    { name: "nugget article", image: "../assets/nuggets/nugget_article.png", func: () => {} },
    { name: "nugget feedback", image: "../assets/nuggets/nugget_feedback.png", func: () => {} },
  ],
  menuType: "close",
  arcIcon: "close",
  position: "top-right",
  withColor: {
    backgroundColor: "",
    iconColor: "",
    arcColor: "",
    menuBackgroundColor: "",
    textColor: "",
    headingTextColor: "",
    accentColorPrimary: "",
    accecntColorSecondary: "",
  },
  withTranslation: {
    lang: "en",
    tgt: "arcMenu",
    dictionary: dictionary,
  },
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
  menuContent: [],
  menuType: "nugget-menu",
  arcIcon: "menu",
  position: "bottom-left",
};
NuggetMenuButton.parameters = {
  docs: {
    description: {
      story: "Displays ArcMenu using nugget block",
    },
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
      list: [
        { title: "upload scorm", func: () => {} },
        { title: "upload pdf", func: () => {} },
        { title: "add video link", func: () => {} },
        {
          title: "create qdf deck",
          func: () => {},
        },
      ],
    },
    {
      header: "evaluating",
      list: [
        {
          title: "create survey",
          func: () => {},
        },
        {
          title: "create quiz",
          func: () => {},
        },
        {
          title: "add a game",
          func: () => {},
        },
      ],
    },
    {
      header: "rewarding",
      list: [
        { title: "give a certificate", func: () => {} },
        { title: "give a badge", func: () => {} },
        { title: "give a reward", func: () => {} },
      ],
    },
  ],
  nuggetContent: [],
  menuType: "menu",
  arcIcon: "menu",
  position: "bottom-left",
};
MenuButton.parameters = {
  docs: {
    description: {
      story: "Displays ArcMenu used as menu",
    },
    source: {
      code: `<ArcMenu {...${JSON.stringify(MenuButton.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Translated Menu button
// -------------------------------------------------------------
export const TranslatedMenuButton = Template.bind({});
TranslatedMenuButton.args = {
  ...MenuButton.args,
  withTranslation: {
    lang: "hi",
    tgt: "arcMenu",
    dictionary: dictionary,
  },
};
TranslatedMenuButton.parameters = {
  docs: {
    description: {
      story: "Use to change the language that the text appears in.",
    },
    source: {
      code: `<ArcMenu {...${JSON.stringify(
        TranslatedMenuButton.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Add button
// -------------------------------------------------------------
export const AddButton = Template.bind({});
AddButton.args = {
  ...Default.args,
  menuType: "add",
  arcIcon: "add",
  position: "bottom-left",
};
AddButton.parameters = {
  docs: {
    description: {
      story: "Display ArcMenu used as Add button",
    },
    source: {
      code: `<ArcMenu {...${JSON.stringify(AddButton.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Add Close Button Use Case
// -------------------------------------------------------------
const ExampleTemplate = (args) => {
  const [openModalOne, setOpenModalOne] = useState(false);
  const [openModalTwo, setOpenModalTwo] = useState(false);
  return (
    <div
      className="qui" /*parent must have a qui class for arcmenu*/
      style={{
        height: "90vh",
        border: "0.1em solid black",
        borderRadius: "1em",
        overflow: "visible",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Backdrop
        open={openModalOne}
        sx={{ zIndex: 10 }}
        onClick={() => setOpenModalOne(false)}
      />
      <Backdrop
        open={openModalTwo}
        sx={{ zIndex: 21 }}
        onClick={() => setOpenModalTwo(false)}
      />
      {openModalOne && (
        <div
          className="qui-first-imported-component"
          style={{ position: "absolute", zIndex: 20, left: "0", bottom: "20%" }}
        >
          <div
            className="qui-test-component-element"
            style={{
              width: "10em",
              backgroundColor: "#ffbf00",
              marginBottom: "0.1em",
              cursor: "pointer",
            }}
          >
            Heading
          </div>
          <a href="http://localhost:6006/?path=/story/design-system-accentline-accentline--default">
            <div
              className="qui-test-component-element"
              style={{
                width: "10em",
                backgroundColor: "#454545",
                color: "white",
                marginBottom: "0.1em",
                cursor: "pointer",
              }}
            >
              Redirects
            </div>
          </a>
          <div
            className="qui-test-component-element"
            style={{
              width: "10em",
              backgroundColor: "#454545",
              color: "white",
              cursor: "pointer",
            }}
            onClick={() => setOpenModalTwo(true)}
          >
            Opens a modal
          </div>
          <div
            className="qui-test-component-element"
            style={{
              width: "10em",
              backgroundColor: "#d97575",
              marginTop: "0.1em",
              cursor: "pointer",
            }}
            onClick={() => setOpenModalOne(false)}
          >
            Delete
          </div>
        </div>
      )}
      {openModalTwo && (
        <div
          className="qui qui-second-imported-component"
          style={{
            position: "absolute",
            zIndex: 22,
            background: "white",
            padding: "5em",
          }}
        >
          <h1>Testing Second Modal</h1>
          <ArcMenu
            menuType="close"
            arcIcon="close"
            position="top-right"
            onClick={() => setOpenModalTwo(false)}
          />
          <button onClick={(e) => args.onClick(e)}>Click</button>
        </div>
      )}
      <ArcMenu
        menuType="add"
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
    description: {
      story: "Displays a use of ArcMenu as a close and add button",
    },
    source: {
      code: `<ArcMenu {...${JSON.stringify(
        AddCloseButtonUseCase.args,
        null,
        2
      )}}/>`,
    },
  },
};
// -------------------------------------------------------------
//  Menu Button Use Case
// -------------------------------------------------------------
const ExampleTemplateMenu = (args) => {
  const [openModalOne, setOpenModalOne] = useState(false);
  const menuHandler = (value) => {
    /* useHistory or useNavigate can be used here to redirect within the application */
    if (value === "google") {
      window.location.href =
        "http://localhost:6006/?path=/story/design-system-accentline-accentline--default";
    }
    if (value === "youtube") {
      window.location.href =
        "http://localhost:6006/?path=/story/design-system-accentline-accentline--default";
    }
    if (value === "github") {
      window.location.href =
        "http://localhost:6006/?path=/story/design-system-accentline-accentline--default";
    }
    if (value === "modal") {
      setOpenModalOne(true);
    }
  };
  return (
    <div
      className="qui" /*parent must have a qui class for arcmenu*/
      style={{
        height: "90vh",
        border: "0.1em solid black",
        borderRadius: "1em",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Backdrop
        open={openModalOne}
        sx={{ zIndex: 10 }}
        onClick={() => setOpenModalOne(false)}
      />
      {openModalOne && (
        <div
          className="qui qui-second-imported-component"
          style={{
            position: "absolute",
            zIndex: 22,
            background: "white",
            padding: "5em",
          }}
        >
          <h1>Testing Second Modal</h1>
          <ArcMenu
            menuType="close"
            arcIcon="close"
            position="top-right"
            onClick={() => setOpenModalOne(false)}
          />
          <button onClick={(e) => args.onClick(e)}>Click</button>
        </div>
      )}
      <ArcMenu
        menuContent={[
          {
            header: "learning",
            list: [
              { title: "upload scorm", func: () => {} },
              { title: "upload pdf", func: () => {} },
              { title: "add video link", func: () => {} },
              {
                title: "create qdf deck",
                func: () => {},
              },
            ],
          },
        ]}
        menuType="menu"
        arcIcon="menu"
        position="bottom-left"
        onClick={(value) => menuHandler(value)}
      />
    </div>
  );
};
export const MenuUseCase = ExampleTemplateMenu.bind({});
MenuUseCase.parameters = {
  docs: {
    description: {
      story: "Displays a use case where ArcMenu is used as menu button",
    },
    source: {
      code: `<ArcMenu {...${JSON.stringify(MenuUseCase.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
//  Nugget Button Use Case
// -------------------------------------------------------------
const ExampleTemplateNugget = (args) => {
  const menuHandler = (value) => {
    /* useHistory or useNavigate can be used here to redirect within the application */
    if (value === "nugget story") {
      window.location.href =
        "http://localhost:6006/?path=/story/design-system-accentline-accentline--default";
    }
    if (value === "nugget quiz") {
      window.location.href =
        "http://localhost:6006/?path=/story/design-system-accentline-accentline--default";
    }
    if (value === "nugget assessment") {
      window.location.href =
        "http://localhost:6006/?path=/story/design-system-accentline-accentline--default";
    }
  };
  return (
    <div
      className="qui" /*parent must have a qui class for arcmenu*/
      style={{
        height: "90vh",
        border: "0.1em solid black",
        borderRadius: "1em",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ArcMenu
        nuggetContent={[
          { name: "nugget story", image: "../assets/nuggets/nugget_story.png", func: () => {} },
          { name: "nugget quiz", image: "../assets/nuggets/nugget_quiz.png", func: () => {} },
          {
            name: "nugget assessment",
            image: "../assets/nuggets/nugget_assessment.png",
            func: () => {},
          },
        ]}
        menuType="nugget-menu"
        arcIcon="menu"
        position="bottom-left"
        onClick={(value) => menuHandler(value)}
      />
    </div>
  );
};
export const NuggetMenuUseCase = ExampleTemplateNugget.bind({});
NuggetMenuUseCase.parameters = {
  docs: {
    description: {
      story: "Displays a use case where ArcMenu is used as nuggetMenu",
    },
    source: {
      code: `<ArcMenu {...${JSON.stringify(
        NuggetMenuUseCase.args,
        null,
        2
      )}}/>`,
    },
  },
};
