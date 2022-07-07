import React from "react";
import PortraitCarousel from "../components/Carousel/PortraitCarousel/PortraitCarousel.react";
const dictionary = JSON.stringify({
    hi: {
        bannerCard: { header: "", content: "" },
        ribbon: {
            new: "नया",
            restricted: "प्रतिबंधित",
            premium: "अधिमूल्य",
            free: "नि: शुल्क"
        }
    },
});
export default {
  title: "Design System/Carousel/PortraitCarousel",
  component: PortraitCarousel,
  argTypes: {
    content: [
      {
        image: "",
        tag: "",
        checked: "",
        header: "",
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
  onClick: {
    table: {
      category: "Events",
      defaultValue: null,
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
    componentSubheader: "Displays a portrait carousel.",
    a11y: { disable: true },
    docs: {
      iframeHeight: 600,
    },
  },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <PortraitCarousel {...args} />;
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
        image: "https://i.pinimg.com/564x/7e/bd/95/7ebd9590368fb4bef3bfd7292f0523bd.jpg",
        tag: "restricted",
        selected: false,
        header: "GhostBuster",
    }],
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
            code: `<PortraitCarousel {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
// -------------------------------------------------------------
// TranslatedPortraitCarousel
// -------------------------------------------------------------
export const TranslatedPortraitCarousel = Template.bind({});
TranslatedPortraitCarousel.args = {
    content: [{
        image: "https://i.pinimg.com/564x/a7/97/60/a79760adad76cba1c147450ec25b6225.jpg",
        header: "Balloon Burst",
        tag: "new",
        selected: true,
    },
    {
        image: "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
        tag: "premium",
        selected: true,
        header: "Cityscape",
    },
    {
        image: "https://i.pinimg.com/564x/7e/bd/95/7ebd9590368fb4bef3bfd7292f0523bd.jpg",
        tag: "restricted",
        selected: false,
        header: "GhostBuster",
    }],
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
TranslatedPortraitCarousel.parameters = {
    docs: {
        source: {
            code: `<PortraitCarousel {...${JSON.stringify(TranslatedPortraitCarousel.args, null, 2)}}/>`,
        },
    },
};
// -------------------------------------------------------------
// PortraitCarouselWithoutBox
// -------------------------------------------------------------
export const PortraitCarouselWithoutBox = Template.bind({});
PortraitCarouselWithoutBox.args = {
    content: [{
        image: "https://i.pinimg.com/564x/fc/cd/9f/fccd9ff066d6531ad19c042560cf78a0.jpg",
        tag: "new",
    },
    {
      id: "third-slide",
      image:
        "https://i.pinimg.com/564x/7e/bd/95/7ebd9590368fb4bef3bfd7292f0523bd.jpg",
      tag: "restricted",
      selected: false,
      header: "GhostBuster",
    },
    {
        image: "https://i.pinimg.com/564x/64/0b/57/640b5709e0cf312978a3912e736110e2.jpg",
        tag: "restricted",
    }],
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
      code: `<PortraitCarousel {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
// -------------------------------------------------------------
// PortraitCarouselWithoutTag
// -------------------------------------------------------------
export const PortraitCarouselWithoutTag = Template.bind({});
PortraitCarouselWithoutTag.args = {
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
        image: "https://i.pinimg.com/564x/64/0b/57/640b5709e0cf312978a3912e736110e2.jpg",
        header: "What is Negotiation Room?",
    }],
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
PortraitCarouselWithoutTag.parameters = {
  docs: {
    description: {
      story: "We can see the Portrait Carousel without any Tag",
    },
    source: {
      code: `<PortraitCarousel {...${JSON.stringify(
        PortraitCarouselWithoutTag.args,
        null,
        2
      )}}/>`,
    },
  },
};

export const AnimatedPortraitCarousel = Template.bind({});
AnimatedPortraitCarousel.args = {
  ...Default.args,
  withAnimation: {
    animation: "slideRight",
    duration: 0.5,
    delay: 0,
  },
};
AnimatedPortraitCarousel.parameters = {
  docs: {
    description: {
      story:
        "Use to animate the entry of the PortraitCarousel with the standard animation options and set duration and delay. Can be used to make multiple components enter the screen in a queue.",
    },
    source: {
      code: `<AnimatedPortraitCarousel {...${JSON.stringify(
        AnimatedPortraitCarousel.args,
        null,
        2
      )}}/>`,
    },
  },
};

// -------------------------------------------------------------
// MultiplePortraitCarousels
// -------------------------------------------------------------
const MultiplePortraitCarouselsTemplate = (args) => {
    const baseObj = {
        ...Object.assign({}, Default.args, args, {
            content: [{
                image: "https://i.pinimg.com/564x/a7/97/60/a79760adad76cba1c147450ec25b6225.jpg",
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
                image: "https://i.pinimg.com/564x/7e/bd/95/7ebd9590368fb4bef3bfd7292f0523bd.jpg",
                tag: "restricted",
                selected: false,
                header: "GhostBuster",
            }],
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
        }),
    };
    return (
        <div>
            <PortraitCarousel
                {...Object.assign({}, baseObj, {
                    content: [{
                        image: "https://i.pinimg.com/564x/a7/97/60/a79760adad76cba1c147450ec25b6225.jpg",
                        header: "Balloon Burst",
                        tag: "new",
                        selected: true,

                    },
                    {
                        image: "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
                        tag: "premium",
                        selected: true,
                        header: "Cityscape",
                    },
                    {
                        image: "https://i.pinimg.com/564x/7e/bd/95/7ebd9590368fb4bef3bfd7292f0523bd.jpg",
                        tag: "restricted",
                        selected: false,
                        header: "GhostBuster",
                    }],

                })}
            />
            <PortraitCarousel
                {...Object.assign({}, baseObj, {
                    content: [{
                        image: "https://i.pinimg.com/564x/a7/97/60/a79760adad76cba1c147450ec25b6225.jpg",
                        header: "Balloon Burst",
                        selected: true,

                    },
                    {
                        image: "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
                        selected: true,
                        header: "Cityscape",
                    },
                    {
                        image: "https://i.pinimg.com/564x/7e/bd/95/7ebd9590368fb4bef3bfd7292f0523bd.jpg",
                        selected: false,
                        header: "GhostBuster",
                    }],

                })}
            />
            <PortraitCarousel
                {...Object.assign({}, baseObj, {
                    content: [{
                        image: "https://i.pinimg.com/564x/a7/97/60/a79760adad76cba1c147450ec25b6225.jpg",
                        tag: "new",

                    },
                    {
                        image: "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
                        tag: "premium",
                    },
                    {
                        image: "https://i.pinimg.com/564x/7e/bd/95/7ebd9590368fb4bef3bfd7292f0523bd.jpg",
                        tag: "restricted",
                    }],

                })}
            />
        </div>
    );
};

export const MultiplePortraitCarousels = MultiplePortraitCarouselsTemplate.bind(
  {}
);
MultiplePortraitCarousels.parameters = {
  docs: {
    description: {
      story: "3 variants with or without the check, tag and content.",
    },
  },
};
