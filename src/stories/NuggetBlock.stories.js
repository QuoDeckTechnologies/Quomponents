import React from "react";
import NuggetBlock from "../components/NuggetBlock/NuggetBlock.react";

import Nugget_Story from "../assets/nugget/nugget_story.png";
import Nugget_Quiz from "../assets/nugget/nugget_quiz.png";
import Nugget_Assessment from "../assets/nugget/nugget_assessment.png";
import Nugget_Game from "../assets/nugget/nugget_game.png";
import Nugget_Article from "../assets/nugget/nugget_article.png";
import Nugget_Feedback from "../assets/nugget/nugget_feedback.png";
import Nugget_Poll from "../assets/nugget/nugget_poll.png";
import Nugget_Profiler from "../assets/nugget/nugget_profiler.png";
import Nugget_Recco from "../assets/nugget/nugget_recco.png";
import Nugget_Document from "../assets/nugget/nugget_document.png";
import Nugget_Survey from "../assets/nugget/nugget_survey.png";
import Nugget_Submission from "../assets/nugget/nugget_submission.png";
import Nugget_Calculator from "../assets/nugget/nugget_calculator.png";
import Nugget_Linklist from "../assets/nugget/nugget_linklist.png";
import Nugget_Faq from "../assets/nugget/nugget_faq.png";
import Nugget_Event from "../assets/nugget/nugget_event.png";
import Nugget_Video from "../assets/nugget/nugget_video.png";
import Nugget_News from "../assets/nugget/nugget_news.png";
import Nugget_Webinar from "../assets/nugget/nugget_webinar.png";
import Nugget_Gallery from "../assets/nugget/nugget_gallery.png";

