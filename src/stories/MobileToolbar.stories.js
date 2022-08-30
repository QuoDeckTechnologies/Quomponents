import React from "react";
import MobileToolbar from "../components/MobileToolbar/MobileToolbar.react";
const dictionary = JSON.stringify({
  hi: {
    mobileToolbar: {
      title: "संपादन मोड",
      content: [
        { label: "पाठ्यक्रम" },
        { label: "नगेट्स" },
        { label: "परीक्षण" },
        { label: "प्रतियोगिता" },
        { label: "संदेश" },
      ],
    },
  },
});
export default {
  title: "Design System/MobileToolbar",
  component: MobileToolbar,
  argTypes: {
    title: "Edit Mode",
    content: [
      {
        icon: "",
        label: "label1",
        isActive: false,
        link: "",
      },
    ],
    asEmphasis: {
      control: "select",
      options: ["default", "editing"],
      table: {
        category: "as-Flags",
      },
    },
    asVariant: {
      control: "select",
      options: ["primary", "secondary", "success", "warning", "error"],
      table: {
        category: "as-Flags",
      },
    },
    withColor: {
      table: {
        category: "with-Params",
        defaultValue: {
          textColor: "",
          backgroundColor: "",
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
    onClick: {
      table: {
        category: "Events",
        defaultValue: null,
      },
    },
  },
  decorators: [(story) => <div style={{}}>{story()}</div>],
  parameters: {
    componentSubtitle: "Default MobileToolbar for general purpose use",
    a11y: { disable: true },
    docs: { iframeHeight: 150 },
  },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <MobileToolbar {...args} />;
export const Default = Template.bind({});
Default.args = {
  title: "Edit Mode",
  content: [
    {
      icon: "fa fa-receipt",
      label: "Courses",
      format: "caption",
      isActive: false,
      link: "https://quodeck.com/",
    },
    {
      icon: "fa fa-crown",
      label: "Nuggets",
      format: "caption",
      isActive: false,
      link: "https://www.google.com/",
    },
    {
      icon: "fa fa-file",
      label: "Test",
      format: "caption",
      isActive: false,
      link: "https://github.com/",
    },
    {
      icon: "fa fa-trophy",
      label: "Contest",
      format: "caption",
      isActive: false,
      link: "https://www.youtube.com/",
    },
    {
      icon: "fa fa-envelope-open-text",
      label: "Post",
      format: "caption",
      isActive: false,
      link: "https://www.whatsapp.com/",
    },
  ],
  asEmphasis: "default",
  asVariant: "primary",
  withColor: {
    textColor: "#ffff00",
    backgroundColor: "#121212",
    hoverTextColor: "#ff30ff",
  },
  withAnimation: {
    animation: "collapse",
    duration: 0.5,
    delay: 0,
  },
  withTranslation: {
    lang: "en",
    tgt: "mobileToolbar",
    dictionary: dictionary,
  },
  isHidden: false,
  isDisabled: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<MobileToolbar
      title="Edit Mode"
      content={[
        {
          icon: "fa fa-receipt",
          label: "Courses",
          format: "caption",
          isActive: false,
          link: "https://quodeck.com/",
        },
        {
          icon: "fa fa-crown",
          label: "Nuggets",
          format: "caption",
          isActive: false,
          link: "https://www.google.com/",
        },
        {
          icon: "fa fa-file",
          label: "Test",
          format: "caption",
          isActive: false,
          link: "https://github.com/",
        },
        {
          icon: "fa fa-trophy",
          label: "Contest",
          format: "caption",
          isActive: false,
          link: "https://www.youtube.com/",
        },
        {
          icon: "fa fa-envelope-open-text",
          label: "Post",
          format: "caption",
          isActive: false,
          link: "https://www.whatsapp.com/",
        },
      ]}
      asEmphasis="default"
      asVariant="primary"
      withColor={{
        textColor: "",
        backgroundColor: "",
        hoverTextColor: "",
      }}
      withAnimation={{
        animation: "collapse",
        duration: 0.5,
        delay: 0,
      }}
      isHidden={false}
      isDisabled={false}
    />`,
    },
  },
};

//-------------------------------------------------------------
// Colored MobileToolbar
// -------------------------------------------------------------
export const ColoredToolbar = Template.bind({});
ColoredToolbar.args = {
  ...Default.args,
  withColor: {
    backgroundColor: "#666666",
    textColor: "#EB6146",
    hoverTextColor: "#EB6146",
  },
};
ColoredToolbar.parameters = {
  docs: {
    description: {
      story: "Use to override the standard colors of the component.",
    },
    source: {
      code: `<MobileToolbar
      title="Edit Mode"
      content={[
        {
          icon: "fa fa-receipt",
          label: "Courses",
          format: "caption",
          isActive: false,
          link: "https://quodeck.com/",
        },
        {
          icon: "fa fa-crown",
          label: "Nuggets",
          format: "caption",
          isActive: false,
          link: "https://www.google.com/",
        },
        {
          icon: "fa fa-file",
          label: "Test",
          format: "caption",
          isActive: false,
          link: "https://github.com/",
        },
        {
          icon: "fa fa-trophy",
          label: "Contest",
          format: "caption",
          isActive: false,
          link: "https://www.youtube.com/",
        },
        {
          icon: "fa fa-envelope-open-text",
          label: "Post",
          format: "caption",
          isActive: false,
          link: "https://www.whatsapp.com/",
        },
      ]}
      asEmphasis="default"
      asVariant="primary"
      withColor={{
        backgroundColor: "#666666",
        textColor: "#EB6146",
        hoverTextColor: "#EB6146",
      }}
      withAnimation={{
        animation: "collapse",
        duration: 0.5,
        delay: 0,
      }}
      isHidden={false}
      isDisabled={false}
    />`,
    },
  },
};

//-------------------------------------------------------------
// Animated MobileToolbar
// -------------------------------------------------------------
export const AnimatedToolbar = Template.bind({});
AnimatedToolbar.args = {
  ...Default.args,
  withAnimation: {
    animation: "slideDown",
    duration: 1,
    delay: 0,
  },
};
AnimatedToolbar.parameters = {
  docs: {
    description: {
      story: "We can animate the appearance of MobileToolbar",
    },
    source: {
      code: ` <MobileToolbar
      title="Edit Mode"
      content={[
        {
          icon: "fa fa-receipt",
          label: "Courses",
          format: "caption",
          isActive: false,
          link: "https://quodeck.com/",
        },
        {
          icon: "fa fa-crown",
          label: "Nuggets",
          format: "caption",
          isActive: false,
          link: "https://www.google.com/",
        },
        {
          icon: "fa fa-file",
          label: "Test",
          format: "caption",
          isActive: false,
          link: "https://github.com/",
        },
        {
          icon: "fa fa-trophy",
          label: "Contest",
          format: "caption",
          isActive: false,
          link: "https://www.youtube.com/",
        },
        {
          icon: "fa fa-envelope-open-text",
          label: "Post",
          format: "caption",
          isActive: false,
          link: "https://www.whatsapp.com/",
        },
      ]}
      asEmphasis="default"
      asVariant="primary"
      withColor={{
        textColor: "",
        backgroundColor: "",
        hoverTextColor: "",
      }}
      withAnimation={{
        animation: "slideDown",
        duration: 1,
        delay: 0,
      }}
      isHidden={false}
      isDisabled={false}
    />`,
    },
  },
};

// -------------------------------------------------------------
// WithoutLabelMobileToolbar
// -------------------------------------------------------------
export const WithoutLabelMobileToolbar = Template.bind({});
WithoutLabelMobileToolbar.args = {
  ...Default.args,
  label: "",
  content: [
    {
      icon: "fa fa-receipt",
      label: "",
      format: "label",
      isActive: false,
      link: "https://quodeck.com/",
    },
    {
      icon: "fa fa-crown",
      label: "",
      format: "label",
      isActive: false,
      link: "https://www.google.com/",
    },
    {
      icon: "fa fa-file",
      label: "",
      format: "label",
      isActive: false,
      link: "https://github.com/",
    },
    {
      icon: "fa fa-trophy",
      label: "",
      format: "label",
      isActive: false,
      link: "https://www.youtube.com/",
    },
    {
      icon: "fa fa-envelope-open-text",
      label: "",
      format: "label",
      isActive: false,
      link: "https://www.whatsapp.com/",
    },
  ],
  asVariant: "warning",
};
WithoutLabelMobileToolbar.parameters = {
  docs: {
    description: {
      story:
        "Show MobileToolbar component without caption/label with asVarient:'warning'",
    },
    source: {
      code: `<MobileToolbar
      title="Edit Mode"
      content={[
        {
          icon: "fa fa-receipt",
          label: "",
          format: "label",
          isActive: false,
          link: "https://quodeck.com/",
        },
        {
          icon: "fa fa-crown",
          label: "",
          format: "label",
          isActive: false,
          link: "https://www.google.com/",
        },
        {
          icon: "fa fa-file",
          label: "",
          format: "label",
          isActive: false,
          link: "https://github.com/",
        },
        {
          icon: "fa fa-trophy",
          label: "",
          format: "label",
          isActive: false,
          link: "https://www.youtube.com/",
        },
        {
          icon: "fa fa-envelope-open-text",
          label: "Post",
          format: "label",
          isActive: false,
          link: "https://www.whatsapp.com/",
        },
      ]}
      asEmphasis="default"
      asVariant="primary"
      withColor={{
        textColor: "",
        backgroundColor: "",
        hoverTextColor: "",
      }}
      withAnimation={{
        animation: "collapse",
        duration: 0.5,
        delay: 0,
      }}
      isHidden={false}
      isDisabled={false}
    />`,
    },
  },
};

// -------------------------------------------------------------
// IconsWithPopoverFormatMobilteToolbar
// -------------------------------------------------------------
export const IconsWithPopoverFormatMobilteToolbar = Template.bind({});
IconsWithPopoverFormatMobilteToolbar.args = {
  ...Default.args,
  content: [
    {
      icon: "fa fa-receipt",
      label: "Courses",
      format: "popover",
      isActive: false,
      link: "https://quodeck.com/",
    },
    {
      icon: "fa fa-crown",
      label: "Nuggets",
      format: "popover",
      isActive: false,
      link: "https://www.google.com/",
    },
    {
      icon: "fa fa-file",
      label: "Test",
      format: "popover",
      isActive: false,
      link: "https://github.com/",
    },
    {
      icon: "fa fa-trophy",
      label: "Contest",
      format: "popover",
      isActive: false,
      link: "https://www.youtube.com/",
    },
    {
      icon: "fa fa-envelope-open-text",
      label: "Post",
      format: "popover",
      isActive: false,
      link: "https://www.whatsapp.com/",
    },
  ],
  asEmphasis: "default",
};
IconsWithPopoverFormatMobilteToolbar.parameters = {
  docs: {
    source: {
      code: ` <MobileToolbar
      title="Edit Mode"
      content={[
        {
          icon: "fa fa-receipt",
          label: "Courses",
          format: "popover",
          isActive: false,
          link: "https://quodeck.com/",
        },
        {
          icon: "fa fa-crown",
          label: "Nuggets",
          format: "popover",
          isActive: false,
          link: "https://www.google.com/",
        },
        {
          icon: "fa fa-file",
          label: "Test",
          format: "popover",
          isActive: false,
          link: "https://github.com/",
        },
        {
          icon: "fa fa-trophy",
          label: "Contest",
          format: "popover",
          isActive: false,
          link: "https://www.youtube.com/",
        },
        {
          icon: "fa fa-envelope-open-text",
          label: "Post",
          format: "popover",
          isActive: false,
          link: "https://www.whatsapp.com/",
        },
      ]}
      asEmphasis="default"
      asVariant="primary"
      withColor={{
        textColor: "",
        backgroundColor: "",
        hoverTextColor: "",
      }}
      withAnimation={{
        animation: "collapse",
        duration: 0.5,
        delay: 0,
      }}
      isHidden={false}
      isDisabled={false}
    />`,
    },
  },
};

// -------------------------------------------------------------
// IconsWithCaptionMobilteToolbar
// -------------------------------------------------------------
export const IconsWithCaptionMobilteToolbar = Template.bind({});
IconsWithCaptionMobilteToolbar.args = {
  ...Default.args,
  content: [
    {
      icon: "fa fa-receipt",
      label: "Courses",
      format: "label",
      isActive: false,
      link: "https://quodeck.com/",
    },
    {
      icon: "fa fa-crown",
      label: "Nuggets",
      format: "label",
      isActive: false,
      link: "https://www.google.com/",
    },
    {
      icon: "fa fa-file",
      label: "Test",
      format: "label",
      isActive: false,
      link: "https://github.com/",
    },
    {
      icon: "fa fa-trophy",
      label: "Contest",
      format: "label",
      isActive: false,
      link: "https://www.youtube.com/",
    },
    {
      icon: "fa fa-envelope-open-text",
      label: "Post",
      format: "label",
      isActive: false,
      link: "https://www.whatsapp.com/",
    },
  ],
  asEmphasis: "default",
};
IconsWithCaptionMobilteToolbar.parameters = {
  docs: {
    source: {
      code: `<MobileToolbar
      title="Edit Mode"
      content={[
        {
          icon: "fa fa-receipt",
          label: "Courses",
          format: "label",
          isActive: false,
          link: "https://quodeck.com/",
        },
        {
          icon: "fa fa-crown",
          label: "Nuggets",
          format: "label",
          isActive: false,
          link: "https://www.google.com/",
        },
        {
          icon: "fa fa-file",
          label: "Test",
          format: "label",
          isActive: false,
          link: "https://github.com/",
        },
        {
          icon: "fa fa-trophy",
          label: "Contest",
          format: "label",
          isActive: false,
          link: "https://www.youtube.com/",
        },
        {
          icon: "fa fa-envelope-open-text",
          label: "Post",
          format: "label",
          isActive: false,
          link: "https://www.whatsapp.com/",
        },
      ]}
      asEmphasis="default"
      asVariant="primary"
      withColor={{
        textColor: "",
        backgroundColor: "",
        hoverTextColor: "",
      }}
      withAnimation={{
        animation: "collapse",
        duration: 0.5,
        delay: 0,
      }}
      isHidden={false}
      isDisabled={false}
    />`,
    },
  },
};

// -------------------------------------------------------------
// MobileToolbarWithAllVariants
// -------------------------------------------------------------
const MobileToolbarWithAllVariantsTemplate = (args) => {
  const baseObj = {
    ...Object.assign({}, Default.args, args, {}),
  };
  return (
    <div>
      <MobileToolbar
        {...Object.assign({}, baseObj, {
          asVariant: "primary",
          asEmphasis: "default",
        })}
      />
      <MobileToolbar
        {...Object.assign({}, baseObj, {
          asVariant: "secondary",
          asEmphasis: "editing",
        })}
      />
    </div>
  );
};
export const MobileToolbarWithAllVariants =
  MobileToolbarWithAllVariantsTemplate.bind({});
MobileToolbarWithAllVariants.parameters = {
  docs: {
    description: {
      story: "all variants are supported in MobileToolbar.",
    },
    source: {
      code: `<MobileToolbar
      title="Edit Mode"
      content={[
        {
          icon: "fa fa-receipt",
          label: "Courses",
          format: "caption",
          isActive: false,
          link: "https://quodeck.com/",
        },
        {
          icon: "fa fa-crown",
          label: "Nuggets",
          format: "caption",
          isActive: false,
          link: "https://www.google.com/",
        },
        {
          icon: "fa fa-file",
          label: "Test",
          format: "caption",
          isActive: false,
          link: "https://github.com/",
        },
        {
          icon: "fa fa-trophy",
          label: "Contest",
          format: "caption",
          isActive: false,
          link: "https://www.youtube.com/",
        },
        {
          icon: "fa fa-envelope-open-text",
          label: "Post",
          format: "caption",
          isActive: false,
          link: "https://www.whatsapp.com/",
        },
      ]}
      asEmphasis="default"
      asVariant="primary"
      withColor={{
        textColor: "",
        backgroundColor: "",
        hoverTextColor: "",
      }}
      withAnimation={{
        animation: "collapse",
        duration: 0.5,
        delay: 0,
      }}
      isHidden={false}
      isDisabled={false}
    />`,
    },
  },
};

// -------------------------------------------------------------
// TranslatedMobileToolbar
// -------------------------------------------------------------
export const TranslatedMobileToolbar = Template.bind({});
TranslatedMobileToolbar.args = {
  ...Default.args,
  withTranslation: {
    lang: "hi",
    tgt: "mobileToolbar",
    dictionary: dictionary,
  },
};
TranslatedMobileToolbar.parameters = {
  docs: {
    description: {
      story:
        "Use to change the language that the text appears in MobileToolbar. ",
    },
    source: {
      code: `<MobileToolbar title= "Edit Mode"
      content={[
          {
              icon: "fa fa-receipt",
              label: "Courses", format: "caption",
              isActive: false,
              link: "https://quodeck.com/",
          },
          {
              icon: "fa fa-crown",
              label: "Nuggets",
              format: "caption",
              isActive: false,
              link: "https://www.google.com/",
          },
          {
              icon: "fa fa-file",
              label: "Test",
              format: "caption",
              isActive: false,
              link: "https://github.com/",
          },
          {
              icon: "fa fa-trophy",
              label: "Contest",
              format: "caption",
              isActive: false,
              link: "https://www.youtube.com/",
          },
          {
              icon: "fa fa-envelope-open-text",
              label: "Post",
              format: "caption",
              isActive: false,
              link: "https://www.whatsapp.com/",
          },
      ]}
      asEmphasis= "default"
      asVariant= "primary"
      withColor={{
          textColor: "",
          backgroundColor: "",
          hoverTextColor: "",
      }}
      withAnimation= {{
          animation: "collapse",
          duration: 0.5,
          delay: 0,
      }}
      isHidden= {false}
      isDisabled= {false}
      />`,
    },
  },
};
