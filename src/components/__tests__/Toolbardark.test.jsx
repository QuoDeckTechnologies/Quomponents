import { shallow, mount, render } from 'enzyme';
import renderer from "react-test-renderer";

//--------------------------------------
// Import Components
// -------------------------------------
import ToolbarDark from '../Buttons/ToolbarDark/ToolbarDark.react'
describe("ToolbarDark", () => {
    const dictionary = JSON.stringify({

        hi: {
            ToolbarDark: {
                content: [
                    { label: "प्रमाणपत्र" },
                    { label: "बटुआ" },
                    { label: "पुरस्कार" },
                    { label: "रिपोर्ट" },
                ]
            },
        },
    });
    let component;

    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <ToolbarDark
                content={[
                    {
                        icon: "fa fa-share",
                        label: "Certificate",
                        format: "caption",
                        link: "https://quodeck.com/",
                    },
                    {
                        icon: "fa fa-wallet",
                        label: "Wallet",
                        format: "caption",
                        link: "https://www.google.com/",
                    },
                    {
                        icon: "fa fa-gift",
                        label: "Rewards",
                        format: "caption",
                        link: "https://github.com/",
                    },
                    {
                        icon: "fa fa-chart-pie",
                        label: "Reports",
                        format: "caption",
                        link: "https://www.youtube.com/",
                    },
                ]}

                asEmphasis="text"
                asVariant="primary"
                asSize="normal"
                asPadded="normal"
                asAligned="center"

                withColor={{
                    backgroundColor: "",
                    accentColor: "",
                    textColor: "",
                    hoverBackgroundColor: "",
                    hoverTextColor: "",
                }}
                withAnimation={{
                    animation: "zoom",
                    duration: 0.5,
                    delay: 0,
                }}
                withTranslation={{
                    lang: "hi",
                    tgt: "ToolbarDark",
                    dictionary: dictionary,
                }}

                isDisabled={false}
                isHidden={false}
                isFluid={false}
                isCircular={true}
                onClick={() => {}} />
        );
    });

    it("ToolbarDark", () => {
        component = shallow(<ToolbarDark onClick={() => {}} />);

    });

    it("should render correctly without throwing error",
        () => {
        expect(component.exists()).toBe(true);
    });

    it("should render correctly if variant is 'primary' and size is 'normal' ",
        () => {
        component.setProps({
                asVariant: "primary",
                asSize: "normal",
        });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly if withColor props define null",
        () => {
        component.setProps({ withColor: null });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly without withColor prop", () => {
        component.setProps({
            withColor: null,
        });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly with isDisabled as true", () => {
        component.setProps({
            isDisabled: true,
        });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly with isHidden as true", () => {
        component.setProps({
            isHidden: true,
        });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly with different colors", () => {
        component.setProps({
            withColor: {
                backgroundColor: "red",
                accentColor: "green",
                textColor: "blue",
            },
        });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly with different animation", () => {
        component.setProps({
            withAnimation: {
                animation: "collapse",
                duration: 0.5,
                delay: 0,
            },
        });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly if content has objects in it", () => {
        component.setProps({
            content: [
                {
                    icon: "fa fa-share",
                    label: "Certificate",
                    format: "caption",
                    link: "https://quodeck.com/",
                },
            ]
        });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly if content are not specified", () => {
        component.setProps({
            content: [],
        });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly with empty props which are not required", () => {
        component.setProps({
            content: [],
            withColor: {},
            withAnimation: {},
            withTranslation: {},
            isDisabled: null,
            isHidden: null
        });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly with translation",
        () => {
        component.setProps({

                withTranslation: {
                    lang: "hi",
                    tgt: "ToolbarDark",
                    dictionary: dictionary,
                },
        });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly with translation",
    () => {
    component.setProps({

            withTranslation: {
                lang: "hi",
                tgt: "",
                dictionary: dictionary,
            },
    });
          expect(component.exists()).toBe(true);
   });
    it("should render correctly with translation",
        () => {
         component.setProps({
                withTranslation: {
                    lang: "en",
                    tgt: "ToolbarDark",
                    dictionary: dictionary,
                },
    });
         expect(component.exists()).toBe(true);
    });

    it("should render correctly without tgt",
    () => {
     component.setProps({
            withTranslation: {
                lang: "en",
                tgt: "",
                dictionary: dictionary,
            },
            content: [
                { label: "Certificate" },
                { label: "Wallet" },
                { label: "Rewards" },
                { label: "Reports" },
            ]
    });
     expect(component.exists()).toBe(true);
});
});

