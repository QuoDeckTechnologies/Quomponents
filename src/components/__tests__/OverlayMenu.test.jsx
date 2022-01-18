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
    let mockFn = jest.fn();
    let onClick = jest.fn();

    const dictionary = JSON.stringify({
        en: {
            OverlayMenu: { label: "Aruna Asrani" },
        },
        hi: {
            OverlayMenu: { label: "अरुणा असरानी" },
        },
    });

    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <OverlayMenu
                asVariant="primary"
                asSize="normal"
                asFloated="none"

                withColor={null}
                withIcon={null}
                withAnimation={null}
                withTranslation={null}

                isHidden={false}
                isDisabled={false}

                content={[
                    {
                        icon: "fas fa-user-edit",
                        label: "Edit Profile",
                    }]}
                withUser={""}

                onClick={onClick}
            />
        );
    });
    // -------------------------------------
    it("OverlayMenu should render correctly without throwing an error", () => {
        expect(component.exists()).toBe(true);
    });

    it("OverlayMenu should render correctly without throwing an error if Iconlink is present", () => {
        expect(component.find("IconLink").exists()).toBe(true);
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
                format: "caption",
                content: "Aruna Asrani",
                textColor: "Black",
            }
        });
        const divTag = component.find("div").at(4).props()
        expect(divTag.children).toBe('Aruna Asrani')
    })

    it("OverlayMenu should render correctly if label's style", () => {
        component.setProps({
            withLabel: {
                format: "caption",
                content: "Aruna Asrani",
                textColor: "Black",
            }
        });
        const divTag = component.find("div").at(4).props()
        expect(divTag.style.color).toBe('Black')
    })

    it("should render correctly with translation",
        () => {
            component.setProps({
                withTranslation: {
                    lang: "en",
                    tgt: "OverlayMenu:",
                    dictionary: dictionary,
                },
            });
            expect(component.exists()).toBe(true);
        });

    it("should render correctly if translation object is not returned",
        () => {
            component.setProps({
                withTranslation: {
                    lang: "hi",
                    tgt: "",
                    dictionary: dictionary,
                }
            });
            expect(component.exists()).toBe(true);
        });
});

