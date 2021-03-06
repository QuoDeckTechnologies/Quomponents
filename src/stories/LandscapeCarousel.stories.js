import React from "react";
import LandscapeCarousel from "../components/Carousel/LandscapeCarousel/LandscapeCarousel.react";

const dictionary = JSON.stringify({
  hi: {
    bannerCard: { header: "", content: "" },
    ribbon: {
      new: "नया",
      restricted: "प्रतिबंधित",
      premium: "अधिमूल्य",
      free: "नि: शुल्क",
    },
  },
});
export default {
  title: "Design System/Carousel/LandscapeCarousel",
  component: LandscapeCarousel,
  argTypes: {
    content: [
      {
        id: "",
        image: "",
        tag: "",
        selected: "",
        header: "",
        props: {},
      },
    ],
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
  onClick: {
    table: {
      category: "Events",
      defaultValue: null,
    },
  },
  parameters: {
    componentSubheader: "Displays a Landscape carousel.",
    a11y: { disable: true },
    docs: {
      iframeHeight: 600,
    },
  },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <LandscapeCarousel {...args} />;
export const Default = Template.bind({});
Default.args = {
  content: [
    {
      id: "first-slide",
      image:
        "https://i.pinimg.com/564x/a7/97/60/a79760adad76cba1c147450ec25b6225.jpg",
      header: "Balloon Burst",
      tag: "new",
      selected: true,
    },
    {
      id: "second-slide",
      image:
        "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
      tag: "premium",
      selected: false,
      header: "Cityscape",
    },
    {
      id: "third-slide",
      image:
        "https://i.pinimg.com/564x/7e/bd/95/7ebd9590368fb4bef3bfd7292f0523bd.jpg",
      tag: "restricted",
      selected: false,
      header: "GhostBuster",
    },
  ],
  withAnimation: {
    animation: "slideRight",
    duration: 0.5,
    delay: 0,
  },
  withTranslation: {
    lang: "en",
    tgt: "bannerCard",
    dictionary: dictionary,
  },
};
Default.parameters = {
  docs: {
    source: {
      code: `<LandscapeCarousel {...${JSON.stringify(
        Default.args,
        null,
        2
      )}}/>`,
    },
  },
};

// -------------------------------------------------------------
// TranslatedLandscapeCarousel
// -------------------------------------------------------------
export const TranslatedLandscapeCarousel = Template.bind({});
TranslatedLandscapeCarousel.args = {
  content: [
    {
      id: "first-slide",
      image:
        "https://i.pinimg.com/564x/a7/97/60/a79760adad76cba1c147450ec25b6225.jpg",
      header: "Balloon Burst",
      tag: "new",
      selected: true,
    },
    {
      id: "second-slide",
      image:
        "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
      tag: "premium",
      selected: false,
      header: "Cityscape",
    },
    {
      id: "third-slide",
      image:
        "https://i.pinimg.com/564x/7e/bd/95/7ebd9590368fb4bef3bfd7292f0523bd.jpg",
      tag: "restricted",
      selected: false,
      header: "GhostBuster",
    },
  ],
  withAnimation: {
    animation: "slideRight",
    duration: 0.5,
    delay: 0,
  },
  withTranslation: {
    lang: "hi",
    tgt: "bannerCard",
    dictionary: dictionary,
  },
};
TranslatedLandscapeCarousel.parameters = {
  docs: {
    source: {
      code: `<LandscapeCarousel {...${JSON.stringify(
        TranslatedLandscapeCarousel.args,
        null,
        2
      )}}/>`,
    },
  },
};

// -------------------------------------------------------------
// LandscapeCarouselWithoutBox
// -------------------------------------------------------------
export const LandscapeCarouselWithoutBox = Template.bind({});
LandscapeCarouselWithoutBox.args = {
  content: [
    {
      id: "first-slide",
      image:
        "https://i.pinimg.com/564x/a7/97/60/a79760adad76cba1c147450ec25b6225.jpg",
      header: "Balloon Burst",
      tag: "new",
      selected: true,
    },
    {
      id: "second-slide",
      image:
        "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
      tag: "premium",
      selected: false,
      header: "Cityscape",
    },
    {
      id: "third-slide",
      image:
        "https://i.pinimg.com/564x/7e/bd/95/7ebd9590368fb4bef3bfd7292f0523bd.jpg",
      tag: "restricted",
      selected: false,
      header: "GhostBuster",
    },
  ],
  withTranslation: {
    lang: "en",
    tgt: "bannerCard",
    dictionary: dictionary,
  },
  withAnimation: {
    animation: "fade",
    duration: 0.5,
    delay: 0,
  },
};
LandscapeCarouselWithoutBox.parameters = {
  docs: {
    description: {
      story: "We can see the landscape Carousel without any header box",
    },
    source: {
      code: `<LandscapeCarousel {...${JSON.stringify(
        LandscapeCarouselWithoutBox.args,
        null,
        2
      )}}/>`,
    },
  },
};

// -------------------------------------------------------------
// LandscapeCarouselWithoutTag
// -------------------------------------------------------------
export const LandscapeCarouselWithoutTag = Template.bind({});
LandscapeCarouselWithoutTag.args = {
  content: [
    {
      id: "first-slide",
      image:
        " https://i.pinimg.com/564x/fc/cd/9f/fccd9ff066d6531ad19c042560cf78a0.jpg",
      header: "The Negotiation Room",
    },
    {
      id: "second-slide",
      image:
        "https://i.pinimg.com/564x/68/ed/88/68ed881d5ff0dbe232ff8d4d2e186a99.jpg",
      header: "The Negotiation Room",
    },
    {
      id: "third-slide",
      image:
        "https://i.pinimg.com/564x/64/0b/57/640b5709e0cf312978a3912e736110e2.jpg",
      header: "What is Negotiation Room?",
    },
  ],
  withTranslation: {
    lang: "en",
    tgt: "bannerCard",
    dictionary: dictionary,
  },
  withAnimation: {
    animation: "fade",
    duration: 0.5,
    delay: 0,
  },
};
LandscapeCarouselWithoutTag.parameters = {
  docs: {
    description: {
      story: "We can see the Landscape Carousel without any Tag",
    },
    source: {
      code: `<LandscapeCarousel {...${JSON.stringify(
        LandscapeCarouselWithoutTag.args,
        null,
        2
      )}}/>`,
    },
  },
};
export const AnimatedLandscapeCarousel = Template.bind({});
AnimatedLandscapeCarousel.args = {
  ...Default.args,
  withAnimation: {
    animation: "slideRight",
    duration: 0.5,
    delay: 0,
  },
  withTranslation: {
    lang: "en",
    tgt: "bannerCard",
    dictionary: dictionary,
  },
};
AnimatedLandscapeCarousel.parameters = {
  docs: {
    description: {
      story:
        "Use to animate the entry of the LandscapeCarousel with the standard animation options and set duration and delay. Can be used to make multiple components enter the screen in a queue.",
    },
    source: {
      code: `<AnimatedLandscapeCarousel {...${JSON.stringify(
        AnimatedLandscapeCarousel.args,
        null,
        2
      )}}/>`,
    },
  },
};

// -------------------------------------------------------------
// MultipleLandscapeCarousels
// -------------------------------------------------------------
const MultipleLandscapeCarouselsTemplate = (args) => {
  const baseObj = {
    ...Object.assign({}, Default.args, args, {
      content: [
        {
          id: "first-slide",
          image:
            "https://i.pinimg.com/564x/a7/97/60/a79760adad76cba1c147450ec25b6225.jpg",
          header: "Balloon Burst",
          tag: "new",
          selected: true,
        },
        {
          id: "second-slide",
          image:
            "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
          tag: "premium",
          selected: false,
          header: "Cityscape",
        },
        {
          id: "third-slide",
          image:
            "https://i.pinimg.com/564x/7e/bd/95/7ebd9590368fb4bef3bfd7292f0523bd.jpg",
          tag: "restricted",
          selected: false,
          header: "GhostBuster",
        },
      ],
      withTranslation: {
        lang: "en",
        tgt: "bannerCard",
        dictionary: dictionary,
      },
    }),
  };
  return (
    <div>
      <LandscapeCarousel
        {...Object.assign({}, baseObj, {
          content: [
            {
              id: "first-slide",
              image:
                "https://i.pinimg.com/564x/a7/97/60/a79760adad76cba1c147450ec25b6225.jpg",
              header: "Balloon Burst",
              tag: "new",
              selected: true,
            },
            {
              id: "second-slide",
              image:
                "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
              tag: "premium",
              selected: false,
              header: "Cityscape",
            },
            {
              id: "third-slide",
              image:
                "https://i.pinimg.com/564x/7e/bd/95/7ebd9590368fb4bef3bfd7292f0523bd.jpg",
              tag: "restricted",
              selected: false,
              header: "GhostBuster",
            },
          ],
        })}
      />
      <LandscapeCarousel
        {...Object.assign({}, baseObj, {
          content: [
            {
              id: "first-slide",
              image:
                "https://i.pinimg.com/564x/a7/97/60/a79760adad76cba1c147450ec25b6225.jpg",
              header: "Balloon Burst",
              tag: "new",
              selected: true,
            },
            {
              id: "second-slide",
              image:
                "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
              tag: "premium",
              selected: false,
              header: "Cityscape",
            },
            {
              id: "third-slide",
              image:
                "https://i.pinimg.com/564x/7e/bd/95/7ebd9590368fb4bef3bfd7292f0523bd.jpg",
              tag: "restricted",
              selected: false,
              header: "GhostBuster",
            },
          ],
        })}
      />
      <LandscapeCarousel
        {...Object.assign({}, baseObj, {
          content: [
            {
              id: "first-slide",
              image:
                "https://i.pinimg.com/564x/a7/97/60/a79760adad76cba1c147450ec25b6225.jpg",
              tag: "new",
            },
            {
              id: "second-slide",
              image:
                "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
              tag: "premium",
            },
            {
              id: "third-slide",
              image:
                "https://i.pinimg.com/564x/7e/bd/95/7ebd9590368fb4bef3bfd7292f0523bd.jpg",
              tag: "restricted",
            },
          ],
        })}
      />
    </div>
  );
};
export const MultipleLandscapeCarousels =
  MultipleLandscapeCarouselsTemplate.bind({});
MultipleLandscapeCarousels.parameters = {
  docs: {
    description: {
      story: "3 variants with or without the selected slide, tag or content",
    },
  },
};
