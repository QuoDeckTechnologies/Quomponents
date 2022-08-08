import React from "react";
import QuoCarousel from "../components/Carousel/QuoCarousel/QuoCarousel.react";
import HCard from "../components/HCard/HCard.react"
import VCardWithButton from "../components/VCardWithButton/VCardWithButton.react"

const dictionary = JSON.stringify({
    // en: {
    //     button: {
    //         text: "Skip",
    //     },
    // },
    hi: {
        button: { text: "स्किप" },
    },
});

export default {
    title: "Design System/Carousel/QuoCarousel",
    component: QuoCarousel,
    argTypes: {
        content: [{}],
        arrows: {
            table: {
                category: "is-Toggles",
                defaultValue: false,
            }
        },
        autoPlay: {
            table: {
                category: "is-Toggles",
                defaultValue: false,
            }
        },
        dots: {
            table: {
                category: "is-Toggles",
                defaultValue: false,
            }
        },
        infinite: {
            table: {
                category: "is-Toggles",
                defaultValue: false,
            }
        },
        addSkipToEnd: {
            table: {
                category: "is-Toggles",
                defaultValue: false,
            }
        },
        adaptiveHeight: {
            table: {
                category: "is-Toggles",
                defaultValue: false,
            }
        },
        centerMode: {
            table: {
                category: "is-Toggles",
                defaultValue: false,
            }
        },
        slidesToShow: 1,
        initialSlide: 1,
        asNavFor: "",
        centerPadding: "0",
        withColor: {
            table: {
                category: "with-Params",
                defaultValue: {
                    textColor: "",
                    hoverBackgroundColor: "",
                    hoverTextColor: "",
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
        onRightNavigation: {
            table: {
                category: "Events",
                defaultValue: null,
            },
        }
    },
    decorators: [
        (story) => (
            <div
                style={{
                    width: "100%"
                }}
            >
                {story()}
            </div>
        )
    ],
    parameters: {
        componentSubtitle: "General purpose carousel",
        a11y: { disable: true },
        docs: {
            iframeHeight: 600,
        },
    }
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <QuoCarousel {...args} />
export const Default = Template.bind({});
Default.args = {
    content: [
        <HCard
            onClick={() => { }}
            content={{
                image: {
                    id: "image-1",
                    extention: "",
                },
                name: "Sales Readiness",
                description: "Understand how to prepare yourself for that sale",
                buttonText: "Check",
            }}
            asVariant="secondary"
            imageLibrary={[
                {
                    id: "image-1",
                    image: "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
                }]}
        />,
        <HCard
            onClick={() => { }}
            content={{
                image: {
                    id: "image-1",
                    extention: "",
                },
                name: "Sales Readiness",
                description: "Understand how to prepare yourself for that sale",
                buttonText: "Check",
            }}
            asVariant="primary"
            imageLibrary={[
                {
                    id: "image-1",
                    image: "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
                }]} />,
        <HCard
            onClick={() => { }}
            content={{
                image: {
                    id: "image-1",
                    extention: "",
                },
                name: "Sales Readiness",
                description: "Understand how to prepare yourself for that sale",
                buttonText: "Check",
            }}
            asVariant="warning"
            imageLibrary={[
                {
                    id: "image-1",
                    image: "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
                }]}
        />
    ],
    arrows: true,
    autoPlay: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    initialSlide: 1,
    asNavFor: "",
    addSkipToEnd: true,
    adaptiveHeight: false,
    withColor: {
        textColor: "",
        hoverBackgroundColor: "",
        hoverTextColor: "",
    },
    withTranslation: {
        lang: "en",
        tgt: "button",
        dictionary: dictionary,
    },
    isHidden: false,
    isDisabled: false,
    centerPadding: "10",
    onRightNavigation: () => { }
};
Default.parameters = {
    docs: {
        description: {
            story: "Carousel with content as list of H-cards"
        },
        source: {
            code: `<QuoCarousel
            content={[
              <HCard
                onClick={() => { }}
                content={{
                  image: {
                    id: "image-1",
                    extention: "",
                  },
                  name: "Sales Readiness",
                  description: "Understand how to prepare yourself for that sale",
                  buttonText: "Check",
                }}
                imageLibrary={[
                  {
                    id: "image-1",
                    image: "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
                  }]} />,
              <HCard
                onClick={() => { }}
                content={{
                  image: {
                    id: "image-1",
                    extention: "",
                  },
                  name: "Sales Readiness",
                  description: "Understand how to prepare yourself for that sale",
                  buttonText: "Check",
                }}
                imageLibrary={[
                  {
                    id: "image-1",
                    image: "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
                  }]} />,
              <HCard
                onClick={() => { }}
                content={{
                  image: {
                    id: "image-1",
                    extention: "",
                  },
                  name: "Sales Readiness",
                  description: "Understand how to prepare yourself for that sale",
                  buttonText: "Check",
                }}
                imageLibrary={[
                  {
                    id: "image-1",
                    image: "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
                  }]} />
            ]}
            arrows={true}
            autoPlay={false}
            dots={true}
            infinite={true}
            slidesToShow={2}
            initialSlide={1}
            asNavFor=""
            isDisabled={false}
            isHidden={false}
          />`
        }
    }
};

// -------------------------------------------------------------
// VCard
// -------------------------------------------------------------
export const VCard = Template.bind({});
VCard.args = {
    content: [
        <VCardWithButton
            onClick={() => { }}
            content={{
                image: {
                    id: "image-1",
                    extention: "",
                },
                name: "Sales Readiness",
                description: "Understand how to prepare yourself for that sale",
                buttonText: "Check",
            }}
            imageLibrary={[
                {
                    id: "image-1",
                    image: "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
                }]} />,
        <VCardWithButton
            onClick={() => { }}
            content={{
                image: {
                    id: "image-1",
                    extention: "",
                },
                name: "Sales Readiness",
                description: "Understand how to prepare yourself for that sale",
                buttonText: "Check",
            }}
            imageLibrary={[
                {
                    id: "image-1",
                    image: "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
                }]} />,
        <VCardWithButton
            onClick={() => { }}
            content={{
                image: {
                    id: "image-1",
                    extention: "",
                },
                name: "Sales Readiness",
                description: "Understand how to prepare yourself for that sale",
                buttonText: "Check",
            }}
            imageLibrary={[
                {
                    id: "image-1",
                    image: "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
                }]}
        />,
        <VCardWithButton
            onClick={() => { }}
            content={{
                image: {
                    id: "image-1",
                    extention: "",
                },
                name: "Sales Readiness",
                description: "Understand how to prepare yourself for that sale",
                buttonText: "Check",
            }}
            imageLibrary={[
                {
                    id: "image-1",
                    image: "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
                }]}
        />],
    arrows: true,
    autoPlay: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    initialSlide: 1,
    asNavFor: "",
    addSkipToEnd: true,
    adaptiveHeight: false,
    withColor: {
        textColor: "",
        hoverBackgroundColor: "",
        hoverTextColor: "",
    },
    withTranslation: {
        lang: "en",
        tgt: "button",
        dictionary: dictionary,
    },
    isHidden: false,
    isDisabled: false,
    centerPadding: "0"
};
VCard.parameters = {
    docs: {
        description: {
            story:
                "Carousel with content as list of V-cards",
        },
        source: {
            code: `<QuoCarousel
            content={[
              <VCardWithButton
                onClick={() => { }}
                content={{
                  image: {
                    id: "image-1",
                    extention: "",
                  },
                  name: "Sales Readiness",
                  description: "Understand how to prepare yourself for that sale",
                  buttonText: "Check",
                }}
                imageLibrary={[
                  {
                    id: "image-1",
                    image: "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
                  }]} />,
              <VCardWithButton
                onClick={() => { }}
                content={{
                  image: {
                    id: "image-1",
                    extention: "",
                  },
                  name: "Sales Readiness",
                  description: "Understand how to prepare yourself for that sale",
                  buttonText: "Check",
                }}
                imageLibrary={[
                  {
                    id: "image-1",
                    image: "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
                  }]} />,
              <VCardWithButton
                onClick={() => { }}
                content={{
                  image: {
                    id: "image-1",
                    extention: "",
                  },
                  name: "Sales Readiness",
                  description: "Understand how to prepare yourself for that sale",
                  buttonText: "Check",
                }}
                imageLibrary={[
                  {
                    id: "image-1",
                    image: "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
                  }]}
              />
            ]}
            arrows= {true}
            autoPlay= {false}
            dots= {true}
            infinite= {true}
            slidesToShow= {2}
            initialSlide= {1}
            asNavFor= ""
            isDisabled= {false}
            isHidden= {false}
          />`
        },
    }
};
