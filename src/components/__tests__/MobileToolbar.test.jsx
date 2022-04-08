//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from 'enzyme';


//--------------------------------------
// Import Components
// -------------------------------------
import MobileToolbar from '../Buttons/MobileToolbar/MobileToolbar.react'
import ArcMenu from "../ArcMenu/ArcMenu.react"
import IconLink from '../Buttons/IconLink/IconLink.react'
describe("MobileToolbar", () => {
    let component;
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
                currentLink="https://quodeck.com/"
                asEmphasis="editing"
                asVariant="primary"
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
                isDisabled={false}
                isHidden={false}
                isCircular={true}
                onClick={() => console.log("MobileToolbar testing")} />
        );
    });
    it("should render correctly without throwing error", () => {
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
            onClick={setState} />);
        component.find(IconLink).at(0).simulate("click");
        component.find(IconLink).at(1).simulate("click");
        component.find(IconLink).at(2).simulate("click");
        component.find(IconLink).at(3).simulate("click");
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


