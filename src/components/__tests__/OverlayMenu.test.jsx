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
                asVariant="primary"
                asSize="normal"
                asFloated="none"

                withColor={null}
                withIcon={null}
                withAnimation={null}
                withTranslation={null}

                isHidden={false}
                isDisabled={false}
                tObj={null}

                // content={[
                //     {
                //         icon: "fas fa-user-edit",
                //         label: "Edit Profile",
                //     }]}
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
        expect(component.find("IconLink").exists()).toBe(false);
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

                withTranslation: {
                    lang: "hi",
                    tgt: "OverlayMenu",
                    dictionary: dictionary,
                },
                content: [
                    {
                        label: "प्रोफ़ाइल संपादित करें",
                    }],
            });
            expect(component.exists()).toBe(true);
        });
    it("should render correctly with translation",
        () => {
            component.setProps({

                withTranslation: {
                    lang: "en",
                    tgt: "OverlayMenu",
                    dictionary: dictionary,
                },
                content: [
                    {
                        label: "Edit Profile",
                    }],
            });
            expect(component.exists()).toBe(true);
        });
    // it('should call mock function when button is clicked', () => {
    //     const tree = shallow(
    //         <OverlayMenu name='button test' onClick={mockFn} />
    //     );
    //     tree.simulate('click');
    //     expect(mockFn).toBeCalled();
    // });
});

