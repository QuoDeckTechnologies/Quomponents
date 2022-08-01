import React, { useState } from "react";
import _ from "lodash";
import ArcMenu from "../components/ArcMenu/ArcMenu.react";
import Backdrop from "@mui/material/Backdrop";
import ActionMenu from "../components/ActionMenu/ActionMenu.react";
import NuggetBlock from "../components/NuggetBlock/NuggetBlock.react";

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
    asEmphasis: {
      control: "select",
      options: ["close", "menu", "add"],
    },
    position: {
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
          position: "left",
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
  asEmphasis: "close",
  position: "top-right",
  asVariant: "primary",
  withIcon: { icon: "", size: "" },
  withColor: {
    backgroundColor: "#666666",
    textColor: "#FFBF00",
    accentColor: "",
    hoverBackgroundColor: "#666666",
    hoverTextColor: "",
  },
  withAnimation: {
    animation: "zoom",
    duration: 0.5,
    delay: 0,
  },
  isDisabled: false,
  isHidden: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<ArcMenu
          asEmphasis="close"
          position="top-right"
          asVariant="primary"
          withIcon={{ icon: "", size: "" }}
          withColor={{
            backgroundColor: "#666666",
            textColor: "#FFBF00",
            accentColor: "",
            hoverBackgroundColor: "#666666",
            hoverTextColor: "",
          }}
          isDisabled={false}
          isHidden={false}
          onClick={()=>{}}
        >
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
        </ArcMenu>`,
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
  asEmphasis: "menu",
  position: "bottom-left",
};
NuggetMenuButton.parameters = {
  docs: {
    description: {
      story: "Displays ArcMenu using nugget block",
    },
    source: {
      code: `const nuggetContent = [
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
          <ArcMenu 
            asEmphasis="menu" 
            position="bottom-left"
            asVariant="primary"
            withIcon={{ icon: "", size: "" }}
            withColor={{
              backgroundColor: "#666666",
              textColor: "#FFBF00",
              accentColor: "",
              hoverBackgroundColor: "#666666",
              hoverTextColor: "",
            }}
            isDisabled={false}
            isHidden={false}
            onClick={()=>{}}
            >
            <div
              style={{ display: "grid", gridTemplateColumns: "auto auto auto" }}
            >
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
        )`,
    },
  },
};
// -------------------------------------------------------------
// Menu button
// -------------------------------------------------------------
export const MenuButton = Template.bind({});
MenuButton.args = {
  ...Default.args,
  asEmphasis: "menu",
  position: "bottom-left",
};
MenuButton.parameters = {
  docs: {
    description: {
      story: "Displays ArcMenu used as menu",
    },
    source: {
      code: `<ArcMenu
          asVariant="primary"
          withIcon={{ icon: "", size: "" }}
          withColor={{
            backgroundColor: "#666666",
            textColor: "#FFBF00",
            accentColor: "",
            hoverBackgroundColor: "#666666",
            hoverTextColor: "",
          }}
          isDisabled={false}
          isHidden={false}
          asEmphasis="menu"
          position="bottom-left"
          onClick={()=>{}}
        >
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
        </ArcMenu>`,
    },
  },
};
// -------------------------------------------------------------
// Add button
// -------------------------------------------------------------
export const AddButton = Template.bind({});
AddButton.args = {
  ...Default.args,
  asEmphasis: "add",
  position: "bottom-left",
};
AddButton.parameters = {
  docs: {
    description: {
      story: "Display ArcMenu used as Add button",
    },
    source: {
      code: `<ArcMenu
          asEmphasis="add"
          position="bottom-left"
          asVariant="primary"
          withIcon={{ icon: "", size: "" }}
          withColor={{
            backgroundColor: "#666666",
            textColor: "#FFBF00",
            accentColor: "",
            hoverBackgroundColor: "#666666",
            hoverTextColor: "",
          }}
          isDisabled={false}
          isHidden={false}
          onClick={()=>{}}
        >
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
        </ArcMenu>`,
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
            asEmphasis="close"
            position="top-right"
            withColor={{
              backgroundColor: "#eee",
              hoverBackgroundColor: "#eee",
              textColor: "#FFBF00",
            }}
            onClick={() => setOpenModalTwo(false)}
          />
          <button onClick={(e) => args.onClick(e)}>Click</button>
        </div>
      )}
      <ArcMenu
        asEmphasis="add"
        position="bottom-left"
        withColor={{
          backgroundColor: "#666666",
          hoverBackgroundColor: "#666666",
          textColor: "#FFBF00",
        }}
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
      code: `const [openModalOne, setOpenModalOne] = useState(false);
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
              style={{
                position: "absolute",
                zIndex: 20,
                left: "0",
                bottom: "20%",
              }}
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
                asEmphasis="close"
                position="top-right"
                withColor={{
                  backgroundColor: "#eee",
                  hoverBackgroundColor: "#eee",
                  textColor: "#FFBF00",
                }}
                onClick={() => setOpenModalTwo(false)}
              />
              <button onClick={(e) => args.onClick(e)}>Click</button>
            </div>
          )}
          <ArcMenu
            asEmphasis="add"
            position="bottom-left"
            withColor={{
              backgroundColor: "#666666",
              hoverBackgroundColor: "#666666",
              textColor: "#FFBF00",
            }}
            onClick={() => setOpenModalOne(true)}
          />
        </div>
        )`,
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
            asEmphasis="close"
            position="top-right"
            onClick={() => setOpenModalOne(false)}
          />
          <button onClick={(e) => args.onClick(e)}>Click</button>
        </div>
      )}
      <ArcMenu
        withColor={{
          backgroundColor: "#666666",
          hoverBackgroundColor: "#666666",
        }}
        asEmphasis="menu"
        position="bottom-left"
        onClick={(value) => menuHandler(value)}
      >
        {" "}
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
      </ArcMenu>
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
      code: `const [openModalOne, setOpenModalOne] = useState(false);
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
                asEmphasis="close"
                position="top-right"
                onClick={() => setOpenModalOne(false)}
              />
              <button onClick={(e) => args.onClick(e)}>Click</button>
            </div>
          )}
          <ArcMenu
            withColor={{
              backgroundColor: "#666666",
              hoverBackgroundColor: "#666666",
            }}
            asEmphasis="menu"
            position="bottom-left"
            onClick={(value) => menuHandler(value)}
          >
            {" "}
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
          </ArcMenu>
        </div>
      );,`,
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
  const nuggetContent = [
    { image: Nugget_Article, func: () => {} },
    { image: Nugget_Feedback, func: () => {} },
    { image: Nugget_Quiz, func: () => {} },
    { image: Nugget_Assessment, func: () => {} },
  ];
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
        asEmphasis="menu"
        position="bottom-left"
        withColor={{ backgroundColor: "#666666" }}
        onClick={(value) => menuHandler(value)}
      >
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
      code: `const menuHandler = (value) => {
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
      const nuggetContent = [
        { image: Nugget_Article, func: () => {} },
        { image: Nugget_Feedback, func: () => {} },
        { image: Nugget_Quiz, func: () => {} },
        { image: Nugget_Assessment, func: () => {} },
      ];
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
            asEmphasis="menu"
            position="bottom-left"
            withColor={{ backgroundColor: "#666666" }}
            onClick={(value) => menuHandler(value)}
          >
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
        </div>
      );,`,
    },
  },
};
