import { shallow } from 'enzyme';
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

    it("should render correctly when passed asSize prop as tiny", () => {
        component.setProps({ asSize: "tiny" })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed asSize prop as small", () => {
        component.setProps({ asSize: "small" })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed asSize prop as normal", () => {
        component.setProps({ asSize: "normal" })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed asSize prop as big", () => {
        component.setProps({ asSize: "big" })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed asSize prop as huge", () => {
        component.setProps({ asSize: "huge" })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed asSize prop as massive", () => {
        component.setProps({ asSize: "massive" })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed asPadded prop as fitted", () => {
        component.setProps({ asPadded: "fitted" })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed asPadded prop as commpact", () => {
        component.setProps({ asPadded: "compact" })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed asPadded prop as normal", () => {
        component.setProps({ asPadded: "normal" })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed asPadded prop as relaxed", () => {
        component.setProps({ asPadded: "relaxed" })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed asFloated prop as left", () => {
        component.setProps({ asFloated: "left" })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed asFloated prop as right", () => {
        component.setProps({ asFloated: "right" })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed asFloated prop as inline", () => {
        component.setProps({ asFloated: "inline" })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed asFloated prop as none", () => {
        component.setProps({ asFloated: "none" })
        expect(component.exists()).toBe(true);
    })

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

    it("should render correctly when passed withAnimation props", () => {
        let animation = {
            animation: "zoom",
            duration: 0.5,
            delay: 0,
        }
        component.setProps({ withAnimation: animation })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed withTranslation props", () => {
        component.setProps({
            withTranslation: {
                lang: "hi",
                tgt: "",
                dictionary: dictionary,
            }
        })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly with withTranslation and withLabel prop", () => {
        component.setProps({
            content: "Content",
            withLabel: {
                format: "caption",
                content: "Content",
                textColor: "black",
            },
            withTranslation: {
                lang: "hi",
                tgt: "icon",
                dictionary: dictionary,
            },
        });
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

