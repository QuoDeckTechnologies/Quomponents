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
                imageLibrary={[
                    {
                        id: "iconlist-one",
                        image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
                    },
                    {
                        id: "iconlist-two",
                        image:
                            "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg",
                    }]}
                asEmphasis="conversation"
                asVariant="primary"
                withColor={{
                    textColor: "#666666",
                }}
                withAnimation={{
                    animation: "zoom",
                    duration: 0.5,
                    delay: 0,
                }}
                isHidden={false}
            />
        );
    });

    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
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

    it("should render correctly when passed asVariant prop as success", () => {
        component.setProps({ asVariant: "success" })
        expect(component.exists()).toBe(true);
    })

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

    it("should render correctly without throwing error when pass content", () => {
        let value = [{
            image: { id: "iconlist-one", extention: "" },
            text: "The boot space in Hyundai Elantra is 420 L"
        },
        {
            image: { id: "iconlist-two", extention: "" },
            text: "The boot space in Hyundai Elantra is 420 L"
        }]
        component.setProps({ content: value })
        expect(component.exists()).toBe(true);
    });

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
