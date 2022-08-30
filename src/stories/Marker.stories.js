import React from "react";
import Marker from "../components/Marker/Marker.react";

export default {
  title: "Design System/Marker/Marker",
  component: Marker,
  argTypes: {
    content: {},
    status: {
      control: "select",
      options: ["current", "complete", "incomplete"],
      table: {
        category: "as-Flags",
      },
    },
    sequential: {
      table: {
        category: "is-Toggles",
        defaultValue: true,
      },
    },
    asSize: {
      control: "select",
      options: ["tiny", "small", "normal", "big", "huge", "massive"],
      table: {
        category: "as-Flags",
      },
    },
    onClick: {
      table: {
        category: "Events",
        defaultValue: null,
      },
    },
    onOpenDeck: {
      table: {
        category: "Events",
        defaultValue: null,
      },
    },
    isHidden: {
      table: {
        category: "is-Toggles",
        defaultValue: false,
      },
    },
    isDisabled: {
      table: {
        category: "is-Toggles",
        defaultValue: false,
      },
    },
  },
  decorators: [
    (story) => (
      <div
        style={{
          textAlign: "center",
        }}
      >
        {story()}
      </div>
    ),
  ],
  parameters: {
    componentSubtitle: "Default Marker for general purpose use",
    a11y: { disable: true },
    docs: { iframeHeight: 500 },
  },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <Marker {...args} />;
export const Default = Template.bind({});
Default.args = {
  content: {
    wrapper: "carnival",
    inset: 1,
    node: {
      _id: "511",
      name: "First Topic",
      description: "This is first new topic of this course",
      contentList: [
        {
          _id: "512",
          name: "Assesment format",
          readerType: "game",
          sequence: 0,
        },
      ],
      sequence: 0,
    },
  },
  completion: { 512: 90 },
  sequential: false,
  status: "current",
  asSize: "normal",
  isHidden: false,
  isDisabled: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<Marker content={{
                wrapper: "carnival",
                inset: 1,
                node: {
                    _id: "511",
                    name: "First Topic",
                    description: "This is first new topic of this course",
                    contentList: [{
                        _id: "512",
                        name: "Assesment format",
                        readerType: "game",
                        sequence: 0,
                    }],
                    sequence: 0,
                }
            }}
                completion={{ 512: 50 }}
                sequential={false}
                status="current"
                asSize="normal"
                isHidden={false}
                isDisabled={false} />`,
    },
  },
};
