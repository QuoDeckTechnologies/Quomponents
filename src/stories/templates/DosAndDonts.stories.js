import React from "react";
import DosAndDonts from "../../components/Templates/DosAndDonts/DosAndDonts.react";

export default {
    title: "Design System/Templates/DosAndDonts/DosAndDonts",
    component: DosAndDonts,
    argTypes: {
        data: {},
        slideId: 0,
        asVariant: {
            control: "select",
            options: ["primary", "secondary", "success", "warning", "error"],
            table: {
                category: "as-Flags",
            },
        },
        isChoice: {
            table: {
                defaultValue: true,
            },
        },
        asEmphasis: {
            control: "select",
            options: ["text", "outlined", "contained"],
        },
        withColor: {
            table: {
                category: "with-Params",
                defaultValue: {
                    slideHeaderTextColor: "",
                    slideHeaderAccentColor: "",
                    slideHeaderBackgroundColor: "",
                    textBlockBackgroundColor: "",
                    bulletBlockTextdColor: "",
                    bulletBlockBackgroundColor: "",
                    backgroundColor: "",
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
                }}
            >
                {story()}
            </div>
        ),
    ],
    parameters: {
        componentSubtitle: "Displays a Captioned Bullet List with TextBlock, BulletBlock and a SlideHeader, we can switch the slideHeader with header image by removing the title and subtitle from prop, and by giving the image link as prop we can see an image. If the title, subtitle, and image are provided together, only the slideHeader is visible",
        a11y: { disable: true },
        docs: {
            iframeHeight: 400,
        },
    },
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = (args) => <DosAndDonts {...args} />;
export const Default = Template.bind({});
Default.args = {
    data: {
        title: "Neque porro quisquam est qui dolorem",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl.",
        options: [
            {
                correct: "checked",
                text: "DOs",
            },
            {
                correct: "",
                text: "DON'Ts",
            },
        ],
        bullets: [
            "DO Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Quisque sed turpis vel lectus suscipit auctor",
            "Ut venenatis odio vestibulum, dictum augue ac, consequat dolor."
        ],
        reBullets: [
            "Don't Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Quisque sed turpis vel lectus suscipit auctor",
            "Ut venenatis odio vestibulum, dictum augue ac, consequat dolor."
        ],
    },
    isChoice: false,
    asEmphasis: "contained",
    slideId: 0,
    asVariant: "warning",
    withColor: {
        slideHeaderTextColor: "#FFFFFF",
        slideHeaderAccentColor: "#AD2929",
        slideHeaderBackgroundColor: "#ad292980",
        textBlockBackgroundColor: "#ff000000",
        bulletBlockTextColor: "#ffffff",
        bulletBlockBackgroundColor: "#ad292980",
        backgroundColor: "",
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
            code: `<DosAndDonts {...${JSON.stringify(Default.args, null, 2)}}/>`,
        },
    },
};
// -------------------------------------------------------------
// DOsDON'TsWithImage
// -------------------------------------------------------------
export const DOsDONTsWithImage = Template.bind({});
DOsDONTsWithImage.args = {
    data: {
        title: "Neque porro quisquam est qui dolorem",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl.",
        options: [
            {
                correct: "checked",
                text: "DOs",
            },
            {
                correct: "",
                text: "DON'Ts",
            },
        ],
        image: {
            id: "header-image",
            extention: ""
        },
        bullets: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Quisque sed turpis vel lectus suscipit auctor",
            "Ut venenatis odio vestibulum, dictum augue ac, consequat dolor."
        ],
        reBullets: [
            "R Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Quisque sed turpis vel lectus suscipit auctor",
            "Ut venenatis odio vestibulum, dictum augue ac, consequat dolor."
        ],
    },
    imageLibrary: [{
        id: "header-image",
        image: "https://i.pinimg.com/564x/7e/bd/95/7ebd9590368fb4bef3bfd7292f0523bd.jpg"
    }],
    isChoice: false,
    asEmphasis: "contained",
    slideId: 0,
    asVariant: "warning",
    withColor: {
        slideHeaderTextColor: "#FFFFFF",
        slideHeaderAccentColor: "#AD2929",
        slideHeaderBackgroundColor: "#ad292980",
        textBlockBackgroundColor: "#ff000000",
        bulletBlockTextColor: "#ffffff",
        bulletBlockBackgroundColor: "#ad292980",
        backgroundColor: "",
    },
    withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
    },
    isHidden: false,
};
DOsDONTsWithImage.parameters = {
    docs: {
        source: {
            code: `<DosAndDonts {...${JSON.stringify(DOsDONTsWithImage.args, null, 2)}}/>`,
        },
    },
};
// -------------------------------------------------------------
// DosDontswithBackgroundImage
// -------------------------------------------------------------
export const DosDontswithBackgroundImage = Template.bind({});
DosDontswithBackgroundImage.args = {
    data: {
        title: "Neque porro quisquam est qui dolorem",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl.",
        options: [
            {
                correct: "checked",
                text: "DOs",
            },
            {
                correct: "",
                text: "DON'Ts",
            },
        ],
        backgroundImage: {
            id: "background-image",
            extention: ""
        },
        bullets: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Quisque sed turpis vel lectus suscipit auctor",
            "Ut venenatis odio vestibulum, dictum augue ac, consequat dolor."
        ],
        reBullets: [
            "R Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Quisque sed turpis vel lectus suscipit auctor",
            "Ut venenatis odio vestibulum, dictum augue ac, consequat dolor."
        ],
    },
    imageLibrary: [{
        id: "background-image",
        image: "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg"
    }],
    isChoice: false,
    asEmphasis: "contained",
    slideId: 0,
    asVariant: "warning",
    withColor: {
        slideHeaderTextColor: "#FFFFFF",
        slideHeaderAccentColor: "#AD2929",
        slideHeaderBackgroundColor: "#ad292980",
        textBlockBackgroundColor: "#ff000000",
        bulletBlockTextColor: "#ffffff",
        bulletBlockBackgroundColor: "#ad292980",
        backgroundColor: "",
    },
    withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
    },
    isHidden: false,
};
DosDontswithBackgroundImage.parameters = {
    docs: {
        source: {
            code: `<DosAndDonts {...${JSON.stringify(DosDontswithBackgroundImage.args, null, 2)}}/>`,
        },
    },
};