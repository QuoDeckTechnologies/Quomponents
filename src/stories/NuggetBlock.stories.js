import React from "react";
import NuggetBlock from "../components/NuggetBlock/NuggetBlock.react";

import Nugget_Story from "../assets/nugget_story.png";
import Nugget_Quiz from "../assets/nugget_quiz.png";
import Nugget_Assessment from "../assets/nugget_assessment.png";
import Nugget_Game from "../assets/nugget_game.png";
import Nugget_Article from "../assets/nugget_article.png";
import Nugget_Feedback from "../assets/nugget_feedback.png";
import Nugget_Poll from "../assets/nugget_poll.png";
import Nugget_Profiler from "../assets/nugget_profiler.png";
import Nugget_Recco from "../assets/nugget_recco.png";
import Nugget_Document from "../assets/nugget_document.png";
import Nugget_Survey from "../assets/nugget_survey.png";
import Nugget_Submission from "../assets/nugget_submission.png";
import Nugget_Calculator from "../assets/nugget_calculator.png";
import Nugget_Linklist from "../assets/nugget_linklist.png";
import Nugget_Faq from "../assets/nugget_faq.png";
import Nugget_Event from "../assets/nugget_event.png";
import Nugget_Video from "../assets/nugget_video.png";
import Nugget_News from "../assets/nugget_news.png";
import Nugget_Webinar from "../assets/nugget_webinar.png";
import Nugget_Gallery from "../assets/nugget_gallery.png";

export default {
    title: "Design System/NuggetBlock/NuggetBlock",
    component: NuggetBlock,
    argTypes: {

        image: "",
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
            image: Nugget_Story
        })

    };
    const baseObj2 = {
        ...Object.assign({}, Default.args, args, {
            image: Nugget_Quiz
        })
    };
    const baseObj3 = {
        ...Object.assign({}, Default.args, args, {
            image: Nugget_Assessment
        })
    };
    const baseObj4 = {
        ...Object.assign({}, Default.args, args, {
            image: Nugget_Game
        })
    };
    const baseObj5 = {
        ...Object.assign({}, Default.args, args, {
            image: Nugget_Article
        })
    };
    const baseObj6 = {
        ...Object.assign({}, Default.args, args, {
            image: Nugget_Feedback
        })
    };
    const baseObj7 = {
        ...Object.assign({}, Default.args, args, {
            image: Nugget_Poll
        })
    };
    const baseObj8 = {
        ...Object.assign({}, Default.args, args, {
            image: Nugget_Profiler
        })
    };
    const baseObj9 = {
        ...Object.assign({}, Default.args, args, {
            image: Nugget_Recco
        })
    };
    const baseObj10 = {
        ...Object.assign({}, Default.args, args, {
            image: Nugget_Document
        })
    };
    const baseObj11 = {
        ...Object.assign({}, Default.args, args, {
            image: Nugget_Survey
        })
    };
    const baseObj12 = {
        ...Object.assign({}, Default.args, args, {
            image: Nugget_Submission,
        })
    };
    const baseObj13 = {
        ...Object.assign({}, Default.args, args, {
            image: Nugget_Calculator
        })

    };
    const baseObj14 = {
        ...Object.assign({}, Default.args, args, {
            image: Nugget_Linklist
        })
    };
    const baseObj15 = {
        ...Object.assign({}, Default.args, args, {
            image: Nugget_Faq
        })
    };
    const baseObj16 = {
        ...Object.assign({}, Default.args, args, {
            image: Nugget_Event
        })
    };
    const baseObj17 = {
        ...Object.assign({}, Default.args, args, {
            image: Nugget_Video
        })
    };
    const baseObj18 = {
        ...Object.assign({}, Default.args, args, {
            image: Nugget_News
        })
    };
    const baseObj19 = {
        ...Object.assign({}, Default.args, args, {
            image: Nugget_Webinar
        })

    };
    const baseObj20 = {
        ...Object.assign({}, Default.args, args, {
            image: Nugget_Gallery
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
