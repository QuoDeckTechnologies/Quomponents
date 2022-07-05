//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from 'enzyme';

//--------------------------------------
// Import Components
// -------------------------------------
import MobileToolbar from '../MobileToolbar/MobileToolbar.react'
import ArcMenu from "../ArcMenu/ArcMenu.react"
import IconLink from '../Buttons/IconLink/IconLink.react'

describe("MobileToolbar", () => {
    let component;

    const dictionary = JSON.stringify({
        hi: {
            mobileToolbar: {
                title: "संपादन मोड",
                content: [
                    { label: "पाठ्यक्रम" },
                    { label: "नगेट्स" },
                    { label: "परीक्षण" },
                    { label: "प्रतियोगिता" },
                    { label: "संदेश" },
                ]
            },
        },
    });

    let setState = jest.fn();
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <MobileToolbar
                lable={"Edit"}
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
                asEmphasis="editing"
                asVariant="primary"
                withColor={null}
                withAnimation={null}
                withTranslation={null}
                isDisabled={false}
                isHidden={false}
                isCircular={true}
                onClick={() => { }} />
        );
    });

    it("MobileToolbar", () => {
        component = shallow(<MobileToolbar onClick={() => { }} />);
    });

    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
    });

    it("should render correctly with translation", () => {
        component.setProps({
            asEmphasis: "default",
            withTranslation: {
                lang: "hi",
                tgt: "mobileToolbar",
                dictionary: dictionary,
            },
        });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly with translation", () => {
        component.setProps({
            asEmphasis: "editing",
            withTranslation: {
                lang: "hi",
                tgt: "mobileToolbar",
                dictionary: dictionary,
            },
        });
        expect(component.exists()).toBe(true);
    });

    it("should call setState when click", () => {
        component = shallow(<MobileToolbar
            content={[
                {
                    icon: "fa fa-share",
                    label: "Certificate",
                    format: "caption",
                    link: "https://quodeck.com/",
                },
            ]}
            onClick={setState} />);
        component.find(IconLink).at(0).simulate("click");
    });

    it("should render correctly when passed asVariant prop as primary", () => {
        component.setProps({ asVariant: "primary" })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed asVariant prop as secondary", () => {
        component.setProps({ asVariant: "secondary" })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed asVariant prop as warning", () => {
        component.setProps({ asVariant: "warning" })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed asVariant prop as error", () => {
        component.setProps({ asVariant: "error" })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed asEmphasis prop as default ", () => {
        let colors = {
            backgroundColor: "#fff",
            accentColor: "#FF0000",
            textColor: "#00FFFF",
            hoverBackgroundColor: "#0000FF",
            hoverTextColor: "	#00008B",
        }
        component.setProps({ asEmphasis: "default" })
        component.setProps({ withColor: colors })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed asEmphasis prop as editing", () => {
        component.setProps({
            asEmphasis: "editing"
        });
        component.update();
        expect(component.find(ArcMenu).exists()).toBe(true);
    });

    it("should render correctly when passed asVariant prop as success", () => {
        component.setProps({ asVariant: "success" })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed withColor props", () => {
        let colors = {
            backgroundColor: "#fff",
            accentColor: "#FF0000",
            textColor: "#00FFFF",
            hoverBackgroundColor: "#0000FF",
            hoverTextColor: "	#00008B",
        }
        component.setProps({ withColor: colors })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed withAnimation props", () => {
        let animation = {
            animation: "zoom",
            duration: 0.5,
            delay: 0,
        }
        component.setProps({ withAnimation: animation })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed isHidden props as false", () => {
        component.setProps({ isHidden: false })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed isHidden props as true", () => {
        component.setProps({ isHidden: true })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed isDisabled props as false", () => {
        component.setProps({ isDisabled: false })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed isDisabled props as true", () => {
        component.setProps({ isDisabled: true })
        expect(component.exists()).toBe(true);
    })
});


