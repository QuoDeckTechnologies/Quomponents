import React from "react";
import SquareCarousel from "../components/Carousel/SquareCarousel/SquareCarousel.react";

export default {
  title: "Design System/Carousel/SquareCarousel",
  component: SquareCarousel,
  argTypes: {
    content: [
      {
        image: "",
        tag: "",
        header: "",
        content: "",
        props: {},
      },
    ],
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
    componentSubheader:
      "Displays a Square carousel using react-slick. add content from prop to add more slides to the carosuel.",
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
  },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <SquareCarousel {...args} />;
export const Default = Template.bind({});
Default.args = {
  content: [
    {
      header: "Negotiation Room",
      content: "Play and win the competition to win Flipkart vouchers.",
      image:
        "https://i.pinimg.com/564x/db/02/f4/db02f4f5fbd5cddc306153bea2315e9b.jpg",
      tag: "new",
      props: {
        ...dataprops,
        asVariant: "secondary",
      },
    },
    {
      image:
        "https://i.pinimg.com/564x/d7/eb/54/d7eb54f1760884ebea92519ac653aa19.jpg",
      tag: "premium",
      header: "ਗੱਲਬਾਤ ਦਾ ਕਮਰਾ",
      content: "Flipkart ਵਾਊਚਰ ਹਾਸਲ ਕਰਨ ਲਈ ਮੁਕਾਬਲਾ ਖੇਡੋ ਅਤੇ ਜਿੱਤੋ। ",
      props: {
        ...dataprops,
      },
    },
    {
      image:
        "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
      tag: "restricted",
      header: "निगोशिएशन रूम",
      content: "फ्लिपकार्ट व्हाउचर मिळवण्यासाठी स्पर्धा खेळा आणि जिंका.",
      props: {
        ...dataprops,
      },
    },
  ],
};
Default.parameters = {
  docs: {
    source: {
      code: `<SquareCarousel 
            content={[{
                header: "Negotiation Room",
                content: "Play and win the competition to win Flipkart vouchers.",
                image: "https://i.pinimg.com/564x/db/02/f4/db02f4f5fbd5cddc306153bea2315e9b.jpg",
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
                image: "https://i.pinimg.com/564x/d7/eb/54/d7eb54f1760884ebea92519ac653aa19.jpg",
                tag: "premium",
                header: "ਗੱਲਬਾਤ ਦਾ ਕਮਰਾ",
                content: "Flipkart ਵਾਊਚਰ ਹਾਸਲ ਕਰਨ ਲਈ ਮੁਕਾਬਲਾ ਖੇਡੋ ਅਤੇ ਜਿੱਤੋ। ",
                props: {
                  asVariant: "primary",
                  withColor: {
                    backgroundColor: "",
                    textColor: "",
                  }
                },
            },
            {
                image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
                tag: "restricted",
                header: "निगोशिएशन रूम",
                content: "फ्लिपकार्ट व्हाउचर मिळवण्यासाठी स्पर्धा खेळा आणि जिंका.",
                props: {
                  asVariant: "primary",
                  withColor: {
                    backgroundColor: "",
                    textColor: "",
                  }
                },
            }]}/>`,
    },
  },
};
// -------------------------------------------------------------
// SquareCarouselWithoutBox
// -------------------------------------------------------------
export const SquareCarouselWithoutBox = Template.bind({});
SquareCarouselWithoutBox.args = {
  content: [
    {
      image:
        " https://i.pinimg.com/564x/fc/cd/9f/fccd9ff066d6531ad19c042560cf78a0.jpg",
      tag: "new",
      props: {
        ...dataprops,
        asVariant: "secondary",
      },
    },
    {
      image:
        "https://i.pinimg.com/564x/68/ed/88/68ed881d5ff0dbe232ff8d4d2e186a99.jpg",
      tag: "premium",
      props: {
        ...dataprops,
      },
    },
    {
      image:
        "https://i.pinimg.com/564x/64/0b/57/640b5709e0cf312978a3912e736110e2.jpg",
      tag: "restricted",
      props: {
        ...dataprops,
      },
    },
  ],
};
SquareCarouselWithoutBox.parameters = {
  docs: {
    description: {
      story:
        "We can see the Square Carousel without any Box Header and Content",
    },
    source: {
      code: `<SquareCarousel {..<SquareCarousel 
                content={[{
                    image: "https://i.pinimg.com/564x/db/02/f4/db02f4f5fbd5cddc306153bea2315e9b.jpg",
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
                    image: "https://i.pinimg.com/564x/d7/eb/54/d7eb54f1760884ebea92519ac653aa19.jpg",
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
                    image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
                    tag: "restricted",
                    props: {
                      asVariant: "primary",
                      withColor: {
                        backgroundColor: "",
                        textColor: "",
                      }
                    },
                }]}/>/>`,
    },
  },
};

// -------------------------------------------------------------
// SquareCarouselWithoutTag
// -------------------------------------------------------------
export const SquareCarouselWithoutTag = Template.bind({});
SquareCarouselWithoutTag.args = {
  content: [
    {
      image:
        " https://i.pinimg.com/564x/fc/cd/9f/fccd9ff066d6531ad19c042560cf78a0.jpg",
      header: "The Negotiation Room",
      content: "Play the contest and win to earn Flipkart vouchers.",
      props: {
        ...dataprops,
        asVariant: "secondary",
      },
    },
    {
      image:
        "https://i.pinimg.com/564x/68/ed/88/68ed881d5ff0dbe232ff8d4d2e186a99.jpg",
      header: "The Negotiation Room",
      content: "  ",
      props: {
        ...dataprops,
      },
    },
    {
      image:
        "https://i.pinimg.com/564x/64/0b/57/640b5709e0cf312978a3912e736110e2.jpg",
      header: "What is Negotiation Room?",
      content: "Play the contest and win to earn Flipkart vouchers",
      props: {
        ...dataprops,
      },
    },
  ],
};
SquareCarouselWithoutTag.parameters = {
  docs: {
    description: {
      story: "We can see the Square Carousel without any Tag",
    },
    source: {
      code: `<SquareCarousel <SquareCarousel 
            content={[{
                header: "Negotiation Room",
                content: "Play and win the competition to win Flipkart vouchers.",
                image: "https://i.pinimg.com/564x/db/02/f4/db02f4f5fbd5cddc306153bea2315e9b.jpg",
                props: {
                  asVariant: "primary",
                  withColor: {
                    backgroundColor: "",
                    textColor: "",
                  }
                },
            },
            {
                image: "https://i.pinimg.com/564x/d7/eb/54/d7eb54f1760884ebea92519ac653aa19.jpg",
                header: "ਗੱਲਬਾਤ ਦਾ ਕਮਰਾ",
                content: "Flipkart ਵਾਊਚਰ ਹਾਸਲ ਕਰਨ ਲਈ ਮੁਕਾਬਲਾ ਖੇਡੋ ਅਤੇ ਜਿੱਤੋ। ",
                props: {
                  asVariant: "primary",
                  withColor: {
                    backgroundColor: "",
                    textColor: "",
                  }
                },
            },
            {
                image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
                header: "निगोशिएशन रूम",
                content: "फ्लिपकार्ट व्हाउचर मिळवण्यासाठी स्पर्धा खेळा आणि जिंका.",
                props: {
                  asVariant: "primary",
                  withColor: {
                    backgroundColor: "",
                    textColor: "",
                  }
                },
            }]}/>/>`,
    },
  },
};
