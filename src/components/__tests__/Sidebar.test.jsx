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
import Sidebar from "../Sidebar/Sidebar.react";
import ArcMenu from "../ArcMenu/ArcMenu.react";
describe("Sidebar", () => {
    // -------------------------------------
    // Run common tests
    // -------------------------------------
    const args = {
        target: Sidebar,
        required: {
            logo: "https://via.placeholder.com/150",
            content: [
                {
                    icon: "fa fa-home",
                    label: "Home",
                    active: true,
                    onClick: () => true,
                },
                {
                    icon: "fa fa-archive",
                    label: "Archives",
                    active: false,
                    onClick: () => true,
                },
            ],
        },
        translations: {},
    };

    hasValid("defaults", args);

    hasValid("positions", args);

    hasValid("colors", args);
    hasValid("animations", args);

    hasValid("hidden", args);
    // -------------------------------------
    // Run component specific tests
    // -------------------------------------
    let component;
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <Sidebar
                logo="https://via.placeholder.com/150"
                content={[
                    {
                        icon: "fa fa-home",
                        label: "Home",
                        active: true,
                        onClick: () => true,
                    },
                    {
                        icon: "fa fa-archive",
                        label: "Archives",
                        active: false,
                        onClick: () => true,
                    },
                ]}
            />
        );
    });

    it("should render correctly when editMode triggered", () => {
        component.setProps({
            editMode: {
                active: true,
                label: "Edit Mode",
                onClick: () => true,
            },
        });
        component.update();
        expect(component.find(ArcMenu).exists()).toBe(true);
    });

    it("should render correctly when passed noCourses props as true", () => {
        component.setProps({ noCourses: true });
        expect(component.exists()).toBe(true);
    });
    it("should render correctly when passed noCourses props as false", () => {
        component.setProps({ noCourses: false });
        expect(component.exists()).toBe(true);
    });
});
