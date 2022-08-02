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
                link: "www.quodeck.com"
            },
            onClick: () => { },
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
    hasValid("labels", args);
    hasValid("animations", args);
    hasValid("icons", args);
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
                isActive={false}

                withLabel={null}
                withIcon={null}
                withColors={null}
                withAnimation={null}

                isDisabled={false}
                isHidden={false}
                isFluid={false}
                isCircular={true}

                onClick={() => { }} />
        );
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
                onClick={() => { }}
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
                onClick={() => { }}
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
                onClick={() => { }}
            />)
            const tree = component.toJSON()
            act(() => {
                tree.props.onMouseEnter()
            })
        });
    it("should render correctly when hovered & withIcon",
        () => {
            const component = renderer.create(<IconLink
                link="https://quodeck.com/"
                isActive={true}
                withIcon={{
                    icon: "fas fa-desktop"
                }}
                onClick={() => { }}
            />)
            const tree = component.toJSON()
            act(() => {
                tree.props.onMouseDown()
            })
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
                onClick={() => { }}
            />
        );
        const tree = component.toJSON();
        act(() => {
            tree.props.onMouseEnter();
            tree.props.onMouseLeave();
            tree.props.onMouseUp();
        });
    });

    it('should pass conditional true when the slide is selected {true} from the props ', () => {
        component.setProps({
            link: "https://quodeck.com/",
            isActive: true,
            props: {
                asVariant: "primary",
            }
        })
        component.find(".qui-iconlink").simulate("click");
        expect(component.exists()).toBe(true);
    });

});

