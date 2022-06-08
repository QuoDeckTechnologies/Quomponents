import React from "react";
import CategoryCard from "../components/CategoryCard/CategoryCard.react";

export default {
    title: "Design System/CategoryCard/CategoryCard",
    component: CategoryCard,
    argTypes: {
        content: {
            label: "",
            image: "",
            percentage: 0,
        },
        asSize: {
            control: "select",
            options: ["tiny", "small", "normal", "big", "huge", "massive"],
            table: {
                category: "as-Flags",
            },
        },
        asFloated: {
            control: "select",
            options: ["left", "right", "none", "inline"],
            table: {
                category: "as-Flags",
            },
        },
        withColor: {
            table: {
                category: "with-Params",
                defaultValue: {
                    textColor: "",
                    backgroundColor: "",
                    accentColor: "",
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
        isHidden: {
            table: {
                category: "is-Toggles",
                defaultValue: false,
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
        componentSubtitle: "Displays a basic CategoryCard for general-purpose use",
        a11y: { disable: true },
        docs: { iframeHeight: 250 },
    },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <CategoryCard {...args} />;
export const Default = Template.bind({});
Default.args = {
    content: {
        label: "Regulatory",
        image: "",
        percentage: 80,
    },
    asSize: "normal",
    asFloated: "inline",
    withColor: {
        textColor: "",
        backgroundColor: "",
        accentColor: "",
    },
    withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
    },
    isHidden: false,
};
Default.parameters = {
    docs: {
        source: {
            code: `<CategoryCard {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
// -------------------------------------------------------------
// Animated CategoryCard
// -------------------------------------------------------------
export const AnimatedCategoryCard = Template.bind({});
AnimatedCategoryCard.args = {
    ...Default.args,
    withAnimation: {
        animation: "slideRight",
        duration: 0.5,
        delay: 0,
    },
};
AnimatedCategoryCard.parameters = {
    docs: {
        description: {
            story:
                "Use to animate the entry of the CategoryCard with the standard animation options and set duration and delay. Can be used to make multiple components enter the screen in a queue.",
        },
        source: {
            code: `<AnimatedCategoryCard {...${JSON.stringify(
                AnimatedCategoryCard.args,
                null,
                2
            )}}/>`,
        },
    },
};
// -------------------------------------------------------------
// Colored CategoryCard
// -------------------------------------------------------------
export const ColoredCategoryCard = Template.bind({});
ColoredCategoryCard.args = {
    ...Default.args,
    withColor: {
        textColor: "",
        backgroundColor: "#34e5eb",
        accentColor: "#065254",
    }
};
ColoredCategoryCard.parameters = {
    docs: {
        description: {
            story:
                "Use to override the standard colors of the CategoryCard.",
        },
        source: {
            code: `<ColoredCategoryCard {...${JSON.stringify(
                ColoredCategoryCard.args,
                null,
                2
            )}}/>`,
        },
    },
}; 