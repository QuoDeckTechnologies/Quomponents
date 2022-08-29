//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import Components
// -------------------------------------
import ColorSwatch from "../ColorSwatch/ColorSwatch.react";

describe("ColorSwatch", () => {
    // -------------------------------------
    // Run common tests
    // -------------------------------------
    const args = {
        target: ColorSwatch,
        required: {
        },
    };

    hasValid("defaults", args);

    hasValid("variants", args);
    hasValid("sizes", args);
    hasValid("positions", args);
    hasValid("padding", args);
    hasValid("alignment", args);

    hasValid("colors", args);

    hasValid("hidden", args);
    hasValid("disabled", args);    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component, colors;

    colors = {
        primaryColor: "#FFFFFF",
        accentColor: "#F88A8A",
        secondaryColor: "#EF2929",
        pageColor: "#685555",
    }
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <ColorSwatch
                withColor={null}
            />
        );
    });

    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
    });

    it("should render component with correct colors", () => {
        component.setProps({ withColor: colors })
        let page = component.find("div").at(2);
        let title = component.find("div").at(3);
        let subTitle = component.find("div").at(4);
        let footer = component.find("div").at(5);

        expect(page.props().style.backgroundColor).toBe("#685555")
        expect(title.props().style.backgroundColor).toBe("#FFFFFF")
        expect(subTitle.props().style.backgroundColor).toBe("#F88A8A")
        expect(footer.props().style.backgroundColor).toBe("#EF2929")
    });
});