import React from "react";
import AuthoringTool from "../components/AuthoringTool/AuthoringTool.react";
import ActionMenu from "../components/ActionMenu/ActionMenu.react";

const dictionary = JSON.stringify({
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

export default {
  title: "Design System/AuthoringTool",
  component: AuthoringTool,
  argTypes: {
    content: {
      defaultValue: {
        name: "",
        readerType: "",
        menuData: [],
      },
    },
    asPadded: {
      control: "select",
      options: ["fitted", "compact", "normal", "relaxed"],
      table: {
        category: "as-Flags",
      },
    },
    withColor: {
      table: {
        category: "with-Params",
        defaultValue: {
          backgroundColor: "",
          textColor: "",
          hoverTextColor: "",
          hoverBackgroundColor: "",
          accentColor: "",
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
    onChange: {
      table: {
        category: "Events",
        defaultValue: null,
      },
    },
    onChecked: {
      table: {
        category: "Events",
        defaultValue: null,
      },
    },
    onUnchecked: {
      table: {
        category: "Events",
        defaultValue: null,
      },
    },
    onContentUpdate: {
      table: {
        category: "Events",
        defaultValue: null,
      },
    },
  },
  decorators: [(story) => <div>{story()}</div>],
  parameters: {
    componentSubtitle: "Displays a Content table row",
    a11y: { disable: true },
    docs: {
      iframeHeight: 200,
    },
  },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => (
  <AuthoringTool {...args}/>
);

export const Default = Template.bind({});
Default.args = {
  content: {
    name: "Dummy file-name",
    readerType: "videck",
    checked: true,
  },
  asPadded: "normal",
  withAnimation: {
    animation: "zoom",
    duration: 0.5,
    delay: 0,
  },
  withColor: {
    backgroundColor: "",
    textColor: "",
    hoverTextColor: "",
    hoverBackgroundColor: "",
    accentColor: "",
  },
};
Default.parameters = {
  docs: {
    source: {
      code: `<AuthoringTool
          content={{
            name: "Dummy file-name",
            readerType: "videck",
            checked: true,
          }}
          asPadded="normal"
          withAnimation={{
            animation: "zoom",
            duration: 0.5,
            delay: 0,
          }}
          withColor={{
            backgroundColor: "",
            textColor: "",
            hoverTextColor: "",
            hoverBackgroundColor: "",
            accentColor: "",
          }}
          onChange={() => {}}
          onChecked={() => {}}
          onUnchecked={() => {}}
          onContentUpdate={() => {}}
        >
          <ActionMenu
            content={[
              {
                title: "Open Deck",
                icon: "fas fa-book-open",
                onClick: () => {},
              },
              {
                title: "Edit Deck",
                icon: "fas fa-edit",
                onClick: () => {},
              },
              {
                title: "Move Deck Up",
                icon: "fas fa-chevron-up",
                onClick: () => {},
              },
              {
                title: "Move Deck Down",
                icon: "fas fa-chevron-down",
                onClick: () => {},
              },
              {
                title: "Move to Topic",
                icon: "fas fa-retweet",
                onClick: () => {},
              },
              {
                title: "Unpublish Deck",
                icon: "fas fa-eye-slash",
                onClick: () => {},
              },
              {
                title: "Delete Deck",
                icon: "fas fa-trash-alt",
                onClick: () => {},
              },
            ]}
            withColor={{
              backgroundColor: "#ffffff",
              accentColor: "",
              textColor: "",
            }}
            withAnimation={{
              animation: "slideDown",
              duration: 0.5,
              delay: 0,
            }}
            withTranslation={{
              lang: "en",
              tgt: "actionMenu",
              dictionary: ${JSON.stringify({
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
              })},,
            }}
            isDisabled={false}
            isHidden={false}
          />
        </AuthoringTool>`,
    },
  },
};
