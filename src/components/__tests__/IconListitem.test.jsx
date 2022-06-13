//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount, render } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import IconListItem from "../IconListItem/IconListItem/IconListItem.react";

describe("IconListItem", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component
    beforeEach(() => {
        jest.resetAllMocks();
        component = mount(
            <IconListItem
                content={[{
                    text: "", image: {}
                }]}
                imageLibrary={null}
                asEmphasis="conversation"
                asFloated="none"
                asSize="normal"
                withAnimation={{
                    animation: "zoom",
                    duration: 0.5,
                    delay: 0,
                }}
                withColor={{
                    textColor: "#666666",
                }}
                isHidden={false}
            />
        );
    });

    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed withColor props", () => {
        let colors = {
            textColor: "#ffffff",
        }
        component.setProps({ withColor: colors })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asEmphasis prop as conversation", () => {
        component.setProps({ asEmphasis: "conversation" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asEmphasis prop as list", () => {
        component.setProps({ asEmphasis: "list" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asFloated prop as left", () => {
        component.setProps({ asFloated: "left" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asFloated prop as right", () => {
        component.setProps({ asFloated: "right" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asFloated prop as inline", () => {
        component.setProps({ asFloated: "inline" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asFloated prop as none", () => {
        component.setProps({ asFloated: "none" })
        expect(component.exists()).toBe(true);
    });
    it("should render correctly when passed isHidden props as false", () => {
        component.setProps({ isHidden: false })
        expect(component.exists()).toBe(true);
    });
    it("should render correctly when passed isHidden prop as true", () => {
        component.setProps({ isHidden: true });
        expect(component.exists()).toBe(true);
    });
    it("should render correctly when passed withAnimation props", () => {
        let animation = {
            animation: "zoom",
            duration: 0.5,
            delay: 0,
        }
        component.setProps({ withAnimation: animation })
        expect(component.exists()).toBe(true);
    });
    // it("should render correctly without throwing error when pass content", () => {
    //     let value = [{
    //         image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
    //         text: "The boot space in Hyundai Elantra is 420 L"
    //     },
    //     {
    //         image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
    //         text: "The boot space in Hyundai Elantra is 420 L"
    //     },
    //     {
    //         image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
    //         text: "The boot space in Hyundai Elantra is 420 L"
    //     },]

    //     component.setProps({ content: value })
    //     expect(component.exists()).toBe(true);
    // });
    // it("should render correctly without throwing error when content props passed and asEmphasis as list", () => {
    //     let value = [{
    //         image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
    //         text: "The boot space in Hyundai Elantra is 420 L"
    //     },]
    //     component.setProps({ asEmphasis: "list" })
    //     component.setProps({ content: value })
    //     expect(component.exists()).toBe(true);
    // });
    it("should render correctly without throwing error when content props passed as null and asEmphasis as list ", () => {
        let item = [{
            image: {},
            text: ""
        },]
        component.setProps({ asEmphasis: "list" })
        component.setProps({ content: item })
        expect(component.exists()).toBe(true);
    });
});
