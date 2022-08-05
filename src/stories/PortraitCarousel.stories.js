import React from "react";
import PortraitCarousel from "../components/Carousel/PortraitCarousel/PortraitCarousel.react";
export default {
  title: "Design System/Carousel/PortraitCarousel",
  component: PortraitCarousel,
  argTypes: {
    content: [
      {
        id: "",
        image: "",
        tag: "",
        checked: "",
        header: "",
      },
    ],
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
        }}
      >
        {story()}
      </div>
    ),
  ],
  parameters: {
    componentSubheader: "Displays a portrait carousel using react-slick. add content from prop to add more slides to the carosuel.",
    a11y: { disable: true },
    docs: {
      iframeHeight: 600,
    },
  },
};

let dataprops = {
  asVariant: "warning",
  withColor: {
    backgroundColor: "",
    textColor: ""
  }
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
      props: {
        ...dataprops,
        asVariant: "primary",
      },
    },
    {
      id: "second-slide",
      image:
        "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
      tag: "premium",
      selected: false,
      header: "Cityscape",
      props: {
        ...dataprops,
        asVariant: "secondary",
      },
    },
    {
      id: "third-slide",
      image:
        "https://i.pinimg.com/564x/7e/bd/95/7ebd9590368fb4bef3bfd7292f0523bd.jpg",
      tag: "restricted",
      selected: false,
      header: "GhostBuster",
      props: {
        ...dataprops,
        asVariant: "warning",
      },
    },
  ],
};
Default.parameters = {
  docs: {
    source: {
      code: `<PortraitCarousel
      content ={[
        {
          image:
            "https://i.pinimg.com/564x/a7/97/60/a79760adad76cba1c147450ec25b6225.jpg",
          content: "This is HtmlCarousel, Imported from banner card.",
          tag: "new",
          props: {
            asVariant: "primary",
            withColor: {
              backgroundColor: "",
              textColor: "",
            }
          },
        },
        {
          image:
            "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
          tag: "premium",
          content: "This is HtmlCarousel, Imported from banner card.",
          props: {
            asVariant: "primary",
            withColor: {
              backgroundColor: "",
              textColor: "",
            }
          },
        },
        {
          image:
            "https://i.pinimg.com/564x/7e/bd/95/7ebd9590368fb4bef3bfd7292f0523bd.jpg",
          tag: "restricted",
          content: "This is HtmlCarousel, Imported from banner card.",
          props: {
            ...dataprops,
            asVariant: "warning",
          },
        },
      ]}/>`,
    },
  },
};
// -------------------------------------------------------------
// PortraitCarouselWithoutBox
// -------------------------------------------------------------
export const PortraitCarouselWithoutBox = Template.bind({});
PortraitCarouselWithoutBox.args = {
  content: [
    {
      id: "first-slide",
      image:
        "https://i.pinimg.com/564x/fc/cd/9f/fccd9ff066d6531ad19c042560cf78a0.jpg",
      tag: "new",
    },
    {
      id: "second-slide",

      image:
        "https://i.pinimg.com/564x/7e/bd/95/7ebd9590368fb4bef3bfd7292f0523bd.jpg",
      tag: "restricted",
    },
    {
      id: "third-slide",
      image:
        "https://i.pinimg.com/564x/64/0b/57/640b5709e0cf312978a3912e736110e2.jpg",
      tag: "restricted",
    },
  ],
};
Default.parameters = {
  docs: {
    source: {
      code: `<PortraitCarousel
      content ={[
        {
          image:
            "https://i.pinimg.com/564x/a7/97/60/a79760adad76cba1c147450ec25b6225.jpg",
          tag: "new",
          props: {
            asVariant: "primary",
            withColor: {
              backgroundColor: "",
              textColor: "",
            }
          },
        },
        {
          image:
            "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
          tag: "premium",
          props: {
            asVariant: "primary",
            withColor: {
              backgroundColor: "",
              textColor: "",
            }
          },
        },
        {
          image:
            "https://i.pinimg.com/564x/7e/bd/95/7ebd9590368fb4bef3bfd7292f0523bd.jpg",
          tag: "restricted",
          props: {
            asVariant: "primary",
            withColor: {
              backgroundColor: "",
              textColor: "",
            }
          },
        },
      ]}/>`,
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
      id: "third-slide",
      image:
        "https://i.pinimg.com/564x/64/0b/57/640b5709e0cf312978a3912e736110e2.jpg",
      header: "What is Negotiation Room?",
    },
  ],
};
PortraitCarouselWithoutTag.parameters = {
  docs: {
    description: {
      story: "We can see the Portrait Carousel without any Tag",
    },
    source: {
      code: `<PortraitCarousel
      content ={[
        {
          image:
            "https://i.pinimg.com/564x/a7/97/60/a79760adad76cba1c147450ec25b6225.jpg",
          content: "This is HtmlCarousel, Imported from banner card.",
          props: {
            asVariant: "primary",
            withColor: {
              backgroundColor: "",
              textColor: "",
            }
          },
        },
        {
          image:
            "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
          content: "This is HtmlCarousel, Imported from banner card.",
          props: {
            asVariant: "primary",
            withColor: {
              backgroundColor: "",
              textColor: "",
            }
          },
        },
        {
          image:
            "https://i.pinimg.com/564x/7e/bd/95/7ebd9590368fb4bef3bfd7292f0523bd.jpg",
          content: "This is HtmlCarousel, Imported from banner card.",
          props: {
            asVariant: "primary",
            withColor: {
              backgroundColor: "",
              textColor: "",
            }
          },
        },
      ]}/>`,
    },
  },
};
// -------------------------------------------------------------
// MultiplePortraitCarousels
// -------------------------------------------------------------
const MultiplePortraitCarouselsTemplate = (args) => {
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
          props: {
            ...dataprops,
            asVariant: "primary",
          },
        },
        {
          id: "second-slide",
          image:
            "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
          tag: "premium",
          selected: false,
          header: "Cityscape",
          props: {
            ...dataprops,
            asVariant: "secondary",
          },
        },
        {
          id: "third-slide",
          image:
            "https://i.pinimg.com/564x/7e/bd/95/7ebd9590368fb4bef3bfd7292f0523bd.jpg",
          tag: "restricted",
          selected: false,
          header: "GhostBuster",
          props: {
            ...dataprops,
            asVariant: "warning",
          },
        },
      ],
    }),
  };
  return (
    <div>
      <PortraitCarousel
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
      <PortraitCarousel
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
      <PortraitCarousel
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
