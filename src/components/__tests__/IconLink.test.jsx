import { shallow, mount, render } from 'enzyme';
import renderer, { act } from "react-test-renderer";

//--------------------------------------
// Import Components
// -------------------------------------
import IconLink from '../Buttons/IconLink/IconLink.react'
describe("IconLink", () => {
    let component;

    const dictionary = JSON.stringify({
        en: {
            icon: { label: "Home" },
        },
        hi: {
            icon: { label: "होम" },
        },
    });

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
                withColor={{
                    backgroundColor: "",
                    accentColor: "",
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
    it("should render with withColor prop ",
        () => {
            component.setProps({
                withColor: {
                    backgroundColor: "#ffc900",
                    textColor: "#666666",
                    hoverBackgroundColor: "#666666",
                    hoverTextColor: "#ffc900",
                },
            })
            expect(component.exists()).toBe(true);
        });
    it("should render correctly with isCircular prop",
        () => {
            component.setProps({
                isCircular: true
            })
            expect(component.exists()).toBe(true);
        });
    it("should render correctly with withLabel prop",
        () => {
            component.setProps({
                withLabel: {
                    format: "caption",
                    content: "Content",
                    textColor: 'black'
                },
            })
            expect(component.exists()).toBe(true);
        });
    it("should render correctly with isCircular prop",
        () => {
            component.setProps({
                isCircular: true,
                content: '',
                withIcon: {
                    icon: 'fas fa-desktop'
                }
            })
            expect(component.exists()).toBe(true);
        });
    it("should render correctly with withColor prop when hovered",
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
    it("should render correctly with withColor prop and asEmphasis set to `text` when hovered",
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
    it("should render correctly with withColor prop and asEmphasis set to `outlined` when hovered",
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
    it("should render correctly with withColor prop and asEmphasis set to `contained` when hovered",
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
    it("should render correctly when hovered",
        () => {
            const component = renderer.create(<IconLink onClick={() => console.log('testing')} />)
            const tree = component.toJSON()
            act(() => {
                tree.props.onMouseLeave()
                tree.props.onMouseEnter()
            })
        });
    it("should render correctly when hovered with translation",
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

    it("should render correctly without throwing error",
        () => {
            expect(component.exists()).toBe(true);
        });

    it("should render correctly if asPadded is 'normal' and AsAligned is 'center' ",
        () => {
            component.setProps({
                asPadded: "normal",
                asAligned: "center",
            });
            expect(component.exists()).toBe(true);
        });

    it("should render correctly if size is '' empty string",
        () => {
            component.setProps({
                asSize: "",
            });
            expect(component.exists()).toBe(true);
        });

    it("should render correctly if withIcon props contains special icon",
        () => {
            component.setProps({ withIcon: { icon: "fa fa-home" } });
            expect(component.exists()).toBe(true);
        });

    it('component have one qui-link class ', () => {
        expect(component.find('.qui-link').exists()).toBe(true)
    })

    it('Each component must have a one `qui` parent class', () => {
        expect(component.find('.qui').exists()).toBe(true)
    })

    it("should render correctly with isDisabled as true", () => {
        component.setProps({
            isDisabled: true,
        });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly with isCircular as true", () => {
        component.setProps({
            isCircular: true,
        });
        expect(component.exists()).toBe(true);
    });


    it("should render correctly if content are not specified", () => {
        component.setProps({
            content: [],
        });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly with empty props which are not required", () => {
        component.setProps({
            content: [],
            withColor: {},
            withAnimation: {},
            isDisabled: null,
            isHidden: null
        });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly with translation",
        () => {
            component.setProps({

                withTranslation: {
                    lang: "hi",
                    tgt: "icon",
                    dictionary: dictionary,
                },
                content: [
                    {
                        label: "Home",
                    }],
            });
            expect(component.exists()).toBe(true);
        });

});

