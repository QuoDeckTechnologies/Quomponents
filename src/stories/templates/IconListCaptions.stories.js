import React from "react";
import IconListCaptions from "../../components/Templates/IconListCaptions/IconListCaptions.react";

export default {
  title: "Design System/Templates/IconListCaptions/IconListCaptions",
  component: IconListCaptions,
  argTypes: {
    data: {},
    imageLibrary: [{}],
    slideId: 0,
    withColor: {
      table: {
        category: "with-Params",
        defaultValue: {
          slideHeaderTextColor: "",
          slideHeaderAccentColor: "",
          slideHeaderBackgroundColor: "",
          textBlockBackgroundColor: "",
          iconlistTrackColor: "",
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
    componentSubtitle: "Displays a IconListCaptions slide  with SlideHeader, clickableimages and textBlock as caption, Caption will change according to click on image",
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
    backgroundImage: {
      id: "background-image",
      extention: ""
    },
    cards: [
      {
        text: "First Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl.",
        image: {
          id: "HyLQNLtdp",
          extension: ".jpeg"
        }
      },
      {
        text: "Second Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl.",
        image: {
          id: "SKjOfKwWN",
          extension: ".jpeg"
        }
      },
      {
        text: " Third Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl.",
        image: {
          id: "h4EX9FXyK",
          extension: ".jpeg"
        }
      },
      {
        text: "Fourth Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl.",
        image: {
          id: "qsZ-6w6lh",
          extension: ".jpeg"
        }
      }
    ],
  },
  imageLibrary: [{
    image: "https://i.pinimg.com/564x/02/58/79/025879fc48f8d5a2a30e37ad1a847c11.jpg",
    id: "HyLQNLtdp",
  }, {
    image: "https://i.pinimg.com/564x/64/57/dc/6457dc8f063f284fe17e519dc28b5437.jpg",
    id: "SKjOfKwWN",
  }, {
    image: "https://i.pinimg.com/564x/9a/db/19/9adb19d50115e570142a7937a00550ae.jpg",
    id: "h4EX9FXyK",
  }, {
    image: "https://i.pinimg.com/564x/09/03/8c/09038c92e5e2422e369816d50b16cd3f.jpg",
    id: "qsZ-6w6lh",
  }, {
    id: "background-image",
    image: "https://i.pinimg.com/564x/09/03/8c/09038c92e5e2422e369816d50b16cd3f.jpg",
  },],
  slideId: 0,
  withColor: {
    slideHeaderTextColor: "#FFFFFF",
    slideHeaderAccentColor: "#AD2929",
    slideHeaderBackgroundColor: "#ad292980",
    textBlockBackgroundColor: "#ad292980",
    textBlockTextColor: "#fff",
    iconlistTrackColor: "#ff0000",
    backgroundColor: "#fff",
  },
  withAnimation: {
    animation: "zoom",
    duration: 0.5,
    delay: 0,
  },
  isHidden: false,
  isDisabled: false,
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
    image: {
      id: "header-image",
      extention: ""
    },
    backgroundImage: {
      id: "background-image",
      extention: ""
    },
    cards: [
      {
        text: "First Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl.",
        image: {
          id: "HyLQNLtdp",
          extension: ".jpeg"
        }
      },
      {
        text: "Second Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl.",
        image: {
          id: "SKjOfKwWN",
          extension: ".jpeg"
        }
      },
      {
        text: " Third Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl.",
        image: {
          id: "h4EX9FXyK",
          extension: ".jpeg"
        }
      },
      {
        text: "Fourth Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl.",
        image: {
          id: "qsZ-6w6lh",
          extension: ".jpeg"
        }
      },
    ],
  },
  imageLibrary: [{
    image: "https://i.pinimg.com/564x/02/58/79/025879fc48f8d5a2a30e37ad1a847c11.jpg",
    id: "HyLQNLtdp",
  }, {
    image: "https://i.pinimg.com/564x/64/57/dc/6457dc8f063f284fe17e519dc28b5437.jpg",
    id: "SKjOfKwWN",
  }, {
    image: "https://i.pinimg.com/564x/9a/db/19/9adb19d50115e570142a7937a00550ae.jpg",
    id: "h4EX9FXyK",
  }, {
    image: "https://i.pinimg.com/564x/09/03/8c/09038c92e5e2422e369816d50b16cd3f.jpg",
    id: "qsZ-6w6lh",
  }, {
    id: "background-image",
    image: "https://i.pinimg.com/564x/7e/bd/95/7ebd9590368fb4bef3bfd7292f0523bd.jpg",
  }, {
    id: "header-image",
    image: "https://i.pinimg.com/564x/64/57/dc/6457dc8f063f284fe17e519dc28b5437.jpg",
  },],
  slideId: 0,
  withColor: {
    slideHeaderTextColor: "#FFFFFF",
    slideHeaderAccentColor: "#AD2929",
    slideHeaderBackgroundColor: "#ad292980",
    textBlockBackgroundColor: "#ad292980",
    textBlockTextColor: "#fff",
    iconlistTrackColor: "#ff0000",
    backgroundColor: "#fff",
  },
  withAnimation: {
    animation: "zoom",
    duration: 0.5,
    delay: 0,
  },
  isHidden: false,
  isDisabled: false,
};
IconListCaptionsWithImage.parameters = {
  docs: {
    source: {
      code: `<IconListCaptions {...${JSON.stringify(IconListCaptionsWithImage.args, null, 2)}}/>`,
    },
  },
};