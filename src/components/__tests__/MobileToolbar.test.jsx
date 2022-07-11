//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from 'enzyme';
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import Components
// -------------------------------------
import MobileToolbar from '../MobileToolbar/MobileToolbar.react'
import ArcMenu from "../ArcMenu/ArcMenu.react"
import IconLink from '../Buttons/IconLink/IconLink.react'

describe("MobileToolbar", () => {

    // -------------------------------------
    // Run common tests
    // -------------------------------------

    const args = {
        target: MobileToolbar,
        required: {
            content: [
                {
                    icon: "fa fa-share",
                    label: "Certificate",
                    format: "caption",
                    link: "https://quodeck.com/",
                },
            ],
            onClick: () => { }
        },
        translations: {
            tgt: "mobileToolbar",
            lang: { valid: "hi", invalid: "xx" },
            dictionary: JSON.stringify({
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
            })
        },
    };

    hasValid("defaults", args);

    hasValid("variants", args);

    hasValid("colors", args);
    hasValid("animations", args);
    hasValid("translations", args);

    hasValid("hidden", args);
    hasValid("disabled", args);
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

    // it("should render correctly when passed asEmphasis prop as default ", () => {
    //     let colors = {
    //         backgroundColor: "#fff",
    //         accentColor: "#FF0000",
    //         textColor: "#00FFFF",
    //         hoverBackgroundColor: "#0000FF",
    //         hoverTextColor: "	#00008B",
    //     }
    //     component.setProps({ asEmphasis: "default" })
    //     component.setProps({ withColor: colors })
    //     expect(component.exists()).toBe(true);
    // })

    // it("should render correctly when passed asEmphasis prop as editing", () => {
    //     component.setProps({
    //         asEmphasis: "editing"
    //     });
    //     component.update();
    //     expect(component.find(ArcMenu).exists()).toBe(true);
    // });

    // it("should render correctly when passed asVariant prop as success", () => {
    //     component.setProps({ asVariant: "success" })
    //     expect(component.exists()).toBe(true);
    // })

    // it("should render correctly when passed withColor props", () => {
    //     let colors = {
    //         backgroundColor: "#fff",
    //         accentColor: "#FF0000",
    //         textColor: "#00FFFF",
    //         hoverBackgroundColor: "#0000FF",
    //         hoverTextColor: "	#00008B",
    //     }
    //     component.setProps({ withColor: colors })
    //     expect(component.exists()).toBe(true);
    // })
});