export default {
    title: "Design System/NuggetBlock/NuggetBlock",
    component: NuggetBlock,
    argTypes: {
        image: "",
        status: {
            control: "select",
            options: ["published", "unpublished", "none"],
            table: {
                category: "as-Flags",
            },
        },
        asSize: {
            control: "select",
            options: ["tiny", "small", "normal", "big", "huge", "massive"],
            table: {
                category: "as-Flags",
            },
        },
        asPadded: {
            control: "select",
            options: ["fitted", "compact", "normal", "relaxed"],
            table: {
                category: "as-Flags",
            },
        },
        asFloated: {
            control: "select",
            options: ["left", "right", "inline"],
            table: {
                category: "as-Flags",
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
    decorators: [
        (story) => (
            <div
                style={{
                    width: "100%",
                    textAlign: "center",
                    fontSize: "1.25em",
                }}
            >
                {story()}
            </div>
        ),
    ],
    parameters: {
        componentSubtitle: "Displays a basic button for general-purpose use",
        a11y: { disable: true },
        docs: { iframeHeight: 200 },
    },
};

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <NuggetBlock {...args} />;
export const Default = Template.bind({});
Default.args = {
    image: Nugget_Profiler,
    status: "none",
    asSize: "normal",
    asFloated: "inline",
    asPadded: "normal",
    withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
    },
    isDisabled: false,
    isHidden: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `<NuggetBlock {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};

export const AllVariantsTemplate = (args) => {
    const baseObj1 = {
        ...Object.assign({}, Default.args, args, {
            image: Nugget_Story,
            withAnimation: {
                animation: "zoom",
                duration: 0.5,
                delay: 0.1,
            },
        })

    };
    const baseObj2 = {
        ...Object.assign({}, Default.args, args, {
            image: Nugget_Quiz,
            withAnimation: {
                animation: "zoom",
                duration: 0.5,
                delay: 0.2,
            },
        })
    };
    const baseObj3 = {
        ...Object.assign({}, Default.args, args, {
            image: Nugget_Assessment,
            withAnimation: {
                animation: "zoom",
                duration: 0.5,
                delay: 0.3,
            },
        })
    };
    const baseObj4 = {
        ...Object.assign({}, Default.args, args, {
            image: Nugget_Game,
            withAnimation: {
                animation: "zoom",
                duration: 0.5,
                delay: 0.4,
            },
        })
    };
    const baseObj5 = {
        ...Object.assign({}, Default.args, args, {
            image: Nugget_Article,
            withAnimation: {
                animation: "zoom",
                duration: 0.5,
                delay: 0.5,
            },
        })
    };
    const baseObj6 = {
        ...Object.assign({}, Default.args, args, {
            image: Nugget_Feedback,
            withAnimation: {
                animation: "zoom",
                duration: 0.5,
                delay: 1.5,
            },
        })
    };
    const baseObj7 = {
        ...Object.assign({}, Default.args, args, {
            image: Nugget_Poll,
            withAnimation: {
                animation: "zoom",
                duration: 0.5,
                delay: 1.6,
            },
        })
    };
    const baseObj8 = {
        ...Object.assign({}, Default.args, args, {
            image: Nugget_Profiler,
            withAnimation: {
                animation: "zoom",
                duration: 0.5,
                delay: 1.7,
            },
        })
    };
    const baseObj9 = {
        ...Object.assign({}, Default.args, args, {
            image: Nugget_Recco,
            withAnimation: {
                animation: "zoom",
                duration: 0.5,
                delay: 1.8,
            },
        })
    };
    const baseObj10 = {
        ...Object.assign({}, Default.args, args, {
            image: Nugget_Document,
            withAnimation: {
                animation: "zoom",
                duration: 0.5,
                delay: 0.6,
            },
        })
    };
    const baseObj11 = {
        ...Object.assign({}, Default.args, args, {
            image: Nugget_Survey,
            withAnimation: {
                animation: "zoom",
                duration: 0.5,
                delay: 1.4,
            },
        })
    };
    const baseObj12 = {
        ...Object.assign({}, Default.args, args, {
            image: Nugget_Submission,
            withAnimation: {
                animation: "zoom",
                duration: 0.5,
                delay: 2.1,
            },
        })
    };
    const baseObj13 = {
        ...Object.assign({}, Default.args, args, {
            image: Nugget_Calculator,
            withAnimation: {
                animation: "zoom",
                duration: 0.5,
                delay: 2
            },
        })

    };
    const baseObj14 = {
        ...Object.assign({}, Default.args, args, {
            image: Nugget_Linklist,
            withAnimation: {
                animation: "zoom",
                duration: 0.5,
                delay: 1.9,
            },
        })
    };
    const baseObj15 = {
        ...Object.assign({}, Default.args, args, {
            image: Nugget_Faq,
            withAnimation: {
                animation: "zoom",
                duration: 0.5,
                delay: 0.7,
            },
        })
    };
    const baseObj16 = {
        ...Object.assign({}, Default.args, args, {
            image: Nugget_Event,
            withAnimation: {
                animation: "zoom",
                duration: 0.5,
                delay: 1.3,
            },
        })
    };
    const baseObj17 = {
        ...Object.assign({}, Default.args, args, {
            image: Nugget_Video,
            withAnimation: {
                animation: "zoom",
                duration: 0.5,
                delay: 1.2,
            },
        })
    };
    const baseObj18 = {
        ...Object.assign({}, Default.args, args, {
            image: Nugget_News,
            withAnimation: {
                animation: "zoom",
                duration: 0.5,
                delay: 1,
            },
        })
    };
    const baseObj19 = {
        ...Object.assign({}, Default.args, args, {
            image: Nugget_Webinar,
            withAnimation: {
                animation: "zoom",
                duration: 0.5,
                delay: 0.9,
            },
        })

    };
    const baseObj20 = {
        ...Object.assign({}, Default.args, args, {
            image: Nugget_Gallery,
            withAnimation: {
                animation: "zoom",
                duration: 0.5,
                delay: 0.8,
            },
            status: "none"
        })
    };
    return (
        <div>
            <div>
                <NuggetBlock
                    {...Object.assign({}, baseObj1, {
                    })}
                />
                <NuggetBlock
                    {...Object.assign({}, baseObj2, {
                    })}
                />
                <NuggetBlock
                    {...Object.assign({}, baseObj3, {
                    })}
                />
                <NuggetBlock
                    {...Object.assign({}, baseObj4, {
                    })}
                />
                <NuggetBlock
                    {...Object.assign({}, baseObj5, {
                    })}
                />
            </div>
            <div>
                <NuggetBlock
                    {...Object.assign({}, baseObj6, {
                    })}
                />
                <NuggetBlock
                    {...Object.assign({}, baseObj7, {
                    })}
                />
                <NuggetBlock
                    {...Object.assign({}, baseObj8, {
                    })}
                />
                <NuggetBlock
                    {...Object.assign({}, baseObj9, {
                    })}
                />
                <NuggetBlock
                    {...Object.assign({}, baseObj10, {
                    })}
                />
            </div>
            <div>
                <NuggetBlock
                    {...Object.assign({}, baseObj11, {
                    })}
                />
                <NuggetBlock
                    {...Object.assign({}, baseObj12, {
                    })}
                />
                <NuggetBlock
                    {...Object.assign({}, baseObj13, {
                    })}
                />
                <NuggetBlock
                    {...Object.assign({}, baseObj14, {
                    })}
                />
                <NuggetBlock
                    {...Object.assign({}, baseObj15, {
                    })}
                />
            </div>
            <div>
                <NuggetBlock
                    {...Object.assign({}, baseObj16, {
                    })}
                />
                <NuggetBlock
                    {...Object.assign({}, baseObj17, {
                    })}
                />
                <NuggetBlock
                    {...Object.assign({}, baseObj18, {
                    })}
                />
                <NuggetBlock
                    {...Object.assign({}, baseObj19, {
                    })}
                />
                <NuggetBlock
                    {...Object.assign({}, baseObj20, {
                    })}
                />
            </div>
        </div>
    );
};
