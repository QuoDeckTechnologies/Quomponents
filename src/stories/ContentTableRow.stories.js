import React from "react";
import ContentTableRow from "../components/ContentTableRow/ContentTableRow.react";

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
const Template = (args) => <ContentTableRow {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: {
    name: "Dummy file-name",
    readerType: "videck",
    menuData: [
      {
        title: "Open Deck",
        icon: "fas fa-book-open",
      },
      {
        title: "Edit Deck",
        icon: "fas fa-edit",
      },
      {
        title: "Move Deck Up",
        icon: "fas fa-chevron-up",
      },
      {
        title: "Move Deck Down",
        icon: "fas fa-chevron-down",
      },
      {
        title: "Move to Topic",
        icon: "fas fa-retweet",
      },
      {
        title: "Unpublish Deck",
        icon: "fas fa-eye-slash",
      },
      {
        title: "Delete Deck",
        icon: "fas fa-trash-alt",
      },
    ],
  },
  asPadded: "normal",
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
      code: `<ContentTableRow {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};

// -------------------------------------------------------------
// ContentTableRow
// -------------------------------------------------------------
const ListTemplate = (args) => {
  return (
    <div className="qui-content-table-row-list">
      <ContentTableRow
        {...args}
        content={{
          name: "Dummy file-name",
          readerType: "docdeck",
          menuData: [
            {
              title: "Open Deck",
              icon: "fas fa-book-open",
            },
            {
              title: "Edit Deck",
              icon: "fas fa-edit",
            },
            {
              title: "Move Deck Up",
              icon: "fas fa-chevron-up",
            },
            {
              title: "Move Deck Down",
              icon: "fas fa-chevron-down",
            },
            {
              title: "Move to Topic",
              icon: "fas fa-retweet",
            },
            {
              title: "Unpublish Deck",
              icon: "fas fa-eye-slash",
            },
            {
              title: "Delete Deck",
              icon: "fas fa-trash-alt",
            },
          ],
        }}
      />
      <ContentTableRow
        {...args}
        content={{
          name: "Dummy file-name",
          readerType: "assessment",
          menuData: [
            {
              title: "Open Deck",
              icon: "fas fa-book-open",
            },
            {
              title: "Edit Deck",
              icon: "fas fa-edit",
            },
            {
              title: "Move Deck Up",
              icon: "fas fa-chevron-up",
            },
            {
              title: "Move Deck Down",
              icon: "fas fa-chevron-down",
            },
            {
              title: "Move to Topic",
              icon: "fas fa-retweet",
            },
            {
              title: "Unpublish Deck",
              icon: "fas fa-eye-slash",
            },
            {
              title: "Delete Deck",
              icon: "fas fa-trash-alt",
            },
          ],
        }}
      />
      <ContentTableRow
        {...args}
        content={{
          name: "Dummy file-name",
          readerType: "survey",
          menuData: [
            {
              title: "Open Deck",
              icon: "fas fa-book-open",
            },
            {
              title: "Edit Deck",
              icon: "fas fa-edit",
            },
            {
              title: "Move Deck Up",
              icon: "fas fa-chevron-up",
            },
            {
              title: "Move Deck Down",
              icon: "fas fa-chevron-down",
            },
            {
              title: "Move to Topic",
              icon: "fas fa-retweet",
            },
            {
              title: "Unpublish Deck",
              icon: "fas fa-eye-slash",
            },
            {
              title: "Delete Deck",
              icon: "fas fa-trash-alt",
            },
          ],
        }}
      />
      <ContentTableRow
        {...args}
        content={{
          name: "Dummy file-name",
          readerType: "qdf",
          menuData: [
            {
              title: "Open Deck",
              icon: "fas fa-book-open",
            },
            {
              title: "Edit Deck",
              icon: "fas fa-edit",
            },
            {
              title: "Move Deck Up",
              icon: "fas fa-chevron-up",
            },
            {
              title: "Move Deck Down",
              icon: "fas fa-chevron-down",
            },
            {
              title: "Move to Topic",
              icon: "fas fa-retweet",
            },
            {
              title: "Unpublish Deck",
              icon: "fas fa-eye-slash",
            },
            {
              title: "Delete Deck",
              icon: "fas fa-trash-alt",
            },
          ],
        }}
      />
    </div>
  );
};
export const ContentTableRowList = ListTemplate.bind({});
ContentTableRowList.parameters = {
  docs: {
    description: {
      story: "Shows a list of ContentTableRow Component",
    },
    source: {
      code: `<ContentTableRowList {...${JSON.stringify(
        ContentTableRowList.args,
        null,
        2
      )}}/>`,
    },
  },
};
