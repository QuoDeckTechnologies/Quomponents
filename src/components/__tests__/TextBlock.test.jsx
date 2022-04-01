//--------------------------------------
// Import from NPM
// -------------------------------------
import { mount } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import TextBlock from "../TextBlock/TextBlock.react";

describe("TextBlock", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;
    beforeEach(() => {
        jest.resetAllMocks();
        component = mount(
            <TextBlock
                content=""
                opacity=""
                position="left-top"
                asFloated="inline"
                withColor={{
                    backgroundColor: "#ffc900",
                    textColor: "#666666",
                }}
                withLabel={null}
                withAnimation={null}
                withTranslation={null}
                isHidden={false}
                isDisabled={false}
                conversation={true}
            />
        );
    });

    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
    });
    it("should render correctly with position is changed", () => {
        component.setProps({
            position: "left-top"
        })
    });
    it("should render correctly with position is changed to right-top", () => {
        component.setProps({
            position: "right-top"
        })
    });
    it("should render correctly with position is changed to right-bottom", () => {
        component.setProps({
            position: "right-bottom"
        })
    });
    it("should render correctly with position is changed to left-bottom", () => {
        component.setProps({
            position: "left-bottom"
        })
    });
    it("should render correctly with content", () => {
        component.setProps({
            content: "",
            children: "Children",
        });
        expect(component.exists()).toBe(true);
    });
    it("should render correctly when passed withColor props", () => {
        let colors = {
            backgroundColor: "#fff",
            textColor: "#00FFFF",
        }
        component.setProps({ withColor: colors })
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

});
