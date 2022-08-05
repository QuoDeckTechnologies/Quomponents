import React from "react";
import SquareWrapperCarousel from "../components/Carousel/SquareWrapperCarousel/SquareWrapperCarousel.react";

export default {
  title: "Design System/Carousel/SquareWrapperCarousel",
  component: SquareWrapperCarousel,
  argTypes: {
    content: [
      {
        image: "",
        tag: "",
        selected: "",
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
    componentSubheader: "Displays a SquareWrapper carousel.",
    a11y: { disable: true },
    docs: {
      iframeHeight: 850,
    },
  },
};

let dataprops = {
  asVariant: "warning",
  withColor: {
    backgroundColor: "",
    textColor: "",
    accentColor: ""
  }
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <SquareWrapperCarousel {...args} />;
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
        asVariant: "warning",
      },
    },
  ],
};
Default.parameters = {
  docs: {
    source: {
      code: `<SquareWrapperCarousel 
      content= {[
        {
          id: "first-slide",
          image:
            "https://i.pinimg.com/564x/a7/97/60/a79760adad76cba1c147450ec25b6225.jpg",
          header: "Balloon Burst",
          tag: "new",
          selected: {true},
          props: {
            asVariant: "primary",
            withColor: {
              backgroundColor: "",
              textColor: "",
            }
          },
        },
        {
          id: "second-slide",
          image:
            "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
          tag: "premium",
          selected: {false},
          header: "Cityscape",
          props: {
            asVariant: "primary",
            withColor: {
              backgroundColor: "",
              textColor: "",
            }
          },
        },
        {
          id: "third-slide",
          image:
            "https://i.pinimg.com/564x/7e/bd/95/7ebd9590368fb4bef3bfd7292f0523bd.jpg",
          tag: "restricted",
          selected: {false},
          header: "GhostBuster",
          props: {
            asVariant: "primary",
            withColor: {
              backgroundColor: "",
              textColor: "",
            }
          },
        },
      ]},/>`,
    },
  },
};

// -------------------------------------------------------------
// SquareWrapperCarouselWithoutBox
// -------------------------------------------------------------
export const SquareWrapperCarouselWithoutBox = Template.bind({});
SquareWrapperCarouselWithoutBox.args = {
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
      selected: false,
      header: "GhostBuster",
    },
  ],
};
Default.parameters = {
  docs: {
    source: {
      code: `<SquareWrapperCarousel 
      content= {[
        {
          id: "first-slide",
          image:
            "https://i.pinimg.com/564x/a7/97/60/a79760adad76cba1c147450ec25b6225.jpg",
          tag: "new",
          selected: {true},
          props: {
            asVariant: "primary",
            withColor: {
              backgroundColor: "",
              textColor: "",
            }
          },
        },
        {
          id: "second-slide",
          image:
            "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
          tag: "premium",
          selected: {false},
          props: {
            asVariant: "secondary",
          },
        },
        {
          id: "third-slide",
          image:
            "https://i.pinimg.com/564x/7e/bd/95/7ebd9590368fb4bef3bfd7292f0523bd.jpg",
          tag: "restricted",
          selected: {false},
          props: {
            asVariant: "warning",
          },
        },
      ]},/>`,
    },
  },
};
// -------------------------------------------------------------
// SquareWrapperCarouselWithoutTag
// -------------------------------------------------------------
export const SquareWrapperCarouselWithoutTag = Template.bind({});
SquareWrapperCarouselWithoutTag.args = {
  content: [
    {
      id: "first-slide",
      image:
        " https://i.pinimg.com/564x/fc/cd/9f/fccd9ff066d6531ad19c042560cf78a0.jpg",
      header: "The Negotiation Room",
      props: {
        ...dataprops,
        asVariant: "primary",
      },
    },
    {
      id: "second-slide",
      image:
        "https://i.pinimg.com/564x/68/ed/88/68ed881d5ff0dbe232ff8d4d2e186a99.jpg",
      header: "The Negotiation Room",
      props: {
        ...dataprops,
        asVariant: "secondary",
      },
    },
    {
      id: "third-slide",
      image:
        "https://i.pinimg.com/564x/64/0b/57/640b5709e0cf312978a3912e736110e2.jpg",
      header: "What is Negotiation Room?",
      props: {
        ...dataprops,
        asVariant: "warning",
      },
    },
  ],
};
SquareWrapperCarouselWithoutTag.parameters = {
  docs: {
    description: {
      story: "We can see the SquareWrapper Carousel without any Tag",
    },
    source: {
      code: `<SquareWrapperCarousel
      content= {[
        {
          id: "first-slide",
          image:
            "https://i.pinimg.com/564x/a7/97/60/a79760adad76cba1c147450ec25b6225.jpg",
          header: "Balloon Burst",
          selected: {true},
          props: {
            asVariant: "primary",
            withColor: {
              backgroundColor: "",
              textColor: "",
            }
          },
        },
        {
          id: "second-slide",
          image:
            "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
          selected: {false},
          header: "Cityscape",
          props: {
            asVariant: "primary",
            withColor: {
              backgroundColor: "",
              textColor: "",
            }
          },
        },
        {
          id: "third-slide",
          image:
            "https://i.pinimg.com/564x/7e/bd/95/7ebd9590368fb4bef3bfd7292f0523bd.jpg",
          selected: {false},
          header: "GhostBuster",
          props: {
            asVariant: "primary",
            withColor: {
              backgroundColor: "",
              textColor: "",
            }
          },
        },
      ]},/>`,
    },
  },
};

// -------------------------------------------------------------
// MultipleSquareWrapperCarousels
// -------------------------------------------------------------
const MultipleSquareWrapperCarouselsTemplate = (args) => {
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
    }),
  };
  return (
    <div>
      <SquareWrapperCarousel
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
      <SquareWrapperCarousel
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
      <SquareWrapperCarousel
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
    </div>
  );
};

export const MultipleSquareWrapperCarousels =
  MultipleSquareWrapperCarouselsTemplate.bind({});
MultipleSquareWrapperCarousels.parameters = {
  docs: {
    description: {
      story: "3 variants with or without the selected slide, tag or content",
    },
  },
};
