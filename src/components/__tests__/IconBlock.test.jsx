//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import IconBlock from "../IconBlock/IconBlock.react";

describe("Button", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;

    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <IconBlock
                asEmphasis="contained"
                asSize="normal"
                asPadded="normal"
                asFloated="inline"
                withColor={null}
                withIcon={null}
                withAnimation={null}
                withTranslation={null}
                isHidden={false}
                isDisabled={false}
                onClick={() => console.log("IconBlock Testing")}
            />
        );
    });

    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed color props", () => {
        component.setProps({ withColor: { backgroundColor: "#000" } })
        component.setProps({ withIcon: { color: "#fff" } })
        expect(component.find("div").at(1).props().style.background).toBe("#000")
        expect(component.find("i").at(0).props().style.color).toBe("#fff")
    });

    it("should render correctly when passed emphasis prop as outlined", () => {
        component.setProps({ asEmphasis: "outlined" })
        component.setProps({ withColor: { backgroundColor: "#000" } })
        component.setProps({ withIcon: { icon: "fas fa-book", color: "#fff" } })
        expect(component.find("i").at(0).props().style.color).toBe("#000")
    })
    it("should render correctly when passed emphasis prop as text", () => {
        component.setProps({ asEmphasis: "text" })
        component.setProps({ withColor: { backgroundColor: "#000" } })
        component.setProps({ withIcon: { icon: "fas fa-book", color: "#fff" } })
        expect(component.find("i").at(0).props().style.color).toBe("#fff")
    })
});
