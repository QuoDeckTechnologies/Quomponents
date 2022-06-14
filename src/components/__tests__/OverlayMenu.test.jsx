// Import from NPM
// -------------------------------------
import React from "react";
import { shallow, mount, render } from "enzyme";

// Import Components
// -------------------------------------
import OverlayMenu from "../OverlayMenu/OverlayMenu.react";

describe("OverlayMenu", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;
    let onClick = jest.fn();
    const mockFn = jest.fn();


    const dictionary = JSON.stringify({

        hi: {
            OverlayMenu: {
                label: "अरुणा असरानी",
                content: [
                    { label: "प्रोफ़ाइल संपादित करें" },
                    { label: "खाता" },
                    { label: "प्रोफ़ाइल संपादित करें" },
                    { label: "खाता" },
                    { label: "प्रोफ़ाइल संपादित करें" },
                    { label: "खाता" },
                    { label: "खाता" },
                    { label: "प्रोफ़ाइल संपादित करें" },
                    { label: "खाता" },
                ]
            },
        },
    });

    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <OverlayMenu
                content={[]}
                withUser=""
                asVariant="primary"
                asSize="normal"
                asFloated="none"

                withColor={null}
                withIcon={null}
                withAnimation={null}
                withTranslation={null}

                isHidden={false}
                isDisabled={false}

                onClick={()=>{}}
            />
        );
    });
    it("OverlayMenu should render correctly without throwing an error", () => {
        expect(component.exists()).toBe(true);
    });

    it("should call setState when click", () => {
        component = shallow(<OverlayMenu
            content={[
                {
                    icon: "fa fa-share",
                    label: "Certificate",
                    format: "caption",
                },
                {
                    icon: "fa fa-wallet",
                    label: "Wallet",
                    format: "caption",
                },
                {
                    icon: "fa fa-gift",
                    label: "Rewards",
                    format: "caption",
                },
                {
                    icon: "fa fa-chart-pie",
                    label: "Reports",
                    format: "caption",
                },
            ]}
            onClick={() => { }} />);
        component.find("IconLink").at(0).simulate("click");
        component.find("IconLink").at(1).simulate("click");
        component.find("IconLink").at(2).simulate("click");
        component.find("IconLink").at(3).simulate("click");
    });


    it("OverlayMenu should render correctly without throwing an error if Avatar is present", () => {
        expect(component.find("Avatar").exists()).toBe(true);
    });

    it("OverlayMenu should render correctly without throwing an error if i tag is present", () => {
        expect(component.find("i").exists()).toBe(true);
    });

    it("OverlayMenu should render correctly if label isequal to 'Aruna Asrani' ", () => {
        component.setProps({
            withLabel: {
                format: "label",
                content: "Aruna Asrani",
                textColor: "Black",
            }
        });
        const divTag = component.find("div").at(4).props()
        expect(divTag.children).toBe('Aruna Asrani')
    })

    it("should render correctly with translation",
        () => {
            component.setProps({
                withLabel: {
                    format: "label",
                    content: "Aruna Asrani",
                    textColor: "Black",
                },
                withTranslation: {
                    lang: "en",
                    tgt: "OverlayMenu",
                    dictionary: dictionary,
                },
            });
            expect(component.exists()).toBe(true);
        });

    it("should render correctly with translation",
        () => {
            component.setProps({
                content: [],
                withUser: "",
                withTranslation: {
                    lang: "hi",
                    tgt: "OverlayMenu",
                    dictionary: dictionary,
                },
            });
            expect(component.exists()).toBe(true);
        });
    it("should render correctly with translation",
        () => {
            component.setProps({
                content: [],
                withUser: "",
                withTranslation: {
                    lang: "hi",
                    tgt: "",
                    dictionary: dictionary,
                },
            });
            expect(component.exists()).toBe(true);
        });
});

