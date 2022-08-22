import React from "react";
import ContentTableRow from "../components/ContentTableRow/ContentTableRow.react";
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
  title: "Design System/ContentTableRow",
  component: ContentTableRow,
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
  <ContentTableRow {...args}>
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
        dictionary: dictionary,
      }}
      isDisabled={false}
      isHidden={false}
    />
  </ContentTableRow>
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
      code: `<ContentTableRow
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
        </ContentTableRow>`,
    },
  },
};
// -------------------------------------------------------------
// Translated content table row
// -------------------------------------------------------------
const TranslationTemplate = (args) => (
  <ContentTableRow {...args}>
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
        textColor: "",
        accentColor: "",
      }}
      withAnimation={{
        animation: "slideDown",
        duration: 0.5,
        delay: 0,
      }}
      withTranslation={{
        lang: "hi",
        tgt: "actionMenu",
        dictionary: dictionary,
      }}
    />
  </ContentTableRow>
);
export const TranslatedContentTableRow = TranslationTemplate.bind({});
TranslatedContentTableRow.args = {
  ...Default.args,
};
TranslatedContentTableRow.parameters = {
  docs: {
    description: {
      story:
        "Use to change the language that the text appears in. To make this work for the content table row, add actionMenu: content: [{ title: 'डेक खोलो' }], value to the dictionary.",
    },
    source: {
      code: `<ContentTableRow
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
              textColor: "",
              accentColor: "",
            }}
            withAnimation={{
              animation: "slideDown",
              duration: 0.5,
              delay: 0,
            }}
            withTranslation={{
              lang: "hi",
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
              })},
            }}
          />
        </ContentTableRow>`,
    },
  },
};
// -------------------------------------------------------------
// Colored content table row
// -------------------------------------------------------------
export const ColoredContentTableRow = TranslationTemplate.bind({});
ColoredContentTableRow.args = {
  ...Default.args,
  withColor: {
    backgroundColor: "#FFBF00",
    textColor: "#222A35",
    hoverTextColor: "#00153E",
    hoverBackgroundColor: "#00153E",
    accentColor: "#00153E",
  },
};
ColoredContentTableRow.parameters = {
  docs: {
    description: {
      story: "Use to show the colors passed by withColor props.",
    },
    source: {
      code: `<ContentTableRow
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
            backgroundColor: "#FFBF00",
            textColor: "#222A35",
            hoverTextColor: "#00153E",
            hoverBackgroundColor: "#00153E",
            accentColor: "#00153E",
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
              })},
            }}
            isDisabled={false}
            isHidden={false}
          />
        </ContentTableRow>`,
    },
  },
};
