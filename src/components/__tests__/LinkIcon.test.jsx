import { shallow } from "enzyme";
import renderer, { act } from "react-test-renderer";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";

//--------------------------------------
// Import Components
// -------------------------------------
import LinkIcon from "../LinkIcon/LinkIcon.react";
describe("LinkIcon", () => {
    // -------------------------------------
    // Run common tests
    // -------------------------------------

    const args = {
        target: LinkIcon,
        required: {
            label: "Home",
            icon: "fa fa-home",
            onClick: () => { },
        },
        translations: {
            tgt: "icon",
            lang: { valid: "hi", invalid: "xx" },
            dictionary: JSON.stringify({
                en: {
                    label: "Home",
                },
                hi: {
                    label: "होम",
                },
            }),
        },
    };

    hasValid("defaults", args);

    hasValid("sizes", args);
    hasValid("positions", args);
    hasValid("padding", args);
    hasValid("alignment", args);

    hasValid("colors", args);
    hasValid("animations", args);
    hasValid("translations", args);

    hasValid("hidden", args);
    hasValid("disabled", args);


    let component;

    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <LinkIcon
                icon="fa fa-home"
                label="Home"
                active={false}
                onClick={() => { }} />
        );
    });
    it("should render correctly when hovered with active prop true", () => {
        component.setProps({
            active: true,
            withColor: {
                hoverBackgroundColor: "#666666",
                hoverTextColor: "#ffc900",
            }
        })
        component.find(".qui-link-icon").at(0).simulate("mouseenter");
        component.find(".qui-link-icon").at(0).simulate("mouseleave");
        component.find(".qui-link-icon").at(0).simulate("mousedown");
        component.find(".qui-link-icon").at(0).simulate("mouseup");
        expect(component.exists()).toBe(true);
    });
});
