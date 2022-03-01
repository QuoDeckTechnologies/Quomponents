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
import BulletBlock from "../BulletBlock/BulletBlock.react";

describe("BulletBlock", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;

    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <BulletBlock
                content={{
                    items: [
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "Quisque sed turpis vel lectus suscipit auctor",
                        "Ut venenatis odio vestibulum, dictum augue ac, consequat dolor."
                    ],
                }}
                asVariant="primary"
                asSize="normal"
                withColor={{
                    backgroundColor: "#C9878",
                    accentColor: "#ffffff",
                    textColor: "#b60d17",
                }}
                withAnimation={{
                    animation: "zoom",
                    duration: 0.5,
                    delay: 0,
                }}
                isDisabled={false}
                isHidden={false}
                onClick={() => console.log("bulletblock testing")}
            />
        );
    });

    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when clicked", () => {
        let component = renderer.create(<BulletBlock onClick={() => { }} />);
        let tree = component.toJSON();
        act(() => {
            tree.props.onClick();
        });
    });
});
