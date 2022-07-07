import { shallow } from 'enzyme';
import renderer, { act } from "react-test-renderer";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";

//--------------------------------------
// Import Components
// -------------------------------------
import IconLink from '../Buttons/IconLink/IconLink.react'
describe("IconLink", () => {
    // -------------------------------------
    // Run common tests
    // -------------------------------------

    const args = {
        target: IconLink,
        required: {
            content: {
                link:"www.quodeck.com"
            },
            onClick: () => console.log("Button Testing"),
        },
        translations: {
            tgt: "icon",
            lang: { valid: "hi", invalid: "xx" },
            dictionary: JSON.stringify({
                en: {
                    icon: { label: "Home" },
                },
                hi: {
                    icon: { label: "होम" },
                },
            })
        },
    };

    hasValid("defaults", args);

    hasValid("variants", args);
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
            <IconLink
                asEmphasis="contained"
                asVariant="primary"
                asSize="normal"
                asFloated="none"
                asPadded="normal"
                asAligned="center"

                withLabel={{
                    format: "caption",
                    content: "",
                    textColor: "",
                    hoverTextColor: "",
                }}
                withIcon={{ icon: "fa fa-home" }}
                let colors={{
                    backgroundColor: "",
                    textColor: "",
                    hoverBackgroundColor: "",
                    hoverTextColor: "",
                }}
                withAnimation={{
                    animation: "zoom",
                    duration: 0.5,
                    delay: 0,
                }}

                isDisabled={false}
                isHidden={false}
                isFluid={false}
                isCircular={true}

                onClick={() => console.log("IconLink testing")} />
        );
    });

    it("should render correctly without throwing error",
        () => {
            expect(component.exists()).toBe(true);
        });
    it("should render correctly with withColor props when hovered",
        () => {
            const component = renderer.create(<IconLink
                withColor={{
                    backgroundColor: "#ffc900",
                    textColor: "#666666",
                    hoverBackgroundColor: "#666666",
                    hoverTextColor: "#ffc900",
                }}
                onClick={() => console.log('testing')}
            />)
            const tree = component.toJSON()
            act(() => {
                tree.props.onMouseEnter()
            })
        });
    it("should render correctly with withColor props and asEmphasis set to `text` when hovered",
        () => {
            const component = renderer.create(<IconLink
                asEmphasis="text"
                withColor={{
                    backgroundColor: "#ffc900",
                    textColor: "#666666",
                    hoverBackgroundColor: "#666666",
                    hoverTextColor: "#ffc900",
                }}
                onClick={() => console.log('testing')}
            />)
            const tree = component.toJSON()
            act(() => {
                tree.props.onMouseEnter()
            })
        });
    it("should render correctly with withColor props and asEmphasis set to `outlined` when hovered",
        () => {
            const component = renderer.create(<IconLink
                asEmphasis="outlined"
                withColor={{
                    backgroundColor: "#ffc900",
                    textColor: "#666666",
                    hoverBackgroundColor: "#666666",
                    hoverTextColor: "#ffc900",
                }}
                onClick={() => console.log('testing')}
            />)
            const tree = component.toJSON()
            act(() => {
                tree.props.onMouseEnter()
            })
        });
    it("should render correctly with withColor props and asEmphasis set to `contained` when hovered",
        () => {
            const component = renderer.create(<IconLink
                asEmphasis="contained"
                withColor={{
                    backgroundColor: "#ffc900",
                    textColor: "#666666",
                    hoverBackgroundColor: "#666666",
                    hoverTextColor: "#ffc900",
                }}
                onClick={() => console.log('testing')}
            />)
            const tree = component.toJSON()
            act(() => {
                tree.props.onMouseEnter()
            })
        });
    it("should render correctly when hovered or clicked",
        () => {
            const component = renderer.create(<IconLink onClick={() => console.log('testing')} />)
            const tree = component.toJSON()
            act(() => {
                tree.props.onMouseDown()
                tree.props.onMouseUp()
            })
        });
    it("should render correctly when hovered & withIcon",
        () => {
            const component = renderer.create(<IconLink
                withIcon={{
                    icon: "fas fa-desktop"
                }}
                onClick={() => console.log('testing')}
            />)
            const tree = component.toJSON()
            act(() => {
                tree.props.onMouseDown()
            })
        });

    it("should render correctly when passed withColor props", () => {
        let colors = {
            backgroundColor: "#fff",
            accentColor: "#FF0000",
            textColor: "#00FFFF",
            hoverBackgroundColor: "#0000FF",
            hoverTextColor: "	#00008B",
        }
        component.setProps({ withColor: colors })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed withIcon props", () => {
        let icon = { icon: "fas fa-share", size: "1em", position: "left" }
        component.setProps({ withIcon: icon })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed withLabel props", () => {
        let label = {
            format: "popover",
            content: "Click to share this...",
            textColor: "",
        }
        component.setProps({ withLabel: label })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly with isCircular set content", () => {
        component.setProps({
            isCircular: true,
            content: "Content",
            withIcon: {
                icon: "fas",
            },
        });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly with isCircular set and empty content", () => {
        component.setProps({
            isCircular: true,
            content: "",
            withIcon: {
                icon: "fas",
            },
        });
    });

    it("should render correctly with content", () => {
        component.setProps({
            content: "",
            children: "Children",
        });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when hovered", () => {
        const component = renderer.create(
            <IconLink onClick={() => console.log('testing')}
            />
        );
        const tree = component.toJSON();
        act(() => {
            tree.props.onMouseEnter();
            tree.props.onMouseLeave();
        });
    });
    it("should render correctly with withColor prop when hovered", () => {
        const component = renderer.create(
            <IconLink
                withColor={{
                    backgroundColor: "#ffc900",
                    textColor: "#666666",
                    hoverBackgroundColor: "#666666",
                    hoverTextColor: "#ffc900",
                }}
                onClick={() => console.log('testing')}
            />
        );
        const tree = component.toJSON();
        act(() => {
            tree.props.onMouseEnter();
        });
    });

});

