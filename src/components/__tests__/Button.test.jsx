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
import Button from "../Buttons/Button/Button.react";

describe("Button", () => {
    // -------------------------------------
    // Run common tests
    // -------------------------------------

    const args = {
        target: Button,
        required: {
            content: "Testing Button",
            onClick: () => console.log("Button Testing"),
        },
        translations: {
            tgt: "button",
            lang: { valid: "hi", invalid: "xx" },
            dictionary: JSON.stringify({
                hi: {
                    loading: "बस एक मिनट...",
                    button: { text: "बटन", label: "इसे बार-बार न दबाएं..." },
                },
            }),
        },
    };

    hasValid("defaults", args);

    hasValid("variants", args);
    hasValid("sizes", args);
    hasValid("positions", args);
    hasValid("padding", args);
    hasValid("alignment", args);

    hasValid("colors", args);
    hasValid("labels", args);
    hasValid("animations", args);
    hasValid("icons", args);
    hasValid("translations", args);

    hasValid("fluid", args);
    hasValid("hidden", args);
    hasValid("disabled", args);
    hasValid("loading", args);

    // -------------------------------------
    // Run component specific tests
    // -------------------------------------

    let component;
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <Button
                content="Testing Button"
                onClick={() => console.log("Button Testing")}
            />
        );
    });

    it("should render correctly with isCircular", () => {
        component.setProps({
            isCircular: true,
        });
        expect(component.exists()).toBe(true);
    });
    it("should render correctly with isCircular and empty content", () => {
        component.setProps({
            isCircular: true,
            content: "",
        });
        expect(component.exists()).toBe(true);
    });
    it("should render correctly with asEmphasis", () => {
        component.setProps({
            asEmphasis: "outlined",
        });
        expect(component.exists()).toBe(true);
    });
});
