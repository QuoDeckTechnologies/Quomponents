//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount, render } from "enzyme";
import renderer, { act } from "react-test-renderer";
//--------------------------------------
// Import from Config
// -------------------------------------

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
                    title: "title", image: ""
                }]}
                asFloated="none"
                asSize="normal"
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

    it("should render correctly if Floated is 'none' and size is 'normal' ",
        () => {
            component.setProps({
                asFloated: "none",
                asSize: "normal",
            });
            expect(component.exists()).toBe(true);
        });

    it("should render correctly if isHidden toggled as true",
        () => {
            component.setProps({ isHidden: true });
            expect(component.exists()).toBe(true);
        });
    it("should render correctly without throwing error when clicked on button", () => {
        component.setProps({
            content: [{
                image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
                title: "The boot space in Hyundai Elantra is 420 L"
            }]
        })
        component.find(".qui-list-title").simulate("click")
        console.log(component.find(".qui-list-image").props().style);
        expect(component.find(".qui-list-title").props().style.order).toEqual(2);
        // component.find(".qui-list-image").simulate("click");
        // expect(component.exists()).toBe(false);
    });
});
