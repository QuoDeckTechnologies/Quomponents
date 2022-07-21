import React, { useState } from "react";
import ArcMenu from "../components/ArcMenu/ArcMenu.react";
import Backdrop from "@mui/material/Backdrop";
import ActionMenu from "../components/ActionMenu/ActionMenu.react";
import NuggetBlock from "../components/NuggetBlock/NuggetBlock.react";
import _ from "lodash";

import Nugget_Story from "../assets/nuggets/nugget_story.png";
import Nugget_Quiz from "../assets/nuggets/nugget_quiz.png";
import Nugget_Assessment from "../assets/nuggets/nugget_assessment.png";
import Nugget_Game from "../assets/nuggets/nugget_game.png";
import Nugget_Article from "../assets/nuggets/nugget_article.png";
import Nugget_Feedback from "../assets/nuggets/nugget_feedback.png";

export default {
  title: "Design System/ArcMenu",
  component: ArcMenu,
  argTypes: {
    menuPosition: {
      control: "select",
      options: ["top-right", "top-left", "bottom-right", "bottom-left"],
    },
    asVariant: {
      control: "select",
      options: ["primary", "secondary", "success", "warning", "error"],
      table: {
        category: "as-Flags",
      },
    },
    withIcon: {
      table: {
        category: "with-Params",
        defaultValue: {
          icon: "",
          size: "",
        },
      },
    },
    withColor: {
      table: {
        category: "with-Params",
        defaultValue: {
          backgroundColor: "",
          textColor: "",
          accentColor: "",
          hoverBackgroundColor: "",
          hoverTextColor: "",
        },
      },
    },
    withAnimation: {
      table: {
        category: "with-Params",
        defaultValue: {
          animation: "",
          duration: 0,
          delay: 0,
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
  return (
    <ArcMenu {...args}>
      <div style={{ display: "flex", gap: "1em" }}>
        <div style={{ width: "12em", textAlign: "center" }}>
          <p style={{ display: "inline-block" }}>Heading 1</p>
          <ActionMenu
            content={[
              {
                title: "Open Deck",
                icon: "fas fa-book-open",
                popover: "Open Deck...",
                onClick: () => {},
              },
              {
                title: "Edit Deck",
                icon: "fas fa-edit",
                popover: "Edit Deck...",
                onClick: () => {},
              },
              {
                title: "Move Deck Up",
                icon: "fas fa-chevron-up",
                popover: "Move Deck Up...",
                onClick: () => {},
              },
              {
                title: "Move Deck Down",
                icon: "fas fa-chevron-down",
                popover: "Move Deck Down...",
                onClick: () => {},
              },
              {
                title: "Move to Topic",
                icon: "fas fa-retweet",
                popover: "Move to Topic...",
                onClick: () => {},
              },
              {
                title: "Unpublish Deck",
                icon: "fas fa-eye-slash",
                popover: "Unpublish Deck...",
                onClick: () => {},
              },
              {
                title: "Delete Deck",
                icon: "fas fa-trash-alt",
                popover: "Delete Deck...",
                onClick: () => {},
              },
            ]}
            asPadded="normal"
            asAligned="left"
            withColor={{
              backgroundColor: "#fff",
              textColor: "",
              accentColor: "",
            }}
            withAnimation={{
              animation: "zoom",
              duration: 0.5,
              delay: 0,
            }}
            isHidden={false}
          />
        </div>
        <div style={{ width: "12em", textAlign: "center" }}>
          <p style={{ display: "inline-block" }}>Heading 2</p>
          <ActionMenu
            content={[
              {
                title: "Open Deck",
                icon: "fas fa-book-open",
                popover: "Open Deck...",
                onClick: () => {},
              },
              {
                title: "Edit Deck",
                icon: "fas fa-edit",
                popover: "Edit Deck...",
                onClick: () => {},
              },
              {
                title: "Move Deck Up",
                icon: "fas fa-chevron-up",
                popover: "Move Deck Up...",
                onClick: () => {},
              },
              {
                title: "Delete Deck",
                icon: "fas fa-trash-alt",
                popover: "Delete Deck...",
                onClick: () => {},
              },
            ]}
            asPadded="normal"
            asAligned="left"
            withColor={{
              backgroundColor: "#fff",
              textColor: "",
              accentColor: "",
            }}
            withAnimation={{
              animation: "zoom",
              duration: 0.5,
              delay: 0,
            }}
            isHidden={false}
          />
        </div>
        <div style={{ width: "12em", textAlign: "center" }}>
          <p style={{ display: "inline-block" }}>Heading 3</p>
          <ActionMenu
            content={[
              {
                title: "Unpublish Deck",
                icon: "fas fa-eye-slash",
                popover: "Unpublish Deck...",
                onClick: () => {},
              },
              {
                title: "Delete Deck",
                icon: "fas fa-trash-alt",
                popover: "Delete Deck...",
                onClick: () => {},
              },
            ]}
            asPadded="normal"
            asAligned="left"
            withColor={{
              backgroundColor: "#fff",
              textColor: "",
              accentColor: "",
            }}
            withAnimation={{
              animation: "zoom",
              duration: 0.5,
              delay: 0,
            }}
            isHidden={false}
          />
        </div>
      </div>
    </ArcMenu>
  );
};

export const Default = Template.bind({});
Default.args = {
  menuPosition: "top-right",
  asVariant: "primary",
  withIcon: {
    icon: "fas fa-outdent",
    size: "1.5em",
  },
  withColor: {
    backgroundColor: "",
    textColor: "",
    accentColor: "",
    hoverBackgroundColor: "",
    hoverTextColor: "",
  },
  withAnimation: {
    animation: "fade",
    duration: 0.5,
    delay: 0,
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
const NuggetTemplate = (args) => {
  const nuggetContent = [
    { image: Nugget_Story, func: () => {} },
    { image: Nugget_Quiz, func: () => {} },
    { image: Nugget_Assessment, func: () => {} },
    { image: Nugget_Game, func: () => {} },
    { image: Nugget_Article, func: () => {} },
    { image: Nugget_Feedback, func: () => {} },
    { image: Nugget_Quiz, func: () => {} },
    { image: Nugget_Assessment, func: () => {} },
  ];
  return (
    <ArcMenu {...args}>
      <div style={{ display: "grid", gridTemplateColumns: "auto auto auto" }}>
        {_.map(nuggetContent, (dataObj, i) => {
          return (
            <div key={i}>
              <NuggetBlock
                image={dataObj?.image}
                status="none"
                asSize="huge"
                asPadded="fitted"
                onClick={() => {
                  dataObj.func();
                }}
              />
            </div>
          );
        })}
      </div>
    </ArcMenu>
  );
};
export const NuggetMenuButton = NuggetTemplate.bind({});
NuggetMenuButton.args = {
  ...Default.args,
  menuPosition: "bottom-left",
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
// Translated Menu button
// -------------------------------------------------------------
const TranslatedTemplate = (args) => {
  const dictionary1 = JSON.stringify({
    hi: {
      actionMenu: {
        content: [
          { title: "डेक खोलो" },
          { title: "डेक संपादित करें" },
          { title: "डेक ऊपर ले जाएँ" },
          { title: "डेक नीचे ले जाएँ" },
          { title: "विषय पर जाएं" },
          { title: "डेक को अप्रकाशित करें" },
          { title: "डेक हटाएं" },
        ],
      },
    },
  });
  const dictionary2 = JSON.stringify({
    hi: {
      actionMenu: {
        content: [
          { title: "डेक खोलो" },
          { title: "डेक संपादित करें" },
          { title: "डेक ऊपर ले जाएँ" },
          { title: "डेक नीचे ले जाएँ" },
        ],
      },
    },
  });
  const dictionary3 = JSON.stringify({
    hi: {
      actionMenu: {
        content: [{ title: "डेक को अप्रकाशित करें" }, { title: "डेक हटाएं" }],
      },
    },
  });
  return (
    <ArcMenu {...args}>
      <div style={{ display: "flex", gap: "1em" }}>
        <div style={{ width: "12em", textAlign: "center" }}>
          <p style={{ display: "inline-block" }}>Heading 1</p>
          <ActionMenu
            content={[
              {
                title: "Open Deck",
                icon: "fas fa-book-open",
                popover: "Open Deck...",
                onClick: () => {},
              },
              {
                title: "Edit Deck",
                icon: "fas fa-edit",
                popover: "Edit Deck...",
                onClick: () => {},
              },
              {
                title: "Move Deck Up",
                icon: "fas fa-chevron-up",
                popover: "Move Deck Up...",
                onClick: () => {},
              },
              {
                title: "Move Deck Down",
                icon: "fas fa-chevron-down",
                popover: "Move Deck Down...",
                onClick: () => {},
              },
              {
                title: "Move to Topic",
                icon: "fas fa-retweet",
                popover: "Move to Topic...",
                onClick: () => {},
              },
              {
                title: "Unpublish Deck",
                icon: "fas fa-eye-slash",
                popover: "Unpublish Deck...",
                onClick: () => {},
              },
              {
                title: "Delete Deck",
                icon: "fas fa-trash-alt",
                popover: "Delete Deck...",
                onClick: () => {},
              },
            ]}
            asPadded="normal"
            asAligned="left"
            withColor={{
              backgroundColor: "#fff",
              textColor: "",
              accentColor: "",
            }}
            withTranslation={{
              lang: "hi",
              tgt: "actionMenu",
              dictionary: dictionary1,
            }}
            withAnimation={{
              animation: "zoom",
              duration: 0.5,
              delay: 0,
            }}
            isHidden={false}
          />
        </div>
        <div style={{ width: "12em", textAlign: "center" }}>
          <p style={{ display: "inline-block" }}>Heading 2</p>
          <ActionMenu
            content={[
              {
                title: "Open Deck",
                icon: "fas fa-book-open",
                popover: "Open Deck...",
                onClick: () => {},
              },
              {
                title: "Edit Deck",
                icon: "fas fa-edit",
                popover: "Edit Deck...",
                onClick: () => {},
              },
              {
                title: "Move Deck Up",
                icon: "fas fa-chevron-up",
                popover: "Move Deck Up...",
                onClick: () => {},
              },
              {
                title: "Delete Deck",
                icon: "fas fa-trash-alt",
                popover: "Delete Deck...",
                onClick: () => {},
              },
            ]}
            asPadded="normal"
            asAligned="left"
            withColor={{
              backgroundColor: "#fff",
              textColor: "",
              accentColor: "",
            }}
            withTranslation={{
              lang: "hi",
              tgt: "actionMenu",
              dictionary: dictionary2,
            }}
            withAnimation={{
              animation: "zoom",
              duration: 0.5,
              delay: 0,
            }}
            isHidden={false}
          />
        </div>
        <div style={{ width: "12em", textAlign: "center" }}>
          <p style={{ display: "inline-block" }}>Heading 3</p>
          <ActionMenu
            content={[
              {
                title: "Unpublish Deck",
                icon: "fas fa-eye-slash",
                popover: "Unpublish Deck...",
                onClick: () => {},
              },
              {
                title: "Delete Deck",
                icon: "fas fa-trash-alt",
                popover: "Delete Deck...",
                onClick: () => {},
              },
            ]}
            asPadded="normal"
            asAligned="left"
            withColor={{
              backgroundColor: "#fff",
              textColor: "",
              accentColor: "",
            }}
            withTranslation={{
              lang: "hi",
              tgt: "actionMenu",
              dictionary: dictionary3,
            }}
            withAnimation={{
              animation: "zoom",
              duration: 0.5,
              delay: 0,
            }}
            isHidden={false}
          />
        </div>
      </div>
    </ArcMenu>
  );
};
export const TranslatedMenuButton = TranslatedTemplate.bind({});
TranslatedMenuButton.args = {
  ...Default.args,
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
const AddButtonTemplate = (args) => <ArcMenu {...args} />;
export const AddButton = AddButtonTemplate.bind({});
AddButton.args = {
  ...Default.args,
  menuPosition: "bottom-left",
  withIcon: {
    icon: "fas fa-plus",
    size: "2em",
  },
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
          <a href="http://localhost:6006/?path=/story/design-system-accentline--default">
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
            menuPosition="top-right"
            withIcon={{ icon: "fas fa-times", size: "2em" }}
            onClick={() => setOpenModalTwo(false)}
          />
          <button onClick={(e) => args.onClick(e)}>Click</button>
        </div>
      )}
      <ArcMenu
        menuPosition="bottom-left"
        withIcon={{ icon: "fas fa-bars", size: "2em" }}
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
