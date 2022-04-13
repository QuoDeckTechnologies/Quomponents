import React from "react";
import OptionItem from "../components/OptionItem/OptionItem/OptionItem.react";

export default {
  title: "Design System/OptionItem/OptionItem",
  component: OptionItem,
  argTypes: {
    content: [],
    optionType: {
      control: "select",
      options: [
        "title",
        "single-select",
        "picture-select",
        "multiple-select",
        "picture-title",
        "picture-select-with-caption",
        "single-select-picture-title",
        "title-outline-button",
        "short-field-title",
        "option-picture-with-message",
      ],
      table: {
        category: "as-Flags",
      },
    },
    withColor: {
      table: {
        category: "with-Params",
        defaultValue: {
          backgroundColor: "",
          accentColor: "",
          textColor: "",
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
    componentSubtitle: "Displays a OptionItem.",
    a11y: { disable: true },
    docs: {
      iframeHeight: 250,
    },
  },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => {
  return <OptionItem {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  content: [
    {
      name: "name one",
      value: "",
      placeholder: "Placeholder One",
      checked: false,
      image: {},
      captionName: "caption name one",
      captionValue: "",
      captionPlaceholder: "Caption Placeholder One",
      shortFieldName_1: "short field one first",
      shortFieldName_2: "short field one second",
      shortFieldValue_1: "1",
      shortFieldValue_2: "2",
      optionName: "option a",
      optionPlaceholder: "Option A",
      optionValue: "",
      headerName: "Name of Header for Option A",
      headerValue: "",
      headerPlaceholder: "Header for Option A",
      messageName: "Name of Message for Option A",
      messagePlaceholder: "Message for Option A",
      messageValue: "",
    },
    {
      name: "name two",
      value: "",
      placeholder: "Placeholder Two",
      checked: true,
      image: {},
      captionName: "caption name two",
      captionValue: "",
      captionPlaceholder: "Caption Placeholder Two",
      shortFieldName_1: "short field two first",
      shortFieldName_2: "short field two second",
      shortFieldValue_1: "3",
      shortFieldValue_2: "4",
      optionName: "option b",
      optionPlaceholder: "Option B",
      optionValue: "",
      headerName: "Name of Header for Option B",
      headerValue: "",
      headerPlaceholder: "Header for Option B",
      messageName: "Name of Message for Option B",
      messagePlaceholder: "Message for Option B",
      messageValue: "",
    },
    {
      name: "name three",
      value: "",
      placeholder: "Placeholder Three",
      checked: false,
      image: {},
      captionName: "caption name three",
      captionValue: "",
      captionPlaceholder: "Caption Placeholder Three",
      shortFieldName_1: "short field three first",
      shortFieldName_2: "short field three second",
      shortFieldValue_1: "5",
      shortFieldValue_2: "6",
      optionName: "option c",
      optionPlaceholder: "Option C",
      optionValue: "",
      headerName: "Name of Header for Option C",
      headerValue: "",
      headerPlaceholder: "Header for Option C",
      messageName: "Name of Message for Option C",
      messagePlaceholder: "Message for Option C",
      messageValue: "",
    },
  ],
  optionType: "single-select",
  withColor: {
    backgroundColor: "#ffab000d",
    accentColor: "",
    textColor: "",
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
      code: `<OptionItem {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Title Option
// -------------------------------------------------------------
export const TitleOption = Template.bind({});
TitleOption.args = {
  ...Default.args,
  content: [
    {
      name: "name one",
      value: "",
      placeholder: "Placeholder One",
    },
    {
      name: "name two",
      value: "",
      placeholder: "Placeholder Two",
    },
    {
      name: "name three",
      value: "",
      placeholder: "Placeholder Three",
    },
  ],
  optionType: "title",
};
TitleOption.parameters = {
  docs: {
    source: {
      code: `<OptionItem {...${JSON.stringify(TitleOption.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// Single Select Option
// -------------------------------------------------------------
export const SingleSelectOption = Template.bind({});
SingleSelectOption.args = {
  ...Default.args,
  content: [
    {
      name: "name one",
      value: "",
      placeholder: "Placeholder One",
      checked: false,
    },
    {
      name: "name two",
      value: "",
      placeholder: "Placeholder Two",
      checked: true,
    },
    {
      name: "name three",
      value: "",
      placeholder: "Placeholder Three",
      checked: false,
    },
  ],
  optionType: "single-select",
};
SingleSelectOption.parameters = {
  docs: {
    source: {
      code: `<OptionItem {...${JSON.stringify(
        SingleSelectOption.args,
        null,
        2
      )}}/>`,
    },
  },
};
//-------------------------------------------------------------
// Picture Select Option
// -------------------------------------------------------------
export const PictureSelectOption = Template.bind({});
PictureSelectOption.args = {
  ...Default.args,
  content: [
    {
      name: "name one",
      value: "",
      placeholder: "Placeholder One",
      checked: false,
      image: {},
    },
    {
      name: "name two",
      value: "",
      placeholder: "Placeholder Two",
      checked: true,
      image: {},
    },
    {
      name: "name three",
      value: "",
      placeholder: "Placeholder Three",
      checked: false,
      image: {},
    },
  ],
  optionType: "picture-select",
};
PictureSelectOption.parameters = {
  docs: {
    source: {
      code: `<OptionItem {...${JSON.stringify(
        PictureSelectOption.args,
        null,
        2
      )}}/>`,
    },
  },
};
//-------------------------------------------------------------
// Multiple Select Option
// -------------------------------------------------------------
export const MultipleSelectOption = Template.bind({});
MultipleSelectOption.args = {
  ...Default.args,
  content: [
    {
      name: "name one",
      value: "",
      placeholder: "Placeholder One",
      checked: false,
    },
    {
      name: "name two",
      value: "",
      placeholder: "Placeholder Two",
      checked: true,
    },
    {
      name: "name three",
      value: "",
      placeholder: "Placeholder Three",
      checked: false,
      image: {},
    },
  ],
  optionType: "multiple-select",
};
MultipleSelectOption.parameters = {
  docs: {
    source: {
      code: `<OptionItem {...${JSON.stringify(
        MultipleSelectOption.args,
        null,
        2
      )}}/>`,
    },
  },
};
//-------------------------------------------------------------
// Picture Title Option
// -------------------------------------------------------------
export const PictureTitleOption = Template.bind({});
PictureTitleOption.args = {
  ...Default.args,
  content: [
    {
      name: "name one",
      value: "",
      placeholder: "Placeholder One",
      image: {},
    },
    {
      name: "name two",
      value: "",
      placeholder: "Placeholder Two",
      image: {},
    },
    {
      name: "name three",
      value: "",
      placeholder: "Placeholder Three",
      image: {},
    },
  ],
  optionType: "picture-title",
};
PictureTitleOption.parameters = {
  docs: {
    source: {
      code: `<OptionItem {...${JSON.stringify(
        PictureTitleOption.args,
        null,
        2
      )}}/>`,
    },
  },
};
//-------------------------------------------------------------
// Picture Select With Caption Option
// -------------------------------------------------------------
export const PictureSelectWithCaptionOption = Template.bind({});
PictureSelectWithCaptionOption.args = {
  ...Default.args,
  content: [
    {
      name: "name one",
      value: "",
      placeholder: "Placeholder One",
      checked: false,
      image: {},
      captionName: "caption name one",
      captionValue: "",
      captionPlaceholder: "Caption Placeholder One",
    },
    {
      name: "name two",
      value: "",
      placeholder: "Placeholder Two",
      checked: true,
      image: {},
      captionName: "caption name two",
      captionValue: "",
      captionPlaceholder: "Caption Placeholder Two",
    },
    {
      name: "name three",
      value: "",
      placeholder: "Placeholder Three",
      checked: false,
      image: {},
      captionName: "caption name three",
      captionValue: "",
      captionPlaceholder: "Caption Placeholder Three",
    },
  ],
  optionType: "picture-select-with-caption",
};
PictureSelectWithCaptionOption.parameters = {
  docs: {
    source: {
      code: `<OptionItem {...${JSON.stringify(
        PictureSelectWithCaptionOption.args,
        null,
        2
      )}}/>`,
    },
  },
};
//-------------------------------------------------------------
// Single Select Picture Title Option
// -------------------------------------------------------------
export const SingleSelectPictureTitleOption = Template.bind({});
SingleSelectPictureTitleOption.args = {
  ...Default.args,
  content: [
    {
      name: "name one",
      value: "",
      placeholder: "Placeholder One",
      checked: false,
      image: {},
    },
    {
      name: "name two",
      value: "",
      placeholder: "Placeholder Two",
      checked: true,
      image: {},
    },
    {
      name: "name three",
      value: "",
      placeholder: "Placeholder Three",
      checked: false,
      image: {},
    },
  ],
  optionType: "single-select-picture-title",
};
SingleSelectPictureTitleOption.parameters = {
  docs: {
    source: {
      code: `<OptionItem {...${JSON.stringify(
        SingleSelectPictureTitleOption.args,
        null,
        2
      )}}/>`,
    },
  },
};
//-------------------------------------------------------------
// Title Outline Button Option
// -------------------------------------------------------------
export const TitleOutlineButtonOption = Template.bind({});
TitleOutlineButtonOption.args = {
  ...Default.args,
  content: [
    {
      name: "name one",
      value: "",
      placeholder: "Placeholder One",
    },
    {
      name: "name two",
      value: "",
      placeholder: "Placeholder Two",
    },
    {
      name: "name three",
      value: "",
      placeholder: "Placeholder Three",
    },
  ],
  optionType: "title-outline-button",
};
TitleOutlineButtonOption.parameters = {
  docs: {
    source: {
      code: `<OptionItem {...${JSON.stringify(
        TitleOutlineButtonOption.args,
        null,
        2
      )}}/>`,
    },
  },
};
//-------------------------------------------------------------
// Short Field Title Option
// -------------------------------------------------------------
export const ShortFieldTitleOption = Template.bind({});
ShortFieldTitleOption.args = {
  ...Default.args,
  content: [
    {
      name: "name one",
      value: "",
      placeholder: "Placeholder One",
      shortFieldName_1: "short field one first",
      shortFieldName_2: "short field one second",
      shortFieldValue_1: "1",
      shortFieldValue_2: "2",
    },
    {
      name: "name two",
      value: "",
      placeholder: "Placeholder Two",
      shortFieldName_1: "short field two first",
      shortFieldName_2: "short field two second",
      shortFieldValue_1: "3",
      shortFieldValue_2: "4",
    },
    {
      name: "name three",
      value: "",
      placeholder: "Placeholder Three",
      shortFieldName_1: "short field three first",
      shortFieldName_2: "short field three second",
      shortFieldValue_1: "5",
      shortFieldValue_2: "6",
    },
  ],
  optionType: "short-field-title",
};
ShortFieldTitleOption.parameters = {
  docs: {
    source: {
      code: `<OptionItem {...${JSON.stringify(
        ShortFieldTitleOption.args,
        null,
        2
      )}}/>`,
    },
  },
};
//-------------------------------------------------------------
// Option Picture With Message Option
// -------------------------------------------------------------
export const OptionPictureWithMessageOption = Template.bind({});
OptionPictureWithMessageOption.args = {
  ...Default.args,
  content: [
    {
      image: {},
      optionName: "option a",
      optionPlaceholder: "Option A",
      optionValue: "",
      headerName: "Name of Header for Option A",
      headerValue: "",
      headerPlaceholder: "Header for Option A",
      messageName: "Name of Message for Option A",
      messagePlaceholder: "Message for Option A",
      messageValue: "",
    },
    {
      image: {},
      optionName: "option b",
      optionPlaceholder: "Option B",
      optionValue: "",
      headerName: "Name of Header for Option B",
      headerValue: "",
      headerPlaceholder: "Header for Option B",
      messageName: "Name of Message for Option B",
      messagePlaceholder: "Message for Option B",
      messageValue: "",
    },
    {
      image: {},
      optionName: "option c",
      optionPlaceholder: "Option C",
      optionValue: "",
      headerName: "Name of Header for Option C",
      headerValue: "",
      headerPlaceholder: "Header for Option C",
      messageName: "Name of Message for Option C",
      messagePlaceholder: "Message for Option C",
      messageValue: "",
    },
  ],
  optionType: "option-picture-with-message",
};
OptionPictureWithMessageOption.parameters = {
  docs: {
    source: {
      code: `<OptionItem {...${JSON.stringify(
        OptionPictureWithMessageOption.args,
        null,
        2
      )}}/>`,
    },
  },
};
//-------------------------------------------------------------
// Colored OptionItem
// -------------------------------------------------------------
const MultipleTemplate = (args) => {
  return (
    <div>
      <OptionItem {...args} optionType="title" />
      <OptionItem {...args} optionType="single-select" />
      <OptionItem {...args} optionType="picture-select" />
      <OptionItem {...args} optionType="multiple-select" />
      <OptionItem {...args} optionType="picture-title" />
      <OptionItem {...args} optionType="picture-select-wuth-caption" />
      <OptionItem {...args} optionType="single-select-picture-title" />
      <OptionItem {...args} optionType="title-outline-button" />
      <OptionItem {...args} optionType="short-field-title" />
      <OptionItem {...args} optionType="option-picture-with-message" />
    </div>
  );
};
export const ColoredContentTableRow = MultipleTemplate.bind({});
ColoredContentTableRow.args = {
  ...Default.args,
  content: [
    {
      name: "name one",
      value: "",
      placeholder: "Placeholder One",
      checked: false,
      image: {},
      captionName: "caption name one",
      captionValue: "",
      captionPlaceholder: "Caption Placeholder One",
      shortFieldName_1: "short field one first",
      shortFieldName_2: "short field one second",
      shortFieldValue_1: "1",
      shortFieldValue_2: "2",
      optionName: "option a",
      optionPlaceholder: "Option A",
      optionValue: "",
      headerName: "Name of Header for Option A",
      headerValue: "",
      headerPlaceholder: "Header for Option A",
      messageName: "Name of Message for Option A",
      messagePlaceholder: "Message for Option A",
      messageValue: "",
    },
  ],
  withColor: {
    backgroundColor: "#8c9ea3",
    textColor: "#ffffff",
    accentColor: "#597387",
  },
};
ColoredContentTableRow.parameters = {
  docs: {
    description: {
      story: "Use to override the standard colors of the component.",
    },
    source: {
      code: `<OptionItem {...${JSON.stringify(
        ColoredContentTableRow.args,
        null,
        2
      )}}/>`,
    },
  },
};
//-------------------------------------------------------------
// Animated OptionItem
// -------------------------------------------------------------
export const AnimatedOptionItem = MultipleTemplate.bind({});
AnimatedOptionItem.args = {
  ...ColoredContentTableRow.args,
  withColor:{
    backgroundColor: "#ffab000d",
    textColor: "",
    accentColor: "",
  }
};
AnimatedOptionItem.parameters = {
  docs: {
    description: {
      story: "We can animate the appearance of OptionItem",
    },
    source: {
      code: `<OptionItem {...${JSON.stringify(
        AnimatedOptionItem.args,
        null,
        2
      )}}/>`,
    },
  },
};
