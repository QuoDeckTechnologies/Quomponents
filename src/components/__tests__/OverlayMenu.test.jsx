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
                onClick={onClick}
            />
        );
    });
    // -------------------------------------
    it("OverlayMenu should render correctly without throwing an error", () => {
        expect(component.exists()).toBe(true);
    })

    it("OverlayMenu should render correctly without throwing an error if Iconlink is present", () => {
        expect(component.find("IconLink").exists()).toBe(false);
    })

    it("OverlayMenu should render correctly without throwing an error if Avatar is present", () => {
        expect(component.find("Avatar").exists()).toBe(true);
    })

    it("OverlayMenu should render correctly without throwing an error if i tag is present", () => {
        expect(component.find("i").exists()).toBe(true);
    })

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

    it("should render correctly with translation", () => {
        component.setProps({
            withLabel: {
                format: "label",
                content: "Aruna Asrani",
                textColor: "Black",
            },
            withTranslation: {
                lang: "hi",
                tgt: "OverlayMenu",
                dictionary: dictionary,
            },
        });
        expect(component.exists()).toBe(true);
    })

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

    it("should render correctly when passed asVariant prop as success", () => {
        component.setProps({ asVariant: "success" })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed asSize prop as tiny", () => {
        component.setProps({ asSize: "tiny" })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed asSize prop as small", () => {
        component.setProps({ asSize: "small" })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed asSize prop as normal", () => {
        component.setProps({ asSize: "normal" })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed asSize prop as big", () => {
        component.setProps({ asSize: "big" })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed asSize prop as huge", () => {
        component.setProps({ asSize: "huge" })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed asSize prop as massive", () => {
        component.setProps({ asSize: "massive" })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed asFloated prop as left", () => {
        component.setProps({ asFloated: "left" })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed asFloated prop as right", () => {
        component.setProps({ asFloated: "right" })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed asFloated prop as inline", () => {
        component.setProps({ asFloated: "inline" })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed asFloated prop as none", () => {
        component.setProps({ asFloated: "none" })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed withColor props", () => {
        let colors = {
            backgroundColor: "#fff",
            accentColor: "#FF0000",
            textColor: "#00FFFF",
            hoverTextColor: "#00008B",
        }
        component.setProps({ withColor: colors })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed withIcon props", () => {
        let icon = { icon: "fa fa-user", size: "1em", position: "left" }
        component.setProps({ withIcon: icon })
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

