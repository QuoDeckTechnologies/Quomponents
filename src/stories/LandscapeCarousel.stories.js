import React from "react";
import LandscapeCarousel from "../components/Carousel/LandscapeCarousel/LandscapeCarousel.react";

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
    componentSubheader: "Displays a Landscape carousel using react-slick. add content from prop to add more slides to the carosuel.",
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
    textColor: "",
  }
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
      code: `<LandscapeCarousel 
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
        asVariant: "secondary",
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
        asVariant: "warning",
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
LandscapeCarouselWithoutBox.parameters = {
  docs: {
    description: {
      story: "We can see the landscape Carousel without any header box",
    },
    source: {
      code: `<LandscapeCarousel 
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
          props: {
            asVariant: "warning",
            withColor: {
              backgroundColor: "",
              textColor: "",
            }
          },
        },
      ]}`,
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
LandscapeCarouselWithoutTag.parameters = {
  docs: {
    description: {
      story: "We can see the Landscape Carousel without any Tag",
    },
    source: {
      code: `<LandscapeCarousel 
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
            asVariant: "secondary",
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
            asVariant: "warning",
            withColor: {
              backgroundColor: "",
              textColor: "",
            }
          },
        },
      ]}`,
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
              props: {
                ...dataprops,
                asVariant: "warning",
              },
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
