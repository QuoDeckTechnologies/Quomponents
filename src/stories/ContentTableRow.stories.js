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
  title: "Design System/ContentTableRow/ContentTableRow",
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
          menuIconColor: "",
          readerIconColor: "",
          checkIconColor: "",
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
  decorators: [
    (story) => (
      <div
        style={{
          width: "100%",
          textAlign: "center",
        }}
      >
        {story()}
      </div>
    ),
  ],
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
          func: () => {},
        },
        {
          title: "Edit Deck",
          icon: "fas fa-edit",
          func: () => {},
        },
        {
          title: "Move Deck Up",
          icon: "fas fa-chevron-up",
          func: () => {},
        },
        {
          title: "Move Deck Down",
          icon: "fas fa-chevron-down",
          func: () => {},
        },
        {
          title: "Move to Topic",
          icon: "fas fa-retweet",
          func: () => {},
        },
        {
          title: "Unpublish Deck",
          icon: "fas fa-eye-slash",
          func: () => {},
        },
        {
          title: "Delete Deck",
          icon: "fas fa-trash-alt",
          func: () => {},
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
    menuIconColor: "",
    readerIconColor: "",
    checkIconColor: "",
  },
};
Default.parameters = {
  docs: {
    source: {
      code: `<ContentTableRow {...${JSON.stringify(Default.args, null, 2)}}/>`,
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
          func: () => {},
        },
        {
          title: "Edit Deck",
          icon: "fas fa-edit",
          func: () => {},
        },
        {
          title: "Move Deck Up",
          icon: "fas fa-chevron-up",
          func: () => {},
        },
        {
          title: "Move Deck Down",
          icon: "fas fa-chevron-down",
          func: () => {},
        },
        {
          title: "Move to Topic",
          icon: "fas fa-retweet",
          func: () => {},
        },
        {
          title: "Unpublish Deck",
          icon: "fas fa-eye-slash",
          func: () => {},
        },
        {
          title: "Delete Deck",
          icon: "fas fa-trash-alt",
          func: () => {},
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
      story: "Use to change the language that the text appears in.",
    },
    source: {
      code: `<ContentTableRow {...${JSON.stringify(
        TranslatedContentTableRow.args,
        null,
        2
      )}}/>`,
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
    menuIconColor: "#00153E",
    readerIconColor: "#00153E",
    checkIconColor: "#00153E",
  },
};
ColoredContentTableRow.parameters = {
  docs: {
    description: {
      story: "Use to change the language that the text appears in.",
    },
    source: {
      code: `<ContentTableRow {...${JSON.stringify(
        ColoredContentTableRow.args,
        null,
        2
      )}}/>`,
    },
  },
};
