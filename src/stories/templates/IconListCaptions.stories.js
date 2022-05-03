import React from "react";
import IconListCaptions from "../../components/Templates/IconListCaptions/IconListCaptions.react";

export default {
  title: "Design System/Templates/IconListCaptions/IconListCaptions",
  component: IconListCaptions,
  argTypes: {
    data: {},
    imageLibrary: [{}],
    slideId: 0,
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
          slideHeaderTextColor: "",
          slideHeaderAccentColor: "",
          slideHeaderBackgroundColor: "",
          textBlockBackgroundColor: "",
          bulletBlockTextdColor: "",
          bulletBlockBackgroundColor: "",
          backgroundColor: "",
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
    componentSubtitle: "Displays a Captioned Bullet List with TextBlock, BulletBlock and a SlideHeader, we can switch the slideHeader with header image by removing the title and subtitle from prop, and by giving the image link as prop we can see an image. If the title, subtitle, and image are provided together, only the slideHeader is visible",
    a11y: { disable: true },
    docs: {
      iframeHeight: 400,
    },
  },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <IconListCaptions {...args} />;
export const Default = Template.bind({});
Default.args = {
  data: {
    title: "Neque porro quisquam est qui dolorem",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl.",
    backgroundImage: {
      id: "background-image",
      extention: ""
    },
    iconListImages: [
      {
        id: "image-1",
        extention: "",
      }, {
        id: "image-2",
        extention: "",
      }, {
        id: "image-3",
        extention: "",
      }, {
        id: "image-4",
        extention: "",
      },
    ]
  },
  imageLibrary: [{
    id: "image-1",
    image: "https://i.pinimg.com/564x/02/58/79/025879fc48f8d5a2a30e37ad1a847c11.jpg",
  }, {
    id: "image-2",
    image: "https://i.pinimg.com/564x/64/57/dc/6457dc8f063f284fe17e519dc28b5437.jpg",
  }, {
    id: "image-3",
    image: "https://i.pinimg.com/564x/9a/db/19/9adb19d50115e570142a7937a00550ae.jpg",
  }, {
    id: "image-4",
    image: "https://i.pinimg.com/564x/09/03/8c/09038c92e5e2422e369816d50b16cd3f.jpg",
  }, {
    id: "background-image",
    image: "https://i.pinimg.com/564x/09/03/8c/09038c92e5e2422e369816d50b16cd3f.jpg",
  },],
  slideId: 0,
  asVariant: "warning",
  withColor: {
    slideHeaderTextColor: "#FFFFFF",
    slideHeaderAccentColor: "#AD2929",
    slideHeaderBackgroundColor: "#ad292980",
    textBlockBackgroundColor: "#ad292980",
    textBlockTextColor: "#fff",
    backgroundColor: "#fff",
  },
  withAnimation: {
    animation: "zoom",
    duration: 0.5,
    delay: 0,
  },
  isHidden: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `<IconListCaptions {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// IconListCaptionsWithImage
// -------------------------------------------------------------
export const IconListCaptionsWithImage = Template.bind({});
IconListCaptionsWithImage.args = {
  data: {
    title: "Neque porro quisquam est qui dolorem",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl.",
    image: {
      id: "header-image",
      extention: ""
    },
    backgroundImage: {
      id: "background-image",
      extention: ""
    },
    iconListImages: [
      {
        id: "image-1",
        extention: "",
      }, {
        id: "image-2",
        extention: "",
      }, {
        id: "image-3",
        extention: "",
      }, {
        id: "image-4",
        extention: "",
      },
    ]
  },
  imageLibrary: [{
    id: "image-1",
    image: "https://i.pinimg.com/564x/02/58/79/025879fc48f8d5a2a30e37ad1a847c11.jpg",
  }, {
    id: "image-2",
    image: "https://i.pinimg.com/564x/64/57/dc/6457dc8f063f284fe17e519dc28b5437.jpg",
  }, {
    id: "image-3",
    image: "https://i.pinimg.com/564x/9a/db/19/9adb19d50115e570142a7937a00550ae.jpg",
  }, {
    id: "image-4",
    image: "https://i.pinimg.com/564x/09/03/8c/09038c92e5e2422e369816d50b16cd3f.jpg",
  }, {
    id: "background-image",
    image: "https://i.pinimg.com/564x/7e/bd/95/7ebd9590368fb4bef3bfd7292f0523bd.jpg",
  }, {
    id: "header-image",
    image: "https://i.pinimg.com/564x/64/57/dc/6457dc8f063f284fe17e519dc28b5437.jpg",
  },],
  slideId: 0,
  asVariant: "warning",
  withColor: {
    slideHeaderTextColor: "#FFFFFF",
    slideHeaderAccentColor: "#AD2929",
    slideHeaderBackgroundColor: "#ad292980",
    textBlockBackgroundColor: "#ad292980",
    textBlockTextColor: "#fff",
    backgroundColor: "#fff",
  },
  withAnimation: {
    animation: "zoom",
    duration: 0.5,
    delay: 0,
  },
  isHidden: false,
};
IconListCaptionsWithImage.parameters = {
  docs: {
    source: {
      code: `<IconListCaptions {...${JSON.stringify(IconListCaptionsWithImage.args, null, 2)}}/>`,
    },
  },
};