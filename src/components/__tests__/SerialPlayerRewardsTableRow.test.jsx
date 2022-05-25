//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
import renderer, { act } from "react-test-renderer";
//--------------------------------------
// Import Components
// -------------------------------------
import SerialPlayerRewardsTableRow from "../SerialPlayerRewardsTableRow/SerialPlayerRewardsTableRow.react";
import Button from "../Buttons/Button/Button.react";
import IconBlock from "../IconBlock/IconBlock.react";

describe("SerialPlayerRewardsTableRow", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <SerialPlayerRewardsTableRow
                content={{
                    name: "Kardin Herwitz",
                    reward: "12",
                    phone: "0000000000",
                    cohort: "Unilever",
                }}
                withColor={null}
                withIcon={null}
                isHidden={false}
                isDisabled={false}
                onClick={(e) => {
                    console.log(e);
                }}
            />
        );
    });
    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
    });
    it("should render correctly with empty content", () => {
        component.setProps({
            content: {},
        });
        expect(component.exists()).toBe(true);
    });
    it('Test click event Button', () => {
        const button = shallow((<SerialPlayerRewardsTableRow onClick={() => console.log("testing click on Button")} />));
        button.find('Button').simulate('click');
    });
    it('Test click event IconBlock', () => {
        component.find(IconBlock).simulate('click')
    });
    it("should render correctly when passed withColor props", () => {
        let colors = {
            textColor: "#fff",
            buttonTextColor: "ff0023",
            buttonBackgroundColor: "ff0ff0",
            buttonHoverBackgroundColor: "ffff00",
            buttonHoverTextColor: "ff00ff",
        }
        component.setProps({ withColor: colors })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly with backgroundColor when status is set to dispatch", () => {
        component.setProps({
            content: {
                status: "dispatch"
            },
            withColor: {
                textColor: "#fff",
                buttonTextColor: "ff0023",
                buttonBackgroundColor: "ff0ff0",
                buttonHoverBackgroundColor: "ffff00",
                buttonHoverTextColor: "ff00ff",
            }
        })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly with backgroundColor when status is set to dispatched", () => {
        component.setProps({
            content: {
                status: "dispatched"
            },
            withColor: {
                textColor: "#fff",
                buttonTextColor: "ff0023",
                buttonBackgroundColor: "ff0ff0",
                buttonHoverBackgroundColor: "ffff00",
                buttonHoverTextColor: "ff00ff",
            }
        })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly with withColor prop when hovered on Button", () => {
        const component = renderer.create(
            <Button
                withColor={{
                    buttonTextColor: "ff0023",
                    dispatchedButtonBackgroundColor: "ff0ff0",
                    buttonHoverBackgroundColor: "ffff00",
                    buttonHoverTextColor: "ff00ff",
                }}
                onClick={() => console.log("testing")}
            />
        );
        const tree = component.toJSON();
        act(() => {
            tree.props.onMouseEnter();
        });
    });
    it("should render correctly when passed withAnimation props", () => {
        let animation = {
            animation: "zoom",
            duration: 0.5,
            delay: 0,
        }
        component.setProps({ withAnimation: animation })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed withIcon prop", () => {
        component.setProps({
            withIcon: {
                name: 'testIcon',
                size: "1em",
                position: "left"
            }
        })
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
    it("should render correctly when passed isHidden props as false", () => {
        component.setProps({ isHidden: false })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed isHidden props as true", () => {
        component.setProps({ isHidden: true })
        expect(component.exists()).toBe(true);
    })
});