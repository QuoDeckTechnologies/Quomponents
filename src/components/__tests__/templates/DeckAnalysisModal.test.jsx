//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount } from "enzyme";
import { render } from "@testing-library/react";
//--------------------------------------
// Import Components
// -------------------------------------
import DeckAnalysisModal from "../../Templates/DeckAnalysisModal/DeckAnalysisModal.react";

describe("DeckAnalysisModal", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <DeckAnalysisModal
                isOpen={true}
                asVariant="primary"
                asSize="normal"
                withColor={null}
                withAnimation={null}
                isDisabled={false}
                isHidden={false}
                onClick={() => { "test" }}
            />
        );
    });

    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
    });

    it("should render correctly without throwing error when component mounts", () => {
        component = mount(
            <DeckAnalysisModal
                isOpen={true}
                asVariant="primary"
                withColor={null}
                withAnimation={null}
                isDisabled={false}
                isHidden={false}
                onClick={() => { "test" }}
            />
        );
    });

    it("should render correctly without throwing error when component unmounts", () => {
        const { unmount } = render(
            <DeckAnalysisModal
                isOpen={false}
                asVariant="primary"
                withColor={null}
                withAnimation={null}
                isDisabled={false}
                isHidden={false}
                onClick={() => { "test" }}
            />
        );
        unmount();
    });

    it("should render correctly without throwing error when clicked close icon", () => {
        component.find("ArcMenu").simulate("click");
        component.find("Button").simulate("click");
        expect(component.exists()).toBe(true);
    });

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
});
